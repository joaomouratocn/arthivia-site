import { ActionSection } from "./components/act-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { PortfolioSection } from "./components/portfolio-section";
import { ServiceSection } from "./components/service-section";

export default function Home() {
  return (
    <>
      <Header />
      <ActionSection />
      <ServiceSection />
      <PortfolioSection />
      <Footer />
    </>
  );
}