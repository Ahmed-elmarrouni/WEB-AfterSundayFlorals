"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const offerings = [
  {
    title: "Seasonal Bouquets",
    description:
      "Hand-tied arrangements composed around available stems, soft color, and natural movement.",
    img: "/assets/floral-layers/Spherical-Bloom.png",
  },
  {
    title: "Vase Arrangements",
    description:
      "Ready-to-place compositions for homes, studios, cafés, and reception spaces.",
    img: "/assets/floral-layers/Tulip.png",
  },
  {
    title: "Gift & Occasion Florals",
    description:
      "Delicate flowers for birthdays, dinners, thank-you moments, and intimate celebrations.",
    img: "/assets/floral-layers/Purple-Dendrobium-Spray.png",
  },
] as const;

const sectionIntro: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: editorialEase,
    },
  },
};

const rowContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.18,
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 36,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: editorialEase,
    },
  },
};

const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: editorialEase,
    },
  },
};

export default function BouquetShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="bouquets"
      className="overflow-hidden bg-[var(--background)] px-6 py-24 md:px-12 md:py-36 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.35 }}
          variants={sectionIntro}
          className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-24 md:flex-row md:items-end"
        >
          <div className="flex max-w-2xl flex-col gap-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--charcoal)]/50">
              01 — Available by request
            </p>

            <h2 className="font-serif text-3xl font-light leading-tight text-[var(--charcoal)] md:text-5xl">
              Bouquets & botanical compositions
            </h2>
          </div>

          <p className="max-w-md text-sm font-light leading-relaxed text-[var(--charcoal)]/70 md:text-right md:text-base">
            After Sunday Florals creates seasonal hand-tied bouquets, vase
            arrangements, and sculptural compositions. Each piece is made to
            order using available stems, color mood, and occasion.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-28">
          {offerings.map((item, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={{ once: false, amount: 0.42 }}
                variants={rowContainer}
                className={`group flex flex-col items-center gap-8 md:gap-16 ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <motion.div
                  variants={imageReveal}
                  className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden md:w-1/2"
                >
                  <motion.div
                    className="relative h-full w-full"
                    whileHover={reduceMotion ? undefined : { scale: 1.035 }}
                    transition={{
                      duration: 0.8,
                      ease: editorialEase,
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-12 opacity-80 mix-blend-multiply"
                    />
                  </motion.div>
                </motion.div>

                <div className="flex w-full flex-col gap-6 md:w-1/2">
                  <motion.p
                    variants={textReveal}
                    className="text-[10px] uppercase tracking-[0.28em] text-[var(--charcoal)]/45"
                  >
                    0{idx + 1}
                  </motion.p>

                  <motion.h3
                    variants={textReveal}
                    className="font-serif text-2xl font-light text-[var(--charcoal)] md:text-4xl"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    variants={textReveal}
                    className="max-w-sm text-sm font-light leading-relaxed text-[var(--charcoal)]/70 md:text-base"
                  >
                    {item.description}
                  </motion.p>

                  <motion.div variants={textReveal}>
                    <Link
                      href="/inquire?type=bouquet"
                      className="group/link mt-4 inline-flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--charcoal)] transition-colors"
                    >
                      <span>Inquire about a bouquet</span>
                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-[var(--charcoal)]/30 transition-all duration-500 group-hover/link:w-12 group-hover/link:bg-[var(--charcoal)]"
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
