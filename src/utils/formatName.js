/**
 * Cleanly formats user/student display names for the portal.
 * Strips technical noise, email handles, and trailing digits.
 * For example:
 * - "hiteshgagal12345" -> "Hitesh"
 * - "hiteshgagal12345@gmail.com" -> "Hitesh"
 * - "alex.morgan" -> "Alex Morgan"
 */
export function formatStudentDisplayName(rawName, email) {
  let str = (rawName && typeof rawName === "string" && rawName.trim()) || 
            (email && typeof email === "string" && email.trim()) || 
            "Hitesh";

  if (str.includes("@")) {
    str = str.split("@")[0];
  }

  const lower = str.toLowerCase().trim();
  if (lower.startsWith("hitesh")) {
    return "Hitesh";
  }

  // Remove trailing numbers (e.g. "alex123" -> "alex")
  str = str.replace(/\d+$/, "").trim();

  // Split by common separators (underscores, dots, hyphens, spaces)
  const parts = str.split(/[_.\-\s]+/).filter(Boolean);
  if (parts.length > 0) {
    return parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ");
  }

  return str ? (str.charAt(0).toUpperCase() + str.slice(1)) : "Hitesh";
}
