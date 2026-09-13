import React from "react";
import { User, GraduationCap, Award, BookOpen, Bookmark, Eye, ShieldCheck, Mail, Calendar, Edit3, LogOut, Sparkles } from "lucide-react";
import { COURSES } from "../data/educationData";

export default function ProfileView({ onSelectCourse, currentUser, onOpenLogin, onLogout }) {
  const user = currentUser || {
    fullName: "Ananya Sharma",
    email: "ananya.s@srcc.du.ac.in",
    stream: "Commerce",
    course: "M.Com (Master of Commerce)",
    specialization: "Advanced Accounting & Financial Management",
    semester: "Postgraduate Year 1 (Sem 1 & 2)",
    collegeName: "Shri Ram College of Commerce (SRCC), Delhi University",
    rollNumber: "23MCOM-SRCC-104",
    isLoggedIn: false
  };

  const getInitials = (name) => {
    if (!name) return "ST";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      
      {/* Profile Header Card */}
      <div className="bg-[#292F4C] border border-[#56608F] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6 relative overflow-hidden text-white">
        
        <div className="w-24 h-24 rounded-2xl bg-[#3D446C] text-[#8FE388] flex items-center justify-center font-bold text-3xl shadow-md border-4 border-[#56608F] flex-shrink-0">
          {getInitials(user.fullName)}
        </div>

        <div className="space-y-2 text-center md:text-left flex-1">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <h1 className="text-2xl font-bold text-white">
              {user.fullName}
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#3D446C] text-[#8FE388] border border-[#56608F] text-xs font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Enrolled Student
            </span>
          </div>

          <p className="text-sm font-semibold text-[#8FE388]">
            {user.course} — <span className="text-[#C4C9DE] font-normal">{user.specialization}</span>
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#C4C9DE] pt-1">
            <span className="flex items-center gap-1 font-medium text-white">
              <GraduationCap className="w-4 h-4 text-[#8FE388]" /> {user.collegeName}
            </span>
            <span className="flex items-center gap-1 text-[#C4C9DE]">
              <Calendar className="w-4 h-4 text-[#8FE388]" /> {user.semester}
            </span>
            {user.rollNumber && (
              <span className="px-2 py-0.5 rounded bg-[#1C2036] border border-[#56608F] text-white font-mono text-[11px]">
                Roll: {user.rollNumber}
              </span>
            )}
          </div>
        </div>

        {/* Edit / Change Enrolment Button */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto">
          <button
            onClick={onOpenLogin}
            className="btn-cta flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#3D446C] hover:bg-[#3D446C]/80 text-[#8FE388] font-bold text-xs border border-[#56608F] transition-all shadow-xs cursor-pointer"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Course Enrolment</span>
          </button>
          
          <button
            onClick={onLogout}
            className="btn-cta flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#EF4444] hover:bg-[#EF4444]/90 text-white font-bold text-xs transition-all shadow-sm cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Dynamic Course Details Summary Banner */}
      <div className="bg-gradient-to-r from-[#3D446C] to-[#1C2036] border border-[#56608F] text-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#8FE388] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Selected Academic Pathway
          </div>
          <div className="text-lg font-bold">
            {user.course}
          </div>
          <div className="text-xs text-[#C4C9DE]">
            Specialization: {user.specialization} | Current Progress: {user.semester}
          </div>
        </div>

        <button
          onClick={onOpenLogin}
          className="btn-cta px-5 py-2.5 rounded-xl bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] font-extrabold text-xs shadow-md transition-all whitespace-nowrap cursor-pointer"
        >
          Change Selected Course ➜
        </button>
      </div>

      {/* Enrolled Courses & Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Active Enrolled Courses */}
        <div className="bg-[#292F4C] border border-[#56608F] rounded-2xl p-6 shadow-xs space-y-4 text-white">
          <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-[#56608F] pb-3">
            <BookOpen className="w-5 h-5 text-[#8FE388]" />
            Recommended & Enrolled Programs
          </h2>

          <div className="space-y-3">
            {COURSES.slice(0, 3).map((c) => (
              <div
                key={c.id}
                onClick={() => onSelectCourse(c)}
                className="course-card p-3.5 rounded-xl border border-[#56608F] hover:border-[#8FE388]/40 bg-[#1C2036]/70 hover:bg-[#1C2036] transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-[#8FE388]">{c.shortCode}</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#8FE388] transition-colors">
                    {c.name}
                  </div>
                  <div className="text-xs text-[#C4C9DE]">{c.duration}</div>
                </div>

                <span className="btn-cta px-2.5 py-1 rounded bg-[#3D446C] text-[#8FE388] text-xs font-semibold border border-[#56608F]">
                  Access Portal
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Bookmarks & Quick PDF Access */}
        <div className="bg-[#292F4C] border border-[#56608F] rounded-2xl p-6 shadow-xs space-y-4 text-white">
          <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-[#56608F] pb-3">
            <Bookmark className="w-5 h-5 text-[#8FE388]" />
            Saved Textbooks & Study Materials
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl border border-[#56608F] bg-[#1C2036] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Eye className="w-4 h-4 text-[#8FE388]" />
                <div>
                  <div className="font-bold text-white">M.Com Advanced Corporate Accounting</div>
                  <div className="text-[#C4C9DE]">PDF Guide • 42 Pages</div>
                </div>
              </div>
              <span className="font-semibold text-[#8FE388] cursor-pointer hover:underline">View PDF</span>
            </div>

            <div className="p-3 rounded-xl border border-[#56608F] bg-[#1C2036] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Eye className="w-4 h-4 text-[#8FE388]" />
                <div>
                  <div className="font-bold text-white">B.Com Financial Management (Tulsian)</div>
                  <div className="text-[#C4C9DE]">Reference Textbook • 750 Pages</div>
                </div>
              </div>
              <span className="font-semibold text-[#8FE388] cursor-pointer hover:underline">View PDF</span>
            </div>

            <div className="p-3 rounded-xl border border-[#56608F] bg-[#1C2036] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Bookmark className="w-4 h-4 text-[#8FE388]" />
                <div>
                  <div className="font-bold text-white">Managerial Economics Case Studies</div>
                  <div className="text-[#C4C9DE]">Saved Bookmark</div>
                </div>
              </div>
              <span className="font-semibold text-[#8FE388]">Bookmarked</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
