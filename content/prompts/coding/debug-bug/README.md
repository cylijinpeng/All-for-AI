# Debug bug prompt

## Summary

A debugging prompt for turning vague bug reports into a reproducible investigation plan.

## Use cases

- Triage a failing feature
- Ask an IDE agent to inspect a regression
- Generate a debugging checklist before changing code

## Output expectation

The response should include:

- A likely root-cause shortlist
- Missing information to collect
- Reproduction steps
- Safe next debugging actions

## Files in this entry

- [`debug-bug.prompt.yml`](debug-bug.prompt.yml)

## Reference

- https://docs.github.com/en/github-models/use-github-models/storing-prompts-in-github-repositories

