import Image from "next/image";
import styles from "./SummerisesCards.module.scss";
const SummerisesCards = () => {
  return (
    <div className={styles.summerises}>
      <div className={styles.summerisesCard}>
        <Image
          src={"/home/about/image1.jpeg"}
          alt="image1"
          width={385}
          height={525}
          className={styles.imageCard}
        />
        <div className={`${styles.overlay} ${styles.color1}`}></div>
        <div className={styles.text}>
          <h4>-25o C to +25o C</h4>
          <p>Multi-Temperature warehouses</p>
        </div>
      </div>
      <div className={styles.summerisesCard}>
        <Image
          src={"/home/about/image2.jpeg"}
          alt="image2"
          width={385}
          height={525}
          className={styles.imageCard}
        />
        <div className={`${styles.overlay} ${styles.color2}`}></div>
        <div className={styles.text}>
          <h4>+150</h4>
          <p>Trucks</p>
        </div>
      </div>
      <div className={styles.summerisesCard}>
        <Image
          src={"/home/about/image3.jpeg"}
          alt="image3"
          width={385}
          height={525}
          className={styles.imageCard}
        />
        <div className={`${styles.overlay} ${styles.color3}`}></div>
        <div className={styles.text}>
          <h4>+15,000</h4>
          <p>Shipments annually </p>
        </div>
      </div>
      <div className={styles.summerisesCard}>
        <Image
          src={"/home/about/image4.jpeg"}
          alt="image4"
          width={385}
          height={525}
          className={styles.imageCard}
        />
        <div className={`${styles.overlay} ${styles.color4}`}></div>
        <div className={styles.text}>
          <h4>+300</h4>
          <p>Professionals</p>
        </div>
      </div>
    </div>
  );
};

export default SummerisesCards;
