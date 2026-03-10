import { useEffect, useRef } from "react";

export function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );
    const items = el.querySelectorAll(".fade-in");
    for (const item of items) {
      observer.observe(item);
    }
    return () => observer.disconnect();
  }, []);

  return ref;
}
