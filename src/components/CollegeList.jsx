import React, { useState } from "react";
import { School, MapPin, ArrowRight, BookOpen, Calendar, ArrowLeft, Building2, Award, Search, Filter } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export default function CollegeList({
  university,
  colleges,
  onSelectCollege,
  onBack,
  selectedCourseName
}) {
  const [filterType, setFilterType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Campus Department",
    "Government",
    "Granted In Aid",
    "Self Finance"
  ];

  const filteredColleges = colleges.filter(col => {
    const matchesType = filterType === "All" || col.type === filterType || (filterType === "Campus Department" && (col.type === "University Department" || col.type === "Campus Department"));
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      col.name.toLowerCase().includes(q) || 
      (col.shortName && col.shortName.toLowerCase().includes(q)) ||
      (col.department && col.department.toLowerCase().includes(q)) ||
      (col.address && col.address.toLowerCase().includes(q));
    return matchesType && matchesSearch;
  });

  return (
    <div className="space-y-4 animate-fade-in pb-4">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#292F4C] border border-[#56608F] p-3.5 sm:p-4 rounded-xl shadow-md">
        <div className="flex items-center gap-3 min-w-0">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white border border-[#56608F] transition-all active:scale-[0.97] shrink-0"
              title="Back"
            >
              <ArrowLeft className="w-4 h-4 text-[#8FE388]" />
            </button>
          )}
          <div className="min-w-0 flex-1">
            <div className="text-[11px] uppercase font-bold text-[#8FE388] tracking-wider truncate">
              {selectedCourseName ? `Available Colleges & Departments` : "EduNexus Reference Portal"}
            </div>
            <h1 className="text-base sm:text-lg font-bold text-white leading-snug truncate">
              {selectedCourseName
                ? `Colleges & Departments Offering ${selectedCourseName}`
                : `All Colleges & Campus Departments`}
            </h1>
          </div>
        </div>

        <div className="px-3 py-1 rounded-full bg-[#3D446C]/40 border border-[#56608F] text-[#8FE388] text-xs font-bold self-start sm:self-auto shrink-0 whitespace-nowrap">
          {filteredColleges.length} / {colleges.length} Colleges & Depts
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-[#292F4C] border border-[#56608F] p-3 rounded-xl shadow-md">
        {/* Search input */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-[#C4C9DE] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search college or department by name..."
            className="w-full pl-9 pr-3 py-1.5 bg-[#1C2036] border border-[#56608F] rounded-lg text-xs text-white placeholder-[#C4C9DE]/60 focus:bg-[#1C2036] focus:border-[#8FE388] focus:ring-1 focus:ring-[#8FE388]/20 outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs font-medium">
          <Filter className="w-3.5 h-3.5 text-[#C4C9DE] shrink-0 hidden sm:inline" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterType(cat)}
              className={`px-2.5 py-1 rounded-lg border whitespace-nowrap transition-all ${
                filterType === cat
                  ? "bg-[#3D446C] text-[#8FE388] border-[#8FE388]/40 font-bold shadow-xs"
                  : "bg-[#1C2036] text-[#C4C9DE] border-[#56608F] hover:bg-[#3D446C]/50 hover:text-white"
              }`}
            >
              {cat === "All" ? `All (${colleges.length})` : cat}
            </button>
          ))}
        </div>
      </div>

      {/* College Cards Grid: 4 Boxes per row on desktop */}
      {filteredColleges.length === 0 ? (
        <div className="bg-[#292F4C] border border-[#56608F] rounded-xl p-8 text-center text-[#C4C9DE] text-xs">
          No colleges or departments match your filter/search criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredColleges.map((col) => {
            return (
              <div
                key={col.id}
                onClick={() => onSelectCollege(col)}
                className="group course-card bg-[#292F4C] border border-[#56608F] rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between shadow-md"
              >
                {/* Card Banner Image */}
                <div className="relative h-28 overflow-hidden bg-[#1C2036]">
                  <ImageWithFallback
                    src={col.image}
                    alt={col.name}
                    type="college"
                    fallbackTitle={col.shortName || col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2036]/90 via-[#1C2036]/30 to-transparent pointer-events-none" />
                  
                  {/* NAAC Grade Badge */}
                  {col.naac && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-[#1C2036]/90 border border-[#56608F] text-white shadow-xs flex items-center gap-1">
                        <Award className="w-3 h-3 text-[#8FE388]" />
                        NAAC: {col.naac}
                      </span>
                    </div>
                  )}

                  {/* College Type Tag */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F] shadow-xs truncate max-w-[100%]">
                      {col.type}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3.5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#8FE388] transition-colors leading-snug line-clamp-2" title={col.name}>
                      {col.name}
                    </h3>

                    <p className="text-[11px] text-[#C4C9DE] flex items-center gap-1 mt-1.5">
                      <MapPin className="w-3 h-3 text-[#8FE388] shrink-0" />
                      <span className="truncate">{col.address}</span>
                    </p>

                    {/* Offered Courses Badges */}
                    {col.coursesOffered && col.coursesOffered.length > 0 && (
                      <div className="mt-2.5">
                        <div className="flex flex-wrap gap-1">
                          {col.coursesOffered.slice(0, 3).map((c, i) => (
                            <span key={i} className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-[#1C2036] text-[#8FE388] border border-[#56608F] truncate max-w-full">
                              {c}
                            </span>
                          ))}
                          {col.coursesOffered.length > 3 && (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#1C2036] text-[#C4C9DE] border border-[#56608F]">
                              +{col.coursesOffered.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer Info & Action */}
                  <div className="pt-2.5 border-t border-[#56608F] flex items-center justify-between gap-1 text-[11px]">
                    <div className="flex items-center gap-2 text-[#C4C9DE] font-medium">
                      {col.established && (
                        <span className="flex items-center gap-0.5 whitespace-nowrap">
                          <Calendar className="w-3 h-3 text-[#8FE388] shrink-0" />
                          {col.established}
                        </span>
                      )}
                      <span className="flex items-center gap-0.5 text-[#C4C9DE] font-semibold whitespace-nowrap">
                        <BookOpen className="w-3 h-3 text-[#8FE388] shrink-0" />
                        {col.coursesCount} Prog.
                      </span>
                    </div>

                    <span className="font-bold text-[#8FE388] group-hover:text-white transition-colors flex items-center gap-0.5 shrink-0 whitespace-nowrap">
                      Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
