import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useCookieConsent } from "../../contexts/CookieConsentContext";
import { useGoogleAnalytics } from "../../hooks/useGoogleAnalytics";
import styles from "./ChristmasDialog.module.css";

export default function ChristmasDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const { hasUserInteracted, analyticsEnabled, timeToAccept } =
    useCookieConsent();
  const { trackChristmasDialogDisplayed } = useGoogleAnalytics();

  useEffect(() => {
    // Only show dialog if user has interacted with cookie consent
    if (hasUserInteracted) {
      // Show dialog after 1 second
      const timer = setTimeout(() => {
        setIsOpen(true);

        // Track Christmas dialog display in Google Analytics
        trackChristmasDialogDisplayed(timeToAccept);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [
    analyticsEnabled,
    hasUserInteracted,
    timeToAccept,
    trackChristmasDialogDisplayed,
  ]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay>
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              {/* Snow Effect */}
              <div className={styles.snowContainer}>
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className={styles.snowflake}
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  >
                    ❄
                  </div>
                ))}
              </div>
            </Dialog.Overlay>
            <Dialog.Content>
              <motion.div
                className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className={styles.header}>
                  <Dialog.Close asChild>
                    <button
                      className={styles.closeButton}
                      onClick={handleClose}
                      aria-label="Zamknij"
                    >
                      <Icon icon="mdi:close" className={styles.icon} />
                    </button>
                  </Dialog.Close>
                </div>

                <div className={styles.body}>
                  <Dialog.Title className={styles.title}>
                    Promocja świąteczna
                  </Dialog.Title>

                  <Dialog.Description className={styles.description}>
                    Wszystkie folie marki 3mk od 49zł
                  </Dialog.Description>

                  <Dialog.Description className={styles.descriptionSecondary}>
                    Skorzystaj z promocji świątecznej na folie ochronne marki
                    3mk. Wybierz spośród folii prywatyzujących, klarownych i
                    matowych. Profesjonalny montaż w naszym serwisie.
                  </Dialog.Description>

                  <button className={styles.ctaButton} onClick={handleClose}>
                    Zapraszamy do salonu
                  </button>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
