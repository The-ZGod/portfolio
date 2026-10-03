const profiles = [
    {
        name: "Codolio",
        href: "https://codolio.com/profile/ZGod",
    },
    {
        name: "LeetCode",
        href: "https://leetcode.com/u/OG_Aru/",
    },
    {
        name: "Codeforces",
        href: "https://codeforces.com/profile/theZGod",
    },
    {
        name: "CodeChef",
        href: "https://www.codechef.com/users/the_zgod",
    },
];

export default function CodingProfiles() {
    return (
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {profiles.map((profile) => (
                <a
                    key={profile.name}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 items-center justify-between border border-black/15 px-3 transition-colors hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-zinc-950"
                >
                    <span className="font-technical text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-400 transition-colors group-hover:text-zinc-200">
                        {profile.name}
                    </span>

                    <span className="text-xs text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                    </span>
                </a>
            ))}
        </div>
    );
}