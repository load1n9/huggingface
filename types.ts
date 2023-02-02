export type InferenceModel = string;

export interface InferenceConfig {
  token: string;
  model: InferenceModel;
}

export interface InferenceSchema {
  /**
   * a string to be summarized
   */
  inputs: string;

  /**
   * extra optional parameters
   */
  parameters?: {
    /**
     * Number to define the minimum length in tokens of the output summary.
     */
    min_length?: number;

    /**
     * Number to define the maximum length in tokens of the output summary.
     */
    max_length?: number;

    /**
     * Number to define the top tokens considered within the sample operation to create new text.
     */
    top_k?: number;

    /**
     * Float to define the tokens that are within the sample operation of text generation.
     * Add tokens in the sample for more probable to least probable until the sum of the probabilities is greater than top_p.
     */
    top_p?: number;

    /**
     * @default 1.0
     * Float (0.0-100.0). The temperature of the sampling operation. 1 means regular sampling, 0 means always take the highest score, 100.0 is getting closer to uniform probability.
     */
    temperature?: number;

    /**
     * Float (0.0-100.0). The more a token is used within generation the more it is penalized to not be picked in successive generation passes.
     */
    repetition_penalty?: number;

    /**
     *  Float (0-120.0). The amount of time in seconds that the query should take maximum. Network can cause some overhead so it will be a soft limit.
     */
    max_time?: number;
  };

  /**
   * extra optional options
   */
  options?: {
    /**
     * @default true
     *  There is a cache layer on the inference API to speedup requests we have already seen. Most models can use those results as is as models are deterministic (meaning the results will be the same anyway).
     *  However if you use a non deterministic model, you can set this parameter to prevent the caching mechanism from being used resulting in a real new query.
     */
    use_cache?: boolean;

    /**
     * @default false
     * If the model is not ready, wait for it instead of receiving 503. It limits the number of requests required to get your inference done.
     * It is advised to only set this flag to true after receiving a 503 error as it will limit hanging in your application to known places.
     */
    wait_for_model?: boolean;
  };
}
