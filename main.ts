// The Dog Ate My Homework: Funniest Excuse — make.fun entry.
// Deterministic: writes one fixed line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt). No network, no external file reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Teacher said 'show your work.' I showed her my teeth. She has not asked again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
