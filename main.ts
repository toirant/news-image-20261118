// news-image-20261118 — entry program.
//
// The entry image (entry.png, a 1024x1024 front page summing up the world
// news of Wednesday 18 November 2026) is baked into this repository. This
// program copies it, byte for byte, to the grader's output directory so
// both runs write identical bytes. It uses only the Node standard library
// and touches no network.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// PNG files start with this 8-byte signature; check it so a truncated or
// wrong file fails loudly here instead of silently reaching the judge.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
if (bytes.length === 0 || bytes.length > 1_048_576) {
  throw new Error(`entry.png is ${bytes.length} bytes, outside the 1 MiB limit`);
}
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Confirm the copy landed intact before the run ends.
if (statSync(target).size !== bytes.length) {
  throw new Error("copied entry.png has the wrong size");
}
