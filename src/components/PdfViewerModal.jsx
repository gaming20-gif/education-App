import React, { useState } from "react";
import { X, Eye, BookOpen, ZoomIn, ZoomOut, Maximize2, FileDown } from "lucide-react";
import { downloadSingleSubjectPdf } from "../utils/downloadHelper";

export default function PdfViewerModal({ book, isOpen, onClose }) {
  const [zoom, setZoom] = useState(100);
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (!isOpen || !book) return null;

  const samplePdf = book.pdfUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const handleDownload = () => {
    const subObj = book.subjectObj || {
      name: book.title,
      code: book.subjectCode || "REF-101",
      description: book.summary,
      books: [book]
    };
    downloadSingleSubjectPdf(subObj, "EduNexus Academic Portal", "Academic Edition");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#1C2036]/70 backdrop-blur-sm animate-fade-in">
      <div
        className={`bg-[#292F4C] border border-[#56608F] rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ${
          isFullScreen ? "w-full h-full rounded-none" : "w-full max-w-5xl h-[92vh] sm:h-[88vh]"
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-3 border-b border-[#56608F] bg-[#292F4C] rounded-t-2xl">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#3D446C] border border-[#56608F] flex items-center justify-center text-[#8FE388] flex-shrink-0">
              <BookOpen className="w-5 h-5 text-[#8FE388]" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-base font-bold text-white truncate">
                {book.title}
              </h2>
              <p className="text-[11px] sm:text-xs text-[#C4C9DE] truncate">
                By {book.author || "Academic Faculty"} • {book.pages || "N/A"} Pages
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden md:flex items-center gap-1 bg-[#1C2036] px-2 py-1 rounded-lg border border-[#56608F] text-xs text-white">
              <button
                onClick={() => setZoom(Math.max(50, zoom - 20))}
                className="p-1 hover:text-[#8FE388] cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="w-10 text-center font-mono font-bold">{zoom}%</span>
              <button
                onClick={() => setZoom(Math.min(200, zoom + 20))}
                className="p-1 hover:text-[#8FE388] cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-2 rounded-lg bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white transition-colors hidden sm:block cursor-pointer"
              title={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              <Maximize2 className="w-4 h-4 text-[#8FE388]" />
            </button>

            {/* Direct Download Button */}
            <button
              onClick={handleDownload}
              className="btn-cta flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] text-xs font-bold shadow-xs transition-colors cursor-pointer"
              title="Download textbook PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-[#1C2036]" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>

            <a
              href={samplePdf}
              target="_blank"
              rel="noreferrer"
              className="btn-cta flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3D446C] hover:bg-[#3D446C]/90 text-[#8FE388] border border-[#56608F] text-xs font-bold shadow-xs transition-colors cursor-pointer"
              title="Open PDF in new tab"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white transition-colors cursor-pointer"
              title="Close Reader"
            >
              <X className="w-5 h-5 text-[#C4C9DE]" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-[#1C2036] p-2 sm:p-4 overflow-hidden relative flex flex-col items-center justify-center">
          <div className="w-full h-full rounded-xl overflow-hidden border border-[#56608F] bg-white relative shadow-inner">
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
