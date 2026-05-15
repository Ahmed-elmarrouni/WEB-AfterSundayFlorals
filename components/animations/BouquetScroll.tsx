"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const revealText: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: editorialEase,
    },
  },
};

const revealCopy: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.08,
      ease: editorialEase,
    },
  },
};

export default function BouquetScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 82%", "end 18%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 74,
    damping: 26,
    mass: 0.4,
  });

  const hydrangeaX = useTransform(
    progress,
    [0, 0.5, 1],
    ["-4vw", "1vw", "3vw"],
  );
  const hydrangeaY = useTransform(
    progress,
    [0, 0.5, 1],
    ["4vh", "-1vh", "3vh"],
  );
  const hydrangeaScale = useTransform(progress, [0, 0.5, 1], [0.94, 1.06, 1]);
  const hydrangeaOpacity = useTransform(
    progress,
    [0, 0.45, 1],
    [0.16, 0.34, 0.22],
  );
  const hydrangeaBlur = useTransform(
    progress,
    [0, 0.5, 1],
    ["blur(18px)", "blur(7px)", "blur(11px)"],
  );

  const anthuriumX = useTransform(
    progress,
    [0, 0.5, 1],
    ["-3vw", "2vw", "5vw"],
  );
  const anthuriumY = useTransform(
    progress,
    [0, 0.5, 1],
    ["5vh", "-2vh", "2vh"],
  );
  const anthuriumRotate = useTransform(progress, [0, 0.5, 1], [-9, 1.5, 7]);
  const anthuriumOpacity = useTransform(
    progress,
    [0, 0.35, 1],
    [0.6, 0.92, 0.82],
  );

  const alliumX = useTransform(progress, [0, 0.5, 1], ["-1vw", "1vw", "2vw"]);
  const alliumY = useTransform(progress, [0, 0.5, 1], ["5vh", "-2vh", "2vh"]);
  const alliumRotate = useTransform(progress, [0, 0.5, 1], [-5, 1, 5]);
  const alliumOpacity = useTransform(
    progress,
    [0, 0.35, 1],
    [0.58, 0.96, 0.86],
  );

  const dendrobiumX = useTransform(
    progress,
    [0, 0.5, 1],
    ["4vw", "-1vw", "-4vw"],
  );
  const dendrobiumY = useTransform(
    progress,
    [0, 0.5, 1],
    ["-3vh", "2vh", "5vh"],
  );
  const dendrobiumRotate = useTransform(progress, [0, 0.5, 1], [15, 5, -4]);
  const dendrobiumOpacity = useTransform(
    progress,
    [0, 0.4, 1],
    [0.48, 0.84, 0.72],
  );

  const mossX = useTransform(progress, [0, 0.5, 1], ["4vw", "-1vw", "-3vw"]);
  const mossY = useTransform(progress, [0, 0.5, 1], ["4vh", "-1vh", "3vh"]);
  const mossScale = useTransform(progress, [0, 0.5, 1], [0.86, 1, 0.92]);
  const mossOpacity = useTransform(progress, [0, 0.45, 1], [0.24, 0.62, 0.48]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[var(--blush)]/5 px-5 py-20 sm:px-6 md:px-12 md:py-28 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(232,216,208,0.44),transparent_34%),radial-gradient(circle_at_78%_60%,rgba(216,212,229,0.24),transparent_30%),linear-gradient(to_bottom,var(--ivory),rgba(249,248,246,0.9)_42%,var(--ivory))]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={revealText}
            className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[var(--charcoal)]/55 md:text-xs"
          >
            03 — Signature study
          </motion.p>

          <motion.h2
            variants={revealText}
            className="font-serif text-4xl font-light leading-[0.95] text-[var(--charcoal)] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Botanical motion study
          </motion.h2>

          <motion.p
            variants={revealCopy}
            className="mx-auto mt-5 max-w-xl text-[10px] uppercase leading-relaxed tracking-[0.22em] text-[var(--charcoal)]/60 md:text-xs"
          >
            Separated stems, composed in quiet tension.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto mt-10 h-[500px] w-full max-w-7xl sm:h-[560px] md:mt-14 md:h-[640px] lg:h-[690px]">
          <div className="pointer-events-none absolute left-1/2 top-[52%] h-[116vw] max-h-[520px] w-[116vw] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--charcoal)]/10 md:h-[56vw] md:max-h-none md:w-[56vw] md:max-w-none" />
          <div className="pointer-events-none absolute left-1/2 top-[55%] hidden h-[35vw] w-[35vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--sage)]/20 md:block" />

          <div className="pointer-events-none absolute inset-x-3 bottom-0 h-[42%] rounded-t-[999px] border-t border-[var(--charcoal)]/10 bg-[linear-gradient(to_top,rgba(232,216,208,0.2),transparent)] md:inset-x-10 md:h-[38%]" />

          <div className="pointer-events-none absolute left-[4%] top-[12%] hidden max-w-[11rem] border-l border-[var(--charcoal)]/15 pl-4 text-[10px] uppercase leading-relaxed tracking-[0.22em] text-[var(--charcoal)]/50 md:block">
            Gesture, mass, line, and negative space.
          </div>

          <div className="pointer-events-none absolute bottom-[10%] right-[4%] hidden max-w-[12rem] text-right text-[10px] uppercase leading-relaxed tracking-[0.22em] text-[var(--charcoal)]/50 md:block">
            Florals held apart, not forced together.
          </div>

          {/* Hydrangea — soft background mass */}
          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    x: hydrangeaX,
                    y: hydrangeaY,
                    scale: hydrangeaScale,
                    opacity: hydrangeaOpacity,
                    filter: hydrangeaBlur,
                  }
            }
            className="pointer-events-none absolute left-[-30vw] top-[26%] z-0 h-[78vw] w-[78vw] mix-blend-multiply sm:left-[-20vw] sm:h-[62vw] sm:w-[62vw] md:left-[7%] md:top-[30%] md:h-[32vw] md:w-[32vw]"
          >
            <Image
              src="/assets/floral-layers/hydrangea.png"
              alt="Hydrangea"
              fill
              sizes="(max-width: 640px) 78vw, (max-width: 768px) 62vw, 32vw"
              className="object-contain"
            />
          </motion.div>

          {/* Anthurium — left diagonal gesture */}
          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    x: anthuriumX,
                    y: anthuriumY,
                    rotate: anthuriumRotate,
                    opacity: anthuriumOpacity,
                  }
            }
            className="pointer-events-none absolute left-[-26vw] top-[42%] z-20 h-[58vw] w-[82vw] mix-blend-multiply sm:left-[-16vw] sm:top-[40%] sm:h-[48vw] sm:w-[70vw] md:left-[8%] md:top-[42%] md:h-[24vw] md:w-[36vw]"
          >
            <Image
              src="/assets/floral-layers/anthurium.png"
              alt="Anthurium"
              fill
              sizes="(max-width: 640px) 82vw, (max-width: 768px) 70vw, 36vw"
              className="object-contain"
            />
          </motion.div>

          {/* Allium — central vertical line */}
          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    x: alliumX,
                    y: alliumY,
                    rotate: alliumRotate,
                    opacity: alliumOpacity,
                  }
            }
            className="pointer-events-none absolute left-[49%] top-[27%] z-30 h-[340px] w-[36vw] -translate-x-1/2 mix-blend-multiply sm:h-[390px] sm:w-[30vw] md:left-[50%] md:top-[18%] md:h-[590px] md:w-[18vw] lg:h-[630px]"
          >
            <Image
              src="/assets/floral-layers/allium.png"
              alt="Allium"
              fill
              sizes="(max-width: 640px) 36vw, (max-width: 768px) 30vw, 18vw"
              className="object-contain"
            />
          </motion.div>

          {/* Purple dendrobium — right accent */}
          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    x: dendrobiumX,
                    y: dendrobiumY,
                    rotate: dendrobiumRotate,
                    opacity: dendrobiumOpacity,
                  }
            }
            className="pointer-events-none absolute right-[-28vw] top-[39%] z-20 h-[56vw] w-[66vw] mix-blend-multiply sm:right-[-18vw] sm:h-[48vw] sm:w-[58vw] md:right-[5%] md:top-[35%] md:h-[24vw] md:w-[31vw]"
          >
            <Image
              src="/assets/floral-layers/Purple-Dendrobium-Spray.png"
              alt="Purple dendrobium spray"
              fill
              sizes="(max-width: 640px) 66vw, (max-width: 768px) 58vw, 31vw"
              className="object-contain"
            />
          </motion.div>

          {/* Moss ball — lower visual weight */}
          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    x: mossX,
                    y: mossY,
                    scale: mossScale,
                    opacity: mossOpacity,
                  }
            }
            className="pointer-events-none absolute bottom-[16%] right-[31%] z-10 h-[18vw] w-[18vw] mix-blend-multiply sm:h-[15vw] sm:w-[15vw] md:bottom-[15%] md:right-[26%] md:h-[9vw] md:w-[9vw]"
          >
            <Image
              src="/assets/floral-layers/Moss-Ball.png"
              alt="Moss ball"
              fill
              sizes="(max-width: 640px) 18vw, (max-width: 768px) 15vw, 9vw"
              className="object-contain"
            />
          </motion.div>

          <div className="pointer-events-none absolute bottom-[6%] left-1/2 z-0 h-px w-[72%] -translate-x-1/2 bg-[var(--charcoal)]/10" />
        </div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.45 }}
          className="relative z-20 mx-auto mt-6 max-w-xl text-center md:mt-0"
        >
          <motion.p
            variants={revealCopy}
            className="text-sm font-light leading-relaxed text-[var(--charcoal)]/80 md:text-base"
          >
            Rather than forcing flowers into symmetry, the studio works with
            gesture, line, texture, and negative space — letting each stem keep
            its own direction.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
