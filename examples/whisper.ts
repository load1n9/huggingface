import { Inference } from "../mod.ts";

const model = new Inference({
  model: "openai/whisper-large-v2",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output = await model.run(Deno.readFileSync("./examples/assets/sample1.flac"));

console.log(output.text);
