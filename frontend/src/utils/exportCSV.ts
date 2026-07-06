import Papa from "papaparse";

export function exportCSV(data: any) {

  const csv =
    Papa.unparse(data);

  const blob =
    new Blob([csv]);

  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;

  a.download =
    "analytics.csv";

  a.click();

}