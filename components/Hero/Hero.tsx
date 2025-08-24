import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Full-screen video background */}
      <div className={styles.videoBackground}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          // loop
          playsInline
          poster="/phone_fixing.jpg"
        >
          <source src="/uratuj_smartfona.mp4" type="video/mp4" />
          Twoja przeglądarka nie wspiera odtwarzania wideo.
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Particles overlay */}
      <div className={styles.particles}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.textContent}
          >
            <h1 className={styles.title}>
              Nie wiesz co zrobić ze zepsutym smartfonem?
            </h1>
            <p className={styles.subtitle}>
              Zamiast kupować nowy smartfon - napraw go!
            </p>

            <div className={styles.ctaButtons}>
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                href="tel:604-436-345"
                className={`btn btn-primary ${styles.ctaButton}`}
              >
                Zadzwoń teraz
              </motion.a>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className={`btn btn-secondary ${styles.ctaButton}`}
                onClick={scrollToServices}
              >
                Zobacz cennik
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Empty space for proper layout */}
          <div className={styles.rightSide}></div>
        </div>
      </div>

      {/* Floating info about free glass */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className={styles.floatingInfo}
      >
        <div className={styles.floatingCard}>
          <span className={styles.floatingText}>
            Do każdej wymiany ekranu szkło gratis!
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
