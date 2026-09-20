"use client";

import { useEffect, useRef, useState } from "react";

// Branded placeholder is always the background layer. A real photo covers it
// when present. If a `video` is given and `autoPlayInView` is set, the clip
// comes alive on its own once the card scrolls into view: it waits 2s, plays
// once, then pauses 5s before playing again — so cards feel lively on mobile
// (no hover needed) without hammering the page. Photo is what loads first.
export function DishPhoto({
  src,
  video,
  name,
  className = "",
  autoPlayInView = false,
}: {
  src: string;
  video?: string;
  name: string;
  className?: string;
  autoPlayInView?: boolean;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const [videoOk, setVideoOk] = useState(true);
  const [playing, setPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const enabled = autoPlayInView && !!video && videoOk;

  useEffect(() => {
    if (!enabled) return;
    const el = containerRef.current;
    const v = vidRef.current;
    if (!el || !v) return;

    let inView = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const schedule = (delayMs: number) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        if (!inView) return;
        v.currentTime = 0;
        setPlaying(true);
        v.play().catch(() => {});
      }, delayMs);
    };

    const stop = () => {
      if (timer) clearTimeout(timer);
      timer = undefined;
      v.pause();
      v.currentTime = 0;
      setPlaying(false);
    };

    const onEnded = () => {
      setPlaying(false);
      if (inView) schedule(5000); // 5s pause between plays
    };
    v.addEventListener("ended", onEnded);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inView = true;
          schedule(2000); // first play 2s after coming into view
        } else {
          inView = false;
          stop();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      v.removeEventListener("ended", onEnded);
      if (timer) clearTimeout(timer);
    };
  }, [enabled]);

  return (
    <div
      ref={containerRef}
      className={`photo-fallback grain relative flex items-center justify-center overflow-hidden ${className}`}
      role="img"
      aria-label={name}
    >
      <span className="pointer-events-none flex flex-col items-center gap-1 text-center">
        <span className="font-display text-2xl italic text-gold/50">Badoota</span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-bone-dim/40">
          photo soon
        </span>
      </span>

      {!imgFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          onError={() => setImgFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {enabled && (
        <video
          ref={vidRef}
          src={video}
          muted
          playsInline
          preload="none"
          onError={() => setVideoOk(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
