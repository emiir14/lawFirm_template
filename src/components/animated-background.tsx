import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type AnimatedBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedBackground({ children, className }: AnimatedBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {mounted && (
        <>
          <div className="absolute inset-0 gradient-bg" />
          <div className="absolute inset-0 opacity-20 dark:opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)" />
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent" />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}