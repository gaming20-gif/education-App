import React, { useState } from "react";
import { ArrowRight, BookOpen, ArrowLeft, CheckCircle2, FileDown, Check } from "lucide-react";
import { downloadSemesterSubjectsZip } from "../utils/downloadHelper";
import { getSubjectsForSemester } from "../data/educationData";

export default function SemesterList({
  course,
  semesters,
  onSelectSemester,
  onBack
}) {
  const [downloadingSemId, setDownloadingSemId] = useState(null);
  const [downloadedSemId, setDownloadedSemId] = useState(null);
  const [downloadProgressMsg, setDownloadProgressMsg] = useState("");

  const handleDownloadSemester = async (e, sem) => {
    e.stopPropagation(); // prevent triggering onSelectSemester navigation
    setDownloadingSemId(sem.id);
    setDownloadProgressMsg("Preparing PDFs...");
    try {
      await downloadSemesterSubjectsZip(sem, course, null, (p) => {
        if (p.message) setDownloadProgressMsg(p.message);
      });
      setDownloadingSemId(null);
      setDownloadedSemId(sem.id);
      setDownloadProgressMsg("");
      setTimeout(() => setDownloadedSemId(null), 4000);
    } catch (err) {
      console.error("ZIP Generation error:", err);
      setDownloadingSemId(null);
      setDownloadProgressMsg("");
    }
  };

  const handleDownloadAllSemesters = async () => {
    for (const sem of semesters) {
      await downloadSemesterSubjectsZip(sem, course);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#292F4C] border border-[#56608F] p-3.5 sm:p-5 rounded-2xl shadow-md">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white border border-[#56608F] transition-all active:scale-[0.97] shrink-0"
            title="Back to Courses"
          >
            <ArrowLeft className="w-4 h-4 text-[#8FE388]" />
          </button>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] uppercase font-bold text-[#8FE388] tracking-wider truncate">
              {course.shortCode} Semesters
            </div>
            <h1 className="text-base sm:text-xl font-bold text-white leading-snug truncate">
              Semesters for {course.name}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto shrink-0 flex-wrap">
          {/* 1-Click Download All Semesters ZIP Button */}
          <button
            onClick={handleDownloadAllSemesters}
            className="btn-cta flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] text-xs font-bold shadow-md transition-all active:scale-[0.97]"
            title="Download ZIP package for all semesters with all subject books PDF in 1 click"
          >
            <FileDown className="w-4 h-4 text-[#1C2036]" />
            <span>Download All Semesters (All Books PDF)</span>
            <span className="bg-[#1C2036] text-[#8FE388] text-[9px] px-1.5 py-0.5 rounded font-extrabold">1-Click</span>
          </button>

          <div className="px-3 py-1.5 rounded-full bg-[#3D446C]/40 border border-[#56608F] text-[#8FE388] text-xs font-bold whitespace-nowrap">
            {semesters.length} Terms
          </div>
        </div>
      </div>

      {/* Toast Banner for Download Confirmation */}
      {downloadedSemId && (
        <div className="bg-[#3D446C] border border-[#8FE388]/40 text-white p-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between animate-fade-in shadow-md">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#8FE388] shrink-0" />
            <span>Downloaded semester ZIP file! Unzip to open all subject PDF textbooks and revision notes offline.</span>
          </div>
        </div>
      )}

      {/* Semesters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {semesters.map((sem) => {
          const subjects = getSubjectsForSemester(sem.id, course.id);
          const isDownloading = downloadingSemId === sem.id;
          const isDownloaded = downloadedSemId === sem.id;

          return (
            <div
              key={sem.id}
              onClick={() => onSelectSemester(sem)}
              className="group course-card bg-[#292F4C] border border-[#56608F] rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between border-l-4 border-l-[#8FE388] shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1C2036] border border-[#56608F] flex items-center justify-center text-[#8FE388] font-extrabold text-base group-hover:scale-105 transition-transform">
                    S{sem.semesterNumber}
                  </div>
                  
                  {/* 1-CLICK SEMESTER ALL BOOKS PDF DOWNLOAD BUTTON */}
                  <button
                    onClick={(e) => handleDownloadSemester(e, sem)}
                    disabled={isDownloading}
                    className={`btn-cta flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-[0.96] ${
                      isDownloaded
                        ? "bg-[#3D446C] text-[#8FE388] border border-[#8FE388]/40"
                        : "bg-[#1C2036] hover:bg-[#3D446C] text-[#8FE388] border border-[#56608F]"
                    }`}
                    title={`Download all subject books PDF for Semester ${sem.semesterNumber} in 1 click`}
                  >
                    {isDownloading ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-[#8FE388] border-t-transparent rounded-full animate-spin" />
                        <span className="truncate max-w-[120px]">{downloadProgressMsg || "Downloading..."}</span>
                      </>
                    ) : isDownloaded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#8FE388]" />
                        <span>Books Downloaded!</span>
                      </>
                    ) : (
                      <>
                        <FileDown className="w-3.5 h-3.5 text-[#8FE388]" />
                        <span>Download All Books (PDF)</span>
                        <span className="bg-[#3D446C] text-[#8FE388] text-[9px] px-1 rounded font-bold">1-Click</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#8FE388] transition-colors">
                    {sem.name}
                  </h3>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#1C2036] text-[#C4C9DE] border border-[#56608F]">
                    {subjects.length} Subjects
                  </span>
                </div>

                <p className="text-xs text-[#C4C9DE] mt-2 leading-relaxed">
                  Curriculum syllabus, subject reference books & video tutorials for Semester {sem.semesterNumber}.
                </p>

                {/* Subject List Badges */}
                <div className="mt-3 space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#C4C9DE]">
                    Included Subjects ({subjects.length}):
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {subjects.slice(0, 3).map(sub => (
                      <span key={sub.id} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#1C2036] text-[#C4C9DE] border border-[#56608F] truncate max-w-[180px]">
                        {sub.shortName || sub.name}
                      </span>
                    ))}
                    {subjects.length > 3 && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#3D446C] text-[#8FE388]">
                        +{subjects.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#56608F] flex items-center justify-between text-xs font-bold text-[#8FE388] group-hover:text-white transition-colors">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-[#8FE388]" /> View Semester Subjects
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
