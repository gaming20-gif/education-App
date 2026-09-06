import React from "react";
import { Search, Building2, School, BookOpen, FileText, ArrowRight, X, Sparkles } from "lucide-react";

export default function SearchResults({
  searchQuery,
  results,
  onSelectResult,
  onClearSearch
}) {
  const { universities, colleges, courses, subjects, books } = results;

  const totalMatches =
    universities.length +
    colleges.length +
    courses.length +
    subjects.length +
    books.length;

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      
      {/* Header Banner */}
      <div className="flex items-center justify-between bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div>
          <div className="text-xs uppercase font-bold text-[#1E40AF] tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4 text-[#1E40AF]" /> Global Catalog Search
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] mt-1">
            Results for "{searchQuery}"
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
            Found {totalMatches} matching records across Universities, Degree Programs, Subjects, and Textbooks.
          </p>
        </div>

        <button
          onClick={onClearSearch}
          className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-[0.97]"
          title="Clear search"
        >
          <X className="w-5 h-5 text-[#1E40AF]" />
        </button>
      </div>

      {totalMatches === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3 shadow-xs">
          <Search className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-[#1E293B]">No matching items found</h3>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
            Try searching for terms like "M.Com", "B.Com", "Financial Accounting", "Delhi University", or author names like "Tulsian".
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* Universities Matches */}
          {universities.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#1E293B] uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#1E40AF]" /> Universities ({universities.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {universities.map((uni) => (
                  <div
                    key={uni.id}
                    onClick={() => onSelectResult("university", uni)}
                    className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <img src={uni.logo} alt={uni.name} className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
                      <div>
                        <h4 className="text-sm font-bold text-[#1E293B]">{uni.name}</h4>
                        <p className="text-xs text-[#64748B]">{uni.location}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1E40AF]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Courses Matches */}
          {courses.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#1E293B] uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#1E40AF]" /> Degree Courses ({courses.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((crs) => (
                  <div
                    key={crs.id}
                    onClick={() => onSelectResult("course", crs)}
                    className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs hover:shadow-md"
                  >
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200">
                        {crs.degree}
                      </span>
                      <h4 className="text-sm font-bold text-[#1E293B] mt-1">{crs.name}</h4>
                      <p className="text-xs text-[#64748B]">{crs.duration}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1E40AF]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subjects Matches */}
          {subjects.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#1E293B] uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#10B981]" /> Course Subjects ({subjects.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjects.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => onSelectResult("subject", sub)}
                    className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs hover:shadow-md border-l-4 border-l-[#1E40AF]"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200">
                        {sub.code}
                      </span>
                      <h4 className="text-sm font-bold text-[#1E293B] mt-1">{sub.name}</h4>
                      <p className="text-xs text-[#64748B] line-clamp-1">{sub.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1E40AF]" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}

