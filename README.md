# huggingface deno

Huggingface api for deno + wasm tokenizers

## Usage

```ts
import { Inference } from "https://deno.land/x/huggingface/mod.ts";

const model = new Inference({
  model: "EleutherAI/gpt-neo-2.7B",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output = await model.run("The meaning of life is");

console.log(output[0].generated_text);
```

## Maintainers

- Dean Srebnik ([@load1n9](https://github.com/load1n9))

### Contribution

Pull request, issues and feedback are very welcome. Code style is formatted with
`deno fmt` and commit messages are done following Conventional Commits spec.

### Licence

Copyright 2023, Dean Srebnik. All rights reserved. MIT license.
