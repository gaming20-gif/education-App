// Education Portal Core Data Repository

export const UNIVERSITIES = [
  {
    id: "du",
    name: "University of Delhi (DU)",
    shortName: "DU",
    code: "DU-101",
    location: "New Delhi, India",
    established: "1922",
    type: "Central University",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    collegesCount: 5,
    description: "One of India's premier central universities renowned for excellence in Commerce, Arts, Science, and Management education."
  },
  {
    id: "mu",
    name: "University of Mumbai",
    shortName: "MU",
    code: "MU-202",
    location: "Mumbai, Maharashtra, India",
    established: "1857",
    type: "State University",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    collegesCount: 4,
    description: "A prestigious historical university offering diverse undergraduate, postgraduate, and research programs."
  },
  {
    id: "gu",
    name: "Gujarat University",
    shortName: "GU",
    code: "GU-303",
    location: "Ahmedabad, Gujarat, India",
    established: "1949",
    type: "State University",
    logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
    collegesCount: 4,
    description: "Largest university in Gujarat catering to commerce, technology, management, and basic sciences."
  },
  {
    id: "mit",
    name: "Massachusetts Institute of Technology (MIT)",
    shortName: "MIT",
    code: "MIT-404",
    location: "Cambridge, MA, USA",
    established: "1861",
    type: "Private Research University",
    logo: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    collegesCount: 3,
    description: "World leading institution in science, engineering, computing, technology, and economic research."
  }
];

export const COLLEGES = [
  // Delhi University Colleges
  {
    id: "du-srcc",
    universityId: "du",
    name: "Shri Ram College of Commerce (SRCC)",
    shortName: "SRCC",
    type: "College",
    department: "Commerce & Management",
    address: "North Campus, University of Delhi, Delhi - 110007",
    established: "1926",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=80",
    description: "Asia's premier institution for Commerce and Economics education.",
    coursesCount: 5
  },
  {
    id: "du-dept-commerce",
    universityId: "du",
    name: "Department of Commerce, Delhi School of Economics",
    shortName: "DSE Commerce",
    type: "Department",
    department: "Postgraduate Commerce",
    address: "North Campus, Delhi University",
    established: "1967",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80",
    description: "Premier post-graduate commerce department offering M.Com, MIB, and Ph.D. programs.",
    coursesCount: 2
  },
  {
    id: "du-sol",
    universityId: "du",
    name: "School of Open Learning (SOL DU)",
    shortName: "SOL DU",
    type: "College",
    department: "Distance & Open Learning",
    address: "5, Cavalry Lines, North Campus, Delhi",
    established: "1962",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&auto=format&fit=crop&q=80",
    description: "Delivers comprehensive distance education for undergraduate and master's degrees.",
    coursesCount: 3
  },
  {
    id: "du-hansraj",
    universityId: "du",
    name: "Hansraj College",
    shortName: "Hansraj",
    type: "College",
    department: "Science & Arts",
    address: "North Campus, Delhi University",
    established: "1948",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=500&auto=format&fit=crop&q=80",
    description: "Top-ranked college offering B.Sc, B.Tech, and BA programs.",
    coursesCount: 4
  },

  // Mumbai University Colleges
  {
    id: "mu-stxaviers",
    universityId: "mu",
    name: "St. Xavier's College, Mumbai",
    shortName: "St. Xavier's",
    type: "College",
    department: "Autonomous Arts, Science & Commerce",
    address: "5, Mahapalika Marg, Mumbai",
    established: "1869",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&auto=format&fit=crop&q=80",
    description: "Autonomous college known for academic excellence and vibrant student culture.",
    coursesCount: 4
  },
  {
    id: "mu-dept-cs",
    universityId: "mu",
    name: "Department of Computer Science & IT",
    shortName: "MU CS Dept",
    type: "Department",
    department: "Technology & Computing",
    address: "Vidyanagari, Santacruz East, Mumbai",
    established: "1978",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80",
    description: "Focuses on advanced software engineering, computer applications, and AI research.",
    coursesCount: 3
  },

  // Gujarat University Colleges
  {
    id: "gu-hlcom",
    universityId: "gu",
    name: "HL College of Commerce",
    shortName: "HL Commerce",
    type: "College",
    department: "Commerce",
    address: "Navrangpura, Ahmedabad, Gujarat",
    established: "1936",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&auto=format&fit=crop&q=80",
    description: "Pioneer commerce institution producing leaders in finance, accounting, and trade.",
    coursesCount: 3
  },

  // MIT Colleges / Departments
  {
    id: "mit-eecs",
    universityId: "mit",
    name: "Department of Electrical Engineering & Computer Science (EECS)",
    shortName: "EECS MIT",
    type: "Department",
    department: "Engineering & CS",
    address: "Cambridge, MA 02139",
    established: "1882",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=500&auto=format&fit=crop&q=80",
    description: "World's top ranked department for Computer Science and Electrical Engineering.",
    coursesCount: 2
  }
];

