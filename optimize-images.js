import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/assets";
const outputDir = "./src/assets/optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

for (const file of files) {
  if (!/\.(png|jpg|jpeg)$/i.test(file)) {
    continue;
  }

  const inputPath = path.join(inputDir, file);

  const outputName = file.replace(
    /\.(png|jpg|jpeg)$/i,
    ".webp"
  );

  const outputPath = path.join(
    outputDir,
    outputName
  );

  await sharp(inputPath)
    .resize({
      width: 1400,
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
    })
    .toFile(outputPath);

  console.log(`✅ ${file} → ${outputName}`);
}

