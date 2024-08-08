import LandingSection from "@/components/Home/landingSection/LandingSection";
import styles from "./home.module.scss";
import AboutSection from "@/components/Home/aboutSection/AboutSection";
import ServicesSection from "@/components/Home/servicesSection/ServicesSection";
import OperationsSection from "@/components/Home/operationsSection/OperationsSection";
import NewsSection from "@/components/Home/news/NewsSection";
export default function Home() {
  return (
    <main className={styles.home}>
      <LandingSection />
      <AboutSection />
      <ServicesSection />
      <OperationsSection />
      <NewsSection />
    </main>
  );
}
