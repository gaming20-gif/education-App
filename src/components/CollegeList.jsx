import React from "react";
import { School, MapPin, ArrowRight, BookOpen, Calendar, ArrowLeft, Building2 } from "lucide-react";
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
    <div className="space-y-6 animate-fade-in pb-4">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-4 sm:p-6 rounded-2xl shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4 min-w-0">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-[0.97] shrink-0 mt-0.5"
              title="Back"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E40AF]" />
            </button>
          )}
          <div className="min-w-0 flex-1">
            <div className="text-xs uppercase font-bold text-[#1E40AF] tracking-wider truncate">
              {university ? `University Unit • ${university.shortName}` : `Course Catalog • ${selectedCourseName || "Selected Course"}`}
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-[#1E293B] mt-0.5 leading-snug">
              {university 
                ? `Colleges & Departments in ${university.name}`
                : `Colleges & Departments Teaching ${selectedCourseName || "Selected Course"}`}
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
              Select any college or academic department below to explore available degree programs, semesters, and subject resources.
            </p>
          </div>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-bold self-start sm:self-auto shrink-0 whitespace-nowrap">
          {colleges.length} Colleges Available
        </div>
      </div>

      {/* College Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {colleges.map((col) => {
          const parentUni = UNIVERSITIES.find(u => u.id === col.universityId);

          return (
            <div
              key={col.id}
              onClick={() => onSelectCollege(col)}
              className="group bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl overflow-hidden transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={col.image}
                  alt={col.name}
                  type="college"
                  fallbackTitle={col.shortName || col.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#1E40AF] text-white shadow-xs">
                    {col.type}
                  </span>
                  {parentUni && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-bold border border-amber-400 backdrop-blur-sm shadow-xs flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {parentUni.shortName}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors leading-snug">
                    {col.name}
                  </h3>

                  {parentUni && (
                    <p className="text-xs font-semibold text-[#1E40AF] mt-0.5">
                      Affiliated with {parentUni.name}
                    </p>
                  )}

                  <p className="text-xs text-[#64748B] flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#1E40AF] shrink-0" />
                    <span className="truncate">{col.address}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-[#64748B] mt-3 line-clamp-2 leading-relaxed">
                    {col.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B] font-medium">
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5 text-[#1E40AF] shrink-0" />
                      Estd. {col.established}
                    </span>
                    <span className="flex items-center gap-1 text-[#1E293B] font-semibold whitespace-nowrap">
                      <BookOpen className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                      {col.coursesCount} Programs
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#1E40AF] group-hover:text-[#1E3A8A] flex items-center gap-1 shrink-0 whitespace-nowrap ml-auto sm:ml-0">
                    Explore College <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
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
