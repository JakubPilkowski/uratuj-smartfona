import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CookieConsent.module.css";

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentProps> = ({
  onAccept,
  onDecline,
}) => {
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
            <strong>🍪 Używamy plików cookie</strong>
            <br />
            Używamy plików cookie, aby poprawić Twoje doświadczenie na naszej
            stronie, analizować ruch i personalizować treści. Klikając
            &quot;Akceptuję wszystkie&quot;, wyrażasz zgodę na używanie
            wszystkich plików cookie.
          </div>

          <div className={styles.links}>
            <a href="/polityka-prywatnosci" className={styles.link}>
              Polityka prywatności
            </a>
          </div>

          <div className={styles.buttonContainer}>
            <button
              className={styles.acceptButton}
              onClick={onAccept}
              type="button"
            >
              Akceptuję wszystkie
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
