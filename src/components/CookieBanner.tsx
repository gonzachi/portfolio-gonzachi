"use client";

import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

const CONSENT_KEY = "cookie_consent";

type ConsentValue = "granted" | "denied";

function updateGtagConsent(analytics: ConsentValue) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("consent", "update", {
      analytics_storage: analytics,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

function loadHotjar() {
  if (typeof window !== "undefined" && !(window as any).hj) {
    (function (h: any, o: any, t: any, j: any, a?: any, r?: any) {
      h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments); };
      h._hjSettings = { hjid: 6685057, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script"); r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
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
