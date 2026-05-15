import Navbar from "@/components/ui/Navbar";
import ContactFooter from "@/components/sections/ContactFooter";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[var(--ivory)] flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 md:pt-48 pb-24 md:pb-36 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-24">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-[var(--charcoal)] leading-tight">
              About{" "}
              <span className="italic text-[var(--sage)]">After Sunday</span>
            </h1>
            <p className="mt-8 text-sm md:text-base font-light text-[var(--charcoal)]/70 max-w-lg mx-auto">
              A floral design studio rooted in seasonal availability, structural
              balance, and the subtle gestures of nature.
            </p>
          </div>

          {/* Image & Intro */}
          <div className="relative w-full aspect-[16/9] bg-[var(--blush)]/10 flex items-center justify-center overflow-hidden border border-[var(--charcoal)]/5">
            <Image
              src="/assets/floral-layers/allium.png"
              alt="Allium stems"
              fill
              className="object-contain mix-blend-multiply opacity-80 scale-125"
            />
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-16 md:gap-24 text-[var(--charcoal)] font-light leading-relaxed text-base md:text-lg">
            <section className="grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4 text-[10px] tracking-[0.3em] uppercase text-[var(--charcoal)]/50">
                Studio
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p>
                  Based in Tetouan, After Sunday Florals operates as a private
                  studio rather than a traditional retail shop. This allows for
                  a deeply considered, made-to-order approach to each
                  arrangement.
                </p>
                <p>
                  Whether composing a single sculptural stem or a lush, textured
                  bouquet, the focus is always on the natural movement and
                  inherent beauty of the materials.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4 text-[10px] tracking-[0.3em] uppercase text-[var(--charcoal)]/50">
                Approach
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p>
                  We embrace negative space and asymmetry. Our soft, modern
                  aesthetic draws from editorial design and fine art, resulting
                  in pieces that feel both spontaneous and meticulously
                  balanced.
                </p>
                <p>
                  We prioritize locally grown and seasonal materials whenever
                  possible, ensuring each arrangement reflects a specific moment
                  in time.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4 text-[10px] tracking-[0.3em] uppercase text-[var(--charcoal)]/50">
                Ordering
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p>
                  Because we do not keep a standing inventory of pre-made
                  pieces, all bouquets and arrangements must be requested in
                  advance.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mt-8">
                  <Link
                    href="/inquire?type=studio-appointment"
                    className="w-fit px-8 py-3 bg-[var(--charcoal)] text-[var(--ivory)] text-[10px] tracking-[0.25em] uppercase hover:bg-black transition-colors rounded-none"
                  >
                    Book an appointment
                  </Link>
                  <Link
                    href="/#bouquets"
                    className="w-fit px-8 py-3 border border-[var(--charcoal)]/20 text-[var(--charcoal)] text-[10px] tracking-[0.25em] uppercase hover:border-[var(--charcoal)] transition-colors rounded-none"
                  >
                    Explore bouquets
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <ContactFooter />
    </main>
  );
}
