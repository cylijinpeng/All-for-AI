# Contributing

This repository accepts curated resources, original templates, and starter implementations that help people build AI agents.

## What to add

- Skills with clear task boundaries
- Prompts with practical usage notes
- Instruction resources such as AGENTS.md and Copilot guidance
- MCP servers or integration starters
- Framework and SDK references that matter to builders
- Retrieval, serving, and observability tools that are widely useful in real AI systems
- Evaluation tools and testing references
- Workflows that describe an end-to-end outcome
- Examples that are runnable or close to runnable
- Starter packs that recommend a concrete stack for a real use case

## What not to add

- Pure marketing pages
- Low-effort prompt dumps without context
- Dead, private, or undocumented links
- Duplicates of already listed resources

## Required structure

Each resource should live in its own folder under `content/` and include:

- `README.md`: human-readable summary
- `meta.yml`: machine-readable metadata

Optional additions:

- `examples/`
- `assets/`
- `.prompt.yml` or `.prompt.yaml` for prompt entries
- `SKILL.md` for skill entries

## Naming

- Use lowercase kebab-case for folders
- Use short, descriptive names
- Keep one resource per folder

## Metadata expectations

Each `meta.yml` should define at least:

- `name`
- `type`
- `category`
- `summary`
- `links`
- `tags`

Use values from `data/taxonomy/` when possible.

## Review checklist

- The resource is relevant to AI builders
- The README explains the real use case
- The metadata is complete and valid
- The links work
- The content adds something not already covered

## Local validation

Run:

```bash
node scripts/validate-metadata.js
```

If you add links, also run:

```bash
node scripts/check-links.js
```

For a stricter network check, run:

```bash
CHECK_LINKS_NETWORK=1 node scripts/check-links.js
```

## Pull requests

Keep pull requests focused. A single PR should usually add one resource family or one documentation improvement.
