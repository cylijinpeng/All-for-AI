#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const extensions = new Set([".md", ".yml", ".yaml"]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") {
        continue;
      }
      files.push(...walk(fullPath));
      continue;
    }
    if (extensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractLinks(text) {
  const matches = text.match(/https?:\/\/[^\s)"]+/g);
  return matches ? [...new Set(matches)] : [];
}

function shouldSkip(link) {
  return (
    link.includes("example.com") ||
    link.includes("github.com/...") ||
    link.includes("/org/repo") ||
    link.includes("/owner/repo") ||
    link.includes("{{") ||
    link.includes("}}")
  );
}

async function checkLink(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "all-for-ai-link-checker/0.1"
      }
    });

    if (!response.ok) {
      return `${response.status} ${response.statusText}`;
    }

    return null;
  } catch (error) {
    return error.name === "AbortError" ? "timeout" : error.message;
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  const files = walk(rootDir);
  const links = new Map();
  const networkMode = process.env.CHECK_LINKS_NETWORK === "1";

  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    for (const link of extractLinks(text)) {
      if (shouldSkip(link)) {
        continue;
      }
      if (!links.has(link)) {
        links.set(link, []);
      }
      links.get(link).push(path.relative(rootDir, file));
    }
  }

  let hasErrors = false;

  for (const [link, owners] of links.entries()) {
    try {
      new URL(link);
    } catch (error) {
      hasErrors = true;
      console.error(`\n${link}`);
      console.error(`- error: invalid URL`);
      console.error(`- referenced in: ${owners.join(", ")}`);
      continue;
    }

    if (!networkMode) {
      continue;
    }

    const result = await checkLink(link);
    if (result) {
      hasErrors = true;
      console.error(`\n${link}`);
      console.error(`- error: ${result}`);
      console.error(`- referenced in: ${owners.join(", ")}`);
    }
  }

  if (hasErrors) {
    process.exit(1);
  }

  if (networkMode) {
    console.log(`Checked ${links.size} unique link(s) over the network.`);
    return;
  }

  console.log(`Validated ${links.size} unique link(s) for syntax.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
