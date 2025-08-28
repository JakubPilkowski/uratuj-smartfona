import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CookieConsentOverlay.module.css";

interface CookieConsentOverlayProps {
  show: boolean;
  children: React.ReactNode;
}

const CookieConsentOverlay: React.FC<CookieConsentOverlayProps> = ({
  show,
  children,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      // Cleanup function to remove class when component unmounts
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [show]);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <div className={`${styles.content} ${show ? styles.blurred : ""}`}>
        {children}
      </div>
    </>
  );
};

export default CookieConsentOverlay;
