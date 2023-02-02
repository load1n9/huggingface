import { InferenceConfig } from "./types.ts";

export class Inference {
  #token: string;
  #model: string;
  constructor(config: InferenceConfig) {
    this.#token = config.token;
    this.#model = config.model;
  }

  // deno-lint-ignore no-explicit-any
  async run(data: any) {
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${this.#model}`,
      {
        headers: { "Authorization": `Bearer ${this.#token}` },
        method: "POST",
        body: JSON.stringify(data),
      },
    );
    return await response.json();
  }
}
