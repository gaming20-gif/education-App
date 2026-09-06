import React, { useState } from "react";
import { BookOpen, Video, FileText, ArrowRight, CheckCircle, ArrowLeft, LayoutGrid, List, Sparkles } from "lucide-react";

export default function SubjectList({
  semester,
  subjects,
  onSelectSubject,
  onBack
}) {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-[0.97]"
            title="Back to Semesters"
          >
            <ArrowLeft className="w-5 h-5 text-[#1E40AF]" />
          </button>
          <div>
            <div className="text-xs uppercase font-bold text-[#1E40AF] tracking-wider flex items-center gap-1.5">
              <span>Semester Curriculum</span> • <span>{semester.name}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] mt-0.5">
              Course Subjects for {semester.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Click on any subject card to access recommended textbooks, downloadable PDF notes, and syllabus details.
            </p>
          </div>
        </div>

        {/* View Mode Toggle & Subject Count */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all active:scale-[0.97] ${
                viewMode === "grid"
                  ? "bg-white text-[#1E40AF] shadow-xs font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden md:inline">Grid</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all active:scale-[0.97] ${
                viewMode === "list"
                  ? "bg-white text-[#1E40AF] shadow-xs font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
              <span className="hidden md:inline">List</span>
            </button>
          </div>

          <div className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-bold whitespace-nowrap">
            {subjects.length} Subjects Offered
          </div>
        </div>
      </div>

      {/* Subjects Listing (Grid or List View) */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
        {subjects.map((sub, index) => (
          <div
            key={sub.id}
            onClick={() => onSelectSubject(sub)}
            className={`group bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-6 transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.02] cursor-pointer flex flex-col justify-between border-l-4 border-l-[#1E40AF]`}
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200">
                    {sub.code}
                  </span>
                  <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors mt-2">
                    {sub.name}
                  </h3>
                </div>

                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-[#64748B] border border-slate-200 whitespace-nowrap">
                  {sub.credits} Credits
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mt-2 mb-4 line-clamp-2 leading-relaxed">
                {sub.description}
              </p>

              {/* Resource Counters with Amber Book Icon */}
              <div className="grid grid-cols-3 gap-2 bg-[#F8FAFC] p-3 rounded-lg border border-slate-200 mb-4 text-xs">
                <div className="flex items-center gap-1.5 text-[#1E293B] font-medium">
                  <BookOpen className="w-4 h-4 text-[#F59E0B]" />
                  <span><strong className="text-[#1E40AF]">{sub.books?.length || 0}</strong> Books</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#1E293B] font-medium">
                  <Video className="w-4 h-4 text-[#1E40AF]" />
                  <span><strong className="text-[#1E40AF]">{sub.videos?.length || 0}</strong> Videos</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#1E293B] font-medium">
                  <FileText className="w-4 h-4 text-[#10B981]" />
                  <span><strong className="text-[#10B981]">{sub.notes?.length || 0}</strong> Notes</span>
                </div>
              </div>

              {/* Syllabus Preview Tags */}
              {sub.syllabus && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                    Syllabus Modules ({sub.syllabus.length} Units)
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1">
                    {sub.syllabus.slice(0, 2).map((unit, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 truncate">
                        <CheckCircle className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                        <span className="truncate">{unit}</span>
                      </li>
                    ))}
                    {sub.syllabus.length > 2 && (
                      <li className="text-[11px] text-[#64748B] font-semibold pl-5">
                        +{sub.syllabus.length - 2} more syllabus units...
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Footer */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1E40AF] group-hover:text-[#1E3A8A]">
              <span className="flex items-center gap-1">
                View Textbooks & PDF Reader
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

