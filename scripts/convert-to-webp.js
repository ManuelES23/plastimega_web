/**
 * Script de conversión de imágenes a WebP
 * Uso: node scripts/convert-to-webp.js
 *
 * Convierte todas las imágenes PNG/JPG de public/img a WebP
 * conservando los originales como fallback.
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const INPUT_DIR = "./public/img";
const WEBP_QUALITY = 82; // 0-100, mayor = mejor calidad y más peso
const SKIP_ALREADY_WEBP = true;

let converted = 0;
let skipped = 0;
let totalSavedKB = 0;

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllImages(fullPath)));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convert(filePath) {
  const ext = extname(filePath);
  const webpPath = filePath.slice(0, -ext.length) + ".webp";

  if (SKIP_ALREADY_WEBP) {
    try {
      await stat(webpPath);
      skipped++;
      return; // Ya existe el WebP
    } catch {
      // No existe, hay que crearlo
    }
  }

  const originalStat = await stat(filePath);
  await sharp(filePath).webp({ quality: WEBP_QUALITY }).toFile(webpPath);
  const newStat = await stat(webpPath);

  const savedKB = Math.round((originalStat.size - newStat.size) / 1024);
  totalSavedKB += savedKB;
  converted++;

  const ratio = Math.round((1 - newStat.size / originalStat.size) * 100);
  console.log(
    `✓ ${basename(filePath).padEnd(40)} ${Math.round(originalStat.size / 1024)}KB → ${Math.round(newStat.size / 1024)}KB  (-${ratio}%)`,
  );
}

async function main() {
  console.log("🔄 Buscando imágenes en public/img...\n");
  const images = await getAllImages(INPUT_DIR);
  console.log(`Encontradas ${images.length} imágenes. Convirtiendo...\n`);

  for (const img of images) {
    try {
      await convert(img);
    } catch (e) {
      console.error(`✗ Error en ${img}: ${e.message}`);
    }
  }

  console.log(`\n✅ Conversión completada:`);
  console.log(`   Convertidas: ${converted}`);
  console.log(`   Ya existían (omitidas): ${skipped}`);
  console.log(`   Ahorro total: ~${Math.round(totalSavedKB / 1024)} MB`);
}

main();
