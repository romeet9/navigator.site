"use client";

import React from "react";

export function AuroraBackground({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#e0c3fc] via-[#8ec5fc] to-[#f093fb] opacity-30 blur-3xl" />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}