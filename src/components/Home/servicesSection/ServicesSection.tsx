import styles from "./ServicesSection.module.scss";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import Link from "next/link";
import ServicesCard from "./servicesCard/ServicesCard";

const ServicesSection = () => {
  return (
    <section className={styles.service}>
      <div className={styles.text}>
        <h3>Our Services</h3>
        <div className={styles.content}>
          <p>
            Comprehensive logistics solutions tailored to meet diverse client
            needs. We provide transportation, warehousing, cross-border
            transport, 4PL & control tower management, freight forwarding,
            value-added services, and direct store delivery
          </p>
          <Link href="#" className={styles.explore}>
            Explore More{" "}
            <div className={styles.arrowIcon}>
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
      </div>
      <ServicesCard />
    </section>
  );
};

export default ServicesSection;
