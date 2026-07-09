import { useEffect, useState } from "react";

import { fetchAnalytics } from "../services/analyticsService";

export function useAnalytics() {

  const [data, setData] =
    useState<any>();

  useEffect(() => {

    fetchAnalytics()
      .then(setData);

  }, []);

  return data;

}