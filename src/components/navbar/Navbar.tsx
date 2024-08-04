import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});
const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className="logo">
        <Link href="/">
          <Image src="/Group 25black.svg" width={284} height={90} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
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
            <Link href="#" className="cairoFont">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.languageSwitch}>
        <input type="checkbox" id="switch" className={styles.checkbox} />

        <label htmlFor="switch" className={`${styles.toggle}`}>
          <p>En</p>
          <p className={cairo.className}>ع</p>
        </label>
      </div>
    </header>
  );
};

export default Navbar;
