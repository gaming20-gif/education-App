import React, { useState } from "react";
import { BookOpen, CheckCircle, Award, Clock, ArrowRight, Sparkles, FileText, ChevronRight, FileDown, Check, FolderArchive } from "lucide-react";
import { COURSES, getSemestersForCourse, filterCoursesByCourse, filterSubjectsByCourse } from "../data/educationData";
import { downloadSemesterSubjectsZip, downloadSingleSubjectPdf } from "../utils/downloadHelper";

export default function MyCourseView({ onSelectSubject, onSelectCourse, currentUser }) {
  const userCourseStr = currentUser?.course || "M.Com (Master of Commerce)";

  const matchedCourses = filterCoursesByCourse(userCourseStr);
  const activeCourse = matchedCourses[0] || COURSES[0];
  const semesters = getSemestersForCourse(activeCourse);
  const courseSubjects = filterSubjectsByCourse(userCourseStr);

  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [downloadProgressMsg, setDownloadProgressMsg] = useState("");
  const [downloadedSubjectId, setDownloadedSubjectId] = useState(null);

  // Calculated metrics
  const completedCount = Math.min(courseSubjects.length, 2);
  const totalCredits = courseSubjects.reduce((acc, s) => acc + (s.credits || 4), 0);
  const completedCredits = completedCount * 4;
  const progressPercent = Math.round((completedCredits / Math.max(totalCredits, 1)) * 100);

  const handleDownloadAllSubjects = async () => {
    setIsDownloading(true);
    setDownloadProgressMsg("Preparing PDFs...");
    try {
      await downloadSemesterSubjectsZip(
        semesters[0] || { name: "Semester 1", semesterNumber: 1 },
        activeCourse,
        courseSubjects,
        (p) => {
          if (p.message) setDownloadProgressMsg(p.message);
        }
      );
      setIsDownloading(false);
      setIsDownloaded(true);
      setDownloadProgressMsg("");
      setTimeout(() => setIsDownloaded(false), 4000);
    } catch (err) {
      console.error(err);
      setIsDownloading(false);
      setDownloadProgressMsg("");
    }
  };

  const handleDownloadSinglePdf = (e, sub) => {
    e.stopPropagation();
    try {
      downloadSingleSubjectPdf(sub, activeCourse?.name, "Current Semester");
      setDownloadedSubjectId(sub.id);
      setTimeout(() => setDownloadedSubjectId(null), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      
      {/* Course Header Banner */}
      <div className="bg-[#292F4C] border border-[#56608F] rounded-3xl p-4 sm:p-8 shadow-sm relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3D446C]/20 rounded-full blur-3xl -z-10" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#3D446C] border border-[#56608F] text-[#8FE388] text-xs font-bold uppercase tracking-wider">
                Active Student Portal
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#1C2036] text-[#C4C9DE] border border-[#56608F] text-xs font-semibold">
                {currentUser?.stream ? `${currentUser.stream} Stream` : activeCourse.degree}
              </span>
            </div>
            
            <h1 className="text-xl sm:text-3xl font-bold text-white">
              {userCourseStr}
            </h1>
            <p className="text-sm text-[#C4C9DE] max-w-2xl leading-relaxed">
              {userCourseStr === "All Academic Courses"
                ? "Comprehensive academic access to all available programs, courses, subjects, and study materials across Commerce, Arts, and Science streams."
                : activeCourse.description}
            </p>
          </div>

          {/* Academic Progress Summary Box */}
          <div className="bg-[#1C2036] border border-[#56608F] rounded-2xl p-5 md:w-80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                {activeCourse.shortCode || "Degree"} Progress
              </span>
              <span className="text-xs font-bold text-[#8FE388]">
                {progressPercent}% Complete
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-1 border-t border-[#56608F]">
              <div>
                <div className="text-[#C4C9DE]">Total Credits</div>
                <div className="text-base font-bold text-white">{totalCredits} Credits</div>
              </div>
              <div>
                <div className="text-[#C4C9DE]">Earned</div>
                <div className="text-base font-bold text-[#8FE388]">{completedCredits} Credits</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Semesters & Subjects Overview */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#292F4C] p-4 rounded-2xl border border-[#56608F] shadow-xs text-white">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#8FE388]" />
            {userCourseStr} Curriculum & Subjects ({semesters.length} Semesters)
          </h2>
          
          <div className="flex items-center gap-2">
            {/* 1-Click Download All Books (PDF) */}
            <button
              onClick={handleDownloadAllSubjects}
              disabled={isDownloading}
              className={`btn-cta flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer ${
                isDownloaded
                  ? "bg-[#3D446C] text-[#8FE388] border border-[#56608F]"
                  : "bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036]"
              }`}
              title="Download all subject books and revision notes as genuine PDF documents in 1 click"
            >
              {isDownloading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-[#1C2036] border-t-transparent rounded-full animate-spin" />
                  <span className="truncate max-w-[150px]">{downloadProgressMsg || "Downloading..."}</span>
                </>
              ) : isDownloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#8FE388]" />
                  <span>All Books Downloaded!</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4 text-[#1C2036]" />
                  <span>Download All Subject Books (PDF)</span>
                  <span className="bg-[#3D446C] text-[#8FE388] text-[9px] px-1.5 py-0.5 rounded font-extrabold border border-[#56608F]">1-Click</span>
                </>
              )}
            </button>
          </div>
        </div>

        {isDownloaded && (
          <div className="bg-[#3D446C] border border-[#56608F] text-white p-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between animate-fade-in shadow-md">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#8FE388]" />
              <span>Downloaded semester ZIP file with all subject PDF textbooks and notes!</span>
            </div>
          </div>
        )}

        {downloadedSubjectId && (
          <div className="bg-[#3D446C] border border-[#56608F] text-[#8FE388] p-3 rounded-xl text-xs font-bold flex items-center gap-2 animate-fade-in shadow-xs">
            <CheckCircle className="w-4 h-4 text-[#8FE388] shrink-0" />
            <span>Downloaded Subject Book PDF!</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseSubjects.map((sub, idx) => {
            const isCompleted = idx < completedCount;

            return (
              <div
                key={sub.id}
                onClick={() => onSelectSubject(sub)}
                className="course-card bg-[#292F4C] border border-[#56608F] hover:border-[#8FE388]/50 rounded-2xl p-5 shadow-xs cursor-pointer flex flex-col justify-between group border-l-4 border-l-[#8FE388] text-white"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                      {sub.code || "SUB-101"}
                    </span>

                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Passed ({sub.credits || 4} Cr)
                      </span>
                    ) : (
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#1C2036] text-[#C4C9DE] border border-[#56608F]">
                        In Progress ({sub.credits || 4} Cr)
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#8FE388] transition-colors mt-1">
                    {sub.name}
                  </h3>

                  <p className="text-xs text-[#C4C9DE] mt-1 line-clamp-2 leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#56608F] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <button
                    type="button"
                    onClick={(e) => handleDownloadSinglePdf(e, sub)}
                    className="btn-cta flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1C2036] hover:bg-[#3D446C] text-[#8FE388] border border-[#56608F] font-bold text-xs transition-all shadow-2xs cursor-pointer"
                    title={`Download ${sub.name} Book PDF`}
                  >
                    <FileDown className="w-3.5 h-3.5 text-[#8FE388]" />
                    <span>Download PDF</span>
                  </button>

                  <span className="font-semibold text-[#8FE388] flex items-center gap-1">
                    View Details
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
