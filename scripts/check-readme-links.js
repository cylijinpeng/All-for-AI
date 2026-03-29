#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const contentDir = path.join(rootDir, "content");
const ignoredCategories = new Set(["starter-packs", "workflows"]);
const ignoredPrefixes = ["https://github.com/cylijinpeng/ai-builder-kit"];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name === "meta.yml") {
      files.push(fullPath);
    }
  }

  return files;
}

function parseMeta(metaPath) {
  const lines = fs.readFileSync(metaPath, "utf8").split(/\r?\n/);
  const data = { links: [], category: "" };
  let inLinks = false;

  for (const line of lines) {
    if (line.startsWith("category:")) {
      data.category = line.split(":", 2)[1].trim();
    }
    if (line.startsWith("links:")) {
      inLinks = true;
      continue;
    }
    if (inLinks) {
      if (line.startsWith("  ")) {
        const parts = line.trim().split(":", 2);
        if (parts.length === 2) {
          const value = parts[1].trim();
          if (value.startsWith("http")) {
            data.links.push(value);
          }
        }
        continue;
      }
      if (line.trim()) {
        inLinks = false;
      }
    }
  }

  return data;
}

const metaFiles = walk(contentDir);
const missing = [];

for (const metaFile of metaFiles) {
  const { links, category } = parseMeta(metaFile);
  if (links.length === 0 || ignoredCategories.has(category)) {
    continue;
  }
  const externalLinks = links.filter(
    (link) => !ignoredPrefixes.some((prefix) => link.startsWith(prefix))
  );
  if (externalLinks.length === 0) {
    continue;
  }

  const readmePath = path.join(path.dirname(metaFile), "README.md");
  if (!fs.existsSync(readmePath)) {
    continue;
  }

  const readme = fs.readFileSync(readmePath, "utf8");
  const found = externalLinks.some((link) => readme.includes(link));
  if (!found) {
    missing.push(path.relative(rootDir, readmePath));
  }
}

if (missing.length > 0) {
  console.error("README files missing metadata links:");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log(`Validated README link coverage for ${metaFiles.length} metadata file(s).`);
