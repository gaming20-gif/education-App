import JSZip from "jszip";
import { getSubjectsForSemester } from "../data/educationData";
import {
  generateSubjectBookPdf,
  generateSubjectNotesPdf,
  downloadSubjectPdf
} from "./academicPdfGenerator";

export { downloadSubjectPdf };

/**
 * 1-Click ZIP Downloader for Semester Subjects & All Books PDF.
 * Generates a complete ZIP archive named `Semester-{X}_All_Subjects_Books_PDF.zip` containing:
 * - Master Overview HTML file listing all subjects
 * - Folders named like "Subject-1 Communication Skills" containing:
 *     1. Official Prescribed Textbook (.pdf)
 *     2. Fast Revision Notes & Cheatsheet (.pdf)
 *     3. Interactive Study Material Guide (.html)
 *     4. Syllabus & Notes Summary (.txt)
 */
export const downloadSemesterSubjectsZip = async (
  semester,
  course,
  customSubjects = null,
  onProgress = null,
  customZipName = null
) => {
  const subjects = customSubjects || getSubjectsForSemester(semester?.id, course?.id);
  const courseName = course?.name || course?.shortCode || "Academic Course";
  const semName = semester?.name || `Semester ${semester?.semesterNumber || 1}`;
  const semNum = semester?.semesterNumber || 1;

  if (onProgress) onProgress({ step: "init", message: "Preparing archive..." });

  const zip = new JSZip();

  // Root Semester folder inside the zip e.g. "Semester-1"
  const rootFolderName = `Semester-${semNum}`;
  const semFolder = zip.folder(rootFolderName);

  // 1. Master Overview File
  let overviewHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${courseName} - ${semName} Study Package</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; margin: 40px; color: #FFFFFF; background: #1C2036; line-height: 1.6; }
    .header { background: #292F4C; color: white; padding: 30px; border-radius: 16px; margin-bottom: 30px; border: 1px solid #56608F; }
    .header h1 { margin: 0 0 10px 0; font-size: 28px; }
    .header p { margin: 0; opacity: 0.9; font-size: 14px; color: #C4C9DE; }
    .badge { background: #4CD964; color: #1C2036; padding: 4px 12px; border-radius: 999px; font-weight: bold; font-size: 12px; display: inline-block; }
    .card { background: #292F4C; border: 1px solid #56608F; border-left: 5px solid #8FE388; padding: 24px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
    .card h2 { margin: 0 0 10px 0; font-size: 20px; color: #FFFFFF; }
    .code { font-family: monospace; background: rgba(143, 227, 136, 0.15); color: #8FE388; padding: 2px 8px; border-radius: 4px; font-size: 13px; font-weight: bold; }
    .unit-list { background: #1C2036; padding: 15px 20px; border-radius: 8px; border: 1px solid #56608F; color: #C4C9DE; }
    .unit-list li { margin-bottom: 6px; }
    .resource-link { display: inline-block; background: #3D446C; color: #8FE388; padding: 6px 14px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 12px; margin-top: 10px; margin-right: 8px; }
    .resource-link.book { background: #4CD964; color: #1C2036; font-weight: bold; }
    .resource-link.pdf { background: #3D446C; color: #8FE388; }
    .resource-link.video { background: #1C2036; color: #C4C9DE; border: 1px solid #56608F; }
    .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #C4C9DE; }
  </style>
</head>
<body>
  <div class="header">
    <span class="badge">OFFICIAL ACADEMIC ZIP PACKAGE — ALL BOOKS PDF INCLUDED</span>
    <h1>${courseName} — ${semName}</h1>
    <p>Total Subjects: ${subjects.length} | Package Created: ${new Date().toLocaleDateString()}</p>
  </div>

  <h2 style="color: #FFFFFF;">Semester ${semNum} Subjects Catalog & Downloaded PDF Books:</h2>
`;

  subjects.forEach((sub, idx) => {
    overviewHtml += `
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
        <span class="code">${sub.code || 'SUB-' + (idx + 1)}</span>
        <span style="font-size: 12px; color: #C4C9DE; font-weight: bold;">${sub.credits || 4} Credits</span>
      </div>
      <h2>Subject-${idx + 1}: ${sub.name}</h2>
      <p style="color: #C4C9DE; font-size: 14px;">${sub.description || ''}</p>

      <div class="unit-list">
        <strong style="font-size: 12px; text-transform: uppercase; color: #8FE388;">Syllabus Units:</strong>
        <ul style="margin: 8px 0 0 0; padding-left: 20px;">
          ${(sub.syllabus || []).map(u => `<li>${u}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-top: 15px;">
        <strong style="font-size: 12px; text-transform: uppercase; color: #8FE388;">Included Study Materials & PDF Textbooks:</strong><br/>
        <a class="resource-link pdf" href="./Subject-${idx + 1} ${sub.name.replace(/[/\\?%*:|"<>]/g, "")}/${sub.name.replace(/[/\\?%*:|"<>]/g, "")} - Prescribed Textbook.pdf" target="_blank">📄 Open Textbook PDF: ${sub.name}</a>
        <a class="resource-link book" href="./Subject-${idx + 1} ${sub.name.replace(/[/\\?%*:|"<>]/g, "")}/${sub.name.replace(/[/\\?%*:|"<>]/g, "")} - Revision Notes.pdf" target="_blank">📝 Open Revision Notes PDF</a>
        ${(sub.videos || []).map(v => `<a class="resource-link video" href="${v.embedUrl || '#'}" target="_blank">🎥 Video Lecture: ${v.title}</a>`).join('')}
      </div>
    </div>
    `;
  });

  overviewHtml += `
  <div class="footer">
    <p>© EduNexus Academic Higher Education Portal. All subject textbooks and notes generated for Semester ${semNum}.</p>
  </div>
</body>
</html>`;

  semFolder.file(`00_Semester_${semNum}_Master_Index.html`, overviewHtml);

  // 2. Create individual subject folders inside the ZIP file with real PDF files
  subjects.forEach((sub, idx) => {
    if (onProgress) {
      onProgress({
        step: "pdf",
        current: idx + 1,
        total: subjects.length,
        message: `Generating PDF book for ${sub.name}...`
      });
    }

    const safeSubTitle = sub.name.replace(/[/\\?%*:|"<>]/g, "");
    const folderName = `Subject-${idx + 1} ${safeSubTitle}`;
    const subFolder = semFolder.folder(folderName);

    // 2a. Real Academic Textbook PDF
    const bookPdfBytes = generateSubjectBookPdf(sub, courseName, semName);
    subFolder.file(`${safeSubTitle} - Prescribed Textbook.pdf`, bookPdfBytes);
    // Also place directly in zip root with subject code for instant 1-click access
    const codePrefix = sub.code ? `${sub.code} - ` : "";
    zip.file(`${codePrefix}${safeSubTitle} - Textbook.pdf`, bookPdfBytes);

    // 2b. Real Academic Revision Notes PDF
    const notesPdfBytes = generateSubjectNotesPdf(sub, courseName, semName);
    subFolder.file(`${safeSubTitle} - Revision Notes.pdf`, notesPdfBytes);
    zip.file(`${codePrefix}${safeSubTitle} - Revision Notes.pdf`, notesPdfBytes);

    // 2c. Subject Document 1: Text Summary
    let subDoc = `========================================================================\n`;
    subDoc += `SUBJECT STUDY MATERIAL & SYLLABUS FILE\n`;
    subDoc += `Subject-${idx + 1}: ${sub.name}\n`;
    subDoc += `CODE: ${sub.code || 'N/A'} | CREDITS: ${sub.credits || 4}\n`;
    subDoc += `========================================================================\n\n`;
    subDoc += `COURSE: ${courseName}\n`;
    subDoc += `SEMESTER: ${semName}\n\n`;
    subDoc += `DESCRIPTION:\n${sub.description || 'N/A'}\n\n`;

    subDoc += `------------------------------------------------------------------------\n`;
    subDoc += `SYLLABUS MODULES & CHAPTERS:\n`;
    subDoc += `------------------------------------------------------------------------\n`;
    (sub.syllabus || []).forEach((unit, uIdx) => {
      subDoc += `Chapter ${uIdx + 1}: ${unit}\n`;
    });
    subDoc += `\n`;

    subDoc += `------------------------------------------------------------------------\n`;
    subDoc += `RECOMMENDED TEXTBOOKS & PDF BOOKS:\n`;
    subDoc += `------------------------------------------------------------------------\n`;
    (sub.books || []).forEach((book, bIdx) => {
      subDoc += `[Book ${bIdx + 1}] ${book.title}\n`;
      subDoc += `  Author  : ${book.author || 'Academic Faculty'}\n`;
      subDoc += `  Edition : ${book.edition || 'Latest Edition'}\n`;
      subDoc += `  PDF Link: ${book.pdfUrl || 'N/A'}\n`;
      if (book.summary) subDoc += `  Summary : ${book.summary}\n`;
      subDoc += `\n`;
    });

    subDoc += `------------------------------------------------------------------------\n`;
    subDoc += `HANDWRITTEN REVISION NOTES & HANDOUTS:\n`;
    subDoc += `------------------------------------------------------------------------\n`;
    (sub.notes || []).forEach((note, nIdx) => {
      subDoc += `[Notes ${nIdx + 1}] ${note.title}\n`;
      subDoc += `  Author  : ${note.author || 'Department Forum'}\n`;
      subDoc += `  Details : ${note.pages || 'N/A'} Pages (${note.size || 'N/A'})\n`;
      subDoc += `  PDF Link: ${note.pdfUrl || 'N/A'}\n`;
      subDoc += `\n`;
    });

    subDoc += `------------------------------------------------------------------------\n`;
    subDoc += `VIDEO LECTURES & TUTORIALS:\n`;
    subDoc += `------------------------------------------------------------------------\n`;
    (sub.videos || []).forEach((vid, vIdx) => {
      subDoc += `[Video ${vIdx + 1}] ${vid.title}\n`;
      subDoc += `  Instructor : ${vid.instructor || 'Professor'}\n`;
      subDoc += `  Duration   : ${vid.duration || 'N/A'}\n`;
      subDoc += `  Video Link : ${vid.embedUrl || 'N/A'}\n`;
      subDoc += `\n`;
    });

    subFolder.file(`${safeSubTitle} - Syllabus & Notes.txt`, subDoc);

    // 2d. Subject Document 2: Interactive HTML Study Guide
    let subHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Subject-${idx + 1}: ${sub.name} - Study Materials</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 30px; color: #FFFFFF; background: #1C2036; }
    .header { background: #292F4C; border: 1px solid #56608F; border-left: 6px solid #8FE388; padding: 20px; border-radius: 12px; margin-bottom: 20px; }
    h1 { color: #FFFFFF; margin: 0 0 5px 0; font-size: 24px; }
    .meta { font-size: 13px; color: #8FE388; font-weight: bold; }
    .section { margin-bottom: 25px; }
    .section h2 { border-bottom: 2px solid #56608F; padding-bottom: 6px; color: #8FE388; font-size: 18px; }
    .box { background: #292F4C; border: 1px solid #56608F; padding: 15px; border-radius: 8px; margin-bottom: 10px; color: #C4C9DE; }
    .btn { display: inline-block; padding: 8px 16px; background: #3D446C; color: #8FE388; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px; }
    .btn-book { background: #4CD964; color: #1C2036; font-weight: bold; }
    .btn-video { background: #3D446C; color: #8FE388; }
  </style>
</head>
<body>
  <div class="header">
    <div class="meta">Subject-${idx + 1} | Code: ${sub.code || 'N/A'} | Credits: ${sub.credits || 4} | ${semName}</div>
    <h1>Subject-${idx + 1}: ${sub.name}</h1>
    <p style="margin-top: 8px; color: #C4C9DE;">${sub.description || ''}</p>
  </div>

  <div class="section">
    <h2>Offline PDF Documents in this Folder</h2>
    <div class="box">
      <a class="btn btn-book" href="./${safeSubTitle} - Prescribed Textbook.pdf" target="_blank">📄 Open Prescribed Textbook PDF</a>
      <a class="btn" href="./${safeSubTitle} - Revision Notes.pdf" target="_blank" style="margin-left: 10px;">📝 Open Revision Notes PDF</a>
    </div>
  </div>

  <div class="section">
    <h2>Syllabus & Chapter Modules</h2>
    <ol>
      ${(sub.syllabus || []).map(u => `<li style="margin-bottom:8px; font-weight: 500; color: #FFFFFF;">${u}</li>`).join('')}
    </ol>
  </div>

  <div class="section">
    <h2>Recommended Textbooks & PDF Books</h2>
    ${(sub.books || []).map(b => `
      <div class="box">
        <strong style="color: #FFFFFF;">${b.title}</strong> (by ${b.author || 'Faculty'}) — <em>${b.edition || 'Standard'}</em>
        <p style="font-size:13px; color:#C4C9DE; margin:6px 0;">${b.summary || ''}</p>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <h2>Video Lectures</h2>
    ${(sub.videos || []).map(v => `
      <div class="box">
        <strong style="color: #FFFFFF;">${v.title}</strong> — ${v.instructor || ''} (${v.duration || ''})<br/><br/>
        <a class="btn btn-video" href="${v.embedUrl || '#'}" target="_blank">🎥 Watch Video Lecture</a>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

    subFolder.file(`${safeSubTitle} - Study Guide.html`, subHtml);
  });

  if (onProgress) onProgress({ step: "compress", message: "Packaging ZIP archive..." });

  // Generate ZIP file named e.g. "m.com.zip"
  const zipBlob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(zipBlob);

  let zipFileName = customZipName;
  if (!zipFileName) {
    const raw = (courseName || "m.com").toLowerCase().trim();
    if (raw.includes("m.com") || raw.includes("mcom") || raw.includes("master of commerce")) {
      zipFileName = "m.com.zip";
    } else if (raw.includes("b.com") || raw.includes("bcom") || raw.includes("bachelor of commerce")) {
      zipFileName = "b.com.zip";
    } else if (raw.includes("bca")) {
      zipFileName = "bca.zip";
    } else if (raw.includes("b.sc") || raw.includes("bsc")) {
      zipFileName = "b.sc.zip";
    } else if (raw.includes("b.a") || raw.includes("ba")) {
      zipFileName = "b.a.zip";
    } else {
      zipFileName = `${raw.split(" ")[0].replace(/[^a-z0-9.]/g, "")}.zip`;
    }
  }
  if (!zipFileName.endsWith(".zip")) {
    zipFileName += ".zip";
  }

  const link = document.createElement("a");
  link.href = url;
  link.download = zipFileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  if (onProgress) onProgress({ step: "done", message: "Download started!" });
};

export const downloadSemesterSubjects = downloadSemesterSubjectsZip;

export const downloadSingleSubjectPdf = (subject, courseName = "Academic Program", semName = "Semester 1") => {
  return downloadSubjectPdf(subject, courseName, semName, "book");
};

export const downloadSingleSubjectNotesPdf = (subject, courseName = "Academic Program", semName = "Semester 1") => {
  return downloadSubjectPdf(subject, courseName, semName, "notes");
};
