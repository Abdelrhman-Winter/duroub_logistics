import Image from "next/image";
import styles from "./SectionBackground.module.scss";
const SectionBackground = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/home/solution/image.jpeg"}
        alt="image"
        width={1920}
        height={902}
        className={styles.backgroundImage}
      />
      <Image
        src={"/home/solution/overlay.png"}
        alt="overlay"
        width={2223}
        height={407.8}
        className={styles.overlayImage}
      />

      <div className={styles.overlay}></div>
    </div>
  );
};

export default SectionBackground;
