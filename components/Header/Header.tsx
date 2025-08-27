import React, { useState } from "react";
import { motion } from "framer-motion";
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

  const Logo = () => (
    <svg
      width="233"
      height="100"
      viewBox="0 0 700 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Smartphone body - equal border thickness */}
      <rect
        x="60"
        y="69"
        width="90"
        height="162"
        rx="14"
        fill="hsl(0, 0%, 100%)"
        stroke="hsl(0, 0%, 100%)"
        strokeWidth="3"
      />

      {/* Phone screen area - exactly equal borders all around (5px each) */}
      <rect
        x="65"
        y="74"
        width="80"
        height="152"
        rx="9"
        fill="hsl(0, 0%, 8%)"
      />

      {/* Screen with black/white effect */}
      <rect
        x="70"
        y="79"
        width="70"
        height="142"
        rx="5"
        fill="hsl(0, 0%, 100%)"
      />

      {/* Screen shadow area (black) - full display coverage */}
      <rect
        x="70"
        y="79"
        width="70"
        height="142"
        rx="5"
        fill="hsl(0, 0%, 8%)"
        opacity="0.3"
      />

      {/* Screen highlight area (white) - full display coverage */}
      <rect
        x="70"
        y="79"
        width="70"
        height="142"
        rx="5"
        fill="hsl(0, 0%, 100%)"
        opacity="0.8"
      />

      {/* White parallelogram with 20% wider bases */}
      <path
        d="M 140 100 L 140 145 L 70 187 L 70 145 Z"
        fill="hsl(0, 0%, 100%)"
      />

      {/* iPhone-style notch at the top */}
      <rect
        x="97"
        y="72"
        width="18"
        height="5"
        rx="3"
        fill="hsl(0, 0%, 100%)"
      />

      {/* Bottom bell (home indicator) - same height as notch, twice as wide, in primary color */}
      <rect x="87" y="210" width="36" height="5" rx="3" fill="#00BCD4" />

      {/* Volume buttons on left side - moved higher */}
      <rect
        x="55"
        y="94"
        width="4"
        height="11"
        rx="2"
        fill="hsl(0, 0%, 100%)"
      />
      <rect
        x="55"
        y="112"
        width="4"
        height="11"
        rx="2"
        fill="hsl(0, 0%, 100%)"
      />

      {/* Power button on right side - moved higher */}
      <rect
        x="151"
        y="103"
        width="4"
        height="18"
        rx="2"
        fill="hsl(0, 0%, 100%)"
      />

      {/* Text "URATUJ SMARTFONA" with improved typography - positioned to the right of phone */}
      {/* URA+UJ with plus icon instead of T */}
      <text
        x="200"
        y="127.5"
        fontFamily="Poppins, sans-serif"
        fontSize="80"
        fontWeight="600"
        textAnchor="start"
        fill="hsl(0, 0%, 100%)"
      >
        URA
      </text>
      {/* Plus icon in primary color - same height as font size */}
      <rect x="373" y="93" width="58" height="13" rx="2" fill="#00BCD4" />
      <rect x="396" y="70" width="13" height="58" rx="2" fill="#00BCD4" />
      <text
        x="432"
        y="127.5"
        fontFamily="Poppins, sans-serif"
        fontSize="80"
        fontWeight="600"
        textAnchor="start"
        fill="hsl(0, 0%, 100%)"
      >
        UJ
      </text>

      <text
        x="200"
        y="232.5"
        fontFamily="Poppins, sans-serif"
        fontSize="75"
        fontWeight="600"
        textAnchor="start"
        fill="hsl(0, 0%, 100%)"
      >
        SMARTFONA
      </text>
    </svg>
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo} onClick={scrollToTop}>
          <Logo />
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
              <Logo />
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
