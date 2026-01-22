"use client";

import { useEffect } from "react";
import { initializeFaro } from "@grafana/faro-web-sdk";

export default function FaroInitializer() {
  useEffect(() => {
    // Only initialize if the URL is provided to avoid errors in environments without config
    if (process.env.NEXT_PUBLIC_FARO_URL) {
      initializeFaro({
        url: process.env.NEXT_PUBLIC_FARO_URL,
        app: {
          name: process.env.NEXT_PUBLIC_FARO_APP_NAME || "mds-devops-portfolio",
          version: process.env.NEXT_PUBLIC_FARO_APP_VERSION || "1.0.0",
          environment: process.env.NEXT_PUBLIC_FARO_APP_ENV || "development",
        },
      });
    }
  }, []);

  return null;
}
