import React from "react";
import { BookOpen, Layers, Clock, ArrowRight, GraduationCap, Briefcase, ArrowLeft, Sparkles } from "lucide-react";

export default function CourseList({
  college,
  courses,
  onSelectCourse,
  onBack
}) {
  return (
    <div className="space-y-6 animate-fade-in pb-4">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-4 sm:p-6 rounded-2xl shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4 min-w-0">
          <button
            onClick={onBack}
            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-[0.97] shrink-0 mt-0.5"
            title="Back to Colleges"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E40AF]" />
          </button>
          <div className="min-w-0 flex-1">
            <div className="text-xs uppercase font-bold text-[#1E40AF] tracking-wider truncate">
              Step 3 of 5 • {college.shortName}
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-[#1E293B] mt-0.5 leading-snug">
              Available Degree Courses in {college.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
              Select your course (e.g. M.Com, B.Com) to explore all semesters and subject resources.
            </p>
          </div>
        </div>

        <div className="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#F59E0B] text-xs font-bold self-start sm:self-auto shrink-0 whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{courses.length} Degree Programs</span>
        </div>
      </div>

      {/* Courses List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => onSelectCourse(course)}
            className="group bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-4 sm:p-6 transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E40AF] group-hover:scale-105 transition-transform flex-shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E40AF]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors leading-snug">
                      {course.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200 whitespace-nowrap inline-block">
                        {course.degree}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F59E0B] border border-amber-200 whitespace-nowrap inline-block sm:hidden">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-[#F59E0B] border border-amber-200 whitespace-nowrap shrink-0">
                  {course.level}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-2 mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Course Specs */}
              <div className="grid grid-cols-2 gap-2 bg-[#F8FAFC] p-3 rounded-lg border border-slate-200 mb-4 text-xs">
                <div className="flex items-center gap-2 text-[#1E293B]">
                  <Clock className="w-4 h-4 text-[#1E40AF]" />
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-[#1E293B]">
                  <Layers className="w-4 h-4 text-[#1E40AF]" />
                  <span>Total: <strong>{course.totalSemesters} Semesters</strong></span>
                </div>
              </div>

              {/* Career Horizons */}
              {course.careerPaths && (
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-[#64748B] flex items-center gap-1 mb-1.5 uppercase tracking-wider">
                    <Briefcase className="w-3.5 h-3.5 text-[#F59E0B]" /> Career Opportunities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.careerPaths.map((career, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Select Action */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1E40AF] group-hover:text-[#1E3A8A]">
              <span>Explore {course.totalSemesters} Semesters & Syllabus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

