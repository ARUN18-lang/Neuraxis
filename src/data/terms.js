import policyRaw from "./policy.md?raw";

function parsePolicy(raw) {
  const normalized = raw.replace(/\r\n/g, "\n").trim();

  // Match only the standalone section header, not the phrase in the intro paragraph
  const sectionMatch = normalized.match(
    /^(.+?)\n([\s\S]*?)\nTERMS\s*&\s*CONDITIONS\s*\n([\s\S]*)$/i
  );

  if (!sectionMatch) {
    return {
      company: "NEURAXIS TECHNOLOGIES",
      intro: normalized,
      title: "Terms & Conditions",
      clauses: [],
    };
  }

  const [, companyLine, introBlock, bodyBlock] = sectionMatch;

  const intro = introBlock
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  const clauses = [];
  const lines = bodyBlock.split("\n");
  let current = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Skip stray page-number artifacts (e.g. standalone "1" mid-clause)
    if (/^\d+$/.test(trimmed) && current) {
      continue;
    }

    const clauseStart = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (clauseStart) {
      if (current) clauses.push(current);
      current = {
        num: Number(clauseStart[1]),
        parts: [clauseStart[2]],
      };
      continue;
    }

    if (current) {
      current.parts.push(trimmed);
    }
  }

  if (current) clauses.push(current);

  return {
    company: companyLine.trim(),
    intro,
    title: "Terms & Conditions",
    clauses: clauses.map(({ num, parts }) => ({
      num,
      text: parts.join(" ").replace(/\s+/g, " ").trim(),
    })),
  };
}

export const termsContent = parsePolicy(policyRaw);
