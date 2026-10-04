type BlueprintHeadingProps = {
  children: React.ReactNode;
};

export default function BlueprintHeading({
  children,
}: BlueprintHeadingProps) {
  return (
    <div className="relative z-10 flex flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-dashed border-black/20 dark:border-white/15"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[-16px] z-20 size-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/50 bg-[var(--background)] dark:border-white/60"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-[-16px] z-20 size-[3px] translate-x-1/2 -translate-y-1/2 rounded-full border border-black/50 bg-[var(--background)] dark:border-white/60"
      />

      <div className="relative py-2">
        {children}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-dashed border-black/20 dark:border-white/15"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-[-16px] z-20 size-[3px] -translate-x-1/2 translate-y-1/2 rounded-full border border-black/50 bg-[var(--background)] dark:border-white/60"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-[-16px] z-20 size-[3px] translate-x-1/2 translate-y-1/2 rounded-full border border-black/50 bg-[var(--background)] dark:border-white/60"
        />
      </div>
    </div>
  );
}