// src/services/huggingfaceService.ts
import axios from "axios";

// Configuration for Hugging Face
const HUGGINGFACE_API_URL =
  "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3";
// Get this from environment variables in production
const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN || "";

/**
 * Service to interact with Hugging Face models
 */
export class HuggingFaceService {
  /**
   * Generate text using the Hugging Face model
   * @param prompt User's input prompt
   * @returns Generated text response
   */
  async generateText(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        HUGGINGFACE_API_URL,
        { inputs: prompt },
        {
          headers: {
            Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle different response formats from Hugging Face
      if (Array.isArray(response.data)) {
        return response.data[0].generated_text;
      } else if (
        typeof response.data === "object" &&
        response.data.generated_text
      ) {
        return response.data.generated_text;
      } else if (typeof response.data === "string") {
        return response.data;
      }

      throw new Error("Unexpected response format from Hugging Face API");
    } catch (error) {
      console.error("Error calling Hugging Face API:", error);
      throw error;
    }
  }
}

export default new HuggingFaceService();
