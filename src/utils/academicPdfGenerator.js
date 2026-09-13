/**
 * Academic PDF Generator
 * Generates 100% compliant, standard PDF-1.4 documents client-side in pure JavaScript
 * with proper typography, page breaks, headers, footers, and structured curriculum content.
 */

function escapePdfText(text) {
  if (!text) return "";
  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[^\x20-\x7E]/g, " "); // Filter to standard ASCII printable range
}

export class AcademicPdfDoc {
  constructor(title, courseName, semName, code) {
    this.title = title || "Academic Study Material";
    this.courseName = courseName || "Academic Course";
    this.semName = semName || "Semester";
    this.code = code || "SUB-101";

    this.pages = [];
    this.pageWidth = 595.28; // Standard A4 width in pt
    this.pageHeight = 841.89; // Standard A4 height in pt
    this.margin = 46;
    this.currentY = this.pageHeight - this.margin;
    this.currentPage = null;
    this.newPage();
  }

  newPage() {
    this.currentPage = { commands: [] };
    this.pages.push(this.currentPage);
    this.currentY = this.pageHeight - this.margin;

    // Top decorative colored banner bar (EduNexus Navy #3D446C + Mint #8FE388)
    this.currentPage.commands.push(
      `0.075 0.251 0.455 rg`, // Dark Blue / Navy #3D446C
      `0 ${this.pageHeight - 10} ${this.pageWidth} 10 re f`,
      `0.561 0.890 0.533 rg`, // Mint Green #8FE388
      `0 ${this.pageHeight - 12} ${this.pageWidth} 2 re f`
    );

    // Page header on subsequent pages
    if (this.pages.length > 1) {
      this.currentPage.commands.push(
        `0.4 0.4 0.4 rg`,
        `BT`,
        `/F1 8 Tf`,
        `1 0 0 1 ${this.margin} ${this.pageHeight - 26} Tm`,
        `(${escapePdfText(this.title)} [${escapePdfText(this.code)}] | ${escapePdfText(this.semName)}) Tj`,
        `ET`,
        `0.85 0.85 0.85 RG`,
        `0.5 w`,
        `${this.margin} ${this.pageHeight - 30} m ${(this.pageWidth - this.margin).toFixed(2)} ${this.pageHeight - 30} l S`
      );
      this.currentY = this.pageHeight - 45;
    }
  }

  ensureSpace(height) {
    if (this.currentY - height < this.margin + 42) {
      this.newPage();
    }
  }

  addText(text, fontSize = 10, font = "/F1", color = [0.043, 0.145, 0.271], indent = 0) {
    this.ensureSpace(fontSize * 1.4);
    const [r, g, b] = color;
    const escaped = escapePdfText(text);
    this.currentPage.commands.push(
      `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg`,
      `BT`,
      `${font} ${fontSize} Tf`,
      `1 0 0 1 ${(this.margin + indent).toFixed(2)} ${this.currentY.toFixed(2)} Tm`,
      `(${escaped}) Tj`,
      `ET`
    );
    this.currentY -= fontSize * 1.35;
  }

  addHeading(text, level = 1) {
    const size = level === 1 ? 16 : level === 2 ? 12.5 : 10.5;
    const font = "/F2"; // Bold
    const color =
      level === 1
        ? [0.075, 0.251, 0.455]
        : level === 2
        ? [0.043, 0.145, 0.271]
        : [0.2, 0.2, 0.2];
    this.ensureSpace(size * 2 + 10);
    this.currentY -= 6;
    this.addText(text, size, font, color);
    this.currentY -= 3;
  }

