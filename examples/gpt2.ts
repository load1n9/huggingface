import { AutoModel } from "https://deno.land/x/huggingface/mod.ts";

const model = new AutoModel({
  model: "distilgpt2",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output = await model.run({
  inputs: "The meaning of life is",
  options: {
    wait_for_model: true
  }
});

console.log(output[0].generated_text);