export const COURSES = [
  // SRCC / Commerce Courses
  {
    id: "mcom",
    collegeId: "du-srcc",
    name: "Master of Commerce (M.Com)",
    shortCode: "M.Com",
    courseKey: "mcom",
    stream: "Commerce",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Advanced post-graduate program specializing in Financial Analysis, Corporate Accounting, Managerial Economics, and International Business.",
    careerPaths: ["Financial Analyst", "Chartered Accountant", "Corporate Strategist", "Professor", "Tax Consultant"]
  },
  {
    id: "bcom",
    collegeId: "du-srcc",
    name: "Bachelor of Commerce (Honours) [B.Com (Hons)]",
    shortCode: "B.Com",
    courseKey: "bcom",
    stream: "Commerce",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Comprehensive undergraduate degree focusing on core business accounting, commercial laws, taxation, and financial management.",
    careerPaths: ["Accountant", "Auditor", "Investment Banker", "Risk Analyst", "Business Consultant"]
  },
  {
    id: "bba-srcc",
    collegeId: "du-srcc",
    name: "Bachelor of Business Administration (BBA)",
    shortCode: "BBA",
    courseKey: "bba",
    stream: "Commerce",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Professional management degree covering marketing, human resources, business analytics, and entrepreneurship.",
    careerPaths: ["Business Manager", "Marketing Executive", "HR Manager", "Startup Consultant"]
  },
  {
    id: "mba-srcc",
    collegeId: "du-srcc",
    name: "Post Graduate Diploma in Global Business Operations (GBO / MBA)",
    shortCode: "MBA GBO",
    courseKey: "mba",
    stream: "Commerce",
    degree: "Postgraduate Diploma / MBA",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Specialized management program training future executives in international trade, supply chain, and corporate finance.",
    careerPaths: ["Supply Chain Manager", "International Business Developer", "Product Manager"]
  },
  {
    id: "ca-srcc",
    collegeId: "du-srcc",
    name: "Chartered Accountancy (CA Foundation & Intermediate)",
    shortCode: "CA",
    courseKey: "ca",
    stream: "Commerce",
    degree: "Professional Certification",
    duration: "3 Years",
    level: "Professional",
    totalSemesters: 4,
    description: "Professional accounting credential covering auditing, taxation, financial reporting, and corporate governance.",
    careerPaths: ["Chartered Accountant", "Statutory Auditor", "Tax Consultant"]
  },
  {
    id: "cs-srcc",
    collegeId: "du-srcc",
    name: "Company Secretary (CS Executive & Professional)",
    shortCode: "CS",
    courseKey: "cs",
    stream: "Commerce",
    degree: "Professional Certification",
    duration: "3 Years",
    level: "Professional",
    totalSemesters: 4,
    description: "Specialized legal and corporate compliance course training experts in secretarial auditing and board governance.",
    careerPaths: ["Company Secretary", "Compliance Officer", "Legal Advisor"]
  },

  // DSE Commerce
  {
    id: "mcom-dse",
    collegeId: "du-dept-commerce",
    name: "Master of Commerce (M.Com)",
    shortCode: "M.Com",
    courseKey: "mcom",
    stream: "Commerce",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Rigorous academic curriculum with deep emphasis on Quantitative Methods, Corporate Finance, and Financial Markets.",
    careerPaths: ["Research Analyst", "Economist", "Banker", "Tax Advisor"]
  },

  // SOL DU Courses
  {
    id: "bcom-sol",
    collegeId: "du-sol",
    name: "Bachelor of Commerce (B.Com Program)",
    shortCode: "B.Com",
    courseKey: "bcom",
    stream: "Commerce",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Flexible distance learning undergraduate commerce course tailored for self-paced learning and working professionals.",
    careerPaths: ["Junior Accountant", "Banking Officer", "Billing Manager"]
  },
  {
    id: "ba-sol",
    collegeId: "du-sol",
    name: "Bachelor of Arts (B.A. Program)",
    shortCode: "B.A.",
    courseKey: "ba",
    stream: "Arts",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Undergraduate arts degree covering history, political science, sociology, literature, and public administration.",
    careerPaths: ["Civil Services Aspirant", "Content Writer", "Public Relations Specialist"]
  },

  // Hansraj / Science & Arts Courses
  {
    id: "btech-hansraj",
    collegeId: "du-hansraj",
    name: "B.Tech Computer Science & Technology",
    shortCode: "B.Tech CS",
    courseKey: "btech",
    stream: "Science",
    degree: "Undergraduate Degree",
    duration: "4 Years (8 Semesters)",
    level: "Bachelors",
    totalSemesters: 8,
    description: "Engineering program covering Data Structures, Algorithms, Software Engineering, Web Systems, and Machine Learning.",
    careerPaths: ["Software Engineer", "Full Stack Developer", "Data Scientist", "System Architect"]
  },
  {
    id: "bsc-hansraj",
    collegeId: "du-hansraj",
    name: "Bachelor of Science (B.Sc Hons)",
    shortCode: "B.Sc",
    courseKey: "bsc",
    stream: "Science",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Undergraduate science degree focusing on physics, chemistry, mathematics, and biological research.",
    careerPaths: ["Scientific Officer", "Research Assistant", "Lab Analyst"]
  },
  {
    id: "ba-hansraj",
    collegeId: "du-hansraj",
    name: "B.A. Hons (Bachelor of Arts in English & History)",
    shortCode: "B.A. (H)",
    courseKey: "ba",
    stream: "Arts",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Honours arts degree specializing in literature, historical analysis, political philosophy, and critical thinking.",
    careerPaths: ["Journalist", "Policy Analyst", "Archivist", "Editor"]
  },
  {
    id: "ma-hansraj",
    collegeId: "du-hansraj",
    name: "Master of Arts (M.A. Economics & English)",
    shortCode: "M.A.",
    courseKey: "ma",
    stream: "Arts",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Postgraduate humanities degree emphasizing advanced economic policy, literary theory, and social sciences.",
    careerPaths: ["Senior Economist", "University Lecturer", "Research Fellow"]
  },

  // St. Xavier's Courses
  {
    id: "bcom-xaviers",
    collegeId: "mu-stxaviers",
    name: "Bachelor of Commerce (B.Com)",
    shortCode: "B.Com",
    courseKey: "bcom",
    stream: "Commerce",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "High-caliber undergraduate education covering financial management, marketing, and business laws.",
    careerPaths: ["Financial Analyst", "Tax Specialist", "Marketing Officer"]
  },
  {
    id: "ba-xaviers",
    collegeId: "mu-stxaviers",
    name: "B.A. Hons (Bachelor of Arts)",
    shortCode: "B.A. (H)",
    courseKey: "ba",
    stream: "Arts",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Premier liberal arts program covering psychology, sociology, political science, and English literature.",
    careerPaths: ["Psychologist", "Sociological Researcher", "Media Specialist"]
  },
  {
    id: "bfa-xaviers",
    collegeId: "mu-stxaviers",
    name: "BFA (Bachelor of Fine Arts)",
    shortCode: "BFA",
    courseKey: "bfa",
    stream: "Arts",
    degree: "Undergraduate Degree",
    duration: "4 Years (8 Semesters)",
    level: "Bachelors",
    totalSemesters: 8,
    description: "Creative arts degree focusing on visual arts, painting, digital design, and art history.",
    careerPaths: ["Graphic Designer", "Art Director", "Visual Artist"]
  },

  // MU CS Dept / Science & Tech Courses
  {
    id: "bca-mu",
    collegeId: "mu-dept-cs",
    name: "BCA (Bachelor of Computer Applications)",
    shortCode: "BCA",
    courseKey: "bca",
    stream: "Science",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Computer application program covering web development, database systems, and software fundamentals.",
    careerPaths: ["Web Developer", "Database Administrator", "Software Analyst"]
  },
  {
    id: "mca-mu",
    collegeId: "mu-dept-cs",
    name: "MCA (Master of Computer Applications)",
    shortCode: "MCA",
    courseKey: "mca",
    stream: "Science",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Advanced computing degree covering enterprise software engineering, cloud computing, and cybersecurity.",
    careerPaths: ["Software Architect", "Cloud Systems Engineer", "DevOps Engineer"]
  },
  {
    id: "msc-mu",
    collegeId: "mu-dept-cs",
    name: "M.Sc (Master of Science in CS & IT)",
    shortCode: "M.Sc",
    courseKey: "msc",
    stream: "Science",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Postgraduate research degree focusing on data science, machine learning, and advanced algorithms.",
    careerPaths: ["Data Scientist", "AI Researcher", "Systems Engineer"]
  },

  // HL Commerce / Gujarat University
  {
    id: "bba-gu",
    collegeId: "gu-hlcom",
    name: "BBA (Bachelor of Business Administration)",
    shortCode: "BBA",
    courseKey: "bba",
    stream: "Commerce",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Professional management course tailored for corporate operations, finance, and marketing.",
    careerPaths: ["Operations Manager", "Business Analyst", "Marketing Strategist"]
  },
  {
    id: "mcom-gu",
    collegeId: "gu-hlcom",
    name: "Master of Commerce (M.Com)",
    shortCode: "M.Com",
    courseKey: "mcom",
    stream: "Commerce",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Master's program focusing on advanced corporate finance and accounting practices.",
    careerPaths: ["Financial Consultant", "Accounts Manager"]
  },

  // MIT Courses
  {
    id: "btech-mit",
    collegeId: "mit-eecs",
    name: "Bachelor of Science in Computer Science & Engineering (Course 6-2)",
    shortCode: "B.S. CS",
    courseKey: "btech",
    stream: "Science",
    degree: "Undergraduate Degree",
    duration: "4 Years (8 Semesters)",
    level: "Bachelors",
    totalSemesters: 8,
    description: "World renowned computer science program combining theoretical computation, distributed systems, and modern AI.",
    careerPaths: ["AI Research Engineer", "Software Systems Architect", "Technology Founder"]
  },
  {
    id: "mtech-mit",
    collegeId: "mit-eecs",
    name: "Master of Technology (M.Tech / M.S. in Electrical Engineering & CS)",
    shortCode: "M.Tech",
    courseKey: "mtech",
    stream: "Science",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Advanced postgraduate engineering degree in artificial intelligence, robotics, and distributed systems.",
    careerPaths: ["Principal Engineer", "Robotics Researcher", "Chief Technology Officer"]
  }
];

