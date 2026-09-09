import React, { useState } from "react";
import {
  X,
  GraduationCap,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  LogOut,
  BookOpen
} from "lucide-react";

// Stream data with dependent courses and specializations
export const STREAM_DATA = {
  All: {
    label: "All Academic Streams",
    courses: [
      { id: "all_courses", name: "All Academic Courses", duration: "All Years", code: "ALL" },
      { id: "mcom", name: "M.Com (Master of Commerce)", duration: "2 Years", code: "M.COM" },
      { id: "bcom_hons", name: "B.Com Hons (Bachelor of Commerce)", duration: "3 Years", code: "B.COM (H)" },
      { id: "bcom_pass", name: "B.Com General / Program", duration: "3 Years", code: "B.COM" },
      { id: "bba", name: "BBA (Bachelor of Business Admin)", duration: "3 Years", code: "BBA" },
      { id: "mba", name: "MBA (Master of Business Admin)", duration: "2 Years", code: "MBA" },
      { id: "ca", name: "CA (Chartered Accountancy)", duration: "Professional", code: "CA" },
      { id: "cs", name: "CS (Company Secretary)", duration: "Professional", code: "CS" },
      { id: "ba_hons", name: "B.A. Hons (Bachelor of Arts)", duration: "3 Years", code: "B.A. (H)" },
      { id: "ma", name: "M.A. (Master of Arts)", duration: "2 Years", code: "M.A." },
      { id: "bfa", name: "BFA (Bachelor of Fine Arts)", duration: "4 Years", code: "BFA" },
      { id: "bed", name: "B.Ed (Bachelor of Education)", duration: "2 Years", code: "B.ED" },
      { id: "journalism", name: "B.A. Journalism & Mass Communication", duration: "3 Years", code: "BJMC" },
      { id: "bsc", name: "B.Sc (Bachelor of Science)", duration: "3 Years", code: "B.SC" },
      { id: "msc", name: "M.Sc (Master of Science)", duration: "2 Years", code: "M.SC" },
      { id: "btech", name: "B.Tech (Bachelor of Technology)", duration: "4 Years", code: "B.TECH" },
      { id: "mtech", name: "M.Tech (Master of Technology)", duration: "2 Years", code: "M.TECH" },
      { id: "bca", name: "BCA (Bachelor of Computer Applications)", duration: "3 Years", code: "BCA" },
      { id: "mca", name: "MCA (Master of Computer Applications)", duration: "2 Years", code: "MCA" }
    ],
    specializations: [
      "All Academic Specializations & Disciplines",
      "Advanced Accounting & Financial Management",
      "English Literature & Critical Studies",
      "Computer Science & Artificial Intelligence"
    ]
  },
  Commerce: {
    label: "Commerce & Business",
    courses: [
      { id: "mcom", name: "M.Com (Master of Commerce)", duration: "2 Years", code: "M.COM" },
      { id: "bcom_hons", name: "B.Com Hons (Bachelor of Commerce)", duration: "3 Years", code: "B.COM (H)" },
      { id: "bcom_pass", name: "B.Com General / Program", duration: "3 Years", code: "B.COM" },
      { id: "bba", name: "BBA (Bachelor of Business Admin)", duration: "3 Years", code: "BBA" },
      { id: "mba", name: "MBA (Master of Business Admin)", duration: "2 Years", code: "MBA" },
      { id: "ca", name: "CA (Chartered Accountancy)", duration: "Professional", code: "CA" },
      { id: "cs", name: "CS (Company Secretary)", duration: "Professional", code: "CS" }
    ],
    specializations: [
      "Advanced Accounting & Financial Management",
      "Corporate Governance & Business Law",
      "International Business & Finance",
      "Direct & Indirect Business Taxation",
      "Banking, Insurance & Financial Services",
      "Cost Management & Managerial Accounting",
      "Marketing & E-Commerce Management"
    ]
  },
  Arts: {
    label: "Arts & Humanities",
    courses: [
      { id: "ba_hons", name: "B.A. Hons (Bachelor of Arts)", duration: "3 Years", code: "B.A. (H)" },
      { id: "ma", name: "M.A. (Master of Arts)", duration: "2 Years", code: "M.A." },
      { id: "bfa", name: "BFA (Bachelor of Fine Arts)", duration: "4 Years", code: "BFA" },
      { id: "bed", name: "B.Ed (Bachelor of Education)", duration: "2 Years", code: "B.ED" },
      { id: "journalism", name: "B.A. Journalism & Mass Communication", duration: "3 Years", code: "BJMC" }
    ],
    specializations: [
      "English Literature & Critical Studies",
      "Political Science & Public Admin",
      "History & Heritage Studies",
      "Economics & Policy Research",
      "Psychology & Human Behavior",
      "Sociology & Cultural Studies"
    ]
  },
  Science: {
    label: "Science & Technology",
    courses: [
      { id: "bsc", name: "B.Sc (Bachelor of Science)", duration: "3 Years", code: "B.SC" },
      { id: "msc", name: "M.Sc (Master of Science)", duration: "2 Years", code: "M.SC" },
      { id: "btech", name: "B.Tech (Bachelor of Technology)", duration: "4 Years", code: "B.TECH" },
      { id: "mtech", name: "M.Tech (Master of Technology)", duration: "2 Years", code: "M.TECH" },
      { id: "bca", name: "BCA (Bachelor of Computer Applications)", duration: "3 Years", code: "BCA" },
      { id: "mca", name: "MCA (Master of Computer Applications)", duration: "2 Years", code: "MCA" }
    ],
    specializations: [
      "Computer Science & Artificial Intelligence",
      "Physics & Applied Mathematics",
      "Chemistry & Chemical Technology",
      "Biotechnology & Life Sciences",
      "Data Science & Analytics",
      "Electronics & Communication"
    ]
  }
};

