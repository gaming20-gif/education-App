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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#292F4C] border border-[#56608F] p-3.5 sm:p-4 rounded-xl shadow-md">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white border border-[#56608F] transition-all active:scale-[0.97] shrink-0"
            title="Back to Colleges"
          >
            <ArrowLeft className="w-4 h-4 text-[#8FE388]" />
          </button>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] uppercase font-bold text-[#8FE388] tracking-wider truncate">
              {college.shortName}
            </div>
            <h1 className="text-base sm:text-lg font-bold text-white leading-snug truncate">
              Degree Courses in {college.name}
            </h1>
          </div>
        </div>

        <div className="px-2.5 py-1 rounded-full bg-[#3D446C]/40 border border-[#56608F] text-[#8FE388] text-xs font-bold self-start sm:self-auto shrink-0 whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#8FE388]" />
          <span>{courses.length} Degree Programs</span>
        </div>
      </div>

      {/* Courses List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => onSelectCourse(course)}
            className="group course-card bg-[#292F4C] border border-[#56608F] rounded-xl p-4 sm:p-6 cursor-pointer flex flex-col justify-between shadow-md"
          >
            <div>
              {/* Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1C2036] border border-[#56608F] flex items-center justify-center text-[#8FE388] group-hover:scale-105 transition-transform flex-shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#8FE388]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#8FE388] transition-colors leading-snug">
                      {course.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded bg-[#1C2036] text-[#8FE388] border border-[#56608F] whitespace-nowrap inline-block">
                        {course.degree}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#3D446C] text-[#8FE388] border border-[#56608F] whitespace-nowrap inline-block sm:hidden">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-[#3D446C] text-[#8FE388] border border-[#56608F] whitespace-nowrap shrink-0">
                  {course.level}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#C4C9DE] mt-2 mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Course Specs */}
              <div className="grid grid-cols-2 gap-2 bg-[#1C2036] p-3 rounded-lg border border-[#56608F] mb-4 text-xs">
                <div className="flex items-center gap-2 text-[#C4C9DE]">
                  <Clock className="w-4 h-4 text-[#8FE388]" />
                  <span>Duration: <strong className="text-white">{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-[#C4C9DE]">
                  <Layers className="w-4 h-4 text-[#8FE388]" />
                  <span>Total: <strong className="text-white">{course.totalSemesters} Semesters</strong></span>
                </div>
              </div>

              {/* Career Horizons */}
              {course.careerPaths && (
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-[#C4C9DE] flex items-center gap-1 mb-1.5 uppercase tracking-wider">
                    <Briefcase className="w-3.5 h-3.5 text-[#8FE388]" /> Career Opportunities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.careerPaths.map((career, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-[#1C2036] text-[#C4C9DE] border border-[#56608F]"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Select Action */}
            <div className="pt-3 border-t border-[#56608F] flex items-center justify-between text-xs font-bold text-[#8FE388] group-hover:text-white transition-colors">
              <span>Explore {course.totalSemesters} Semesters & Syllabus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

