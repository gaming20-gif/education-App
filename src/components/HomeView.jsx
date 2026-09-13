import React, { useState } from "react";
import {
  Menu,
  BookOpen,
  Compass,
  Calendar,
  FileText,
  Edit3,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  X,
  Search,
  Sparkles,
  ArrowRight,
  Lock,
  Download,
  Share2,
  Bell,
  User,
  Plus,
  Clock,
  Layers,
  Award,
  FileDown,
  Check,
  Building2,
  MapPin,
  School,
  Briefcase,
  TrendingUp,
  Target
} from "lucide-react";
import { COURSES, COLLEGES, UNIVERSITIES } from "../data/educationData";
import { formatStudentDisplayName } from "../utils/formatName";
import { downloadSemesterSubjectsZip, downloadSingleSubjectPdf } from "../utils/downloadHelper";

// Mock Semester Subjects Data
const SEMESTER_DATA = {
  1: [
    { id: "s1_1", name: "Financial Accounting I", code: "FA-101", chapters: 8, progress: 85, color: "#085041" },
    { id: "s1_2", name: "Business Organisation", code: "BO-102", chapters: 6, progress: 60, color: "#854F0B" },
    { id: "s1_3", name: "Microeconomics", code: "ME-103", chapters: 10, progress: 40, color: "#085041" },
    { id: "s1_4", name: "Business Communication", code: "BC-104", chapters: 5, progress: 95, color: "#854F0B" }
  ],
  2: [
    { id: "s2_1", name: "Business Law", code: "BL-201", chapters: 9, progress: 70, color: "#085041" },
    { id: "s2_2", name: "Business Mathematics", code: "BM-202", chapters: 7, progress: 50, color: "#854F0B" },
    { id: "s2_3", name: "Macroeconomics", code: "MA-203", chapters: 8, progress: 30, color: "#085041" },
    { id: "s2_4", name: "Environmental Studies", code: "EVS-204", chapters: 6, progress: 100, color: "#854F0B" }
  ],
  3: [
    { id: "s3_1", name: "Advanced Financial Accounting", code: "AFA-301", chapters: 10, progress: 68, color: "#085041" },
    { id: "s3_2", name: "Corporate Governance", code: "CG-302", chapters: 8, progress: 45, color: "#854F0B" },
    { id: "s3_3", name: "Income Tax Law & Practice", code: "IT-303", chapters: 12, progress: 55, color: "#085041" },
    { id: "s3_4", name: "Company Law", code: "CL-304", chapters: 9, progress: 80, color: "#854F0B" }
  ],
  4: [
    { id: "s4_1", name: "Cost Accounting", code: "CA-401", chapters: 9, progress: 40, color: "#085041" },
    { id: "s4_2", name: "Indirect Tax Laws (GST)", code: "ITL-402", chapters: 11, progress: 25, color: "#854F0B" },
    { id: "s4_3", name: "Computer Applications in Business", code: "CAB-403", chapters: 7, progress: 90, color: "#085041" },
    { id: "s4_4", name: "Human Resource Management", code: "HRM-404", chapters: 8, progress: 60, color: "#854F0B" }
  ],
  5: [
    { id: "s5_1", name: "Management Accounting", code: "MA-501", chapters: 10, progress: 15, color: "#085041" },
    { id: "s5_2", name: "Financial Management", code: "FM-502", chapters: 12, progress: 35, color: "#854F0B" },
    { id: "s5_3", name: "Auditing & Assurance", code: "AA-503", chapters: 8, progress: 50, color: "#085041" },
    { id: "s5_4", name: "E-Commerce & Digital Business", code: "EC-504", chapters: 6, progress: 75, color: "#854F0B" }
  ],
  6: [
    { id: "s6_1", name: "International Business", code: "IB-601", chapters: 9, progress: 0, color: "#085041" },
    { id: "s6_2", name: "Goods & Services Tax Practice", code: "GST-602", chapters: 10, progress: 10, color: "#854F0B" },
    { id: "s6_3", name: "Business Ethics & Sustainability", code: "BES-603", chapters: 7, progress: 5, color: "#085041" },
    { id: "s6_4", name: "Project Report & Viva", code: "PR-604", chapters: 4, progress: 20, color: "#854F0B" }
  ]
};

// Distinct Curated Courses Directory across all streams
const DISTINCT_COURSES = (() => {
  const map = new Map();
  COURSES.forEach((c) => {
    const key = c.shortCode || c.courseKey || c.name;
    if (!map.has(key)) {
      map.set(key, c);
    }
  });
  return Array.from(map.values());
})();

const getCourseEligibility = (course) => {
  if (course.eligibility) return course.eligibility;
  const short = (course.shortCode || "").toLowerCase();
  const level = (course.level || "").toLowerCase();

  if (short.includes("m.com")) return "B.Com / BBA / Allied Commerce degree with min. 50% marks";
  if (short.includes("b.com")) return "10+2 / HSC Commerce or equivalent from a recognized board";
  if (short.includes("bba")) return "10+2 in any stream (Commerce/Science/Arts) with min. 45-50%";
  if (short.includes("mba")) return "Graduation in any discipline with min. 50% marks (CMAT/CAT score)";
  if (short.includes("bca")) return "10+2 with Mathematics/Business Maths/Statistics with min. 50%";
  if (short.includes("mca")) return "BCA / B.Sc (CS/IT) / Graduation with Mathematics with min. 50%";
  if (short.includes("b.sc")) return "10+2 with Science stream (PCM or PCB) with min. 50%";
  if (short.includes("m.sc")) return "B.Sc in relevant subject (Physics/Chem/Maths/Microbiology/CS) min. 50%";
  if (short.includes("b.a")) return "10+2 / HSC in any stream from a recognized board";
  if (short.includes("m.a")) return "Bachelor of Arts (B.A.) in relevant discipline with min. 45-50%";
  if (short.includes("b.ed")) return "Graduation (B.A/B.Com/B.Sc) with min. 50% marks + Entrance exam";
  if (short.includes("m.ed")) return "B.Ed degree with min. 55% marks from recognized institution";
  if (short.includes("l.l.b") || short.includes("llb")) return "Graduation in any stream with min. 45% (General) / 40% (Reserved)";
  if (short.includes("ll.m") || short.includes("llm")) return "LL.B. degree with min. 50% aggregate marks";
  if (short.includes("mbbs")) return "10+2 with PCB (Physics, Chemistry, Biology) + NEET UG qualification";
  if (short.includes("nursing")) return "10+2 with PCB and English with min. 45-50% marks";
  if (short.includes("p.t.") || short.includes("physio")) return "10+2 with PCB (Physics, Chemistry, Biology) with min. 50%";
  if (short.includes("ca") || short.includes("cs")) return "10+2 for Foundation or Graduation for Direct Intermediate entry";
  if (level === "masters") return "Bachelor's degree in related stream with minimum 50% marks";
  if (level === "bachelors") return "10+2 / Higher Secondary pass from recognized state or central board";
  if (level === "diploma") return "10+2 or Graduation depending on diploma requirements";
  return "10+2 / Graduation as per university criteria";
};

