import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function exportDashboard() {
  const dashboard =
    document.getElementById("dashboard");

  if (!dashboard) return;

  const canvas =
    await html2canvas(dashboard);

  const pdf = new jsPDF();

  pdf.addImage(
    canvas.toDataURL(),
    "PNG",
    0,
    0,
    210,
    120
  );

  pdf.save("dashboard.pdf");
}