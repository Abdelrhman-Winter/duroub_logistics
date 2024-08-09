import Partners from "./partner/Partners";
import styles from "./PartneringSection.module.scss";
const PartneringSection = () => {
  return (
    <section className={styles.partnering}>
      <div className={styles.text}>
        <h2>Partnering for Excellence</h2>
        <p>
          We collaborate with industry leaders to deliver top-tier logistics
          solutions. Our partners trust us to provide reliable, efficient, and
          innovative services that meet their diverse needs
        </p>
      </div>
      <Partners />
    </section>
  );
};

export default PartneringSection;
