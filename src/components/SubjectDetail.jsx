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
  ExternalLink,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import PdfViewerModal from "./PdfViewerModal";

export default function SubjectDetail({ subject, onBack }) {
  const [activeTab, setActiveTab] = useState("books");
  const [selectedBookForPdf, setSelectedBookForPdf] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(
    subject.videos?.[0] || null
  );
  const [expandedUnit, setExpandedUnit] = useState(0);

  const books = subject.books || [];
  const videos = subject.videos || [];
  const notes = subject.notes || [];

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      
      {/* Header Banner */}
      <div className="bg-[#1E40AF] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-900/20 relative overflow-hidden">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-start gap-4">
            <button
              onClick={onBack}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all active:scale-[0.97] mt-1 border border-white/20"
              title="Back to Subjects"
            >
              <ArrowLeft className="w-5 h-5 text-amber-300" />
            </button>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  {subject.code}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white/10 text-blue-100 border border-white/20">
                  {subject.credits} Credits
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {subject.name}
              </h1>

              <p className="text-xs sm:text-sm text-blue-100/90 mt-2 max-w-3xl leading-relaxed">
                {subject.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/20 text-xs text-white">
            <div className="text-center px-3 border-r border-white/20">
              <span className="block text-lg font-bold text-amber-400">{books.length}</span>
              <span className="text-[11px] text-blue-100">Books</span>
            </div>
            <div className="text-center px-3 border-r border-white/20">
              <span className="block text-lg font-bold text-blue-200">{videos.length}</span>
              <span className="text-[11px] text-blue-100">Videos</span>
            </div>
            <div className="text-center px-3">
              <span className="block text-lg font-bold text-emerald-300">{notes.length}</span>
              <span className="text-[11px] text-blue-100">Notes</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mt-8 pt-4 border-t border-white/15 overflow-x-auto">
          <button
            onClick={() => setActiveTab("books")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-[0.97] ${
              activeTab === "books"
                ? "bg-[#F59E0B] text-white shadow-md"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>Recommended Books ({books.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-[0.97] ${
              activeTab === "videos"
                ? "bg-[#F59E0B] text-white shadow-md"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
            }`}
          >
            <Video className="w-4 h-4 text-amber-300" />
            <span>Video Lectures ({videos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("syllabus")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-[0.97] ${
              activeTab === "syllabus"
                ? "bg-[#F59E0B] text-white shadow-md"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
            }`}
          >
            <Layers className="w-4 h-4 text-amber-300" />
            <span>Syllabus & Units</span>
          </button>

          <button
            onClick={() => setActiveTab("notes")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-[0.97] ${
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

      {/* TAB CONTENT 1: BOOKS */}
      {activeTab === "books" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#1E293B] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#F59E0B]" />
              Recommended Course Textbooks
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
                <div className="w-full sm:w-36 h-48 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0 relative group">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => setSelectedBookForPdf(book)}
                    className="absolute inset-0 bg-[#1E40AF]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 text-xs font-bold text-white transition-opacity"
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

                  {/* Actions: Amber Button for CTA */}
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

      {/* TAB CONTENT 2: VIDEOS */}
      {activeTab === "videos" && (
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-[#1E293B] flex items-center gap-2">
            <Video className="w-5 h-5 text-[#1E40AF]" />
            Curated Video Lectures & Tutorials
          </h2>

          {selectedVideo && (
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-4 sm:p-6 space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
                <iframe
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200">
                    Topic: {selectedVideo.topic || "Lecture Overview"}
                  </span>
                  <h3 className="text-lg font-bold text-[#1E293B] mt-1">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Instructor: <strong>{selectedVideo.instructor}</strong> • Duration: {selectedVideo.duration}
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
                onClick={() => setSelectedVideo(vid)}
                className={`group bg-white border rounded-xl p-3 cursor-pointer transition-all active:scale-[0.97] ${
                  selectedVideo?.id === vid.id
                    ? "border-[#1E40AF] ring-2 ring-[#1E40AF]/20"
                    : "border-slate-200 hover:border-[#1E40AF]/40"
                }`}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-2 bg-slate-900">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
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

      {/* TAB CONTENT 3: SYLLABUS ACCORDION */}
      {activeTab === "syllabus" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
          <h2 className="text-lg font-bold text-[#1E293B] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#1E40AF]" />
            Complete Curriculum Syllabus & Accordion Units
          </h2>

          {subject.syllabus ? (
            <div className="space-y-3">
              {subject.syllabus.map((unit, idx) => {
                const isOpen = expandedUnit === idx;

                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] border border-slate-200 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedUnit(isOpen ? -1 : idx)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-100/60 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E40AF] font-bold text-sm flex-shrink-0">
                          U{idx + 1}
                        </div>
                        <h3 className="text-sm font-bold text-[#1E293B]">{unit}</h3>
                      </div>

                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#1E40AF]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-[#64748B] border-t border-slate-200/60 space-y-2 animate-fade-in">
                        <p>
                          Comprehensive study module covering key theoretical derivations, numerical problems, Ind-AS compliance, and university exam preparation.
                        </p>
                        <div className="flex items-center gap-2 font-medium text-[#10B981]">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Includes Solved Past Examination Papers (2020-2025)</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs text-[#64748B]">No syllabus available.</p>
          )}
        </div>
      )}

      {/* TAB CONTENT 4: NOTES */}
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#10B981] flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1E293B]">
                      {note.title}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      By {note.author} • {note.size} ({note.pages} Pages)
                    </p>
                  </div>
                </div>

                <a
                  href={note.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#10B981] hover:bg-emerald-600 text-white text-xs font-semibold transition-colors flex-shrink-0 active:scale-[0.97]"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PDF Modal Player */}
      <PdfViewerModal
        book={selectedBookForPdf}
        isOpen={!!selectedBookForPdf}
        onClose={() => setSelectedBookForPdf(null)}
      />
    </div>
  );
}

