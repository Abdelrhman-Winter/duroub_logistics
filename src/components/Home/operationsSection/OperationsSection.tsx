import OperationBackground from "./operationBackground/OperationBackground";
import styles from "./OperationsSection.module.scss";
const OperationsSection = () => {
  return (
    <section className={styles.operations}>
      <OperationBackground />
      <div className={styles.text}>
        <h3>Operations In 8 Regions</h3>
        <p>
          We operate in key cities including Riyadh, Dammam, Jeddah, Madinah,
          Sakaka, and Khamis Mushiat. Our extensive network ensures we can serve
          clients across the entire kingdom efficiently
        </p>
      </div>
    </section>
  );
};

export default OperationsSection;
