import React, { useState, useMemo } from "react";
import {
  Compass,
  Search,
  Layers,
  Clock,
  ArrowRight,
  GraduationCap,
  Briefcase,
  ArrowLeft,
  Check,
  Building2,
  Filter,
  CheckCircle2,
  X
} from "lucide-react";
import { COLLEGES, collegeOffersCourse, getCourseKey } from "../data/educationData";

export default function ExploreCoursesView({
  courses,
  currentUser,
  onSelectCourse,
  onSelectStreamCourse,
  onViewColleges,
  onBack
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStream, setSelectedStream] = useState("All");

  const currentCourseName = currentUser?.course || "";

  // Available stream filters
  const streamFilters = [
    { id: "All", label: "All Streams" },
    { id: "Commerce", label: "Commerce & Business" },
    { id: "Arts", label: "Arts & Humanities" },
    { id: "Science", label: "Science & Tech" },
    { id: "Education", label: "Education & Teaching" },
    { id: "Law", label: "Law & Legal Studies" },
    { id: "Medical", label: "Medical & Health" }
  ];

  // Filter courses based on stream, level, and search query
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Stream filter
      if (selectedStream !== "All") {
        const streamMatch = (course.stream || "").toLowerCase() === selectedStream.toLowerCase();
        if (!streamMatch) {
          // Special fallback for Education and Law
          if (selectedStream === "Education" && (course.id.includes("ed") || course.name.toLowerCase().includes("education"))) {
            // match
          } else if (selectedStream === "Law" && (course.id.includes("law") || course.id.includes("llb") || course.id.includes("llm"))) {
            // match
          } else if (selectedStream === "Medical" && (course.id.includes("nursing") || course.id.includes("physio") || course.id.includes("mbbs"))) {
            // match
          } else {
            return false;
          }
        }
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = course.name.toLowerCase().includes(q);
        const matchesShort = (course.shortCode || "").toLowerCase().includes(q);
        const matchesDesc = (course.description || "").toLowerCase().includes(q);
        const matchesStream = (course.stream || "").toLowerCase().includes(q);
        const matchesCareers = course.careerPaths && course.careerPaths.some(c => c.toLowerCase().includes(q));
        if (!matchesName && !matchesShort && !matchesDesc && !matchesStream && !matchesCareers) {
          return false;
        }
      }

      return true;
    });
  }, [courses, selectedStream, searchQuery]);

  // Helper to count colleges offering this course
  const getCollegesCountForCourse = (course) => {
    const key = course.courseKey || getCourseKey(course.shortCode || course.name);
    const count = COLLEGES.filter(col => collegeOffersCourse(col, key)).length;
    return count > 0 ? count : 1;
  };

  // Check if a course matches currently enrolled course
  const isCurrentlyEnrolled = (course) => {
    if (!currentCourseName) return false;
    const currentKey = getCourseKey(currentCourseName);
    const courseKey = course.courseKey || getCourseKey(course.shortCode || course.name);
    return currentKey === courseKey || currentCourseName.toLowerCase().includes((course.shortCode || "").toLowerCase());
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8 font-sans">
      
      {/* Top Header Banner */}
      <div className="bg-[#292F4C] border border-[#56608F] rounded-[16px] p-5 sm:p-7 shadow-xs relative overflow-hidden text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onBack}
                className="btn-cta inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C2036] hover:bg-[#3D446C] text-[#C4C9DE] hover:text-white border border-[#56608F] text-xs font-bold transition-all cursor-pointer mr-1"
                title="Back to Home Dashboard"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#8FE388]" />
                <span>Back</span>
              </button>
              <span className="px-2.5 py-1 rounded-full bg-[#3D446C] border border-[#56608F] text-[#8FE388] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-[#8FE388]" />
                Course Explorer
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#3D446C]/50 text-[#8FE388] border border-[#56608F] text-xs font-bold">
                {courses.length} Degree Programs Available
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Explore All Academic Courses & Degrees
            </h1>
            <p className="text-xs sm:text-sm text-[#C4C9DE] leading-relaxed">
              Explore undergraduate, postgraduate, and professional degrees across Commerce, Arts, Science, Education, Law, and Medicine. View full semester curriculum, core subjects, textbooks, and affiliated colleges.
            </p>
          </div>

          {/* Quick Enrolled Status Pill */}
          {currentUser && (
            <div className="bg-[#1C2036] border border-[#56608F] rounded-[12px] p-3.5 sm:w-72 shrink-0 space-y-1">
              <div className="text-[11px] font-bold text-[#C4C9DE] uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8FE388]" /> Active Enrolled Course
              </div>
              <div className="text-sm font-bold text-white truncate">
                {currentUser.course || "All Academic Courses"}
              </div>
              <div className="text-[11px] text-[#C4C9DE]">
                Stream: <strong className="text-[#8FE388]">{currentUser.stream || "All"}</strong>
              </div>
            </div>
          )}

        </div>

        {/* Global Search Bar */}
        <div className="mt-5 pt-4 border-t border-[#56608F]">
          <div className="relative max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C9DE] pointer-events-none" />
            <input
              type="text"
              placeholder="Search courses by name (e.g. M.Com, B.Com, B.A., BCA, B.Ed, LLB)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[42px] pl-10 pr-9 text-[13px] font-normal text-white bg-[#1C2036] border border-[#56608F] rounded-[10px] placeholder:text-[#C4C9DE] focus:border-[#8FE388] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C4C9DE] hover:text-white p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Stream & Level Filter Tabs */}
      <div className="space-y-3">
        
        {/* Stream Filter Pills & Course Counter */}
        <div className="flex items-center justify-between gap-3 flex-wrap bg-[#292F4C] p-2.5 rounded-[12px] border border-[#56608F]">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar flex-1 min-w-0">
            <span className="text-xs font-bold text-[#C4C9DE] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#8FE388]" /> Stream:
            </span>
            {streamFilters.map((tab) => {
              const isSelected = selectedStream === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedStream(tab.id)}
                  className={`btn-cta px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    isSelected
                      ? "bg-[#3D446C] text-white border border-[#8FE388]/40 shadow-xs"
                      : "bg-[#1C2036] text-[#C4C9DE] border border-[#56608F] hover:bg-[#3D446C]/50 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#C4C9DE] shrink-0 font-medium pl-1">
            Showing <strong className="text-[#8FE388]">{filteredCourses.length}</strong> of {courses.length} courses
          </div>
        </div>

      </div>

      {/* Courses Cards Grid */}
      {filteredCourses.length === 0 ? (
        <div className="bg-[#292F4C] border border-[#56608F] rounded-[16px] p-12 text-center space-y-3 shadow-xs text-white">
          <div className="w-12 h-12 rounded-full bg-[#1C2036] text-[#C4C9DE] mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white">No courses found</h3>
          <p className="text-xs text-[#C4C9DE] max-w-sm mx-auto">
            No academic course matched your search "{searchQuery}" with the selected stream filter.
          </p>
          <button
            onClick={() => { setSearchQuery(""); setSelectedStream("All"); }}
            className="btn-cta inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#4CD964] text-[#1C2036] text-xs font-bold cursor-pointer hover:bg-[#4CD964]/90"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.map((course) => {
            const enrolled = isCurrentlyEnrolled(course);
            const collegesCount = getCollegesCountForCourse(course);

            return (
              <div
                key={course.id}
                className={`course-card group bg-[#292F4C] rounded-[14px] border transition-all duration-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-md text-white ${
                  enrolled
                    ? "border-[#8FE388] ring-1 ring-[#8FE388]/30 bg-gradient-to-b from-[#3D446C]/20 to-[#292F4C]"
                    : "border-[#56608F] hover:border-[#8FE388]/50"
                }`}
              >
                {/* Course Card Top Header */}
                <div className="space-y-3">
                  
                  <div className="flex items-start justify-between gap-3">
                    {/* Icon & Code */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-[10px] bg-[#3D446C] text-[#8FE388] border border-[#56608F] flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#3D446C] text-[#8FE388] border border-[#56608F] uppercase tracking-wider">
                          {course.shortCode || "DEGREE"}
                        </span>
                        <div className="text-[10px] font-medium text-[#C4C9DE] mt-0.5">
                          {course.stream || "General"}
                        </div>
                      </div>
                    </div>

                    {/* Level / Enrolled Badge */}
                    {enrolled ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#3D446C] text-[#8FE388] border border-[#56608F] text-[11px] font-bold flex items-center gap-1 shrink-0">
                        <Check className="w-3 h-3 text-[#8FE388]" /> Enrolled
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1C2036] text-[#C4C9DE] border border-[#56608F] text-[11px] font-semibold shrink-0">
                        {course.level || "Degree"}
                      </span>
                    )}
                  </div>

                  {/* Course Name */}
                  <div>
                    <h3
                      onClick={() => onSelectCourse(course)}
                      className="text-base font-bold text-white group-hover:text-[#8FE388] transition-colors leading-snug cursor-pointer line-clamp-2"
                      title={course.name}
                    >
                      {course.name}
                    </h3>
                    <p className="text-[11px] font-medium text-[#8FE388] mt-0.5">
                      {course.degree}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#C4C9DE] leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Course Specs (Duration & Semesters) */}
                  <div className="grid grid-cols-2 gap-2 bg-[#1C2036] p-2.5 rounded-[10px] border border-[#56608F] text-[11px]">
                    <div className="flex items-center gap-1.5 text-[#C4C9DE]">
                      <Clock className="w-3.5 h-3.5 text-[#8FE388] shrink-0" />
                      <span className="truncate"><strong className="text-white">{course.duration}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#C4C9DE]">
                      <Layers className="w-3.5 h-3.5 text-[#8FE388] shrink-0" />
                      <span><strong className="text-white">{course.totalSemesters} Semesters</strong></span>
                    </div>
                  </div>

                  {/* Career Horizons */}
                  {course.careerPaths && course.careerPaths.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-bold text-[#C4C9DE] uppercase tracking-wider flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-[#8FE388]" /> Careers
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {course.careerPaths.slice(0, 3).map((career, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#1C2036] text-[#C4C9DE] border border-[#56608F]"
                          >
                            {career}
                          </span>
                        ))}
                        {course.careerPaths.length > 3 && (
                          <span className="text-[10px] text-[#C4C9DE] self-center">
                            +{course.careerPaths.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Offering Colleges Count */}
                  <div className="flex items-center gap-1 text-[11px] text-[#C4C9DE] pt-1">
                    <Building2 className="w-3.5 h-3.5 text-[#8FE388]" />
                    <span>Offered in <strong className="text-white">{collegesCount}</strong> affiliated colleges</span>
                  </div>

                </div>

                {/* Course Card Action Buttons */}
                <div className="pt-4 mt-4 border-t border-[#56608F] space-y-2">
                  
                  {/* Primary Action: Explore Semesters & Syllabus */}
                  <button
                    type="button"
                    onClick={() => onSelectCourse(course)}
                    className="btn-cta w-full h-[36px] bg-[#4CD964] hover:bg-[#4CD964]/90 text-[#1C2036] rounded-[8px] text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                  >
                    <span>Explore {course.totalSemesters} Semesters & Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Secondary Action: Set as active course or view offering colleges */}
                  <div className="flex items-center gap-2">
                    {!enrolled ? (
                      <button
                        type="button"
                        onClick={() => onSelectStreamCourse(course.stream || "All", course.name)}
                        className="btn-cta flex-1 py-1.5 px-2 rounded-[8px] bg-[#1C2036] hover:bg-[#3D446C] text-white text-[11px] font-semibold border border-[#56608F] transition-colors cursor-pointer text-center truncate"
                        title="Set this degree program as your active enrolled course"
                      >
                        Set as My Course
                      </button>
                    ) : (
                      <span className="flex-1 py-1.5 px-2 rounded-[8px] bg-[#3D446C] text-[#8FE388] text-[11px] font-bold text-center border border-[#56608F]">
                        Current Active Course
                      </span>
                    )}

                    {onViewColleges && (
                      <button
                        type="button"
                        onClick={() => onViewColleges(course)}
                        className="btn-cta py-1.5 px-2.5 rounded-[8px] bg-[#1C2036] hover:bg-[#3D446C] text-[#8FE388] border border-[#56608F] text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
                        title="View all colleges offering this course"
                      >
                        Colleges
                      </button>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
