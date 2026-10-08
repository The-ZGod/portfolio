import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export const revalidate = 3600;

type PlatformStats = {
    solved: number | null;
    contests: number | null;
    maxRating: number | null;
};

type CodingStatsResponse = {
    leetcode: PlatformStats;
    codeforces: PlatformStats;
    codechef: PlatformStats;
    codolio: PlatformStats;
};

const LEETCODE_USERNAME = "OG_Aru";
const CODEFORCES_HANDLE = "theZGod";
const CODECHEF_USERNAME = "the_zgod";

const emptyStats = (): PlatformStats => ({
    solved: null,
    contests: null,
    maxRating: null,
});

async function leetcodeRequest(
    query: string,
    operationName: string,
) {
    const response = await fetch(
        "https://leetcode.com/graphql/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Referer: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/155 Safari/537.36",
            },
            body: JSON.stringify({
                query,
                variables: {
                    username: LEETCODE_USERNAME,
                },
                operationName,
            }),
            next: {
                revalidate: 3600,
            },
        },
    );

    if (!response.ok) {
        throw new Error(
            `LeetCode ${operationName} returned ${response.status}`,
        );
    }

    const data = await response.json();

    if (data.errors?.length) {
        throw new Error(
            `LeetCode ${operationName}: ${data.errors
                .map((error: { message: string }) => error.message)
                .join(", ")}`,
        );
    }

    return data?.data;
}

async function fetchLeetCode(): Promise<PlatformStats> {
    const solvedQuery = `
        query userProblemStats($username: String!) {
            matchedUser(username: $username) {
                submitStatsGlobal {
                    acSubmissionNum {
                        difficulty
                        count
                    }
                }
            }
        }
    `;

    const contestQuery = `
        query userContestRankingInfo($username: String!) {
            userContestRanking(username: $username) {
                attendedContestsCount
                rating
            }

            userContestRankingHistory(username: $username) {
                attended
                rating
            }
        }
    `;

    const [solvedData, contestData] = await Promise.allSettled([
        leetcodeRequest(
            solvedQuery,
            "userProblemStats",
        ),
        leetcodeRequest(
            contestQuery,
            "userContestRankingInfo",
        ),
    ]);

    let solved: number | null = null;

    if (solvedData.status === "fulfilled") {
        const submissionStats =
            solvedData.value?.matchedUser
                ?.submitStatsGlobal
                ?.acSubmissionNum ?? [];

        const all = submissionStats.find(
            (item: {
                difficulty: string;
                count: number;
            }) => item.difficulty === "All",
        );

        solved =
            all?.count ??
            submissionStats
                .filter(
                    (item: { difficulty: string }) =>
                        item.difficulty !== "All",
                )
                .reduce(
                    (
                        total: number,
                        item: { count: number },
                    ) => total + Number(item.count),
                    0,
                );
    } else {
        console.error(
            "LeetCode solved stats error:",
            solvedData.reason,
        );
    }

    let contests: number | null = null;
    let maxRating: number | null = null;

    if (contestData.status === "fulfilled") {
        const ranking =
            contestData.value?.userContestRanking;

        const history =
            contestData.value
                ?.userContestRankingHistory ?? [];

        contests =
            ranking?.attendedContestsCount ??
            history.filter(
                (contest: { attended: boolean }) =>
                    contest.attended,
            ).length;

        const ratings = history
            .filter(
                (contest: { attended: boolean }) =>
                    contest.attended,
            )
            .map(
                (contest: { rating: number }) =>
                    Number(contest.rating),
            )
            .filter(Number.isFinite);

        if (ratings.length > 0) {
            maxRating = Math.round(Math.max(...ratings));
        } else if (
            ranking?.rating !== null &&
            ranking?.rating !== undefined
        ) {
            maxRating = Math.round(
                Number(ranking.rating),
            );
        }
    } else {
        console.error(
            "LeetCode contest stats error:",
            contestData.reason,
        );
    }

    return {
        solved,
        contests,
        maxRating,
    };
}

async function codeforcesRequest(
    url: string,
) {
    const response = await fetch(url, {
        next: {
            revalidate: 3600,
        },
    });

    if (!response.ok) {
        throw new Error(
            `Codeforces returned ${response.status}`,
        );
    }

    const data = await response.json();

    if (data.status !== "OK") {
        throw new Error(
            data.comment ??
            "Codeforces API request failed",
        );
    }

    return data.result;
}

async function waitForCodeforcesLimit() {
    await new Promise((resolve) =>
        setTimeout(resolve, 2100),
    );
}

