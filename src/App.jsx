import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CourseNav from "./components/CourseNav";
import CollegeList from "./components/CollegeList";
import CourseList from "./components/CourseList";
import SemesterList from "./components/SemesterList";
import SubjectList from "./components/SubjectList";
import SubjectDetail from "./components/SubjectDetail";
import SearchResults from "./components/SearchResults";
import BottomNav from "./components/BottomNav";
import MobileSearchModal from "./components/MobileSearchModal";
import MyCourseView from "./components/MyCourseView";
import BooksView from "./components/BooksView";
import ProfileView from "./components/ProfileView";
import LoginForm from "./components/LoginForm";
import HomeView from "./components/HomeView";
import ExploreCoursesView from "./components/ExploreCoursesView";
import { formatStudentDisplayName } from "./utils/formatName";

import {
  COLLEGES,
  COURSES,
  SUBJECTS,
  getSemestersForCourse,
  getSubjectsForSemester,
  getCoursesForCollege,
  getCourseKey,
  isCourseMatchingKey,
  filterCollegesByCourse,
  filterCoursesByCourse,
  filterSubjectsByCourse,
  filterBooksByCourse
} from "./data/educationData";

export default function App() {
  // Current logged in user session
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("edunexus_user");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed) {
          if (parsed.fullName) {
            parsed.fullName = formatStudentDisplayName(parsed.fullName, parsed.email);
          }
          return parsed;
        }
      } catch {
        // fallback
      }
    }
    return {
      fullName: "Hitesh",
      email: "hitesh@edunexus.edu",
      stream: "Commerce",
      course: "M.Com (Master of Commerce)",
      collegeName: "R. R. Lalan College, Bhuj"
    };
  });

  // Modal edit state for when logged-in user wants to edit profile
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Navigation tab state: 'home' | 'colleges' | 'mycourse' | 'subjects' | 'books' | 'profile'
  const [activeTab, setActiveTab] = useState("home");

  // Drill-down selection states
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Global search state
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  // Helper function to focus view directly on the user's selected course
  const applyUserCourseSelection = (userData) => {
    if (!userData || !userData.course) return;

    const filteredCourses = filterCoursesByCourse(userData.course);
    const targetCourse = filteredCourses[0] || COURSES[0];
    const targetCollege = COLLEGES.find(col => col.id === targetCourse.collegeId) || COLLEGES[0];

    setSelectedCollege(targetCollege);
    setSelectedCourse(targetCourse);
    setSelectedSemester(null);
    setSelectedSubject(null);
  };

  const handleLoginSuccess = (userData) => {
    if (userData && userData.fullName) {
      userData.fullName = formatStudentDisplayName(userData.fullName, userData.email);
    }
    setCurrentUser(userData);
    localStorage.setItem("edunexus_user", JSON.stringify(userData));
    setIsLoginModalOpen(false);
    setSelectedCollege(null);
    setSelectedCourse(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
    setSearchQuery("");
    setActiveTab("colleges");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("edunexus_user");
    setIsLoginModalOpen(false);
    setSelectedCollege(null);
    setSelectedCourse(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
    setSearchQuery("");
  };

  // Live Stream & Course Switcher in Navbar handler
  const handleStreamCourseChange = (newStream, newCourse) => {
    if (!currentUser) return;
    const updatedUser = {
      ...currentUser,
      stream: newStream,
      course: newCourse
    };
    setCurrentUser(updatedUser);
    localStorage.setItem("edunexus_user", JSON.stringify(updatedUser));
    
    // Reset drill-down selections & navigate to Colleges page to display all colleges offering this course
    setSelectedCollege(null);
    setSelectedCourse(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
    setSearchQuery("");
    setActiveTab("colleges");
  };

  // 1-Click Course Switcher handler (keeps current tab active so HomeView immediately updates!)
  const handleQuickCourseChange = (newCourseName, newStream) => {
    if (!currentUser) return;

    // Auto-detect stream if not passed
    let stream = newStream;
    if (!stream) {
      const matched = COURSES.find((c) =>
        (c.name && c.name.toLowerCase().includes(newCourseName.toLowerCase())) ||
        (c.shortCode && newCourseName.toLowerCase().includes(c.shortCode.toLowerCase()))
      );
      stream = matched?.stream || currentUser.stream || "Commerce";
    }

    const updatedUser = {
      ...currentUser,
      stream: stream,
      course: newCourseName
    };
    setCurrentUser(updatedUser);
    localStorage.setItem("edunexus_user", JSON.stringify(updatedUser));

    // Reset drill-down selections
    setSelectedCollege(null);
    setSelectedCourse(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
    setSearchQuery("");
  };

  // -------------------------------------------------------------
  // STEP 1: AUTHENTICATION WALL (IF NOT LOGGED IN)
  // Show ONLY the Login/Enrolment page until the user logs in
  // -------------------------------------------------------------
  if (!currentUser) {
    return (
      <LoginForm
        isFullPage={true}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  // -------------------------------------------------------------
  // STEP 2: FULL CONTENT (STRICTLY FOR USER'S SELECTED COURSE)
  // -------------------------------------------------------------

  // Handler: Reset to Home
  const handleResetHome = () => {
    setActiveTab("home");
    setSelectedCollege(null);
    setSelectedCourse(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
    setSearchQuery("");
    setIsMobileSearchOpen(false);
  };

  // Handler: Select Navigation Tab
  const handleNavTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchQuery("");
    setIsMobileSearchOpen(false);

    if (tabId === "home" || tabId === "colleges") {
      setSelectedCollege(null);
      setSelectedCourse(null);
      setSelectedSemester(null);
      setSelectedSubject(null);
    }
  };

  // Handler: Select College
  const handleSelectCollege = (col) => {
    setSelectedCollege(col);
    if (!selectedUniversity) {
      const parentUni = UNIVERSITIES.find(u => u.id === col.universityId);
      if (parentUni) setSelectedUniversity(parentUni);
    }
    setSelectedCourse(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
  };

  // Handler: Select Course
  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setSelectedSemester(null);
    setSelectedSubject(null);
  };

  // Handler: Select Semester
  const handleSelectSemester = (sem) => {
    setSelectedSemester(sem);
    setSelectedSubject(null);
  };

  // Handler: Select Subject
  const handleSelectSubject = (sub) => {
    setSelectedSubject(sub);
  };

  // -------------------------------------------------------------
  // Stream-Scoped Data Computation (Supports 'All', 'Arts', 'Commerce', 'Science')
  // -------------------------------------------------------------
  const currentStream = currentUser?.stream || "All";
  const userCourseStr = currentUser?.course || "";
  const isAllCourse = !userCourseStr || userCourseStr === "All Academic Courses" || getCourseKey(userCourseStr) === "all";

  // Courses belonging to the active stream
  const streamCourseObjects = currentStream === "All"
    ? COURSES
    : COURSES.filter(c => c.stream === currentStream);

  const streamCourseIds = new Set(streamCourseObjects.map(c => c.id));
  const streamCollegeIds = new Set(streamCourseObjects.map(c => c.collegeId));

  // Helper: evaluate whether a college offers the active stream
  const isCollegeInStream = (col) => {
    if (currentStream === "All") return true;
    if (streamCollegeIds.has(col.id)) return true;
    if (streamCourseObjects.some(c => c.collegeId === col.id)) return true;

    // Check department field
    if (col.department) {
      const depLower = col.department.toLowerCase();
      if (currentStream === "Commerce" && (depLower.includes("commerce") || depLower.includes("business") || depLower.includes("management"))) return true;
      if (currentStream === "Arts" && (depLower.includes("arts") || depLower.includes("humanities") || depLower.includes("social") || depLower.includes("education") || depLower.includes("law"))) return true;
      if (currentStream === "Science" && (depLower.includes("science") || depLower.includes("technology") || depLower.includes("computer") || depLower.includes("engineering") || depLower.includes("it"))) return true;
    }

    // Check coursesOffered array
    if (col.coursesOffered && col.coursesOffered.length > 0) {
      return col.coursesOffered.some(cStr => {
        const lower = cStr.toLowerCase();
        if (currentStream === "Commerce" && (lower.includes("b.com") || lower.includes("m.com") || lower.includes("bcom") || lower.includes("mcom") || lower.includes("bba") || lower.includes("mba") || lower.includes("ca") || lower.includes("cs") || lower.includes("commerce"))) return true;
        if (currentStream === "Arts" && (lower.includes("b.a") || lower.includes("m.a") || lower.includes("ba ") || lower.includes("ma ") || lower.includes("bfa") || lower.includes("b.ed") || lower.includes("bed") || lower.includes("bjmc") || lower.includes("journalism") || lower.includes("arts") || lower.includes("law") || lower.includes("l.l.b"))) return true;
        if (currentStream === "Science" && (lower.includes("b.sc") || lower.includes("m.sc") || lower.includes("bsc") || lower.includes("msc") || lower.includes("b.tech") || lower.includes("m.tech") || lower.includes("btech") || lower.includes("mtech") || lower.includes("bca") || lower.includes("mca") || lower.includes("science") || lower.includes("tech"))) return true;
        return false;
      });
    }

    return false;
  };

  // Colleges matching active stream
  const streamColleges = COLLEGES.filter(isCollegeInStream);

  // Subjects in active stream
  const streamSubjects = currentStream === "All"
    ? SUBJECTS
    : SUBJECTS.filter(sub => streamCourseIds.has(sub.courseId));

  // Colleges & Departments filtered by active Course (or Stream fallback)
  const activeColleges = !isAllCourse
    ? filterCollegesByCourse(userCourseStr)
    : streamColleges;

  // Colleges offering user's specific selected course (e.g. M.Com)
  const allCollegesOfferingCourse = activeColleges;

  // Filtered Courses for active College / Stream / Course
  const activeCourses = selectedCollege 
    ? (() => {
        const colCourses = getCoursesForCollege(selectedCollege);
        const filtered = (!isAllCourse)
          ? colCourses.filter(c => isCourseMatchingKey(c, getCourseKey(userCourseStr)))
          : colCourses.filter(c => currentStream === "All" || c.stream === currentStream || !c.stream);
        return filtered.length > 0 ? filtered : colCourses;
      })()
    : streamCourseObjects;

  // 4. Filtered Semesters for active Course
  const activeSemesters = selectedCourse ? getSemestersForCourse(selectedCourse) : [];

  // 5. Filtered Subjects for active Semester / Course / Stream
  const activeSubjects = (selectedSemester && selectedCourse)
    ? getSubjectsForSemester(selectedSemester.id, selectedCourse.id)
    : (selectedCourse
        ? filterSubjectsByCourse(selectedCourse.name)
        : (!isAllCourse
            ? filterSubjectsByCourse(userCourseStr)
            : streamSubjects));

  // 6. Global Stream-Scoped Search Filter Results
  const searchResults = searchQuery.trim() ? (() => {
    const q = searchQuery.toLowerCase().trim();

    // Semesters in active stream
    const streamSemesters = [];
    streamCourseObjects.forEach(course => {
      const sems = getSemestersForCourse(course);
      sems.forEach(s => streamSemesters.push({ ...s, courseObj: course }));
    });

    // Books in active stream
    const streamBooks = filterBooksByCourse(userCourseStr);

    // 1. Filter Colleges
    const matchedCols = streamColleges.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.shortName.toLowerCase().includes(q) ||
      (c.department && c.department.toLowerCase().includes(q)) ||
      c.address.toLowerCase().includes(q)
    );

    // 2. Filter Courses
    const matchedCourses = streamCourseObjects.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.shortCode.toLowerCase().includes(q) ||
      c.degree.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      (c.careerPaths && c.careerPaths.some(cp => cp.toLowerCase().includes(q)))
    );

    // 3. Filter Semesters
    const matchedSemesters = streamSemesters.filter(s => 
      s.name.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      `semester ${s.semesterNumber}`.includes(q) ||
      `sem ${s.semesterNumber}`.includes(q)
    );

    // 4. Filter Subjects
    const matchedSubjects = streamSubjects.filter(sub => 
      sub.name.toLowerCase().includes(q) ||
      sub.code.toLowerCase().includes(q) ||
      (sub.shortName && sub.shortName.toLowerCase().includes(q)) ||
      (sub.description && sub.description.toLowerCase().includes(q))
    );

    // 5. Filter Chapters / Syllabus Units specifically
    const matchedChapters = [];
    streamSubjects.forEach(sub => {
      if (sub.syllabus) {
        sub.syllabus.forEach((unit, idx) => {
          if (unit.toLowerCase().includes(q)) {
            matchedChapters.push({
              unitTitle: unit,
              unitIndex: idx + 1,
              subject: sub
            });
          }
        });
      }
    });

    // 6. Filter Books
    const matchedBooks = streamBooks.filter(b => 
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      (b.subjectName && b.subjectName.toLowerCase().includes(q)) ||
      (b.summary && b.summary.toLowerCase().includes(q))
    );

    return {
      stream: currentStream,
      colleges: matchedCols,
      courses: matchedCourses,
      semesters: matchedSemesters,
      subjects: matchedSubjects,
      chapters: matchedChapters,
      books: matchedBooks
    };
  })() : null;

  // Handle Search Result Click
  const handleSelectSearchResult = (type, item) => {
    setSearchQuery("");
    setIsMobileSearchOpen(false);
    if (type === "college") {
      setActiveTab("colleges");
      handleSelectCollege(item);
    } else if (type === "course") {
      setActiveTab("mycourse");
      handleSelectCourse(item);
    } else if (type === "semester") {
      setActiveTab("mycourse");
      setSelectedSemester(item);
    } else if (type === "subject" || type === "chapter") {
      const targetSub = type === "chapter" ? item.subject : item;
      setSelectedSubject(targetSub);
    } else if (type === "book") {
      if (item.subjectObj) {
        setSelectedSubject(item.subjectObj);
      } else {
        setActiveTab("books");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1C2036] text-white flex flex-col font-sans selection:bg-[#3D446C] selection:text-white relative">
      
      {/* Animation 1: Background slow-moving blurred gradient blobs/orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#3D446C] opacity-30 blur-[100px] bg-orb-1" />
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#8FE388] opacity-20 blur-[120px] bg-orb-2" />
        <div className="absolute bottom-[-15%] left-[25%] w-[550px] h-[550px] rounded-full bg-[#292F4C] opacity-35 blur-[90px] bg-orb-3" />
      </div>

      {/* Main Single Navbar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onResetHome={handleResetHome}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
        onStreamCourseChange={handleStreamCourseChange}
        onQuickCourseChange={handleQuickCourseChange}
        onNavTabChange={handleNavTabChange}
        activeTab={activeTab}
      />

      {/* User Details & Profile Modal (when logged in) */}
      <LoginForm
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        currentUser={currentUser}
        onLogout={handleLogout}
        isFullPage={false}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-2.5 sm:px-6 lg:px-10 py-3 sm:py-6 pb-32 sm:pb-36 md:pb-8 relative z-10">
        
        {searchResults ? (
          /* Global Search Results Mode */
          <SearchResults
            searchQuery={searchQuery}
            results={searchResults}
            onSelectResult={handleSelectSearchResult}
            onClearSearch={() => setSearchQuery("")}
          />
        ) : selectedSubject ? (
          /* Subject Detail */
          <SubjectDetail
            subject={selectedSubject}
            onBack={() => setSelectedSubject(null)}
          />
        ) : selectedSemester ? (
          /* Semester Subjects */
          <SubjectList
            semester={selectedSemester}
            subjects={activeSubjects}
            onSelectSubject={handleSelectSubject}
            onBack={() => setSelectedSemester(null)}
          />
        ) : selectedCourse ? (
          /* Course Semesters */
          <SemesterList
            course={selectedCourse}
            semesters={activeSemesters}
            onSelectSemester={handleSelectSemester}
            onBack={() => setSelectedCourse(null)}
          />
        ) : selectedCollege ? (
          /* College Courses */
          <CourseList
            college={selectedCollege}
            courses={activeCourses}
            onSelectCourse={handleSelectCourse}
            onBack={() => setSelectedCollege(null)}
          />
        ) : activeTab === "explore" ? (
          /* Explore All Academic Courses */
          <ExploreCoursesView
            courses={COURSES}
            currentUser={currentUser}
            onSelectCourse={handleSelectCourse}
            onSelectStreamCourse={handleStreamCourseChange}
            onViewColleges={(course) => {
              handleStreamCourseChange(course.stream || "All", course.name);
            }}
            onBack={() => handleNavTabChange("home")}
          />
        ) : activeTab === "books" ? (
          /* Textbooks Link: Textbooks Library */
          <BooksView
            onSelectSubject={handleSelectSubject}
            currentUser={currentUser}
          />
        ) : activeTab === "profile" ? (
          /* Profile Link */
          <ProfileView
            onSelectCourse={handleSelectCourse}
            currentUser={currentUser}
            onOpenLogin={() => setIsLoginModalOpen(true)}
            onLogout={handleLogout}
          />
        ) : activeTab === "subjects" ? (
          /* Subjects Link: Direct Subjects Catalog */
          <SubjectList
            semester={{ name: `${selectedCourse?.shortCode || currentUser?.course || "Course"} Enrolled Semesters` }}
            subjects={activeSubjects}
            onSelectSubject={handleSelectSubject}
            onBack={() => setActiveTab("home")}
          />
        ) : (
          /* Home View: Rich Student Dashboard Home Screen */
          <HomeView
            currentUser={currentUser}
            onSelectSubject={handleSelectSubject}
            onSelectCourse={handleSelectCourse}
            onOpenProfile={() => setIsLoginModalOpen(true)}
            onExploreCourses={() => handleNavTabChange("explore")}
            onQuickCourseChange={handleQuickCourseChange}
          />
        )}
      </main>

      {/* Academic Portal Footer (Desktop only) */}
      <footer className="hidden md:block bg-[#292F4C] border-t border-[#56608F] py-6 text-center text-xs text-[#C4C9DE] relative z-10">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 EduNexus Higher Education Reference Hub. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-[#C4C9DE] font-medium text-xs">
            <span className="text-[#8FE388] font-bold">{currentUser?.course || "Course Portal"}</span>
            <span className="text-[#56608F]">•</span>
            <span>PDF Textbooks</span>
          </div>
        </div>
      </footer>

      {/* Mobile Search Modal Drawer / Overlay */}
      <MobileSearchModal
        isOpen={isMobileSearchOpen}
        onClose={() => setIsMobileSearchOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        onSelectResult={handleSelectSearchResult}
        onNavigateTab={handleNavTabChange}
      />

      {/* Sticky Bottom Navigation Bar (Fixed Position for Mobile Viewports) */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={handleNavTabChange}
        onOpenSearch={() => setIsMobileSearchOpen((prev) => !prev)}
        isSearchActive={isMobileSearchOpen || Boolean(searchQuery.trim())}
      />
    </div>
  );
}
