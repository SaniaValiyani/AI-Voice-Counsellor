import { useEffect, useState } from "react";

import { fetchAnalytics } from "../services/analyticsService";

export function useAnalytics(
  email: string
) {
  const [data, setData] =
    useState<any>();

  useEffect(() => {
    if (!email) return;

    fetchAnalytics(email)
      .then(setData);

  }, [email]);

  return data;
}