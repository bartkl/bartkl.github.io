---
draft: true
tags:
  - troubleshooting
  - ollama
  - llm
---
I've just pulled the latest `zephyr` image. Let's run the Ollama server in the usual way:

```bash
# Make sure to activate any (virtual) environment before proceeding.
$ ollama serve
```

Let's play around with a fun question:

```bash
$ curl http://localhost:11434/api/generate -d '{"model": "zephyr", "prompt": "Why is the sky blue?"}'
{"error":"model 'zephyr' not found, try pulling it first"}
```

Indeed, in the server log I'm seeing a 404 error:

```bash
[GIN] 2023/12/18 - 13:52:50 | 404 |       3.667µs |       127.0.0.1 | GET      "/api/generate"
```

Let's ask what models are currently loaded:

```bash
$ curl http://localhost:11434/api/tags
{"models":[]}
```

Hmm, are you sure? Let's ask the server itself:

```bash
$ ollama list
NAME	ID	SIZE	MODIFIED
```

That's weird, I'm sure I've got some models. Let's check on the file system:

```bash
$ find /usr/share/ollama/.ollama/models/
/usr/share/ollama/.ollama/models/
/usr/share/ollama/.ollama/models/blobs
/usr/share/ollama/.ollama/models/blobs/sha256:8c779e4341ab7867a495e2ceabb47e08412280ec3fad99289a07dabf5cfa3ad1
/usr/share/ollama/.ollama/models/blobs/sha256:a96be15318d6dcec9940c6fa096920e815c8f38d2127f30c6b3f25cb8e90f37c
/usr/share/ollama/.ollama/models/blobs/sha256:27aebd64fb630c786c3d165d82442ff65215a94c0980aa0da99a0aae0eadd9d2
/usr/share/ollama/.ollama/models/blobs/sha256:0e1cff9c835eb583ddd7cbb60d578d20bf53883e00b39db18616a009d052915f
/usr/share/ollama/.ollama/models/blobs/sha256:69c3d50a1464ae20f0043f965de4639c28e55ae27b47d382361c324fd2b1018f
/usr/share/ollama/.ollama/models/blobs/sha256:6ffdc73694ab0372fa24d24a8053172339e6f809ed82b350179ade19892ce32d
/usr/share/ollama/.ollama/models/manifests
/usr/share/ollama/.ollama/models/manifests/registry.ollama.ai
/usr/share/ollama/.ollama/models/manifests/registry.ollama.ai/library
/usr/share/ollama/.ollama/models/manifests/registry.ollama.ai/library/zephyr
/usr/share/ollama/.ollama/models/manifests/registry.ollama.ai/library/zephyr/adjusted
/usr/share/ollama/.ollama/models/manifests/registry.ollama.ai/library/zephyr/latest
```

Okay, so clearly I have models stored. Let's explicitly point out this location using the `OLLAMA_MODELS` environment variable:

```bash
$ OLLAMA_MODELS=/usr/share/ollama/.ollama/models ollama serve
```

Let's try again:

```bash
$ curl http://localhost:11434/api/tags
{"models":[{"name":"zephyr:adjusted","modified_at":"2023-12-18T13:04:53.058893372+01:00","size":4108917955,"digest":"766eaf98b32d6318ca02b619c9d88dcde6b5e4118bba0e16c9d6a3fc6aff0072","details":{"format":"gguf","family":"llama","families":["llama"],"parameter_size":"7B","quantization_level":"Q4_0"}},{"name":"zephyr:latest","modified_at":"2023-12-16T19:27:37.759461868+01:00","size":4108917840,"digest":"03af36d860cca7429f4ba5dff423111834424cb4513fbd85ec46d841762946ef","details":{"format":"gguf","family":"llama","families":null,"parameter_size":"7B","quantization_level":"Q4_0"}}]}
```

That's better! So, by explicitly pointing out to Ollama to look for the models in the default location, all of a sudden everything works. Very weird stuff, but at least it works now:

```bash
$ curl http://localhost:11434/api/generate -d '{"model": "zephyr", "prompt": "Why is the sky blue?"}'
# Gives response in chunks properly.
```