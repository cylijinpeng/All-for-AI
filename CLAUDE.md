# CLAUDE.md

## Repository purpose

This repository curates practical resources for building AI products and agents. The highest-value content lives in `content/`, especially prompts, skills, workflows, starter packs, and the index pages.

## Important paths

- `README.md`: public landing page
- `content/`: curated entries and original assets
- `content/indexes/`: navigation pages
- `templates/`: templates for prompts, skills, and instruction files
- `docs/`: taxonomy, style, and curation policy
- `scripts/`: metadata and link validation helpers

## Working rules

- Prefer practical builder resources over broad AI hype
- Keep one resource per folder under `content/`
- Add both `README.md` and `meta.yml` for new entries
- Keep summaries concise and original
- Update category `README.md` files when adding notable entries

## Validation

Run:

- `node scripts/validate-metadata.js`
- `node scripts/check-links.js`

## Editing style

- Prefer focused, additive changes
- Avoid duplicating the same resource in multiple places
- Keep README navigation in sync with material changes
