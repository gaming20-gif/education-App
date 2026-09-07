import React, { useState, useMemo } from "react";
import { BookOpen, Search, ExternalLink, FileText, CheckCircle, Sparkles } from "lucide-react";
import { filterBooksByCourse } from "../data/educationData";
import PdfViewerModal from "./PdfViewerModal";
import ImageWithFallback from "./ImageWithFallback";

export default function BooksView({ onSelectSubject, currentUser }) {
  const [filterQuery, setFilterQuery] = useState("");
  const [activePdfBook, setActivePdfBook] = useState(null);

  const userCourseStr = currentUser?.course || "M.Com (Master of Commerce)";

  // Books strictly for selected course
  const courseBooks = useMemo(() => {
    return filterBooksByCourse(userCourseStr);
  }, [userCourseStr]);

  // Filter books by search query
  const filteredBooks = useMemo(() => {
    if (!filterQuery.trim()) return courseBooks;
    const q = filterQuery.toLowerCase();
    return courseBooks.filter((book) => {
      return (
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        (book.subjectName && book.subjectName.toLowerCase().includes(q)) ||
        (book.subjectCode && book.subjectCode.toLowerCase().includes(q))
      );
    });
  }, [courseBooks, filterQuery]);

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#F59E0B] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Digital Textbook Library
            </span>
            <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-bold">
              {currentUser?.stream ? `${currentUser.stream} Stream` : "Enrolled Stream"}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B] mt-2">
            {userCourseStr} Reference Textbooks
          </h1>
          <p className="text-sm text-[#64748B] mt-1 max-w-xl">
            Browse official textbooks, reference guides, and PDF documents recommended for <strong className="text-[#1E40AF]">{userCourseStr}</strong>.
          </p>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-extrabold flex items-center gap-2 self-start md:self-auto">
          <BookOpen className="w-4 h-4 text-[#F59E0B]" />
          <span>{filteredBooks.length} Available Textbooks</span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder={`Filter ${userCourseStr} books by title, author, or subject...`}
          className="w-full bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-[#1E40AF] shadow-xs"
        />
      </div>

      {/* Book Grid */}
      {filteredBooks.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3 shadow-xs">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-[#1E293B]">No textbooks found for {userCourseStr}</h3>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
            Try adjusting your search filter or switch your course from the navigation bar switcher.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row gap-4 justify-between hover:scale-[1.01]"
            >
              <div className="flex gap-4 min-w-0 flex-1">
                <ImageWithFallback
                  src={book.cover}
                  alt={book.title}
                  type="book"
                  fallbackTitle={book.title}
                  className="w-20 h-28 object-cover rounded-lg shadow-sm border border-slate-200 shrink-0"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF]">
                      {book.subjectCode || "COURSE-REF"}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1E293B] leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[#64748B] font-medium">
                    By {book.author}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {book.edition} • {book.pages} Pages
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {book.summary}
                  </p>
                </div>
              </div>

              {/* Read PDF Button */}
              <div className="flex sm:flex-col items-center justify-between sm:justify-end gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex-shrink-0">
                <button
                  onClick={() => setActivePdfBook(book)}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 active:scale-[0.97]"
                >
                  <FileText className="w-4 h-4" />
                  Read PDF
                </button>

                {book.subjectObj && (
                  <button
                    onClick={() => onSelectSubject(book.subjectObj)}
                    className="text-[11px] text-[#1E40AF] hover:underline font-semibold whitespace-nowrap"
                  >
                    Go to Subject
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PDF Modal Reader */}
      {activePdfBook && (
        <PdfViewerModal
          book={activePdfBook}
          onClose={() => setActivePdfBook(null)}
        />
      )}
    </div>
  );
}
