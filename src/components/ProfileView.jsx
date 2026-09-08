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
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
        
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1E40AF] to-indigo-900 text-white flex items-center justify-center font-bold text-3xl shadow-md border-4 border-white flex-shrink-0">
          {getInitials(user.fullName)}
        </div>

        <div className="space-y-2 text-center md:text-left flex-1">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <h1 className="text-2xl font-bold text-[#1E293B]">
              {user.fullName}
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#10B981] border border-emerald-200 text-xs font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Enrolled Student
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#D97706] border border-amber-200 text-xs font-bold">
              {user.stream} Stream
            </span>
          </div>

          <p className="text-sm font-semibold text-[#1E40AF]">
            {user.course} — <span className="text-slate-600 font-normal">{user.specialization}</span>
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <GraduationCap className="w-4 h-4 text-[#1E40AF]" /> {user.collegeName}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-4 h-4 text-[#1E40AF]" /> {user.semester}
            </span>
            {user.rollNumber && (
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">
                Roll: {user.rollNumber}
              </span>
            )}
          </div>
        </div>

        {/* Edit / Change Enrolment Button */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto">
          <button
            onClick={onOpenLogin}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1E40AF] font-bold text-xs border border-blue-200 transition-all shadow-xs active:scale-[0.97]"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Stream / Course</span>
          </button>
          
          <button
            onClick={onLogout}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-all shadow-sm active:scale-[0.97]"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Dynamic Stream & Course Details Summary Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-[#1E40AF] text-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Selected Academic Pathway
          </div>
          <div className="text-lg font-bold">
            {user.stream} • {user.course}
          </div>
          <div className="text-xs text-blue-200">
            Specialization: {user.specialization} | Current Progress: {user.semester}
          </div>
        </div>

        <button
          onClick={onOpenLogin}
          className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-xs shadow-md transition-all whitespace-nowrap"
        >
          Change Selected Stream / Course ➜
        </button>
      </div>

      {/* Enrolled Courses & Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Active Enrolled Courses */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2 border-b border-slate-100 pb-3">
            <BookOpen className="w-5 h-5 text-[#1E40AF]" />
            Recommended & Enrolled Programs
          </h2>

          <div className="space-y-3">
            {COURSES.slice(0, 3).map((c) => (
              <div
                key={c.id}
                onClick={() => onSelectCourse(c)}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-[#1E40AF] bg-[#F8FAFC] hover:bg-white transition-all cursor-pointer flex items-center justify-between group active:scale-[0.98]"
              >
                <div>
                  <div className="text-xs font-bold text-[#1E40AF]">{c.shortCode}</div>
                  <div className="text-sm font-semibold text-[#1E293B] group-hover:text-[#1E40AF] transition-colors">
                    {c.name}
                  </div>
                  <div className="text-xs text-[#64748B]">{c.duration}</div>
                </div>

                <span className="px-2.5 py-1 rounded bg-amber-500/10 text-[#F59E0B] text-xs font-semibold border border-amber-500/20">
                  Access Portal
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Bookmarks & Quick PDF Access */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-[#1E293B] flex items-center gap-2 border-b border-slate-100 pb-3">
            <Bookmark className="w-5 h-5 text-[#F59E0B]" />
            Saved Textbooks & Study Materials
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl border border-slate-200 bg-[#F8FAFC] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Eye className="w-4 h-4 text-[#10B981]" />
                <div>
                  <div className="font-bold text-[#1E293B]">M.Com Advanced Corporate Accounting</div>
                  <div className="text-slate-500">PDF Guide • 42 Pages</div>
                </div>
              </div>
              <span className="font-semibold text-[#10B981]">View PDF</span>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-[#F8FAFC] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Eye className="w-4 h-4 text-[#10B981]" />
                <div>
                  <div className="font-bold text-[#1E293B]">B.Com Financial Management (Tulsian)</div>
                  <div className="text-slate-500">Reference Textbook • 750 Pages</div>
                </div>
              </div>
              <span className="font-semibold text-[#10B981]">View PDF</span>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-[#F8FAFC] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Bookmark className="w-4 h-4 text-[#F59E0B]" />
                <div>
                  <div className="font-bold text-[#1E293B]">Managerial Economics Case Studies</div>
                  <div className="text-slate-500">Saved Bookmark</div>
                </div>
              </div>
              <span className="font-semibold text-[#F59E0B]">Bookmarked</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
