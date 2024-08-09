import styles from "./NewsSection.module.scss";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import Link from "next/link";
import NewsSummerises from "./newsSummerises/NewsSummerises";

const NewsSection = () => {
  return (
    <section className={styles.news}>
      <div className={styles.text}>
        <h3>Latest News</h3>
        <div className={styles.content}>
          <p>Stay updated with our latest achievements and industry news</p>
          <Link href="#" className={styles.all}>
            All News{" "}
            <div className={styles.arrowIcon}>
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
      </div>
      <NewsSummerises />
    </section>
  );
};

export default NewsSection;
