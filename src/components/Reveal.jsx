import { useEffect, useRef } from "react";
export default function Reveal({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const node = ref.current;
    node.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.03 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      node.classList.remove("reveal-ready");
    };
  }, []);
  return <div ref={ref}>{children}</div>;
}
