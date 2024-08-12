import Image from "next/image";
import styles from "./Footer.module.scss";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Image
          src={"/Group 25black.svg"}
          alt="logo"
          width={350}
          height={120}
          className={styles.logo}
        />
        <div className={styles.navSection}>
          <h4 className={styles.header}>Company</h4>
          <ul className={styles.navLinks}>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Partners</Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className={styles.followSection}>
          <h4 className={styles.header}>Follow Us</h4>
          <ul className={styles.followUs}>
            <li>
              <Link href="#">
                <SlSocialFacebook />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaXTwitter />{" "}
              </Link>
            </li>
            <li>
              <Link href="#">
                <SlSocialInstagram />
              </Link>
            </li>
            <li>
              <Link href="#">
                <SlSocialLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Image
        src={"/overlay.svg"}
        alt="overlay"
        width={2170}
        height={400}
        className={styles.overlayImg}
      />
      <div className={styles.copyright}>
        <p>Copyright @ 2023 Duroub Logistics. All Rights Reserved</p>
        <p>Developed by Brackets Technology</p>
      </div>
    </footer>
  );
};

export default Footer;
