import { AutoModel } from "https://deno.land/x/huggingface/mod.ts";

const model = new AutoModel({
  model: "openai/whisper-large-v2",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output = await model.run(Deno.readFileSync("./examples/assets/sample1.flac"));

console.log(output);
