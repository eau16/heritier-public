import { NextResponse } from "next/server";

export const runtime = "nodejs";

type AnalyzeResponse = {
  title: string;
  mood: string;
  atmosphere: string;
  story: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  detectedCues: string[];
  olfactiveFamily: string;
  suggestedWear: string;
};

export async function POST(req: Request) {
  try {
    const { imageDataUrl } = await req.json();

    if (!imageDataUrl || typeof imageDataUrl !== "string") {
      return NextResponse.json(
        { error: "Missing imageDataUrl." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not set." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: [
          {
            role: "system",
            content: [
              {
                type: "input_text",
                text: `
You are a luxury fragrance interpreter for a premium maison called Heritier.

Your task:
Analyze the uploaded photograph and create a premium fragrance concept inspired by:
- mood
- atmosphere
- light
- texture
- place
- emotional tone
- visual cues

Rules:
- Keep the fragrance elegant, believable, wearable, and premium
- Do not claim scientific certainty
- Do not mention AI
- The output must feel editorial and refined
- The fragrance pyramid must be coherent
- Return structured JSON only
                `.trim(),
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: "Create a fragrance interpretation for this image.",
              },
              {
                type: "input_image",
                image_url: imageDataUrl,
                detail: "high",
              },
            ],
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "heritier_scent_profile",
            strict: true,
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                title: { type: "string" },
                mood: { type: "string" },
                atmosphere: { type: "string" },
                story: { type: "string" },
                topNotes: {
                  type: "array",
                  items: { type: "string" },
                  minItems: 3,
                  maxItems: 3,
                },
                heartNotes: {
                  type: "array",
                  items: { type: "string" },
                  minItems: 3,
                  maxItems: 3,
                },
                baseNotes: {
                  type: "array",
                  items: { type: "string" },
                  minItems: 3,
                  maxItems: 3,
                },
                detectedCues: {
                  type: "array",
                  items: { type: "string" },
                  minItems: 4,
                  maxItems: 4,
                },
                olfactiveFamily: { type: "string" },
                suggestedWear: { type: "string" },
              },
              required: [
                "title",
                "mood",
                "atmosphere",
                "story",
                "topNotes",
                "heartNotes",
                "baseNotes",
                "detectedCues",
                "olfactiveFamily",
                "suggestedWear",
              ],
            },
          },
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI API error:", JSON.stringify(data, null, 2));
      return NextResponse.json(
        {
          error: "OpenAI API request failed.",
          details: data,
        },
        { status: 500 }
      );
    }

    const jsonText = data?.output?.[0]?.content?.find(
      (item: { type?: string }) => item.type === "output_text"
    )?.text;

    if (!jsonText || typeof jsonText !== "string") {
      console.error(
        "Unexpected OpenAI response shape:",
        JSON.stringify(data, null, 2)
      );
      return NextResponse.json(
        {
          error: "Model did not return structured text output.",
          details: data,
        },
        { status: 500 }
      );
    }

    const parsed: AnalyzeResponse = JSON.parse(jsonText);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Analyze route error:", error);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}