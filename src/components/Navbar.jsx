import React from "react";
import { GraduationCap, Search, Home, X, User, LogIn, LogOut } from "lucide-react";
import { STREAM_DATA } from "./LoginForm";

export default function Navbar({
  searchQuery,
  setSearchQuery,
  onResetHome,
  onOpenLogin,
  currentUser,
  onLogout,
  onStreamCourseChange
}) {
  const activeStream = currentUser?.stream || "All";
  const activeCourse = currentUser?.course || (activeStream === "All" ? "All Academic Courses" : STREAM_DATA[activeStream]?.courses[0]?.name || "M.Com (Master of Commerce)");
  const availableCourses = STREAM_DATA[activeStream]?.courses || STREAM_DATA["All"].courses;

  const handleStreamChange = (e) => {
    const newStream = e.target.value;
    const firstCourse = newStream === "All"
      ? "All Academic Courses"
      : (STREAM_DATA[newStream]?.courses[0]?.name || "");
    if (onStreamCourseChange) {
      onStreamCourseChange(newStream, firstCourse);
    }
  };

  const handleCourseChange = (e) => {
    const newCourse = e.target.value;
    if (onStreamCourseChange) {
      onStreamCourseChange(activeStream, newCourse);
    }
  };

  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* 1. FIXED TOP NAVBAR: ONLY App Name, Home & Login/Logout Bar   */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 bg-[#1E40AF] text-white shadow-md border-b border-blue-900/30 px-2 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-2">
          
          {/* Logo & Portal Badge */}
          <div 
            onClick={onResetHome}
            className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group select-none active:scale-[0.97] transition-transform min-w-0 shrink"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-md group-hover:bg-white/20 transition-all shrink-0">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <span className="font-bold text-sm sm:text-lg tracking-tight text-white group-hover:text-amber-200 transition-colors truncate">
                EduNexus
              </span>
              <span className="hidden min-[400px]:inline-block text-[9px] sm:text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 whitespace-nowrap shrink-0">
                Academic Portal
              </span>
            </div>
          </div>

          {/* Action Buttons: Home, Profile & Logout */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <button
              onClick={onResetHome}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-xl bg-blue-800/80 hover:bg-blue-900 text-white text-xs font-bold border border-blue-700 transition-colors shadow-sm active:scale-[0.97]"
              title="Return to Home"
            >
              <Home className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden min-[480px]:inline">Home</span>
            </button>

            {currentUser ? (
              <div className="flex items-center gap-1 sm:gap-1.5">
                <button
                  onClick={onOpenLogin}
                  className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs shadow-md transition-all active:scale-[0.97]"
                  title="Enrolment Profile"
                >
                  <div className="w-4 h-4 rounded-full bg-blue-900 text-amber-300 text-[10px] font-extrabold flex items-center justify-center shrink-0">
                    {currentUser.fullName ? currentUser.fullName.charAt(0) : "S"}
                  </div>
                  <span className="truncate max-w-[50px] min-[380px]:max-w-[75px] sm:max-w-[120px] text-[11px]">{currentUser.fullName}</span>
                </button>

                <button
                  onClick={onLogout}
                  className="p-1.5 sm:px-2.5 sm:py-1 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md border border-red-500 transition-all active:scale-[0.97] flex items-center gap-1"
                  title="Log Out"
                >
                  <LogOut className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden sm:inline">Log Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-xs shadow-md transition-all active:scale-[0.97]"
              >
                <LogIn className="w-3.5 h-3.5 shrink-0" />
                <span>Login</span>
              </button>
            )}
          </div>

        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 2. SCROLLABLE TOOLBAR: Stream/Course Switcher & Search Bar     */}
      {/* (Scrolls naturally with page content to save screen height)    */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-[#1E40AF] text-white px-3 sm:px-6 pb-3 pt-1 border-b border-blue-900/40 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          
          {/* Stream & Course Switcher Dropdowns */}
          {currentUser && (
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-2 bg-blue-950/70 border border-blue-700/60 rounded-xl p-1.5 text-xs shadow-inner">
              {/* Stream Selector */}
              <div className="flex items-center gap-1 bg-blue-900/90 border border-blue-600/60 rounded-lg px-2 py-1">
                <span className="text-[10px] font-bold text-amber-300 flex-shrink-0">Stream:</span>
                <select
                  value={activeStream}
                  onChange={handleStreamChange}
                  className="w-full bg-transparent text-white font-bold text-xs outline-none cursor-pointer truncate"
                  title="Select Stream"
                >
                  {Object.keys(STREAM_DATA).map((streamKey) => (
                    <option key={streamKey} value={streamKey} className="bg-slate-900 text-white">
                      {streamKey === "All" ? "🌐 All Streams" : streamKey}
                    </option>
                  ))}
                </select>
              </div>

              {/* Course Selector */}
              <div className="flex items-center gap-1 bg-blue-900/90 border border-blue-600/60 rounded-lg px-2 py-1">
                <span className="text-[10px] font-bold text-amber-300 flex-shrink-0">Course:</span>
                <select
                  value={activeCourse}
                  onChange={handleCourseChange}
                  className="w-full bg-transparent text-white font-bold text-xs outline-none cursor-pointer truncate"
                  title="Select Course"
                >
                  {availableCourses.map((c) => (
                    <option key={c.id} value={c.name} className="bg-slate-900 text-white">
                      {c.code} — {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Global Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search universities, colleges, courses, subjects, books..."
              className="w-full bg-[#F1F5F9] hover:bg-white focus:bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-sm rounded-xl pl-10 pr-9 py-2 transition-all outline-none focus:ring-2 focus:ring-white shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
