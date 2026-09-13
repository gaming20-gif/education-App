import React, { useState } from "react";
import {
  BookOpen,
  Video,
  FileText,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  LayoutGrid,
  List,
  Check,
  FileDown
} from "lucide-react";
import { downloadSemesterSubjectsZip, downloadSingleSubjectPdf } from "../utils/downloadHelper";

export default function SubjectList({
  semester,
  subjects,
  onSelectSubject,
  onBack
}) {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [progressStatus, setProgressStatus] = useState("");
  const [downloadedSubjectId, setDownloadedSubjectId] = useState(null);

  const handleDownloadAll = async () => {
    setIsDownloading(true);
    setProgressStatus("Preparing subject PDFs...");
    try {
      await downloadSemesterSubjectsZip(semester, null, subjects, (p) => {
        if (p.message) setProgressStatus(p.message);
      });
      setIsDownloading(false);
      setIsDownloaded(true);
      setProgressStatus("");
      setTimeout(() => setIsDownloaded(false), 4000);
    } catch (err) {
      console.error(err);
      setIsDownloading(false);
      setProgressStatus("");
    }
  };

  const handleDownloadSingleSubject = (e, sub) => {
    e.stopPropagation(); // Don't trigger onSelectSubject navigation
    try {
      downloadSingleSubjectPdf(sub, null, semester?.name || "Semester 1");
      setDownloadedSubjectId(sub.id);
      setTimeout(() => setDownloadedSubjectId(null), 3000);
    } catch (err) {
      console.error("Single PDF download failed:", err);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#292F4C] border border-[#56608F] p-3.5 sm:p-4 rounded-xl shadow-xs text-white">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBack}
            className="btn-cta p-2 rounded-xl bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white border border-[#56608F] transition-all cursor-pointer shrink-0"
            title="Back to Semesters"
          >
            <ArrowLeft className="w-4 h-4 text-[#8FE388]" />
          </button>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] uppercase font-bold text-[#8FE388] tracking-wider truncate">
              {semester.name} Curriculum
            </div>
            <h1 className="text-base sm:text-lg font-bold text-white leading-snug truncate">
              Subjects for {semester.name}
            </h1>
          </div>
        </div>

        {/* 1-Click ZIP Download Button, View Mode Toggle & Subject Count */}
        <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto shrink-0">
          {/* 1-CLICK DOWNLOAD ALL SEMESTER SUBJECTS BOOKS PDF BUTTON */}
          <button
            onClick={handleDownloadAll}
            disabled={isDownloading}
            className={`btn-cta flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer ${
              isDownloaded
                ? "bg-[#3D446C] text-[#8FE388] border border-[#56608F]"
                : isDownloading
                ? "bg-[#4CD964] text-[#1C2036] cursor-wait opacity-90"
                : "bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] hover:shadow-md"
            }`}
            title="Download all subject books and revision notes as authentic PDF documents in 1 click"
          >
            {isDownloading ? (
              <>
                <span className="w-4 h-4 border-2 border-[#1C2036] border-t-transparent rounded-full animate-spin" />
                <span className="truncate max-w-[190px]">{progressStatus || "Packaging PDFs..."}</span>
              </>
            ) : isDownloaded ? (
              <>
                <Check className="w-4 h-4 text-[#8FE388]" />
                <span>All Subject Books Downloaded!</span>
              </>
            ) : (
              <>
                <FileDown className="w-4 h-4 text-[#1C2036]" />
                <span>Download All Subject Books (PDF)</span>
                <span className="bg-[#3D446C] text-[#8FE388] text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold border border-[#56608F]">
                  1-Click
                </span>
              </>
            )}
          </button>

          <div className="flex items-center bg-[#1C2036] p-1 rounded-xl border border-[#56608F]">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#3D446C] text-[#8FE388] shadow-xs font-bold"
                  : "text-[#C4C9DE] hover:text-white"
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden md:inline">Grid</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                viewMode === "list"
                  ? "bg-[#3D446C] text-[#8FE388] shadow-xs font-bold"
                  : "text-[#C4C9DE] hover:text-white"
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
              <span className="hidden md:inline">List</span>
            </button>
          </div>

          <div className="px-3 py-1.5 rounded-full bg-[#3D446C] border border-[#56608F] text-[#8FE388] text-xs font-bold whitespace-nowrap">
            {subjects.length} Subjects Offered
          </div>
        </div>
      </div>

      {/* Prominent Quick-Action Download Callout Banner */}
      <div className="bg-gradient-to-r from-[#3D446C] via-[#292F4C] to-[#1C2036] border border-[#56608F] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs text-white">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#3D446C] text-[#8FE388] border border-[#56608F] flex items-center justify-center shrink-0 shadow-xs">
            <FileDown className="w-6 h-6 text-[#8FE388]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F] tracking-wider">
                Instant 1-Click
              </span>
              <span className="text-xs font-bold text-[#8FE388]">
                Complete Semester Study Bundle
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-bold text-white mt-0.5">
              Download All {subjects.length} Subject Books & Revision Notes (PDF)
            </h2>
            <p className="text-xs text-[#C4C9DE] mt-0.5">
              Generates genuine, offline-readable PDF textbooks and notes for every subject in {semester.name}.
            </p>
          </div>
        </div>

        <button
          onClick={handleDownloadAll}
          disabled={isDownloading}
          className="btn-cta px-4 py-2.5 rounded-xl bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 shrink-0 cursor-pointer"
        >
          <FileDown className="w-4 h-4 text-[#1C2036]" />
          <span>Download All {subjects.length} Subjects (1-Click ZIP)</span>
        </button>
      </div>

      {/* Toast Notification Banner when downloaded */}
      {isDownloaded && (
        <div className="bg-[#3D446C] border border-[#56608F] text-white p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between animate-fade-in shadow-md">
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-5 h-5 text-[#8FE388] shrink-0" />
            <span>
              All subject books downloaded successfully! Unzip the folder to read genuine PDF textbooks and revision notes offline.
            </span>
          </div>
        </div>
      )}

      {/* Toast Notification when single subject downloaded */}
      {downloadedSubjectId && (
        <div className="bg-[#3D446C] border border-[#56608F] text-[#8FE388] p-3 rounded-xl text-xs font-bold flex items-center gap-2 animate-fade-in shadow-xs">
          <CheckCircle className="w-4 h-4 text-[#8FE388] shrink-0" />
          <span>Downloaded Subject Book PDF!</span>
        </div>
      )}

      {/* Subjects Listing (Grid or List View) */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
        {subjects.map((sub) => (
          <div
            key={sub.id}
            onClick={() => onSelectSubject(sub)}
            className={`course-card group bg-[#292F4C] hover:bg-[#3D446C]/30 border border-[#56608F] hover:border-[#8FE388]/40 rounded-xl p-4 sm:p-6 transition-all shadow-xs cursor-pointer flex flex-col justify-between border-l-4 border-l-[#8FE388] text-white`}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                  {sub.code}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#1C2036] text-[#C4C9DE] border border-[#56608F] whitespace-nowrap">
                  {sub.credits} Credits
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#8FE388] transition-colors mt-1">
                {sub.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#C4C9DE] mt-2 mb-4 line-clamp-2 leading-relaxed">
                {sub.description}
              </p>

              {/* Resource Counters with Amber Book Icon */}
              <div className="grid grid-cols-3 gap-1 sm:gap-2 bg-[#1C2036] p-2.5 sm:p-3 rounded-lg border border-[#56608F] mb-4 text-[10px] sm:text-xs">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[#C4C9DE] font-medium truncate">
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8FE388] shrink-0" />
                  <span className="truncate"><strong className="text-white">{sub.books?.length || 0}</strong> Books</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[#C4C9DE] font-medium truncate">
                  <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8FE388] shrink-0" />
                  <span className="truncate"><strong className="text-white">{sub.videos?.length || 0}</strong> Videos</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[#C4C9DE] font-medium truncate">
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8FE388] shrink-0" />
                  <span className="truncate"><strong className="text-white">{sub.notes?.length || 0}</strong> Notes</span>
                </div>
              </div>

              {/* Syllabus Preview Tags */}
              {sub.syllabus && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-[#C4C9DE] uppercase tracking-wider">
                    Syllabus Modules ({sub.syllabus.length} Units)
                  </div>
                  <ul className="text-xs text-[#C4C9DE] space-y-1">
                    {sub.syllabus.slice(0, 2).map((unit, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 truncate">
                        <CheckCircle className="w-3.5 h-3.5 text-[#8FE388] flex-shrink-0" />
                        <span className="truncate text-white">{unit}</span>
                      </li>
                    ))}
                    {sub.syllabus.length > 2 && (
                      <li className="text-[11px] text-[#C4C9DE] font-semibold pl-5">
                        +{sub.syllabus.length - 2} more syllabus units...
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Footer: Direct 1-Click Book PDF Download + View Subject */}
            <div className="mt-5 pt-3 border-t border-[#56608F] flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
              <button
                type="button"
                onClick={(e) => handleDownloadSingleSubject(e, sub)}
                className="btn-cta flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C2036] hover:bg-[#3D446C] text-[#8FE388] border border-[#56608F] text-xs font-bold transition-all shadow-2xs cursor-pointer"
                title={`Download ${sub.name} Book PDF`}
              >
                <FileDown className="w-3.5 h-3.5 text-[#8FE388]" />
                <span>Download Book PDF</span>
              </button>

              <span className="flex items-center gap-1 text-[#8FE388] group-hover:text-[#8FE388]/80">
                <span>View Syllabus & Reader</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
