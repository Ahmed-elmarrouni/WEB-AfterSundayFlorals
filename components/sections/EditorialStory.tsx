"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.96,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.25,
      ease: editorialEase,
    },
  },
};

const backgroundFlower: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
    rotate: -4,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 0.2,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: editorialEase,
    },
  },
};

const hairline: Variants = {
  hidden: {
    scaleX: 0,
    transformOrigin: "left center",
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.1,
      ease: editorialEase,
    },
  },
};

export default function EditorialStory() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="relative overflow-hidden bg-[var(--background)] px-6 py-24 md:px-12 md:py-32 lg:px-24"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: false, amount: 0.28 }}
    >
      {/* Decorative hairline */}
      <motion.div
        variants={hairline}
        className="absolute left-12 right-12 top-0 h-px bg-[var(--charcoal)]/10"
      />

      {/* Decorative Queen Anne's Lace */}
      <motion.div
        variants={backgroundFlower}
        className="pointer-events-none absolute bottom-0 right-0 h-[40vw] w-[40vw] translate-x-1/4 translate-y-1/4 mix-blend-multiply md:h-[25vw] md:w-[25vw]"
      >
        <Image
          src="/assets/floral-layers/Queen-Anne_s-Lace.png"
          alt="Queen Anne's Lace"
          fill
          sizes="(max-width: 768px) 40vw, 25vw"
          className="object-contain"
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16"
      >
        {/* Left: label and image */}
        <div className="flex flex-col gap-12 md:col-span-5">
          <motion.p
            variants={fadeUp}
            className="text-[10px] uppercase tracking-[0.3em] text-[var(--charcoal)]/50"
          >
            01 — Ethos
          </motion.p>

          <motion.div
            variants={imageReveal}
            className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden md:mx-0"
          >
            <motion.div
              className="relative h-full w-full"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                      rotate: [0, 0.8, 0],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/floral-layers/allium.png"
                alt="Allium detail"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-contain opacity-90 mix-blend-multiply"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right: typography */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-8 md:col-span-7 md:gap-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl font-light leading-tight text-[var(--charcoal)] md:text-5xl lg:text-6xl"
          >
            We approach floral design as an{" "}
            <span className="italic text-[var(--sage)]">
              ephemeral art form
            </span>
            , deeply rooted in seasonality and structural balance.
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 text-sm font-light leading-relaxed text-[var(--charcoal)]/80 md:grid-cols-2 md:gap-12 md:text-base">
            <motion.p variants={fadeUp}>
              Each arrangement is an exploration of form, texture, and negative
              space. We avoid over-manipulation, preferring to let the natural
              curve of a stem or the fragility of a petal dictate the final
              composition.
            </motion.p>

            <motion.p variants={fadeUp}>
              Sourced thoughtfully and arranged with intent, our work is
              designed to transform spaces—offering a quiet, luxurious moment of
              reflection in the modern home or studio.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
