import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo} onClick={scrollToTop}>
          <Image
            src="/uratuj_smartfona.png"
            alt="Uratuj Smartfona"
            width={200}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <button onClick={() => scrollToSection("hero")}>
                Strona główna
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")}>
                Cennik
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("steps")}>
                Jak to działa
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("accessories")}>
                Akcesoria
              </button>
            </li>
            {/* <li>
              <button onClick={() => scrollToSection("instagram")}>
                Galeria
              </button>
            </li> */}
            <li>
              <button onClick={() => scrollToSection("contact")}>
                Kontakt
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          ></span>
        </button>

        {/* Mobile Navigation */}
        <motion.nav
          className={styles.mobileNav}
          initial={{ opacity: 0, x: "100%" }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            x: isMenuOpen ? "0%" : "100%",
          }}
          transition={{ duration: 0.3 }}
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          <div className={styles.mobileNavContent}>
            <div className={styles.mobileLogo} onClick={scrollToTop}>
              <Image
                src="/uratuj_smartfona.png"
                alt="Uratuj Smartfona"
                width={250}
                height={75}
                style={{ objectFit: "contain" }}
              />
            </div>

            <ul className={styles.mobileNavList}>
              <li>
                <button onClick={() => scrollToSection("hero")}>
                  Strona główna
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Cennik
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("steps")}>
                  Jak to działa
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("accessories")}>
                  Akcesoria
                </button>
              </li>
              {/* <li>
                <button onClick={() => scrollToSection("instagram")}>
                  Galeria
                </button>
              </li> */}
              <li>
                <button onClick={() => scrollToSection("contact")}>
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
