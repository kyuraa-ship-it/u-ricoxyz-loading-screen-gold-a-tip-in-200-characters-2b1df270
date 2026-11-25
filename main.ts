import { mkdirSync, writeFileSync } from "node:fs";

// One loading-screen tip for a stressed developer and the AI agent
// sitting next to them: the agent did the unthinkable, was right,
// and that is exactly why it stings. 145 characters, well inside
// the 200-character gate, no coffee / deadline / compile rerun.
const tip =
  "Loading… Your agent fixed the bug, renamed your variables, and deleted the comment that said ‘do not touch’. It was right. That’s the worst part.";

// The gate wants 1–200 characters of real text: enforce it here so
// a future edit can never silently ship an invalid entry.
const text = tip.trim().slice(0, 200);
if (text.length === 0) throw new Error("empty tip");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
