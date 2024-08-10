import LandingSection from "@/components/Home/landingSection/LandingSection";
import styles from "./home.module.scss";
import AboutSection from "@/components/Home/aboutSection/AboutSection";
import ServicesSection from "@/components/Home/servicesSection/ServicesSection";
import OperationsSection from "@/components/Home/operationsSection/OperationsSection";
import NewsSection from "@/components/Home/newsSection/NewsSection";
import PartneringSection from "@/components/Home/partneringSection/PartneringSection";
import SolutionsSection from "@/components/Home/solutionsSection/SolutionsSection";
import ContactUsSection from "@/components/Home/contentUsSection/ContactUsSection";
export default function Home() {
  return (
    <main className={styles.home}>
      <LandingSection />
      <AboutSection />
      <ServicesSection />
      <OperationsSection />
      <NewsSection />
      <PartneringSection />
      <SolutionsSection />
      <ContactUsSection />
    </main>
  );
}
