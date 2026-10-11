
export default function QuoteSection() {
    return (
        <footer className="relative w-full border-t border-dashed border-white/[0.12]">
            <div className="mx-auto flex min-h-[150px] w-full items-center justify-center md:w-[40vw]">
                <div className="w-full max-w-[520px] text-center">
                    <blockquote className="font-playfair text-[17px] italic leading-relaxed tracking-[-0.02em] text-zinc-300 sm:text-[16px]">
                        “Do so much work that it would be unreasonable
                        for you to not be successful.”
                    </blockquote>

                    <div className="mt-7 flex items-center justify-center gap-4">
                        <span className="h-px w-5 bg-white/15" />
                        <p className="font-technical text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                            Alex Hormozi
                        </p>
                        <span className="h-px w-5 bg-white/15" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
