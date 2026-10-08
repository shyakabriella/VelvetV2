"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
};

const hiddenStyles = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "translate-x-10",
  right: "-translate-x-10",
  fade: "",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`${className} transform transition-all duration-700 ease-out ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${hiddenStyles[direction]} opacity-0`
      }`}
    >
      {children}
    </div>
  );
}
