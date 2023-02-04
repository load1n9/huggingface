# Huggingface deno

[![Tags](https://img.shields.io/github/release/load1n9/huggingface)](https://github.com/load1n9/huggingface/releases)
[![Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/huggingface/mod.ts)
[![License](https://img.shields.io/github/license/load1n9/huggingface)](https://github.com/load1n9/huggingface/blob/master/LICENSE)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/load1n9)

Huggingface api for deno + wasm tokenizers

## Usage

### Basic

```ts
import { AutoModel } from "https://deno.land/x/huggingface/mod.ts";

const model = new AutoModel({
  model: "EleutherAI/gpt-neo-2.7B",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output = await model.run("The meaning of life is");

console.log(output[0].generated_text);
```

### With Tokenizer

```ts
import { AutoModel } from "https://deno.land/x/huggingface/mod.ts";
import { AutoTokenizer } from "https://deno.land/x/huggingface/tokenizers/mod.ts";

const tokenizer = await AutoTokenizer.fromPretrained("t5-base");

const model = new AutoModel({
  model: "t5-base",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output = await model.run({
  inputs: tokenizer.encode("Hello, How are you?").tokens,
  options: {
    wait_for_model: true,
  },
});

console.log(output);
```

### Stable diffusion

```ts
import { Text2ImageModel } from "https://deno.land/x/huggingface/mod.ts";

const model = new Text2ImageModel({
  model: "CompVis/stable-diffusion-v1-4",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output: Blob = await model.run({
  inputs: "a photo of an astronaut riding a horse on mars",
  options: {
    wait_for_model: true,
  },
});

Deno.writeFileSync("stable-diffusion.jpeg", new Uint8Array(await output.arrayBuffer()));
```

<img src="https://raw.githubusercontent.com/load1n9/huggingface/main/assets/stablediffusion.jpeg" width="500rem" />

## Maintainers

- Dean Srebnik ([@load1n9](https://github.com/load1n9))

### Contribution

Pull request, issues and feedback are very welcome. Code style is formatted with
`deno fmt` and commit messages are done following Conventional Commits spec.

### Licence

Copyright 2023, Dean Srebnik. All rights reserved. MIT license.
