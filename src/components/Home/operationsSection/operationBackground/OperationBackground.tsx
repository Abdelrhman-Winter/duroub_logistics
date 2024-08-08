import Image from "next/image";
import styles from "./OperationBackground.module.scss";
const OperationBackground = () => {
  return (
    <div className={styles.Background}>
      <Image
        src="/home/operations/Group 21.svg"
        alt="Group21"
        className={styles.group21}
        width={500}
        height={500}
      />

      <Image
        src={"/home/operations/Group 22.svg"}
        alt="Group22"
        className={styles.group22}
        width={500}
        height={500}
      />

      <Image
        src="/home/operations/Rectangle 12.svg"
        alt="Rectangle12"
        className={styles.rectangle12}
        width={1922}
        height={1223}
      />
      <Image
        src={"/home/operations/Rectangle 13.svg"}
        alt="Rectangle13"
        className={styles.rectangle13}
        width={1922}
        height={1223}
      />
      <Image
        src={"/home/operations/Rectangle 14.svg"}
        alt="Rectangle14"
        className={styles.rectangle14}
        width={1922}
        height={1223}
      />
      <div className={styles.cities}>
        <p className={styles.tabuk}>Tabuk</p>
        <div className={styles.tabukPoint}></div>

        <p className={styles.sakaka}>Sakaka</p>
        <div className={styles.sakakaPoint}></div>

        <p className={styles.madinah}>Madinah</p>
        <div className={styles.madinahPoint}></div>

        <p className={styles.alQassem}>Al Qassem</p>
        <div className={styles.alQassemPoint}></div>

        <p className={styles.dammam}>Dammam</p>
        <div className={styles.dammamPoint}></div>

        <p className={styles.jeddah}>Jeddah</p>
        <div className={styles.jeddahPoint}></div>

        <p className={styles.riyadh}>Riyadh</p>
        <div className={styles.riyadhPoint}></div>

        <p className={styles.khamisMushiat}>Khamis Mushiat</p>
        <div className={styles.khamisMushiatPoint}></div>
      </div>
    </div>
  );
};

export default OperationBackground;
