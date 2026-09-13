import React, { useState } from "react";
import {
  BookOpen,
  Video,
  FileText,
  Eye,
  Play,
  CheckCircle,
  Award,
  Layers,
  ArrowLeft,
  Sparkles,
  Bookmark,
  ChevronRight,
  FileDown
} from "lucide-react";
import PdfViewerModal from "./PdfViewerModal";
import ImageWithFallback from "./ImageWithFallback";
import { downloadSingleSubjectPdf } from "../utils/downloadHelper";

export default function SubjectDetail({ subject, onBack }) {
  const books = subject.books || [];
  const videos = subject.videos || [];
  const notes = subject.notes || [];
  const syllabusUnits = subject.syllabus || [
    "Unit 1: Core Fundamentals & Theoretical Framework",
    "Unit 2: Advanced Analytical & Computational Methods",
    "Unit 3: Practical Case Studies & Problem Solving",
    "Unit 4: Regulatory Compliance & Industry Standards"
  ];

  // State: selected chapter index
  const [selectedChapterIdx, setSelectedChapterIdx] = useState(0);

  // State: active tab ('chapters' | 'books' | 'videos' | 'notes')
  const [activeTab, setActiveTab] = useState("chapters");

  // State: PDF reader modal
  const [selectedBookForPdf, setSelectedBookForPdf] = useState(null);

  // State: Video lecture
  const [activeVideo, setActiveVideo] = useState(videos[0] || null);

  const currentChapterTitle =
    syllabusUnits[selectedChapterIdx] || `Chapter ${selectedChapterIdx + 1}`;

  const defaultBook = books[selectedChapterIdx % Math.max(books.length, 1)] ||
    books[0] || {
      id: "default-pdf",
      title: `${subject.name} - Official Reference Guide`,
      author: "Academic Faculty",
      edition: "2026 Edition",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      summary: `Comprehensive textbook chapter covering ${currentChapterTitle}.`
    };

  const defaultVideo = videos[selectedChapterIdx % Math.max(videos.length, 1)] ||
    videos[0] || {
      id: "v-default",
      title: `${currentChapterTitle} - Detailed Video Lecture`,
      instructor: "Senior Professor",
      duration: "45:00",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80"
    };

  const defaultNote = notes[selectedChapterIdx % Math.max(notes.length, 1)] ||
    notes[0] || {
      id: "n-default",
      title: `Handwritten Notes - ${currentChapterTitle}`,
      author: "Department Forum",
      size: "3.2 MB",
      pages: 28,
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    };

  const handleOpenPdfForChapter = () => {
    setSelectedBookForPdf({
      ...defaultBook,
      title: `${currentChapterTitle} — Reference PDF Book`
    });
  };

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#3D446C] to-[#1C2036] text-white rounded-2xl p-4 sm:p-7 shadow-md border border-[#56608F] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1 w-full">
            <button
              onClick={onBack}
              className="p-2 sm:p-2.5 rounded-xl bg-[#1C2036]/60 hover:bg-[#3D446C] text-white transition-all cursor-pointer mt-0.5 border border-[#56608F] shrink-0"
              title="Back"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#8FE388]" />
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                  {subject.code}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#1C2036]/60 text-white border border-[#56608F]">
                  {subject.credits} Credits
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#1C2036]/60 text-white border border-[#56608F]">
                  {syllabusUnits.length} Chapters / Units
                </span>
              </div>

              <h1 className="text-xl sm:text-3xl font-extrabold text-white mt-2 leading-snug">
                {subject.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#C4C9DE] mt-1.5 max-w-3xl leading-relaxed">
                {subject.description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-around md:justify-start gap-2 sm:gap-3 bg-[#1C2036]/60 p-2.5 rounded-xl border border-[#56608F] text-xs text-white shrink-0 w-full md:w-auto self-stretch md:self-start">
            <div className="text-center px-2 sm:px-3 border-r border-[#56608F]">
              <span className="block text-base sm:text-lg font-bold text-[#8FE388]">
                {syllabusUnits.length}
              </span>
              <span className="text-[10px] text-[#C4C9DE]">Chapters</span>
            </div>
            <div className="text-center px-2 sm:px-3 border-r border-[#56608F]">
              <span className="block text-base sm:text-lg font-bold text-white">
                {books.length}
              </span>
              <span className="text-[10px] text-[#C4C9DE]">Books</span>
            </div>
            <div className="text-center px-2 sm:px-3">
              <span className="block text-base sm:text-lg font-bold text-[#8FE388]">
                {videos.length}
              </span>
              <span className="text-[10px] text-[#C4C9DE]">Videos</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-[#56608F] overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("chapters")}
            className={`btn-cta flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "chapters"
                ? "bg-[#3D446C] text-[#8FE388] border border-[#8FE388]/40 shadow-md"
                : "bg-[#1C2036] hover:bg-[#3D446C]/50 text-[#C4C9DE] border border-[#56608F]"
            }`}
          >
            <Bookmark className={`w-4 h-4 ${activeTab === "chapters" ? "text-[#8FE388]" : "text-[#C4C9DE]"}`} />
            <span>Chapters Explorer ({syllabusUnits.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("books")}
            className={`btn-cta flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "books"
                ? "bg-[#3D446C] text-[#8FE388] border border-[#8FE388]/40 shadow-md"
                : "bg-[#1C2036] hover:bg-[#3D446C]/50 text-[#C4C9DE] border border-[#56608F]"
            }`}
          >
            <BookOpen className={`w-4 h-4 ${activeTab === "books" ? "text-[#8FE388]" : "text-[#C4C9DE]"}`} />
            <span>Textbooks ({books.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`btn-cta flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "videos"
                ? "bg-[#3D446C] text-[#8FE388] border border-[#8FE388]/40 shadow-md"
                : "bg-[#1C2036] hover:bg-[#3D446C]/50 text-[#C4C9DE] border border-[#56608F]"
            }`}
          >
            <Video className={`w-4 h-4 ${activeTab === "videos" ? "text-[#8FE388]" : "text-[#C4C9DE]"}`} />
            <span>Video Lectures ({videos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("notes")}
            className={`btn-cta flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "notes"
                ? "bg-[#3D446C] text-[#8FE388] border border-[#8FE388]/40 shadow-md"
                : "bg-[#1C2036] hover:bg-[#3D446C]/50 text-[#C4C9DE] border border-[#56608F]"
            }`}
          >
            <FileText className={`w-4 h-4 ${activeTab === "notes" ? "text-[#8FE388]" : "text-[#C4C9DE]"}`} />
            <span>PDF Notes ({notes.length})</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* FEATURED CHAPTER EXPLORER (Chapter 1, Chapter 2... PDF & Video Buttons) */}
      {/* ------------------------------------------------------------------ */}
      {activeTab === "chapters" && (
        <div className="space-y-6">
          {/* Chapter Selector Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-[#8FE388]" />
                Select Chapter / Unit
              </h2>
              <span className="text-xs text-[#C4C9DE] font-medium">
                Click any chapter to open PDF & video options
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {syllabusUnits.map((unitTitle, idx) => {
                const isSelected = selectedChapterIdx === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedChapterIdx(idx)}
                    className={`course-card group cursor-pointer p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 shadow-xs ${
                      isSelected
                        ? "bg-[#3D446C] text-white border-[#8FE388] shadow-md ring-2 ring-[#8FE388]/30"
                        : "bg-[#292F4C] hover:bg-[#3D446C]/30 border-[#56608F] text-white"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#8FE388] text-[#1C2036]"
                          : "bg-[#1C2036] text-[#8FE388] border border-[#56608F]"
                      }`}
                    >
                      Ch {idx + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-[10px] uppercase font-extrabold tracking-wider ${
                          isSelected ? "text-[#8FE388]" : "text-[#C4C9DE]"
                        }`}
                      >
                        Chapter {idx + 1}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug mt-0.5 text-white">
                        {unitTitle}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ACTIVE CHAPTER RESOURCE HUB (First PDF & Video Options) */}
          <div className="bg-[#292F4C] border border-[#56608F] rounded-2xl p-5 sm:p-7 shadow-md space-y-6 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#56608F] pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D446C] border border-[#56608F] text-[#8FE388] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#8FE388]" />
                  Active Selected Chapter {selectedChapterIdx + 1}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white mt-2 leading-snug">
                  {currentChapterTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#C4C9DE] mt-1">
                  Access official textbook PDF reader, stream video lectures, or view handwritten notes for Chapter {selectedChapterIdx + 1}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0 w-full sm:w-auto">
                {/* 1. PDF BUTTON */}
                <button
                  onClick={handleOpenPdfForChapter}
                  className="btn-cta flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer w-full sm:w-auto"
                >
                  <Eye className="w-4 h-4 text-[#1C2036]" />
                  <span>1. Read Chapter PDF Book</span>
                </button>

                {/* 1b. DOWNLOAD PDF BUTTON */}
                <button
                  onClick={() => downloadSingleSubjectPdf(subject, subject.courseId, subject.semesterId)}
                  className="btn-cta flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#3D446C] hover:bg-[#3D446C]/90 text-[#8FE388] border border-[#56608F] text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer w-full sm:w-auto"
                  title="Download complete subject textbook PDF"
                >
                  <FileDown className="w-4 h-4 text-[#8FE388]" />
                  <span>Download Book PDF</span>
                </button>

                {/* 2. VIDEO BUTTON */}
                <button
                  onClick={() => {
                    setActiveVideo(defaultVideo);
                    setActiveTab("videos");
                  }}
                  className="btn-cta flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#3D446C] hover:bg-[#3D446C]/90 text-white border border-[#56608F] text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 fill-white text-white" />
                  <span>2. Watch Chapter Video</span>
                </button>
              </div>
            </div>

            {/* CHAPTER QUICK RESOURCE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Option 1: PDF Book Card */}
              <div className="course-card bg-[#1C2036] border border-[#56608F] rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-xs text-white">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#3D446C] text-[#8FE388] border border-[#56608F] flex items-center justify-center font-bold shadow-sm mb-2">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8FE388]">
                    Primary Resource • PDF Book
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5 line-clamp-1">
                    {defaultBook.title}
                  </h4>
                  <p className="text-xs text-[#C4C9DE] mt-1 line-clamp-2">
                    {defaultBook.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleOpenPdfForChapter}
                    className="btn-cta flex-1 py-2 px-3 rounded-lg bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#1C2036]" /> Read PDF
                  </button>
                  <button
                    onClick={() => downloadSingleSubjectPdf(subject, subject.courseId, subject.semesterId)}
                    className="btn-cta py-2 px-3 rounded-lg bg-[#3D446C] hover:bg-[#3D446C]/90 text-[#8FE388] border border-[#56608F] text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                    title="Download Book PDF"
                  >
                    <FileDown className="w-3.5 h-3.5 text-[#8FE388]" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Option 2: Video Lecture Card */}
              <div className="course-card bg-[#1C2036] border border-[#56608F] rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-xs text-white">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#3D446C] text-[#8FE388] border border-[#56608F] flex items-center justify-center font-bold shadow-sm mb-2">
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8FE388]">
                    Secondary Resource • Video Tutorial
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5 line-clamp-1">
                    {defaultVideo.title}
                  </h4>
                  <p className="text-xs text-[#C4C9DE] mt-1">
                    Instructor: <strong className="text-white">{defaultVideo.instructor}</strong> • {defaultVideo.duration}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveVideo(defaultVideo);
                    setActiveTab("videos");
                  }}
                  className="btn-cta w-full py-2 px-3 rounded-lg bg-[#3D446C] hover:bg-[#3D446C]/90 text-[#8FE388] border border-[#56608F] text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-[#8FE388] text-[#8FE388]" /> Watch Video Lecture
                </button>
              </div>

              {/* Option 3: PDF Notes Card */}
              <div className="course-card bg-[#1C2036] border border-[#56608F] rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-xs text-white">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#3D446C] text-[#8FE388] border border-[#56608F] flex items-center justify-center font-bold shadow-sm mb-2">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8FE388]">
                    Supplementary • Chapter Notes
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5 line-clamp-1">
                    {defaultNote.title}
                  </h4>
                  <p className="text-xs text-[#C4C9DE] mt-1">
                    By {defaultNote.author} • {defaultNote.size} ({defaultNote.pages} Pages)
                  </p>
                </div>

                <button
                  onClick={() => setSelectedBookForPdf(defaultNote)}
                  className="btn-cta w-full py-2 px-3 rounded-lg bg-[#3D446C] hover:bg-[#3D446C]/90 text-[#8FE388] border border-[#56608F] text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" /> View PDF Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* TAB CONTENT 2: BOOKS LIST */}
      {/* ------------------------------------------------------------------ */}
      {activeTab === "books" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#8FE388]" />
              Recommended Textbooks & Reference Guides
            </h2>
            <span className="text-xs text-[#C4C9DE]">
              Click "Read PDF" to launch the interactive viewer.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book, idx) => (
              <div
                key={book.id}
                style={{ animationDelay: `${idx * 75}ms` }}
                className="course-card bg-[#292F4C] border border-[#56608F] hover:border-[#8FE388]/40 rounded-2xl p-5 flex flex-col sm:flex-row gap-5 transition-all shadow-xs animate-fade-in text-white"
              >
                {/* Book Cover Image */}
                <div className="w-full sm:w-36 h-48 rounded-xl overflow-hidden bg-[#1C2036] border border-[#56608F] shrink-0 relative group">
                  <ImageWithFallback
                    src={book.cover}
                    alt={book.title}
                    type="book"
                    fallbackTitle={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => setSelectedBookForPdf(book)}
                    className="absolute inset-0 bg-[#1C2036]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 text-xs font-bold text-white transition-opacity cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#8FE388]" /> Read PDF
                  </button>
                </div>

                {/* Book Details */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                        {book.edition}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mt-1">
                      {book.title}
                    </h3>
                    <p className="text-xs text-[#8FE388] font-semibold mt-0.5">
                      By {book.author}
                    </p>

                    <p className="text-xs text-[#C4C9DE] mt-2 line-clamp-3 leading-relaxed">
                      {book.summary}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-[#56608F] flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => setSelectedBookForPdf(book)}
                      className="btn-cta flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] text-xs font-bold shadow-xs transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#1C2036]" /> Read PDF Book
                    </button>

                    <button
                      onClick={() => setSelectedBookForPdf(book)}
                      className="btn-cta px-3 py-2 rounded-xl bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white border border-[#56608F] text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" /> View PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* TAB CONTENT 3: VIDEOS LIST */}
      {/* ------------------------------------------------------------------ */}
      {activeTab === "videos" && (
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Video className="w-5 h-5 text-[#8FE388]" />
            Curated Video Lectures & Tutorials
          </h2>

          {(activeVideo || videos[0]) && (
            <div className="bg-[#292F4C] border border-[#56608F] rounded-2xl overflow-hidden shadow-sm p-4 sm:p-6 space-y-4 text-white">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-[#1C2036] border border-[#56608F] shadow-inner">
                <iframe
                  src={(activeVideo || videos[0]).embedUrl}
                  title={(activeVideo || videos[0]).title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                    Topic: {(activeVideo || videos[0]).topic || "Chapter Lecture"}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {(activeVideo || videos[0]).title}
                  </h3>
                  <p className="text-xs text-[#C4C9DE] mt-0.5">
                    Instructor: <strong className="text-white">{(activeVideo || videos[0]).instructor}</strong> • Duration: {(activeVideo || videos[0]).duration}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {videos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setActiveVideo(vid)}
                className={`course-card group bg-[#292F4C] border rounded-xl p-3 cursor-pointer transition-all text-white ${
                  (activeVideo || videos[0])?.id === vid.id
                    ? "border-[#8FE388] ring-2 ring-[#8FE388]/30"
                    : "border-[#56608F] hover:border-[#8FE388]/40"
                }`}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-2 bg-[#1C2036] border border-[#56608F]">
                  <ImageWithFallback
                    src={vid.thumbnail}
                    alt={vid.title}
                    type="video"
                    fallbackTitle={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-[#1C2036]/40 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#8FE388] text-[#1C2036] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-[#1C2036] ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-[#1C2036]/90 border border-[#56608F] px-1.5 py-0.5 rounded text-white">
                    {vid.duration}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-white line-clamp-2 group-hover:text-[#8FE388]">
                  {vid.title}
                </h4>
                <p className="text-[11px] text-[#C4C9DE] mt-1">
                  {vid.instructor}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* TAB CONTENT 4: PDF NOTES LIST */}
      {/* ------------------------------------------------------------------ */}
      {activeTab === "notes" && (
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#8FE388]" />
            Study Notes, Handouts & Exam Materials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className="course-card bg-[#292F4C] border border-[#56608F] rounded-xl p-5 flex items-center justify-between gap-4 shadow-xs text-white"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#3D446C] border border-[#56608F] flex items-center justify-center text-[#8FE388] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white truncate group-hover:text-[#8FE388]">
                      {note.title}
                    </h4>
                    <p className="text-xs text-[#C4C9DE] mt-0.5 truncate">
                      By {note.author} • {note.size} ({note.pages} Pages)
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedBookForPdf(note)}
                  className="btn-cta flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] text-xs font-semibold transition-colors shrink-0 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#1C2036]" /> View PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive PDF Reader Modal */}
      <PdfViewerModal
        book={selectedBookForPdf}
        isOpen={!!selectedBookForPdf}
        onClose={() => setSelectedBookForPdf(null)}
      />
    </div>
  );
}
