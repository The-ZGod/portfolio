import { NextResponse } from "next/server";

const USERNAME = "OG_Aru";

const query = `
  query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        submissionCalendar
      }
    }
  }
`;

export async function GET() {
    try {
        const currentYear = new Date().getUTCFullYear();
        const years = [currentYear, currentYear - 1];

        const calendars = await Promise.all(
            years.map(async (year) => {
                const response = await fetch("https://leetcode.com/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Referer: `https://leetcode.com/u/${USERNAME}/`,
                    },
                    body: JSON.stringify({
                        query,
                        variables: {
                            username: USERNAME,
                            year,
                        },
                    }),
                    next: {
                        revalidate: 3600,
                    },
                });

                if (!response.ok) {
                    throw new Error(`LeetCode returned ${response.status}`);
                }

                const data = await response.json();

                return data?.data?.matchedUser?.userCalendar?.submissionCalendar;
            }),
        );

        const activity: Record<string, number> = {};

        for (const calendar of calendars) {
            if (!calendar) continue;

            const parsed =
                typeof calendar === "string" ? JSON.parse(calendar) : calendar;

            for (const [timestamp, count] of Object.entries(parsed)) {
                const date = new Date(Number(timestamp) * 1000)
                    .toISOString()
                    .slice(0, 10);

                activity[date] = Number(count);
            }
        }

        return NextResponse.json({
            username: USERNAME,
            activity,
        });
    } catch (error) {
        console.error("LeetCode activity error:", error);

        return NextResponse.json(
            {
                username: USERNAME,
                activity: {},
                error: "Unable to fetch LeetCode activity",
            },
            { status: 500 },
        );
    }
}