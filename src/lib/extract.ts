// lib/extract.ts
import { extractText, getDocumentProxy } from "unpdf";
import mammoth from "mammoth";

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export class ExtractionError extends Error {}

export async function extractDocumentText(file: File): Promise<string> {
  if (file.size > MAX_FILE_SIZE) {
    throw new ExtractionError("File is too large. Max size is 10MB.");
  }

  const name = file.name.toLowerCase();
  const buffer = await file.arrayBuffer();

  if (name.endsWith(".pdf")) {
    const pdf = await getDocumentProxy(new Uint8Array(buffer));
    const { text } = await extractText(pdf, { mergePages: true });
    return text.trim();
  }

  if (name.endsWith(".docx")) {
    const { value } = await mammoth.extractRawText({ buffer: Buffer.from(buffer) });
    return value.trim();
  }

  throw new ExtractionError("Unsupported file type. Upload a PDF or DOCX.");
}