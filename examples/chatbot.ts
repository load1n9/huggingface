import { AutoModel } from "https://deno.land/x/huggingface/mod.ts";
import { AutoTokenizer } from "https://deno.land/x/huggingface/tokenizers/mod.ts";

const tokenizer = await AutoTokenizer.fromPretrained("satvikag/chatbot");

const model = new AutoModel({
  model: "satvikag/chatbot",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output = await model.run({
  inputs: tokenizer.encode("Hey my name is Clara! How are you?").tokens,
  options: {
    wait_for_model: true,
  },
});

console.log(output);