const getCourseHigherStudies = (course) => {
  const short = (course.shortCode || "").toLowerCase();
  if (short.includes("b.com")) return ["M.Com", "MBA Finance", "CA / CS / CMA", "CPA / CFA", "Banking Exams"];
  if (short.includes("m.com")) return ["Ph.D. in Commerce", "UGC NET / JRF", "CFA / CFP", "Government Audit Services"];
  if (short.includes("bba")) return ["MBA (Marketing / HR / Finance)", "PGDM", "Corporate Fellowships", "Executive Leadership"];
  if (short.includes("mba")) return ["Ph.D. in Management", "Executive Leadership Program", "Global Management Certifications"];
  if (short.includes("bca")) return ["MCA", "M.Sc. Information Technology", "M.Sc. Data Science", "Cloud & AI Specialization"];
  if (short.includes("mca")) return ["Ph.D. in Computer Science", "AI/ML Engineering Certifications", "Enterprise Cloud Architect"];
  if (short.includes("b.sc")) return ["M.Sc in specialized branch", "MCA / M.Sc IT", "MBA", "CSIR Research Fellowships"];
  if (short.includes("m.sc")) return ["Ph.D. Research", "CSIR-UGC NET", "Postdoctoral Fellowships", "Industrial R&D"];
  if (short.includes("b.a")) return ["M.A.", "LL.B. (Law)", "B.Ed. (Teaching)", "Civil Services (UPSC / GPSC)", "Mass Media"];
  if (short.includes("m.a")) return ["Ph.D. in Humanities", "UGC NET Assistant Professor", "Civil Services", "Public Policy"];
  if (short.includes("b.ed")) return ["M.Ed.", "Ph.D. in Education", "School Administration", "CTET / TET Certifications"];
  if (short.includes("l.l.b") || short.includes("llb")) return ["LL.M. (Master of Laws)", "Judicial Services Exam", "Corporate Law Fellowship", "Ph.D."];
  if (short.includes("mbbs")) return ["MD / MS Post Graduate", "DNB Residency", "Super-specialty DM / M.Ch"];
  if (short.includes("nursing")) return ["M.Sc. Nursing", "Ph.D. in Nursing", "Clinical Nurse Specialist"];
  if (short.includes("p.t.")) return ["M.P.T. (Sports / Ortho / Neuro)", "Ph.D. in Physiotherapy", "Sports Fellowship"];
  return ["Higher Masters Degree", "Ph.D. / Research", "Professional Certifications", "Competitive Exams"];
};

const getCourseIndustries = (course) => {
  const stream = (course.stream || "").toLowerCase();
  const short = (course.shortCode || "").toLowerCase();
  if (short.includes("bca") || short.includes("mca") || short.includes("tech")) {
    return ["IT & Software Services", "Fintech & Startups", "Cloud & Cybersecurity", "E-Commerce", "Data Analytics"];
  }
  if (stream === "commerce") {
    return ["Banking & Financial Services (BFSI)", "Accounting & Audit Firms (Big 4)", "Corporate Finance", "Taxation & FMCG", "Consulting"];
  }
  if (stream === "science") {
    return ["Pharmaceuticals & Biotech", "IT & Tech Firms", "Research Laboratories", "Chemical & Environmental", "Academics"];
  }
  if (stream === "arts") {
    return ["Media & Journalism", "Civil & Public Services", "Content & Publishing", "NGOs & Social Sector", "Education & PR"];
  }
  if (stream === "education") {
    return ["Higher Secondary Schools", "Colleges & Universities", "EdTech Companies", "Education Administration", "Curriculum Design"];
  }
  if (stream === "law") {
    return ["High Courts & District Courts", "Corporate Law Firms", "Legal Consultancies", "Banking Legal Cells", "Human Rights NGOs"];
  }
  if (stream === "medical") {
    return ["Government & Private Hospitals", "Healthcare Clinics", "Diagnostic Labs", "Medical Research Institutes", "Public Health"];
  }
  return ["Corporate Sector", "Public Sector / Government", "Academic Institutions", "Consulting"];
};

