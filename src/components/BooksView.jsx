import React, { useState, useMemo } from "react";
import { BookOpen, Search, FileText, ArrowLeft, ArrowRight, GraduationCap, BookMarked, FileDown } from "lucide-react";
import { filterBooksByCourse } from "../data/educationData";
import { downloadSingleSubjectPdf } from "../utils/downloadHelper";
import PdfViewerModal from "./PdfViewerModal";
import ImageWithFallback from "./ImageWithFallback";
import { STREAM_DATA } from "./LoginForm";

export default function BooksView({ onSelectSubject, currentUser }) {
  const defaultCourse = (currentUser?.course && currentUser.course !== "All Academic Courses")
    ? { name: currentUser.course, code: currentUser.course, duration: "Enrolled Program" }
    : null;

  const [selectedCourse, setSelectedCourse] = useState(defaultCourse);
  const [filterQuery, setFilterQuery] = useState("");
  const [activePdfBook, setActivePdfBook] = useState(null);
  const [selectedStreamFilter, setSelectedStreamFilter] = useState(currentUser?.stream || "All");

  // Flatten all available courses across streams
  const allCoursesList = useMemo(() => {
    const list = [];
    Object.entries(STREAM_DATA).forEach(([streamKey, streamObj]) => {
      if (streamKey === "All") return;
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
        <div className="bg-[#292F4C] border border-[#56608F] rounded-xl p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
          <div>
            <div className="text-[11px] uppercase font-bold text-[#8FE388] tracking-wider flex items-center gap-1.5">
              <BookMarked className="w-3.5 h-3.5 text-[#8FE388]" />
              <span>Digital Academic Library</span>
            </div>
            <h1 className="text-base sm:text-xl font-bold text-white leading-snug mt-0.5">
              Select a Course to View Available Textbooks
            </h1>
            <p className="text-xs text-[#C4C9DE] mt-0.5">
              Click on any course below to browse all its available textbooks, reference guides, and PDF books.
            </p>
          </div>

          {currentUser?.course && (
            <button
              onClick={() => {
                const matched = allCoursesList.find(c => c.name === currentUser.course || c.code === currentUser.course);
                handleSelectCourseCard(matched || { name: currentUser.course, code: currentUser.course, duration: "Enrolled" });
              }}
              className="btn-cta px-3.5 py-2 rounded-xl bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-[#1C2036]" />
              <span>My Course: {currentUser.course} ➜</span>
            </button>
          )}
        </div>

        {/* Filter and Search Bar for Courses */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-[#292F4C] border border-[#56608F] p-3 rounded-xl shadow-xs text-white">
          {/* Search input */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-[#C4C9DE] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search course name (e.g. B.Com, M.Com, BCA, B.Sc, M.A)..."
              className="w-full pl-9 pr-3 py-2 bg-[#1C2036] border border-[#56608F] rounded-lg text-xs text-white placeholder-[#C4C9DE] focus:border-[#8FE388] outline-none"
            />
          </div>

          {/* Stream Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs font-medium">
            {["All", "Commerce", "Arts", "Science"].map((stream) => (
              <button
                key={stream}
                onClick={() => setSelectedStreamFilter(stream)}
                className={`btn-cta px-3 py-1.5 rounded-lg border whitespace-nowrap transition-all cursor-pointer ${
                  selectedStreamFilter === stream
                    ? "bg-[#3D446C] text-white border-[#8FE388]/40 font-bold shadow-2xs"
                    : "bg-[#1C2036] text-[#C4C9DE] border-[#56608F] hover:bg-[#3D446C]/50 hover:text-white"
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
              className="course-card group bg-[#292F4C] hover:bg-[#3D446C]/30 border border-[#56608F] hover:border-[#8FE388]/40 rounded-2xl p-5 shadow-2xs cursor-pointer flex flex-col justify-between text-white"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-[#3D446C] border border-[#56608F] text-[#8FE388] text-xs font-black tracking-wide">
                    {courseItem.code}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#1C2036] text-[#C4C9DE] border border-[#56608F]">
                    {courseItem.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#8FE388] transition-colors leading-snug">
                  {courseItem.name}
                </h3>
                <p className="text-xs text-[#C4C9DE] mt-1">
                  Stream: <strong className="text-white">{courseItem.stream}</strong>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#56608F] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#C4C9DE] flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#8FE388]" />
                  {courseItem.booksCount} Textbooks Available
                </span>
                <span className="font-bold text-[#8FE388] flex items-center gap-1">
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
      <div className="bg-[#292F4C] border border-[#56608F] rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBackToCourses}
            className="p-2 rounded-xl bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white border border-[#56608F] transition-all cursor-pointer shrink-0"
            title="Back to Course List"
          >
            <ArrowLeft className="w-4 h-4 text-[#8FE388]" />
          </button>

          <div>
            <div className="text-[11px] uppercase font-bold text-[#8FE388] tracking-wider">
              {selectedCourse.code} • Textbooks Catalog
            </div>
            <h1 className="text-base sm:text-lg font-bold text-white leading-snug">
              {selectedCourse.name}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            onClick={handleBackToCourses}
            className="btn-cta px-3 py-1.5 rounded-xl bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white border border-[#56608F] text-xs font-bold transition-all cursor-pointer"
          >
            ← Select Different Course
          </button>
          <div className="px-2.5 py-1 rounded-full bg-[#3D446C] border border-[#56608F] text-[#8FE388] text-xs font-bold whitespace-nowrap">
            {filteredBooks.length} Books
          </div>
        </div>
      </div>

      {/* Filter & Search Bar for books in selected course */}
      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE]" />
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder={`Filter ${selectedCourse.code} books by title, author, or subject...`}
          className="w-full bg-[#292F4C] border border-[#56608F] text-white placeholder-[#C4C9DE] text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-[#8FE388] shadow-xs"
        />
      </div>

      {/* Book Grid */}
      {filteredBooks.length === 0 ? (
        <div className="bg-[#292F4C] border border-[#56608F] rounded-2xl p-12 text-center space-y-3 shadow-xs text-white">
          <BookOpen className="w-12 h-12 text-[#C4C9DE]/40 mx-auto" />
          <h3 className="text-lg font-bold text-white">No textbooks found for {selectedCourse.name}</h3>
          <p className="text-xs sm:text-sm text-[#C4C9DE] max-w-md mx-auto">
            Try clearing your search filter or choose another course from the course list.
          </p>
          <button
            onClick={handleBackToCourses}
            className="btn-cta px-4 py-2 bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] font-bold text-xs rounded-xl shadow-xs cursor-pointer"
          >
            Browse All Courses ➜
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="course-card bg-[#292F4C] border border-[#56608F] hover:border-[#8FE388]/40 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row gap-4 justify-between text-white"
            >
              <div className="flex gap-3 sm:gap-4 min-w-0 flex-1">
                <ImageWithFallback
                  src={book.cover}
                  alt={book.title}
                  type="book"
                  fallbackTitle={book.title}
                  className="w-18 h-26 sm:w-20 sm:h-28 object-cover rounded-lg shadow-sm border border-[#56608F] shrink-0"
                />
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                      {book.subjectCode || "COURSE-REF"}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[#8FE388] font-semibold">
                    By {book.author}
                  </p>
                  <p className="text-[11px] text-[#C4C9DE]">
                    {book.edition} • {book.pages} Pages
                  </p>

                  <p className="text-xs text-[#C4C9DE] line-clamp-2 mt-1 leading-relaxed">
                    {book.summary}
                  </p>
                </div>
              </div>

              {/* Read PDF Button */}
              <div className="flex sm:flex-col items-center justify-between sm:justify-end gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#56608F] shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => setActivePdfBook(book)}
                  className="btn-cta w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#1C2036]" />
                  Read PDF
                </button>

                <button
                  onClick={() => {
                    const subObj = book.subjectObj || {
                      name: book.title,
                      code: book.subjectCode || "REF-101",
                      description: book.summary,
                      books: [book]
                    };
                    downloadSingleSubjectPdf(subObj, selectedCourse?.name, "Reference Library");
                  }}
                  className="btn-cta w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-[#3D446C] hover:bg-[#3D446C]/90 text-[#8FE388] border border-[#56608F] text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Download PDF"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#8FE388]" />
                  Download PDF
                </button>

                {book.subjectObj && (
                  <button
                    onClick={() => onSelectSubject(book.subjectObj)}
                    className="text-[11px] text-[#8FE388] hover:underline font-semibold whitespace-nowrap cursor-pointer"
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

