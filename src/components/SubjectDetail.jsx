import React, { useState } from "react";
import {
  BookOpen,
  Video,
  FileText,
  Download,
  Eye,
  Play,
  CheckCircle,
  Award,
  Layers,
  ArrowLeft,
  Sparkles,
  Bookmark,
  ChevronRight
} from "lucide-react";
import PdfViewerModal from "./PdfViewerModal";
import ImageWithFallback from "./ImageWithFallback";

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
      <div className="bg-[#1E40AF] text-white rounded-2xl p-4 sm:p-7 shadow-md border border-blue-900/20 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1 w-full">
            <button
              onClick={onBack}
              className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all active:scale-[0.97] mt-0.5 border border-white/20 shrink-0"
              title="Back"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  {subject.code}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white/10 text-blue-100 border border-white/20">
                  {subject.credits} Credits
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  {syllabusUnits.length} Chapters / Units
                </span>
              </div>

              <h1 className="text-xl sm:text-3xl font-extrabold text-white mt-2 leading-snug">
                {subject.name}
              </h1>

              <p className="text-xs sm:text-sm text-blue-100/90 mt-1.5 max-w-3xl leading-relaxed">
                {subject.description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-around md:justify-start gap-2 sm:gap-3 bg-white/10 p-2.5 rounded-xl border border-white/20 text-xs text-white shrink-0 w-full md:w-auto self-stretch md:self-start">
            <div className="text-center px-2 sm:px-3 border-r border-white/20">
              <span className="block text-base sm:text-lg font-bold text-amber-400">
                {syllabusUnits.length}
              </span>
              <span className="text-[10px] text-blue-100">Chapters</span>
            </div>
            <div className="text-center px-2 sm:px-3 border-r border-white/20">
              <span className="block text-base sm:text-lg font-bold text-blue-200">
                {books.length}
              </span>
              <span className="text-[10px] text-blue-100">Books</span>
            </div>
            <div className="text-center px-2 sm:px-3">
              <span className="block text-base sm:text-lg font-bold text-emerald-300">
                {videos.length}
              </span>
              <span className="text-[10px] text-blue-100">Videos</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/15 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("chapters")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-[0.97] ${
              activeTab === "chapters"
                ? "bg-[#F59E0B] text-white shadow-md"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
            }`}
          >
            <Bookmark className="w-4 h-4 text-amber-300" />
            <span>Chapters Explorer ({syllabusUnits.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("books")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-[0.97] ${
              activeTab === "books"
                ? "bg-[#F59E0B] text-white shadow-md"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>Textbooks ({books.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-[0.97] ${
              activeTab === "videos"
                ? "bg-[#F59E0B] text-white shadow-md"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
            }`}
          >
            <Video className="w-4 h-4 text-amber-300" />
            <span>Video Lectures ({videos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("notes")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-[0.97] ${
              activeTab === "notes"
                ? "bg-[#F59E0B] text-white shadow-md"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
            }`}
          >
            <FileText className="w-4 h-4 text-amber-300" />
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
              <h2 className="text-base sm:text-lg font-bold text-[#1E293B] flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-[#F59E0B]" />
                Select Chapter / Unit
              </h2>
              <span className="text-xs text-[#64748B] font-medium">
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
                    className={`group cursor-pointer p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 shadow-xs active:scale-[0.98] ${
                      isSelected
                        ? "bg-[#1E40AF] text-white border-[#1E40AF] shadow-md ring-2 ring-blue-300"
                        : "bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-blue-400"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isSelected
                          ? "bg-amber-400 text-blue-950"
                          : "bg-blue-50 text-[#1E40AF] border border-blue-200"
                      }`}
                    >
                      Ch {idx + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-[10px] uppercase font-extrabold tracking-wider ${
                          isSelected ? "text-amber-300" : "text-[#1E40AF]"
                        }`}
                      >
                        Chapter {idx + 1}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug mt-0.5">
                        {unitTitle}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ACTIVE CHAPTER RESOURCE HUB (First PDF & Video Options) */}
          <div className="bg-white border-2 border-[#1E40AF]/30 rounded-2xl p-5 sm:p-7 shadow-md space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#D97706] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Active Selected Chapter {selectedChapterIdx + 1}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#1E293B] mt-2 leading-snug">
                  {currentChapterTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Access official textbook PDF reader, stream video lectures, or download handwritten notes for Chapter {selectedChapterIdx + 1}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0 w-full sm:w-auto">
                {/* 1. PDF BUTTON */}
                <button
                  onClick={handleOpenPdfForChapter}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.97] w-full sm:w-auto"
                >
                  <Eye className="w-4 h-4" />
                  <span>1. Read Chapter PDF Book</span>
                </button>

                {/* 2. VIDEO BUTTON */}
                <button
                  onClick={() => {
                    setActiveVideo(defaultVideo);
                    setActiveTab("videos");
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E40AF] hover:bg-blue-900 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.97] w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>2. Watch Chapter Video</span>
                </button>
              </div>
            </div>

            {/* CHAPTER QUICK RESOURCE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Option 1: PDF Book Card */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-sm mb-2">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D97706]">
                    Primary Resource • PDF Book
                  </span>
                  <h4 className="text-sm font-bold text-[#1E293B] mt-0.5 line-clamp-1">
                    {defaultBook.title}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                    {defaultBook.summary}
                  </p>
                </div>

                <button
                  onClick={handleOpenPdfForChapter}
                  className="w-full py-2 px-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" /> Read PDF Book
                </button>
              </div>

              {/* Option 2: Video Lecture Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center font-bold shadow-sm mb-2">
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E40AF]">
                    Secondary Resource • Video Tutorial
                  </span>
                  <h4 className="text-sm font-bold text-[#1E293B] mt-0.5 line-clamp-1">
                    {defaultVideo.title}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1">
                    Instructor: <strong>{defaultVideo.instructor}</strong> • {defaultVideo.duration}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveVideo(defaultVideo);
                    setActiveTab("videos");
                  }}
                  className="w-full py-2 px-3 rounded-lg bg-[#1E40AF] hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-white" /> Watch Video Lecture
                </button>
              </div>

              {/* Option 3: Downloadable PDF Notes Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#10B981] text-white flex items-center justify-center font-bold shadow-sm mb-2">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#10B981]">
                    Supplementary • Chapter Notes
                  </span>
                  <h4 className="text-sm font-bold text-[#1E293B] mt-0.5 line-clamp-1">
                    {defaultNote.title}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1">
                    By {defaultNote.author} • {defaultNote.size} ({defaultNote.pages} Pages)
                  </p>
                </div>

                <a
                  href={defaultNote.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-[#10B981] hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Download Notes PDF
                </a>
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
            <h2 className="text-lg font-bold text-[#1E293B] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#F59E0B]" />
              Recommended Textbooks & Reference Guides
            </h2>
            <span className="text-xs text-[#64748B]">
              Click "Read PDF" to launch the interactive viewer.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book, idx) => (
              <div
                key={book.id}
                style={{ animationDelay: `${idx * 75}ms` }}
                className="bg-white border border-slate-200 hover:border-[#1E40AF]/40 rounded-2xl p-5 flex flex-col sm:flex-row gap-5 transition-all shadow-xs hover:shadow-md hover:scale-[1.01] animate-fade-in"
              >
                {/* Book Cover Image */}
                <div className="w-full sm:w-36 h-48 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 relative group">
                  <ImageWithFallback
                    src={book.cover}
                    alt={book.title}
                    type="book"
                    fallbackTitle={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => setSelectedBookForPdf(book)}
                    className="absolute inset-0 bg-[#1E40AF]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 text-xs font-bold text-white transition-opacity"
                  >
                    <Eye className="w-4 h-4 text-amber-300" /> Read PDF
                  </button>
                </div>

                {/* Book Details */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200">
                        {book.edition}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#1E293B] mt-1">
                      {book.title}
                    </h3>
                    <p className="text-xs text-[#1E40AF] font-semibold mt-0.5">
                      By {book.author}
                    </p>

                    <p className="text-xs text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
                      {book.summary}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => setSelectedBookForPdf(book)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white text-xs font-bold shadow-xs transition-colors active:scale-[0.97]"
                    >
                      <Eye className="w-3.5 h-3.5" /> Read PDF Book
                    </button>

                    <a
                      href={book.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1 active:scale-[0.97]"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </a>
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
          <h2 className="text-lg font-bold text-[#1E293B] flex items-center gap-2">
            <Video className="w-5 h-5 text-[#1E40AF]" />
            Curated Video Lectures & Tutorials
          </h2>

          {(activeVideo || videos[0]) && (
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-4 sm:p-6 space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
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
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200">
                    Topic: {(activeVideo || videos[0]).topic || "Chapter Lecture"}
                  </span>
                  <h3 className="text-lg font-bold text-[#1E293B] mt-1">
                    {(activeVideo || videos[0]).title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Instructor: <strong>{(activeVideo || videos[0]).instructor}</strong> • Duration: {(activeVideo || videos[0]).duration}
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
                className={`group bg-white border rounded-xl p-3 cursor-pointer transition-all active:scale-[0.97] ${
                  (activeVideo || videos[0])?.id === vid.id
                    ? "border-[#1E40AF] ring-2 ring-[#1E40AF]/20"
                    : "border-slate-200 hover:border-[#1E40AF]/40"
                }`}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-2 bg-slate-900">
                  <ImageWithFallback
                    src={vid.thumbnail}
                    alt={vid.title}
                    type="video"
                    fallbackTitle={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-slate-950/80 px-1.5 py-0.5 rounded text-white">
                    {vid.duration}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-[#1E293B] line-clamp-2">
                  {vid.title}
                </h4>
                <p className="text-[11px] text-[#64748B] mt-1">
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
          <h2 className="text-lg font-bold text-[#1E293B] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#10B981]" />
            Study Notes, Handouts & Exam Materials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between gap-4 shadow-xs hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#10B981] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-[#1E293B] truncate">
                      {note.title}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5 truncate">
                      By {note.author} • {note.size} ({note.pages} Pages)
                    </p>
                  </div>
                </div>

                <a
                  href={note.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#10B981] hover:bg-emerald-600 text-white text-xs font-semibold transition-colors shrink-0 active:scale-[0.97]"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
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
