import styles from "./ContactUsSection.module.scss";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

import Image from "next/image";

const ContactUsSection = () => {
  return (
    <section className={styles.contactUs}>
      <div className={styles.text}>
        <h2>Get in Touch</h2>
        <p>Reach out for inquiries and support</p>
        <div className={styles.info}>
          <p>
            <Image
              src={"/home/contactUs/Call.svg"}
              alt="icon1"
              width={40}
              height={40}
            />{" "}
            +966 58 168 0000
          </p>
          <p>
            <Image
              src={"/home/contactUs/At.svg"}
              alt="icon2"
              width={40}
              height={40}
            />{" "}
            Customercare@duroub.com
          </p>
          <p>
            <Image
              src={"/home/contactUs/lo.svg"}
              alt="icon1"
              width={40}
              height={40}
            />{" "}
            Business park, near to Jamjoom center, Al Hamrah dist. P.O. box:
            8960, KSA. Jeddah 21492
          </p>
        </div>
      </div>
      <form action="">
        <div className={styles.userBox}>
          <input type="text" id="fullname" required />
          <label>Full name</label>
        </div>
        <div className={styles.userBox}>
          <input type="email" id="email" required />
          <label>Email</label>
        </div>
        <div className={styles.userBox}>
          <input type="text" id="subject" required />
          <label>Subject</label>
        </div>
        <div className={styles.userBox}>
          <input type="textarea" id="message" required />
          <label>Your message ...</label>
        </div>

        <button className={styles.send}>
          Send{" "}
          <div className={styles.arrowIcon}>
            <IoIosArrowForward />
          </div>
        </button>
      </form>
    </section>
  );
};

export default ContactUsSection;
