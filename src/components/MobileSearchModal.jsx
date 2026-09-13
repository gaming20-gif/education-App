import React, { useRef, useEffect } from "react";
import { Search, X, ArrowLeft, BookOpen, Compass, Sparkles } from "lucide-react";
import SearchResults from "./SearchResults";

const POPULAR_SEARCH_CHIPS = [
  "M.Com",
  "B.Com",
  "BCA",
  "B.Sc",
  "BBA",
  "Corporate Accounting",
  "Financial Management",
  "Marketing Management",
  "Direct Tax & GST",
  "Textbooks",
  "Semester 1",
  "Semester 2"
];

export default function MobileSearchModal({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  searchResults,
  onSelectResult,
  onNavigateTab
}) {
  const inputRef = useRef(null);

  // Auto-focus input and lock body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChipClick = (chipText) => {
    setSearchQuery(chipText);
  };

  const handleResultClick = (type, item) => {
    onSelectResult(type, item);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Search"
      className="fixed inset-0 z-50 bg-[#1C2036] flex flex-col md:hidden animate-fade-in text-white overflow-hidden"
    >
      {/* Top Search Header Bar */}
      <div className="bg-[#292F4C] border-b border-[#56608F] px-3 py-3 shadow-md shrink-0 flex items-center gap-2">
        {/* Back / Close button */}
        <button
          type="button"
          onClick={onClose}
          className="p-2 -ml-1 text-[#C4C9DE] hover:text-[#8FE388] rounded-lg transition-colors cursor-pointer"
          aria-label="Close search"
        >
          <ArrowLeft className="w-5 h-5 text-[#8FE388]" />
        </button>

        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE] pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search colleges, courses, subjects, books..."
            className="w-full h-10 pl-9 pr-9 text-xs font-medium text-white bg-[#1C2036] border border-[#56608F] rounded-xl placeholder:text-[#C4C9DE] focus:outline-none focus:border-[#8FE388] transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#C4C9DE] hover:text-white p-1 cursor-pointer"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Cancel Text Button */}
        <button
          type="button"
          onClick={onClose}
          className="text-xs font-semibold text-[#C4C9DE] hover:text-white px-1.5 py-1 rounded-md transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>

      {/* Main Body */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5 pb-20">
        {searchQuery.trim() ? (
          /* Live Search Results View */
          <div className="animate-fade-in">
            <SearchResults
              searchQuery={searchQuery}
              results={searchResults}
              onSelectResult={handleResultClick}
              onClearSearch={() => setSearchQuery("")}
            />
          </div>
        ) : (
          /* Default Suggestions & Quick Filter Pills */
          <div className="space-y-6">
            {/* Quick Explore Categories */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onNavigateTab) onNavigateTab("explore");
                }}
                className="p-3 bg-[#292F4C] border border-[#56608F] hover:border-[#8FE388]/50 rounded-xl text-left flex items-center gap-2.5 transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#3D446C] text-[#8FE388] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">Explore Courses</p>
                  <p className="text-[10px] text-[#C4C9DE] truncate">33+ Degree Programs</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onNavigateTab) onNavigateTab("books");
                }}
                className="p-3 bg-[#292F4C] border border-[#56608F] hover:border-[#8FE388]/50 rounded-xl text-left flex items-center gap-2.5 transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#3D446C] text-[#8FE388] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">Textbooks</p>
                  <p className="text-[10px] text-[#C4C9DE] truncate">PDF & Reference Books</p>
                </div>
              </button>
            </div>

            {/* Popular Searches */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8FE388]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Popular Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCH_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => handleChipClick(chip)}
                    className="px-3 py-1.5 bg-[#292F4C] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white border border-[#56608F] hover:border-[#8FE388]/50 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Search className="w-3 h-3 text-[#8FE388]" />
                    <span>{chip}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search Tips */}
            <div className="p-3.5 rounded-xl bg-[#292F4C]/60 border border-[#56608F] text-[11px] text-[#C4C9DE] space-y-1">
              <p className="font-bold text-white">💡 Search Tips:</p>
              <p>• Type degree names (e.g. <strong className="text-[#8FE388]">M.Com</strong>, <strong className="text-[#8FE388]">BCA</strong>)</p>
              <p>• Type subject codes (e.g. <strong className="text-[#8FE388]">MCOM-101</strong>, <strong className="text-[#8FE388]">BCOM-102</strong>)</p>
              <p>• Type syllabus topics (e.g. <strong className="text-[#8FE388]">Accounting</strong>, <strong className="text-[#8FE388]">Tax</strong>)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
