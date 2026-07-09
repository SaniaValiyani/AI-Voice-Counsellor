import { useEffect, useState } from "react";

import { fetchReport } from "../services/reportService";

export function useReport() {

  const [report, setReport] =
    useState<any>();

  useEffect(() => {

    fetchReport()
      .then(setReport);

  }, []);

  return report;

}