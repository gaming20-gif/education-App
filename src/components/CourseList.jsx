import React from "react";
import { BookOpen, Layers, Clock, ArrowRight, GraduationCap, Briefcase, ArrowLeft, Sparkles } from "lucide-react";

export default function CourseList({
  college,
  courses,
  onSelectCourse,
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
            title="Back to Colleges"
          >
            <ArrowLeft className="w-5 h-5 text-[#1E40AF]" />
          </button>
          <div>
            <div className="text-xs uppercase font-bold text-[#1E40AF] tracking-wider">
              Step 3 of 5 • {college.shortName}
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] mt-0.5">
              Available Degree Courses in {college.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Select your course (e.g. M.Com, B.Com) to explore all semesters and subject resources.
            </p>
          </div>
        </div>

        <div className="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#F59E0B] text-xs font-bold self-start sm:self-auto flex items-center gap-1">
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
            className="group bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-6 transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Top Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E40AF] group-hover:scale-105 transition-transform flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#1E40AF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors">
                      {course.name}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200">
                      {course.degree}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-[#F59E0B] border border-amber-200 whitespace-nowrap">
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

