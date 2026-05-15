import Navbar from "@/components/ui/Navbar";
import AppointmentForm from "@/components/sections/AppointmentForm";
import ContactFooter from "@/components/sections/ContactFooter";

export default function InquirePage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-16">
        <AppointmentForm />
      </div>

      <ContactFooter />
    </main>
  );
}