// Helper to generate Semesters 1 through N for a course
export const getSemestersForCourse = (course) => {
  const totalSem = course?.totalSemesters || 4;
  const short = course?.shortCode || "Course";
  const semesters = [];
  for (let i = 1; i <= totalSem; i++) {
    semesters.push({
      id: `${course.id}-sem-${i}`,
      courseId: course.id,
      semesterNumber: i,
      name: `Semester ${i}`,
      title: `Semester ${i} (${short})`,
      subjectsCount: i % 2 === 1 ? 4 : 5
    });
  }
  return semesters;
};

export const SUBJECTS = [
  // --- M.COM SEMESTER 1 ---
  {
    id: "mcom-sem1-sub1",
    semesterId: "mcom-sem-1",
    courseId: "mcom",
    code: "MCOM-101",
    name: "Advanced Financial Accounting & Reporting",
    shortName: "Adv Financial Accounting",
    credits: 4,
    description: "In-depth analysis of International Financial Reporting Standards (IFRS), consolidated balance sheets, corporate restructuring, and advanced accounting practices.",
    syllabus: [
      "Unit 1: Framework for Preparation and Presentation of Financial Statements",
      "Unit 2: Accounting for Corporate Restructuring, Mergers & Acquisitions",
      "Unit 3: Consolidated Financial Statements (Ind AS 110 & IFRS 10)",
      "Unit 4: Valuation of Goodwill, Shares, and Intangible Assets",
      "Unit 5: Environmental & Sustainability Accounting"
    ],
    books: [
      {
        id: "b1",
        title: "Advanced Financial Accounting",
        author: "Dr. S.N. Maheshwari & Dr. S.K. Maheshwari",
        edition: "11th Edition (Vikas Publishing)",
        isbn: "978-9325983701",
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80",
        rating: 4.8,
        pages: 820,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "Comprehensive textbook covering corporate accounting, valuation of shares, consolidation of accounts, and Ind-AS compliance with solved illustrations."
      },
      {
        id: "b2",
        title: "Corporate Financial Reporting",
        author: "J.R. Monga",
        edition: "2024 Edition (Mayur Paperbacks)",
        isbn: "978-8193231102",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&auto=format&fit=crop&q=80",
        rating: 4.6,
        pages: 650,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "Standard reference text for Master of Commerce students focusing on published accounts, segment reporting, and cash flow statements."
      }
    ],
    videos: [
      {
        id: "v1",
        title: "Consolidated Financial Statements - Full Lecture",
        duration: "45:30",
        instructor: "Prof. R.K. Sharma (SRCC)",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80",
        topic: "Group Accounts & Holding Companies"
      },
      {
        id: "v2",
        title: "Ind AS 110 & IFRS 10 Step by Step Guide",
        duration: "32:15",
        instructor: "CA Nitin Guru",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop&q=80",
        topic: "Financial Reporting Standards"
      }
    ],
    notes: [
      {
        id: "n1",
        title: "Handwritten Class Notes - Consolidated Accounts",
        author: "Topper Student Notes (SRCC)",
        format: "PDF Document",
        size: "4.2 MB",
        pages: 42,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      {
        id: "n2",
        title: "Quick Revision Formulas & Accounting Standard Summaries",
        author: "Dept. of Commerce Faculty",
        format: "PDF Document",
        size: "1.8 MB",
        pages: 18,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },
  {
    id: "mcom-sem1-sub2",
    semesterId: "mcom-sem-1",
    courseId: "mcom",
    code: "MCOM-102",
    name: "Managerial Economics & Business Decisions",
    shortName: "Managerial Economics",
    credits: 4,
    description: "Application of economic concepts, demand forecasting, price elasticity, market structures, and game theory to managerial decision making.",
    syllabus: [
      "Unit 1: Nature and Scope of Managerial Economics",
      "Unit 2: Demand Analysis & Elasticity Forecasting",
      "Unit 3: Cost and Production Functions (Short-run & Long-run)",
      "Unit 4: Pricing Decisions in Oligopoly & Game Theory",
      "Unit 5: Macroeconomic Policy & Inflation Analysis"
    ],
    books: [
      {
        id: "b3",
        title: "Managerial Economics",
        author: "D.N. Dwivedi",
        edition: "8th Edition (Vikas Publishing)",
        isbn: "978-9325983800",
        cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&auto=format&fit=crop&q=80",
        rating: 4.7,
        pages: 590,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "Clear exposition of microeconomic theory tailored for management decision makers with real business case studies."
      }
    ],
    videos: [
      {
        id: "v3",
        title: "Demand Elasticity & Pricing Strategy Tutorial",
        duration: "38:40",
        instructor: "Dr. Ananya Roy",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=80",
        topic: "Demand Forecasting"
      }
    ],
    notes: [
      {
        id: "n3",
        title: "Complete Exam Summary - Micro & Macro Economics",
        author: "DU Commerce Forum",
        format: "PDF Document",
        size: "3.1 MB",
        pages: 35,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },

  // --- B.COM SEMESTER 1 ---
  {
    id: "bcom-sem1-sub1",
    semesterId: "bcom-sem-1",
    courseId: "bcom",
    code: "BCOM-101",
    name: "Financial Accounting",
    shortName: "Financial Accounting",
    credits: 4,
    description: "Fundamental principles of accounting, journal, ledger, trial balance, final accounts of sole proprietors and partnerships, depreciation, and bank reconciliation.",
    syllabus: [
      "Unit 1: Theoretical Framework & Accounting Concepts",
      "Unit 2: Recording Transactions, Journal, Ledger & Trial Balance",
      "Unit 3: Final Accounts of Sole Proprietorship (Trading & P&L, Balance Sheet)",
      "Unit 4: Depreciation Accounting & Bank Reconciliation Statements",
      "Unit 5: Accounting for Consignment & Joint Ventures"
    ],
    books: [
      {
        id: "b7",
        title: "Financial Accounting for B.Com",
        author: "P.C. Tulsian & Bharat Tulsian",
        edition: "16th Edition (S. Chand)",
        isbn: "978-9352834501",
        cover: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=300&auto=format&fit=crop&q=80",
        rating: 4.8,
        pages: 750,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "Most popular textbook for first-year B.Com students featuring clear illustrations, practical problems, and exam model solutions."
      }
    ],
    videos: [
      {
        id: "v7",
        title: "Final Accounts Preparation with Adjustments",
        duration: "50:15",
        instructor: "CA Parveen Sharma",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&auto=format&fit=crop&q=80",
        topic: "Financial Statements"
      }
    ],
    notes: [
      {
        id: "n7",
        title: "Journal Entries & Ledger Postings Cheatsheet",
        author: "B.Com Department",
        format: "PDF Document",
        size: "2.1 MB",
        pages: 25,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },

  // --- B.TECH CS SEMESTER 1 ---
  {
    id: "btech-sem1-sub1",
    semesterId: "btech-hansraj-sem-1",
    courseId: "btech-hansraj",
    code: "CS-101",
    name: "Data Structures & Algorithmic Analysis",
    shortName: "Data Structures",
    credits: 4,
    description: "Arrays, Linked Lists, Stacks, Queues, Binary Trees, Graphs, Sorting Algorithms, Dynamic Programming, and Asymptotic Complexity (Big O).",
    syllabus: [
      "Unit 1: Analysis of Algorithms, Time & Space Complexity (Big O Notation)",
      "Unit 2: Linear Data Structures: Stacks, Queues, Deques & Linked Lists",
      "Unit 3: Non-Linear Data Structures: Binary Trees, AVL Trees & Heaps",
      "Unit 4: Graph Traversals (BFS, DFS), Shortest Path (Dijkstra) & Spanning Trees",
      "Unit 5: Sorting & Searching Algorithms (QuickSort, MergeSort, Binary Search)"
    ],
    books: [
      {
        id: "b12",
        title: "Introduction to Algorithms (CLRS)",
        author: "T.H. Cormen, C.E. Leiserson, R.L. Rivest, C. Stein",
        edition: "4th Edition (MIT Press)",
        isbn: "978-0262046305",
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&auto=format&fit=crop&q=80",
        rating: 4.9,
        pages: 1312,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "The global gold-standard textbook on algorithm design, data structures, and computer science theory."
      }
    ],
    videos: [
      {
        id: "v11",
        title: "Binary Trees & Graph Traversals Visualized",
        duration: "48:30",
        instructor: "Abdul Bari",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80",
        topic: "Tree & Graph Algorithms"
      }
    ],
    notes: [
      {
        id: "n11",
        title: "Algorithm Complexity Cheat Sheet & Tree Code Patterns",
        author: "Hansraj CS Society",
        format: "PDF Document",
        size: "3.9 MB",
        pages: 28,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },

  // --- B.A. SEMESTER 1 ---
  {
    id: "ba-sem1-sub1",
    semesterId: "ba-hansraj-sem-1",
    courseId: "ba-hansraj",
    code: "BA-101",
    name: "English Literature & Critical Thinking",
    shortName: "English Literature",
    credits: 4,
    description: "Introduction to literary genres, critical commentary, classical poetry, and post-colonial prose analysis.",
    syllabus: [
      "Unit 1: Classical & Elizabethan Poetry Studies",
      "Unit 2: Victorian Fiction & Modern Drama",
      "Unit 3: Literary Criticism & Cultural Theory",
      "Unit 4: Post-Colonial Literature in English"
    ],
    books: [
      {
        id: "b-ba1",
        title: "A History of English Literature",
        author: "Arthur Compton-Rickett",
        edition: "Standard Edition",
        isbn: "978-8129104001",
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80",
        rating: 4.8,
        pages: 720,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "Essential guide tracing the history of English literature from Old English to modern times."
      }
    ],
    videos: [
      {
        id: "v-ba1",
        title: "Literary Theory & Critical Analysis Workshop",
        duration: "42:10",
        instructor: "Prof. S. Mukherjee",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop&q=80",
        topic: "Literary Criticism"
      }
    ],
    notes: [
      {
        id: "n-ba1",
        title: "Key Themes & Critical Essay Outlines",
        author: "Hansraj English Society",
        format: "PDF Document",
        size: "2.4 MB",
        pages: 28,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },
  {
    id: "ba-sem1-sub2",
    semesterId: "ba-hansraj-sem-1",
    courseId: "ba-hansraj",
    code: "BA-102",
    name: "Political Theory & Public Administration",
    shortName: "Political Theory",
    credits: 4,
    description: "Concepts of liberty, equality, justice, democracy, and public policy formulation.",
    syllabus: [
      "Unit 1: Theories of State & Sovereignty",
      "Unit 2: Rights, Freedom, and Equality",
      "Unit 3: Democratic Institutions & Governance"
    ],
    books: [
      {
        id: "b-ba2",
        title: "An Introduction to Political Theory",
        author: "O.P. Gauba",
        edition: "8th Edition (Mayur Paperbacks)",
        isbn: "978-8193231155",
        cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&auto=format&fit=crop&q=80",
        rating: 4.7,
        pages: 620,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "Comprehensive introduction to political concepts and ideological debates."
      }
    ],
    videos: [
      {
        id: "v-ba2",
        title: "Democratic Governance & Civil Liberties",
        duration: "35:00",
        instructor: "Dr. A. Verma",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=400&auto=format&fit=crop&q=80",
        topic: "Political Science"
      }
    ],
    notes: [
      {
        id: "n-ba2",
        title: "Political Ideologies Cheat Sheet",
        author: "DU Arts Forum",
        format: "PDF Document",
        size: "1.9 MB",
        pages: 18,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },

  // --- M.A. SEMESTER 1 ---
  {
    id: "ma-sem1-sub1",
    semesterId: "ma-hansraj-sem-1",
    courseId: "ma-hansraj",
    code: "MA-101",
    name: "Advanced Macroeconomic Theory & Policy",
    shortName: "Macroeconomics",
    credits: 4,
    description: "Post-Keynesian macroeconomics, monetary equilibrium, inflation models, and open economy macroeconomics.",
    syllabus: [
      "Unit 1: Aggregate Demand & General Equilibrium Models",
      "Unit 2: Inflation, Unemployment & Phillips Curve Analysis",
      "Unit 3: Monetary Policy Frameworks & Central Banking"
    ],
    books: [
      {
        id: "b-ma1",
        title: "Macroeconomic Analysis",
        author: "Edward Shapiro",
        edition: "5th Edition",
        isbn: "978-0155512191",
        cover: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&auto=format&fit=crop&q=80",
        rating: 4.8,
        pages: 680,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "Standard post-graduate text on macroeconomic modeling and economic policy."
      }
    ],
    videos: [
      {
        id: "v-ma1",
        title: "IS-LM Model & Open Economy Dynamics",
        duration: "40:15",
        instructor: "Prof. K. Subramanian",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80",
        topic: "Macroeconomics"
      }
    ],
    notes: [
      {
        id: "n-ma1",
        title: "Macroeconomic Policy Derivations Notes",
        author: "M.A. Economics Cell",
        format: "PDF Document",
        size: "3.2 MB",
        pages: 32,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },

  // --- B.SC SEMESTER 1 ---
  {
    id: "bsc-sem1-sub1",
    semesterId: "bsc-hansraj-sem-1",
    courseId: "bsc-hansraj",
    code: "BSC-101",
    name: "Classical Mechanics & Mathematical Physics",
    shortName: "Physics",
    credits: 4,
    description: "Newtonian dynamics, Lagrangian mechanics, vector calculus, differential equations, and harmonic oscillators.",
    syllabus: [
      "Unit 1: Vector Algebra & Differential Operators",
      "Unit 2: Laws of Motion, Conservation Principles & Gravitation",
      "Unit 3: Oscillations, Waves & Harmonic Motion"
    ],
    books: [
      {
        id: "b-bsc1",
        title: "Mechanics & General Properties of Matter",
        author: "D.S. Mathur",
        edition: "Revised Edition (S. Chand)",
        isbn: "978-8121901085",
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&auto=format&fit=crop&q=80",
        rating: 4.8,
        pages: 800,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "Fundamental physics textbook for B.Sc undergraduate students with numerical problems."
      }
    ],
    videos: [
      {
        id: "v-bsc1",
        title: "Lagrangian Mechanics & Rotational Motion",
        duration: "50:00",
        instructor: "Prof. H.C. Verma Series",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80",
        topic: "Physics"
      }
    ],
    notes: [
      {
        id: "n-bsc1",
        title: "Mathematical Physics Derivations Packet",
        author: "Hansraj Science Dept",
        format: "PDF Document",
        size: "3.5 MB",
        pages: 30,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },

  // --- BCA SEMESTER 1 ---
  {
    id: "bca-sem1-sub1",
    semesterId: "bca-mu-sem-1",
    courseId: "bca-mu",
    code: "BCA-101",
    name: "Object-Oriented Programming with C++ & Java",
    shortName: "OOP & C++",
    credits: 4,
    description: "Classes, objects, inheritance, polymorphism, templates, memory allocation, and Java virtual machine basics.",
    syllabus: [
      "Unit 1: Fundamentals of Object-Oriented Design",
      "Unit 2: Encapsulation, Constructors & Destructors in C++",
      "Unit 3: Inheritance, Virtual Functions & Polymorphism",
      "Unit 4: Java Foundations, Exception Handling & Threads"
    ],
    books: [
      {
        id: "b-bca1",
        title: "Object Oriented Programming with C++",
        author: "E. Balagurusamy",
        edition: "8th Edition (McGraw Hill)",
        isbn: "978-9353162138",
        cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&auto=format&fit=crop&q=80",
        rating: 4.9,
        pages: 650,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "Most popular Indian textbook for OOP concepts in C++ and Java with complete sample codes."
      }
    ],
    videos: [
      {
        id: "v-bca1",
        title: "C++ Object Oriented Programming Masterclass",
        duration: "45:00",
        instructor: "Saurabh Shukla",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop&q=80",
        topic: "Programming"
      }
    ],
    notes: [
      {
        id: "n-bca1",
        title: "OOP Concepts & C++ Syntax Cheatsheet",
        author: "MU CS Society",
        format: "PDF Document",
        size: "2.8 MB",
        pages: 25,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  },

  // --- MCA SEMESTER 1 ---
  {
    id: "mca-sem1-sub1",
    semesterId: "mca-mu-sem-1",
    courseId: "mca-mu",
    code: "MCA-101",
    name: "Advanced Database Systems & Cloud Infrastructure",
    shortName: "DBMS & Cloud",
    credits: 4,
    description: "Relational database design, indexing, transaction processing, NoSQL databases, AWS/GCP cloud architectures.",
    syllabus: [
      "Unit 1: Relational Algebra, SQL Optimization & Indexing",
      "Unit 2: ACID Properties, Concurrency Control & Recovery",
      "Unit 3: Distributed Databases & NoSQL Systems (MongoDB)",
      "Unit 4: Cloud Virtualization, Containers (Docker, K8s) & AWS Services"
    ],
    books: [
      {
        id: "b-mca1",
        title: "Database System Concepts",
        author: "A. Silberschatz, H.F. Korth, S. Sudarshan",
        edition: "7th Edition (McGraw Hill)",
        isbn: "978-0078022159",
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&auto=format&fit=crop&q=80",
        rating: 4.9,
        pages: 1376,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: "The definitive global textbook on database engineering and transaction management."
      }
    ],
    videos: [
      {
        id: "v-mca1",
        title: "SQL Query Optimization & Database Indexing",
        duration: "55:10",
        instructor: "Prof. S. Sudarshan",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80",
        topic: "Database Systems"
      }
    ],
    notes: [
      {
        id: "n-mca1",
        title: "Transactions & SQL Tuning Guide",
        author: "MU CS Dept",
        format: "PDF Document",
        size: "3.9 MB",
        pages: 35,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  }
];

// Helper fallback data generation for missing semesters to guarantee seamless experience
export const getSubjectsForSemester = (semesterId, courseId) => {
  const existing = SUBJECTS.filter(s => s.semesterId === semesterId || s.courseId === courseId);
  if (existing.length > 0) return existing;

  // Generate dynamic subjects if specific data isn't pre-coded
  const semNum = semesterId ? (semesterId.split('-').pop() || "1") : "1";
  return [
    {
      id: `${courseId || "course"}-${semesterId || "sem1"}-sub1`,
      semesterId: semesterId || "sem-1",
      courseId: courseId || "mcom",
      code: `SUB-${semNum}01`,
      name: `Core Curriculum Subject ${semNum}.1`,
      shortName: `Subject ${semNum}.1`,
      credits: 4,
      description: `Comprehensive core module covering fundamental theories, quantitative methodologies, and practical applications in semester ${semNum}.`,
      syllabus: [
        "Unit 1: Foundations & Theoretical Framework",
        "Unit 2: Quantitative Analysis & Applied Models",
        "Unit 3: Advanced Principles & Real-world Case Studies",
        "Unit 4: Industry Best Practices & Exam Review"
      ],
      books: [
        {
          id: `b-dyn-${courseId || "c"}-${semNum}-1`,
          title: `Standard Course Reference Textbook`,
          author: "University Academic Panel",
          edition: "Latest University Edition",
          isbn: "978-0123456789",
          cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80",
          rating: 4.8,
          pages: 540,
          pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          summary: "Essential textbook designed for university curricula with solved question papers and chapter reviews."
        }
      ],
      videos: [
        {
          id: `v-dyn-${courseId || "c"}-${semNum}-1`,
          title: `Semester ${semNum} Comprehensive Lecture Series`,
          duration: "40:00",
          instructor: "Senior Faculty Panel",
          embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80",
          topic: "Core Fundamentals"
        }
      ],
      notes: [
        {
          id: `n-dyn-${courseId || "c"}-${semNum}-1`,
          title: `Complete Revision Notes & Exam Guide`,
          author: "Academic Resource Cell",
          format: "PDF Document",
          size: "2.5 MB",
          pages: 24,
          pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        }
      ]
    }
  ];
};

// -------------------------------------------------------------
// COURSE FILTERING HELPER UTILITIES
// -------------------------------------------------------------

export const getCourseKey = (courseStr) => {
  if (!courseStr) return "mcom";
  const str = courseStr.toLowerCase();

  if (str.includes("m.com") || str.includes("mcom") || str.includes("master of commerce")) return "mcom";
  if (str.includes("b.com") || str.includes("bcom") || str.includes("bachelor of commerce")) return "bcom";
  if (str.includes("bba") || str.includes("business admin")) return "bba";
  if (str.includes("mba")) return "mba";
  if (str.includes("ca") || str.includes("chartered")) return "ca";
  if (str.includes("cs") || str.includes("company secretary")) return "cs";

  if (str.includes("m.a.") || str.includes("m.a ") || str.includes("ma ") || str.includes("master of arts")) return "ma";
  if (str.includes("b.a.") || str.includes("b.a ") || str.includes("ba ") || str.includes("bachelor of arts") || str.includes("bjmc") || str.includes("journalism")) {
    if (str.includes("bjmc") || str.includes("journalism")) return "bjmc";
    return "ba";
  }
  if (str.includes("bfa") || str.includes("fine arts")) return "bfa";
  if (str.includes("b.ed") || str.includes("bed") || str.includes("education")) return "bed";

  if (str.includes("m.sc") || str.includes("msc") || str.includes("master of science")) return "msc";
  if (str.includes("b.sc") || str.includes("bsc") || str.includes("bachelor of science")) return "bsc";
  if (str.includes("m.tech") || str.includes("mtech") || str.includes("master of technology")) return "mtech";
  if (str.includes("b.tech") || str.includes("btech") || str.includes("b.s. cs") || str.includes("bachelor of technology")) return "btech";
  if (str.includes("mca") || str.includes("master of computer applications")) return "mca";
  if (str.includes("bca") || str.includes("bachelor of computer applications")) return "bca";

  return "mcom";
};

export const isCourseMatchingKey = (courseObj, targetKey) => {
  if (!courseObj) return false;
  const courseKey = courseObj.courseKey || getCourseKey(courseObj.shortCode || courseObj.name || courseObj.id);
  if (courseKey === targetKey) return true;

  const str = ((courseObj.shortCode || "") + " " + (courseObj.name || "") + " " + (courseObj.id || "")).toLowerCase();
  if (targetKey === "bcom" && (str.includes("b.com") || str.includes("bcom"))) return true;
  if (targetKey === "mcom" && (str.includes("m.com") || str.includes("mcom"))) return true;
  if (targetKey === "btech" && (str.includes("b.tech") || str.includes("btech") || str.includes("b.s. cs"))) return true;
  if (targetKey === "mtech" && (str.includes("m.tech") || str.includes("mtech"))) return true;
  if (targetKey === "ba" && (str.includes("b.a.") || str.includes("ba "))) return true;
  if (targetKey === "ma" && (str.includes("m.a.") || str.includes("ma "))) return true;
  if (targetKey === "bsc" && (str.includes("b.sc") || str.includes("bsc"))) return true;
  if (targetKey === "msc" && (str.includes("m.sc") || str.includes("msc"))) return true;
  if (targetKey === "bca" && str.includes("bca")) return true;
  if (targetKey === "mca" && str.includes("mca")) return true;
  if (targetKey === "bba" && str.includes("bba")) return true;
  if (targetKey === "mba" && str.includes("mba")) return true;
  if (targetKey === "ca" && str.includes("ca")) return true;
  if (targetKey === "cs" && str.includes("cs")) return true;
  return false;
};

export const filterCoursesByCourse = (selectedCourseStr, collegeId = null) => {
  const targetKey = getCourseKey(selectedCourseStr);
  const matched = COURSES.filter(c => {
    const matchesCollege = collegeId ? c.collegeId === collegeId : true;
    return matchesCollege && isCourseMatchingKey(c, targetKey);
  });
  if (matched.length > 0) return matched;

  // Fallback: if specific collegeId has no match, return all courses matching targetKey
  return COURSES.filter(c => isCourseMatchingKey(c, targetKey));
};

export const collegeOffersCourse = (college, targetKey) => {
  return COURSES.some(c => c.collegeId === college.id && isCourseMatchingKey(c, targetKey));
};

export const filterCollegesByCourse = (selectedCourseStr, universityId = null) => {
  const targetKey = getCourseKey(selectedCourseStr);
  const collegesOfferingCourse = COLLEGES.filter(col => collegeOffersCourse(col, targetKey));
  
  if (universityId) {
    const uniSpecific = collegesOfferingCourse.filter(col => col.universityId === universityId);
    if (uniSpecific.length > 0) return uniSpecific;
  }
  
  return collegesOfferingCourse.length > 0 ? collegesOfferingCourse : COLLEGES;
};

export const universityOffersCourse = (university, targetKey) => {
  const uniColleges = COLLEGES.filter(col => col.universityId === university.id);
  return uniColleges.some(col => collegeOffersCourse(col, targetKey));
};

export const filterUniversitiesByCourse = (selectedCourseStr) => {
  const targetKey = getCourseKey(selectedCourseStr);
  const matchedUnis = UNIVERSITIES.filter(uni => universityOffersCourse(uni, targetKey));
  return matchedUnis.length > 0 ? matchedUnis : UNIVERSITIES;
};

export const filterSubjectsByCourse = (selectedCourseStr) => {
  const targetKey = getCourseKey(selectedCourseStr);
  const matchingCourses = filterCoursesByCourse(selectedCourseStr);
  const matchingCourseIds = new Set(matchingCourses.map(c => c.id));
  
  let result = SUBJECTS.filter(s => matchingCourseIds.has(s.courseId) || getCourseKey(s.courseId) === targetKey || getCourseKey(s.id) === targetKey);
  if (result.length === 0) {
    const matchingCourse = matchingCourses[0] || COURSES[0];
    result = getSubjectsForSemester("sem-1", matchingCourse.id);
  }
  return result;
};

export const filterBooksByCourse = (selectedCourseStr) => {
  const courseSubjects = filterSubjectsByCourse(selectedCourseStr);
  const books = [];
  
  courseSubjects.forEach(sub => {
    if (sub.books && sub.books.length > 0) {
      sub.books.forEach(b => {
        books.push({
          ...b,
          subjectCode: sub.code,
          subjectName: sub.name,
          courseId: sub.courseId,
          subjectObj: sub
        });
      });
    }
  });
  return books;
};

export const filterVideosByCourse = (selectedCourseStr) => {
  const courseSubjects = filterSubjectsByCourse(selectedCourseStr);
  const videos = [];
  
  courseSubjects.forEach(sub => {
    if (sub.videos && sub.videos.length > 0) {
      sub.videos.forEach(v => {
        videos.push({
          ...v,
          subjectCode: sub.code,
          subjectName: sub.name,
          courseId: sub.courseId,
          subjectObj: sub
        });
      });
    }
  });
  return videos;
};
