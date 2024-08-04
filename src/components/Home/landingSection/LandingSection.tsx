import Link from "next/link";
import styles from "./LandingSection.module.scss";
import { FiTriangle } from "@react-icons/all-files/fi/FiTriangle";

const LandingSection = () => {
  return (
    <section className={styles.landing}>
      <video
        id="background-video"
        loop
        autoPlay
        muted
        className={styles.backgroundVideo}
      >
        <source src="/-7f7b-4f91-876c-24c5a4e367ec.mp4 " type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.filter}></div>
      <div className={styles.text}>
        <h2>
          Experience the
          <br /> Future of Logistics
        </h2>
        <Link href="#">
          <div className={styles.play}>
            Play Video <FiTriangle className={styles.arrow} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default LandingSection;