  addBadge(text, bgColor = [0.075, 0.251, 0.455], textColor = [1, 1, 1]) {
    const fontSize = 8.5;
    const paddingX = 8;
    const paddingY = 3.5;
    const boxHeight = fontSize + paddingY * 2;
    const boxWidth = text.length * 5.6 + paddingX * 2;

    this.ensureSpace(boxHeight + 8);
    const [br, bg, bb] = bgColor;
    const [tr, tg, tb] = textColor;
    this.currentPage.commands.push(
      `${br.toFixed(3)} ${bg.toFixed(3)} ${bb.toFixed(3)} rg`,
      `${this.margin} ${(this.currentY - boxHeight + 3).toFixed(2)} ${boxWidth} ${boxHeight} re f`,
      `${tr.toFixed(3)} ${tg.toFixed(3)} ${tb.toFixed(3)} rg`,
      `BT`,
      `/F2 ${fontSize} Tf`,
      `1 0 0 1 ${(this.margin + paddingX).toFixed(2)} ${(this.currentY - boxHeight + 3 + paddingY).toFixed(2)} Tm`,
      `(${escapePdfText(text)}) Tj`,
      `ET`
    );
    this.currentY -= boxHeight + 6;
  }

  addDivider() {
    this.ensureSpace(14);
    this.currentY -= 4;
    this.currentPage.commands.push(
      `0.85 0.85 0.85 RG`,
      `0.75 w`,
      `${this.margin} ${this.currentY.toFixed(2)} m ${(this.pageWidth - this.margin).toFixed(2)} ${this.currentY.toFixed(2)} l S`
    );
    this.currentY -= 8;
  }

  addBullet(text, fontSize = 9.5) {
    const maxWidth = this.pageWidth - this.margin * 2 - 18;
    const maxChars = Math.floor(maxWidth / (fontSize * 0.52));
    const words = String(text).split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach(w => {
      if ((currentLine + " " + w).trim().length > maxChars) {
        lines.push(currentLine.trim());
        currentLine = w;
      } else {
        currentLine = currentLine ? currentLine + " " + w : w;
      }
    });
    if (currentLine.trim()) lines.push(currentLine.trim());

    this.ensureSpace(lines.length * fontSize * 1.4 + 4);

    this.currentPage.commands.push(
      `0.075 0.251 0.455 rg`,
      `BT`,
      `/F2 ${fontSize} Tf`,
      `1 0 0 1 ${this.margin + 4} ${this.currentY.toFixed(2)} Tm`,
      `(-) Tj`,
      `ET`
    );

    lines.forEach((l) => {
      this.addText(l, fontSize, "/F1", [0.2, 0.2, 0.2], 16);
    });
    this.currentY -= 2;
  }

  addParagraph(text, fontSize = 9.5) {
    const maxWidth = this.pageWidth - this.margin * 2;
    const maxChars = Math.floor(maxWidth / (fontSize * 0.52));
    const words = String(text).split(" ");
    let line = "";

    words.forEach(word => {
      if ((line + " " + word).trim().length > maxChars) {
        this.addText(line.trim(), fontSize, "/F1", [0.2, 0.2, 0.2]);
        line = word;
      } else {
        line = line ? line + " " + word : word;
      }
    });
    if (line.trim()) {
      this.addText(line.trim(), fontSize, "/F1", [0.2, 0.2, 0.2]);
    }
    this.currentY -= 3;
  }

