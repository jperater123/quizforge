// lib/downloadQuizPdf.ts
import jsPDF from "jspdf";
import type { GeneratedQuiz } from "@/src/lib/types";

type DownloadMode = "student" | "answerKey";

export function downloadQuizPdf(quiz: GeneratedQuiz, mode: DownloadMode = "student") {
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const marginX = 56;
  const pageHeight = doc.internal.pageSize.getHeight();
  const maxWidth = doc.internal.pageSize.getWidth() - marginX * 2;
  let y = 64;

  function ensureSpace(lineHeight: number) {
    if (y + lineHeight > pageHeight - 56) {
      doc.addPage();
      y = 64;
    }
  }

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  const heading = mode === "answerKey" ? `${quiz.title} — Answer Key` : quiz.title;
  const titleLines = doc.splitTextToSize(heading, maxWidth);
  doc.text(titleLines, marginX, y);
  y += titleLines.length * 22 + 6;

  if (mode === "student") {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Name: _______________________        Date: _______________", marginX, y);
    y += 26;
  } else {
    y += 14;
  }

  quiz.questions.forEach((q, i) => {
    ensureSpace(24);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    const questionLines = doc.splitTextToSize(`${i + 1}. ${q.question}`, maxWidth);
    ensureSpace(questionLines.length * 16);
    doc.text(questionLines, marginX, y);
    y += questionLines.length * 16 + 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    q.choices.forEach((choice, ci) => {
      const letter = String.fromCharCode(65 + ci); // A, B, C, D
      const isCorrect = choice === q.answer;
      const showBold = mode === "answerKey" && isCorrect;

      const choiceLines = doc.splitTextToSize(`${letter}. ${choice}`, maxWidth - 16);
      ensureSpace(choiceLines.length * 14);
      if (showBold) doc.setFont("helvetica", "bold");
      doc.text(choiceLines, marginX + 16, y);
      if (showBold) doc.setFont("helvetica", "normal");
      y += choiceLines.length * 14 + 2;
    });

    // explanation only goes in the answer key, never the student copy
    if (mode === "answerKey" && q.explanation) {
      ensureSpace(14);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9.5);
      const explLines = doc.splitTextToSize(`Explanation: ${q.explanation}`, maxWidth - 16);
      ensureSpace(explLines.length * 12);
      doc.text(explLines, marginX + 16, y);
      y += explLines.length * 12 + 4;
    }

    y += 16;
  });

  const safeTitle = quiz.title.trim().replace(/[^a-z0-9]+/gi, "-").toLowerCase() || "quiz";
  const suffix = mode === "answerKey" ? "answer-key" : "student-copy";
  doc.save(`${safeTitle}-${suffix}.pdf`);
}