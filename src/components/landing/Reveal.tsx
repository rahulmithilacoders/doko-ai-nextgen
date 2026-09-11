import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", inView && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
