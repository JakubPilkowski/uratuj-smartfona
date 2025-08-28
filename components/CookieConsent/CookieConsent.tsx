import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CookieConsent.module.css";
import Link from "next/link";

interface CookieConsentProps {
  onAccept: (analytics: boolean) => void;
  onDecline: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentProps> = ({
  onAccept,
  onDecline,
}) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  const handleAccept = () => {
    onAccept(analyticsEnabled);
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.banner}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className={styles.content}>
          <div className={styles.text}>
            Używamy plików cookie w celu poprawy działania strony, analizowania
            ruchu oraz personalizacji treści. Możesz zaakceptować wszystkie
            pliki cookie lub wybrać, które kategorie chcesz włączyć. Klikając
            &quot;Akceptuję wszystkie&quot;, wyrażasz zgodę na używanie
            wszystkich plików cookie. Szczegóły znajdziesz w naszej{" "}
            <Link href="/polityka-prywatnosci" className={styles.inlineLink}>
              Polityce prywatności
            </Link>
            .
          </div>

          <div className={styles.cookieOptions}>
            <div className={styles.cookieOption}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>
                  <strong>Analityczne (Google Analytics)</strong>
                </span>
              </label>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button
              className={styles.acceptButton}
              onClick={handleAccept}
              type="button"
            >
              Akceptuję wybrane
            </button>

            <button
              className={styles.declineButton}
              onClick={onDecline}
              type="button"
            >
              Odrzuć
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