export const SEMESTERS = [
  "1st Year - Semester 1",
  "1st Year - Semester 2",
  "2nd Year - Semester 3",
  "2nd Year - Semester 4",
  "3rd Year - Semester 5",
  "3rd Year - Semester 6",
  "Postgraduate Year 1 (Sem 1 & 2)",
  "Postgraduate Year 2 (Sem 3 & 4)"
];

export const POPULAR_COLLEGES = [
  "Shri Ram College of Commerce (SRCC), Delhi University",
  "Hindu College, University of Delhi",
  "St. Xavier's College, Mumbai / Kolkata",
  "Loyola College, Chennai",
  "Christ University, Bengaluru",
  "Hansraj College, Delhi University",
  "Lady Shri Ram College for Women (LSR)",
  "Other University / College"
];

export default function LoginForm({
  isOpen,
  onClose,
  onLoginSuccess,
  currentUser,
  onLogout,
  isFullPage = false
}) {
  // Mode: 'register' (Sign Up) | 'login' (Sign In)
  const [mode, setMode] = useState("register");

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Academic State
  const [selectedStream, setSelectedStream] = useState("Commerce");
  const [selectedCourse, setSelectedCourse] = useState(""); // Default empty requiring user selection
  const [specialization, setSpecialization] = useState("Advanced Accounting & Financial Management");
  const [semester, setSemester] = useState("Postgraduate Year 1 (Sem 1 & 2)");
  const [collegeName, setCollegeName] = useState("Department of Commerce & Management");
  const [rollNumber, setRollNumber] = useState("");

  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen && !isFullPage) return null;

  // Stream selection handler
  const handleStreamChange = (stream) => {
    setSelectedStream(stream);
    if (stream === "All") {
      setSelectedCourse("All Academic Courses");
    } else {
      setSelectedCourse(""); // Reset course to force explicit user selection
    }
    const defaultSpec = STREAM_DATA[stream]?.specializations[0] || "";
    setSpecialization(defaultSpec);
  };

  // Quick Demo Login Handler
  const handleQuickDemoLogin = () => {
    setErrorMessage("");
    const demoUser = {
      fullName: "Ananya Sharma",
      email: "demo.student@edunexus.edu",
      stream: "Commerce",
      course: "M.Com (Master of Commerce)",
      specialization: "Advanced Accounting & Financial Management",
      semester: "Postgraduate Year 1 (Sem 1 & 2)",
      collegeName: "Shri Ram College of Commerce (SRCC)",
      rollNumber: "REG-2026-DEMO",
      isLoggedIn: true,
      enrolledDate: new Date().toLocaleDateString()
    };

    setSubmittedSuccess(true);
    setTimeout(() => {
      onLoginSuccess(demoUser);
      setSubmittedSuccess(false);
      if (onClose) onClose();
    }, 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter both Email Address and Password.");
      return;
    }

    if (mode === "register") {
      if (!fullName.trim()) {
        setErrorMessage("Please enter your Full Name.");
        return;
      }
      if (selectedStream !== "All" && !selectedCourse) {
        setErrorMessage(`Please select a course for the ${selectedStream} stream.`);
        return;
      }
    }

    const userData = {
      fullName: mode === "register" ? fullName.trim() : (fullName.trim() || email.split("@")[0] || "Student"),
      email: email.trim(),
      stream: selectedStream,
      course: selectedCourse || (selectedStream === "All" ? "All Academic Courses" : STREAM_DATA[selectedStream]?.courses[0]?.name || "M.Com (Master of Commerce)"),
      specialization,
      semester,
      collegeName: collegeName || "University Student Portal",
      rollNumber: rollNumber || "REG-2026-8841",
      isLoggedIn: true,
      enrolledDate: new Date().toLocaleDateString()
    };

    setSubmittedSuccess(true);
    setTimeout(() => {
      onLoginSuccess(userData);
      setSubmittedSuccess(false);
      if (onClose) onClose();
    }, 800);
  };

  const containerClasses = isFullPage
    ? "min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950 via-slate-900 to-black text-slate-800 flex items-center justify-center p-3 sm:p-6"
    : "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/75 backdrop-blur-md animate-fade-in overflow-y-auto";

  // Helper for initial avatar
  const getInitial = (name) => {
    if (!name) return "S";
    return name.charAt(0).toUpperCase();
  };

  // -------------------------------------------------------------
  // VIEW 1: USER IS ALREADY LOGGED IN -> SHOW DETAILS & LOG OUT ONLY
  // -------------------------------------------------------------
  if (currentUser) {
    return (
      <div className={containerClasses}>
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 w-full max-w-lg my-4 overflow-hidden transform transition-all animate-fade-in">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-6 relative">
            {onClose && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-10 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-blue-950 font-black text-2xl flex items-center justify-center shadow-lg border-2 border-amber-300 shrink-0">
                {getInitial(currentUser.fullName)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-extrabold text-white truncate">
                    {currentUser.fullName}
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-blue-950 text-[10px] font-black uppercase">
                    Active Session
                  </span>
                </div>
                <p className="text-xs text-blue-200 mt-0.5 truncate">{currentUser.email}</p>
              </div>
            </div>
          </div>

          {/* Student Details Body */}
          <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Student Account Details
            </h3>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
              
              {/* Name */}
              <div className="flex items-center justify-between py-2 border-b border-slate-200/60">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-blue-600" /> Full Name
                </span>
                <span className="text-xs font-bold text-slate-800">{currentUser.fullName}</span>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between py-2 border-b border-slate-200/60">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-blue-600" /> Email Address
                </span>
                <span className="text-xs font-bold text-slate-800 truncate max-w-[200px]">{currentUser.email}</span>
              </div>

              {/* Stream */}
              <div className="flex items-center justify-between py-2">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-600" /> Academic Stream
                </span>
                <span className="text-xs font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  {currentUser.stream || "All Streams"}
                </span>
              </div>

            </div>

            {/* Log Out Action Button */}
            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={() => {
                  if (onLogout) onLogout();
                  if (onClose) onClose();
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out of Account</span>
              </button>

              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                >
                  Close Window
                </button>
              )}
            </div>

          </div>

          {/* Footer info */}
          <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>EduNexus Student Dashboard • Logged In</span>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: USER IS NOT LOGGED IN -> SHOW CREATE ACCOUNT / SIGN IN
  // -------------------------------------------------------------
  return (
    <div className={containerClasses}>
      
      {/* Main Card Container */}
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 w-full max-w-xl my-4 sm:my-8 overflow-hidden transform transition-all">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-6 sm:p-8 relative">
          {!isFullPage && onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-10 cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center shadow-inner shrink-0">
              <GraduationCap className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {mode === "register" ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="text-xs sm:text-sm text-blue-200 mt-0.5">
                {mode === "register"
                  ? "Sign up to customize your academic dashboard & stream"
                  : "Sign in to access your courses, textbooks & syllabus"}
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-2 bg-blue-950/60 p-1.5 rounded-2xl border border-blue-600/30 mt-4">
            <button
              type="button"
              onClick={() => {
                setMode("register");
                setErrorMessage("");
              }}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                mode === "register"
                  ? "bg-white text-blue-900 shadow-md scale-[1.01]"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Create Account</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("login");
                setErrorMessage("");
              }}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                mode === "login"
                  ? "bg-white text-blue-900 shadow-md scale-[1.01]"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              <Lock className="w-4 h-4 text-blue-600" />
              <span>Sign In</span>
            </button>
          </div>
        </div>

        {/* Quick Demo Access Bar */}
        <div className="bg-amber-50/80 border-b border-amber-200/80 px-6 py-2.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-900">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Want to test quickly without typing?</span>
          </div>
          <button
            type="button"
            onClick={handleQuickDemoLogin}
            className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all shadow-xs shrink-0 active:scale-95 cursor-pointer"
          >
            ⚡ Quick Demo Login
          </button>
        </div>

        {/* Body Form */}
        <div className="p-6 sm:p-8 max-h-[68vh] overflow-y-auto">
          
          {submittedSuccess ? (
            <div className="py-10 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  {mode === "register" ? "Account Created!" : "Signed In Successfully!"}
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto mt-2 leading-relaxed">
                  Opening dashboard for <strong className="text-blue-700">{selectedCourse}</strong>...
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2 animate-shake">
                  <span className="text-base">⚠️</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* ------------------------------------ */}
              {/* SIGN UP / REGISTER SPECIFIC FIELDS  */}
              {/* ------------------------------------ */}
              {mode === "register" && (
                <>
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Academic Stream Selection Cards */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Select Academic Stream <span className="text-red-500">*</span>
                    </label>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {Object.keys(STREAM_DATA).map((streamKey) => {
                        const isSelected = selectedStream === streamKey;
                        const icon = streamKey === "Commerce" ? "📊" : streamKey === "Arts" ? "🎨" : streamKey === "Science" ? "🔬" : "🌐";
                        
                        return (
                          <button
                            key={streamKey}
                            type="button"
                            onClick={() => handleStreamChange(streamKey)}
                            className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                              isSelected
                                ? "bg-blue-700 text-white border-blue-700 shadow-md scale-[1.02]"
                                : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
                            }`}
                          >
                            <span className="text-lg">{icon}</span>
                            <span>{streamKey === "All" ? "All Streams" : streamKey}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Course Dropdown */}
                  <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider">
                        Select Course ({selectedStream}) {selectedStream !== "All" && <span className="text-red-500">*</span>}
                      </label>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        {STREAM_DATA[selectedStream]?.courses.length} Courses
                      </span>
                    </div>

                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold outline-none transition-all cursor-pointer shadow-xs ${
                        selectedStream !== "All" && !selectedCourse
                          ? "border-amber-400 text-amber-900 bg-amber-50/30 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                          : "border-blue-300 text-slate-800 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      }`}
                    >
                      {selectedStream === "All" ? (
                        <option value="" className="text-slate-500 font-normal">
                          -- All Academic Courses (Optional) --
                        </option>
                      ) : (
                        <option value="" disabled className="text-slate-400 font-normal">
                          -- Select Course in {selectedStream} --
                        </option>
                      )}
                      {STREAM_DATA[selectedStream]?.courses.map((c) => (
                        <option key={c.id} value={c.name} className="text-slate-800 font-semibold">
                          {c.code} — {c.name} ({c.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {/* ------------------------------------ */}
              {/* COMMON FIELDS: Email & Password       */}
              {/* ------------------------------------ */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@university.edu"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Password <span className="text-red-500">*</span>
                  </label>
                  {mode === "login" && (
                    <button
                      type="button"
                      onClick={() => alert("Password reset link has been sent to your email (Demo mode).")}
                      className="text-xs text-blue-600 hover:underline font-semibold cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-6 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
              >
                <span>{mode === "register" ? "Create Account & Start Learning" : "Sign In & Access Dashboard"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 border-t border-slate-100 px-6 py-3.5 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>EduNexus Academic Portal • Secure Student Access</span>
        </div>

      </div>
    </div>
  );
}
