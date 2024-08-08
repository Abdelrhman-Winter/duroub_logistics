import Image from "next/image";
import styles from "./NewsSummerises.module.scss";
import Link from "next/link";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

const NewsSummerises = () => {
  return (
    <div className={styles.summerises}>
      <div className={styles.left}>
        <div className={styles.mainArticle}>
          <Link href={"#"}>
            <div className={styles.imgContant}>
              <Image
                src={"/home/news/image1.jpeg"}
                alt="image1"
                width={775}
                height={502}
              />
              <p className={styles.imgDate}>09 May 2023</p>
              <div className={styles.overlay}></div>
            </div>

            <h3>
              Lorem ipsum dolor sit amet consectetur lacus auctor amet varius in
              ...
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero velit tristique
              portaRhoncus amet euismod congc malesuada ...
            </p>
            <div className={styles.readMore}>
              Read More{" "}
              <div className={styles.arrowIcon}>
                <IoIosArrowForward />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.articles}>
          <div className={styles.article}>
            <Link href={"#"}>
              <p className={styles.date}>09 May 2023</p>
              <div className={styles.abstract}>
                <p>
                  Lorem ipsum dolor sit amet consectetur lacus auctor amet
                  varius in ...
                </p>
                <div className={styles.readMore}>
                  Read More{" "}
                  <div className={styles.arrowIcon}>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.article}>
            <Link href={"#"}>
              <p className={styles.date}>09 May 2023</p>
              <div className={styles.abstract}>
                <p>
                  Lorem ipsum dolor sit amet consectetur lacus auctor amet
                  varius in ...
                </p>
                <div className={styles.readMore}>
                  Read More{" "}
                  <div className={styles.arrowIcon}>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.article}>
            <Link href={"#"}>
              <p className={styles.date}>09 May 2023</p>
              <div className={styles.abstract}>
                <p>
                  Lorem ipsum dolor sit amet consectetur lacus auctor amet
                  varius in ...
                </p>
                <div className={styles.readMore}>
                  Read More{" "}
                  <div className={styles.arrowIcon}>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.article}>
            <Link href={"#"}>
              <p className={styles.date}>09 May 2023</p>
              <div className={styles.abstract}>
                <p>
                  Lorem ipsum dolor sit amet consectetur lacus auctor amet
                  varius in ...
                </p>
                <div className={styles.readMore}>
                  Read More{" "}
                  <div className={styles.arrowIcon}>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSummerises;
