# Local Model Pack

## Summary

Starter pack for self-hosted and local model workflows.

## Best for

- You want privacy, cost control, offline experimentation, or lower-latency self-hosted inference.
- You need a path from local experimentation to more serious serving infrastructure.

## Recommended stack

- Local development
  - [Ollama](../../serving/ollama/README.md)
  - [llama.cpp](../../serving/llama-cpp/README.md)
- Higher-scale serving
  - [vLLM](../../serving/vllm/README.md)
  - [SGLang](../../serving/sglang/README.md)
- Routing and gateway
  - [LiteLLM](../../frameworks/litellm/README.md)
- Observability
  - [OpenLIT](../../observability/openlit/README.md)
  - [Helicone](../../observability/helicone/README.md)

## How to use this pack

1. Read the linked category pages for the tools in this pack.
2. Start with the smallest viable stack.
3. Add eval and observability before the system gets complicated.
4. Upgrade pieces only when your bottleneck is clear.
