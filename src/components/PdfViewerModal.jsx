import React, { useState } from "react";
import { X, Eye, BookOpen, ZoomIn, ZoomOut, Maximize2, Sparkles } from "lucide-react";

export default function PdfViewerModal({ book, isOpen, onClose }) {
  const [zoom, setZoom] = useState(100);
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (!isOpen || !book) return null;

  const samplePdf = book.pdfUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div
        className={`bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ${
          isFullScreen ? "w-full h-full rounded-none" : "w-full max-w-5xl h-[92vh] sm:h-[88vh]"
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-3 border-b border-slate-200 bg-white rounded-t-2xl">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E40AF] flex-shrink-0">
              <BookOpen className="w-5 h-5 text-[#1E40AF]" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-base font-bold text-[#1E293B] truncate">
                {book.title}
              </h2>
              <p className="text-[11px] sm:text-xs text-[#64748B] truncate">
                By {book.author || "Academic Faculty"} • {book.pages || "N/A"} Pages
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden md:flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200 text-xs text-slate-700">
              <button
                onClick={() => setZoom(Math.max(50, zoom - 20))}
                className="p-1 hover:text-[#1E40AF]"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="w-10 text-center font-mono font-bold">{zoom}%</span>
              <button
                onClick={() => setZoom(Math.min(200, zoom + 20))}
                className="p-1 hover:text-[#1E40AF]"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors hidden sm:block"
              title={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              <Maximize2 className="w-4 h-4 text-[#1E40AF]" />
            </button>

            <a
              href={samplePdf}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white text-xs font-bold shadow-xs transition-colors active:scale-[0.97]"
              title="Open PDF in new tab"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors active:scale-[0.97]"
              title="Close Reader"
            >
              <X className="w-5 h-5 text-[#1E40AF]" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-hidden relative flex flex-col items-center justify-center">
          <div className="w-full h-full rounded-xl overflow-hidden border border-slate-200 bg-white relative shadow-inner">
            <iframe
              src={`${samplePdf}#toolbar=1&navpanes=0&zoom=${zoom}`}
              title={book.title}
              className="w-full h-full border-0"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

