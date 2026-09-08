import React from "react";
import { School, MapPin, ArrowRight, BookOpen, Calendar, ArrowLeft, Building2, Award } from "lucide-react";
import { UNIVERSITIES } from "../data/educationData";
import ImageWithFallback from "./ImageWithFallback";

export default function CollegeList({
  university,
  colleges,
  onSelectCollege,
  onBack,
  selectedCourseName
}) {
  return (
    <div className="space-y-5 animate-fade-in pb-4">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-slate-200 p-3.5 sm:p-4 rounded-xl shadow-xs">
        <div className="flex items-center gap-3 min-w-0">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-[0.97] shrink-0"
              title="Back"
            >
              <ArrowLeft className="w-4 h-4 text-[#1E40AF]" />
            </button>
          )}
          <div className="min-w-0 flex-1">
            <div className="text-[11px] uppercase font-bold text-[#1E40AF] tracking-wider truncate">
              {university ? university.shortName : (selectedCourseName || "Selected Course")}
            </div>
            <h1 className="text-base sm:text-lg font-bold text-[#1E293B] leading-snug truncate">
              {university 
                ? `Colleges & Departments in ${university.name}`
                : `Colleges Teaching ${selectedCourseName || "Selected Course"}`}
            </h1>
          </div>
        </div>

        <div className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-bold self-start sm:self-auto shrink-0 whitespace-nowrap">
          {colleges.length} Colleges & Depts
        </div>
      </div>

      {/* College Cards Grid: 4 Boxes per row on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {colleges.map((col) => {
          const parentUni = UNIVERSITIES.find(u => u.id === col.universityId);

          return (
            <div
              key={col.id}
              onClick={() => onSelectCollege(col)}
              className="group bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl overflow-hidden transition-all duration-200 shadow-2xs hover:shadow-md hover:scale-[1.01] cursor-pointer flex flex-col justify-between"
            >
              {/* Card Banner Image */}
              <div className="relative h-28 overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={col.image}
                  alt={col.name}
                  type="college"
                  fallbackTitle={col.shortName || col.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/25 to-transparent pointer-events-none" />
                
                {/* NAAC Grade Badge */}
                {col.naac && (
                  <div className="absolute top-2 right-2 z-10">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-600 text-white shadow-xs flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-300" />
                      NAAC: {col.naac}
                    </span>
                  </div>
                )}

                {/* College Type Tag */}
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1E40AF] text-white shadow-2xs truncate max-w-[65%]">
                    {col.type}
                  </span>
                  {parentUni && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 border border-amber-400 backdrop-blur-sm shadow-2xs flex items-center gap-1 shrink-0">
                      <Building2 className="w-2.5 h-2.5" />
                      {parentUni.shortName}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors leading-snug line-clamp-2" title={col.name}>
                    {col.name}
                  </h3>

                  <p className="text-[11px] text-[#64748B] flex items-center gap-1 mt-1.5">
                    <MapPin className="w-3 h-3 text-[#1E40AF] shrink-0" />
                    <span className="truncate">{col.address}</span>
                  </p>

                  {/* Offered Courses Badges (Clean preview) */}
                  {col.coursesOffered && col.coursesOffered.length > 0 && (
                    <div className="mt-2.5">
                      <div className="flex flex-wrap gap-1">
                        {col.coursesOffered.slice(0, 3).map((c, i) => (
                          <span key={i} className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-100 truncate max-w-full">
                            {c}
                          </span>
                        ))}
                        {col.coursesOffered.length > 3 && (
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                            +{col.coursesOffered.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Info & Action */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-1 text-[11px]">
                  <div className="flex items-center gap-2 text-[#64748B] font-medium">
                    {col.established && (
                      <span className="flex items-center gap-0.5 whitespace-nowrap">
                        <Calendar className="w-3 h-3 text-[#1E40AF] shrink-0" />
                        {col.established}
                      </span>
                    )}
                    <span className="flex items-center gap-0.5 text-[#1E293B] font-semibold whitespace-nowrap">
                      <BookOpen className="w-3 h-3 text-[#F59E0B] shrink-0" />
                      {col.coursesCount} Prog.
                    </span>
                  </div>

                  <span className="font-bold text-[#1E40AF] group-hover:text-[#1E3A8A] flex items-center gap-0.5 shrink-0 whitespace-nowrap">
                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}


