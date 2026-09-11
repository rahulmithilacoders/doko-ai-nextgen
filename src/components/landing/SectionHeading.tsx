import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <Reveal>
        <span className="eyebrow inline-flex items-center gap-2">
          <span className="h-px w-6 bg-border-strong" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={140}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t border-border py-20 md:py-28", className)}
    >
      <div className="shell">{children}</div>
    </section>
  );
}
