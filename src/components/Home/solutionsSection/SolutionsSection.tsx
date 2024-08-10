import SectionBackground from "./sectionBackground/SectionBackground";
import styles from "./SolutionsSection.module.scss";
const SolutionsSection = () => {
  return (
    <section className={styles.solution}>
      <div className={styles.text}>
        <h2>
          Duroub logistics is a fully integrated logistics cold chain solutions
          provider offering end to end logistics services across the kingdom
        </h2>
      </div>
      <SectionBackground />
    </section>
  );
};

export default SolutionsSection;
