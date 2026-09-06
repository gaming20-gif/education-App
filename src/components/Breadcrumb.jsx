import React from "react";
import { ChevronRight, Home, Building2, School, BookOpen, Layers, FileText } from "lucide-react";

export default function Breadcrumb({
  selectedUniversity,
  selectedCollege,
  selectedCourse,
  selectedSemester,
  selectedSubject,
  onSelectStep
}) {
  const steps = [
    {
      id: "university",
      label: "Universities",
      active: true,
      data: selectedUniversity,
      displayText: selectedUniversity?.shortName || selectedUniversity?.name,
      icon: Building2
    },
    {
      id: "college",
      label: "Colleges & Depts",
      active: !!selectedUniversity,
      data: selectedCollege,
      displayText: selectedCollege?.shortName || selectedCollege?.name,
      icon: School
    },
    {
      id: "course",
      label: "Courses",
      active: !!selectedCollege,
      data: selectedCourse,
      displayText: selectedCourse?.shortCode || selectedCourse?.name,
      icon: BookOpen
    },
    {
      id: "semester",
      label: "Semesters",
      active: !!selectedCourse,
      data: selectedSemester,
      displayText: selectedSemester?.name,
      icon: Layers
    },
    {
      id: "subject",
      label: "Subject",
      active: !!selectedSemester,
      data: selectedSubject,
      displayText: selectedSubject?.shortName || selectedSubject?.name,
      icon: FileText
    }
  ];

  return (
    <nav className="bg-white border-b border-slate-200 py-2.5 px-3 sm:px-6 lg:px-8 shadow-xs overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center whitespace-nowrap gap-1.5 text-xs sm:text-sm">
        
        {/* Home Root Button */}
        <button
          onClick={() => onSelectStep("home")}
          className="flex items-center gap-1 text-slate-500 hover:text-[#1E40AF] font-medium transition-colors active:scale-[0.97] flex-shrink-0"
        >
          <Home className="w-3.5 h-3.5 text-[#1E40AF]" />
          <span>Home</span>
        </button>

        {steps.map((step, idx) => {
          if (!step.active) return null;
          const Icon = step.icon;
          const isLast = idx === steps.length - 1 || !steps[idx + 1]?.data;
          const isSelected = !!step.data;

          return (
            <React.Fragment key={step.id}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              
              <button
                onClick={() => {
                  if (isSelected) {
                    onSelectStep(step.id);
                  }
                }}
                disabled={!isSelected}
                className={`flex items-center gap-1.5 font-medium px-2 py-0.5 rounded-md transition-all active:scale-[0.97] flex-shrink-0 ${
                  isLast && isSelected
                    ? "bg-blue-50 text-[#1E40AF] border border-blue-200 font-semibold cursor-default"
                    : isSelected
                    ? "text-slate-700 hover:text-[#1E40AF] hover:bg-slate-100 cursor-pointer"
                    : "text-slate-400 cursor-not-allowed"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#1E40AF]" : "text-slate-400"}`} />
                <span className="max-w-[120px] sm:max-w-[200px] truncate">
                  {step.data ? step.displayText : step.label}
                </span>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}


