import jsPDF from "jspdf";

export function exportAsPDF(messages: any[]) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(22);
  doc.text("AI Voice Counsellor", 20, y);

  y += 10;

  doc.setFontSize(14);
  doc.text("Career Guidance Report", 20, y);

  y += 10;

  doc.setFontSize(10);

  doc.text(
    `Generated on: ${new Date().toLocaleString()}`,
    20,
    y
  );

  y += 15;

  doc.setFontSize(16);
  doc.text(
    "Session Summary",
    20,
    y
  );

  y += 10;

  doc.setFontSize(11);

  const userMessages =
    messages.filter(
      (m) =>
        m.sender === "user"
    );

  const aiMessages =
    messages.filter(
      (m) =>
        m.sender === "ai"
    );

  doc.text(
    `Questions Asked: ${userMessages.length}`,
    20,
    y
  );

  y += 8;

  doc.text(
    `Responses Given: ${aiMessages.length}`,
    20,
    y
  );

  y += 15;

  let questionNumber = 1;

  userMessages.forEach((userMsg) => {
    const userIndex =
      messages.indexOf(userMsg);

    const aiReply =
      messages[userIndex + 1];

    if (y > 240) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(14);

    doc.text(
      `Question ${questionNumber}`,
      20,
      y
    );

    y += 10;

    doc.setFontSize(11);

    const questionLines =
      doc.splitTextToSize(
        userMsg.message,
        170
      );

    doc.text(
      questionLines,
      20,
      y
    );

    y +=
      questionLines.length * 6 +
      8;

    doc.setFontSize(14);

    doc.text(
      "Answer",
      20,
      y
    );

    y += 10;

    if (aiReply) {
      const answerLines =
        doc.splitTextToSize(
          aiReply.message,
          170
        );

      doc.setFontSize(11);

      doc.text(
        answerLines,
        20,
        y
      );

      y +=
        answerLines.length * 6 +
        12;
    }

    doc.line(
      20,
      y,
      190,
      y
    );

    y += 10;

    questionNumber++;
  });

  doc.save(
    "Career_Guidance_Report.pdf"
  );
}

export function exportAsTXT(
  messages: any[]
) {
  let report =
    "AI VOICE COUNSELLOR REPORT\n\n";

  const userMessages =
    messages.filter(
      (msg) =>
        msg.sender === "user"
    );

  let count = 1;

  userMessages.forEach(
    (userMsg) => {
      const userIndex =
        messages.indexOf(userMsg);

      const aiReply =
        messages[userIndex + 1];

      report +=
        `Question ${count}\n`;

      report +=
        `${userMsg.message}\n\n`;

      report +=
        `Answer\n`;

      report +=
        `${aiReply?.message ?? ""}\n\n`;

      report +=
        "----------------------------------\n\n";

      count++;
    }
  );

  const blob =
    new Blob(
      [report],
      {
        type: "text/plain",
      }
    );

  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;

  a.download =
    "Career_Guidance_Report.txt";

  a.click();

  URL.revokeObjectURL(url);
}

export function exportAsJSON(
  messages: any[]
) {
  const blob =
    new Blob(
      [
        JSON.stringify(
          messages,
          null,
          2
        ),
      ],
      {
        type:
          "application/json",
      }
    );

  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;

  a.download =
    "AI_Counsellor_Report.json";

  a.click();

  URL.revokeObjectURL(url);
}