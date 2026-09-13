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
        className={`bg-gradient-to-br from-[#3D446C] via-[#292F4C] to-[#1C2036] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden select-none ${className}`}
      >
        <div className="absolute inset-0 bg-[#1C2036]/20 backdrop-blur-xs" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-1.5">
          <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 shadow-inner">
            <IconComponent className="w-6 h-6 text-[#8FE388]" />
          </div>
          {fallbackTitle && (
            <span className="text-xs font-bold text-white line-clamp-1 max-w-full px-2">
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
