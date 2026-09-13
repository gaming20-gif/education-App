// Education Portal Core Data Repository

export const UNIVERSITIES = [
  {
    id: "kskvku",
    name: "Krantiguru Shyamji Krishna Verma Kutch University",
    shortName: "KSKVKU",
    code: "KSKVKU-505",
    location: "Bhuj, Kutch, Gujarat, India",
    established: "2003",
    type: "State University",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    collegesCount: 69,
    description: "Premier state university in Bhuj, Kutch, Gujarat offering comprehensive Commerce, Science, Arts, Education, Management, Law, and Computer Applications degrees."
  }
];

export const COLLEGES = [
  {
    id: "kskvku-rrlalan",
    universityId: "kskvku",
    name: "R. R. Lalan College, Bhuj",
    shortName: "RR Lalan Bhuj",
    type: "Government",
    department: "Arts & Science",
    address: "College Road, Bhuj – Kachchh. 370 001",
    established: "1953-54",
    phone: "02832-250 117",
    fax: "02832-250 117",
    email: "prinrrlc@gmail.com",
    naac: "B++",
    principal: "Dr. C.S. Jhala",
    mobile: "90991 25033",
    coursesOffered: ["B.A. (3 Yrs)", "B.Sc. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=80",
    description: "Historic government college offering undergraduate degrees in Arts and Science.",
    coursesCount: 2
  },
  {
    id: "kskvku-ssv",
    universityId: "kskvku",
    name: "Sheth Shoorji Vallabhadas Arts & Commerce College, Mandvi",
    shortName: "SSV Mandvi",
    type: "Granted In Aid",
    department: "Arts & Commerce",
    address: "Nagalpar Road, Mandvi – Kachchh. 370 465",
    established: "1966-67",
    phone: "02834-223 115",
    fax: "02834-223 115",
    email: "ssv_college@yahoo.co.in",
    principal: "I/C Shri. Dr. M. M. Barad",
    mobile: "98248 78123",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)", "M.A. (Economics, Psychology) (2 Yrs)", "M.Com. (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80",
    description: "Prominent grant-in-aid institution in Mandvi providing UG and PG studies in Arts and Commerce.",
    coursesCount: 4
  },
  {
    id: "kskvku-tcas",
    universityId: "kskvku",
    name: "Tolani College of Arts & Science, Adipur",
    shortName: "TCAS Adipur",
    type: "Granted In Aid",
    department: "Arts & Science",
    address: "Nr. Railway Station, Adipur – Kachchh. 370 205",
    established: "1962",
    phone: "02836-260 698",
    email: "tcasadipur@yahoo.co.in",
    web: "www.tcas.ac.in",
    naac: "B+",
    principal: "Dr. S.G. Dharmani",
    mobile: "94082 47444",
    coursesOffered: ["B.A. (3 Yrs)", "B.Sc (3 Yrs)", "M.A. (2 Yrs)", "M.Sc. Microbiology (SF) (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&auto=format&fit=crop&q=80",
    description: "NAAC B+ accredited college under Gandhidham Collegiate Board specializing in Arts & Science.",
    coursesCount: 4
  },
  {
    id: "kskvku-sdlaw",
    universityId: "kskvku",
    name: "Sheth Dosabhai Lalchand Law College, Bhuj",
    shortName: "Sheth D.L. Law",
    type: "Granted In Aid",
    department: "Law",
    address: "College Road, Bhuj – Kachchh. 370 001",
    established: "1969-70",
    phone: "02832-253 069",
    email: "lawcollegebhuj@yahoo.co.in",
    principal: "I/C Shri J.R. Gohil",
    mobile: "98245 00800",
    coursesOffered: ["L.L.B (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=80",
    description: "Premier law college managed by People's Education Society offering 3-year L.L.B degrees.",
    coursesCount: 1
  },
  {
    id: "kskvku-sdshethia",
    universityId: "kskvku",
    name: "S. D. Shethia College of Education, Mundra",
    shortName: "S.D. Shethia B.Ed",
    type: "Granted In Aid",
    department: "Education",
    address: "Anjar Road, Mundra – Kachchh. 370 421",
    established: "1970-71",
    phone: "02838-222 156",
    fax: "02838-222 156",
    email: "sdsbeb54@yahoo.com.in",
    web: "www.sdsbedmundra.org",
    naac: "B",
    principal: "I/C Dr. L. V. Fafal",
    mobile: "98256 55897",
    coursesOffered: ["B.Ed. (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=80",
    description: "Established teacher training institute managed by Sheth R. D. Education Trust in Mundra.",
    coursesCount: 1
  },
  {
    id: "kskvku-jbthacker",
    universityId: "kskvku",
    name: "Shri J.B. Thacker Commerce College, Bhuj",
    shortName: "J.B. Thacker Bhuj",
    type: "Granted In Aid",
    department: "Commerce",
    address: "College Road, Bhuj – Kachchh. 370 001",
    established: "1970-71",
    phone: "02832-220 596",
    email: "jbtcollegebhuj@gmail.com",
    principal: "I/C Dr. Maulik Barot",
    mobile: "94081 97927",
    coursesOffered: ["B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80",
    description: "Reputed commerce college in Bhuj under People's Education Society.",
    coursesCount: 1
  },
  {
    id: "kskvku-tcc",
    universityId: "kskvku",
    name: "Tolani Commerce College, Adipur",
    shortName: "TCC Adipur",
    type: "Granted In Aid",
    department: "Commerce",
    address: "Post Box No. 27, Adipur – Kachchh. 370 205",
    established: "1973-74",
    phone: "02836-260 623",
    fax: "02836-263 429",
    email: "tcc@tolani.org",
    web: "www.tolan.org",
    naac: "B",
    principal: "Dr. Manish K. Pandya",
    mobile: "94269 99192",
    coursesOffered: ["B.Com. (3 Yrs)", "M.Com (2 Yrs)", "B.Com. Professional (SF) (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=80",
    description: "Leading commerce institution under Gandhidham Collegiate Board offering UG & PG commerce degrees.",
    coursesCount: 3
  },
  {
    id: "kskvku-nakhatrana",
    universityId: "kskvku",
    name: "Ramani Arts & Khetani Commerce College, Nakhatrana",
    shortName: "Ramani & Khetani College",
    type: "Granted In Aid",
    department: "Arts & Commerce",
    address: "Lakhpat Road, Nakhatrana – Kachchh",
    established: "2001-02",
    phone: "6354554435",
    email: "gmdccollegenkt@gmail.com",
    principal: "Dr. Vishnuprasad Chandrakant Trivedi",
    mobile: "98793 21701",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&auto=format&fit=crop&q=80",
    description: "GMDC sponsored grant-in-aid college providing quality Arts and Commerce programs in Nakhatrana.",
    coursesCount: 2
  },
  {
    id: "kskvku-dadadukhayal",
    universityId: "kskvku",
    name: "Dada Dukhayal College of Education (Hindi Medium), Adipur",
    shortName: "Dada Dukhayal B.Ed",
    type: "Self Finance",
    department: "Education",
    address: "3-A, Maitri School Campus, Adipur - Kachchh",
    established: "2004-05",
    phone: "02836-263333",
    fax: "02836-263333",
    email: "b_ed@ddceadipur.org",
    web: "www.ddceadipur.org",
    naac: "B",
    principal: "I/C Shri Vinod Katua",
    mobile: "81539 83020",
    coursesOffered: ["B.Ed. (Hindi Medium) (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=80",
    description: "NAAC B accredited Hindi medium teacher training college under Gandhidham Maitri Mandal.",
    coursesCount: 1
  },
  {
    id: "kskvku-gajwani",
    universityId: "kskvku",
    name: "Dr. H. R. Gajwani College of Education (English Medium), Adipur",
    shortName: "Dr. H.R. Gajwani B.Ed",
    type: "Self Finance",
    department: "Education & Guidance",
    address: "Plot No. 2, DC-3, B/H Chandan Furniture Mall, Adipur - Kachchh 370205",
    established: "2005-06",
    phone: "02836-260285",
    email: "hrgce2005@gmail.com",
    web: "www.gajwani.in",
    naac: "B",
    principal: "I/C Dr. Tulna Sharma",
    mobile: "94272 19702",
    coursesOffered: ["B.Ed. (English Medium) (2 Yrs)", "P.G.D.G.C. (1 Yr)"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80",
    description: "Self-financed English medium teacher education and guidance diploma college in Adipur.",
    coursesCount: 2
  },
  {
    id: "kskvku-tic",
    universityId: "kskvku",
    name: "Tolani Institute of Commerce (English Medium), Adipur",
    shortName: "TIC Adipur",
    type: "Self Finance",
    department: "Commerce",
    address: "Tolani Commerce College Compound, Post Box No.27, Adipur- Kachchh",
    established: "2005-06",
    phone: "02836-261900",
    fax: "02836-263861",
    email: "tic@tolani.org",
    web: "www.tolani.org/tic",
    principal: "I/C Shri A. Kella",
    mobile: "94272 01404",
    coursesOffered: ["B.Com (English Medium) (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80",
    description: "English medium commerce institute under Gandhidham Collegiate Board.",
    coursesCount: 1
  },
  {
    id: "kskvku-muktajivan",
    universityId: "kskvku",
    name: "Muktajivan Swamibapa Mahila Arts & Commerce College, Bhuj",
    shortName: "Muktajivan Mahila College",
    type: "Self Finance",
    department: "Arts, Commerce & Computer Science",
    address: "Nr. Kachchh University Campus, Mundra Road, Bhuj – Kachchh. 370 001",
    established: "2005-06",
    phone: "02832-235023",
    email: "mjsb.girlscollege@gmail.com",
    web: "www.muktajeevangirlscollege.com",
    principal: "I/C Shri Smt. H. N. Ganger",
    mobile: "94271 25119",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)", "B.S. Computer Science (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80",
    description: "Premier self-financed women's college offering Arts, Commerce, and Computer Science degrees.",
    coursesCount: 3
  },
  {
    id: "kskvku-palan",
    universityId: "kskvku",
    name: "Smt. H.B. Palan College of Arts & Commerce, Anjar",
    shortName: "H.B. Palan Anjar",
    type: "Self Finance",
    department: "Commerce",
    address: "Survey No.156, Meghpar - Kumbhardi, Anjar – Kachchh",
    established: "2006-07",
    phone: "02836-240908",
    fax: "02836-242908",
    email: "campuscoord@aes.edu.in",
    web: "www.aes.edu.in",
    principal: "I/C Dr. Shilpa Bhatt",
    mobile: "98798 52301",
    coursesOffered: ["B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80",
    description: "Anjar Education Society managed self-financed commerce college in Anjar.",
    coursesCount: 1
  },
  {
    id: "kskvku-srk-social",
    universityId: "kskvku",
    name: "SRK Institute of Social Science, Anjar",
    shortName: "SRK Social Science",
    type: "Self Finance",
    department: "Social Work & Labor Welfare",
    address: "Survey No.128 / 2, Anjar-Bhuj Highway, Sapeda, Ta. Anjar - Kachchh",
    established: "2006-07",
    phone: "02836-220103",
    fax: "02836-223560",
    email: "info@srkinstitute.com",
    web: "www.srkinstitute.com",
    principal: "I/C Shri Surbhiben Kangad",
    mobile: "90990 6338",
    coursesOffered: ["M.L.W (Master of Labor Welfare) (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=80",
    description: "Shri Karmaniketan Trust institute offering Master of Labor Welfare (M.L.W).",
    coursesCount: 1
  },
  {
    id: "kskvku-srk-management",
    universityId: "kskvku",
    name: "SRK Institute of Management and Computer Education, Anjar",
    shortName: "SRK Management & CS",
    type: "Self Finance",
    department: "Management & Computing",
    address: "Survey No.128 / 2, Anjar-Bhuj Highway, Sapeda, Ta. Anjar - Kachchh",
    established: "2006-07",
    phone: "02836-220103",
    fax: "02836-223560",
    email: "info@srkinstitute.com",
    web: "www.srkinstitute.com",
    principal: "I/C Shri Nirdesh Buch",
    mobile: "94270 89031",
    coursesOffered: ["B.B.A. (3 Yrs)", "B.C.A (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80",
    description: "Professional management and computer education college offering BBA & BCA.",
    coursesCount: 2
  },
  {
    id: "kskvku-keniya",
    universityId: "kskvku",
    name: "Keniya & Shah Arts & Commerce College, Mundra",
    shortName: "Keniya & Shah Mundra",
    type: "Self Finance",
    department: "Arts & Commerce",
    address: "Opp. Kudarati Upchar Kendra, Mundra – Kachchh",
    established: "2006-07",
    phone: "02838-222991",
    email: "kamundracollege@gmail.com",
    principal: "I/C Dr. D.R. Kharadi",
    mobile: "95372 81852",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&auto=format&fit=crop&q=80",
    description: "Sheth R.D. Education Trust self-financed college in Mundra for Arts and Commerce.",
    coursesCount: 2
  },
  {
    id: "kskvku-vdthacker",
    universityId: "kskvku",
    name: "Smt. V.D. Thacker College of Education, Gandhidham",
    shortName: "V.D. Thacker B.Ed",
    type: "Self Finance",
    department: "Education",
    address: "Sahri Swarswti School Campus, Ward - 11- B, Bharatnagar, Gandhidham-Kachchh",
    established: "2006-07",
    phone: "02836-222819",
    fax: "02836-235034",
    email: "vdtbedgandhidham@yahoo.com",
    web: "www.jalaramEdu.org",
    principal: "I/C Shri Vinayak V. Acharya",
    mobile: "90333 40343",
    coursesOffered: ["B.Ed. (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=80",
    description: "Shri Jalaram Kedavni Mandal teacher education college in Gandhidham.",
    coursesCount: 1
  },
  {
    id: "kskvku-md-bed",
    universityId: "kskvku",
    name: "M D College of Education, Bhuj",
    shortName: "M D College B.Ed",
    type: "Self Finance",
    department: "Education",
    address: "Haripar Road, Bhuj – Kachchh. 370 001",
    established: "2007-08",
    phone: "02832-230060",
    fax: "02832-231580",
    email: "mdcollege.2008@yahoo.com",
    web: "www.mdeducationcollege.com",
    principal: "I/C Dr. Himanshu Patel",
    mobile: "94170 44139",
    coursesOffered: ["B.Ed. (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=80",
    description: "Gorasia Education Society self-financed B.Ed teacher education college.",
    coursesCount: 1
  },
  {
    id: "kskvku-tolani-law",
    universityId: "kskvku",
    name: "Tolani Motwani Institute of Law, Adipur",
    shortName: "Tolani Law Adipur",
    type: "Self Finance",
    department: "Law",
    address: "Opp. Pharmacy College Building, Hotel Mid Town, Adipur- Kachchh",
    established: "2007-08",
    phone: "02836-260080",
    fax: "02836-260446",
    email: "tolanilaw@gmail.com",
    web: "www.tolani.org/til",
    principal: "I/C Dr. Ruchi D. Trehan",
    mobile: "99139 99809",
    coursesOffered: ["L.L.B. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=80",
    description: "Law institute under Gandhidham Collegiate Board offering 3-year L.L.B programs.",
    coursesCount: 1
  },
  {
    id: "kskvku-sanskar",
    universityId: "kskvku",
    name: "Sanskar Institute of Management & Information Technology, Bhuj",
    shortName: "Sanskar Institute Bhuj",
    type: "Self Finance",
    department: "Management & IT",
    address: "Survey No. 798, Hill Garden-Airport Ring Road, Near Air Port, Bhuj – Kachchh. 370 001",
    established: "2008-09",
    phone: "02832-653058",
    fax: "02832-229505",
    email: "info@sanskareducation.org",
    web: "www.sanskareducation.org",
    principal: "I/C Shri Dhiraj Solanki",
    coursesOffered: ["B.B.A. (3 Yrs)", "B.C.A. (3 Yrs)", "B.Com. (Honors) (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80",
    description: "Shri Sanskar Education Trust institute for BBA, BCA, B.Com (Hons), and B.Com.",
    coursesCount: 4
  },
  {
    id: "kskvku-vimca",
    universityId: "kskvku",
    name: "Veerayatan Institute of Computer Application & Business Administration",
    shortName: "VIMCA Mandvi",
    type: "Self Finance",
    department: "Computer Applications & Management",
    address: "Jakhniya Road, Mandvi – Kachchh",
    established: "2008-09",
    phone: "02834-275 268",
    fax: "02834-275268",
    email: "VIMCA@veerayatan.org",
    web: "www.veerayatan.org",
    principal: "I/C Shri Dhavalsinh Rathod",
    mobile: "98252 14650",
    coursesOffered: ["B.B.A. (3 Yrs)", "B.C.A. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80",
    description: "Veerayatan Vidhyapith self-financed institute in Mandvi offering BBA and BCA degrees.",
    coursesCount: 2
  },
  {
    id: "kskvku-pgdhrm",
    universityId: "kskvku",
    name: "P.G.D.H.R.M. College, Anjar",
    shortName: "PGDHRM College Anjar",
    type: "Self Finance",
    department: "Human Resource Management",
    address: "Survey No.156, Meghpar – Kumbhardi, Anjar – Kachchh",
    established: "2008-09",
    phone: "02836-394 174",
    fax: "02836-242 908",
    email: "campuscoord@aes.edu.in",
    web: "www.aes.edu.in",
    principal: "I/C Dr. Shilpa Bhatt",
    mobile: "98798 52301",
    coursesOffered: ["P.G.D.H.R.M. (1 Yr)"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80",
    description: "Anjar Education Society post-graduate diploma college specializing in Human Resource Management.",
    coursesCount: 1
  },
  {
    id: "kskvku-dnv",
    universityId: "kskvku",
    name: "D.N.V. International Educational Academy, Gandhidham",
    shortName: "DNV Academy Gandhidham",
    type: "Self Finance",
    department: "Business & Computing",
    address: "Ward No.9 / A, Plot No.03, Gandhidham – Kachchh",
    established: "2009-10",
    phone: "02836-257 334",
    fax: "02836-260 285",
    email: "dnvacademy@gmail.com",
    web: "www.dnv.ac.in",
    principal: "I/C Shri Sandip Lodariya",
    mobile: "99981 99470",
    coursesOffered: ["B.B.A. (3 Yrs)", "B.C.A. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80",
    description: "Shri Holmataji Charitable Trust self-financed academy offering BBA and BCA in Gandhidham.",
    coursesCount: 2
  },
  {
    id: "kskvku-bmcb-nursing",
    universityId: "kskvku",
    name: "BMCB College of Nursing, Bhuj",
    shortName: "BMCB Nursing Bhuj",
    type: "Self Finance",
    department: "Nursing & Health Sciences",
    address: "City Square Township, Nr. Sekhpir Dargaah, At. Lakhond, Ta. Bhuj – Kachchh",
    established: "2009-10",
    phone: "02832-271 215",
    fax: "02832-229 505",
    email: "bmcbcollegeofnursing.yahoo.in",
    web: "www.bmcbet.org",
    principal: "C. Ambika",
    mobile: "96874 04164",
    coursesOffered: ["B.Sc. Nursing (4 Yrs)", "M.Sc. Nursing (2 Yrs)", "P.B.Sc. Nursing (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80",
    description: "Shri Ajaramarji Charitable Trust premier nursing college providing UG and PG nursing degrees.",
    coursesCount: 3
  },
  {
    id: "kskvku-gaims",
    universityId: "kskvku",
    name: "Gujarat Adani Institute of Medical Sciences (GAIMS), Bhuj",
    shortName: "GAIMS Medical Bhuj",
    type: "Self Finance",
    department: "Medical & Health Sciences",
    address: "G.K. General Hospital, Bhuj – Kachchh",
    established: "2009-10",
    phone: "02832-258 071",
    fax: "02832-258 080",
    email: "dean@gaims.ac.in",
    web: "gaims.ac.in",
    principal: "Dean Dr. A.N. Ghosh",
    mobile: "94266 00413",
    coursesOffered: ["M.B.B.S. (4 Yrs)", "M.D. (Anatomy, Physio, Derm, Micro, Patho, Peds, Medicine, Psych, Emergency)", "M.S. (Surgery, ENT, OBG, Ortho)", "D.M.L.T., D.R.I.T., D.R.D.T."],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&fit=crop&q=80",
    description: "Adani Education & Research Foundation premier medical institute providing MBBS, MD, MS, and medical diplomas.",
    coursesCount: 20
  },
  {
    id: "kskvku-sgj",
    universityId: "kskvku",
    name: "SGJ College, Mandvi",
    shortName: "SGJ College Mandvi",
    type: "Self Finance",
    department: "Management, Computer Applications & Arts",
    address: "Shri Swaminarayan Gurukul, Bhuj-Mandvi Highway, Koday Pul, Mandvi – 370 460",
    established: "2010-11",
    phone: "02834-275 603",
    fax: "02834-275 603",
    email: "adm.hirenvyas@gmail.com",
    web: "www.sgjmba.co.in",
    principal: "I/C Dr. Ashish Jethwa",
    mobile: "96898 19316",
    coursesOffered: ["B.B.A. (3 Yrs)", "B.C.A. (3 Yrs)", "B.A. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80",
    description: "Shri Swaminarayan Sarvoday Trust college offering BBA, BCA, and BA in Mandvi.",
    coursesCount: 3
  },
  {
    id: "kskvku-vanivinayak",
    universityId: "kskvku",
    name: "Shree Vani Vinayak Arts & Commerce College, Bhachau",
    shortName: "Vani Vinayak Bhachau",
    type: "Self Finance",
    department: "Arts & Commerce",
    address: "Opp. Municipality, Bhachau, Kachchh 370 140",
    established: "2010-11",
    phone: "02837-291 044",
    email: "slpbbhachau@yahoo.com",
    web: "www.levapatidarboarding.com",
    principal: "I/C Shri Dinesh Parmar",
    mobile: "92284 13207",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&auto=format&fit=crop&q=80",
    description: "Shree Leva Patidar Boarding self-financed Arts and Commerce college in Bhachau.",
    coursesCount: 2
  },
  {
    id: "kskvku-rajabhai",
    universityId: "kskvku",
    name: "Shri Rajabhai Patel College of Commerce and Economics, Adipur",
    shortName: "Rajabhai Patel College Adipur",
    type: "Self Finance",
    department: "Commerce & Economics",
    address: "Post Box No.: 23, Ward No.: 6 / A, Adipur - Kachchh",
    established: "2011-12",
    phone: "02836-232 560",
    email: "rpcee-2011@rediffmail.com",
    principal: "I/C Shri Purviben Thacker",
    mobile: "81607 12444",
    coursesOffered: ["B.Com. (English & Gujarati Mid) (3 Yrs)", "B.A. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80",
    description: "Shri Gujarat Education Society self-financed college for Commerce, Economics, and Arts.",
    coursesCount: 2
  },
  {
    id: "kskvku-bhanushali",
    universityId: "kskvku",
    name: "Shri Late Aniruddha Jayantilal Parsotam Bhanushali Arts & Commerce College, Abdasa",
    shortName: "Bhanushali College Mothada",
    type: "Self Finance",
    department: "Arts & Commerce",
    address: "At. Mothada Po. Kanakpur Road, Ta. Abdasa - Kachchh",
    established: "2011-12",
    phone: "02831-272 372",
    email: "ajpbkanakpar2011@gmail.com",
    principal: "I/C Shri Bhupendra N. Gusai",
    mobile: "95865 06590",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80",
    description: "Shri Shyamji Krushnaversm Charitable Trust self-financed college in Abdasa.",
    coursesCount: 2
  },
  {
    id: "kskvku-govt-science-mandvi",
    universityId: "kskvku",
    name: "Government Science College, Mandvi",
    shortName: "Govt Science Mandvi",
    type: "Government",
    department: "Environmental & Marine Science",
    address: "C/O SSV College Campus, Nagalpar Road, Mandvi – Kachchh. 370 465",
    established: "2011-12",
    phone: "02834-224 401",
    principal: "Dr. K.K. Budhbhatti",
    mobile: "98792 26010",
    coursesOffered: ["B.Sc. Environmental Science & Marine Science (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=80",
    description: "Government specialized science college offering Environmental and Marine Science B.Sc degrees.",
    coursesCount: 1
  },
  {
    id: "kskvku-gacc-rapar",
    universityId: "kskvku",
    name: "Government Arts and Commerce College, Rapar",
    shortName: "Govt College Rapar",
    type: "Government",
    department: "Arts & Commerce",
    address: "Rapar – Kachchh",
    established: "2011-12",
    email: "gaccrapar@gmail.com",
    principal: "Dr. Paresh Raval",
    mobile: "94274 42662",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=80",
    description: "Government arts and commerce college serving students in Rapar region.",
    coursesCount: 2
  },
  {
    id: "kskvku-ashapura-bed",
    universityId: "kskvku",
    name: "Maa Ashapura College of Education, Bhuj",
    shortName: "Maa Ashapura B.Ed Bhuj",
    type: "Self Finance",
    department: "Education",
    address: "Maa Ashapura Educational Complex, Pramukhswami Nagar Road, Bhuj - Kachchh",
    established: "2012-13",
    phone: "02832-231 781",
    principal: "I/C Dr. Pallavi Shah",
    mobile: "94295 47965",
    coursesOffered: ["B.Ed. (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=80",
    description: "Shri Shiv Shakti Study Circle Trust self-financed B.Ed teacher education college in Bhuj.",
    coursesCount: 1
  },
  {
    id: "kskvku-sahjanand-girls",
    universityId: "kskvku",
    name: "Shri Sahjanand Girls Institute, Bhuj",
    shortName: "Sahjanand Girls Bhuj",
    type: "Self Finance",
    department: "Arts & Commerce",
    address: "Shri Swaminarayan Kanya Mandir, Bhuj - Mirzapar Road, Bhuj - Kachchh",
    established: "2012-13",
    phone: "02832-232 022",
    email: "sskvmandir@yahoo.co.in",
    principal: "I/C Shri Bhudiya Manish G.",
    coursesOffered: ["B.A. (English & Gujarati Mid) (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80",
    description: "Self-financed women's institute providing undergraduate Arts and Commerce programs in Bhuj.",
    coursesCount: 2
  },
  {
    id: "kskvku-pgdspm",
    universityId: "kskvku",
    name: "P.G.D.S.P.M. College, Anjar",
    shortName: "PGDSPM College Anjar",
    type: "Self Finance",
    department: "Safety & Plant Management",
    address: "Survey No:156, Meghpar-Kumbhardi, Anjar- Kachchh",
    established: "2012-13",
    phone: "02836-394 174",
    fax: "02836-242 908",
    email: "campuscoord@aes.edu.in",
    web: "www.aes.edu.in",
    principal: "I/C Dr. Shilpa Bhatt",
    mobile: "98798 52301",
    coursesOffered: ["P.G.D.S.P.M. (Safety & Plant Management) (1 Yr)"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80",
    description: "Anjar Education Society post-graduate diploma college in Safety & Plant Management.",
    coursesCount: 1
  },
  {
    id: "kskvku-chankya-vidhyapith",
    universityId: "kskvku",
    name: "Chankya Vidhyapith (English Medium), Bhuj",
    shortName: "Chankya Vidhyapith Bhuj",
    type: "Self Finance",
    department: "Commerce",
    address: "109, Lotus Colony, Opp. G.K. General Hospital, Bhuj – Kachchh",
    established: "2015-16",
    phone: "02832-235 050",
    email: "chanakya.bhuj@gmail.com",
    web: "www.chankyaacademy.com",
    principal: "I/C Shri Namrata Thacker",
    mobile: "88493 73863",
    coursesOffered: ["B.Com. (English Medium) (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80",
    description: "Takshshila Education & Charitable Trust English medium commerce college in Bhuj.",
    coursesCount: 1
  },
  {
    id: "kskvku-maheta-mahila",
    universityId: "kskvku",
    name: "Smt. Niranjana Pankaj Maheta Mahila College, Rapar",
    shortName: "Maheta Mahila Rapar",
    type: "Self Finance",
    department: "Arts & Commerce",
    address: "Akatanagar corner, Cours road, Rapar- Kachchh",
    established: "2015-16",
    phone: "6354763501",
    email: "npmahetaac15@gmail.com",
    principal: "I/C Shri M.M. Jadeja",
    mobile: "63547 99101",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&auto=format&fit=crop&q=80",
    description: "Self-financed women's college offering B.A. and B.Com programs in Rapar.",
    coursesCount: 2
  },
  {
    id: "kskvku-lakhpataji-govt",
    universityId: "kskvku",
    name: "Maharavshree Lakhpataji Government Arts and Commerce College, Dayapar",
    shortName: "Govt College Dayapar",
    type: "Government",
    department: "Arts & Commerce",
    address: "Dayapar, Ta- Lakhpat",
    established: "2016-17",
    phone: "02839-250 117",
    email: "prinrrlc@gmail.com",
    principal: "I/C Dr. Komal Vaniya",
    mobile: "98794 20787",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=80",
    description: "Government arts and commerce college located in Dayapar, Lakhpat taluka.",
    coursesCount: 2
  },
  {
    id: "kskvku-chankya-physio",
    universityId: "kskvku",
    name: "Chankya College of Physiotherapy, Bhuj",
    shortName: "Chankya Physiotherapy Bhuj",
    type: "Self Finance",
    department: "Physiotherapy & Rehabilitation",
    address: "109, Lotus Colony, Opp. G.K. General Hospital, Bhuj – Kachchh",
    established: "2016-17",
    phone: "02832-235 050",
    email: "info@chanakyaacademy.com",
    web: "www.chankyaacademy.com",
    principal: "I/C Dr. Vijay Tripathi",
    mobile: "79851 34434",
    coursesOffered: ["B.P.T. (Bachelor of Physio) (4 Yrs)", "M.P.T. (Master of Physio) (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=80",
    description: "Takshshila Education & Charitable Trust college offering B.P.T and M.P.T physiotherapy programs.",
    coursesCount: 2
  },
  {
    id: "kskvku-sklp-nursing",
    universityId: "kskvku",
    name: "SKLP Nursing Institute Of Education and Practice, Bhuj",
    shortName: "SKLP Nursing Bhuj",
    type: "Self Finance",
    department: "Nursing & Healthcare",
    address: "Suraj ShikshanDham, Haripar – Tapkeshwari Road, Bhuj – Kachchh",
    established: "2018-19",
    phone: "9328408794 / 9925453965",
    fax: "02832-211133",
    email: "sklpnursinginstitute@gmail.com",
    principal: "Dr. Punit Gangawat",
    mobile: "9408354045",
    coursesOffered: ["B.Sc. Nursing (4 Yrs)", "M.Sc. Nursing (2 Yrs)", "P.B.Sc. Nursing (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80",
    description: "Shree Katchi Leva Patel Education and Medical Trust nursing institute offering B.Sc, M.Sc, and Post-Basic Nursing.",
    coursesCount: 3
  },
  {
    id: "kskvku-mahila-bhachau",
    universityId: "kskvku",
    name: "Mahila Arts College of Bhachau",
    shortName: "Mahila Arts Bhachau",
    type: "Self Finance",
    department: "Arts",
    address: "Bhachau - Kachchh Pin. 370 140",
    established: "2019-20",
    phone: "02837-223369",
    email: "mahilacollege11@gmail.com",
    principal: "I/C Shri Parvatsinh",
    mobile: "98256 92901",
    coursesOffered: ["B.A. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80",
    description: "Shree Sadbhav Education Trust women's arts college in Bhachau.",
    coursesCount: 1
  },
  {
    id: "kskvku-ahir-mahila-adipur",
    universityId: "kskvku",
    name: "Shree Tejabhai Memabhai Ahir & Surabhai Devabhai Ahir Mahila College, Adipur",
    shortName: "Ahir Mahila College Adipur",
    type: "Self Finance",
    department: "Arts & Commerce",
    address: "Ward No. 5/A, Post Box No. 25, Adipur - Kachchh",
    established: "2020-21",
    phone: "02836-230731",
    email: "mahilacollege11@gmail.com",
    principal: "I/C Dr. Deepa Parmar",
    mobile: "84018 46159",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80",
    description: "Shree Kachchh Machhoya Ahir Samaj self-financed women's Arts and Commerce college in Adipur.",
    coursesCount: 2
  },
  {
    id: "kskvku-gokul-arts-mandvi",
    universityId: "kskvku",
    name: "Shree Gokul Arts College, Mandvi",
    shortName: "Gokul Arts Mandvi",
    type: "Self Finance",
    department: "Arts",
    address: "Layja Road, Mandvi – Kachchh",
    established: "2021-22",
    phone: "99258 46066",
    email: "gokulartscollege@gmail.com",
    principal: "I/C Dr. Dhaval Patel",
    mobile: "94273 22617",
    coursesOffered: ["B.A. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=80",
    description: "Sheth Gokaldas Hansraj Memorial Trust self-financed arts college in Mandvi.",
    coursesCount: 1
  },
  {
    id: "kskvku-matruvandna-arts",
    universityId: "kskvku",
    name: "Navneet – Chandravallabh Arts College, Bidada",
    shortName: "Navneet Arts Bidada",
    type: "Self Finance",
    department: "Arts (Girls Only)",
    address: "Aashram Vadi, Bidada, Mandvi - Kachchh",
    established: "2021-22",
    phone: "97127 78876",
    email: "matruvandna.edu@gmail.com",
    principal: "I/C Shri Alpaba Jadeja",
    mobile: "97127 78876",
    coursesOffered: ["B.A. (Only for Girls) (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80",
    description: "Matruvandna Charitable Trust self-financed women's arts college in Bidada, Mandvi.",
    coursesCount: 1
  },
  {
    id: "kskvku-gajwani-science",
    universityId: "kskvku",
    name: "Gajwani Institute of Science and Technology, Adipur",
    shortName: "Gajwani Science Adipur",
    type: "Self Finance",
    department: "Science & Technology",
    address: "Plot No. 2, DC-3, B/H Chandan Furniture Mall, Adipur - Kachchh 370205",
    established: "2021-22",
    phone: "02836-260285",
    fax: "02836-260285",
    email: "hrgce2005@gmail.com",
    web: "www.gajwani.in",
    naac: "B",
    principal: "I/C Dr. Vivek Gujarati",
    mobile: "97123 51231",
    coursesOffered: ["B.Sc. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=80",
    description: "Shri Kachchh District Samaj Kalyan Mandal B.Sc science institute in Adipur.",
    coursesCount: 1
  },
  {
    id: "kskvku-ssv-sf-mandvi",
    universityId: "kskvku",
    name: "Sheth Shoorji Vallabhadas Arts & Commerce College (Self Finance), Mandvi",
    shortName: "SSV Self Finance Mandvi",
    type: "Self Finance",
    department: "Arts & Humanities",
    address: "Nagalpar Road, Mandvi – Kachchh. 370 465",
    established: "2021-22",
    phone: "02834-223115",
    fax: "02834-223115",
    email: "ssv_college@yahoo.co.in",
    principal: "I/C Shri Dr. M. M. Barad",
    mobile: "98248 78123",
    coursesOffered: ["B.A. (History, English, Sociology) (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80",
    description: "Self-financed division of SSV College Mandvi offering B.A. in History, English, and Sociology.",
    coursesCount: 1
  },
  {
    id: "kskvku-matrushree-chhadva",
    universityId: "kskvku",
    name: "Matrushree Parvatiben Damjibhai Kheraj Chhadva Arts & Commerce College, Lakadiya",
    shortName: "Matrushree Chhadva Lakadiya",
    type: "Self Finance",
    department: "Arts & Commerce",
    address: "Lakadiya, Ta – Bhachau- Kachchh",
    established: "2023-24",
    phone: "02836-260285",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&auto=format&fit=crop&q=80",
    description: "Oshwal Jain Kanya Chhatralay Lakadiya self-financed Arts & Commerce college in Bhachau.",
    coursesCount: 2
  },
  {
    id: "kskvku-diet-bhuj",
    universityId: "kskvku",
    name: "District Institute of Education And Training (DIET), Bhuj",
    shortName: "DIET Bhuj",
    type: "Government",
    department: "Teacher Training & Education",
    address: "Opp. Bus Station, Bhuj – Kachchh",
    established: "2016-17",
    phone: "02832-221491",
    email: "dbhuj2046@gmail.com",
    web: "www.diet-kutch.org",
    principal: "Dr. Ranjanben Parmar",
    coursesOffered: ["B.Ed. (2 Yrs)"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=80",
    description: "Government teacher training and education institute in Bhuj.",
    coursesCount: 1
  },
  {
    id: "kskvku-gacc-naliya",
    universityId: "kskvku",
    name: "Government Commerce & Arts College, Naliya",
    shortName: "Govt College Naliya",
    type: "Government",
    department: "Commerce & Arts",
    address: "C/O Model School, At – Naliya, Abdasa – Kachchh",
    established: "2024-25",
    principal: "Dr. J.M. Patel",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=80",
    description: "Government higher education college serving the Naliya and Abdasa region.",
    coursesCount: 2
  },
  {
    id: "kskvku-govardhan-ahir",
    universityId: "kskvku",
    name: "Shree Govardhan Ahir Mahila College, Rata Tadav",
    shortName: "Govardhan Ahir Mahila Anjar",
    type: "Self Finance",
    department: "Arts & Commerce",
    address: "At - Rata tadav, Ta – Anjar - Kachchh",
    established: "2024-25",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80",
    description: "Shree Kutch Patan Prathariya Ahir Samaj women's Arts & Commerce college in Rata Tadav, Anjar.",
    coursesCount: 2
  },
  {
    id: "kskvku-gacc-anjar",
    universityId: "kskvku",
    name: "Government Arts & Commerce College, Anjar",
    shortName: "Govt College Anjar",
    type: "Government",
    department: "Arts & Commerce",
    address: "D.V. School Campus, Anjar – Kachchh",
    established: "2025-26",
    principal: "Dr. C.S. Zala",
    mobile: "99091 25033",
    coursesOffered: ["B.A. (3 Yrs)", "B.Com. (3 Yrs)"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=80",
    description: "Newly established Government Arts & Commerce college at D.V. School Campus in Anjar.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-gujarati",
    universityId: "kskvku",
    name: "Department of Gujarati (KSKVKU Campus)",
    shortName: "Gujarati Dept KSKVKU",
    type: "University Department",
    department: "Humanities & Gujarati Literature",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2004",
    phone: "02832-235000",
    email: "gujarati@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.A. Gujarati (2 Yrs)", "Ph.D. Gujarati"],
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=80",
    description: "Post-graduate teaching and research department in Gujarati language, linguistics, and literature.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-sanskrit",
    universityId: "kskvku",
    name: "Department of Sanskrit (KSKVKU Campus)",
    shortName: "Sanskrit Dept KSKVKU",
    type: "University Department",
    department: "Oriental Studies & Sanskrit",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2004",
    phone: "02832-235000",
    email: "sanskrit@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.A. Sanskrit (2 Yrs)", "Ph.D. Sanskrit"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80",
    description: "Department for advanced studies, classical literature, Vedic research, and Sanskrit grammar.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-english",
    universityId: "kskvku",
    name: "Department of English & European Languages (KSKVKU Campus)",
    shortName: "English Dept KSKVKU",
    type: "University Department",
    department: "English & Comparative Literature",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2004",
    phone: "02832-235000",
    email: "english@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.A. English (2 Yrs)", "Ph.D. English Literature"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&auto=format&fit=crop&q=80",
    description: "Post-graduate center for English literature, linguistics, cultural studies, and critical theory.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-economics",
    universityId: "kskvku",
    name: "Department of Economics (KSKVKU Campus)",
    shortName: "Economics Dept KSKVKU",
    type: "University Department",
    department: "Economics & Applied Policy",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2004",
    phone: "02832-235000",
    email: "economics@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.A. Economics (2 Yrs)", "Ph.D. Economics"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=80",
    description: "Advanced post-graduate department focusing on microeconomics, macroeconomics, econometrics, and policy analysis.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-sociology",
    universityId: "kskvku",
    name: "Department of Sociology (KSKVKU Campus)",
    shortName: "Sociology Dept KSKVKU",
    type: "University Department",
    department: "Sociology & Social Research",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2004",
    phone: "02832-235000",
    email: "sociology@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.A. Sociology (2 Yrs)", "Ph.D. Sociology"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=80",
    description: "Post-graduate department dedicated to sociological theory, research methodology, and rural-urban studies.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-psychology",
    universityId: "kskvku",
    name: "Department of Psychology (KSKVKU Campus)",
    shortName: "Psychology Dept KSKVKU",
    type: "University Department",
    department: "Behavioral Sciences & Counseling",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2005",
    phone: "02832-235000",
    email: "psychology@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.A. Psychology (2 Yrs)", "P.G. Diploma in Counseling"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80",
    description: "Post-graduate studies in clinical psychology, organizational behavior, and counseling.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-socialwork",
    universityId: "kskvku",
    name: "Department of Social Work (MSW) (KSKVKU Campus)",
    shortName: "Social Work Dept KSKVKU",
    type: "University Department",
    department: "Social Work & Community Welfare",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2005",
    phone: "02832-235000",
    email: "msw@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.S.W. (Master of Social Work) (2 Yrs)", "Ph.D. Social Work"],
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&auto=format&fit=crop&q=80",
    description: "Professional post-graduate program training experts in community development, HR, and social welfare.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-history",
    universityId: "kskvku",
    name: "Department of History (KSKVKU Campus)",
    shortName: "History Dept KSKVKU",
    type: "University Department",
    department: "History & Cultural Heritage",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2004",
    phone: "02832-235000",
    email: "history@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.A. History (2 Yrs)", "Ph.D. History"],
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=500&auto=format&fit=crop&q=80",
    description: "Department specializing in Indian history, regional Kutch history, and historiography.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-hindi",
    universityId: "kskvku",
    name: "Department of Hindi (KSKVKU Campus)",
    shortName: "Hindi Dept KSKVKU",
    type: "University Department",
    department: "Humanities & Hindi Literature",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2004",
    phone: "02832-235000",
    email: "hindi@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.A. Hindi (2 Yrs)", "Ph.D. Hindi Literature"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=80",
    description: "Post-graduate department for Hindi poetry, prose, linguistics, and functional Hindi.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-archaeology",
    universityId: "kskvku",
    name: "Department of Archaeology (KSKVKU Campus)",
    shortName: "Archaeology Dept KSKVKU",
    type: "University Department",
    department: "Archaeology & Epigraphy",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2006",
    phone: "02832-235000",
    email: "archaeology@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.A. Archaeology (2 Yrs)", "P.G. Diploma in Archaeology & Museum Studies"],
    image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=500&auto=format&fit=crop&q=80",
    description: "Premier research department focusing on Harappan civilization, Dholavira excavations, and Kutch heritage.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-education",
    universityId: "kskvku",
    name: "Department of Education (M.Ed) (KSKVKU Campus)",
    shortName: "Education Dept KSKVKU",
    type: "University Department",
    department: "Teacher Training & Educational Research",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2007",
    phone: "02832-235000",
    email: "education@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.Ed. (Master of Education) (2 Yrs)", "Ph.D. Education"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=80",
    description: "University department for master's level teacher education, curriculum development, and educational leadership.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-commerce",
    universityId: "kskvku",
    name: "Department of Commerce & Financial Studies (KSKVKU Campus)",
    shortName: "Commerce Dept KSKVKU",
    type: "University Department",
    department: "Commerce & Financial Studies",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2004",
    phone: "02832-235000",
    email: "commerce@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.Com (Master of Commerce) (2 Yrs)", "B.Com (Hons) (3 Yrs)", "BBA (3 Yrs)", "MBA (2 Yrs)", "CA", "CS"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80",
    description: "Premier post-graduate teaching and research department in Commerce, Accounting, Banking, Taxation, and Financial Management.",
    coursesCount: 6
  },
  {
    id: "kskvku-dept-management",
    universityId: "kskvku",
    name: "Department of Management Studies (MBA) (KSKVKU Campus)",
    shortName: "Management Dept KSKVKU",
    type: "University Department",
    department: "Business Administration",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2008",
    phone: "02832-235000",
    email: "mba@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.B.A. (Master of Business Admin) (2 Yrs)", "Ph.D. Management"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80",
    description: "University business department training leaders in corporate finance, marketing, HR, and operations.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-cs-campus",
    universityId: "kskvku",
    name: "Department of Computer Science & IT (KSKVKU Campus)",
    shortName: "Computer Science Dept KSKVKU",
    type: "University Department",
    department: "Computer Applications & Data Science",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2005",
    phone: "02832-235000",
    email: "cs@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.Sc. IT (2 Yrs)", "M.C.A. (2 Yrs)", "Ph.D. Computer Science"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80",
    description: "State-of-the-art computing center offering MCA, M.Sc IT, software engineering, and AI research.",
    coursesCount: 3
  },
  {
    id: "kskvku-dept-geosciences",
    universityId: "kskvku",
    name: "Department of Geosciences & Geology (KSKVKU Campus)",
    shortName: "Geosciences Dept KSKVKU",
    type: "University Department",
    department: "Earth Sciences & Geology",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2006",
    phone: "02832-235000",
    email: "geosciences@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.Sc. Geology & Earth Sciences (2 Yrs)", "Ph.D. Geosciences"],
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    description: "Renowned department in Kutch region specializing in structural geology, seismology, and palaeontology.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-chemistry",
    universityId: "kskvku",
    name: "Department of Chemistry (KSKVKU Campus)",
    shortName: "Chemistry Dept KSKVKU",
    type: "University Department",
    department: "Chemical Sciences",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2005",
    phone: "02832-235000",
    email: "chemistry@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.Sc. Organic Chemistry (2 Yrs)", "M.Sc. Analytical Chemistry (2 Yrs)", "Ph.D. Chemistry"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&auto=format&fit=crop&q=80",
    description: "Post-graduate department for organic, inorganic, physical, and analytical chemistry research.",
    coursesCount: 3
  },
  {
    id: "kskvku-dept-lifescience",
    universityId: "kskvku",
    name: "Department of Environment and Life Science (KSKVKU Campus)",
    shortName: "Environment & Life Sci KSKVKU",
    type: "University Department",
    department: "Environmental Sciences & Biotechnology",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2006",
    phone: "02832-235000",
    email: "envscience@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["M.Sc. Environmental Science (2 Yrs)", "M.Sc. Life Sciences (2 Yrs)", "Ph.D. Environmental Science"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=80",
    description: "Interdisciplinary science department focusing on biodiversity, desert ecology, marine biology, and environmental impact.",
    coursesCount: 3
  },
  {
    id: "kskvku-dept-law",
    universityId: "kskvku",
    name: "Department of Law (LL.M) (KSKVKU Campus)",
    shortName: "Law Dept KSKVKU",
    type: "University Department",
    department: "Postgraduate Legal Studies",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2007",
    phone: "02832-235000",
    email: "law@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["LL.M. (Master of Laws) (2 Yrs)", "Ph.D. Law"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=80",
    description: "Post-graduate department offering specialized LL.M in corporate law, constitutional law, and criminal jurisprudence.",
    coursesCount: 2
  },
  {
    id: "kskvku-dept-vocational",
    universityId: "kskvku",
    name: "Department of Vocational Studies & Skill Development (KSKVKU Campus)",
    shortName: "Vocational Studies KSKVKU",
    type: "University Department",
    department: "Vocational Training & Skill Development",
    address: "KSKV Kutch University Campus, Mundra Road, Bhuj – Kachchh 370001",
    established: "2015",
    phone: "02832-235000",
    email: "bvoc@kskvku.ac.in",
    web: "www.kskvku.ac.in",
    coursesOffered: ["B.Voc. (Software Development) (3 Yrs)", "B.Voc. (Tourism & Hospitality) (3 Yrs)", "P.G. Diploma in Skill Training"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80",
    description: "NSQF aligned vocational department offering B.Voc degrees and industry skill certifications.",
    coursesCount: 3
  }
];

export const COURSES = [
  // SRCC / Commerce Courses
  {
    id: "mcom",
    collegeId: "kskvku-dept-commerce",
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
    collegeId: "kskvku-dept-commerce",
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
    collegeId: "kskvku-dept-commerce",
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
    collegeId: "kskvku-dept-commerce",
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
    collegeId: "kskvku-dept-commerce",
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
    collegeId: "kskvku-dept-commerce",
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
    collegeId: "kskvku-dept-commerce",
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
    collegeId: "kskvku-sheth-dl",
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
    collegeId: "kskvku-sheth-dl",
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
    collegeId: "kskvku-tolani",
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
    collegeId: "kskvku-tolani",
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
    collegeId: "kskvku-tolani",
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
    collegeId: "kskvku-tolani",
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
    collegeId: "kskvku-tolani",
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
    collegeId: "kskvku-tolani",
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
    collegeId: "kskvku-tolani",
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
    collegeId: "kskvku-dept-cs",
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
    collegeId: "kskvku-dept-cs",
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
    collegeId: "kskvku-dept-cs",
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
    collegeId: "kskvku-tolani",
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
    collegeId: "kskvku-tolani",
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
    collegeId: "kskvku-dept-cs",
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
    collegeId: "kskvku-dept-cs",
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
  },

  // --- GENERAL & STATE UNIVERSITY DEGREE PROGRAMS ---
  {
    id: "bcom-general",
    collegeId: "kskvku-jbthacker",
    name: "Bachelor of Commerce (B.Com General / Program)",
    shortCode: "B.Com",
    courseKey: "bcom",
    stream: "Commerce",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Foundational undergraduate commerce degree focusing on financial accounting, auditing, commercial laws, corporate taxation, and business economics.",
    careerPaths: ["Junior Accountant", "Banking Executive", "Tax Consultant", "Audit Assistant", "Financial Officer"]
  },
  {
    id: "ba-program",
    collegeId: "kskvku-rrlalan",
    name: "Bachelor of Arts (B.A. Program / General)",
    shortCode: "B.A.",
    courseKey: "ba",
    stream: "Arts",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Broad-based liberal arts program covering history, political science, sociology, economics, literature, and public administration with rich elective choices.",
    careerPaths: ["Civil Services Aspirant", "Content Writer", "Public Relations Specialist", "Teacher", "Social Worker"]
  },
  {
    id: "ba-degree",
    collegeId: "kskvku-ssv",
    name: "Bachelor of Arts (B.A.)",
    shortCode: "B.A.",
    courseKey: "ba",
    stream: "Arts",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Comprehensive 3-year undergraduate degree in Arts and Humanities covering English, Economics, Psychology, History, and Gujarati Literature.",
    careerPaths: ["Administrative Officer", "Journalist", "Educator", "Community Organizer"]
  },
  {
    id: "ma-program",
    collegeId: "kskvku-ssv",
    name: "Master of Arts (M.A. - Economics, Psychology, English, Gujarati)",
    shortCode: "M.A.",
    courseKey: "ma",
    stream: "Arts",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Postgraduate humanities degree emphasizing advanced economic policy, literary criticism, psychological research, and social theories.",
    careerPaths: ["Senior Economist", "University Lecturer", "Psychological Counselor", "Policy Advisor", "Research Fellow"]
  },
  {
    id: "bsc-program",
    collegeId: "kskvku-rrlalan",
    name: "Bachelor of Science (B.Sc - Physics, Chemistry, Mathematics, Biology)",
    shortCode: "B.Sc",
    courseKey: "bsc",
    stream: "Science",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Undergraduate science curriculum with rigorous laboratory training in physics, analytical chemistry, mathematics, and biological sciences.",
    careerPaths: ["Scientific Officer", "Research Assistant", "Lab Analyst", "Quality Controller", "Data Analyst"]
  },
  {
    id: "msc-program",
    collegeId: "kskvku-dept-chemistry",
    name: "Master of Science (M.Sc - Chemistry, Geology, IT, Environmental)",
    shortCode: "M.Sc",
    courseKey: "msc",
    stream: "Science",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Postgraduate science degree focusing on scientific investigation, organic & analytical chemistry, geosciences, and environmental impact assessment.",
    careerPaths: ["Research Scientist", "Geologist", "Environmental Consultant", "Senior Chemist", "Academic Researcher"]
  },
  {
    id: "bba-program",
    collegeId: "kskvku-srk-management",
    name: "Bachelor of Business Administration (BBA)",
    shortCode: "BBA",
    courseKey: "bba",
    stream: "Commerce",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Professional undergraduate business management program covering organizational behavior, digital marketing, finance, human resources, and entrepreneurship.",
    careerPaths: ["Business Manager", "Marketing Executive", "HR Coordinator", "Operations Analyst", "Startup Founder"]
  },
  {
    id: "mba-program",
    collegeId: "kskvku-dept-management",
    name: "Master of Business Administration (M.B.A.)",
    shortCode: "M.B.A.",
    courseKey: "mba",
    stream: "Commerce",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "AICTE approved management master's program specializing in Strategic Management, Corporate Finance, Marketing & Analytics, and Human Resources.",
    careerPaths: ["Corporate Strategist", "Investment Banker", "Product Manager", "Management Consultant", "Business Unit Head"]
  },
  {
    id: "bca-program",
    collegeId: "kskvku-srk-management",
    name: "Bachelor of Computer Applications (BCA)",
    shortCode: "BCA",
    courseKey: "bca",
    stream: "Science",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Professional IT curriculum covering programming in C/C++/Java/Python, Web Development, Database Management Systems, and Cloud Computing.",
    careerPaths: ["Software Engineer", "Full Stack Developer", "Database Administrator", "System Analyst", "Web Developer"]
  },
  {
    id: "mca-program",
    collegeId: "kskvku-dept-cs-campus",
    name: "Master of Computer Applications (M.C.A.)",
    shortCode: "M.C.A.",
    courseKey: "mca",
    stream: "Science",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Advanced computing and software engineering master's program covering distributed systems, machine learning, cloud architectures, and cybersecurity.",
    careerPaths: ["Software Architect", "Cloud Systems Engineer", "AI/ML Engineer", "DevOps Specialist", "Technical Lead"]
  },
  {
    id: "bed-degree",
    collegeId: "kskvku-sdshethia",
    name: "Bachelor of Education (B.Ed.)",
    shortCode: "B.Ed.",
    courseKey: "bed",
    stream: "Education",
    degree: "Professional Degree",
    duration: "2 Years (4 Semesters)",
    level: "Bachelors",
    totalSemesters: 4,
    description: "NCTE approved professional teacher education program preparing educators in pedagogic theory, educational psychology, curriculum design, and classroom management.",
    careerPaths: ["Secondary School Teacher", "Educational Counselor", "Curriculum Developer", "Education Officer", "School Administrator"]
  },
  {
    id: "med-degree",
    collegeId: "kskvku-dept-education",
    name: "Master of Education (M.Ed.)",
    shortCode: "M.Ed.",
    courseKey: "med",
    stream: "Education",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Postgraduate teacher educator program emphasizing advanced educational research methodologies, teacher education curriculum, educational psychology, and academic leadership.",
    careerPaths: ["Assistant Professor of Education", "Curriculum Specialist", "School Principal", "Educational Researcher", "Policy Planner"]
  },
  {
    id: "llb-degree",
    collegeId: "kskvku-sdlaw",
    name: "Bachelor of Laws (L.L.B.)",
    shortCode: "L.L.B.",
    courseKey: "llb",
    stream: "Law",
    degree: "Professional Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Bar Council of India accredited degree covering constitutional law, criminal jurisprudence, civil procedure code, corporate laws, family law, and moot court advocacy.",
    careerPaths: ["Advocate", "Legal Advisor", "Judicial Magistrate Aspirant", "Corporate Legal Counsel", "Public Prosecutor"]
  },
  {
    id: "llm-degree",
    collegeId: "kskvku-dept-law",
    name: "Master of Laws (LL.M.)",
    shortCode: "LL.M.",
    courseKey: "llm",
    stream: "Law",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Specialized postgraduate legal education in Comparative Constitutional Law, Commercial and Corporate Jurisprudence, Intellectual Property, and Human Rights.",
    careerPaths: ["Senior Legal Consultant", "Law Professor", "Legal Researcher", "Corporate Compliance Head", "Arbitrator"]
  },
  {
    id: "bjmc-degree",
    collegeId: "kskvku-ssv",
    name: "Bachelor of Journalism & Mass Communication (BJMC)",
    shortCode: "BJMC",
    courseKey: "bjmc",
    stream: "Arts",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Hands-on media curriculum covering print and broadcast journalism, electronic news production, public relations, digital media, and investigative reporting.",
    careerPaths: ["News Journalist", "Broadcast Producer", "PR Specialist", "Content Strategist", "Digital Media Manager"]
  },
  {
    id: "msw-degree",
    collegeId: "kskvku-dept-socialwork",
    name: "Master of Social Work (M.S.W.)",
    shortCode: "M.S.W.",
    courseKey: "msw",
    stream: "Arts",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Professional social work qualification covering community development, psychiatric social work, NGO management, human rights, and social policy formulation.",
    careerPaths: ["Social Work Officer", "NGO Executive Director", "Community Welfare Lead", "CSR Manager", "Medical Social Worker"]
  },
  {
    id: "bvoc-degree",
    collegeId: "kskvku-dept-vocational",
    name: "Bachelor of Vocational Studies (B.Voc - Software Development & Tourism)",
    shortCode: "B.Voc",
    courseKey: "bvoc",
    stream: "Science",
    degree: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    level: "Bachelors",
    totalSemesters: 6,
    description: "Skill-based UGC vocational degree combining practical apprenticeship, full-stack software development, hospitality management, and industry certifications.",
    careerPaths: ["Software Developer", "Tourism Manager", "Hospitality Executive", "Technical Specialist"]
  },
  {
    id: "bsc-nursing-degree",
    collegeId: "kskvku-bmcb-nursing",
    name: "Bachelor of Science in Nursing (B.Sc. Nursing)",
    shortCode: "B.Sc. Nursing",
    courseKey: "nursing",
    stream: "Medical",
    degree: "Undergraduate Degree",
    duration: "4 Years (8 Semesters)",
    level: "Bachelors",
    totalSemesters: 8,
    description: "Indian Nursing Council approved medical program covering patient clinical care, pharmacology, medical-surgical nursing, maternal health, and community nursing.",
    careerPaths: ["Registered Nurse", "Clinical Nurse Specialist", "Nursing Supervisor", "Healthcare Administrator"]
  },
  {
    id: "msc-nursing-degree",
    collegeId: "kskvku-bmcb-nursing",
    name: "Master of Science in Nursing (M.Sc. Nursing)",
    shortCode: "M.Sc. Nursing",
    courseKey: "nursing",
    stream: "Medical",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Advanced clinical nursing postgraduate education specializing in critical care, pediatric nursing, obstetric nursing, and nursing education leadership.",
    careerPaths: ["Nurse Educator", "Clinical Nurse Specialist", "Nursing Director", "Healthcare Researcher"]
  },
  {
    id: "bpt-degree",
    collegeId: "kskvku-chankya-physio",
    name: "Bachelor of Physiotherapy (B.P.T.)",
    shortCode: "B.P.T.",
    courseKey: "physio",
    stream: "Medical",
    degree: "Professional Degree",
    duration: "4.5 Years (8 Semesters + Internship)",
    level: "Bachelors",
    totalSemesters: 8,
    description: "Rehabilitation and clinical physiotherapy degree covering human anatomy, biomechanics, neuro-physiotherapy, musculoskeletal care, and sports rehabilitation.",
    careerPaths: ["Physiotherapist", "Sports Rehabilitation Specialist", "Clinical Consultant", "Ergonomist"]
  },
  {
    id: "mpt-degree",
    collegeId: "kskvku-chankya-physio",
    name: "Master of Physiotherapy (M.P.T.)",
    shortCode: "M.P.T.",
    courseKey: "physio",
    stream: "Medical",
    degree: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    level: "Masters",
    totalSemesters: 4,
    description: "Specialized post-graduate physiotherapy degree in Orthopedics, Neurology, Cardio-Pulmonary Care, and Sports Physical Therapy.",
    careerPaths: ["Senior Physiotherapist", "Sports Team Physiotherapist", "Consultant Specialist", "Academic Faculty"]
  },
  {
    id: "mbbs-degree",
    collegeId: "kskvku-gaims",
    name: "Bachelor of Medicine & Bachelor of Surgery (M.B.B.S.)",
    shortCode: "M.B.B.S.",
    courseKey: "mbbs",
    stream: "Medical",
    degree: "Medical Degree",
    duration: "5.5 Years (9 Semesters + Internship)",
    level: "Bachelors",
    totalSemesters: 9,
    description: "NMC accredited primary medical qualification covering human anatomy, physiology, pathology, pharmacology, general surgery, medicine, and clinical clerkship.",
    careerPaths: ["Medical Doctor / Physician", "Medical Officer", "Clinical Researcher", "Hospital Resident", "Public Health Specialist"]
  },
  {
    id: "pgdhrm-degree",
    collegeId: "kskvku-pgdhrm",
    name: "P.G. Diploma in Human Resource Management (P.G.D.H.R.M.)",
    shortCode: "P.G.D.H.R.M.",
    courseKey: "diploma",
    stream: "Commerce",
    degree: "Postgraduate Diploma",
    duration: "1 Year (2 Semesters)",
    level: "Diploma",
    totalSemesters: 2,
    description: "Executive postgraduate program covering talent management, labor legislation, organizational dynamics, compensation structures, and strategic HR leadership.",
    careerPaths: ["HR Executive", "Talent Acquisition Lead", "Industrial Relations Officer", "Training Manager"]
  },
  {
    id: "pgdspm-degree",
    collegeId: "kskvku-pgdspm",
    name: "P.G. Diploma in Safety & Plant Management (P.G.D.S.P.M.)",
    shortCode: "P.G.D.S.P.M.",
    courseKey: "diploma",
    stream: "Science",
    degree: "Postgraduate Diploma",
    duration: "1 Year (2 Semesters)",
    level: "Diploma",
    totalSemesters: 2,
    description: "Industrial safety certification covering industrial hygiene, risk assessment, environmental plant safety regulations, and disaster management protocols.",
    careerPaths: ["Safety Officer", "Plant Safety Manager", "EHS Auditor", "Risk Compliance Specialist"]
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
// Pre-mapped subject titles per course and semester for realistic curriculum
const COURSE_SUBJECT_NAMES = {
  bcom: {
    1: ["Financial Accounting I", "Business Law", "Microeconomics", "Business Communication"],
    2: ["Corporate Accounting", "Business Mathematics & Stats", "Macroeconomics", "Environmental Studies"],
    3: ["Income Tax Law & Practice", "Company Law", "Advanced Financial Accounting", "Business Statistics"],
    4: ["Cost Accounting", "Indirect Tax (GST)", "Computer Applications in Business", "Human Resource Management"],
    5: ["Management Accounting", "Financial Management", "Auditing & Corporate Governance", "E-Commerce & Digital Business"],
    6: ["International Business", "Fundamentals of Investment", "GST Practice & Customs", "Entrepreneurship & Business Ethics"]
  },
  ba: {
    1: ["English Literature & Rhetoric", "Introduction to Political Theory", "Ancient Indian History", "Principles of Sociology"],
    2: ["Modern Indian Literature", "Comparative Politics", "Medieval Indian History", "Social Psychology & Culture"],
    3: ["British Poetry & Drama", "Indian Government & Politics", "Modern World History", "Development Economics"],
    4: ["Literary Criticism & Theory", "International Relations", "Cultural Studies", "Public Administration"],
    5: ["Post-Colonial Literature", "Western Political Thought", "Historiography & Research", "Social Movements in India"],
    6: ["Contemporary Critical Theory", "Global Politics & Policy", "Human Rights & Gender Studies", "Dissertation Project"]
  },
  mcom: {
    1: ["Advanced Financial Accounting & Reporting", "Managerial Economics & Decisions", "Advanced Business Statistics", "Corporate Legal Environment"],
    2: ["Corporate Financial Policy & Strategy", "Marketing Management & Research", "Accounting for Managerial Decisions", "International Business Environment"],
    3: ["Advanced Cost & Management Accounting", "Direct Tax Laws & Practice", "Security Analysis & Portfolio Management", "Strategic Business Management"],
    4: ["International Financial Management", "Goods & Services Tax (GST) & Customs", "Corporate Governance & Business Ethics", "Research Project & Viva-Voce"]
  },
  ma: {
    1: ["Advanced Microeconomic Analysis", "Literary Theory & Criticism", "Historical Methods & Historiography", "Classical Sociological Theory"],
    2: ["Macroeconomic Policy & Growth", "Postcolonial Studies", "Modern Asian History", "Advanced Social Research Methods"],
    3: ["Econometric Methods & Applications", "Contemporary World Literature", "Regional History & Culture", "Sociology of Development"],
    4: ["Indian Economic Policies & Issues", "Comparative Literature", "Public Policy & Administration", "Master's Thesis & Viva-Voce"]
  },
  bsc: {
    1: ["Classical Mechanics & Relativity", "Inorganic Chemistry I", "Differential Calculus & Matrices", "Cell Biology & Genetics"],
    2: ["Electricity & Magnetism", "Organic Chemistry I", "Integral Calculus & Differential Equations", "Ecology & Evolutionary Biology"],
    3: ["Thermal & Statistical Physics", "Physical Chemistry I", "Real Analysis & Multivariable Calculus", "Plant Anatomy & Physiology"],
    4: ["Waves, Optics & Acoustics", "Analytical Chemistry & Separation", "Linear Algebra & Vector Analysis", "Animal Diversity & Physiology"],
    5: ["Quantum Mechanics & Modern Physics", "Inorganic Chemistry II", "Complex Analysis & Numerical Methods", "Molecular Biology & Biotechnology"],
    6: ["Solid State Physics & Electronics", "Organic Synthesis & Spectroscopy", "Probability & Statistics", "Environmental Science & Project"]
  },
  msc: {
    1: ["Advanced Inorganic Chemistry", "Classical & Quantum Mechanics", "Advanced Organic Synthesis", "Research Instrumentation & Methods"],
    2: ["Advanced Physical Chemistry", "Solid State Physics & Nanotechnology", "Spectroscopic Techniques", "Computational Chemistry & Modeling"],
    3: ["Bio-Inorganic & Materials Chemistry", "Nuclear & Particle Physics", "Environmental Chemistry & Geosciences", "Advanced Elective Theory"],
    4: ["Drug Design & Medicinal Chemistry", "Laser Physics & Photonics", "Industrial Safety & Plant Chemistry", "Master's Research Dissertation"]
  },
  bba: {
    1: ["Principles of Management", "Business Economics", "Basic Financial Accounting", "Business Communication Skills"],
    2: ["Organizational Behavior", "Business Statistics", "Marketing Management", "Business Regulatory Framework"],
    3: ["Human Resource Management", "Cost & Management Accounting", "Production & Operations Management", "Management Information Systems"],
    4: ["Financial Management", "Consumer Behavior & Market Research", "Taxation Laws & Practices", "Business Research Methods"],
    5: ["Strategic Management", "Digital Marketing & Analytics", "International Trade & Logistics", "Entrepreneurship Development"],
    6: ["Retail & Supply Chain Management", "Project Finance & Banking", "Business Ethics & Corporate Governance", "Major Internship Project"]
  },
  mba: {
    1: ["Management Theory & Practice", "Managerial Economics", "Financial Accounting for Managers", "Quantitative Techniques in Business"],
    2: ["Corporate Financial Management", "Human Resource & Talent Management", "Marketing Strategy & Consumer Insights", "Operations & Supply Chain Optimization"],
    3: ["Strategic Corporate Leadership", "Business Analytics & Big Data", "Elective Specialization I", "Elective Specialization II"],
    4: ["Global Strategic Management", "Corporate Governance & Ethics", "Entrepreneurship & Venture Capital", "Capstone Project & Viva"]
  },
  bca: {
    1: ["Computer Fundamentals & PC Software", "Programming in C", "Mathematical Foundations of CS", "Digital Electronics & Logic"],
    2: ["Data Structures & Algorithms", "Object-Oriented Programming (C++)", "Computer System Architecture", "Database Management Systems (SQL)"],
    3: ["Java Programming & OOP Concepts", "Operating Systems & Linux Shell", "Software Engineering & Agile Methods", "Discrete Mathematical Structures"],
    4: ["Web Technologies (HTML5/CSS3/JavaScript)", "Computer Networks & Protocols", "Python Programming & Data Analysis", "Mobile Application Development"],
    5: ["Full Stack Web Development (React & Node)", "Cloud Computing & AWS", "Introduction to Artificial Intelligence", "Information Security & Cryptography"],
    6: ["Machine Learning Fundamentals", "DevOps & CI/CD Pipelines", "Software Testing & Quality Assurance", "Major Industry Capstone Project"]
  },
  mca: {
    1: ["Advanced Data Structures & Algorithms", "Advanced Operating Systems", "Enterprise Database Architecture", "Mathematical Concepts for Computer Science"],
    2: ["Advanced Java & Enterprise Frameworks", "Cloud Infrastructure & Virtualization", "Web Architecture & Microservices", "Data Mining & Business Intelligence"],
    3: ["Machine Learning & Deep Neural Networks", "Cybersecurity & Network Defense", "Big Data Analytics & Hadoop/Spark", "Advanced Software Engineering Principles"],
    4: ["Natural Language Processing & AI Agents", "Distributed Systems & Blockchain", "Internet of Things (IoT) & Embedded Systems", "Master's Final Industrial Project"]
  },
  bed: {
    1: ["Childhood & Growing Up", "Contemporary India & Education", "Language Across Curriculum", "Understanding Disciplines & Subjects"],
    2: ["Learning & Teaching Processes", "Pedagogy of School Subject Part I", "Assessment for Student Learning", "Drama & Art in Classroom Education"],
    3: ["Pedagogy of School Subject Part II", "Critical Understanding of ICT", "Pre-Internship School Engagement", "School Microteaching Practicum"],
    4: ["Gender, School & Society", "Creating an Inclusive Classroom", "Health, Yoga & Physical Education", "Comprehensive School Internship"]
  },
  med: {
    1: ["Philosophical Foundations of Education", "Advanced Educational Psychology", "Educational Research Methodology I", "Teacher Education: Pre-service & In-service"],
    2: ["Sociological Foundations of Education", "Curriculum Studies & Development", "Educational Research Methodology II", "Educational Measurement & Evaluation"],
    3: ["Educational Administration & Leadership", "Technology & E-Learning in Teacher Education", "Comparative & International Education", "Special Education & Inclusive Practices"],
    4: ["Educational Policy, Planning & Economics", "Guidance & Counseling in Education", "Academic Writing & Research Seminar", "Master's Dissertation & Defense"]
  },
  llb: {
    1: ["Constitutional Law of India I", "Law of Contracts & Specific Relief", "Law of Torts & Consumer Protection", "Legal Language & Legal Writing"],
    2: ["Constitutional Law of India II", "Special Contracts & Partnership", "Criminal Law (Indian Penal Code)", "Family Law I (Marriage & Divorce)"],
    3: ["Criminal Procedure Code (CrPC)", "Jurisprudence & Legal Philosophy", "Family Law II (Succession & Inheritance)", "Law of Evidence & Proof"],
    4: ["Civil Procedure Code (CPC) & Limitation", "Property Law & Transfer of Property", "Labor & Industrial Laws", "Environmental Law & Policy"],
    5: ["Company Law & Corporate Governance", "Administrative Law", "Public International Law & Human Rights", "Drafting, Pleading & Conveyancing"],
    6: ["Taxation Laws (Direct & Indirect)", "Alternative Dispute Resolution (ADR)", "Professional Ethics & Bar-Bench Relations", "Moot Court Exercise & Internship"]
  },
  llm: {
    1: ["Comparative Constitutional Law", "Law and Social Transformation", "Judicial Process & Legal Theory", "Research Methods & Legal Writing"],
    2: ["International Trade & Commercial Law", "Corporate Governance & Securities Law", "Intellectual Property Rights", "Human Rights & Humanitarian Law"],
    3: ["Comparative Criminal Jurisprudence", "Competition Law & Consumer Justice", "Information Technology & Cyber Laws", "Environmental Jurisprudence"],
    4: ["Alternative Dispute Resolution in Practice", "International Banking & Finance Law", "Dissertation & Research Defense", "Seminar & Viva-Voce"]
  },
  btech: {
    1: ["Engineering Mathematics I", "Engineering Physics", "Basics of Electrical & Electronics", "Programming for Problem Solving (C)"],
    2: ["Engineering Mathematics II", "Engineering Chemistry", "Data Structures & Fundamentals", "Digital Logic & Computer Design"],
    3: ["Object-Oriented Programming (Java/C++)", "Computer Organization & Architecture", "Discrete Mathematics", "Database Management Systems"],
    4: ["Operating Systems & System Programming", "Design & Analysis of Algorithms", "Computer Networks", "Theory of Computation & Automata"],
    5: ["Software Engineering & Agile", "Web Development Technologies", "Microprocessors & Interfacing", "Artificial Intelligence & Expert Systems"],
    6: ["Compiler Design", "Machine Learning & Pattern Recognition", "Cloud Computing & Virtualization", "Cybersecurity & Cryptography"],
    7: ["Big Data Analytics", "Internet of Things (IoT)", "Distributed Computing Systems", "Open Elective / Project Phase I"],
    8: ["Deep Learning & Neural Networks", "DevOps & Continuous Deployment", "Major Engineering Capstone Project", "Comprehensive Technical Viva"]
  }
};

// Helper fallback data generation for missing semesters to guarantee seamless experience
export const getSubjectsForSemester = (semesterId, courseId) => {
  const existing = SUBJECTS.filter(s => s.semesterId === semesterId);
  if (existing.length > 0) return existing;

  const semNum = semesterId ? parseInt(semesterId.split('-').pop() || "1", 10) : 1;
  const courseKey = getCourseKey(courseId || "mcom");
  const subjectNamesList = (COURSE_SUBJECT_NAMES[courseKey] && COURSE_SUBJECT_NAMES[courseKey][semNum])
    ? COURSE_SUBJECT_NAMES[courseKey][semNum]
    : [
        `Core Foundation Subject ${semNum}.1`,
        `Advanced Theoretical Concepts ${semNum}.2`,
        `Applied Methodologies & Analytics ${semNum}.3`,
        `Practical Laboratory & Case Studies ${semNum}.4`
      ];

  const prefix = (courseKey.toUpperCase() || "SUB");

  return subjectNamesList.map((name, idx) => ({
    id: `${courseId || "course"}-${semesterId || "sem1"}-sub${idx + 1}`,
    semesterId: semesterId || "sem-1",
    courseId: courseId || "mcom",
    code: `${prefix}-${semNum}0${idx + 1}`,
    name: name,
    shortName: name.length > 22 ? name.substring(0, 20) + "..." : name,
    credits: 4,
    description: `In-depth academic module in ${name} covering theoretical principles, applied problem-solving models, and university curriculum standards for semester ${semNum}.`,
    syllabus: [
      `Unit 1: Fundamentals & Conceptual Framework of ${name.split(" ")[0]}`,
      `Unit 2: Quantitative Analysis & Applied Industry Methodologies`,
      `Unit 3: Advanced Analytical Principles & Real-world Case Studies`,
      `Unit 4: Regulatory Guidelines, Emerging Trends & Examination Review`
    ],
    books: [
      {
        id: `b-dyn-${courseId || "c"}-${semNum}-${idx + 1}`,
        title: `${name}: Comprehensive University Edition`,
        author: "Prof. Academic Council",
        edition: "Latest University Prescribed Edition",
        isbn: `978-012345${semNum}${idx + 1}`,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80",
        rating: 4.8,
        pages: 480 + (idx * 30),
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        summary: `Standard university reference textbook for ${name} containing illustrated problem sets, unit-wise reviews, and past university examination papers.`
      }
    ],
    videos: [
      {
        id: `v-dyn-${courseId || "c"}-${semNum}-${idx + 1}`,
        title: `${name} - Comprehensive Lecture Series`,
        duration: "38:45",
        instructor: "Senior University Faculty Panel",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80",
        topic: `${name} Core Concepts`
      }
    ],
    notes: [
      {
        id: `n-dyn-${courseId || "c"}-${semNum}-${idx + 1}`,
        title: `${name} Complete Revision Notes & Question Bank`,
        author: "University Academic Resource Cell",
        format: "PDF Document",
        size: "3.4 MB",
        pages: 32,
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  }));
};

// -------------------------------------------------------------
// COURSE FILTERING HELPER UTILITIES
// -------------------------------------------------------------

export const getCourseKey = (courseStr) => {
  if (!courseStr) return "all";
  const str = courseStr.toLowerCase().trim();

  if (str === "all" || str === "all academic courses" || str.includes("all academic") || str.includes("all courses") || str === "all streams") return "all";

  if (str.includes("m.com") || str.includes("mcom") || str.includes("master of commerce")) return "mcom";
  if (str.includes("b.com") || str.includes("bcom") || str.includes("bachelor of commerce")) return "bcom";
  if (str.includes("bba") || str.includes("b.b.a") || str.includes("business admin")) return "bba";
  if (str.includes("mba") || str.includes("m.b.a")) return "mba";
  if (str.includes("ca ") || str.includes("chartered")) return "ca";
  if (str.includes("cs ") || str.includes("company secretary")) return "cs";

  if (str.includes("m.a.") || str.includes("m.a ") || str.includes("ma ") || str.includes("master of arts")) return "ma";
  if (str.includes("b.a.") || str.includes("b.a ") || str.includes("ba ") || str.includes("bachelor of arts") || str.includes("bjmc") || str.includes("journalism")) {
    if (str.includes("bjmc") || str.includes("journalism")) return "bjmc";
    return "ba";
  }
  if (str.includes("bfa") || str.includes("fine arts")) return "bfa";
  if (str.includes("b.ed") || str.includes("bed") || str.includes("education")) {
    if (str.includes("m.ed") || str.includes("med")) return "med";
    return "bed";
  }
  if (str.includes("m.ed") || str.includes("med")) return "med";

  if (str.includes("l.l.b") || str.includes("ll.b") || str.includes("llb") || str.includes("law")) {
    if (str.includes("ll.m") || str.includes("llm")) return "llm";
    return "llb";
  }
  if (str.includes("ll.m") || str.includes("llm")) return "llm";
  if (str.includes("msw") || str.includes("m.s.w") || str.includes("social work")) return "msw";
  if (str.includes("bvoc") || str.includes("b.voc") || str.includes("vocational")) return "bvoc";

  if (str.includes("m.sc") || str.includes("msc") || str.includes("master of science")) {
    if (str.includes("nursing")) return "msc-nursing";
    return "msc";
  }
  if (str.includes("b.sc") || str.includes("bsc") || str.includes("bachelor of science")) {
    if (str.includes("nursing")) return "bsc-nursing";
    return "bsc";
  }
  if (str.includes("nursing")) return "bsc-nursing";
  if (str.includes("b.p.t") || str.includes("bpt") || str.includes("m.p.t") || str.includes("mpt") || str.includes("physio")) return "physio";
  if (str.includes("mbbs") || str.includes("m.b.b.s") || str.includes("medicine")) return "mbbs";

  if (str.includes("m.tech") || str.includes("mtech") || str.includes("master of technology")) return "mtech";
  if (str.includes("b.tech") || str.includes("btech") || str.includes("b.s. cs") || str.includes("bachelor of technology")) return "btech";
  if (str.includes("mca") || str.includes("m.c.a") || str.includes("master of computer applications")) return "mca";
  if (str.includes("bca") || str.includes("b.c.a") || str.includes("bachelor of computer applications")) return "bca";
  if (str.includes("pgd") || str.includes("diploma")) return "diploma";

  return "all";
};

export const isCourseMatchingKey = (courseObj, targetKey) => {
  if (!courseObj) return false;
  if (targetKey === "all") return true;
  const courseKey = courseObj.courseKey || getCourseKey(courseObj.shortCode || courseObj.name || courseObj.id);
  if (courseKey === targetKey) return true;

  const str = ((courseObj.shortCode || "") + " " + (courseObj.name || "") + " " + (courseObj.id || "")).toLowerCase();
  if (targetKey === "bcom" && (str.includes("b.com") || str.includes("bcom"))) return true;
  if (targetKey === "mcom" && (str.includes("m.com") || str.includes("mcom"))) return true;
  if (targetKey === "btech" && (str.includes("b.tech") || str.includes("btech") || str.includes("b.s. cs"))) return true;
  if (targetKey === "mtech" && (str.includes("m.tech") || str.includes("mtech"))) return true;
  if (targetKey === "ba" && (str.includes("b.a.") || str.includes("ba ") || str.includes("bachelor of arts"))) return true;
  if (targetKey === "ma" && (str.includes("m.a.") || str.includes("ma ") || str.includes("master of arts"))) return true;
  if (targetKey === "bsc" && (str.includes("b.sc") || str.includes("bsc") || str.includes("bachelor of science"))) return true;
  if (targetKey === "msc" && (str.includes("m.sc") || str.includes("msc") || str.includes("master of science"))) return true;
  if (targetKey === "bca" && (str.includes("bca") || str.includes("b.c.a"))) return true;
  if (targetKey === "mca" && (str.includes("mca") || str.includes("m.c.a"))) return true;
  if (targetKey === "bba" && (str.includes("bba") || str.includes("b.b.a"))) return true;
  if (targetKey === "mba" && (str.includes("mba") || str.includes("m.b.a"))) return true;
  if (targetKey === "ca" && (str.includes("ca") || str.includes("chartered"))) return true;
  if (targetKey === "cs" && (str.includes("cs") || str.includes("company secretary"))) return true;
  if (targetKey === "bed" && (str.includes("b.ed") || str.includes("bed") || str.includes("education"))) return true;
  if (targetKey === "med" && (str.includes("m.ed") || str.includes("med"))) return true;
  if (targetKey === "llb" && (str.includes("l.l.b") || str.includes("ll.b") || str.includes("llb") || str.includes("law"))) return true;
  if (targetKey === "llm" && (str.includes("ll.m") || str.includes("llm"))) return true;
  if (targetKey === "bfa" && str.includes("bfa")) return true;
  if (targetKey === "bjmc" && (str.includes("bjmc") || str.includes("journalism"))) return true;
  if (targetKey === "msw" && (str.includes("msw") || str.includes("social work"))) return true;
  if (targetKey === "bvoc" && (str.includes("bvoc") || str.includes("b.voc") || str.includes("vocational"))) return true;
  if ((targetKey === "bsc-nursing" || targetKey === "msc-nursing" || targetKey === "nursing") && str.includes("nursing")) return true;
  if (targetKey === "physio" && (str.includes("physio") || str.includes("bpt") || str.includes("mpt") || str.includes("b.p.t"))) return true;
  if (targetKey === "mbbs" && (str.includes("mbbs") || str.includes("m.b.b.s") || str.includes("medicine"))) return true;
  if (targetKey === "diploma" && (str.includes("pgd") || str.includes("diploma"))) return true;
  return false;
};

export const getCoursesForCollege = (college) => {
  if (!college) return [];

  // 1. Direct matches in COURSES where c.collegeId === college.id
  const directMatches = COURSES.filter(c => c.collegeId === college.id);

  // 2. If college has explicit coursesOffered list, return courses matching those offered
  if (college.coursesOffered && college.coursesOffered.length > 0) {
    const list = [];
    college.coursesOffered.forEach((courseTitle, idx) => {
      const existingDirect = directMatches.find(c => {
        const titleLower = courseTitle.toLowerCase();
        const codeLower = (c.shortCode || "").toLowerCase();
        const nameLower = (c.name || "").toLowerCase();
        return titleLower.includes(codeLower) || nameLower.includes(titleLower);
      });

      if (existingDirect) {
        list.push(existingDirect);
      } else {
        const targetKey = getCourseKey(courseTitle);
        const base = COURSES.find(c => isCourseMatchingKey(c, targetKey)) || COURSES[0];
        list.push({
          ...base,
          id: `${college.id}-c-${idx}`,
          collegeId: college.id,
          name: `${courseTitle}`,
          shortCode: courseTitle.split(" ")[0] || base.shortCode,
          description: base.description || `Official degree program offered at ${college.name}.`
        });
      }
    });

    if (list.length > 0) return list;
  }

  if (directMatches.length > 0) return directMatches;

  return COURSES;
};

export const filterCoursesByCourse = (selectedCourseStr, collegeId = null) => {
  if (!selectedCourseStr || selectedCourseStr === "All Academic Courses" || getCourseKey(selectedCourseStr) === "all") {
    return collegeId ? COURSES.filter(c => c.collegeId === collegeId) : COURSES;
  }
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
  if (!college) return false;
  if (targetKey === "all") return true;

  // 1. Direct course link in COURSES array for this specific college
  const directMatch = COURSES.some(c => c.collegeId === college.id && isCourseMatchingKey(c, targetKey));
  if (directMatch) return true;

  // 2. Check college.coursesOffered array strictly for target degree
  if (college.coursesOffered && college.coursesOffered.length > 0) {
    const hasMatchingOffered = college.coursesOffered.some(cStr => {
      const lower = cStr.toLowerCase();

      if (targetKey === "mcom") {
        return lower.includes("m.com") || lower.includes("mcom") || lower.includes("master of commerce");
      }
      if (targetKey === "bcom") {
        return (lower.includes("b.com") || lower.includes("bcom") || lower.includes("bachelor of commerce")) && !lower.includes("m.com") && !lower.includes("mcom");
      }
      if (targetKey === "bba") {
        return lower.includes("bba") || lower.includes("b.b.a");
      }
      if (targetKey === "mba") {
        return lower.includes("mba") || lower.includes("m.b.a");
      }
      if (targetKey === "ca") {
        return lower.includes("ca ") || lower.includes("chartered");
      }
      if (targetKey === "cs") {
        return lower.includes("cs ") || lower.includes("company secretary");
      }

      if (targetKey === "ma") {
        return lower.includes("m.a") || lower.includes("ma ") || lower.includes("master of arts");
      }
      if (targetKey === "ba") {
        return (lower.includes("b.a") || lower.includes("ba ") || lower.includes("bachelor of arts")) && !lower.includes("m.a") && !lower.includes("ma ");
      }
      if (targetKey === "bfa") {
        return lower.includes("bfa") || lower.includes("fine arts");
      }
      if (targetKey === "bed") {
        return lower.includes("b.ed") || lower.includes("bed") || lower.includes("education");
      }
      if (targetKey === "med") {
        return lower.includes("m.ed") || lower.includes("med");
      }
      if (targetKey === "llb") {
        return lower.includes("l.l.b") || lower.includes("ll.b") || lower.includes("llb") || lower.includes("law");
      }
      if (targetKey === "llm") {
        return lower.includes("ll.m") || lower.includes("llm");
      }
      if (targetKey === "msw") {
        return lower.includes("msw") || lower.includes("m.s.w") || lower.includes("social work");
      }
      if (targetKey === "bvoc") {
        return lower.includes("bvoc") || lower.includes("b.voc") || lower.includes("vocational");
      }
      if (targetKey === "bjmc") {
        return lower.includes("bjmc") || lower.includes("journalism");
      }

      if (targetKey === "msc") {
        return lower.includes("m.sc") || lower.includes("msc") || lower.includes("master of science");
      }
      if (targetKey === "bsc") {
        return (lower.includes("b.sc") || lower.includes("bsc") || lower.includes("bachelor of science")) && !lower.includes("m.sc") && !lower.includes("msc");
      }
      if (targetKey === "nursing" || targetKey === "bsc-nursing" || targetKey === "msc-nursing") {
        return lower.includes("nursing");
      }
      if (targetKey === "physio") {
        return lower.includes("physio") || lower.includes("bpt") || lower.includes("mpt") || lower.includes("b.p.t");
      }
      if (targetKey === "mbbs") {
        return lower.includes("mbbs") || lower.includes("m.b.b.s") || lower.includes("medicine");
      }
      if (targetKey === "mtech") {
        return lower.includes("m.tech") || lower.includes("mtech");
      }
      if (targetKey === "btech") {
        return (lower.includes("b.tech") || lower.includes("btech")) && !lower.includes("m.tech") && !lower.includes("mtech");
      }
      if (targetKey === "mca") {
        return lower.includes("mca") || lower.includes("m.c.a");
      }
      if (targetKey === "bca") {
        return lower.includes("bca") || lower.includes("b.c.a");
      }
      if (targetKey === "diploma") {
        return lower.includes("pgd") || lower.includes("diploma");
      }

      return getCourseKey(cStr) === targetKey;
    });

    if (hasMatchingOffered) return true;
  }

  return false;
};

export const filterCollegesByCourse = (selectedCourseStr, universityId = null) => {
  if (!selectedCourseStr || selectedCourseStr === "All Academic Courses" || getCourseKey(selectedCourseStr) === "all") {
    return universityId ? COLLEGES.filter(col => col.universityId === universityId) : COLLEGES;
  }
  const targetKey = getCourseKey(selectedCourseStr);
  const collegesOfferingCourse = COLLEGES.filter(col => collegeOffersCourse(col, targetKey));
  
  if (universityId) {
    const uniSpecific = collegesOfferingCourse.filter(col => col.universityId === universityId);
    if (uniSpecific.length > 0) return uniSpecific;
  }
  
  return collegesOfferingCourse;
};

export const universityOffersCourse = (university, targetKey) => {
  if (targetKey === "all") return true;
  const uniColleges = COLLEGES.filter(col => col.universityId === university.id);
  return uniColleges.some(col => collegeOffersCourse(col, targetKey));
};

export const filterUniversitiesByCourse = (selectedCourseStr) => {
  if (!selectedCourseStr || selectedCourseStr === "All Academic Courses" || getCourseKey(selectedCourseStr) === "all") {
    return UNIVERSITIES;
  }
  const targetKey = getCourseKey(selectedCourseStr);
  const matchedUnis = UNIVERSITIES.filter(uni => universityOffersCourse(uni, targetKey));
  return matchedUnis.length > 0 ? matchedUnis : UNIVERSITIES;
};

export const filterSubjectsByCourse = (selectedCourseStr) => {
  if (!selectedCourseStr || selectedCourseStr === "All Academic Courses" || getCourseKey(selectedCourseStr) === "all") {
    return SUBJECTS;
  }
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
