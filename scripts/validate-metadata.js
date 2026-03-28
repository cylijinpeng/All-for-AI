#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const contentDir = path.join(rootDir, "content");
const requiredKeys = ["name", "type", "category", "summary", "tags", "links"];

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

function parseScalar(rawValue) {
  const value = rawValue.trim();

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

function parseYaml(text) {
  const result = {};
  let currentKey = null;
  let currentContainer = null;

  for (const originalLine of text.split(/\r?\n/)) {
    const line = originalLine.replace(/\t/g, "  ");
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const topLevelMatch = /^([a-zA-Z0-9_-]+):\s*(.*)$/.exec(line);
    if (topLevelMatch && !line.startsWith(" ")) {
      const [, key, rawValue] = topLevelMatch;

      if (rawValue === "") {
        result[key] = null;
        currentKey = key;
        currentContainer = null;
      } else {
        result[key] = parseScalar(rawValue);
        currentKey = null;
        currentContainer = null;
      }
      continue;
    }

    const arrayMatch = /^\s{2}-\s+(.+)$/.exec(line);
    if (arrayMatch && currentKey) {
      if (!Array.isArray(result[currentKey])) {
        result[currentKey] = [];
      }
      result[currentKey].push(parseScalar(arrayMatch[1]));
      currentContainer = "array";
      continue;
    }

    const mapMatch = /^\s{2}([a-zA-Z0-9_-]+):\s*(.+)$/.exec(line);
    if (mapMatch && currentKey) {
      if (
        result[currentKey] === null ||
        Array.isArray(result[currentKey]) ||
        typeof result[currentKey] !== "object"
      ) {
        result[currentKey] = {};
      }
      result[currentKey][mapMatch[1]] = parseScalar(mapMatch[2]);
      currentContainer = "map";
      continue;
    }

    if (currentContainer === "map") {
      throw new Error(`Unsupported YAML line: ${originalLine}`);
    }
  }

  return result;
}

function validateMeta(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const data = parseYaml(raw);
  const problems = [];

  for (const key of requiredKeys) {
    const value = data[key];
    const isEmptyArray = Array.isArray(value) && value.length === 0;
    const isEmptyObject =
      value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0;

    if (value === undefined || value === null || value === "" || isEmptyArray || isEmptyObject) {
      problems.push(`missing required key "${key}"`);
    }
  }

  return { data, problems };
}

if (!fs.existsSync(contentDir)) {
  console.error("content directory not found");
  process.exit(1);
}

const metaFiles = walk(contentDir);

if (metaFiles.length === 0) {
  console.error("no meta.yml files found under content/");
  process.exit(1);
}

let hasErrors = false;

for (const filePath of metaFiles) {
  try {
    const { problems } = validateMeta(filePath);
    if (problems.length > 0) {
      hasErrors = true;
      console.error(`\n${path.relative(rootDir, filePath)}`);
      for (const problem of problems) {
        console.error(`- ${problem}`);
      }
    }
  } catch (error) {
    hasErrors = true;
    console.error(`\n${path.relative(rootDir, filePath)}`);
    console.error(`- parse error: ${error.message}`);
  }
}

if (hasErrors) {
  process.exit(1);
}

console.log(`Validated ${metaFiles.length} metadata file(s).`);
