import { AutoTokenizer } from "https://deno.land/x/huggingface/tokenizers/mod.ts";

const tokenizer = await AutoTokenizer.fromPretrainedLocal(
  "examples/assets/t5-base-tokenizer.json",
);

const tokenizer2 = await AutoTokenizer.fromPretrainedLocal(
  "examples/assets/gpt2-tokenizer.json",
);

console.log(tokenizer.encode("The Wanderer").input_ids);
console.log(tokenizer.encode("The Wanderer").tokens);
console.log(tokenizer2.encode("The Wanderer").input_ids);
console.log(tokenizer2.encode("The Wanderer").tokens);
