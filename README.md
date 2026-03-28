# All for AI

Curated, practical resources for building AI products and agents.

![Curated](https://img.shields.io/badge/curated-107_resources-0A66C2)
![Original](https://img.shields.io/badge/original-41_assets-1B873F)
![Categories](https://img.shields.io/badge/categories-12-orange)
![License](https://img.shields.io/badge/license-MIT-black)

This is not a generic AI link dump.

This repository is designed as a **builder library**:

- high-signal tools, frameworks, SDKs, and docs
- copy-ready prompts, skills, and workflows
- opinionated starter packs for real use cases
- practical navigation for coding agents, RAG, MCP, evals, and local models

If you want a repository people can actually use, this is the bar:

- fewer low-value links
- more high-quality picks
- more original assets
- more "what should I use for X?" guidance

## Why Star This Repo

- It is curated for builders, not for AI news consumption.
- It contains **41 repository-native assets** you can copy and adapt now.
- It maps the current practical stack for **agents, prompts, instructions, MCP, frameworks, retrieval, evals, observability, and serving**.
- It includes opinionated starter packs so people can stop asking "where do I begin?"

## Start Here

If you only open one page, start here:

- [Start Here](content/indexes/start-here.md)
- [Original Assets](content/indexes/original-assets.md)
- [Builder Landscape](content/indexes/landscape.md)
- [Browse by Scenario](content/indexes/by-scenario.md)
- [Starter Packs](content/starter-packs/README.md)

## What You Can Use Today

| Goal | Best entry point |
| --- | --- |
| Build a coding agent | [AI Coding Pack](content/starter-packs/ai-coding-pack/README.md) |
| Build a deep research assistant | [Deep Research Pack](content/starter-packs/deep-research-pack/README.md) |
| Build an MCP tool-using agent | [MCP Automation Pack](content/starter-packs/mcp-automation-pack/README.md) |
| Build a serious RAG system | [RAG Production Pack](content/starter-packs/rag-production-pack/README.md) |
| Add evaluation before shipping | [Evaluation Pack](content/starter-packs/evaluation-pack/README.md) |
| Run models locally or self-host | [Local Model Pack](content/starter-packs/local-model-pack/README.md) |

## What Is Inside

The repository currently includes **107 curated entries** across **12 categories**:

| Category | Count | What it contains |
| --- | ---: | --- |
| [Skills](content/skills/README.md) | 14 | reusable agent behaviors and skill references |
| [Prompts](content/prompts/README.md) | 20 | copy-ready prompt files and prompt references |
| [Instructions](content/instructions/README.md) | 6 | AGENTS.md, Copilot, Cursor, and CLAUDE.md guidance |
| [MCP](content/mcp/README.md) | 9 | official MCP docs, SDKs, servers, and tools |
| [Frameworks](content/frameworks/README.md) | 15 | agent and AI application frameworks |
| [Retrieval](content/retrieval/README.md) | 5 | RAG and vector retrieval infrastructure |
| [Observability](content/observability/README.md) | 6 | tracing, monitoring, and AI observability |
| [Serving](content/serving/README.md) | 4 | local and production model serving tools |
| [Evals](content/evals/README.md) | 5 | prompt and agent evaluation tools |
| [Workflows](content/workflows/README.md) | 9 | end-to-end execution playbooks |
| [Examples](content/examples/README.md) | 8 | reference repos and runnable blueprints |
| [Starter Packs](content/starter-packs/README.md) | 6 | opinionated stack recommendations |

## Best Pages

Use these pages when you want signal fast:

- [Featured](content/indexes/featured.md)
- [Start Here](content/indexes/start-here.md)
- [Original Assets](content/indexes/original-assets.md)
- [Builder Landscape](content/indexes/landscape.md)
- [Browse by Scenario](content/indexes/by-scenario.md)

## Best Reference Ecosystems

These are some of the highest-value external ecosystems currently included:

- [Anthropic Skills](content/skills/reference/anthropic-skills/README.md)
- [OpenAI Skills](content/skills/reference/openai-skills/README.md)
- [Prompt Engineering Guide](content/prompts/reference/prompt-engineering-guide/README.md)
- [Model Context Protocol Overview](content/mcp/official-overview/README.md)
- [OpenAI Agents SDK (JavaScript/TypeScript)](content/frameworks/openai-agents-js/README.md)
- [OpenAI Agents SDK (Python)](content/frameworks/openai-agents-python/README.md)
- [LangGraph](content/frameworks/langgraph/README.md)
- [promptfoo](content/evals/promptfoo/README.md)
- [OpenAI Cookbook](content/examples/reference/openai-cookbook/README.md)

## Original Assets

This repository includes original assets that are meant to be copied and adapted:

- prompts in `.prompt.yml` format
- `SKILL.md` files for reusable agent behavior
- workflow playbooks
- starter packs for common AI product goals
- instruction templates for `AGENTS.md`, `CLAUDE.md`, Cursor rules, and Copilot instructions

Start here:

- [Original Assets](content/indexes/original-assets.md)
- [Templates](templates/)

## Repo Structure

```text
content/
  skills/          reusable agent behaviors
  prompts/         prompt files and prompt references
  instructions/    AGENTS.md, Copilot, Cursor, CLAUDE.md guidance
  mcp/             MCP docs, SDKs, servers, and tools
  frameworks/      agent and LLM application frameworks
  retrieval/       RAG infrastructure and vector databases
  observability/   tracing and monitoring tools
  serving/         local and production model serving
  evals/           quality and evaluation tooling
  workflows/       task execution playbooks
  examples/        reference repos and blueprints
  starter-packs/   opinionated stack recommendations
  indexes/         entry pages for navigation
```

## Contribution Flow

1. Pick the right category in `content/`.
2. Use the matching file from `templates/` when useful.
3. Add `README.md` and `meta.yml`.
4. Run `node scripts/validate-metadata.js`.
5. Open a focused pull request.

See:

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [Getting Started](docs/getting-started.md)
- [Taxonomy](docs/taxonomy.md)

## Principles

- prefer practical builder resources over generic AI hype
- prefer public, documented, high-signal repos and docs
- prefer original summaries over copied wording
- prefer assets people can actually use over link quantity

## Roadmap

The next improvements are straightforward:

- keep expanding the original prompt and skill library
- add more scenario-specific starter packs
- improve Chinese-friendly usage notes
- add better auto-generated indexes and contributor automation

See [ROADMAP.md](ROADMAP.md).
