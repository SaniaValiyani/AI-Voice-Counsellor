import jsPDF from "jspdf";

export function exportAsPDF(
  messages: any[]
) {
  const doc = new jsPDF();

  doc.setFontSize(18);

  doc.text(
  "AI Voice Counsellor Report",
  20,
  20
  );

  doc.setFontSize(10);

  doc.text(
  `Generated: ${new Date().toLocaleString()}`,
  20,
  30
  );

  let y = 40;

  messages.forEach((msg) => {
    const text =
    `[${msg.timestamp}]

    ${msg.sender.toUpperCase()}

    ${msg.message}`;

    const lines =
      doc.splitTextToSize(
        text,
        170
      );

    doc.text(lines, 20, y);

    y += lines.length * 8;

    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save(
    "AI_Counsellor_Report.pdf"
  );
}

export function exportAsTXT(
  messages: any[]
) {
  const content =
    messages
      .map(
        (msg) =>
          `${msg.sender}: ${msg.message}`
      )
      .join("\n\n");

  const blob =
    new Blob(
      [content],
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
    "AI_Counsellor_Report.txt";

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