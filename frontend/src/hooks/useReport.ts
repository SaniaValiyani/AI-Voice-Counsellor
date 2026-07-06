import { useEffect, useState } from "react";

import {
  fetchReport,
} from "../services/reportService";

export function useReport(
  email: string
) {

  const [report, setReport] =
    useState<any>();

  useEffect(() => {

    if (!email) return;

    fetchReport(email)
      .then(setReport);

  }, [email]);

  return report;

}