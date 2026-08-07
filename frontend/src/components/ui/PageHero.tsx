"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  minHeight?: string;
  showScrollIndicator?: boolean;
}

export default function PageHero({
  label,
  title,
  highlight,
  subtitle,
  backgroundImage = "https://source.unsplash.com/featured/2400x1400?business,bosnia",
  children,
  minHeight = "min-h-[60vh]",
  showScrollIndicator = false,
}: PageHeroProps) {
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    if (parts.length === 1) return title;
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      className={`relative flex ${minHeight} items-center justify-center overflow-hidden`}
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          unoptimized
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Animated aurora blobs */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="aurora-blob absolute h-[50vh] w-[50vh] opacity-60" />
        <div
          className="aurora-blob absolute h-[40vh] w-[40vh] opacity-40"
          style={{ animationDelay: "-4s", animationDuration: "16s" }}
        />
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center lg:px-8">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-foreground/80">
              {label}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {renderTitle()}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
