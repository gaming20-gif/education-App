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
    universities = [],
    colleges = [],
    courses = [],
    semesters = [],
    subjects = [],
    chapters = [],
    books = []
  } = results || {};

  const totalMatches =
    universities.length +
    colleges.length +
    courses.length +
    semesters.length +
    subjects.length +
    chapters.length +
    books.length;

  const categories = [
    { id: "all", label: "All Results", count: totalMatches },
    { id: "universities", label: "Universities", count: universities.length },
    { id: "colleges", label: "Colleges", count: colleges.length },
    { id: "courses", label: "Degree Courses", count: courses.length },
    { id: "semesters", label: "Semesters", count: semesters.length },
    { id: "subjects", label: "Subjects", count: subjects.length },
    { id: "chapters", label: "Chapters / Syllabus", count: chapters.length },
    { id: "books", label: "Textbooks", count: books.length }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      {/* Search Header Banner */}
      <div className="bg-white border border-slate-200 p-4 sm:p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[#1E40AF]" /> Global Catalog
              Search
            </span>
            {stream && (
              <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#D97706] text-xs font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" /> {stream}{" "}
                Stream Scoped
              </span>
            )}
          </div>
          <h1 className="text-lg sm:text-2xl font-bold text-[#1E293B] mt-2 leading-snug">
            Results for "{searchQuery}"
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
            Found <strong>{totalMatches}</strong> matching record
            {totalMatches === 1 ? "" : "s"} across universities, colleges,
            degree programs, semester terms, subjects, chapters, and textbooks in{" "}
            <strong className="text-[#1E40AF]">{stream || "Enrolled"} Stream</strong>.
          </p>
        </div>

        <button
          onClick={onClearSearch}
          className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-[0.97] shrink-0 self-start sm:self-auto flex items-center gap-1 text-xs font-bold"
          title="Clear search"
        >
          <X className="w-4 h-4 text-[#1E40AF]" />
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
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 active:scale-[0.97] ${
                    activeCategory === cat.id
                      ? "bg-[#1E40AF] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-blue-400"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      activeCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-700"
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
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center space-y-3 shadow-xs">
          <Search className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-[#1E293B]">
            No matching items found in {stream || "selected"} stream
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
            Try searching for degree names (e.g. "M.Com", "B.Com", "B.Tech"), subject codes (e.g. "MCOM-101"), chapter topics (e.g. "Consolidated Accounts"), or university names.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* 1. UNIVERSITIES MATCHES */}
          {(activeCategory === "all" || activeCategory === "universities") &&
            universities.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#1E40AF]" /> Universities (
                  {universities.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {universities.map((uni) => (
                    <div
                      key={uni.id}
                      onClick={() => onSelectResult("university", uni)}
                      className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs hover:shadow-md"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <ImageWithFallback
                          src={uni.logo}
                          alt={uni.name}
                          type="university"
                          fallbackTitle={uni.shortName}
                          className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors truncate">
                            {uni.name}
                          </h4>
                          <p className="text-xs text-[#64748B] truncate">
                            {uni.location} • {uni.type}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1E40AF] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 2. COLLEGES MATCHES */}
          {(activeCategory === "all" || activeCategory === "colleges") &&
            colleges.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider flex items-center gap-1.5">
                  <School className="w-4 h-4 text-[#1E40AF]" /> Colleges &
                  Departments ({colleges.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {colleges.map((col) => (
                    <div
                      key={col.id}
                      onClick={() => onSelectResult("college", col)}
                      className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs hover:shadow-md"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <ImageWithFallback
                          src={col.image}
                          alt={col.name}
                          type="college"
                          fallbackTitle={col.shortName}
                          className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors truncate">
                            {col.name}
                          </h4>
                          <p className="text-xs text-[#64748B] truncate">
                            {col.department || col.type} • Estd. {col.established}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1E40AF] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 3. COURSES MATCHES */}
          {(activeCategory === "all" || activeCategory === "courses") &&
            courses.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#1E40AF]" /> Degree Courses (
                  {courses.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses.map((crs) => (
                    <div
                      key={crs.id}
                      onClick={() => onSelectResult("course", crs)}
                      className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs hover:shadow-md"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200">
                          {crs.degree}
                        </span>
                        <h4 className="text-sm font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors mt-1 truncate">
                          {crs.name}
                        </h4>
                        <p className="text-xs text-[#64748B] truncate">
                          Duration: {crs.duration} • {crs.totalSemesters} Semesters
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1E40AF] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 4. SEMESTERS MATCHES */}
          {(activeCategory === "all" || activeCategory === "semesters") &&
            semesters.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#1E40AF]" /> Semesters & Terms (
                  {semesters.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {semesters.map((sem) => (
                    <div
                      key={sem.id}
                      onClick={() => onSelectResult("semester", sem)}
                      className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs hover:shadow-md border-l-4 border-l-[#1E40AF]"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-[#F59E0B] border border-amber-200">
                          {sem.courseObj?.shortCode || "Course"} Semester {sem.semesterNumber}
                        </span>
                        <h4 className="text-sm font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors mt-1 truncate">
                          {sem.name}
                        </h4>
                        <p className="text-xs text-[#64748B] truncate">
                          {sem.subjectsCount} Subjects & Full Syllabus
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1E40AF] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 5. SUBJECTS MATCHES */}
          {(activeCategory === "all" || activeCategory === "subjects") &&
            subjects.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#10B981] uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#10B981]" /> Course Subjects (
                  {subjects.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subjects.map((sub) => (
                    <div
                      key={sub.id}
                      onClick={() => onSelectResult("subject", sub)}
                      className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs hover:shadow-md border-l-4 border-l-[#10B981]"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200">
                          {sub.code}
                        </span>
                        <h4 className="text-sm font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors mt-1 truncate">
                          {sub.name}
                        </h4>
                        <p className="text-xs text-[#64748B] line-clamp-1">
                          {sub.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1E40AF] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 6. CHAPTERS & SYLLABUS UNITS MATCHES */}
          {(activeCategory === "all" || activeCategory === "chapters") &&
            chapters.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1.5">
                  <Bookmark className="w-4 h-4 text-[#F59E0B]" /> Chapters &
                  Syllabus Units ({chapters.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chapters.map((ch, idx) => (
                    <div
                      key={idx}
                      onClick={() => onSelectResult("chapter", ch)}
                      className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs hover:shadow-md border-l-4 border-l-[#F59E0B]"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#F59E0B]">
                          <CheckCircle className="w-3 h-3" />
                          <span>
                            {ch.subject?.code} • Unit {ch.unitIndex}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors mt-0.5 leading-snug line-clamp-2">
                          {ch.unitTitle}
                        </h4>
                        <p className="text-xs text-[#64748B] truncate mt-1">
                          Subject: {ch.subject?.name}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1E40AF] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 7. TEXTBOOKS MATCHES */}
          {(activeCategory === "all" || activeCategory === "books") &&
            books.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#D97706] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#D97706]" /> Textbooks &
                  PDF Books ({books.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {books.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => onSelectResult("book", b)}
                      className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all shadow-xs hover:shadow-md"
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <ImageWithFallback
                          src={b.cover}
                          alt={b.title}
                          type="book"
                          fallbackTitle={b.title}
                          className="w-12 h-16 rounded object-cover border border-slate-200 shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-[#D97706] border border-amber-200">
                            {b.subjectCode || "REF-BOOK"}
                          </span>
                          <h4 className="text-sm font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors mt-1 truncate">
                            {b.title}
                          </h4>
                          <p className="text-xs text-[#64748B] truncate">
                            By {b.author} • {b.edition}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1E40AF] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
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
