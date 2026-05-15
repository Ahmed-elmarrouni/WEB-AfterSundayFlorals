export default function GalleryMood() {
  const images = [
    { bg: "bg-[var(--sage)]/20", label: "Textural Study I" },
    { bg: "bg-[var(--blush)]/20", label: "Spring Foraging" },
    { bg: "bg-[var(--lavender)]/20", label: "Architectural Form" },
    { bg: "bg-[var(--charcoal)]/5", label: "Studio Light" }
  ];

  return (
    <section className="py-24 md:py-40 px-4 md:px-8 bg-[var(--ivory)] overflow-hidden">
      <div className="max-w-[100rem] mx-auto">
        <div className="mb-16 md:mb-24 px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--charcoal)]/50">
            03 — Journal
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[var(--charcoal)] max-w-xl md:text-right">
            Visual Notes & <span className="italic">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative aspect-[3/4] w-full overflow-hidden ${item.bg} group flex items-end p-6`}
            >
              {/* Soft gradient overlay for subtle depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 w-full flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                <span className="text-xs uppercase tracking-widest text-[var(--charcoal)] font-medium">
                  {item.label}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--charcoal)]/60">
                  {`0${idx + 1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
