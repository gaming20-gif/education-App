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
    <nav className="bg-[#292F4C] border-b border-[#56608F] py-2.5 px-3 sm:px-6 lg:px-8 shadow-xs overflow-x-auto scrollbar-none">
      <div className="max-w-[1600px] mx-auto flex items-center whitespace-nowrap gap-1.5 text-xs sm:text-sm">
        
        {/* Home Root Button */}
        <button
          onClick={() => onSelectStep("home")}
          className="flex items-center gap-1 text-[#C4C9DE] hover:text-white font-medium transition-colors active:scale-[0.97] flex-shrink-0"
        >
          <Home className="w-3.5 h-3.5 text-[#8FE388]" />
          <span>Home</span>
        </button>

        {steps.map((step, idx) => {
          if (!step.active) return null;
          const Icon = step.icon;
          const isLast = idx === steps.length - 1 || !steps[idx + 1]?.data;
          const isSelected = !!step.data;

          return (
            <React.Fragment key={step.id}>
              <ChevronRight className="w-3.5 h-3.5 text-[#C4C9DE]/50 flex-shrink-0" />
              
              <button
                onClick={() => {
                  if (isSelected) {
                    onSelectStep(step.id);
                  }
                }}
                disabled={!isSelected}
                className={`flex items-center gap-1.5 font-medium px-2 py-0.5 rounded-md transition-all active:scale-[0.97] flex-shrink-0 ${
                  isLast && isSelected
                    ? "bg-[#3D446C] text-[#8FE388] border border-[#56608F] font-semibold cursor-default"
                    : isSelected
                    ? "text-white hover:text-[#8FE388] hover:bg-[#1C2036] cursor-pointer"
                    : "text-[#C4C9DE]/40 cursor-not-allowed"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#8FE388]" : "text-[#C4C9DE]/40"}`} />
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


