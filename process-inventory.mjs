import fs from 'fs';
import path from 'path';

const INVENTORY_DIR = path.resolve('./inventory images and ts files');
const OUTPUT_FILE = path.resolve('./app/data/vehicles.ts');
const IMAGES_DIR = path.resolve('./public/images');

// Ensure image dir exists
if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

let finalData = `export const vehicles = [\n`;

const items = fs.readdirSync(INVENTORY_DIR, { withFileTypes: true });

for (const item of items) {
    if (!item.isDirectory()) continue;

    const dirPath = path.join(INVENTORY_DIR, item.name);
    const files = fs.readdirSync(dirPath);

    const tsFile = files.find(f => f.endsWith('.ts'));
    const imageFiles = files.filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));

    if (!tsFile) continue;

    // 1. Copy images
    const imagePaths = [];
    for (const img of imageFiles) {
        const src = path.join(dirPath, img);
        const destName = img.replace(/ /g, '-').replace(/[^a-zA-Z0-9.\-]/g, '').toLowerCase();
        const dest = path.join(IMAGES_DIR, destName);
        fs.copyFileSync(src, dest);
        imagePaths.push(`"/images/${destName}"`);
    }

    // 2. Read and parse TS file
    let tsContent = fs.readFileSync(path.join(dirPath, tsFile), 'utf-8');

    // Remove the comments at top if they exist
    tsContent = tsContent.replace(/\/\/.*$/gm, '').trim();

    // The data might be `{ ... }`. We just need to inject the `images` array inside it.
    // Let's insert it right after the first '{'
    if (tsContent.startsWith('{')) {
        let replacement = `{\n  images: [\n    ${imagePaths.join(',\n    ')}\n  ],`;
        tsContent = tsContent.replace('{', replacement);
    }

    finalData += tsContent + `,\n`;
}

finalData += `];\n`;

fs.writeFileSync(OUTPUT_FILE, finalData, 'utf-8');
console.log('Successfully generated vehicles.ts and copied images!');
