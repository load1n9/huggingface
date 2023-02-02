import { InferenceConfig, InferenceSchema } from "./types.ts";

export class Inference {
  #token: string;
  #model: string;
  constructor(config: InferenceConfig) {
    this.#token = config.token;
    this.#model = config.model;
  }

  // deno-lint-ignore no-explicit-any
  async run(text: string): Promise<any>;
  // deno-lint-ignore no-explicit-any
  async run(data: InferenceSchema): Promise<any>;
  async run(...data: [string] | [InferenceSchema]) {
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${this.#model}`,
      {
        headers: { "Authorization": `Bearer ${this.#token}` },
        method: "POST",
        body: JSON.stringify(data[0]),
      },
    );
    return await response.json();
  }
}
