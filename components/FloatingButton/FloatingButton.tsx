"use client";

import React, { useState, useEffect } from "react";
import styles from "./FloatingButton.module.css";

interface FloatingButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  icon,
  onClick,
  ariaLabel,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = 80; // Header height in pixels

      // Show button when scrolled past header height
      setIsVisible(scrollY > headerHeight);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.floatingButton} ${
        isVisible ? styles.visible : styles.hidden
      } ${className || ""}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default FloatingButton;
