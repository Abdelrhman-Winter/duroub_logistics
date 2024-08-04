import LandingSection from "@/components/Home/landingSection/LandingSection";
import styles from "./home.module.scss";
import AboutSection from "@/components/Home/aboutSection/AboutSection";
export default function Home() {
  return (
    <main className={styles.home}>
      <LandingSection />
      <AboutSection />
    </main>
  );
}
