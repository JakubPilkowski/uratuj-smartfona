import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useCookieConsent } from "../../contexts/CookieConsentContext";
import { useGoogleAnalytics } from "../../hooks/useGoogleAnalytics";
import styles from "./PromotionDialog.module.css";

export default function PromotionDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const { hasUserInteracted, analyticsEnabled, timeToAccept } =
    useCookieConsent();
  const {
    trackPromotionDialogDisplayed,
    trackGoogleReviewScreenForOpinionClicked,
    trackGoogleReviewScreenForOpinionClosed,
  } = useGoogleAnalytics();

  useEffect(() => {
    // Only show dialog if user has interacted with cookie consent
    if (hasUserInteracted) {
      // Show dialog after 1 second (same timing as ChristmasDialog)
      const timer = setTimeout(() => {
        setIsOpen(true);

        // Track promotion dialog display in Google Analytics
        trackPromotionDialogDisplayed(timeToAccept);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [
    analyticsEnabled,
    hasUserInteracted,
    timeToAccept,
    trackPromotionDialogDisplayed,
  ]);

  const handleReviewClick = () => {
    // Track review button click in Google Analytics
    trackGoogleReviewScreenForOpinionClicked();

    // Open Google review link in new tab
    window.open("https://g.page/r/CfJNLmdJ2OYeEBM/review", "_blank");
    setIsOpen(false);
  };

  const handleClose = () => {
    // Track dialog close in Google Analytics
    trackGoogleReviewScreenForOpinionClosed();

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
                    🎁 Darmowe Szkło Ochronne! 🎁
                  </Dialog.Title>

                  <Dialog.Description className={styles.description}>
                    Zostaw opinię w Google i otrzymaj szkło gratis!*
                  </Dialog.Description>

                  <Dialog.Description className={styles.descriptionSecondary}>
                    Pomóż innym klientom i otrzymaj darmowe szkło ochronne do
                    swojego smartfona. Wystarczy, że zostawisz nam pozytywną
                    opinię w Google!
                  </Dialog.Description>

                  <div className={styles.ctaContainer}>
                    <button
                      className={styles.ctaButton}
                      onClick={handleReviewClick}
                    >
                      Zostaw opinię i odbierz szkło gratis
                    </button>
                  </div>
                  <p className={styles.disclaimer}>
                    * Darmowe szkło należy odebrać bezpośrednio w serwisie
                    ukazując dowód wystawienia opinii
                  </p>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
