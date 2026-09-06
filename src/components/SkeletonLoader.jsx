import React from "react";

export default function SkeletonLoader({ count = 4, type = "card" }) {
  const items = Array.from({ length: count });

  if (type === "book") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((_, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex gap-4">
            <div className="w-20 h-28 rounded-lg bg-slate-200 animate-shimmer flex-shrink-0" />
            <div className="flex-1 space-y-3">
              <div className="h-4 bg-slate-200 animate-shimmer rounded w-3/4" />
              <div className="h-3 bg-slate-200 animate-shimmer rounded w-1/2" />
              <div className="h-3 bg-slate-200 animate-shimmer rounded w-5/6" />
              <div className="h-8 bg-slate-200 animate-shimmer rounded-lg w-28 mt-2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((_, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-5 bg-slate-200 animate-shimmer rounded w-24" />
            <div className="h-5 bg-slate-200 animate-shimmer rounded-full w-16" />
          </div>
          <div className="h-6 bg-slate-200 animate-shimmer rounded w-4/5" />
          <div className="h-4 bg-slate-200 animate-shimmer rounded w-full" />
          <div className="h-4 bg-slate-200 animate-shimmer rounded w-2/3" />
          <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
            <div className="h-4 bg-slate-200 animate-shimmer rounded w-20" />
            <div className="h-4 bg-slate-200 animate-shimmer rounded w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}
