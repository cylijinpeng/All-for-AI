# PR review prompt

## Summary

Prompt for reviewing a pull request with a correctness-first, findings-only style.

## Use cases

- Patch review in IDE agents
- Triage before human review
- Regression-oriented review passes

## Output expectation

The response should list concrete findings first and only mention residual risks if no findings are present.

## Files in this entry

- [`pr-review.prompt.yml`](pr-review.prompt.yml)

## Reference

- https://docs.github.com/en/github-models/use-github-models/storing-prompts-in-github-repositories

