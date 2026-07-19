import { useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BlurImage({
  src,
  alt,
  className = "",
}: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton */}
      <div
        className={`absolute inset-0 animate-pulse bg-zinc-200 transition-opacity duration-300 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`
          image
          object-cover
          transition-all
          duration-700
          ease-out
          ${
            loaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-2xl scale-110"
          }
        `}
      />
    </div>
  );
}