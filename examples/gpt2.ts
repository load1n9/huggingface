import { Inference } from "../mod.ts";

const model = new Inference({
  model: "distilgpt2",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output = await model.run({
  inputs: "The meaning of life is",
});

console.log(output[0].generated_text);
