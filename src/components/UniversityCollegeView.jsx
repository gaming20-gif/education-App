import React, { useState } from "react";
import { Building2, School, GraduationCap } from "lucide-react";
import UniversityList from "./UniversityList";
import CollegeList from "./CollegeList";

export default function UniversityCollegeView({
  universities,
  colleges,
  onSelectUniversity,
  onSelectCollege,
  selectedCourseName
}) {
  const [subTab, setSubTab] = useState("all"); // 'all' | 'universities' | 'colleges'

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      {/* Top Banner Header */}
      <div className="bg-[#292F4C] border border-[#56608F] p-4 sm:p-5 rounded-2xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FE388] uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4 text-[#8FE388]" />
            <span>EduNexus Directory</span>
          </div>
          <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
            Universities & Colleges Reference Hub
          </h1>
          <p className="text-xs sm:text-sm text-[#C4C9DE] mt-1">
            Browse all affiliated Universities, Colleges, and Campus Departments offering higher education degrees.
          </p>
        </div>

        {/* Sub-Tab Filter Toggles */}
        <div className="flex items-center gap-1.5 bg-[#1C2036] p-1 rounded-xl border border-[#56608F] self-start md:self-auto shrink-0">
          <button
            onClick={() => setSubTab("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              subTab === "all"
                ? "bg-[#3D446C] text-[#8FE388] border border-[#8FE388]/30 shadow-xs"
                : "text-[#C4C9DE] hover:text-white"
            }`}
          >
            <span>All Combined</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/10 text-white">
              {universities.length + colleges.length}
            </span>
          </button>

          <button
            onClick={() => setSubTab("universities")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              subTab === "universities"
                ? "bg-[#3D446C] text-[#8FE388] border border-[#8FE388]/30 shadow-xs"
                : "text-[#C4C9DE] hover:text-white"
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-[#8FE388]" />
            <span>Universities ({universities.length})</span>
          </button>

          <button
            onClick={() => setSubTab("colleges")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              subTab === "colleges"
                ? "bg-[#3D446C] text-[#8FE388] border border-[#8FE388]/30 shadow-xs"
                : "text-[#C4C9DE] hover:text-white"
            }`}
          >
            <School className="w-3.5 h-3.5 text-[#8FE388]" />
            <span>Colleges ({colleges.length})</span>
          </button>
        </div>
      </div>

      {/* Content Rendering Based on SubTab */}
      {(subTab === "all" || subTab === "universities") && (
        <section className="space-y-4">
          {subTab === "all" && (
            <div className="flex items-center justify-between border-b border-[#56608F] pb-2">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#8FE388]" />
                <span>Universities ({universities.length})</span>
              </h2>
            </div>
          )}
          <UniversityList
            universities={universities}
            onSelectUniversity={onSelectUniversity}
          />
        </section>
      )}

      {(subTab === "all" || subTab === "colleges") && (
        <section className="space-y-4 pt-4">
          {subTab === "all" && (
            <div className="flex items-center justify-between border-b border-[#56608F] pb-2">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <School className="w-5 h-5 text-[#8FE388]" />
                <span>Colleges & Departments ({colleges.length})</span>
              </h2>
            </div>
          )}
          <CollegeList
            university={null}
            colleges={colleges}
            onSelectCollege={onSelectCollege}
            onBack={null}
            selectedCourseName={selectedCourseName}
          />
        </section>
      )}
    </div>
  );
}
