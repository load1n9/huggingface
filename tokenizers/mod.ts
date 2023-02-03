import * as wasm from "./src/wasm.js";

const notLoadedError = new Error(
  "The tokenizer wasm module needs to be loaded before using",
);
let loaded = false;

export async function load(): Promise<void> {
  if (!loaded) {
    await wasm.default(wasm.source);
    loaded = true;
  }
}

export class AutoTokenizer {
  tokenizer: wasm.TokenizerWasm;
  constructor(json: string) {
    if (!loaded) {
      throw notLoadedError;
    }
    this.tokenizer = new wasm.TokenizerWasm(json);
  }

  static async fromPretrained(name: string) {
    if (!loaded) {
      await load();
    }
    const response = await fetch(
      `https://huggingface.co/${name}/resolve/main/tokenizer.json`,
    );
    const json = await response.text();
    return new AutoTokenizer(json);
  }

  static async fromPretrainedLocal(path: string) {
    if (!loaded) {
      await load();
    }
    return new AutoTokenizer(await Deno.readTextFile(path));
  }

  encode(text: string): wasm.EncodingWasm {
    return this.tokenizer.encode(text);
  }
}
