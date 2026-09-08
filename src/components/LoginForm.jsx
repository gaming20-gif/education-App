import React, { useState } from "react";
import { X, GraduationCap, User, Mail, Lock, BookOpen, Award, Building2, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

// Stream data with dependent courses and specializations
export const STREAM_DATA = {
  All: {
    label: "All Academic Streams",
    courses: [
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

export default function LoginForm({ isOpen, onClose, onLoginSuccess, isFullPage = false }) {
  const [mode, setMode] = useState("register"); // 'login' | 'register'
  
  // Form input states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedStream, setSelectedStream] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState("M.Com (Master of Commerce)");
  const [specialization, setSpecialization] = useState("Advanced Accounting & Financial Management");
  const [semester, setSemester] = useState("Postgraduate Year 1 (Sem 1 & 2)");
  const [collegeName, setCollegeName] = useState("Department of Commerce & Management, KSKV Kutch University");
  const [rollNumber, setRollNumber] = useState("");

  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen && !isFullPage) return null;

  // Handler for Stream Change -> Auto-updates available courses & specializations
  const handleStreamChange = (stream) => {
    setSelectedStream(stream);
    
    // Automatically reset course & specialization to first items in the selected stream
    const defaultCourse = STREAM_DATA[stream]?.courses[0]?.name || "";
    const defaultSpec = STREAM_DATA[stream]?.specializations[0] || "";
    setSelectedCourse(defaultCourse);
    setSpecialization(defaultSpec);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please fill in required credentials (Email & Password).");
      return;
    }

    if (mode === "register" && !fullName) {
      setErrorMessage("Please enter your Full Name.");
      return;
    }

    const userData = {
      fullName: fullName || (email.split("@")[0] || "Student"),
      email,
      stream: selectedStream,
      course: selectedCourse,
      specialization,
      semester,
      collegeName,
      rollNumber: rollNumber || "REG-2026-8841",
      isLoggedIn: true,
      enrolledDate: new Date().toLocaleDateString()
    };

    setSubmittedSuccess(true);
    setTimeout(() => {
      onLoginSuccess(userData);
      setSubmittedSuccess(false);
      if (onClose) onClose();
    }, 1000);
  };

  const containerClasses = isFullPage
    ? "min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black text-slate-800 flex items-center justify-center p-4"
    : "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in overflow-y-auto";

  return (
    <div className={containerClasses}>
      
      {/* Modal / Card Container */}
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 w-full max-w-xl my-6 overflow-hidden transform transition-all">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#1E40AF] via-blue-800 to-indigo-900 text-white p-5 sm:p-7 pr-12 sm:pr-14 relative">
          {!isFullPage && onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors z-10"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <div className="flex items-start gap-3 mb-2 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center shadow-inner flex-shrink-0 mt-0.5">
              <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-amber-300" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white leading-tight">EduNexus Portal</h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-blue-950 font-black text-[10px] uppercase whitespace-nowrap">
                  Step 1 Login
                </span>
              </div>
              <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                {mode === "register" 
                  ? "Student Registration — Select Stream & Course to Access Portal" 
                  : "Sign In to Access Your Academic Dashboard"}
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-blue-950/50 p-1.5 rounded-2xl border border-blue-700/40 mt-4 text-[11px] sm:text-xs font-semibold">
            <button
              type="button"
              onClick={() => setMode("register")}
              className={`flex-1 py-2 sm:py-2.5 px-1 rounded-xl text-center transition-all ${
                mode === "register"
                  ? "bg-white text-[#1E40AF] shadow-md font-extrabold"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              🎓 Student Enrolment
            </button>
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 py-2 sm:py-2.5 px-1 rounded-xl text-center transition-all ${
                mode === "login"
                  ? "bg-white text-[#1E40AF] shadow-md font-extrabold"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              🔑 Existing Login
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-7 max-h-[72vh] overflow-y-auto">
          
          {submittedSuccess ? (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                {mode === "register" ? "Enrolment Complete!" : "Welcome Back!"}
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Opening portal for <strong className="text-[#1E40AF]">{selectedCourse}</strong> ({selectedStream} Stream)...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                  <span>⚠️</span> {errorMessage}
                </div>
              )}

              {/* REGISTER MODE FIELDS */}
              {mode === "register" && (
                <>
                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#1E40AF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* 2. Stream Selection (All, Commerce, Arts, Science) */}
                  <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-3">
                    <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider">
                      1. Select Stream <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {Object.keys(STREAM_DATA).map((streamKey) => (
                        <button
                          key={streamKey}
                          type="button"
                          onClick={() => handleStreamChange(streamKey)}
                          className={`py-2.5 px-2 rounded-xl border text-xs font-extrabold flex flex-col items-center justify-center gap-1 transition-all ${
                            selectedStream === streamKey
                              ? "bg-[#1E40AF] text-white border-[#1E40AF] shadow-md scale-[1.02]"
                              : "bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50"
                          }`}
                        >
                          <span className="text-base sm:text-lg">
                            {streamKey === "All" ? "🌐" : streamKey === "Commerce" ? "📊" : streamKey === "Arts" ? "🎨" : "🔬"}
                          </span>
                          <span>{streamKey === "All" ? "All Streams" : streamKey}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Dependent Course Selection (B.Com, M.Com, BBA, etc. dynamically updated) */}
                  <div className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-[#1E40AF] uppercase tracking-wider">
                        2. Select Course in {selectedStream} <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1E40AF]">
                        {STREAM_DATA[selectedStream]?.courses.length} Available
                      </span>
                    </div>

                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full bg-white border border-blue-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:border-[#1E40AF] focus:ring-2 focus:ring-blue-100 outline-none transition-all cursor-pointer shadow-xs"
                    >
                      {STREAM_DATA[selectedStream]?.courses.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.code} — {c.name} ({c.duration})
                        </option>
                      ))}
                    </select>

                    <p className="text-[11px] text-slate-600 italic font-medium">
                      💡 Stream: <strong className="text-slate-800">{selectedStream}</strong> → Options: {STREAM_DATA[selectedStream]?.courses.map(c => c.code).join(", ")}
                    </p>
                  </div>
                </>
              )}

              {/* COMMON CREDENTIAL FIELDS (Email & Password) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@university.edu.in"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#1E40AF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#1E40AF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-6 rounded-2xl bg-[#1E40AF] hover:bg-blue-900 text-white font-extrabold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>{mode === "register" ? "Complete Login & Open Portal ➜" : "Sign In & Access Portal ➜"}</span>
              </button>

            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 border-t border-slate-100 p-4 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span>EduNexus Portal • Authenticated Student Access Control</span>
        </div>

      </div>
    </div>
  );
}
