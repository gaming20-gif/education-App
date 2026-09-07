import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CourseNav from "./components/CourseNav";
import UniversityList from "./components/UniversityList";
import CollegeList from "./components/CollegeList";
import CourseList from "./components/CourseList";
import SemesterList from "./components/SemesterList";
import SubjectList from "./components/SubjectList";
import SubjectDetail from "./components/SubjectDetail";
import SearchResults from "./components/SearchResults";
import BottomNav from "./components/BottomNav";
import MyCourseView from "./components/MyCourseView";
import BooksView from "./components/BooksView";
import ProfileView from "./components/ProfileView";
import LoginForm from "./components/LoginForm";

import {
  UNIVERSITIES,
  COLLEGES,
  COURSES,
  getSemestersForCourse,
  getSubjectsForSemester,
  filterUniversitiesByCourse,
  filterCollegesByCourse,
  filterCoursesByCourse,
  filterSubjectsByCourse,
  filterBooksByCourse
} from "./data/educationData";

export default function App() {
  // Current logged in user session (null if not logged in)
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("edunexus_user");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null; // Force user to log in / register first!
  });

  // Modal edit state for when logged-in user wants to edit profile
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Navigation tab state: 'universities' | 'colleges' | 'mycourse' | 'subjects' | 'books' | 'profile'
  const [activeTab, setActiveTab] = useState("universities");

  // Drill-down selection states
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Global search state
  const [searchQuery, setSearchQuery] = useState("");

  // Helper function to focus view directly on the user's selected course
  const applyUserCourseSelection = (userData) => {
    if (!userData || !userData.course) return;

    const filteredCourses = filterCoursesByCourse(userData.course);
    const targetCourse = filteredCourses[0] || COURSES[0];
    const targetCollege = COLLEGES.find(col => col.id === targetCourse.collegeId) || COLLEGES[0];
    const targetUni = UNIVERSITIES.find(u => u.id === targetCollege.universityId) || UNIVERSITIES[0];

    setSelectedUniversity(targetUni);
    setSelectedCollege(targetCollege);
    setSelectedCourse(targetCourse);
    setSelectedSemester(null);
    setSelectedSubject(null);
  };

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem("edunexus_user", JSON.stringify(userData));
    setIsLoginModalOpen(false);
    applyUserCourseSelection(userData);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("edunexus_user");
    setSelectedUniversity(null);
    setSelectedCollege(null);
    setSelectedCourse(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
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
    applyUserCourseSelection(updatedUser);
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

  const userCourseStr = currentUser.course;

  // Handler: Reset to Universities Home
  const handleResetHome = () => {
    setActiveTab("universities");
    setSelectedUniversity(null);
    setSelectedCollege(null);
    setSelectedCourse(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
    setSearchQuery("");
  };

  // Handler: Select Navigation Tab
  const handleNavTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchQuery("");

    if (tabId === "universities") {
      setSelectedUniversity(null);
      setSelectedCollege(null);
      setSelectedCourse(null);
      setSelectedSemester(null);
      setSelectedSubject(null);
    } else if (tabId === "colleges") {
      setSelectedUniversity(null);
      setSelectedCollege(null);
      setSelectedCourse(null);
      setSelectedSemester(null);
      setSelectedSubject(null);
    }
  };

  // Handler: Select University
  const handleSelectUniversity = (uni) => {
    setSelectedUniversity(uni);
    setSelectedCollege(null);
    setSelectedCourse(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
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

  // 1. Filtered Universities for active course (shows ONLY universities offering selected course)
  const activeUniversities = filterUniversitiesByCourse(userCourseStr);

  // 2. Filtered Colleges for active University AND active course (or all colleges teaching course)
  const activeColleges = filterCollegesByCourse(userCourseStr, selectedUniversity?.id);
  const allCollegesOfferingCourse = filterCollegesByCourse(userCourseStr);

  // 3. Filtered Courses for active College AND active course
  const activeCourses = filterCoursesByCourse(userCourseStr, selectedCollege?.id);

  // 4. Filtered Semesters for active Course
  const activeSemesters = selectedCourse ? getSemestersForCourse(selectedCourse) : [];

  // 5. Filtered Subjects for active Semester or active Course
  const activeSubjects = (selectedSemester && selectedCourse)
    ? getSubjectsForSemester(selectedSemester.id, selectedCourse.id)
    : filterSubjectsByCourse(userCourseStr);

  // 6. Global Stream-Scoped Search Filter Results
  const searchResults = searchQuery.trim() ? (() => {
    const q = searchQuery.toLowerCase().trim();
    const currentStream = currentUser?.stream || "Commerce";

    // Courses belonging to the active stream
    const streamCourseObjects = COURSES.filter(c => c.stream === currentStream);
    const streamCourseIds = new Set(streamCourseObjects.map(c => c.id));
    const streamCollegeIds = new Set(streamCourseObjects.map(c => c.collegeId));
    
    // Colleges in active stream
    const streamColleges = COLLEGES.filter(col => streamCollegeIds.has(col.id) || streamCourseObjects.some(c => c.collegeId === col.id));
    const streamUniIds = new Set(streamColleges.map(col => col.universityId));
    
    // Universities in active stream
    const streamUniversities = UNIVERSITIES.filter(u => streamUniIds.has(u.id));

    // Subjects in active stream
    const streamSubjects = SUBJECTS.filter(sub => streamCourseIds.has(sub.courseId));

    // Semesters in active stream
    const streamSemesters = [];
    streamCourseObjects.forEach(course => {
      const sems = getSemestersForCourse(course);
      sems.forEach(s => streamSemesters.push({ ...s, courseObj: course }));
    });

    // Books in active stream
    const streamBooks = filterBooksByCourse(userCourseStr);

    // 1. Filter Universities
    const matchedUnis = streamUniversities.filter(u => 
      u.name.toLowerCase().includes(q) ||
      u.shortName.toLowerCase().includes(q) ||
      u.location.toLowerCase().includes(q) ||
      u.type.toLowerCase().includes(q)
    );

    // 2. Filter Colleges
    const matchedCols = streamColleges.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.shortName.toLowerCase().includes(q) ||
      (c.department && c.department.toLowerCase().includes(q)) ||
      c.address.toLowerCase().includes(q)
    );

    // 3. Filter Courses
    const matchedCourses = streamCourseObjects.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.shortCode.toLowerCase().includes(q) ||
      c.degree.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      (c.careerPaths && c.careerPaths.some(cp => cp.toLowerCase().includes(q)))
    );

    // 4. Filter Semesters
    const matchedSemesters = streamSemesters.filter(s => 
      s.name.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      `semester ${s.semesterNumber}`.includes(q) ||
      `sem ${s.semesterNumber}`.includes(q)
    );

    // 5. Filter Subjects
    const matchedSubjects = streamSubjects.filter(sub => 
      sub.name.toLowerCase().includes(q) ||
      sub.code.toLowerCase().includes(q) ||
      (sub.shortName && sub.shortName.toLowerCase().includes(q)) ||
      (sub.description && sub.description.toLowerCase().includes(q))
    );

    // 6. Filter Chapters / Syllabus Units specifically
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

    // 7. Filter Books
    const matchedBooks = streamBooks.filter(b => 
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      (b.subjectName && b.subjectName.toLowerCase().includes(q)) ||
      (b.summary && b.summary.toLowerCase().includes(q))
    );

    return {
      stream: currentStream,
      universities: matchedUnis,
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
    if (type === "university") {
      setActiveTab("universities");
      handleSelectUniversity(item);
    } else if (type === "college") {
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
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onResetHome={handleResetHome}
        activeCourseName={selectedCourse?.name || currentUser?.course}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
        onStreamCourseChange={handleStreamCourseChange}
      />

      {/* Sub-Header Course Nav Links (Replaces old breadcrumb) */}
      <CourseNav
        activeTab={activeTab}
        setActiveTab={handleNavTabChange}
        selectedCourseName={currentUser?.course}
      />

      {/* Edit Profile Modal (when logged in) */}
      <LoginForm
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        isFullPage={false}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-6">
        
        {searchResults ? (
          /* Global Search Results Mode */
          <SearchResults
            searchQuery={searchQuery}
            results={searchResults}
            onSelectResult={handleSelectSearchResult}
            onClearSearch={() => setSearchQuery("")}
          />
        ) : activeTab === "colleges" ? (
          /* Colleges Link: Show all colleges teaching the selected course */
          <CollegeList
            university={selectedUniversity}
            colleges={selectedUniversity ? activeColleges : allCollegesOfferingCourse}
            onSelectCollege={handleSelectCollege}
            onBack={selectedUniversity ? () => setSelectedUniversity(null) : null}
            selectedCourseName={currentUser?.course}
          />
        ) : activeTab === "mycourse" ? (
          /* Semesters Link: My Course Dashboard & Semesters */
          <MyCourseView
            onSelectSubject={handleSelectSubject}
            onSelectCourse={handleSelectCourse}
            currentUser={currentUser}
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
            onBack={() => setActiveTab("universities")}
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
            onBack={() => setSelectedCollege(null)}
          />
        ) : selectedCollege ? (
          /* College Courses */
          <CourseList
            college={selectedCollege}
            courses={activeCourses}
            onSelectCourse={handleSelectCourse}
            onBack={() => setSelectedUniversity(null)}
          />
        ) : selectedUniversity ? (
          /* University Colleges */
          <CollegeList
            university={selectedUniversity}
            colleges={activeColleges}
            onSelectCollege={handleSelectCollege}
            onBack={() => setSelectedUniversity(null)}
            selectedCourseName={currentUser?.course}
          />
        ) : (
          /* Universities Link / Default Home: Choose University */
          <UniversityList
            universities={activeUniversities}
            onSelectUniversity={handleSelectUniversity}
          />
        )}
      </main>

      {/* Academic Portal Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mb-14 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 EduNexus Higher Education Reference Hub. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <span>Universities</span> • <span>Colleges</span> • <span className="text-[#1E40AF] font-bold">{currentUser?.course || "Course Portal"}</span> • <span>PDF Textbooks</span>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Navigation Bar (Fixed Position for Mobile Viewports) */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={(tab) => {
          handleNavTabChange(tab === "home" ? "universities" : tab);
        }}
      />
    </div>
  );
}
