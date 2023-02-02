import { Inference } from "../mod.ts";

const model = new Inference({
  model: "distilbert-base-uncased",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output = await model.run({
  inputs: "The answer to the universe is [MASK].",
});

console.log(output[0].sequence);
