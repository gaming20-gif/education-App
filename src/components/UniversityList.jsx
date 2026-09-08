import React from "react";
import { Building2, MapPin, Award, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export default function UniversityList({ universities, onSelectUniversity }) {
  return (
    <div className="space-y-6 animate-fade-in pb-4">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 p-3.5 sm:p-4 rounded-xl shadow-xs flex items-center justify-between gap-4">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-[#1E293B] tracking-tight">
            Academic Course & University Reference Hub
          </h1>
          <p className="text-xs text-[#64748B] mt-0.5">
            Select your university to access affiliated colleges, degree courses, syllabi, and study materials.
          </p>
        </div>
      </div>

      {/* University Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {universities.map((uni) => (
          <div
            key={uni.id}
            onClick={() => onSelectUniversity(uni)}
            className="group bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-[#1E40AF]/40 rounded-xl p-5 sm:p-6 transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Logo & Info */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 min-w-0">
                  <ImageWithFallback
                    src={uni.logo}
                    alt={uni.name}
                    type="university"
                    fallbackTitle={uni.shortName}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-slate-200 shadow-xs group-hover:scale-105 transition-transform shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors leading-snug">
                      {uni.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#64748B] mt-0.5">
                      <span className="flex items-center gap-1 font-medium truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#1E40AF] shrink-0" />
                        {uni.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] line-clamp-2 mb-4 leading-relaxed">
                {uni.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  {uni.type}
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#1E40AF] border border-blue-200">
                  Estd. {uni.established}
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-[#F59E0B] border border-amber-200 flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-[#F59E0B]" />
                  {uni.collegesCount} Colleges & Depts
                </span>
              </div>
            </div>

            {/* Footer action */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1E40AF] group-hover:text-[#1E3A8A]">
              <span>Browse Colleges & Departments</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

