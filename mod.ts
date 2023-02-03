import { InferenceConfig, InferenceSchema } from "./types.ts";

export class Inference {
  #token: string;
  #model: string;
  constructor(config: InferenceConfig) {
    this.#token = config.token;
    this.#model = config.model;
  }

  // deno-lint-ignore no-explicit-any
  async run(data: Uint8Array): Promise<any>;
  // deno-lint-ignore no-explicit-any
  async run(text: string): Promise<any>;
  // deno-lint-ignore no-explicit-any
  async run(data: InferenceSchema): Promise<any>;
  async run(...data: [string] | [InferenceSchema] | [Uint8Array]) {
    const response = await fetch(
      !(data[0] instanceof Uint8Array) && !(typeof data[0] === "string") &&
        data[0].url
        ? data[0].url + data[0].url.endsWith("/") ? "" : "/"
        : `https://api-inference.huggingface.co/models/${this.#model}`,
      {
        headers: { "Authorization": `Bearer ${this.#token}` },
        method: "POST",
        body: data[0] instanceof Uint8Array ? data[0] : JSON.stringify(data[0]),
      },
    );
    return await response.json();
  }
}
