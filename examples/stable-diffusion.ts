import { Text2ImageModel } from "https://deno.land/x/huggingface/mod.ts";

const model = new Text2ImageModel({
  model: "CompVis/stable-diffusion-v1-4",
  token: Deno.env.get("HUGGINGFACE_TOKEN")!,
});

const output: Blob = await model.run({
  inputs: "a photo of an astronaut riding a horse on mars",
  options: {
    wait_for_model: true,
  },
});

Deno.writeFileSync("stable-diffusion.jpeg", new Uint8Array(await output.arrayBuffer()));
