import React, { useState, useEffect } from "react";
import {
  X,
  GraduationCap,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  BookOpen
} from "lucide-react";
import { formatStudentDisplayName } from "../utils/formatName";

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
      { id: "pgdhrm", name: "P.G.D.H.R.M. (Human Resource Mgmt)", duration: "1 Year", code: "PGDHRM" },
      { id: "ba_general", name: "B.A. (Bachelor of Arts)", duration: "3 Years", code: "B.A." },
      { id: "ba_hons", name: "B.A. Hons (Bachelor of Arts)", duration: "3 Years", code: "B.A. (H)" },
      { id: "ma", name: "M.A. (Master of Arts)", duration: "2 Years", code: "M.A." },
      { id: "bfa", name: "BFA (Bachelor of Fine Arts)", duration: "4 Years", code: "BFA" },
      { id: "journalism", name: "B.A. Journalism & Mass Communication", duration: "3 Years", code: "BJMC" },
      { id: "msw", name: "M.S.W. (Master of Social Work)", duration: "2 Years", code: "MSW" },
      { id: "bed", name: "B.Ed (Bachelor of Education)", duration: "2 Years", code: "B.ED" },
      { id: "med", name: "M.Ed (Master of Education)", duration: "2 Years", code: "M.ED" },
      { id: "llb", name: "L.L.B. (Bachelor of Laws)", duration: "3 Years", code: "LL.B" },
      { id: "llm", name: "LL.M. (Master of Laws)", duration: "2 Years", code: "LL.M" },
      { id: "bsc", name: "B.Sc (Bachelor of Science)", duration: "3 Years", code: "B.SC" },
      { id: "msc", name: "M.Sc (Master of Science)", duration: "2 Years", code: "M.SC" },
      { id: "btech", name: "B.Tech (Bachelor of Technology)", duration: "4 Years", code: "B.TECH" },
      { id: "mtech", name: "M.Tech (Master of Technology)", duration: "2 Years", code: "M.TECH" },
      { id: "bca", name: "BCA (Bachelor of Computer Applications)", duration: "3 Years", code: "BCA" },
      { id: "mca", name: "MCA (Master of Computer Applications)", duration: "2 Years", code: "MCA" },
      { id: "bvoc", name: "B.Voc (Software Development & Tourism)", duration: "3 Years", code: "B.VOC" },
      { id: "bsc_nursing", name: "B.Sc. Nursing (Bachelor of Nursing)", duration: "4 Years", code: "B.SC NUR" },
      { id: "msc_nursing", name: "M.Sc. Nursing (Master of Nursing)", duration: "2 Years", code: "M.SC NUR" },
      { id: "bpt", name: "B.P.T. (Bachelor of Physiotherapy)", duration: "4.5 Years", code: "BPT" },
      { id: "mbbs", name: "M.B.B.S. (Bachelor of Medicine & Surgery)", duration: "5.5 Years", code: "MBBS" }
    ],
    specializations: [
      "All Academic Specializations & Disciplines",
      "Advanced Accounting & Financial Management",
      "English Literature & Critical Studies",
      "Computer Science & Artificial Intelligence",
      "Pedagogy & Educational Leadership",
      "Constitutional & Corporate Law"
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
      { id: "cs", name: "CS (Company Secretary)", duration: "Professional", code: "CS" },
      { id: "pgdhrm", name: "P.G.D.H.R.M. (Human Resource Mgmt)", duration: "1 Year", code: "PGDHRM" }
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
      { id: "ba_general", name: "B.A. (Bachelor of Arts)", duration: "3 Years", code: "B.A." },
      { id: "ba_hons", name: "B.A. Hons (Bachelor of Arts)", duration: "3 Years", code: "B.A. (H)" },
      { id: "ma", name: "M.A. (Master of Arts)", duration: "2 Years", code: "M.A." },
      { id: "bfa", name: "BFA (Bachelor of Fine Arts)", duration: "4 Years", code: "BFA" },
      { id: "journalism", name: "B.A. Journalism & Mass Communication", duration: "3 Years", code: "BJMC" },
      { id: "msw", name: "M.S.W. (Master of Social Work)", duration: "2 Years", code: "MSW" }
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
      { id: "mca", name: "MCA (Master of Computer Applications)", duration: "2 Years", code: "MCA" },
      { id: "bvoc", name: "B.Voc (Software Development & Tourism)", duration: "3 Years", code: "B.VOC" }
    ],
    specializations: [
      "Computer Science & Artificial Intelligence",
      "Physics & Applied Mathematics",
      "Chemistry & Chemical Technology",
      "Biotechnology & Life Sciences",
      "Data Science & Analytics",
      "Electronics & Communication"
    ]
  },
  Education: {
    label: "Education & Teaching",
    courses: [
      { id: "bed", name: "B.Ed (Bachelor of Education)", duration: "2 Years", code: "B.ED" },
      { id: "med", name: "M.Ed (Master of Education)", duration: "2 Years", code: "M.ED" }
    ],
    specializations: [
      "Pedagogy & Classroom Instructional Design",
      "Educational Psychology & Guidance Counseling",
      "Curriculum Planning & Assessment",
      "School Administration & Leadership"
    ]
  },
  Law: {
    label: "Law & Legal Studies",
    courses: [
      { id: "llb", name: "L.L.B. (Bachelor of Laws)", duration: "3 Years", code: "LL.B" },
      { id: "llm", name: "LL.M. (Master of Laws)", duration: "2 Years", code: "LL.M" }
    ],
    specializations: [
      "Constitutional Law & Civil Rights",
      "Corporate & Commercial Jurisprudence",
      "Criminal Law & Judicial Procedures",
      "Intellectual Property Rights"
    ]
  },
  Medical: {
    label: "Medical & Health Sciences",
    courses: [
      { id: "bsc_nursing", name: "B.Sc. Nursing (Bachelor of Nursing)", duration: "4 Years", code: "B.SC NUR" },
      { id: "msc_nursing", name: "M.Sc. Nursing (Master of Nursing)", duration: "2 Years", code: "M.SC NUR" },
      { id: "bpt", name: "B.P.T. (Bachelor of Physiotherapy)", duration: "4.5 Years", code: "BPT" },
      { id: "mbbs", name: "M.B.B.S. (Bachelor of Medicine & Surgery)", duration: "5.5 Years", code: "MBBS" }
    ],
    specializations: [
      "Clinical Patient Care & Pharmacology",
      "Musculoskeletal & Sports Physiotherapy",
      "Critical Care & Pediatric Nursing",
      "Internal Medicine & Surgery"
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

// Helper: Calculate password strength (0 to 4)
function calculatePasswordStrength(pass) {
  if (!pass) return 0;
  let score = 0;
  if (pass.length >= 6) score += 1;
  if (pass.length >= 10) score += 1;
  if (/[0-9]/.test(pass) && /[a-zA-Z]/.test(pass)) score += 1;
  if (/[^a-zA-Z0-9]/.test(pass)) score += 1;
  return Math.min(score, 4);
}

export default function LoginForm({
  isOpen = true,
  onClose,
  onLoginSuccess,
  currentUser,
  onLogout,
  isFullPage = false
}) {
  // Screen mode: 'signin' (Login) | 'signup' (Create account)
  // Default to 'signin' (Login tab first, then Create account)
  const [screenMode, setScreenMode] = useState("signin");

  // Form Fields State
  const [fullName, setFullName] = useState(() => currentUser?.fullName || "");
  const [courseName, setCourseName] = useState(() => currentUser?.course || "");
  const [email, setEmail] = useState(() => currentUser?.email || "");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Sync currentUser into form fields when modal opens
  useEffect(() => {
    if (currentUser) {
      if (currentUser.fullName) setFullName(currentUser.fullName);
      if (currentUser.course) setCourseName(currentUser.course);
      if (currentUser.email) setEmail(currentUser.email);
    }
  }, [currentUser, isOpen]);

  // Modal / Feedback State
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!isOpen && !isFullPage) return null;

  // Clear messages on mode switch
  const handleSwitchScreen = (mode) => {
    setScreenMode(mode);
    setErrorMessage("");
    setSuccessMessage("");
  };

  // Google Sign-in handler
  const handleGoogleSignIn = () => {
    setErrorMessage("");
    const googleUser = {
      fullName: "Alex Morgan",
      email: "alex.morgan@student.edu",
      stream: "Commerce",
      course: courseName.trim() || "B.Com Hons (Bachelor of Commerce)",
      specialization: "Advanced Accounting & Financial Management",
      semester: "1st Year - Semester 1",
      collegeName: "Shri Ram College of Commerce (SRCC)",
      rollNumber: "GOOG-2026-9901",
      isLoggedIn: true,
      authProvider: "google",
      enrolledDate: new Date().toLocaleDateString()
    };
    if (onLoginSuccess) {
      onLoginSuccess(googleUser);
    }
  };

  // Forgot password submit handler
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!forgotEmail || !forgotEmail.includes("@")) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    setForgotSuccess(true);
  };

  // Form Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (screenMode === "signup") {
      if (!fullName.trim()) {
        setErrorMessage("Please enter your full name");
        return;
      }
      if (!courseName.trim()) {
        setErrorMessage("Please enter your course name");
        return;
      }
      if (!email.trim() || !email.includes("@")) {
        setErrorMessage("Please enter a valid email address");
        return;
      }
      if (!password || password.length < 6) {
        setErrorMessage("Password must be at least 6 characters long");
        return;
      }
    } else {
      if (!email.trim() || !email.includes("@")) {
        setErrorMessage("Please enter your email address");
        return;
      }
      if (!password) {
        setErrorMessage("Please enter your password");
        return;
      }
    }

    // Success user payload
    const userPayload = {
      fullName: formatStudentDisplayName(fullName.trim(), email),
      email: email.trim(),
      course: courseName.trim() || "M.Com (Master of Commerce)",
      stream: "Commerce",
      specialization: "Advanced Accounting & Financial Management",
      semester: "Postgraduate Year 1 (Sem 1 & 2)",
      collegeName: "Department of Commerce & Management",
      rollNumber: "REG-2026-8841",
      isLoggedIn: true,
      enrolledDate: new Date().toLocaleDateString()
    };

    if (onLoginSuccess) {
      onLoginSuccess(userPayload);
    }
  };

  // Password strength score computation
  const strengthScore = calculatePasswordStrength(password);
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["#56608F", "#EF4444", "#F5A623", "#8FE388", "#4CD964"];

  const containerClasses = isFullPage
    ? "min-h-screen bg-[#1C2036] text-white flex flex-col items-center justify-center p-4 font-sans selection:bg-[#3D446C] selection:text-white relative overflow-hidden"
    : "fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-[#1C2036]/85 backdrop-blur-sm font-sans overflow-y-auto";

  return (
    <div className={containerClasses}>
      {/* Background floating orbs for full-page mode */}
      {isFullPage && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#3D446C] opacity-30 blur-[100px] bg-orb-1" />
          <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#8FE388] opacity-20 blur-[120px] bg-orb-2" />
          <div className="absolute bottom-[-15%] left-[25%] w-[550px] h-[550px] rounded-full bg-[#292F4C] opacity-35 blur-[90px] bg-orb-3" />
        </div>
      )}

      {/* Outer wrapper */}
      <div className="w-full max-w-[420px] flex flex-col items-center relative z-10">

        {/* ------------------------------------------------------------- */}
        {/* LOGO MARK + SCREEN TITLE + ONE-LINE SUBTEXT                   */}
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-col items-center text-center mb-5">
          <div className="w-11 h-11 bg-[#3D446C] border border-[#56608F] text-[#8FE388] rounded-xl flex items-center justify-center shadow-xs mb-3">
            <GraduationCap className="w-6 h-6" />
          </div>

          <h1 className="text-[18px] font-bold text-white tracking-tight">
            {screenMode === "signin" ? "Login to EduNexus" : "Create your account"}
          </h1>

          <p className="text-[12px] font-normal text-[#C4C9DE] mt-1">
            {screenMode === "signin"
              ? "Sign in to access your course syllabus, notes & textbooks"
              : "Start your academic journey with our student portal"}
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TAB SWITCHER: 1. Login | 2. Create account                    */}
        {/* ------------------------------------------------------------- */}
        <div className="w-full bg-[#1C2036] p-1 rounded-xl border border-[#56608F] flex items-center gap-1 mb-4">
          <button
            type="button"
            onClick={() => handleSwitchScreen("signin")}
            className={`tab-underline-animated flex-1 py-2 text-[13px] font-semibold rounded-lg transition-all text-center cursor-pointer ${
              screenMode === "signin"
                ? "is-active bg-[#3D446C] text-[#8FE388] shadow-xs"
                : "text-[#C4C9DE] hover:text-white hover:bg-[#3D446C]/30"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => handleSwitchScreen("signup")}
            className={`tab-underline-animated flex-1 py-2 text-[13px] font-semibold rounded-lg transition-all text-center cursor-pointer ${
              screenMode === "signup"
                ? "is-active bg-[#3D446C] text-[#8FE388] shadow-xs"
                : "text-[#C4C9DE] hover:text-white hover:bg-[#3D446C]/30"
            }`}
          >
            Create account
          </button>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* CARD CONTAINER (Dark surface, 20px radius, subtle border)     */}
        {/* ------------------------------------------------------------- */}
        <div className="w-full bg-[#292F4C] rounded-[20px] border border-[#56608F] p-6 shadow-xl relative">
          
          {!isFullPage && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-[#C4C9DE] hover:text-white transition-colors p-1 rounded-lg hover:bg-[#3D446C] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Soft coral error banner (if any error) */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/30 flex items-start gap-2.5 text-[#EF4444]">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-[12px] font-medium leading-tight">{errorMessage}</span>
              </div>
            )}

            {/* Success feedback message */}
            {successMessage && (
              <div className="p-3 rounded-xl bg-[#8FE388]/15 border border-[#8FE388]/30 flex items-start gap-2.5 text-[#8FE388]">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-[12px] font-medium leading-tight">{successMessage}</span>
              </div>
            )}

            {/* ------------------ SIGN IN FIELDS (LOGIN) ------------------ */}
            {screenMode === "signin" && (
              <>
                {/* Email address field */}
                <div>
                  <label className="block text-[12px] font-medium text-white mb-1">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE] pointer-events-none" />
                    <input
                      type="email"
                      placeholder="student@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-[42px] pl-10 pr-3 text-[14px] font-normal text-white bg-[#1C2036] border border-[#56608F] rounded-xl placeholder:text-[#C4C9DE] focus:bg-[#1C2036] focus:outline-none focus:border-[#8FE388] transition-all"
                    />
                  </div>
                </div>

                {/* Password field + Forgot link */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[12px] font-medium text-white">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setForgotPasswordOpen(true);
                        setForgotSuccess(false);
                        setForgotEmail(email);
                        setErrorMessage("");
                      }}
                      className="text-[12px] font-medium text-[#8FE388] hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE] pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-[42px] pl-10 pr-10 text-[14px] font-normal text-white bg-[#1C2036] border border-[#56608F] rounded-xl placeholder:text-[#C4C9DE] focus:bg-[#1C2036] focus:outline-none focus:border-[#8FE388] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#C4C9DE] hover:text-white transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Primary CTA: Login */}
                <button
                  type="submit"
                  className="btn-cta w-full h-[42px] bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] font-bold text-[14px] rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-md mt-1"
                >
                  Login
                </button>
              </>
            )}

            {/* ------------------ SIGN UP FIELDS (CREATE ACCOUNT) ------------------ */}
            {screenMode === "signup" && (
              <>
                {/* Full name field */}
                <div>
                  <label className="block text-[12px] font-medium text-white mb-1">
                    Full name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE] pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-[42px] pl-10 pr-3 text-[14px] font-normal text-white bg-[#1C2036] border border-[#56608F] rounded-xl placeholder:text-[#C4C9DE] focus:bg-[#1C2036] focus:outline-none focus:border-[#8FE388] transition-all"
                    />
                  </div>
                </div>

                {/* Course name field */}
                <div>
                  <label className="block text-[12px] font-medium text-white mb-1">
                    Course name
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE] pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. B.Com Hons, M.Com, B.Tech"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      className="w-full h-[42px] pl-10 pr-3 text-[14px] font-normal text-white bg-[#1C2036] border border-[#56608F] rounded-xl placeholder:text-[#C4C9DE] focus:bg-[#1C2036] focus:outline-none focus:border-[#8FE388] transition-all"
                    />
                  </div>
                </div>

                {/* Email address field */}
                <div>
                  <label className="block text-[12px] font-medium text-white mb-1">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE] pointer-events-none" />
                    <input
                      type="email"
                      placeholder="student@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-[42px] pl-10 pr-3 text-[14px] font-normal text-white bg-[#1C2036] border border-[#56608F] rounded-xl placeholder:text-[#C4C9DE] focus:bg-[#1C2036] focus:outline-none focus:border-[#8FE388] transition-all"
                    />
                  </div>
                </div>

                {/* Password field with show/hide toggle & strength bar */}
                <div>
                  <label className="block text-[12px] font-medium text-white mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE] pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 6 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-[42px] pl-10 pr-10 text-[14px] font-normal text-white bg-[#1C2036] border border-[#56608F] rounded-xl placeholder:text-[#C4C9DE] focus:bg-[#1C2036] focus:outline-none focus:border-[#8FE388] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#C4C9DE] hover:text-white transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Password strength indicator bar */}
                  {password && (
                    <div className="mt-1.5">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((step) => (
                          <div
                            key={step}
                            className="h-1 flex-1 rounded-full transition-all duration-300"
                            style={{
                              backgroundColor:
                                step <= strengthScore
                                  ? strengthColors[strengthScore]
                                  : "#56608F"
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[11px] font-normal text-[#C4C9DE]">
                          Password strength
                        </span>
                        <span
                          className="text-[11px] font-semibold"
                          style={{ color: strengthColors[strengthScore] }}
                        >
                          {strengthLabels[strengthScore]}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Primary CTA: Create account */}
                <button
                  type="submit"
                  className="btn-cta w-full h-[42px] bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] font-bold text-[14px] rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-md mt-1"
                >
                  Create account
                </button>
              </>
            )}

            {/* ------------------------------------------------------------- */}
            {/* DIVIDER: "or continue with"                                  */}
            {/* ------------------------------------------------------------- */}
            <div className="relative flex items-center justify-center my-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#56608F]" />
              </div>
              <span className="relative bg-[#292F4C] px-3 text-[11px] font-medium text-[#C4C9DE]">
                or continue with
              </span>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* SECONDARY BUTTON: Google sign-in                              */}
            {/* ------------------------------------------------------------- */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn-cta w-full h-[42px] bg-[#1C2036] hover:bg-[#3D446C]/40 border border-[#56608F] hover:border-[#8FE388]/40 rounded-xl text-white font-medium text-[13px] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-xs"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

          </form>

          {/* ------------------------------------------------------------- */}
          {/* FOOTER LINK                                                   */}
          {/* ------------------------------------------------------------- */}
          <div className="mt-4 pt-3.5 border-t border-[#56608F] text-center">
            {screenMode === "signup" ? (
              <p className="text-[12px] font-normal text-[#C4C9DE]">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => handleSwitchScreen("signin")}
                  className="text-[#8FE388] font-semibold hover:underline cursor-pointer ml-1"
                >
                  Login
                </button>
              </p>
            ) : (
              <p className="text-[12px] font-normal text-[#C4C9DE]">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => handleSwitchScreen("signup")}
                  className="text-[#8FE388] font-semibold hover:underline cursor-pointer ml-1"
                >
                  Create account
                </button>
              </p>
            )}
          </div>

        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* FORGOT PASSWORD MODAL                                         */}
      {/* ------------------------------------------------------------- */}
      {forgotPasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C2036]/85 backdrop-blur-sm">
          <div className="bg-[#292F4C] rounded-[20px] border border-[#56608F] w-full max-w-[380px] p-6 shadow-2xl relative font-sans">
            <button
              onClick={() => setForgotPasswordOpen(false)}
              className="absolute top-4 right-4 text-[#C4C9DE] hover:text-white transition-colors p-1 rounded-lg hover:bg-[#3D446C] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-[16px] font-bold text-white mb-1">
              Reset password
            </h3>
            <p className="text-[12px] font-normal text-[#C4C9DE] mb-4">
              Enter your registered email address to receive reset instructions
            </p>

            {forgotSuccess ? (
              <div className="p-4 bg-[#8FE388]/15 border border-[#8FE388]/30 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-6 h-6 text-[#8FE388] mx-auto" />
                <p className="text-[13px] font-bold text-[#8FE388]">
                  Reset link sent!
                </p>
                <p className="text-[12px] font-normal text-[#C4C9DE]">
                  Check your inbox for password reset instructions.
                </p>
                <button
                  type="button"
                  onClick={() => setForgotPasswordOpen(false)}
                  className="btn-cta w-full h-[38px] bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] text-[13px] font-bold rounded-xl mt-2 cursor-pointer transition-all shadow-xs"
                >
                  Back to login
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotPasswordSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[12px] font-medium text-white mb-1">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE]" />
                    <input
                      type="email"
                      required
                      placeholder="student@university.edu"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      className="w-full h-[42px] pl-10 pr-3 text-[14px] font-normal text-white bg-[#1C2036] border border-[#56608F] rounded-xl placeholder:text-[#C4C9DE] focus:bg-[#1C2036] focus:outline-none focus:border-[#8FE388] transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-cta w-full h-[42px] bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] font-bold text-[13px] rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Send reset link
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
