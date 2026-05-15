"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SmoothAnchor from "@/components/ui/SmoothAnchor";

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.8,
      ease: editorialEase,
    },
  },
};

const copyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.15,
      ease: editorialEase,
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.35,
    },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--ivory)] px-4 py-24 md:px-8">
      {/* Soft garden base: hydrangea centered at bottom */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                scale: 1.08,
                y: 40,
                filter: "blur(14px)",
              }
        }
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: 0.22,
                scale: 1,
                y: 0,
                filter: "blur(5px)",
              }
        }
        transition={{ duration: 3.8, delay: 0.25, ease: editorialEase }}
        className="pointer-events-none absolute bottom-[-34vw] left-1/2 z-0 h-[90vw] w-[90vw] max-w-none -translate-x-1/2 sm:bottom-[-30vw] md:bottom-[-21vw] md:h-[50vw] md:w-[50vw]"
      ></motion.div>

      {/* Top-right hanging amaranthus accent, moved slightly lower */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -34, x: 20 }}
        animate={reduceMotion ? undefined : { opacity: 0.5, y: 0, x: 0 }}
        transition={{ duration: 2.4, delay: 0.35, ease: editorialEase }}
        className="pointer-events-none absolute right-[-7vw] top-[5vh] z-10 h-[46vw] w-[28vw] max-w-[260px] md:right-[2vw] md:top-[3vh] md:h-[30vw] md:w-[16vw]"
      >
        <Image
          src="/assets/floral-layers/Hanging_Amaranthus-.png"
          alt="Hanging amaranthus"
          fill
          priority
          sizes="(max-width: 768px) 28vw, 16vw"
          className="object-contain object-top mix-blend-multiply"
        />
      </motion.div>

      {/* Bottom-left anthurium accent */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: -56, y: 42 }}
        animate={reduceMotion ? undefined : { opacity: 0.82, x: 0, y: 0 }}
        transition={{ duration: 2.7, delay: 0.45, ease: editorialEase }}
        className="pointer-events-none absolute bottom-[-10vw] left-[-20vw] z-10 h-[64vw] w-[72vw] max-w-none sm:left-[-14vw] md:bottom-[-9vw] md:left-[-10vw] md:h-[38vw] md:w-[42vw]"
      >
        <Image
          src="/assets/floral-layers/anthurium.png"
          alt="Anthurium stem"
          fill
          priority
          sizes="(max-width: 768px) 72vw, 42vw"
          className="object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Bottom-center tulip garden accent */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 80, rotate: -3 }}
        animate={reduceMotion ? undefined : { opacity: 0.52, y: 0, rotate: 0 }}
        transition={{ duration: 2.8, delay: 0.75, ease: editorialEase }}
        className="pointer-events-none absolute bottom-[-22vw] left-[53%] z-0 hidden h-[68vw] w-[24vw] max-w-none -translate-x-1/2 sm:block md:bottom-[-13vw] md:left-[54%] md:h-[40vw] md:w-[14vw]"
      >
        <Image
          src="/assets/floral-layers/Tulip.png"
          alt="Tulip line"
          fill
          priority
          sizes="(max-width: 768px) 24vw, 14vw"
          className="object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Bottom-right dendrobium accent */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 52, y: 38 }}
        animate={reduceMotion ? undefined : { opacity: 0.58, x: 0, y: 0 }}
        transition={{ duration: 2.6, delay: 0.9, ease: editorialEase }}
        className="pointer-events-none absolute bottom-[4vw] right-[-16vw] z-10 h-[48vw] w-[48vw] max-w-none sm:right-[-12vw] md:bottom-[2vw] md:right-[-4vw] md:h-[28vw] md:w-[28vw]"
      >
        <Image
          src="/assets/floral-layers/Purple-Dendrobium-Spray.png"
          alt="Purple dendrobium spray"
          fill
          priority
          sizes="(max-width: 768px) 48vw, 28vw"
          className="object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Typography & content */}
      <motion.div
        variants={containerVariants}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
        className="relative z-20 flex min-h-[calc(100vh-12rem)] w-full flex-col items-center justify-center text-center"
      >
        <motion.p
          variants={copyVariants}
          className="mb-8 text-[10px] font-light uppercase tracking-[0.3em] text-[var(--charcoal)]/60 md:text-xs"
        >
          Tetouan — Studio by appointment
        </motion.p>

        <motion.h1
          variants={titleVariants}
          className="max-w-full break-words font-serif text-[14vw] font-light leading-[0.9] tracking-tight text-[var(--charcoal)] md:text-[10vw] lg:text-[8vw]"
        >
          After Sunday <br />
          <span className="italic text-[var(--sage)]">Florals</span>
        </motion.h1>

        <motion.p
          variants={copyVariants}
          className="mx-auto mt-10 max-w-xl text-sm font-light leading-relaxed text-[var(--charcoal)]/70 md:mt-12 md:text-base"
        >
          Seasonal bouquets and sculptural floral arrangements composed for
          homes, studios, and intimate gatherings.
        </motion.p>

        <motion.div
          variants={copyVariants}
          className="mt-14 flex flex-col items-center gap-8 sm:flex-row md:mt-16"
        >
          <SmoothAnchor
            href="#bouquets"
            className="group relative pb-1 text-xs uppercase tracking-widest text-[var(--charcoal)] transition-colors hover:text-black"
          >
            Explore Bouquets
            <span className="absolute bottom-0 left-0 h-px w-full bg-[var(--charcoal)]/30 transition-colors duration-300 group-hover:bg-black" />
          </SmoothAnchor>

          <Link
            href="/inquire"
            className="rounded-full border border-[var(--charcoal)]/20 bg-white/50 px-6 py-2 text-[10px] uppercase tracking-[0.25em] text-[var(--charcoal)] backdrop-blur-sm transition-colors hover:border-[var(--charcoal)]/60"
          >
            Book Appointment
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
