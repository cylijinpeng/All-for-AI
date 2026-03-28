# All for AI

Curated skills, prompts, MCP servers, workflows, and runnable examples for building AI agents.

This repository is designed as an **AI Agent Builder Kit** rather than a generic AI link dump. The goal is to collect reusable building blocks that developers can copy, adapt, and ship.

## Why this repo exists

Most AI lists are broad but hard to reuse. This repo focuses on:

- Reusable assets instead of raw links
- Clear metadata for filtering and future automation
- English-first content with Chinese-friendly notes where useful
- Practical builder scenarios such as coding, research, and automation

## What lives here

- `content/`: reviewed resources and starter assets
- `templates/`: authoring templates for contributors
- `docs/`: curation rules, taxonomy, and contributor guidance
- `data/`: shared categories, tags, and validation schema
- `scripts/`: local validation and automation helpers

## Core collections

- `skills/`: reusable agent behaviors and task playbooks
- `prompts/`: prompts that can be copied into GitHub Models, IDE agents, or apps
- `mcp/`: MCP servers, starter setups, and integration notes
- `workflows/`: end-to-end agent flows for real tasks
- `examples/`: runnable or near-runnable project blueprints

## Seed collection

Current starter content includes:

- 3 skills
- 5 prompts
- 3 MCP entries
- 3 workflows
- 2 examples

Browse category indexes:

- `content/skills/README.md`
- `content/prompts/README.md`
- `content/mcp/README.md`
- `content/workflows/README.md`
- `content/examples/README.md`
- `content/indexes/featured.md`

## Contribution flow

1. Pick a category in `content/`.
2. Start from the matching file in `templates/`.
3. Add `README.md` and `meta.yml`.
4. Run `node scripts/validate-metadata.js`.
5. Open a pull request.

## Curation principles

- Prefer reusable assets over opinion-only articles
- Prefer active, documented, public resources
- Avoid duplicates and dead links
- Write short summaries that explain why an item matters

## Current status

This is the first repository scaffold. The initial focus is narrow by design:

- Skills
- Prompts
- MCP
- Workflows
- Examples

See `ROADMAP.md` for expansion plans.
