// import Image from "next/image";

// export default function Services() {
//   const services = [
//     {
//       id: "01",
//       title: "Weekly Arrangements",
//       description: "Seasonal stems composed for homes, studios, and quiet weekly rituals.",
//       img: "/assets/floral-layers/Spherical-Bloom.png",
//       link: "#"
//     },
//     {
//       id: "02",
//       title: "Studio Compositions",
//       description: "Singular sculptural pieces shaped around light, vessel, and room.",
//       img: "/assets/floral-layers/Tulip.png",
//       link: "#"
//     },
//     {
//       id: "03",
//       title: "Events & Tablescapes",
//       description: "Softly architectural florals for intimate dinners, launches, and gatherings.",
//       img: "/assets/floral-layers/Purple-Dendrobium-Spray.png",
//       link: "#"
//     }
//   ];

//   return (
//     <section id="services" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[var(--ivory)]">
//       <div className="max-w-5xl mx-auto">

//         <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--charcoal)]/50 mb-16 md:mb-24">
//           02 — Services
//         </p>

//         <div className="flex flex-col border-t border-[var(--charcoal)]/10">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-[var(--charcoal)]/10 gap-8"
//             >

//               {/* Subtle hover background shift on desktop */}
//               <div className="absolute inset-0 bg-[var(--blush)]/0 group-hover:bg-[var(--blush)]/10 transition-colors duration-500 -z-10 hidden md:block -mx-8 px-8" />

//               <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 lg:gap-24 w-full">
//                 <span className="text-xs font-light text-[var(--charcoal)]/40 shrink-0">
//                   {service.id}
//                 </span>

//                 <h3 className="text-3xl md:text-5xl font-serif font-light text-[var(--charcoal)] md:w-1/3 shrink-0">
//                   {service.title}
//                 </h3>

//                 <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-6">
//                   <p className="text-sm font-light text-[var(--charcoal)]/70 max-w-sm relative z-10">
//                     {service.description}
//                   </p>

//                   <div className="flex items-center justify-between w-full md:w-auto md:gap-12 relative z-10">
//                     {/* Floral Thumbnail (Always visible, subtly scales on hover) */}
//                     <div className="relative w-12 h-12 md:w-16 md:h-16 opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out hidden md:block mix-blend-multiply">
//                       <Image
//                         src={service.img}
//                         alt={service.title}
//                         fill
//                         className="object-contain"
//                       />
//                     </div>

//                     <a href={service.link} className="text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)] border-b border-[var(--charcoal)]/20 pb-1 hover:border-[var(--charcoal)] transition-colors">
//                       Inquire
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Mobile Floral Accent */}
//               <div className="relative w-16 h-16 opacity-40 mix-blend-multiply md:hidden absolute right-0 top-8 pointer-events-none">
//                 <Image
//                   src={service.img}
//                   alt={service.title}
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Service = {
  id: string;
  title: string;
  description: string;
  img: string;
  href: string;
};

const services: Service[] = [
  {
    id: "01",
    title: "Weekly Arrangements",
    description:
      "Seasonal stems composed for homes, studios, and quiet weekly rituals.",
    img: "/assets/floral-layers/Spherical-Bloom.png",
    href: "/inquire?service=weekly-arrangements",
  },
  {
    id: "02",
    title: "Studio Compositions",
    description:
      "Singular sculptural pieces shaped around light, vessel, and room.",
    img: "/assets/floral-layers/Tulip.png",
    href: "/inquire?service=studio-compositions",
  },
  {
    id: "03",
    title: "Events & Tablescapes",
    description:
      "Softly architectural florals for intimate dinners, launches, and gatherings.",
    img: "/assets/floral-layers/Purple-Dendrobium-Spray.png",
    href: "/inquire?service=events-tablescapes",
  },
];

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
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
      duration: 0.9,
      ease: editorialEase,
    },
  },
};

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    rotate: -4,
  },
  visible: {
    opacity: 0.78,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.1,
      ease: editorialEase,
    },
  },
};

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="services"
      className="overflow-hidden bg-[var(--ivory)] px-6 py-20 md:px-12 md:py-32 lg:px-24"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div variants={sectionVariants} className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          className="mb-14 flex flex-col gap-5 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--charcoal)]/50">
              02 — Services
            </p>

            <h2 className="max-w-2xl font-serif text-4xl font-light leading-tight text-[var(--charcoal)] md:text-6xl">
              Studio{" "}
              <span className="italic text-[var(--sage)]">Offerings</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm font-light leading-relaxed text-[var(--charcoal)]/70 md:text-right md:text-base">
            Seasonal florals, sculptural arrangements, and intimate event
            compositions shaped with restraint.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-[var(--charcoal)]/10">
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={rowVariants}
              className="group relative border-b border-[var(--charcoal)]/10 py-10 md:py-14"
            >
              {/* Desktop hover wash */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-screen -translate-x-1/2 bg-[var(--blush)]/0 transition-colors duration-500 group-hover:bg-[var(--blush)]/10 md:block" />

              <div className="relative z-10 grid grid-cols-1 gap-7 md:grid-cols-[4rem_minmax(16rem,1fr)_minmax(16rem,1fr)_5rem] md:items-center md:gap-10">
                {/* Mobile top row */}
                <div className="flex items-center justify-between md:block">
                  <span className="text-xs font-light text-[var(--charcoal)]/50">
                    {service.id}
                  </span>

                  <motion.div
                    variants={imageVariants}
                    className="relative h-16 w-16 mix-blend-multiply md:hidden"
                  >
                    <Image
                      src={service.img}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </motion.div>
                </div>

                <h3 className="max-w-md font-serif text-3xl font-light leading-[1.05] text-[var(--charcoal)] md:text-5xl">
                  {service.title}
                </h3>

                <p className="max-w-md text-sm font-light leading-relaxed text-[var(--charcoal)]/70 md:text-base">
                  {service.description}
                </p>

                {/* Desktop floral thumbnail */}
                <motion.div
                  variants={imageVariants}
                  className="relative hidden h-16 w-16 mix-blend-multiply transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 md:block"
                >
                  <Image
                    src={service.img}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </motion.div>
              </div>

              <div className="relative z-10 mt-7 md:ml-[calc(4rem+2.5rem)]">
                <Link
                  href={service.href}
                  className="group/link inline-flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[var(--charcoal)] transition-colors"
                >
                  <span>Inquire</span>
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-[var(--charcoal)]/30 transition-all duration-500 group-hover/link:w-12 group-hover/link:bg-[var(--charcoal)]"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
