import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import styles from "./PromotionDialog.module.css";

export default function PromotionDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show dialog after 8 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

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
                      onClick={() => setIsOpen(false)}
                      aria-label="Zamknij"
                    >
                      <Icon icon="mdi:close" className={styles.icon} />
                    </button>
                  </Dialog.Close>
                </div>

                <div className={styles.body}>
                  <Dialog.Title className={styles.title}>
                    🎉 Specjalna Promocja! 🎉
                  </Dialog.Title>

                  <Dialog.Description className={styles.description}>
                    -50% na wszystkie akcesoria!
                  </Dialog.Description>

                  <Dialog.Description className={styles.descriptionSecondary}>
                    Skorzystaj z naszej wyjątkowej oferty i zaopatrz się w
                    akcesoria do swojego smartfona w super cenach!
                  </Dialog.Description>

                  <div className={styles.ctaContainer}>
                    <button
                      className={styles.ctaButton}
                      onClick={() => {
                        setIsOpen(false);
                        const element = document.getElementById("accessories");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Zobacz akcesoria
                    </button>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
