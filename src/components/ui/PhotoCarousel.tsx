import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { cn } from "@/lib/cn";

export type CarouselPhoto = { src: string; alt: string };

type PhotoCarouselProps = {
  photos: CarouselPhoto[];
  label: string;
  interval?: number;
  className?: string;
};

/**
 * Carrusel de fotos con fundido. Avanza solo cada `interval` ms, se pausa al pasar el
 * mouse o enfocar un control, y no avanza solo si el usuario prefiere reducir movimiento.
 */
export function PhotoCarousel({ photos, label, interval = 5000, className }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const autoplay = !paused && !shouldReduceMotion && photos.length > 1;

  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % photos.length), interval);
    return () => clearTimeout(id);
  }, [autoplay, index, interval, photos.length]);

  const go = (step: number) => setIndex((i) => (i + step + photos.length) % photos.length);
  const current = photos[index];

  return (
    <section
      aria-roledescription="carrusel"
      aria-label={label}
      className={cn("relative overflow-hidden rounded-3xl bg-grass/10", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeInOut" }}
        />
      </AnimatePresence>
      {/* Precarga la siguiente foto para que el fundido no muestre un hueco. */}
      <link rel="preload" as="image" href={photos[(index + 1) % photos.length].src} />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-sea/70 to-transparent px-4 pt-12 pb-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Foto anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-grass transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <FaChevronLeft aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
        <div className="flex gap-2">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1} de ${photos.length}`}
              aria-current={i === index}
              className={cn(
                "h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                i === index ? "w-6 bg-lime" : "w-2.5 bg-white/70 hover:bg-white",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Foto siguiente"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-grass transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <FaChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  );
}
