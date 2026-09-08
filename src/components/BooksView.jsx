import React, { useState, useMemo } from "react";
import { BookOpen, Search, FileText, ArrowLeft, ArrowRight, GraduationCap, BookMarked } from "lucide-react";
import { filterBooksByCourse } from "../data/educationData";
import PdfViewerModal from "./PdfViewerModal";
import ImageWithFallback from "./ImageWithFallback";
import { STREAM_DATA } from "./LoginForm";

export default function BooksView({ onSelectSubject, currentUser }) {
  // selectedCourse: null = show course selection grid first, object/string = show books for selected course
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filterQuery, setFilterQuery] = useState("");
  const [activePdfBook, setActivePdfBook] = useState(null);
  const [selectedStreamFilter, setSelectedStreamFilter] = useState("All");

  // Flatten all available courses across streams
  const allCoursesList = useMemo(() => {
    const list = [];
    Object.entries(STREAM_DATA).forEach(([streamKey, streamObj]) => {
      streamObj.courses.forEach(c => {
        const booksCount = filterBooksByCourse(c.name).length;
        list.push({
          ...c,
          stream: streamKey,
          streamLabel: streamObj.label,
          booksCount: booksCount > 0 ? booksCount : 4
        });
      });
    });
    return list;
  }, []);

  // Filtered course cards for the Course Selection screen
  const filteredCourseList = useMemo(() => {
    return allCoursesList.filter(c => {
      const matchesStream = selectedStreamFilter === "All" || c.stream === selectedStreamFilter;
      const q = filterQuery.toLowerCase().trim();
      const matchesSearch = !q || c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q);
      return matchesStream && matchesSearch;
    });
  }, [allCoursesList, selectedStreamFilter, filterQuery]);

  // Books for currently selected course
  const courseBooks = useMemo(() => {
    if (!selectedCourse) return [];
    return filterBooksByCourse(selectedCourse.name);
  }, [selectedCourse]);

  // Filtered books inside selected course view
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

  const handleSelectCourseCard = (courseObj) => {
    setSelectedCourse(courseObj);
    setFilterQuery("");
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setFilterQuery("");
  };

  // STEP 1: FIRST SAW COURSE NAMES (COURSE SELECTION GRID)
  if (!selectedCourse) {
    return (
      <div className="space-y-6 animate-fade-in pb-4">
        {/* Header Banner */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase font-bold text-[#1E40AF] tracking-wider flex items-center gap-1.5">
              <BookMarked className="w-3.5 h-3.5" />
              <span>Digital Academic Library</span>
            </div>
            <h1 className="text-base sm:text-xl font-bold text-[#1E293B] leading-snug mt-0.5">
              Select a Course to View Available Textbooks
            </h1>
            <p className="text-xs text-[#64748B] mt-0.5">
              Click on any course below to browse all its available textbooks, reference guides, and PDF books.
            </p>
          </div>

          {currentUser?.course && (
            <button
              onClick={() => {
                const matched = allCoursesList.find(c => c.name === currentUser.course || c.code === currentUser.course);
                handleSelectCourseCard(matched || { name: currentUser.course, code: currentUser.course, duration: "Enrolled" });
              }}
              className="px-3.5 py-2 rounded-xl bg-[#1E40AF] hover:bg-blue-900 text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>My Course: {currentUser.course} ➜</span>
            </button>
          )}
        </div>

        {/* Filter and Search Bar for Courses */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-white border border-slate-200 p-3 rounded-xl shadow-xs">
          {/* Search input */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search course name (e.g. B.Com, M.Com, BCA, B.Sc, M.A)..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:bg-white focus:border-[#1E40AF] focus:ring-1 focus:ring-blue-100 outline-none"
            />
          </div>

          {/* Stream Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs font-medium">
            {["All", "Commerce", "Arts", "Science"].map((stream) => (
              <button
                key={stream}
                onClick={() => setSelectedStreamFilter(stream)}
                className={`px-3 py-1.5 rounded-lg border whitespace-nowrap transition-all ${
                  selectedStreamFilter === stream
                    ? "bg-[#1E40AF] text-white border-[#1E40AF] font-bold shadow-2xs"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {stream === "All" ? `All Streams (${allCoursesList.length})` : stream}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourseList.map((courseItem) => (
            <div
              key={courseItem.id || courseItem.name}
              onClick={() => handleSelectCourseCard(courseItem)}
              className="group bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-[#1E40AF]/40 rounded-2xl p-5 transition-all duration-200 shadow-2xs hover:shadow-md hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-black tracking-wide">
                    {courseItem.code}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                    {courseItem.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors leading-snug">
                  {courseItem.name}
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Stream: <strong className="text-slate-700">{courseItem.stream}</strong>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-600 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#1E40AF]" />
                  {courseItem.booksCount} Textbooks Available
                </span>
                <span className="font-bold text-[#1E40AF] group-hover:text-[#1E3A8A] flex items-center gap-1">
                  View Books <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // STEP 2: CLICKED INTO COURSE -> DISPLAY ALL AVAILABLE BOOKS FOR THAT COURSE
  return (
    <div className="space-y-6 animate-fade-in pb-4">
      {/* Back Button & Course Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBackToCourses}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-[0.97] shrink-0"
            title="Back to Course List"
          >
            <ArrowLeft className="w-4 h-4 text-[#1E40AF]" />
          </button>

          <div>
            <div className="text-[11px] uppercase font-bold text-[#1E40AF] tracking-wider">
              {selectedCourse.code} • Textbooks Catalog
            </div>
            <h1 className="text-base sm:text-lg font-bold text-[#1E293B] leading-snug">
              {selectedCourse.name}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            onClick={handleBackToCourses}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
          >
            ← Select Different Course
          </button>
          <div className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-bold whitespace-nowrap">
            {filteredBooks.length} Books
          </div>
        </div>
      </div>

      {/* Filter & Search Bar for books in selected course */}
      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder={`Filter ${selectedCourse.code} books by title, author, or subject...`}
          className="w-full bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-[#1E40AF] shadow-xs"
        />
      </div>

      {/* Book Grid */}
      {filteredBooks.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3 shadow-xs">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-[#1E293B]">No textbooks found for {selectedCourse.name}</h3>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
            Try clearing your search filter or choose another course from the course list.
          </p>
          <button
            onClick={handleBackToCourses}
            className="px-4 py-2 bg-[#1E40AF] text-white font-bold text-xs rounded-xl shadow-xs hover:bg-blue-900"
          >
            Browse All Courses ➜
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row gap-4 justify-between hover:scale-[1.01]"
            >
              <div className="flex gap-3 sm:gap-4 min-w-0 flex-1">
                <ImageWithFallback
                  src={book.cover}
                  alt={book.title}
                  type="book"
                  fallbackTitle={book.title}
                  className="w-18 h-26 sm:w-20 sm:h-28 object-cover rounded-lg shadow-sm border border-slate-200 shrink-0"
                />
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF]">
                      {book.subjectCode || "COURSE-REF"}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#1E293B] leading-snug">
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
              <div className="flex sm:flex-col items-center justify-between sm:justify-end gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0 w-full sm:w-auto">
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

