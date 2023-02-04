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
