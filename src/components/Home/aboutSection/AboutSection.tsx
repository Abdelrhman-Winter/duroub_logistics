import Link from "next/link";
import styles from "./AboutSection.module.scss";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import SummerisesCards from "./summerisesCards/SummerisesCards";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.text}>
        <h3>About Duroub Logistics</h3>
        <p>
          Duroub Logistics is a premier provider of integrated logistics and
          cold chain solutions across Saudi Arabia. We offer end-to-end
          services, ensuring efficiency and reliability at every stage
        </p>
        <Link href="#" className={styles.explore}>
          Explore More{" "}
          <div className={styles.arrowIcon}>
            <IoIosArrowForward />
          </div>
        </Link>
      </div>
      <SummerisesCards />
    </section>
  );
};

export default AboutSection;
