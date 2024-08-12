"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";

import styles from "./ScrollButton.module.scss";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      className={`${styles.scrollButton} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <div className={styles.arrowIcon}>
        <IoIosArrowUp />
      </div>
    </button>
  );
};

export default ScrollButton;
