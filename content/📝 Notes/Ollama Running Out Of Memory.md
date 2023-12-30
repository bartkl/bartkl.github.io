---
draft: true
tags:
  - troubleshooting
  - ollama
  - llm
---
Serving the model should be as easy as:
```bash
$ ollama serve
```

However, if I then fire a request at it using the [notebooks provided by Rahul Nayak](https://github.com/rahulnyk/knowledge_graph/tree/main), my GPU immediately runs out of memory:

```
2023/12/18 08:48:35 llama.go:300: 3208 MB VRAM available, loading up to 19 GPU layers
[...]
llm_load_tensors: ggml ctx size =    0.12 MiB
llm_load_tensors: using CUDA for GPU acceleration
llm_load_tensors: mem required  = 1694.39 MiB
llm_load_tensors: offloading 19 repeating layers to GPU
llm_load_tensors: offloaded 19/33 layers to GPU
llm_load_tensors: VRAM used: 2223.59 MiB
[...]
llama_new_context_with_model: compute buffer total size = 291.32 MiB
llama_new_context_with_model: VRAM scratch buffer: 288.00 MiB
llama_new_context_with_model: total VRAM used: 2815.60 MiB (model: 2223.59 MiB, context: 592.00 MiB)
[...]
CUDA error 2 at /go/src/github.com/jmorganca/ollama/llm/llama.cpp/gguf/ggml-cuda.cu:9096: out of memory
current device: 0
GGML_ASSERT: /go/src/github.com/jmorganca/ollama/llm/llama.cpp/gguf/ggml-cuda.cu:9096: !"CUDA error"
2023/12/18 08:48:40 llama.go:451: 2 at /go/src/github.com/jmorganca/ollama/llm/llama.cpp/gguf/ggml-cuda.cu:9096: out of memory
current device: 0
GGML_ASSERT: /go/src/github.com/jmorganca/ollama/llm/llama.cpp/gguf/ggml-cuda.cu:9096: !"CUDA error"
2023/12/18 08:48:40 llama.go:459: error starting llama runner: llama runner process has terminated
```

What happens here is that Ollama overestimates the amount of layers it offloads to the GPU, causing to much memory to be asked of it. I don't exactly know why this issue still occurs on my machine, but hardcoding a safe amount of layers yourself is a workaround that works for me (see [#618](https://github.com/jmorganca/ollama/issues/618) for more details). The estimation Ollama did is, as you can read in the log above, to offload 19 layers. I managed to avoid out of memory errors using 15 layers.

Knowing how much VRAM your GPU has total is a good start, but it's better to get a grasp of how much is actually available for use by Ollama. I've used the `nvidia-smi` command line tool and the NVIDIA Settings GUI application to get to know this information. Read more on that [here](https://unix.stackexchange.com/questions/38560/gpu-usage-monitoring-cuda). Probably the overestimation Ollama does in my case is because my OS uses my GPU quite actively, where Ollama might assume I have a dedicated GPU at its disposal. I don't know.

I don't know exactly how to relate the amount of layers and the memory usage, but by trying out values and keeping an eye out on the logs you'll find some reasonable value that works.

Anyways, to adjust the amount of layers offloaded to the GPU, you have to create a new modelfile which bases itself on the model you wish to use. Then, you assign a safe layer count as value to the parameter `num_gpus`, create a model based on this modelfile and use it. That's it.

## Further Reading
* ["out of memory" when using CUDA #790](https://github.com/jmorganca/ollama/issues/790)
* [Trying to load too many layers, vram oom, reverts to cpu only. #618](https://github.com/jmorganca/ollama/issues/618)
* [Nvidia user? Make sure you don't offload too many layers - Reddit](https://www.reddit.com/r/LocalLLaMA/comments/14kt3hz/nvidia_user_make_sure_you_dont_offload_too_many/)