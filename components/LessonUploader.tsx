// components/LessonUploader.tsx
"use client";

import { useState } from "react";

interface LessonUploaderProps {
  onExtracted?: (text: string) => void;
}

export function LessonUploader({ onExtracted }: LessonUploaderProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState("");

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setError(null);
    setStatus("loading");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/extract", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Extraction failed.");

      setText(data.text);
      setStatus("done");
      onExtracted?.(data.text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <div>
      <label className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-indigo-500/30 bg-black/20 px-4 py-6 text-sm text-zinc-300 transition hover:border-indigo-500/60">
        <span>
          {status === "loading"
            ? "Extracting..."
            : fileName
            ? fileName
            : "Click to attach a PDF or DOCX"}
        </span>
        {status === "done" && (
          <span className="text-xs text-indigo-400">
            {text.length.toLocaleString()} characters extracted
          </span>
        )}
        <input
          type="file"
          accept=".pdf,.docx"
          className="hidden"
          onChange={handleFile}
        />
      </label>

      {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
    </div>
  );
}