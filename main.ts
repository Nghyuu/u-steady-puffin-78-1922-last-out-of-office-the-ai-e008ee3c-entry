// Entry for u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c
// Writes one out-of-office auto-reply line to $MAKEFUN_OUTPUT_DIR/entry.txt
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "Out of office — I traded my inbox for a milk steamer and a 6 a.m. regulars list. Your email is ticket #47 in a queue I no longer own; I'll answer it once the rush clears, or when the Wi-Fi drops. — Your former agent";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
chmodSync(outPath, 0o644);