export default function HomeView({
  currentUser,
  onSelectSubject,
  onSelectCourse,
  onOpenProfile,
  onExploreCourses,
  onQuickCourseChange
}) {
  // Active semester chip state (Default to Semester 3)
  const [activeSemester, setActiveSemester] = useState(3);
  
  // Mobile drawer menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Search input state
  const [searchQuery, setSearchQuery] = useState("");

  // Quick Action Modal states
  const [activeModal, setActiveModal] = useState(null); // 'planner' | 'doc' | 'notes'
  const [notes, setNotes] = useState([
    { id: 1, title: "Accounting Standards 11", text: "Effects of changes in foreign exchange rates.", date: "Sep 10" },
    { id: 2, title: "Taxation Deduction Sec 80C", text: "Maximum limit Rs 1.5 Lakh per financial year.", date: "Sep 08" }
  ]);
  const [newNote, setNewNote] = useState("");

  const studentName = formatStudentDisplayName(currentUser?.fullName, currentUser?.email);
  const studentCourse = currentUser?.course || "B.Com Hons";
  const userInitial = studentName.charAt(0).toUpperCase();

  const userCourseObj = COURSES.find(c => 
    (c.name && c.name.toLowerCase().includes(studentCourse.toLowerCase())) || 
    (c.shortCode && studentCourse.toLowerCase().includes(c.shortCode.toLowerCase()))
  );
  const totalSemestersCount = userCourseObj?.totalSemesters || (studentCourse.toLowerCase().includes("m.com") || studentCourse.toLowerCase().includes("master") ? 4 : 6);

  // Reset active semester if it exceeds the new course's semester count (e.g. M.Com has 4 sems vs B.Com 6)
  React.useEffect(() => {
    if (activeSemester > totalSemestersCount) {
      setActiveSemester(1);
    }
  }, [totalSemestersCount]);

  // Selected semester subjects
  const currentSemesterSubjects = SEMESTER_DATA[activeSemester] || SEMESTER_DATA[3];

  // 1-Click ZIP & PDF Download States
  const [isDownloadingZip, setIsDownloadingZip] = useState(false);
  const [isDownloadedZip, setIsDownloadedZip] = useState(false);
  const [downloadProgressMsg, setDownloadProgressMsg] = useState("");
  const [downloadedSubjectId, setDownloadedSubjectId] = useState(null);

  const zipDownloadName = (studentCourse.toLowerCase().includes("m.com") || studentCourse.toLowerCase().includes("master of commerce"))
    ? "m.com.zip"
    : studentCourse.toLowerCase().includes("b.com")
    ? "b.com.zip"
    : "m.com.zip";

  const handleDownloadAllSemesterPdf = async () => {
    setIsDownloadingZip(true);
    setDownloadProgressMsg("Preparing PDFs...");
    try {
      const semObj = {
        name: `Semester ${activeSemester}`,
        semesterNumber: activeSemester,
        id: `sem-${activeSemester}`
      };
      const courseObj = userCourseObj || {
        name: studentCourse || "M.Com",
        shortCode: "M.COM"
      };

      await downloadSemesterSubjectsZip(
        semObj,
        courseObj,
        currentSemesterSubjects,
        (p) => {
          if (p.message) setDownloadProgressMsg(p.message);
        },
        zipDownloadName
      );

      setIsDownloadingZip(false);
      setIsDownloadedZip(true);
      setDownloadProgressMsg("");
      setTimeout(() => setIsDownloadedZip(false), 4500);
    } catch (err) {
      console.error("ZIP download failed:", err);
      setIsDownloadingZip(false);
      setDownloadProgressMsg("");
    }
  };

  const handleDownloadSingleSubjectPdf = (sub) => {
    try {
      downloadSingleSubjectPdf(sub, userCourseObj?.name || studentCourse || "M.Com", `Semester ${activeSemester}`);
      setDownloadedSubjectId(sub.id);
      setTimeout(() => setDownloadedSubjectId(null), 3000);
    } catch (err) {
      console.error("Single PDF download failed:", err);
    }
  };

  // Location filter state for Colleges & Universities in Kutch
  const [selectedLocationFilter, setSelectedLocationFilter] = useState("All Kutch");
  const [collegeSearchQuery, setCollegeSearchQuery] = useState("");

  const KUTCH_LOCATIONS = [
    "All Kutch",
    "Bhuj",
    "Mandvi",
    "Adipur",
    "Gandhidham",
    "Anjar",
    "Mundra",
    "Bhachau",
    "Rapar"
  ];

  const filteredLocationColleges = COLLEGES.filter((col) => {
    const text = (col.address + " " + col.name).toLowerCase();
    let matchesLocation = true;
    if (selectedLocationFilter !== "All Kutch") {
      matchesLocation = text.includes(selectedLocationFilter.toLowerCase());
    }
    const q = collegeSearchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      col.name.toLowerCase().includes(q) ||
      (col.address && col.address.toLowerCase().includes(q)) ||
      (col.coursesOffered && col.coursesOffered.some(c => c.toLowerCase().includes(q)));

    return matchesLocation && matchesSearch;
  });

  // Course Information & Career Scope modal state
  const [courseModalTab, setCourseModalTab] = useState("info"); // "info" | "careers"
  const [courseSearchQuery, setCourseSearchQuery] = useState("");
  const [courseStreamFilter, setCourseStreamFilter] = useState("All");
  const [courseLevelFilter, setCourseLevelFilter] = useState("All");

  const COURSE_STREAMS = [
    "All",
    "Commerce",
    "Science",
    "Arts",
    "Education",
    "Law",
    "Medical"
  ];

  const filteredCourseDirectory = DISTINCT_COURSES.filter((course) => {
    // Stream filter
    if (courseStreamFilter !== "All") {
      if (course.stream !== courseStreamFilter) return false;
    }

    // Level filter
    if (courseLevelFilter !== "All") {
      const lvl = (course.level || "").toLowerCase();
      if (courseLevelFilter === "UG" && lvl !== "bachelors") return false;
      if (courseLevelFilter === "PG" && lvl !== "masters") return false;
      if (courseLevelFilter === "Professional" && lvl !== "professional" && lvl !== "diploma") return false;
    }

    // Search query
    if (courseSearchQuery.trim()) {
      const q = courseSearchQuery.toLowerCase().trim();
      const matchName = course.name?.toLowerCase().includes(q);
      const matchShort = course.shortCode?.toLowerCase().includes(q);
      const matchStream = course.stream?.toLowerCase().includes(q);
      const matchDesc = course.description?.toLowerCase().includes(q);
      const matchCareer = course.careerPaths?.some((cp) => cp.toLowerCase().includes(q));
      if (!matchName && !matchShort && !matchStream && !matchDesc && !matchCareer) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-transparent text-white font-sans pb-24 md:pb-12 selection:bg-[#3D446C] selection:text-white">

      {/* ------------------------------------------------------------- */}
      {/* 2. MAIN DASHBOARD CONTENT (Balanced Modern Grid Layout)       */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-[1440px] mx-auto px-1 sm:px-4 lg:px-8 py-2 sm:py-8 space-y-5 sm:space-y-7 pb-24 md:pb-8">
        
        {/* ROW 1: HERO CARD & QUICK ACTIONS (SIDE-BY-SIDE ON DESKTOP) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* HERO BANNER (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col">
            <section className="relative overflow-hidden bg-gradient-to-br from-[#292F4C] via-[#3D446C] to-[#1C2036] rounded-[18px] sm:rounded-[20px] p-4 sm:p-7 text-white shadow-lg border border-[#56608F] h-full flex flex-col justify-between">
              {/* Subtle radial & geometric accents */}
              <div className="w-64 h-64 rounded-full bg-[#8FE388]/10 blur-2xl absolute -top-16 -right-16 pointer-events-none" />
              <div className="w-36 h-36 rounded-full bg-white/5 absolute -bottom-10 -left-10 pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <div>
                  <p className="text-[12px] sm:text-[14px] font-medium text-[#8FE388]">
                    Welcome back
                  </p>
                  <h1 className="text-[17px] sm:text-[25px] font-bold text-white tracking-tight mt-0.5 leading-snug">
                    {studentName} · {studentCourse}
                  </h1>
                </div>

                {/* Course Details Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1C2036]/70 text-[11px] font-medium text-[#8FE388] border border-[#56608F] backdrop-blur-xs">
                    <GraduationCap className="w-3.5 h-3.5 text-[#8FE388]" />
                    {userCourseObj?.degree || "Postgraduate Degree"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1C2036]/70 text-[11px] font-medium text-[#C4C9DE] border border-[#56608F] backdrop-blur-xs">
                    <Clock className="w-3.5 h-3.5 text-[#8FE388]" />
                    {userCourseObj?.duration || "2 Years (4 Semesters)"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1C2036]/70 text-[11px] font-medium text-[#C4C9DE] border border-[#56608F] backdrop-blur-xs">
                    <Layers className="w-3.5 h-3.5 text-[#8FE388]" />
                    {userCourseObj?.stream || currentUser?.stream || "Commerce"} Stream
                  </span>
                </div>

                {/* Course Overview Description */}
                <p className="text-[12.5px] sm:text-[13px] text-[#C4C9DE] leading-relaxed max-w-2xl line-clamp-2">
                  {userCourseObj?.description || "Advanced postgraduate program specializing in Financial Analysis, Corporate Accounting, Managerial Economics, and International Business."}
                </p>

                {/* Core Focus / Specialization Tags */}
                {userCourseObj?.careerPaths && userCourseObj.careerPaths.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    <span className="text-[10.5px] font-semibold text-[#8FE388] uppercase tracking-wider mr-1">
                      Focus:
                    </span>
                    {userCourseObj.careerPaths.slice(0, 4).map((path, idx) => (
                      <span
                        key={idx}
                        className="text-[10.5px] px-2 py-0.5 rounded-md bg-[#1C2036]/80 text-[#C4C9DE] border border-[#56608F]"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                )}

                {/* 1-Click Course Switcher Bar inside Hero Banner */}
                {onQuickCourseChange && (
                  <div className="pt-2 border-t border-[#56608F] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#8FE388] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#8FE388]" />
                        1-Click switch course:
                      </span>
                      <span className="text-[10px] text-[#C4C9DE] sm:hidden font-medium">Swipe →</span>
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                      {[
                        { code: "B.Com", name: "Bachelor of Commerce (Honours) [B.Com]", stream: "Commerce" },
                        { code: "M.Com", name: "Master of Commerce (M.Com)", stream: "Commerce" },
                        { code: "BCA", name: "Bachelor of Computer Applications (BCA)", stream: "Science" },
                        { code: "B.Sc", name: "Bachelor of Science (B.Sc)", stream: "Science" },
                        { code: "BBA", name: "Bachelor of Business Administration (BBA)", stream: "Commerce" },
                        { code: "B.Ed", name: "Bachelor of Education (B.Ed.)", stream: "Education" },
                        { code: "L.L.B", name: "Bachelor of Laws (L.L.B.)", stream: "Law" }
                      ].map((cItem) => {
                        const isCurrent = studentCourse.toLowerCase().includes(cItem.code.toLowerCase());

                        return (
                          <button
                            key={cItem.code}
                            type="button"
                            onClick={() => onQuickCourseChange(cItem.name, cItem.stream)}
                            className={`btn-cta px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
                              isCurrent
                                ? "bg-[#4CD964] text-[#1C2036] border-[#4CD964] shadow-xs"
                                : "bg-[#1C2036]/70 text-white hover:bg-[#3D446C] border-[#56608F] backdrop-blur-xs"
                            }`}
                            title={`Switch to ${cItem.code} in 1 click`}
                          >
                            {cItem.code} {isCurrent && "✓"}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Clean balanced course stats row */}
              <div className="relative z-10 grid grid-cols-4 divide-x divide-[#56608F]/60 text-center border-t border-[#56608F] pt-3 mt-4">
                <div>
                  <p className="text-[18px] sm:text-[24px] font-bold text-white leading-none">
                    {totalSemestersCount}
                  </p>
                  <p className="text-[10px] sm:text-[12px] font-medium text-[#8FE388] mt-1">
                    Semesters
                  </p>
                </div>
                <div>
                  <p className="text-[18px] sm:text-[24px] font-bold text-white leading-none">
                    {totalSemestersCount * 4}
                  </p>
                  <p className="text-[10px] sm:text-[12px] font-medium text-[#8FE388] mt-1">
                    Core Subjects
                  </p>
                </div>
                <div>
                  <p className="text-[18px] sm:text-[24px] font-bold text-white leading-none">
                    24
                  </p>
                  <p className="text-[10px] sm:text-[12px] font-medium text-[#8FE388] mt-1">
                    Books & PDFs
                  </p>
                </div>
                <div>
                  <p className="text-[18px] sm:text-[24px] font-bold text-white leading-none">
                    CBCS
                  </p>
                  <p className="text-[10px] sm:text-[12px] font-medium text-[#8FE388] mt-1">
                    Curriculum
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* QUICK ACTIONS CARD (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col">
            <section className="bg-[#292F4C] rounded-[20px] border border-[#56608F] p-5 shadow-sm flex flex-col justify-between h-full space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#56608F]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#3D446C] text-[#8FE388] flex items-center justify-center border border-[#56608F]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <h2 className="text-[14px] font-bold text-white tracking-tight">
                    Quick actions
                  </h2>
                </div>
                <span className="text-[10px] font-bold text-[#C4C9DE] uppercase tracking-wider bg-[#1C2036] border border-[#56608F] px-2 py-0.5 rounded">Shortcuts</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 h-full">
                {/* Card 1: Explore courses */}
                <button
                  type="button"
                  onClick={onExploreCourses}
                  className="course-card group bg-[#1C2036]/70 hover:bg-[#3D446C]/30 rounded-xl border border-[#56608F] hover:border-[#8FE388]/50 p-3.5 flex flex-col justify-between gap-3 transition-all duration-200 cursor-pointer text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#3D446C] text-[#8FE388] flex items-center justify-center transition-colors group-hover:bg-[#8FE388] group-hover:text-[#1C2036] border border-[#56608F]">
                    <Compass className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[12px] font-semibold text-white group-hover:text-[#8FE388] transition-colors">
                      Explore courses
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#C4C9DE] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all group-hover:text-[#8FE388]" />
                  </div>
                </button>

                {/* Card 2: Colleges & University */}
                <button
                  type="button"
                  onClick={() => setActiveModal("colleges")}
                  className="course-card group bg-[#1C2036]/70 hover:bg-[#3D446C]/30 rounded-xl border border-[#56608F] hover:border-[#8FE388]/50 p-3.5 flex flex-col justify-between gap-3 transition-all duration-200 cursor-pointer text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#3D446C] text-[#8FE388] flex items-center justify-center transition-colors group-hover:bg-[#8FE388] group-hover:text-[#1C2036] border border-[#56608F]">
                    <Building2 className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[12px] font-semibold text-white group-hover:text-[#8FE388] transition-colors">
                      Colleges & University
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#C4C9DE] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all group-hover:text-[#8FE388]" />
                  </div>
                </button>

                {/* Card 3: Course information */}
                <button
                  type="button"
                  onClick={() => {
                    setCourseModalTab("info");
                    setActiveModal("courses_info");
                  }}
                  className="course-card group bg-[#1C2036]/70 hover:bg-[#3D446C]/30 rounded-xl border border-[#56608F] hover:border-[#8FE388]/50 p-3.5 flex flex-col justify-between gap-3 transition-all duration-200 cursor-pointer text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#3D446C] text-[#8FE388] flex items-center justify-center transition-colors group-hover:bg-[#8FE388] group-hover:text-[#1C2036] border border-[#56608F]">
                    <GraduationCap className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[12px] font-semibold text-white group-hover:text-[#8FE388] transition-colors">
                      Course information
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#C4C9DE] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all group-hover:text-[#8FE388]" />
                  </div>
                </button>

                {/* Card 4: Career & scope */}
                <button
                  type="button"
                  onClick={() => {
                    setCourseModalTab("careers");
                    setActiveModal("courses_info");
                  }}
                  className="course-card group bg-[#1C2036]/70 hover:bg-[#3D446C]/30 rounded-xl border border-[#56608F] hover:border-[#8FE388]/50 p-3.5 flex flex-col justify-between gap-3 transition-all duration-200 cursor-pointer text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#3D446C] text-[#8FE388] flex items-center justify-center transition-colors group-hover:bg-[#8FE388] group-hover:text-[#1C2036] border border-[#56608F]">
                    <Award className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[12px] font-semibold text-white group-hover:text-[#8FE388] transition-colors">
                      Career & scope
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#C4C9DE] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all group-hover:text-[#8FE388]" />
                  </div>
                </button>
              </div>
            </section>
          </div>

        </div>

        {/* ROW 2: SEMESTERS SECTION (FULL WIDTH) */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-[16px] font-bold text-white tracking-tight flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8FE388]" />
                Enrolled Semesters & Subjects
              </h2>
              <p className="text-[12px] text-[#C4C9DE] mt-0.5">
                Select semester to view enrolled curriculum and progress
              </p>
            </div>

            {/* Horizontal scrollable row of rounded chips with animated sliding indicator */}
            <div className="inline-flex items-center gap-1.5 p-1 bg-[#1C2036] rounded-xl border border-[#56608F] overflow-x-auto max-w-full no-scrollbar">
              {Array.from({ length: totalSemestersCount }, (_, i) => i + 1).map((semNum) => {
                const isActive = activeSemester === semNum;
                return (
                  <button
                    key={semNum}
                    type="button"
                    onClick={() => setActiveSemester(semNum)}
                    className={`tab-underline-animated px-3.5 py-1.5 rounded-lg text-[12px] font-semibold transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? "is-active bg-[#3D446C] text-[#8FE388] shadow-xs"
                        : "text-[#C4C9DE] hover:text-white hover:bg-[#3D446C]/30"
                    }`}
                  >
                    Semester {semNum}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Semester Detail Listing */}
          <div className="bg-[#292F4C] rounded-[18px] border border-[#56608F] p-3.5 sm:p-6 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#56608F] pb-3 gap-3">
              <div className="flex items-center justify-between w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8FE388] badge-pulse" />
                  <h3 className="text-[14px] font-bold text-white">
                    Semester {activeSemester} Subjects
                  </h3>
                </div>
                <span className="sm:hidden text-[10.5px] font-medium text-[#C4C9DE] bg-[#1C2036] px-2 py-0.5 rounded-full border border-[#56608F]">
                  {currentSemesterSubjects.length} subjects
                </span>
              </div>

              <div className="flex items-center gap-2.5 flex-wrap w-full sm:w-auto">
                {/* 1-CLICK DOWNLOAD ALL SUBJECTS PDF (ZIP) BUTTON */}
                <button
                  type="button"
                  onClick={handleDownloadAllSemesterPdf}
                  disabled={isDownloadingZip}
                  className={`btn-cta flex items-center justify-center gap-2 px-3.5 py-2 sm:py-1.5 rounded-xl text-[12px] font-bold transition-all shadow-md cursor-pointer w-full sm:w-auto ${
                    isDownloadedZip
                      ? "bg-[#3D446C] text-[#8FE388] border border-[#8FE388]/30"
                      : "bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036]"
                  }`}
                  title={`Download all Semester ${activeSemester} subjects books as ${zipDownloadName}`}
                >
                  {isDownloadingZip ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-[#1C2036] border-t-transparent rounded-full animate-spin" />
                      <span className="truncate max-w-[160px]">{downloadProgressMsg || "Generating PDFs..."}</span>
                    </>
                  ) : isDownloadedZip ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#8FE388]" />
                      <span>Downloaded {zipDownloadName}!</span>
                    </>
                  ) : (
                    <>
                      <FileDown className="w-3.5 h-3.5 text-[#1C2036]" />
                      <span>Download All Subjects ({zipDownloadName})</span>
                      <span className="bg-[#1C2036] text-[#8FE388] text-[9px] px-1.5 py-0.5 rounded font-extrabold uppercase tracking-wider">
                        1-Click
                      </span>
                    </>
                  )}
                </button>

                <span className="text-[11px] font-medium text-[#C4C9DE] bg-[#1C2036] px-2.5 py-1 rounded-full border border-[#56608F] shrink-0">
                  {currentSemesterSubjects.length} subjects enrolled
                </span>
              </div>
            </div>

            {/* Confirmation Alert Banner */}
            {isDownloadedZip && (
              <div className="bg-[#3D446C] text-white p-3 sm:p-3.5 rounded-xl text-xs font-bold flex items-center justify-between animate-fade-in shadow-xs border border-[#8FE388]/30">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8FE388] shrink-0" />
                  <span>Downloaded {zipDownloadName}! All {currentSemesterSubjects.length} subjects are included as offline PDF textbooks and revision notes.</span>
                </div>
              </div>
            )}

            {downloadedSubjectId && (
              <div className="bg-[#3D446C] border border-[#8FE388]/30 text-[#8FE388] p-2.5 rounded-xl text-xs font-bold flex items-center gap-2 animate-fade-in shadow-xs">
                <Check className="w-4 h-4 text-[#8FE388] shrink-0" />
                <span>Downloaded Subject Book PDF!</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {currentSemesterSubjects.map((subject) => (
                <div
                  key={subject.id}
                  onClick={() => onSelectSubject && onSelectSubject(subject)}
                  className="course-card group relative p-3.5 sm:p-4 rounded-xl bg-[#1C2036]/70 hover:bg-[#292F4C] border border-[#56608F] hover:border-[#8FE388]/50 transition-all duration-200 cursor-pointer space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#3D446C] border border-[#56608F] text-[#8FE388] uppercase tracking-wider">
                      {subject.code}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadSingleSubjectPdf(subject);
                        }}
                        className="btn-cta p-1 rounded bg-[#3D446C] hover:bg-[#8FE388] text-[#8FE388] hover:text-[#1C2036] border border-[#56608F] transition-all cursor-pointer shadow-xs"
                        title={`Download ${subject.name} Book PDF in 1 click`}
                      >
                        <FileDown className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[12px] font-bold text-[#8FE388]">
                        {subject.progress}%
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[13px] font-bold text-white group-hover:text-[#8FE388] transition-colors line-clamp-1 leading-snug">
                      {subject.name}
                    </h4>
                    <p className="text-[11px] font-normal text-[#C4C9DE] mt-0.5">
                      {subject.chapters} chapters · Syllabus active
                    </p>
                  </div>

                  {/* Progress bar with Animation 3: Animate fill from 0 to percentage over 1.2s */}
                  <div className="w-full h-1.5 bg-[#56608F] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full animate-progress-fill bg-[#8FE388]"
                      style={{
                        width: `${subject.progress}%`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROW 3: EXPLORE DEGREE COURSES SECTION (FULL WIDTH) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#3D446C] text-[#8FE388] flex items-center justify-center border border-[#56608F]">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-[16px] font-bold text-white tracking-tight">
                  Explore degree courses
                </h2>
                <p className="text-[11px] text-[#C4C9DE]">Browse undergraduate & postgraduate programs</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onExploreCourses}
              className="btn-cta text-[12px] font-bold text-[#8FE388] hover:text-white flex items-center gap-1.5 cursor-pointer bg-[#3D446C] px-3 py-1.5 rounded-lg border border-[#56608F] shadow-xs hover:border-[#8FE388]/40 transition-all"
            >
              View all ({COURSES.length}) <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5">
            {[
              {
                id: "mcom",
                name: "M.Com (Master of Commerce)",
                code: "M.COM",
                semesters: 4,
                stream: "Commerce",
                color: "#3D446C"
              },
              {
                id: "bcom",
                name: "B.Com (Bachelor of Commerce)",
                code: "B.COM",
                semesters: 6,
                stream: "Commerce",
                color: "#3D446C"
              },
              {
                id: "ba-degree",
                name: "B.A. (Bachelor of Arts)",
                code: "B.A.",
                semesters: 6,
                stream: "Arts",
                color: "#8FE388"
              },
              {
                id: "ma-program",
                name: "M.A. (Master of Arts)",
                code: "M.A.",
                semesters: 4,
                stream: "Arts",
                color: "#8FE388"
              },
              {
                id: "bsc-program",
                name: "B.Sc (Bachelor of Science)",
                code: "B.SC",
                semesters: 6,
                stream: "Science",
                color: "#3D446C"
              },
              {
                id: "bca-program",
                name: "BCA (Computer Applications)",
                code: "BCA",
                semesters: 6,
                stream: "Science",
                color: "#3D446C"
              },
              {
                id: "bed-degree",
                name: "B.Ed (Bachelor of Education)",
                code: "B.ED",
                semesters: 4,
                stream: "Education",
                color: "#8FE388"
              },
              {
                id: "llb-degree",
                name: "L.L.B. (Bachelor of Laws)",
                code: "LL.B",
                semesters: 6,
                stream: "Law",
                color: "#3D446C"
              },
              {
                id: "bba-program",
                name: "BBA (Business Administration)",
                code: "BBA",
                semesters: 6,
                stream: "Commerce",
                color: "#3D446C"
              }
            ].map((c) => {
              const fullCourse = COURSES.find(item => item.id === c.id) || {
                id: c.id,
                name: c.name,
                shortCode: c.code,
                totalSemesters: c.semesters,
                stream: c.stream,
                degree: `${c.semesters / 2} Year Degree`
              };

              return (
                <div
                  key={c.id}
                  onClick={() => onSelectCourse ? onSelectCourse(fullCourse) : onExploreCourses()}
                  className="course-card bg-[#292F4C] rounded-[16px] border border-[#56608F] p-4 hover:border-[#8FE388]/60 transition-all duration-200 cursor-pointer space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#3D446C] border border-[#56608F] text-[#8FE388] uppercase tracking-wider">
                      {c.code}
                    </span>
                    <span className="text-[11px] font-medium text-[#C4C9DE]">
                      {c.semesters} Semesters
                    </span>
                  </div>
                  <h4 className="text-[13px] font-bold text-white group-hover:text-[#8FE388] transition-colors line-clamp-1 leading-snug">
                    {c.name}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-[#C4C9DE] pt-2 border-t border-[#56608F]">
                    <span className="font-medium text-[#C4C9DE]">{c.stream}</span>
                    <span className="text-[#8FE388] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[11px]">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* SLIDE-OUT MOBILE DRAWER MENU                                  */}
      {/* ------------------------------------------------------------- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-[#1C2036]/60 backdrop-blur-xs"
          />

          <div className="relative w-4/5 max-w-xs bg-[#292F4C] h-full shadow-xl flex flex-col justify-between p-5 z-10 border-r border-[#56608F]">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#56608F]">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-[10px] bg-[#3D446C] text-[#8FE388] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-white">EduNexus</h3>
                    <p className="text-[12px] font-normal text-[#C4C9DE]">Student portal</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#C4C9DE] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3 rounded-[10px] bg-[#1C2036] border border-[#56608F] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#3D446C] text-[#8FE388] font-bold text-sm flex items-center justify-center">
                  {userInitial}
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-white truncate">{studentName}</p>
                  <p className="text-[12px] font-normal text-[#C4C9DE] truncate">{studentCourse}</p>
                </div>
              </div>

              <nav className="space-y-1 text-[13px] font-medium text-white">
                <button
                  type="button"
                  onClick={() => { setIsMenuOpen(false); }}
                  className="w-full text-left p-2.5 rounded-[8px] bg-[#3D446C] text-[#8FE388] font-bold flex items-center gap-2.5"
                >
                  <BookOpen className="w-4 h-4" /> Home dashboard
                </button>
                <button
                  type="button"
                  onClick={() => { setIsMenuOpen(false); if (onExploreCourses) onExploreCourses(); }}
                  className="w-full text-left p-2.5 rounded-[8px] hover:bg-[#1C2036] flex items-center gap-2.5 text-white"
                >
                  <Compass className="w-4 h-4 text-[#C4C9DE]" /> Explore courses
                </button>
                <button
                  type="button"
                  onClick={() => { setIsMenuOpen(false); setActiveModal("colleges"); }}
                  className="w-full text-left p-2.5 rounded-[8px] hover:bg-[#1C2036] flex items-center gap-2.5 text-white"
                >
                  <Building2 className="w-4 h-4 text-[#8FE388]" /> Colleges & University
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setCourseModalTab("info");
                    setActiveModal("courses_info");
                  }}
                  className="w-full text-left p-2.5 rounded-[8px] hover:bg-[#1C2036] flex items-center gap-2.5 text-white"
                >
                  <GraduationCap className="w-4 h-4 text-[#8FE388]" /> Course information
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setCourseModalTab("careers");
                    setActiveModal("courses_info");
                  }}
                  className="w-full text-left p-2.5 rounded-[8px] hover:bg-[#1C2036] flex items-center gap-2.5 text-white"
                >
                  <Award className="w-4 h-4 text-[#8FE388]" /> Career & scope
                </button>
              </nav>
            </div>

            <div className="pt-4 border-t border-[#56608F]">
              <button
                type="button"
                onClick={() => { setIsMenuOpen(false); if (onOpenProfile) onOpenProfile(); }}
                className="btn-cta w-full py-2 bg-[#3D446C] hover:bg-[#3D446C]/90 text-white rounded-[8px] text-[12px] font-semibold cursor-pointer"
              >
                Manage profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* QUICK ACTION MODALS (Study Planner, View Doc, Notes)           */}
      {/* ------------------------------------------------------------- */}

      {/* COLLEGES & UNIVERSITIES IN KUTCH MODAL */}
      {activeModal === "colleges" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1C2036]/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#292F4C] rounded-[24px] border border-[#56608F] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#56608F] bg-[#292F4C] shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#3D446C] text-[#8FE388] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-white">Colleges & Universities in Kutch</h3>
                  <p className="text-[11px] text-[#C4C9DE]">Filtered by city location · Showing available courses & location only</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-xl bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1">
              {/* 1. Affiliating University Info Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#3D446C] to-[#1C2036] border border-[#56608F] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#8FE388]/20 text-[#8FE388] border border-[#8FE388]/30">
                      State University
                    </span>
                    <span className="text-xs text-[#C4C9DE]">Established 2003</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {UNIVERSITIES[0]?.name || "Krantiguru Shyamji Krishna Verma Kutch University (KSKVKU)"}
                  </h4>
                  <p className="text-xs text-[#C4C9DE] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8FE388]" />
                    <span>{UNIVERSITIES[0]?.location || "Bhuj, Kutch, Gujarat, India"}</span>
                  </p>
                </div>
                <div className="bg-[#1C2036]/60 px-3 py-2 rounded-xl border border-[#56608F] text-center shrink-0 self-start sm:self-auto">
                  <span className="block text-lg font-extrabold text-[#8FE388]">69</span>
                  <span className="text-[10px] text-[#C4C9DE] uppercase font-medium">Affiliated Colleges</span>
                </div>
              </div>

              {/* 2. Location Filter Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C4C9DE] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8FE388]" /> Select Location:
                  </span>
                  <span className="text-[11px] font-bold text-[#8FE388]">
                    {filteredLocationColleges.length} Colleges in {selectedLocationFilter}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
                  {KUTCH_LOCATIONS.map((loc) => {
                    const isSelected = selectedLocationFilter === loc;
                    const count = loc === "All Kutch"
                      ? COLLEGES.length
                      : COLLEGES.filter(c => (c.address + " " + c.name).toLowerCase().includes(loc.toLowerCase())).length;

                    return (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setSelectedLocationFilter(loc)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                          isSelected
                            ? "bg-[#3D446C] text-white border border-[#8FE388]/40 shadow-xs"
                            : "bg-[#1C2036] text-[#C4C9DE] border border-[#56608F] hover:bg-[#3D446C]/50 hover:text-white"
                        }`}
                      >
                        <span>{loc}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSelected ? "bg-[#8FE388]/20 text-[#8FE388]" : "bg-[#292F4C] text-[#C4C9DE]"
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#C4C9DE] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={collegeSearchQuery}
                  onChange={(e) => setCollegeSearchQuery(e.target.value)}
                  placeholder={`Search colleges or courses in ${selectedLocationFilter} (e.g. Commerce, Law, B.A, B.Sc)...`}
                  className="w-full pl-9 pr-4 py-2 bg-[#1C2036] border border-[#56608F] rounded-xl text-xs text-white placeholder-[#C4C9DE] focus:border-[#8FE388] outline-none transition-all shadow-xs"
                />
              </div>

              {/* 4. College Cards Grid: STRICTLY College Name, Location & Available Courses ONLY */}
              {filteredLocationColleges.length === 0 ? (
                <div className="p-8 text-center bg-[#1C2036] border border-[#56608F] rounded-2xl text-xs text-[#C4C9DE] space-y-2">
                  <p className="font-bold text-white">No colleges found for "{selectedLocationFilter}" matching your search</p>
                  <button
                    onClick={() => { setSelectedLocationFilter("All Kutch"); setCollegeSearchQuery(""); }}
                    className="text-[#8FE388] font-bold hover:underline cursor-pointer"
                  >
                    Reset location to All Kutch
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {filteredLocationColleges.map((col) => (
                    <div
                      key={col.id}
                      className="course-card p-4 rounded-xl bg-[#1C2036]/70 hover:bg-[#1C2036] border border-[#56608F] hover:border-[#8FE388]/40 transition-all space-y-2.5 shadow-2xs"
                    >
                      {/* 1. College Name & Type */}
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-[13px] sm:text-[14px] font-bold text-white leading-snug">
                          {col.name}
                        </h4>
                        {col.type && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F] whitespace-nowrap shrink-0">
                            {col.type}
                          </span>
                        )}
                      </div>

                      {/* 2. Location Only */}
                      <div className="flex items-center gap-1.5 text-[12px] text-[#C4C9DE]">
                        <MapPin className="w-3.5 h-3.5 text-[#8FE388] shrink-0" />
                        <span className="truncate">{col.address}</span>
                      </div>

                      {/* 3. Available Courses Only */}
                      <div className="pt-2 border-t border-[#56608F] space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4C9DE] block">
                          Available Courses ({col.coursesOffered?.length || 0}):
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(col.coursesOffered || ["B.Com", "B.A", "B.Sc"]).map((course, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#292F4C] text-[#C4C9DE] border border-[#56608F]"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-6 py-3 border-t border-[#56608F] bg-[#1C2036] flex items-center justify-between shrink-0">
              <span className="text-xs text-[#C4C9DE]">
                Location filter: <strong className="text-[#8FE388]">{selectedLocationFilter}</strong> ({filteredLocationColleges.length} colleges)
              </span>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="btn-cta px-4 py-2 bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COURSES INFORMATION & CAREER SCOPE DIRECTORY MODAL */}
      {activeModal === "courses_info" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1C2036]/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#292F4C] rounded-[24px] border border-[#56608F] w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 sm:px-6 py-4 border-b border-[#56608F] bg-[#292F4C] gap-3 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#3D446C] text-[#8FE388] flex items-center justify-center font-bold">
                  {courseModalTab === "info" ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : (
                    <Award className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-white">
                    {courseModalTab === "info"
                      ? "Different Courses & Degree Information"
                      : "Course Careers & Professional Scope"}
                  </h3>
                  <p className="text-[11px] text-[#C4C9DE]">
                    {courseModalTab === "info"
                      ? "Explore degree levels, duration, stream, eligibility & overview across courses"
                      : "Explore career paths, job roles, higher study options & hiring industries"}
                  </p>
                </div>
              </div>

              {/* Tab Switcher & Close Button */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-[#1C2036] p-1 rounded-xl border border-[#56608F]">
                  <button
                    type="button"
                    onClick={() => setCourseModalTab("info")}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      courseModalTab === "info"
                        ? "bg-[#3D446C] text-[#8FE388] shadow-xs"
                        : "text-[#C4C9DE] hover:text-white"
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Course Info</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCourseModalTab("careers")}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      courseModalTab === "careers"
                        ? "bg-[#3D446C] text-[#8FE388] shadow-xs"
                        : "text-[#C4C9DE] hover:text-white"
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Career & Scope</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-lg bg-[#1C2036] border border-[#56608F] flex items-center justify-center text-[#C4C9DE] hover:text-white hover:border-[#8FE388] transition-all cursor-pointer"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {/* 1. Stream Filters */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#C4C9DE]">
                    Filter by Stream:
                  </span>
                  <span className="text-[11px] font-semibold text-[#8FE388]">
                    {filteredCourseDirectory.length} courses found
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {COURSE_STREAMS.map((st) => {
                    const count = st === "All"
                      ? DISTINCT_COURSES.length
                      : DISTINCT_COURSES.filter((c) => c.stream === st).length;
                    const isSelected = courseStreamFilter === st;

                    return (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setCourseStreamFilter(st)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
                          isSelected
                            ? "bg-[#3D446C] text-white border-[#8FE388]/40 shadow-xs"
                            : "bg-[#1C2036] text-[#C4C9DE] border-[#56608F] hover:bg-[#3D446C]/50 hover:text-white"
                        }`}
                      >
                        <span>{st}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            isSelected
                              ? "bg-[#8FE388]/20 text-[#8FE388]"
                              : "bg-[#292F4C] text-[#C4C9DE]"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Degree Level & Search Filter */}
              <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between pt-1">
                {/* Degree Level Filter */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { id: "All", label: "All Levels" },
                    { id: "UG", label: "Undergraduate (UG)" },
                    { id: "PG", label: "Postgraduate (PG)" },
                    { id: "Professional", label: "Prof / Diploma" }
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setCourseLevelFilter(lvl.id)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer border ${
                        courseLevelFilter === lvl.id
                          ? "bg-[#3D446C] text-white border-[#8FE388]/40"
                          : "bg-[#1C2036] text-[#C4C9DE] border-[#56608F] hover:border-[#C4C9DE]"
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>

                {/* Search Box */}
                <div className="relative flex-1 sm:max-w-xs">
                  <Search className="w-3.5 h-3.5 text-[#C4C9DE] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={courseSearchQuery}
                    onChange={(e) => setCourseSearchQuery(e.target.value)}
                    placeholder="Search course or career role..."
                    className="w-full pl-8 pr-3 py-1.5 bg-[#1C2036] border border-[#56608F] rounded-xl text-xs text-white placeholder-[#C4C9DE] focus:border-[#8FE388] outline-none transition-all"
                  />
                  {courseSearchQuery && (
                    <button
                      onClick={() => setCourseSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#C4C9DE] hover:text-white text-xs cursor-pointer"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* 3. Course Cards Directory */}
              {filteredCourseDirectory.length === 0 ? (
                <div className="p-8 text-center bg-[#1C2036] border border-[#56608F] rounded-2xl text-xs text-[#C4C9DE] space-y-2">
                  <p className="font-bold text-white">
                    No courses match your filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setCourseStreamFilter("All");
                      setCourseLevelFilter("All");
                      setCourseSearchQuery("");
                    }}
                    className="text-[#8FE388] font-bold hover:underline cursor-pointer"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredCourseDirectory.map((course) => {
                    const eligibility = getCourseEligibility(course);
                    const higherStudies = getCourseHigherStudies(course);
                    const industries = getCourseIndustries(course);

                    return (
                      <div
                        key={course.id || course.courseKey || course.shortCode}
                        className="course-card p-4 rounded-2xl bg-[#1C2036]/70 hover:bg-[#1C2036] border border-[#56608F] hover:border-[#8FE388]/40 transition-all space-y-3 shadow-2xs flex flex-col justify-between"
                      >
                        {/* Course Top Title & Meta Badges */}
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-1.5 flex-wrap mb-1">
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F]">
                                  {course.stream}
                                </span>
                                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#292F4C] text-[#C4C9DE] border border-[#56608F]">
                                  {course.level || "Degree"}
                                </span>
                                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#3D446C]/50 text-[#8FE388] border border-[#56608F]">
                                  {course.duration || `${course.totalSemesters || 6} Semesters`}
                                </span>
                              </div>
                              <h4 className="text-[14px] font-bold text-white leading-snug">
                                {course.name}
                              </h4>
                            </div>
                            <span className="text-[11px] font-bold px-2 py-1 rounded-lg bg-[#292F4C] border border-[#56608F] text-white shrink-0">
                              {course.shortCode || "DEG"}
                            </span>
                          </div>

                          {/* Course Description */}
                          {course.description && (
                            <p className="text-[12px] text-[#C4C9DE] leading-relaxed line-clamp-2">
                              {course.description}
                            </p>
                          )}
                        </div>

                        {/* TAB 1 CONTENT: COURSE INFORMATION & ELIGIBILITY */}
                        {courseModalTab === "info" && (
                          <div className="space-y-2.5 pt-2 border-t border-[#56608F]">
                            {/* Eligibility Box */}
                            <div className="p-2.5 rounded-xl bg-[#292F4C] border border-[#56608F] space-y-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8FE388] flex items-center gap-1.5">
                                <GraduationCap className="w-3.5 h-3.5" />
                                Admission Eligibility:
                              </span>
                              <p className="text-[11.5px] text-white">
                                {eligibility}
                              </p>
                            </div>

                            {/* Career Roles Preview */}
                            {course.careerPaths && course.careerPaths.length > 0 && (
                              <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4C9DE] block">
                                  Career Opportunities:
                                </span>
                                <div className="flex flex-wrap gap-1">
                                  {course.careerPaths.slice(0, 4).map((role, idx) => (
                                    <span
                                      key={idx}
                                      className="text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-[#292F4C] text-[#C4C9DE] border border-[#56608F]"
                                    >
                                      {role}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Card Footer Actions */}
                            <div className="flex items-center justify-between pt-1 gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setCourseSearchQuery(course.shortCode || course.name);
                                  setCourseModalTab("careers");
                                }}
                                className="text-[11px] font-bold text-[#8FE388] hover:underline flex items-center gap-1 cursor-pointer"
                              >
                                <Award className="w-3 h-3" />
                                View Career & Scope
                              </button>
                              <div className="flex items-center gap-2">
                                {onQuickCourseChange && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      onQuickCourseChange(course.name, course.stream);
                                      setActiveModal(null);
                                    }}
                                    className={`btn-cta px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                                      (currentUser?.course || "").toLowerCase().includes((course.shortCode || "").toLowerCase()) ||
                                      (currentUser?.course || "").toLowerCase().includes(course.name.toLowerCase())
                                        ? "bg-[#3D446C] text-[#8FE388] border border-[#56608F]"
                                        : "bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] shadow-xs"
                                    }`}
                                  >
                                    <Check className="w-3 h-3" />
                                    {(currentUser?.course || "").toLowerCase().includes((course.shortCode || "").toLowerCase()) ||
                                    (currentUser?.course || "").toLowerCase().includes(course.name.toLowerCase())
                                      ? "Enrolled ✓"
                                      : "1-Click Switch"}
                                  </button>
                                )}
                                {onExploreCourses && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setActiveModal(null);
                                      if (onSelectCourse) {
                                        onSelectCourse(course);
                                      } else {
                                        onExploreCourses();
                                      }
                                    }}
                                    className="text-[11px] font-bold text-[#8FE388] hover:underline flex items-center gap-1 cursor-pointer"
                                  >
                                    Explore →
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* TAB 2 CONTENT: CAREERS & SCOPE */}
                        {courseModalTab === "careers" && (
                          <div className="space-y-2.5 pt-2 border-t border-[#56608F]">
                            {/* Top Career Roles */}
                            <div className="space-y-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8FE388] flex items-center gap-1">
                                <Briefcase className="w-3 h-3" />
                                Top Job Profiles:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {(course.careerPaths || ["Graduate Trainee", "Executive", "Analyst"]).map((role, idx) => (
                                  <span
                                    key={idx}
                                    className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#3D446C] text-[#8FE388] border border-[#56608F]"
                                  >
                                    {role}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* What After This Course? Higher Studies */}
                            <div className="space-y-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8FE388] flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                Higher Studies & Next Steps:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {higherStudies.map((study, idx) => (
                                  <span
                                    key={idx}
                                    className="text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-[#292F4C] text-[#C4C9DE] border border-[#56608F]"
                                  >
                                    {study}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Top Hiring Sectors */}
                            <div className="space-y-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4C9DE] flex items-center gap-1">
                                <Building2 className="w-3 h-3" />
                                Hiring Sectors:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {industries.slice(0, 3).map((ind, idx) => (
                                  <span
                                    key={idx}
                                    className="text-[10px] px-2 py-0.5 rounded bg-[#292F4C] text-[#C4C9DE]"
                                  >
                                    {ind}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Card Footer Actions */}
                            <div className="flex items-center justify-between pt-1 gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setCourseSearchQuery(course.shortCode || course.name);
                                  setCourseModalTab("info");
                                }}
                                className="text-[11px] font-bold text-[#8FE388] hover:underline flex items-center gap-1 cursor-pointer"
                              >
                                <GraduationCap className="w-3 h-3" />
                                View Course Overview
                              </button>
                              <div className="flex items-center gap-2">
                                {onQuickCourseChange && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      onQuickCourseChange(course.name, course.stream);
                                      setActiveModal(null);
                                    }}
                                    className={`btn-cta px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                                      (currentUser?.course || "").toLowerCase().includes((course.shortCode || "").toLowerCase()) ||
                                      (currentUser?.course || "").toLowerCase().includes(course.name.toLowerCase())
                                        ? "bg-[#3D446C] text-[#8FE388] border border-[#56608F]"
                                        : "bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] shadow-xs"
                                    }`}
                                  >
                                    <Check className="w-3 h-3" />
                                    {(currentUser?.course || "").toLowerCase().includes((course.shortCode || "").toLowerCase()) ||
                                    (currentUser?.course || "").toLowerCase().includes(course.name.toLowerCase())
                                      ? "Enrolled ✓"
                                      : "1-Click Switch"}
                                  </button>
                                )}
                                {onExploreCourses && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setActiveModal(null);
                                      if (onSelectCourse) {
                                        onSelectCourse(course);
                                      } else {
                                        onExploreCourses();
                                      }
                                    }}
                                    className="text-[11px] font-bold text-[#8FE388] hover:underline flex items-center gap-1 cursor-pointer"
                                  >
                                    Explore →
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-6 py-3 border-t border-[#56608F] bg-[#1C2036] flex items-center justify-between shrink-0">
              <span className="text-xs text-[#C4C9DE]">
                Showing <strong className="text-[#8FE388]">{filteredCourseDirectory.length}</strong> courses
                {courseStreamFilter !== "All" && ` · Stream: ${courseStreamFilter}`}
                {courseLevelFilter !== "All" && ` · Level: ${courseLevelFilter}`}
              </span>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="btn-cta px-4 py-2 bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}