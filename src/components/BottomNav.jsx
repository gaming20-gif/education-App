import React from "react";
import { Building2, School, Layers, FileText, BookOpen, User } from "lucide-react";

export default function BottomNav({ activeTab, setActiveTab }) {
  const navItems = [
    { id: "universities", label: "Universities", icon: Building2 },
    { id: "colleges", label: "Colleges", icon: School },
    { id: "mycourse", label: "Semesters", icon: Layers },
    { id: "subjects", label: "Subjects", icon: FileText },
    { id: "books", label: "Books", icon: BookOpen, hasAmberDot: true },
    { id: "profile", label: "Profile", icon: User }
  ];

  return (
    <nav 
      aria-label="Mobile Navigation Bar"
      className="fixed bottom-0 left-0 right-0 w-full z-[9999] bg-white border-t-2 border-blue-900/20 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] px-1 sm:px-4 py-1.5 transform-gpu"
      style={{
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
        willChange: "transform",
        paddingBottom: "max(0.375rem, env(safe-area-inset-bottom, 0.375rem))"
      }}
    >
      <div className="max-w-xl mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id || (activeTab === "home" && item.id === "universities");

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center flex-1 py-1 px-0.5 rounded-xl transition-all duration-200 active:scale-[0.93] select-none ${
                isActive ? "text-[#1E40AF] font-extrabold" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {/* Amber Dot Indicator */}
              {item.hasAmberDot && !isActive && (
                <span className="absolute top-0 right-2 sm:right-3 w-2 h-2 rounded-full bg-[#F59E0B] ring-2 ring-white animate-pulse" />
              )}

              {/* Icon Container */}
              <div className={`p-1 rounded-lg transition-colors ${isActive ? "bg-blue-50" : ""}`}>
                <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? "scale-110 text-[#1E40AF]" : "text-slate-500"}`} />
              </div>

              {/* Label */}
              <span className="text-[10px] font-bold mt-0.5 tracking-tight truncate max-w-[58px]">
                {item.label}
              </span>

              {/* Active Indicator Line */}
              {isActive && (
                <span className="absolute bottom-0 w-7 sm:w-9 h-1 bg-[#1E40AF] rounded-t-full shadow-xs" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
