import React from "react";
import { Layers, ArrowRight, BookOpen, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function SemesterList({
  course,
  semesters,
  onSelectSemester,
  onBack
}) {
  return (
    <div className="space-y-6 animate-fade-in pb-16">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-[0.97]"
            title="Back to Courses"
          >
            <ArrowLeft className="w-5 h-5 text-[#1E40AF]" />
          </button>
          <div>
            <div className="text-xs uppercase font-bold text-[#1E40AF] tracking-wider">
              Step 4 of 5 • {course.shortCode} Semesters
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] mt-0.5">
              Select Semester for {course.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Click on any semester below to view its syllabus, subjects, recommended textbooks, and video lectures.
            </p>
          </div>
        </div>

        <div className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-bold self-start sm:self-auto">
          {semesters.length} Academic Terms
        </div>
      </div>

      {/* Semesters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {semesters.map((sem) => (
          <div
            key={sem.id}
            onClick={() => onSelectSemester(sem)}
            className="group bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-5 transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.02] cursor-pointer flex flex-col justify-between border-l-4 border-l-[#1E40AF]"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E40AF] font-extrabold text-base group-hover:scale-105 transition-transform">
                  S{sem.semesterNumber}
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F59E0B] border border-amber-200">
                  {sem.subjectsCount} Subjects
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors">
                {sem.name}
              </h3>
              <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                Curriculum syllabus, subject reference books & video tutorials for Semester {sem.semesterNumber}.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1E40AF] group-hover:text-[#1E3A8A]">
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-[#F59E0B]" /> View Subjects
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

