import React from "react";
import { Building2, School, BookOpen, Layers, FileText, Sparkles } from "lucide-react";

export default function CourseNav({
  activeTab,
  setActiveTab,
  selectedCourseName
}) {
  const tabs = [
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
    <nav className="hidden md:block bg-white border-b border-slate-200 py-2 px-3 sm:px-6 lg:px-8 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
        
        {/* Navigation Tabs / Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap active:scale-[0.97] ${
                  isActive
                    ? "bg-[#1E40AF] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#1E40AF] hover:bg-blue-50/70 border border-transparent"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-300" : "text-[#1E40AF]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Course Indicator Badge */}
        {selectedCourseName && (
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#D97706] text-xs font-bold whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Course: {selectedCourseName}</span>
          </div>
        )}

      </div>
    </nav>
  );
}
