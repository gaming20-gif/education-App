import React, { useState } from "react";
import {
  Search,
  Building2,
  School,
  BookOpen,
  FileText,
  ArrowRight,
  X,
  Sparkles,
  Layers,
  CheckCircle,
  Bookmark
} from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export default function SearchResults({
  searchQuery,
  results,
  onSelectResult,
  onClearSearch
}) {
  const [activeCategory, setActiveCategory] = useState("all"); // 'all' | 'universities' | 'colleges' | 'courses' | 'semesters' | 'subjects' | 'chapters' | 'books'

  const {
    stream,
    colleges = [],
    courses = [],
    semesters = [],
    subjects = [],
    chapters = [],
    books = []
  } = results || {};

  const totalMatches =
    colleges.length +
    courses.length +
    semesters.length +
    subjects.length +
    chapters.length +
    books.length;

  const categories = [
    { id: "all", label: "All Results", count: totalMatches },
    { id: "colleges", label: "Colleges & Depts", count: colleges.length },
    { id: "courses", label: "Degree Courses", count: courses.length },
    { id: "semesters", label: "Semesters", count: semesters.length },
    { id: "subjects", label: "Subjects", count: subjects.length },
    { id: "chapters", label: "Chapters / Syllabus", count: chapters.length },
    { id: "books", label: "Textbooks", count: books.length }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      {/* Search Header Banner */}
      <div className="bg-[#292F4C] border border-[#56608F] p-4 sm:p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#3D446C] border border-[#56608F] text-[#8FE388] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[#8FE388]" /> Global Catalog Search
            </span>
          </div>
          <h1 className="text-lg sm:text-2xl font-bold text-white mt-2 leading-snug">
            Results for "{searchQuery}"
          </h1>
          <p className="text-xs sm:text-sm text-[#C4C9DE] mt-1 leading-relaxed">
            Found <strong className="text-[#8FE388]">{totalMatches}</strong> matching record
            {totalMatches === 1 ? "" : "s"} across degree programs, subjects, chapters, and textbooks.
          </p>
        </div>

        <button
          onClick={onClearSearch}
          className="btn-cta p-2 sm:p-2.5 rounded-xl bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white border border-[#56608F] transition-all shrink-0 self-start sm:self-auto flex items-center gap-1 text-xs font-bold cursor-pointer"
          title="Clear search"
        >
          <X className="w-4 h-4 text-[#8FE388]" />
          <span className="hidden sm:inline">Clear</span>
        </button>
      </div>

      {/* Category Filter Tabs */}
      {totalMatches > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(
            (cat) =>
              cat.count > 0 && (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`btn-cta px-3 py-1.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#3D446C] text-white border border-[#8FE388]/40 shadow-xs"
                      : "bg-[#1C2036] text-[#C4C9DE] border border-[#56608F] hover:bg-[#3D446C]/50 hover:text-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      activeCategory === cat.id
                        ? "bg-[#8FE388]/20 text-[#8FE388]"
                        : "bg-[#292F4C] text-[#C4C9DE]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              )
          )}
        </div>
      )}

      {/* Empty State */}
      {totalMatches === 0 ? (
        <div className="bg-[#292F4C] border border-[#56608F] rounded-2xl p-8 sm:p-12 text-center space-y-3 shadow-xs text-white">
          <Search className="w-12 h-12 text-[#C4C9DE]/40 mx-auto" />
          <h3 className="text-lg font-bold text-white">
            No matching items found in {stream || "selected"} stream
          </h3>
          <p className="text-xs sm:text-sm text-[#C4C9DE] max-w-md mx-auto leading-relaxed">
            Try searching for degree names (e.g. "M.Com", "B.Com", "B.Tech"), subject codes (e.g. "MCOM-101"), chapter topics (e.g. "Consolidated Accounts"), or university names.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* 2. COLLEGES MATCHES */}
          {(activeCategory === "all" || activeCategory === "colleges") &&
            colleges.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#8FE388] uppercase tracking-wider flex items-center gap-1.5">
                  <School className="w-4 h-4 text-[#8FE388]" /> Colleges &
                  Departments ({colleges.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {colleges.map((col) => (
                    <div
                      key={col.id}
                      onClick={() => onSelectResult("college", col)}
                      className="course-card group bg-[#292F4C] hover:bg-[#3D446C]/30 border border-[#56608F] hover:border-[#8FE388]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <ImageWithFallback
                          src={col.image}
                          alt={col.name}
                          type="college"
                          fallbackTitle={col.shortName}
                          className="w-10 h-10 rounded-lg object-cover border border-[#56608F] shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-white group-hover:text-[#8FE388] transition-colors truncate">
                            {col.name}
                          </h4>
                          <p className="text-xs text-[#C4C9DE] truncate">
                            {col.department || col.type} • Estd. {col.established}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8FE388] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 3. COURSES MATCHES */}
          {(activeCategory === "all" || activeCategory === "courses") &&
            courses.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#8FE388] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#8FE388]" /> Degree Courses (
                  {courses.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses.map((crs) => (
                    <div
                      key={crs.id}
                      onClick={() => onSelectResult("course", crs)}
                      className="course-card group bg-[#292F4C] hover:bg-[#3D446C]/30 border border-[#56608F] hover:border-[#8FE388]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                          {crs.degree}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#8FE388] transition-colors mt-1 truncate">
                          {crs.name}
                        </h4>
                        <p className="text-xs text-[#C4C9DE] truncate">
                          Duration: {crs.duration} • {crs.totalSemesters} Semesters
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8FE388] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 4. SEMESTERS MATCHES */}
          {(activeCategory === "all" || activeCategory === "semesters") &&
            semesters.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#8FE388] uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#8FE388]" /> Semesters & Terms (
                  {semesters.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {semesters.map((sem) => (
                    <div
                      key={sem.id}
                      onClick={() => onSelectResult("semester", sem)}
                      className="course-card group bg-[#292F4C] hover:bg-[#3D446C]/30 border border-[#56608F] hover:border-[#8FE388]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs border-l-4 border-l-[#8FE388]"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                          {sem.courseObj?.shortCode || "Course"} Semester {sem.semesterNumber}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#8FE388] transition-colors mt-1 truncate">
                          {sem.name}
                        </h4>
                        <p className="text-xs text-[#C4C9DE] truncate">
                          {sem.subjectsCount} Subjects & Full Syllabus
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8FE388] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 5. SUBJECTS MATCHES */}
          {(activeCategory === "all" || activeCategory === "subjects") &&
            subjects.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#8FE388] uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#8FE388]" /> Course Subjects (
                  {subjects.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subjects.map((sub) => (
                    <div
                      key={sub.id}
                      onClick={() => onSelectResult("subject", sub)}
                      className="course-card group bg-[#292F4C] hover:bg-[#3D446C]/30 border border-[#56608F] hover:border-[#8FE388]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs border-l-4 border-l-[#3D446C]"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                          {sub.code}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#8FE388] transition-colors mt-1 truncate">
                          {sub.name}
                        </h4>
                        <p className="text-xs text-[#C4C9DE] line-clamp-1">
                          {sub.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8FE388] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 6. CHAPTERS & SYLLABUS UNITS MATCHES */}
          {(activeCategory === "all" || activeCategory === "chapters") &&
            chapters.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#8FE388] uppercase tracking-wider flex items-center gap-1.5">
                  <Bookmark className="w-4 h-4 text-[#8FE388]" /> Chapters &
                  Syllabus Units ({chapters.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chapters.map((ch, idx) => (
                    <div
                      key={idx}
                      onClick={() => onSelectResult("chapter", ch)}
                      className="course-card group bg-[#292F4C] hover:bg-[#3D446C]/30 border border-[#56608F] hover:border-[#8FE388]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs border-l-4 border-l-[#8FE388]"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#8FE388]">
                          <CheckCircle className="w-3 h-3 text-[#8FE388]" />
                          <span>
                            {ch.subject?.code} • Unit {ch.unitIndex}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#8FE388] transition-colors mt-0.5 leading-snug line-clamp-2">
                          {ch.unitTitle}
                        </h4>
                        <p className="text-xs text-[#C4C9DE] truncate mt-1">
                          Subject: {ch.subject?.name}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8FE388] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 7. TEXTBOOKS MATCHES */}
          {(activeCategory === "all" || activeCategory === "books") &&
            books.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#8FE388] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#8FE388]" /> Textbooks &
                  PDF Books ({books.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {books.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => onSelectResult("book", b)}
                      className="course-card group bg-[#292F4C] hover:bg-[#3D446C]/30 border border-[#56608F] hover:border-[#8FE388]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <ImageWithFallback
                          src={b.cover}
                          alt={b.title}
                          type="book"
                          fallbackTitle={b.title}
                          className="w-12 h-16 rounded object-cover border border-[#56608F] shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                            {b.subjectCode || "REF-BOOK"}
                          </span>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#8FE388] transition-colors mt-1 truncate">
                            {b.title}
                          </h4>
                          <p className="text-xs text-[#C4C9DE] truncate">
                            By {b.author} • {b.edition}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8FE388] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
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
