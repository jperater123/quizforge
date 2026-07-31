// app/api/extract/route.ts
import { NextResponse } from "next/server";
import { extractDocumentText, ExtractionError } from "@/src/lib/extract";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }

    const text = await extractDocumentText(file);

    if (!text) {
      return NextResponse.json(
        { error: "No readable text found in that file." },
        { status: 422 }
      );
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error(error);
    const message =
      error instanceof ExtractionError ? error.message : "Failed to extract document text.";
    const status = error instanceof ExtractionError ? 400 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}