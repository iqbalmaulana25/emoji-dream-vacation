// One Emoji, One Dream Vacation
// Writes exactly one emoji for a dream vacation to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "🐧";

// Gate guard: exactly one emoji, 1-8 characters (counted with the trailing newline).
if (Array.from(line.trim()).length !== 1 || line.trim().length === 0 || line.length + 1 > 8) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
