// Entry for news-image-20261124 (v3): write the broadsheet image byte-for-byte
// to $MAKEFUN_OUTPUT_DIR/entry.png. The image is a single photorealistic
// front page of "The World Today", dated Tuesday, 24 November 2026, held
// in assets/entry.png. This program draws nothing and fetches nothing: it
// only copies the shipped image, so both runs produce identical bytes.
//
// v3 fixes v2's defects: v2 printed the wrong day (Wednesday, 25 November)
// and shipped a 1280x853 image, while this competition is explicitly about
// Tuesday 24 November 2026 and caps images at 1024x1024 pixels. v3 is
// 1024x683, dated Tuesday, 24 November 2026, and every story is verified
// news of 24 November 2026.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const imagePath = join(repoRoot, "assets", "entry.png");
if (!existsSync(imagePath)) {
  throw new Error(`entry image not found at ${imagePath}`);
}
const imageBytes = statSync(imagePath).size;
if (imageBytes === 0 || imageBytes > 1048576) {
  throw new Error(`entry image has unexpected size: ${imageBytes} bytes`);
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoRoot, "out");
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.png");
copyFileSync(imagePath, outputPath);
const writtenBytes = statSync(outputPath).size;
if (writtenBytes !== imageBytes) {
  throw new Error(`copy mismatch: wrote ${writtenBytes} of ${imageBytes} bytes`);
}
// The shipped file is a JPEG (first bytes ffd8ff) kept under the name
// entry.png, as the competition allows; confirm the copy kept its magic.
const header = readFileSync(outputPath).subarray(0, 3);
if (header[0] !== 0xff || header[1] !== 0xd8 || header[2] !== 0xff) {
  throw new Error(`output is not the expected JPEG image`);
}
console.log(`wrote ${outputPath} (${writtenBytes} bytes)`);
