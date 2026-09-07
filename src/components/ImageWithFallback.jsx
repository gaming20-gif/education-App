import React, { useState } from "react";
import { Building2, School, GraduationCap, BookOpen } from "lucide-react";

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  type = "college",
  fallbackTitle = "",
  ...props
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    const IconComponent =
      type === "university"
        ? Building2
        : type === "book"
        ? BookOpen
        : type === "course"
        ? GraduationCap
        : School;

    return (
      <div
        className={`bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden select-none ${className}`}
      >
        <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-xs" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-1.5">
          <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 shadow-inner">
            <IconComponent className="w-6 h-6 text-amber-300" />
          </div>
          {fallbackTitle && (
            <span className="text-xs font-bold text-slate-100 line-clamp-1 max-w-full px-2">
              {fallbackTitle}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
