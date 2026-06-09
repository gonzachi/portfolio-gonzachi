"use client";

import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

const CONSENT_KEY = "cookie_consent";

type ConsentValue = "granted" | "denied";

interface CustomWindow {
  gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  hj?: {
    (...args: unknown[]): void;
    q?: unknown[];
  };
  _hjSettings?: { hjid: number; hjsv: number };
}

function updateGtagConsent(analytics: ConsentValue) {
  if (typeof window !== "undefined") {
    const win = window as unknown as CustomWindow;
    if (typeof win.gtag === "function") {
      win.gtag("consent", "update", {
        analytics_storage: analytics,
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }
}

function loadHotjar() {
  if (typeof window !== "undefined") {
    const win = window as unknown as CustomWindow;
    if (!win.hj) {
      win.hj = function (...args: unknown[]) {
        if (!win.hj) return;
        win.hj.q = win.hj.q || [];
        win.hj.q.push(args);
      };
      win._hjSettings = { hjid: 6685057, hjsv: 6 };
      const head = document.getElementsByTagName("head")[0];
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://static.hotjar.com/c/hotjar-${win._hjSettings.hjid}.js?sv=${win._hjSettings.hjsv}`;
      head.appendChild(script);
    }
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Defer state update to avoid synchronous state setter warnings in useEffect
      setTimeout(() => setVisible(true), 0);
    } else {
      // Apply saved consent on every load
      const analytics = stored === "granted" ? "granted" : "denied";
      updateGtagConsent(analytics);
      if (analytics === "granted") loadHotjar();
    }
  }, []);

  function acceptAll() {
    localStorage.setItem(CONSENT_KEY, "granted");
    updateGtagConsent("granted");
    loadHotjar();
    setVisible(false);
  }

  function rejectAll() {
    localStorage.setItem(CONSENT_KEY, "denied");
    updateGtagConsent("denied");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.banner} role="dialog" aria-label="Aviso de cookies">
        <div className={styles.content}>
          <p className={styles.text}>
            Usamos cookies de análisis (Google Analytics y Hotjar) para entender cómo los visitantes
            interactúan con el portfolio. No se usan con fines publicitarios.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={styles.btnReject} onClick={rejectAll}>
            Rechazar
          </button>
          <button className={styles.btnAccept} onClick={acceptAll}>
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
}
