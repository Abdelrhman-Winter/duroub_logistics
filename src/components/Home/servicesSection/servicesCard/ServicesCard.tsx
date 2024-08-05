"use client";
import Image from "next/image";
import styles from "./ServicesCard.module.scss";
import Link from "next/link";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { useRef, useState } from "react";

const ServicesCard = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current) {
      setIsDown(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDown) return;
    e.preventDefault();
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2; // 3 is the scroll speed
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  return (
    <div
      className={styles.serviceCards}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <Image
            src={"/home/services/image1.png"}
            alt="image1"
            width={500}
            height={500}
            className={styles.imageCard}
          />
          <div className={`${styles.overlay} ${styles.color1}`}></div>
          <Link href="#">
            <div className={styles.arrowIcon}>
              <IoIosArrowForward />
            </div>
          </Link>
          <div className={styles.text}>
            <h4>Transportation, distribution & last mile</h4>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src={"/home/services/image2.jpeg"}
            alt="image1"
            width={500}
            height={500}
            className={styles.imageCard}
          />
          <div className={`${styles.overlay} ${styles.color1}`}></div>
          <Link href="#">
            <div className={styles.arrowIcon}>
              <IoIosArrowForward />
            </div>
          </Link>
          <div className={styles.text}>
            <h4>Warehousing multi temperature </h4>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src={"/home/services/image3.jpeg"}
            alt="image1"
            width={500}
            height={500}
            className={styles.imageCard}
          />
          <div className={`${styles.overlay} ${styles.color1}`}></div>
          <Link href="#">
            <div className={styles.arrowIcon}>
              <IoIosArrowForward />
            </div>
          </Link>
          <div className={styles.text}>
            <h4>Cross border transport</h4>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src={"/home/services/image4.jpeg"}
            alt="image1"
            width={500}
            height={500}
            className={styles.imageCard}
          />
          <div className={`${styles.overlay} ${styles.color1}`}></div>
          <Link href="#">
            <div className={styles.arrowIcon}>
              <IoIosArrowForward />
            </div>
          </Link>
          <div className={styles.text}>
            <h4>4PL & Control tower</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
