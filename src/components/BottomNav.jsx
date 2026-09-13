import React from "react";
import { Compass, Search, BookOpen } from "lucide-react";

export default function BottomNav({
  activeTab,
  onTabChange,
  onOpenSearch,
  isSearchActive = false
}) {
  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="block md:hidden fixed bottom-0 left-0 right-0 w-full bg-[#292F4C] border-t border-[#56608F] px-4 py-1.5 shadow-2xl font-sans"
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
        paddingBottom: "calc(0.4rem + env(safe-area-inset-bottom, 0px))"
      }}
    >
      <div className="max-w-md mx-auto flex items-center justify-between relative">
        {/* 1. Left Side: Explore Course */}
        <button
          type="button"
          onClick={() => onTabChange && onTabChange("explore")}
          className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all cursor-pointer select-none ${
            activeTab === "explore" && !isSearchActive
              ? "text-[#8FE388] font-bold"
              : "text-[#C4C9DE] hover:text-white"
          }`}
          aria-label="Explore Course"
        >
          <div
            className={`p-1.5 rounded-xl transition-all ${
              activeTab === "explore" && !isSearchActive
                ? "bg-[#3D446C] text-[#8FE388] border border-[#56608F] shadow-xs scale-105"
                : "text-[#C4C9DE]"
            }`}
          >
            <Compass className="w-5 h-5 stroke-[2]" />
          </div>
          <span className="text-[11px] font-semibold mt-0.5 tracking-tight truncate">
            Explore Course
          </span>
        </button>

        {/* 2. Center: Search Icon (Click and Search) */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center flex-1 py-1 transition-all cursor-pointer relative group select-none"
          aria-label="Search Catalog"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center -mt-5 shadow-lg transition-all transform active:scale-95 ${
              isSearchActive
                ? "bg-[#8FE388] text-[#1C2036] ring-4 ring-[#8FE388]/30 shadow-[#8FE388]/30 scale-105"
                : "bg-gradient-to-tr from-[#3D446C] to-[#56608F] text-[#8FE388] border-2 border-[#8FE388]/50 hover:border-[#8FE388] group-hover:scale-105 shadow-md"
            }`}
          >
            <Search className={`w-5 h-5 ${isSearchActive ? "stroke-[2.5]" : "stroke-[2]"}`} />
          </div>
          <span
            className={`text-[11px] font-bold mt-0.5 tracking-tight ${
              isSearchActive ? "text-[#8FE388]" : "text-[#C4C9DE] group-hover:text-white"
            }`}
          >
            Search
          </span>
        </button>

        {/* 3. Right Side: Books */}
        <button
          type="button"
          onClick={() => onTabChange && onTabChange("books")}
          className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all cursor-pointer select-none ${
            activeTab === "books" && !isSearchActive
              ? "text-[#8FE388] font-bold"
              : "text-[#C4C9DE] hover:text-white"
          }`}
          aria-label="Books"
        >
          <div
            className={`p-1.5 rounded-xl transition-all ${
              activeTab === "books" && !isSearchActive
                ? "bg-[#3D446C] text-[#8FE388] border border-[#56608F] shadow-xs scale-105"
                : "text-[#C4C9DE]"
            }`}
          >
            <BookOpen className="w-5 h-5 stroke-[2]" />
          </div>
          <span className="text-[11px] font-semibold mt-0.5 tracking-tight truncate">
            Books
          </span>
        </button>
      </div>
    </nav>
  );
}
