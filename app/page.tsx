import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import BouquetScroll from "@/components/animations/BouquetScroll";
import EditorialStory from "@/components/sections/EditorialStory";
import BouquetShowcase from "@/components/sections/BouquetShowcase";
import Services from "@/components/sections/Services";
import AppointmentForm from "@/components/sections/AppointmentForm";
import ContactFooter from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <EditorialStory />
      <BouquetShowcase />
      <BouquetScroll />
      <Services />
      <AppointmentForm />
      <ContactFooter />
    </main>
  );
}