async function fetchCodeforces(): Promise<PlatformStats> {
    const handle = encodeURIComponent(
        CODEFORCES_HANDLE,
    );

    const user = await codeforcesRequest(
        `https://codeforces.com/api/user.info?handles=${handle}`,
    );

    await waitForCodeforcesLimit();

    const ratingHistory =
        await codeforcesRequest(
            `https://codeforces.com/api/user.rating?handle=${handle}`,
        );

    await waitForCodeforcesLimit();

    const submissions =
        await codeforcesRequest(
            `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=100000`,
        );

    const solvedProblems = new Set<string>();

    for (const submission of submissions ?? []) {
        if (submission.verdict !== "OK") {
            continue;
        }

        const problem = submission.problem;

        if (!problem) {
            continue;
        }

        const key = [
            problem.problemsetName ?? "",
            problem.contestId ?? "",
            problem.index ?? "",
            problem.name ?? "",
        ].join(":");

        solvedProblems.add(key);
    }

    const ratings = (ratingHistory ?? [])
        .map(
            (contest: {
                newRating: number;
            }) => Number(contest.newRating),
        )
        .filter(Number.isFinite);

    const maxRating =
        ratings.length > 0
            ? Math.max(...ratings)
            : Number(user?.[0]?.maxRating ?? 0);

    return {
        solved: solvedProblems.size,
        contests: ratingHistory?.length ?? 0,
        maxRating: maxRating || null,
    };
}

async function fetchCodeChef(): Promise<PlatformStats> {
    const response = await fetch(
        `https://www.codechef.com/users/${CODECHEF_USERNAME}`,
        {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/155 Safari/537.36",
            },
            next: {
                revalidate: 3600,
            },
        },
    );

    if (!response.ok) {
        throw new Error(
            `CodeChef returned ${response.status}`,
        );
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const text = $("body")
        .text()
        .replace(/\s+/g, " ")
        .trim();

    const contestsMatch = text.match(
        /No\.\s*of\s*Contests\s*Participated:\s*(\d+)/i,
    );

    const solvedMatch = text.match(
        /Total\s*Problems\s*Solved:\s*(\d+)/i,
    );

    const highestRatingMatch = text.match(
        /Highest\s*Rating\s*(\d+)/i,
    );

    const currentRatingMatch = text.match(
        /(\d+)\s*\(\+\d+\)\s*Rating/i,
    );

    const contests = contestsMatch
        ? Number(contestsMatch[1])
        : null;

    const solved = solvedMatch
        ? Number(solvedMatch[1])
        : null;

    const maxRating = highestRatingMatch
        ? Number(highestRatingMatch[1])
        : currentRatingMatch
            ? Number(currentRatingMatch[1])
            : null;

    return {
        solved,
        contests,
        maxRating,
    };
}

function buildCodolioStats(
    leetcode: PlatformStats,
    codeforces: PlatformStats,
    codechef: PlatformStats,
): PlatformStats {
    const solvedValues = [
        leetcode.solved,
        codeforces.solved,
        codechef.solved,
    ].filter(
        (value): value is number =>
            typeof value === "number",
    );

    const contestValues = [
        leetcode.contests,
        codeforces.contests,
        codechef.contests,
    ].filter(
        (value): value is number =>
            typeof value === "number",
    );

    const ratingValues = [
        leetcode.maxRating,
        codeforces.maxRating,
        codechef.maxRating,
    ].filter(
        (value): value is number =>
            typeof value === "number",
    );

    return {
        solved:
            solvedValues.length > 0
                ? solvedValues.reduce(
                    (total, value) =>
                        total + value,
                    0,
                )
                : null,

        contests:
            contestValues.length > 0
                ? contestValues.reduce(
                    (total, value) =>
                        total + value,
                    0,
                )
                : null,

        maxRating:
            ratingValues.length > 0
                ? Math.max(...ratingValues)
                : null,
    };
}

export async function GET() {
    const results = await Promise.allSettled([
        fetchLeetCode(),
        fetchCodeforces(),
        fetchCodeChef(),
    ]);

    const leetcode =
        results[0].status === "fulfilled"
            ? results[0].value
            : emptyStats();

    const codeforces =
        results[1].status === "fulfilled"
            ? results[1].value
            : emptyStats();

    const codechef =
        results[2].status === "fulfilled"
            ? results[2].value
            : emptyStats();

    if (results[0].status === "rejected") {
        console.error(
            "LeetCode error:",
            results[0].reason,
        );
    }

    if (results[1].status === "rejected") {
        console.error(
            "Codeforces error:",
            results[1].reason,
        );
    }

    if (results[2].status === "rejected") {
        console.error(
            "CodeChef error:",
            results[2].reason,
        );
    }

    const codolio = buildCodolioStats(
        leetcode,
        codeforces,
        codechef,
    );

    const response: CodingStatsResponse = {
        leetcode,
        codeforces,
        codechef,
        codolio,
    };

    return NextResponse.json(response);
}