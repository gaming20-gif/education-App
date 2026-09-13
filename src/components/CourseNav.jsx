import React from "react";
import { Building2, School, BookOpen, Layers, FileText, Sparkles } from "lucide-react";

export default function CourseNav({
  activeTab,
  setActiveTab,
  selectedCourseName
}) {
  const tabs = [
    {
      id: "university_college",
      label: "University / College",
      icon: Building2
    },
    {
      id: "universities",
      label: "Universities",
      icon: Building2
    },
    {
      id: "colleges",
      label: "Colleges & Departments",
      icon: School
    },
    {
      id: "mycourse",
      label: "Semesters & Curriculum",
      icon: Layers
    },
    {
      id: "subjects",
      label: "Subjects",
      icon: FileText
    },
    {
      id: "books",
      label: "Textbooks & Materials",
      icon: BookOpen
    }
  ];

  return (
    <nav className="hidden md:block bg-[#292F4C] border-b border-[#56608F] py-2 px-3 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
        
        {/* Navigation Tabs / Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-underline-animated flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap active:scale-[0.97] cursor-pointer ${
                  isActive
                    ? "is-active bg-[#3D446C] text-[#8FE388] shadow-xs"
                    : "text-[#C4C9DE] hover:text-white hover:bg-[#3D446C]/40 border border-transparent"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#8FE388]" : "text-[#C4C9DE]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Course Indicator Badge */}
        {selectedCourseName && (
          <div className="badge-pulse badge-dot hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FE388]/15 border border-[#8FE388]/30 text-[#8FE388] text-xs font-bold whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-[#8FE388]" />
            <span>Course: {selectedCourseName}</span>
          </div>
        )}

      </div>
    </nav>
  );
}
