import React from "react";
import { BookOpen, CheckCircle, Award, Clock, ArrowRight, Sparkles, FileText, ChevronRight } from "lucide-react";
import { COURSES, getSemestersForCourse, filterCoursesByCourse, filterSubjectsByCourse } from "../data/educationData";

export default function MyCourseView({ onSelectSubject, onSelectCourse, currentUser }) {
  const userCourseStr = currentUser?.course || "M.Com (Master of Commerce)";

  const matchedCourses = filterCoursesByCourse(userCourseStr);
  const activeCourse = matchedCourses[0] || COURSES[0];
  const semesters = getSemestersForCourse(activeCourse);
  const courseSubjects = filterSubjectsByCourse(userCourseStr);

  // Calculated metrics
  const completedCount = Math.min(courseSubjects.length, 2);
  const totalCredits = courseSubjects.reduce((acc, s) => acc + (s.credits || 4), 0);
  const completedCredits = completedCount * 4;
  const progressPercent = Math.round((completedCredits / Math.max(totalCredits, 1)) * 100);

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      
      {/* Course Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-bold uppercase tracking-wider">
                Active Student Portal
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-[#F59E0B] border border-amber-500/20 text-xs font-semibold">
                {currentUser?.stream ? `${currentUser.stream} Stream` : activeCourse.degree}
              </span>
            </div>
            
            <h1 className="text-xl sm:text-3xl font-bold text-[#1E293B]">
              {userCourseStr}
            </h1>
            <p className="text-sm text-[#64748B] max-w-2xl leading-relaxed">
              {userCourseStr === "All Academic Courses"
                ? "Comprehensive academic access to all available programs, courses, subjects, and study materials across Commerce, Arts, and Science streams."
                : activeCourse.description}
            </p>
          </div>

          {/* Academic Progress Summary Box */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 md:w-80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1E293B] uppercase tracking-wider">
                {activeCourse.shortCode || "Degree"} Progress
              </span>
              <span className="text-xs font-bold text-[#10B981]">
                {progressPercent}% Complete
              </span>
            </div>

            {/* Success Green Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-[#10B981] h-3 rounded-full animate-progress-fill transition-all duration-800"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-1 border-t border-slate-200/80">
              <div>
                <div className="text-[#64748B]">Total Credits</div>
                <div className="text-base font-bold text-[#1E293B]">{totalCredits} Credits</div>
              </div>
              <div>
                <div className="text-[#64748B]">Earned</div>
                <div className="text-base font-bold text-[#10B981]">{completedCredits} Credits</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Semesters & Subjects Overview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#1E293B] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#1E40AF]" />
            {userCourseStr} Curriculum & Subjects ({semesters.length} Semesters)
          </h2>
          <span className="text-xs font-medium text-[#64748B]">
            Click any subject to view reference books & PDF notes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseSubjects.map((sub, idx) => {
            const isCompleted = idx < completedCount;

            return (
              <div
                key={sub.id}
                onClick={() => onSelectSubject(sub)}
                className="bg-white border border-slate-200 hover:border-[#1E40AF]/50 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.01] cursor-pointer flex flex-col justify-between group border-l-4 border-l-[#1E40AF]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200">
                      {sub.code || "SUB-101"}
                    </span>

                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#10B981] border border-emerald-200">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Passed ({sub.credits || 4} Cr)
                      </span>
                    ) : (
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F59E0B] border border-amber-200">
                        In Progress ({sub.credits || 4} Cr)
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors mt-1">
                    {sub.name}
                  </h3>

                  <p className="text-xs text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-[#64748B]">
                    <span className="flex items-center gap-1 font-medium text-[#F59E0B]">
                      <BookOpen className="w-3.5 h-3.5 text-[#F59E0B]" />
                      {sub.books?.length || 0} Textbooks
                    </span>
                    <span>• {sub.notes?.length || 0} Notes</span>
                  </div>

                  <span className="font-semibold text-[#1E40AF] group-hover:text-[#1E3A8A] flex items-center gap-1">
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
