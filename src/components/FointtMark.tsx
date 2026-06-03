type FointtMarkProps = {
  className?: string;
  sizeClass?: string;
  variant?: "icon" | "wordmark";
};

export default function FointtMark({
  className = "",
  sizeClass,
  variant = "wordmark",
}: FointtMarkProps) {
  const logo =
    variant === "icon"
      ? {
          src: "/assets/fointt-logo-spiral.png",
          alt: "fointt",
          defaultSize: "h-10 w-10",
        }
      : {
          src: "/assets/fointt-logo-wordmark.png",
          alt: "fointt",
          defaultSize: "h-9 w-auto",
        };

  return (
    <img
      src={logo.src}
      alt={logo.alt}
      className={`${sizeClass ?? logo.defaultSize} shrink-0 object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
