import React from "react";
import { Compass, Search, BookOpen } from "lucide-react";

export default function BottomNav({
  activeTab,
  onTabChange,
  onOpenSearch,
  isSearchActive = false
}) {
  const isExploreActive = activeTab === "explore" && !isSearchActive;
  const isBooksActive = activeTab === "books" && !isSearchActive;

  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="block md:hidden fixed bottom-0 left-0 right-0 w-full bg-[#292F4C]/95 backdrop-blur-xl border-t border-[#56608F]/60 shadow-[0_-4px_25px_rgba(0,0,0,0.35)] font-sans select-none"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 9999,
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        paddingBottom: "env(safe-area-inset-bottom, 8px)"
      }}
    >
      <div className="max-w-md mx-auto h-[62px] px-3 flex items-center justify-around">
        
        {/* 1. Left Tab: Explore Course */}
        <button
          type="button"
          onClick={() => onTabChange && onTabChange("explore")}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1.5 transition-all cursor-pointer ${
            isExploreActive ? "text-[#8FE388]" : "text-[#C4C9DE] hover:text-white"
          }`}
          aria-label="Explore Course"
        >
          <div
            className={`w-9 h-8 rounded-full flex items-center justify-center transition-all ${
              isExploreActive
                ? "bg-[#3D446C] text-[#8FE388] shadow-xs scale-105"
                : "text-[#C4C9DE]"
            }`}
          >
            <Compass className={`w-5 h-5 ${isExploreActive ? "stroke-[2.5]" : "stroke-[2]"}`} />
          </div>
          <span
            className={`text-[10.5px] mt-0.5 tracking-tight transition-colors ${
              isExploreActive ? "font-bold text-[#8FE388]" : "font-medium text-[#C4C9DE]"
            }`}
          >
            Explore Course
          </span>
        </button>

        {/* 2. Center Tab: Search (Click to Search) */}
        <button
          type="button"
          onClick={onOpenSearch}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1.5 transition-all cursor-pointer ${
            isSearchActive ? "text-[#8FE388]" : "text-[#C4C9DE] hover:text-white"
          }`}
          aria-label="Search"
        >
          <div
            className={`w-9 h-8 rounded-full flex items-center justify-center transition-all ${
              isSearchActive
                ? "bg-[#8FE388] text-[#1C2036] shadow-sm scale-105"
                : "bg-[#3D446C]/60 text-[#C4C9DE] hover:text-white border border-[#56608F]/60"
            }`}
          >
            <Search className={`w-4.5 h-4.5 ${isSearchActive ? "stroke-[2.5]" : "stroke-[2]"}`} />
          </div>
          <span
            className={`text-[10.5px] mt-0.5 tracking-tight transition-colors ${
              isSearchActive ? "font-bold text-[#8FE388]" : "font-medium text-[#C4C9DE]"
            }`}
          >
            Search
          </span>
        </button>

        {/* 3. Right Tab: Books */}
        <button
          type="button"
          onClick={() => onTabChange && onTabChange("books")}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1.5 transition-all cursor-pointer ${
            isBooksActive ? "text-[#8FE388]" : "text-[#C4C9DE] hover:text-white"
          }`}
          aria-label="Books"
        >
          <div
            className={`w-9 h-8 rounded-full flex items-center justify-center transition-all ${
              isBooksActive
                ? "bg-[#3D446C] text-[#8FE388] shadow-xs scale-105"
                : "text-[#C4C9DE]"
            }`}
          >
            <BookOpen className={`w-5 h-5 ${isBooksActive ? "stroke-[2.5]" : "stroke-[2]"}`} />
          </div>
          <span
            className={`text-[10.5px] mt-0.5 tracking-tight transition-colors ${
              isBooksActive ? "font-bold text-[#8FE388]" : "font-medium text-[#C4C9DE]"
            }`}
          >
            Books
          </span>
        </button>

      </div>
    </nav>
  );
}
