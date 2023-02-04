import { AutoModel } from "https://deno.land/x/huggingface/mod.ts";

const model = new AutoModel({
  model: "EleutherAI/gpt-neo-2.7B",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output = await model.run({ inputs: "The meaning of life is" });

console.log(output[0].generated_text);
