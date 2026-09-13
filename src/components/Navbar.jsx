import React, { useState, useRef, useEffect } from "react";
import {
  GraduationCap,
  Search,
  Home,
  BookOpen,
  LogOut,
  LogIn,
  X,
  Compass,
  ChevronDown,
  Check,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { formatStudentDisplayName } from "../utils/formatName";
import { COURSES } from "../data/educationData";

const POPULAR_COURSES = [
  { short: "B.Com", name: "Bachelor of Commerce (Honours) [B.Com]", stream: "Commerce", degree: "UG" },
  { short: "M.Com", name: "Master of Commerce (M.Com)", stream: "Commerce", degree: "PG" },
  { short: "BCA", name: "Bachelor of Computer Applications (BCA)", stream: "Science", degree: "UG" },
  { short: "B.Sc", name: "Bachelor of Science (B.Sc)", stream: "Science", degree: "UG" },
  { short: "BBA", name: "Bachelor of Business Administration (BBA)", stream: "Commerce", degree: "UG" },
  { short: "B.Ed", name: "Bachelor of Education (B.Ed.)", stream: "Education", degree: "UG" },
  { short: "L.L.B", name: "Bachelor of Laws (L.L.B.)", stream: "Law", degree: "UG" },
  { short: "MBA", name: "Master of Business Administration (MBA)", stream: "Commerce", degree: "PG" },
  { short: "MCA", name: "Master of Computer Applications (MCA)", stream: "Science", degree: "PG" },
  { short: "B.A", name: "Bachelor of Arts (B.A.)", stream: "Arts", degree: "UG" }
];

export default function Navbar({
  searchQuery,
  setSearchQuery,
  onResetHome,
  onOpenLogin,
  currentUser,
  onLogout,
  onStreamCourseChange,
  onQuickCourseChange,
  onNavTabChange,
  activeTab
}) {
  const displayName = currentUser ? formatStudentDisplayName(currentUser.fullName, currentUser.email) : "Student";
  const userInitial = displayName.charAt(0).toUpperCase();

  // 1-Click Quick Course Switcher Dropdown State
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false);
  const [courseFilterStream, setCourseFilterStream] = useState("All");
  const [courseSearchText, setCourseSearchText] = useState("");
  const [courseChangeToast, setCourseChangeToast] = useState("");
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsCourseMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectCourse = (courseName, stream) => {
    if (onQuickCourseChange) {
      onQuickCourseChange(courseName, stream);
    } else if (onStreamCourseChange) {
      onStreamCourseChange(stream || "Commerce", courseName);
    }
    setIsCourseMenuOpen(false);
    const shortLabel = courseName.includes("(") ? courseName.split("(")[0].trim() : courseName;
    setCourseChangeToast(`Switched course to ${shortLabel} in 1 click!`);
    setTimeout(() => setCourseChangeToast(""), 2500);
  };

  const filteredDropdownCourses = COURSES.filter((c) => {
    if (courseFilterStream !== "All" && c.stream !== courseFilterStream) return false;
    if (courseSearchText.trim()) {
      const q = courseSearchText.toLowerCase();
      const matchName = c.name?.toLowerCase().includes(q);
      const matchShort = c.shortCode?.toLowerCase().includes(q);
      const matchStream = c.stream?.toLowerCase().includes(q);
      return matchName || matchShort || matchStream;
    }
    return true;
  });

  // Render course dropdown content (used for both mobile & desktop)
  const renderCourseMenuDropdown = () => (
    <div className="absolute right-0 mt-2 w-[calc(100vw-24px)] sm:w-[400px] max-w-[400px] bg-[#292F4C] rounded-2xl border border-[#56608F] shadow-2xl z-50 overflow-hidden animate-fade-in divide-y divide-[#56608F]">
      {/* Header info */}
      <div className="p-3.5 bg-[#1C2036]/90 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-full bg-[#3D446C] text-[#8FE388] border border-[#56608F] flex items-center justify-center font-bold text-sm shrink-0">
            {userInitial}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">{displayName}</p>
            <p className="text-[10.5px] text-[#C4C9DE] truncate">{currentUser?.email || "student@edunexus.edu"}</p>
          </div>
        </div>
        <span className="badge-dot badge-pulse text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#8FE388]/15 text-[#8FE388] border border-[#8FE388]/30 shrink-0">
          Active Enrolment
        </span>
      </div>

      {/* Current Enrolled Course Card */}
      <div className="p-3.5 space-y-1.5 bg-[#292F4C]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4C9DE]">
            Current Enrolled Course:
          </span>
          <span className="text-[10px] font-semibold text-[#8FE388] flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Selected
          </span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#3D446C]/40 border border-[#56608F] flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[13px] font-bold text-[#8FE388] truncate">
              {currentUser?.course || "M.Com (Master of Commerce)"}
            </p>
            <p className="text-[10.5px] text-[#C4C9DE]">
              {currentUser?.stream || "Commerce"} Stream · {currentUser?.collegeName || "KSKVKU Affiliated"}
            </p>
          </div>
        </div>
      </div>

      {/* ⚡ 1-Click Quick Course Switch Section */}
      <div className="p-3.5 space-y-2.5 bg-[#1C2036]/60">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#8FE388]" />
            Switch Course in 1 Click:
          </span>
          <span className="text-[10px] text-[#C4C9DE]">Instant update</span>
        </div>

        {/* Fast Popular Course Buttons */}
        <div className="grid grid-cols-2 gap-1.5">
          {POPULAR_COURSES.map((pc) => {
            const isCurrent = (currentUser?.course || "").toLowerCase().includes(pc.short.toLowerCase());

            return (
              <button
                key={pc.short}
                type="button"
                onClick={() => handleSelectCourse(pc.name, pc.stream)}
                className={`course-card btn-cta p-2 rounded-xl text-left transition-all cursor-pointer flex items-center justify-between gap-1 border ${
                  isCurrent
                    ? "bg-[#3D446C] text-white border-[#8FE388] shadow-xs"
                    : "bg-[#292F4C] text-white border-[#56608F] hover:border-[#8FE388]/50 hover:bg-[#3D446C]/30"
                }`}
              >
                <div className="min-w-0">
                  <p className={`text-[12px] font-bold leading-tight truncate ${isCurrent ? "text-[#8FE388]" : "text-white"}`}>
                    {pc.short}
                  </p>
                  <p className={`text-[10px] truncate ${isCurrent ? "text-[#8FE388]/80" : "text-[#C4C9DE]"}`}>
                    {pc.stream} · {pc.degree}
                  </p>
                </div>
                {isCurrent ? (
                  <Check className="w-3.5 h-3.5 text-[#8FE388] shrink-0" />
                ) : (
                  <ArrowRight className="w-3 h-3 text-[#C4C9DE] opacity-60 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stream Filter & Full Course List */}
      <div className="p-3.5 space-y-2.5 max-h-[220px] overflow-y-auto bg-[#292F4C]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4C9DE]">
            Or choose from all courses:
          </span>
        </div>

        {/* Stream pills */}
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
          {["All", "Commerce", "Science", "Arts", "Education", "Law", "Medical"].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setCourseFilterStream(st)}
              className={`px-2 py-0.5 rounded-md text-[10.5px] font-semibold whitespace-nowrap transition-colors cursor-pointer border ${
                courseFilterStream === st
                  ? "bg-[#8FE388] text-[#1C2036] border-[#8FE388] font-bold"
                  : "bg-[#1C2036] text-[#C4C9DE] border-[#56608F] hover:border-[#8FE388]"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search in dropdown */}
        <input
          type="text"
          placeholder="Filter 33+ courses..."
          value={courseSearchText}
          onChange={(e) => setCourseSearchText(e.target.value)}
          className="w-full px-2.5 py-1.5 bg-[#1C2036] border border-[#56608F] rounded-lg text-xs text-white placeholder:text-[#C4C9DE] focus:bg-[#1C2036] focus:border-[#8FE388] outline-none"
        />

        {/* Filtered course items */}
        <div className="space-y-1">
          {filteredDropdownCourses.map((c) => {
            const isCurrent = (currentUser?.course || "").toLowerCase().includes((c.shortCode || "").toLowerCase()) ||
              (currentUser?.course || "").toLowerCase().includes(c.name.toLowerCase());

            return (
              <button
                key={c.id || c.name}
                type="button"
                onClick={() => handleSelectCourse(c.name, c.stream)}
                className={`w-full p-2 rounded-lg text-left text-xs transition-colors flex items-center justify-between gap-2 cursor-pointer border ${
                  isCurrent
                    ? "bg-[#3D446C] border-[#8FE388]/40 font-bold text-[#8FE388]"
                    : "bg-[#1C2036]/60 hover:bg-[#3D446C]/30 border-[#56608F]/50 text-white"
                }`}
              >
                <div className="truncate min-w-0">
                  <span className="font-bold mr-1.5 text-white">{c.shortCode || c.name.split(" ")[0]}</span>
                  <span className="text-[#C4C9DE] text-[11px] font-normal">{c.name}</span>
                </div>
                {isCurrent ? (
                  <span className="text-[10px] font-bold text-[#8FE388] px-1.5 py-0.5 rounded bg-[#3D446C] shrink-0 border border-[#8FE388]/30">
                    Current ✓
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold text-[#8FE388] hover:underline shrink-0">
                    Switch ⚡
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Links */}
      <div className="p-2.5 bg-[#1C2036]/80 flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={() => {
            setIsCourseMenuOpen(false);
            if (onNavTabChange) onNavTabChange("profile");
          }}
          className="text-[#8FE388] font-bold hover:underline cursor-pointer"
        >
          Manage Full Profile
        </button>
        <button
          type="button"
          onClick={() => {
            setIsCourseMenuOpen(false);
            if (onLogout) onLogout();
          }}
          className="text-[#EF4444] font-medium hover:underline cursor-pointer flex items-center gap-1"
        >
          <LogOut className="w-3 h-3" /> Log out
        </button>
      </div>
    </div>
  );

  return (
    <header ref={headerRef} className="bg-[#292F4C] border-b border-[#56608F] sticky top-0 z-50 shadow-md font-sans">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 py-2.5">
        
        {/* ========================================================= */}
        {/* MOBILE TOP BAR (md:hidden): Brand Logo on Left, Profile on Right */}
        {/* ========================================================= */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Mobile Brand Logo */}
          <div
            onClick={onResetHome}
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
            aria-label="EduNexus Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#3D446C] border border-[#56608F] text-[#8FE388] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 text-[#8FE388]" />
            </div>
            <div>
              <h1 className="font-bold text-base text-white tracking-tight leading-none group-hover:text-[#8FE388] transition-colors">
                EduNexus
              </h1>
              <span className="text-[10px] font-medium text-[#C4C9DE]">
                Student portal
              </span>
            </div>
          </div>

          {/* Mobile Profile Icon / Pill */}
          {currentUser ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCourseMenuOpen(!isCourseMenuOpen)}
                className={`flex items-center gap-1.5 p-1 pl-1.5 pr-2 rounded-full border transition-all cursor-pointer select-none ${
                  isCourseMenuOpen
                    ? "bg-[#3D446C] border-[#8FE388] ring-2 ring-[#8FE388]/20 shadow-sm"
                    : "bg-[#1C2036] border-[#56608F] hover:border-[#8FE388]"
                }`}
                title="Student Profile & Course Switcher"
                aria-label="Student Profile"
              >
                <div className="w-8 h-8 rounded-full bg-[#3D446C] text-[#8FE388] border border-[#56608F] flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  {userInitial}
                </div>
                <span className="text-[11px] font-bold text-white max-w-[80px] truncate hidden sm:inline">
                  {displayName.split(" ")[0]}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#8FE388] transition-transform duration-200 shrink-0 ${
                    isCourseMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Dropdown */}
              {isCourseMenuOpen && renderCourseMenuDropdown()}
            </div>
          ) : (
            <button
              type="button"
              onClick={onOpenLogin}
              className="btn-cta flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] font-bold text-xs shadow-xs"
              aria-label="Login"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          )}
        </div>

        {/* ========================================================= */}
        {/* DESKTOP HEADER (hidden md:flex): Logo + Nav + Search + Profile */}
        {/* ========================================================= */}
        <div className="hidden md:flex items-center justify-between gap-4 w-full">
          {/* Left: Brand Logo & Navigation Links */}
          <div className="flex items-center gap-5">
            {/* Brand Logo */}
            <div
              onClick={onResetHome}
              className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
            >
              <div className="w-10 h-10 rounded-[10px] bg-[#3D446C] border border-[#56608F] text-[#8FE388] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-[#8FE388]" />
              </div>
              <div>
                <h1 className="font-bold text-base text-white tracking-tight leading-none group-hover:text-[#8FE388] transition-colors">
                  EduNexus
                </h1>
                <span className="text-[11px] font-medium text-[#C4C9DE]">
                  Student portal
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-1">
              <button
                type="button"
                onClick={onResetHome}
                className={`tab-underline-animated flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "home"
                    ? "is-active bg-[#3D446C] text-[#8FE388]"
                    : "text-[#C4C9DE] hover:bg-[#3D446C]/40 hover:text-white"
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>

              <button
                type="button"
                onClick={() => onNavTabChange && onNavTabChange("explore")}
                className={`tab-underline-animated flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "explore"
                    ? "is-active bg-[#3D446C] text-[#8FE388]"
                    : "text-[#C4C9DE] hover:bg-[#3D446C]/40 hover:text-white"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Explore Courses</span>
              </button>

              <button
                type="button"
                onClick={() => onNavTabChange && onNavTabChange("books")}
                className={`tab-underline-animated flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "books"
                    ? "is-active bg-[#3D446C] text-[#8FE388]"
                    : "text-[#C4C9DE] hover:bg-[#3D446C]/40 hover:text-white"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Books</span>
              </button>
            </nav>
          </div>

          {/* Center: Global Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE] pointer-events-none" />
            <input
              type="text"
              placeholder="Search colleges, courses, subjects, textbooks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[40px] pl-10 pr-9 text-[13px] font-normal text-white bg-[#1C2036] border border-[#56608F] rounded-[10px] placeholder:text-[#C4C9DE] focus:bg-[#1C2036] focus:outline-none focus:border-[#8FE388] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C4C9DE] hover:text-white p-1 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right: User Profile Pill with 1-Click Dropdown or Login */}
          <div className="flex items-center gap-2 shrink-0">
            {currentUser ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCourseMenuOpen(!isCourseMenuOpen)}
                  className={`flex items-center gap-2 p-1.5 pr-2.5 sm:pr-3 rounded-full border transition-all cursor-pointer select-none text-left ${
                    isCourseMenuOpen
                      ? "bg-[#292F4C] border-[#8FE388] ring-2 ring-[#8FE388]/20 shadow-sm"
                      : "bg-[#1C2036] border-[#56608F] hover:border-[#8FE388] hover:bg-[#292F4C]"
                  }`}
                  title="Click to switch your course in 1 click"
                >
                  <div className="w-8 h-8 rounded-full bg-[#3D446C] text-[#8FE388] border border-[#56608F] flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    {userInitial}
                  </div>
                  <div className="text-left leading-tight min-w-0">
                    <p className="text-[12px] font-bold text-white truncate max-w-[95px] sm:max-w-[110px]">
                      {displayName}
                    </p>
                    <div className="flex items-center gap-1">
                      <p className="text-[10px] font-bold text-[#8FE388] truncate max-w-[105px] sm:max-w-[125px]">
                        {currentUser.course || "All Courses"}
                      </p>
                      <ChevronDown
                        className={`w-3 h-3 text-[#8FE388] transition-transform duration-200 shrink-0 ${
                          isCourseMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Desktop Dropdown */}
                {isCourseMenuOpen && renderCourseMenuDropdown()}
              </div>
            ) : (
              <button
                type="button"
                onClick={onOpenLogin}
                className="btn-cta flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] font-bold text-xs shadow-xs"
              >
                <LogIn className="w-4 h-4 shrink-0" />
                <span>Login</span>
              </button>
            )}
          </div>

        </div>

      </div>

      {/* 1-Click Course Switch Toast Notification */}
      {courseChangeToast && (
        <div className="fixed top-16 right-4 z-50 bg-[#3D446C] text-white px-4 py-2.5 rounded-xl shadow-xl border border-[#8FE388]/40 flex items-center gap-2 text-xs font-bold animate-fade-in">
          <Check className="w-4 h-4 text-[#8FE388]" />
          <span>{courseChangeToast}</span>
        </div>
      )}
    </header>
  );
}
