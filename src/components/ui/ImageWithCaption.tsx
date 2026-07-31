import { cn } from "@/lib/cn";

type ImageWithCaptionProps = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  className?: string;
};

export function ImageWithCaption({
  src,
  alt,
  caption,
  aspect = "16/10",
  className,
}: ImageWithCaptionProps) {
  return (
    <figure
      className={cn("relative min-w-0 overflow-hidden rounded-2xl bg-grass/10", className)}
      style={{ aspectRatio: aspect }}
    >
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sea/90 to-transparent px-4.5 pt-10 pb-3.5 text-sm font-semibold text-cream">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