  generateUint8Array() {
    const encoder = new TextEncoder();
    const objects = [];
    const addObject = (content) => {
      objects.push(content);
      return objects.length;
    };

    const catalogObjIndex = addObject(`<< /Type /Catalog /Pages 2 0 R >>`);
    const pagesObjIndex = addObject(null);

    const f1Index = addObject(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`);
    const f2Index = addObject(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`);
    const f3Index = addObject(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>`);

    const pageObjRefs = [];
    const totalPages = this.pages.length;

    this.pages.forEach((p, idx) => {
      const footerText = `EduNexus Academic Portal | ${escapePdfText(this.title)} | Page ${idx + 1} of ${totalPages} | Official University Material`;
      p.commands.push(
        `0.5 0.5 0.5 rg`,
        `BT`,
        `/F1 8 Tf`,
        `1 0 0 1 ${this.margin} 25 Tm`,
        `(${escapePdfText(footerText)}) Tj`,
        `ET`,
        `0.85 0.85 0.85 RG`,
        `0.5 w`,
        `${this.margin} 36 m ${(this.pageWidth - this.margin).toFixed(2)} 36 l S`
      );

      const streamContent = p.commands.join("\n");
      const streamBytes = encoder.encode(streamContent);
      const streamLen = streamBytes.length;

      const streamObjIndex = addObject(`<< /Length ${streamLen} >>\nstream\n${streamContent}\nendstream`);
      const pageObjIndex = addObject(
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${this.pageWidth} ${this.pageHeight}] /Resources << /Font << /F1 ${f1Index} 0 R /F2 ${f2Index} 0 R /F3 ${f3Index} 0 R >> >> /Contents ${streamObjIndex} 0 R >>`
      );
      pageObjRefs.push(`${pageObjIndex} 0 R`);
    });

    objects[pagesObjIndex - 1] = `<< /Type /Pages /Kids [${pageObjRefs.join(" ")}] /Count ${totalPages} >>`;

    let headerStr = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
    let bodyStr = "";
    const offsets = [0];
    let currentOffset = encoder.encode(headerStr).length;

    objects.forEach((objContent, idx) => {
      offsets.push(currentOffset);
      const piece = `${idx + 1} 0 obj\n${objContent}\nendobj\n`;
      bodyStr += piece;
      currentOffset += encoder.encode(piece).length;
    });

    const startXref = currentOffset;
    let xrefStr = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;

    for (let i = 1; i <= objects.length; i++) {
      const off = String(offsets[i]).padStart(10, "0");
      xrefStr += `${off} 00000 n \n`;
    }

    const trailerStr = `trailer\n<< /Size ${objects.length + 1} /Root ${catalogObjIndex} 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;

    const fullStr = headerStr + bodyStr + xrefStr + trailerStr;
    return encoder.encode(fullStr);
  }
}

/**
 * Generates an official Subject Textbook PDF Uint8Array
 */
export function generateSubjectBookPdf(subject, courseName = "Academic Program", semName = "Semester 1") {
  const code = subject.code || "SUB-101";
  const credits = subject.credits || 4;
  const doc = new AcademicPdfDoc(subject.name, courseName, semName, code);

  // Cover / Header Banner
  doc.addBadge(`OFFICIAL UNIVERSITY DIGITAL TEXTBOOK - ${semName.toUpperCase()}`);
  doc.addHeading(subject.name, 1);
  doc.addHeading(`Course: ${courseName} | Code: ${code} | Credits: ${credits}`, 3);
  doc.addDivider();

  // 1. Overview
  doc.addHeading("1. Academic Overview & Curriculum Scope", 2);
  doc.addParagraph(
    subject.description ||
      `This textbook provides structured foundational and advanced theoretical instruction for ${subject.name}, adhering to current university higher education standards.`
  );

  // 2. Syllabus Units
  doc.addHeading("2. Prescribed Syllabus & Unit Breakdown", 2);
  const units = subject.syllabus && subject.syllabus.length > 0 ? subject.syllabus : [
    `Unit 1: Fundamentals & Conceptual Framework of ${subject.name}`,
    `Unit 2: Quantitative Analysis & Applied Industry Methodologies`,
    `Unit 3: Advanced Analytical Principles & Real-world Case Studies`,
    `Unit 4: Regulatory Guidelines, Emerging Trends & Examination Review`
  ];

  units.forEach((unit, idx) => {
    doc.addBullet(`Unit ${idx + 1}: ${unit}`);
  });

  doc.addDivider();

  // 3. Recommended Textbooks
  doc.addHeading("3. Prescribed Textbooks & Faculty References", 2);
  const books = subject.books || [];
  if (books.length > 0) {
    books.forEach((b, idx) => {
      doc.addBullet(`[Book ${idx + 1}] "${b.title}" - by ${b.author || "Academic Faculty"} (${b.edition || "Standard Edition"}, ${b.pages || 450} Pages)`);
      if (b.summary) {
        doc.addParagraph(`    Summary: ${b.summary}`);
      }
    });
  } else {
    doc.addBullet(`[Book 1] "${subject.name}: Standard University Edition" - by Prof. Academic Council`);
    doc.addBullet(`[Book 2] "Principles of ${subject.name}" - Tata McGraw Hill Higher Education`);
  }

  doc.addDivider();

  // 4. Core Concepts & Chapter Notes
  doc.addHeading("4. Key Concepts, Principles & Formula Review", 2);
  doc.addBullet("Fundamental Axioms: Theoretical foundation and standard terminology prescribed by the university council.");
  doc.addBullet("Analytical Framework: Mathematical and qualitative models applied to practical business and academic cases.");
  doc.addBullet("Statutory Compliance: Overview of modern industry standards, regulatory mandates, and ethical guidelines.");
  doc.addBullet("Practical Applications: Unit-wise illustrations and laboratory/practical problem-solving paradigms.");

  // 5. Examination Question Bank
  doc.addHeading("5. University Examination Review & Practice Questions", 2);
  doc.addBullet("Q1: Discuss the essential theoretical assumptions and foundational definitions in " + subject.name + ".");
  doc.addBullet("Q2: Compare and contrast core classical methodologies with modern applied frameworks in this domain.");
  doc.addBullet("Q3: Solve comprehensive problem set covering Unit 2 & Unit 3 principles with step-by-step working.");
  doc.addBullet("Q4: Case Study Analysis: Evaluate real-world scenarios and formulate standard regulatory solutions.");

  return doc.generateUint8Array();
}

/**
 * Generates an official Subject Revision Notes PDF Uint8Array
 */
export function generateSubjectNotesPdf(subject, courseName = "Academic Program", semName = "Semester 1") {
  const code = subject.code || "SUB-101";
  const doc = new AcademicPdfDoc(`${subject.name} - Revision Notes`, courseName, semName, code);

  doc.addBadge(`HIGH-YIELD REVISION NOTES & EXAM CHEATSHEET`, [0.075, 0.251, 0.455], [1, 1, 1]);
  doc.addHeading(`${subject.name} - Fast Revision Notes`, 1);
  doc.addHeading(`${courseName} • ${semName} • Code: ${code}`, 3);
  doc.addDivider();

  doc.addHeading("1. Quick Chapter-by-Chapter Recall Points", 2);
  const units = subject.syllabus || [
    "Unit 1: Fundamentals",
    "Unit 2: Methodologies",
    "Unit 3: Case Studies",
    "Unit 4: Review"
  ];

  units.forEach((unit, idx) => {
    doc.addBullet(`Checkpoint ${idx + 1}: ${unit} — Review core definitions, theorem proofs, and standard derivations.`);
  });

  doc.addDivider();

  doc.addHeading("2. High-Frequency University Exam Topics", 2);
  doc.addBullet("Top Priority: Frequently asked 10-mark descriptive questions from Units 1 and 2.");
  doc.addBullet("Short Notes: 5-mark short explanations on industry terminology and standard operating rules.");
  doc.addBullet("Numerical Formulae: Memorize standard calculations and step-by-step deduction rules.");

  doc.addDivider();

  doc.addHeading("3. Notes Source & Department Contact", 2);
  const noteInfo = (subject.notes && subject.notes[0]) || {};
  doc.addParagraph(`Prepared by: ${noteInfo.author || "Department Academic Cell"}`);
  doc.addParagraph(`Verified by: Faculty Examination Review Board for ${courseName}`);
  doc.addParagraph(`Portal: EduNexus Academic Higher Education Library`);

  return doc.generateUint8Array();
}

/**
 * Direct browser download of a single subject PDF file
 */
export function downloadSubjectPdf(subject, courseName, semName, type = "book") {
  const isBook = type === "book";
  const bytes = isBook
    ? generateSubjectBookPdf(subject, courseName, semName)
    : generateSubjectNotesPdf(subject, courseName, semName);

  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const cleanSubName = (subject.name || "Subject").replace(/[/\\?%*:|"<>]/g, "");
  const suffix = isBook ? "Textbook.pdf" : "Revision_Notes.pdf";
  link.href = url;
  link.download = `${cleanSubName}_${suffix}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
