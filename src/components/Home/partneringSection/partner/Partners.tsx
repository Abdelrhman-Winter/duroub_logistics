"use client";

import Image from "next/image";
import styles from "./Partners.module.scss";
import { useEffect, useRef, useState } from "react";
const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"right" | "left">(
    "right"
  );

  useEffect(() => {
    let direction = 1; // 1 for right, -1 for left
    const speed = 20; // Adjust scroll speed here
    const delay = 2000; // 1 second delay at each end

    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += direction * speed;

        // Change direction and add delay when the end is reached
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          direction = -1; // Change direction to left
          setScrollDirection("left");
          clearInterval(scrollInterval);
          setTimeout(startScroll, delay);
        } else if (scrollRef.current.scrollLeft <= 0) {
          direction = 1; // Change direction to right
          setScrollDirection("right");
          clearInterval(scrollInterval);
          setTimeout(startScroll, delay);
        }
      }
    };

    const startScroll = () => {
      scrollInterval = setInterval(scroll, 20);
    };

    let scrollInterval = setInterval(scroll, 20);

    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.partneringImg} ref={scrollRef}>
        <div className={styles.partners}>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image1.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image2.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image3.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image4.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image5.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image6.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image7.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image8.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image9.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image10.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image11.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image12.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image13.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image14.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image15.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image16.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.partner}>
            <Image
              src={"/home/partnering/image17.png"}
              alt="image"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.scrollIndicator} ${
          scrollDirection === "right" ? styles.right : styles.left
        }`}
      >
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default Partners;
