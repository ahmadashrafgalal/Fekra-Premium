"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { LAB_PAIRS, WA_GENERAL, waLink, type ArtworkItem } from "@/lib/data";

/* Clean Official WhatsApp Logo SVG (FontAwesome fa-whatsapp) */
export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 448 512"
      className={`fill-current ${className}`}
      aria-hidden="true"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

/* ============================================================================
   1. INTERACTIVE VISUAL LANGUAGE LAB (Line Art ↔ Final Color)
   ============================================================================ */
export function VisualLanguageLab() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const pair = LAB_PAIRS[activeIdx];

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, pct)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => updateFromClientX(e.clientX);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, updateFromClientX]);

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#0d103d]/70 p-4 shadow-[0_24px_80px_rgba(4,5,28,0.55)] backdrop-blur-xl sm:p-6">
      {/* Top Bar: Scene Switcher Tabs + Quick Percentage Presets */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {LAB_PAIRS.map((item, idx) => {
            const active = idx === activeIdx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-xl px-4 py-2 font-alexandria text-xs font-bold transition duration-300 sm:text-sm ${
                  active
                    ? "bg-white text-[#11135c] shadow-md"
                    : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 p-1 text-[11px]">
          <button
            type="button"
            onClick={() => setPos(92)}
            className="rounded-lg px-2.5 py-1 font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            الخطوط (Line Art)
          </button>
          <button
            type="button"
            onClick={() => setPos(50)}
            className="rounded-lg bg-white/10 px-2.5 py-1 font-bold text-white"
          >
            50 / 50
          </button>
          <button
            type="button"
            onClick={() => setPos(8)}
            className="rounded-lg px-2.5 py-1 font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            الإضاءة (Final Color)
          </button>
        </div>
      </div>

      {/* Interactive Comparison Stage */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setDragging(true);
          updateFromClientX(e.clientX);
        }}
        onTouchStart={(e) => {
          setDragging(true);
          if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
        }}
        className="relative aspect-[16/9] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/10"
        dir="ltr"
      >
        <Image
          src={pair.after}
          alt={`${pair.title} - Final Color`}
          fill
          sizes="(max-width: 1200px) 100vw, 1150px"
          className="pointer-events-none object-cover"
          priority
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={pair.before}
            alt={`${pair.title} - Line Art`}
            fill
            sizes="(max-width: 1200px) 100vw, 1150px"
            className="pointer-events-none object-cover"
          />
        </div>

        {/* Corner Pills */}
        <div className="pointer-events-none absolute left-3.5 top-3.5 rounded-full border border-white/15 bg-[#090b2e]/80 px-3 py-1 font-mono text-[11px] font-medium text-white backdrop-blur-md">
          LINE ART &amp; LAYOUT
        </div>
        <div className="pointer-events-none absolute right-3.5 top-3.5 rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-bold text-[#11135c] backdrop-blur-md">
          COLOR &amp; LIGHTING
        </div>

        {/* Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#141275] text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Info & Extracted Color Swatches */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-1">
        <p className="text-xs leading-relaxed text-white/80 sm:text-sm">{pair.lesson}</p>
        <div className="flex items-center gap-1.5">
          {pair.palette.map((hex) => (
            <span
              key={hex}
              className="h-4 w-6 rounded-md border border-white/20"
              style={{ backgroundColor: hex }}
              title={hex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   2. FULL-SCREEN ARTWORK LIGHTBOX
   ============================================================================ */
export function ArtworkLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: ArtworkItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIdx: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowRight") onNavigate((index - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  const current = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {current && index !== null && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col justify-between bg-[#070824]/95 p-4 text-white backdrop-blur-2xl sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mx-auto flex w-full max-w-6xl items-center justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="font-alexandria text-lg font-bold sm:text-xl">{current.title}</h3>
              <p className="font-mono text-xs text-white/60">{current.enTitle}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-white transition hover:bg-white hover:text-[#11135c]"
              aria-label="إغلاق"
            >
              ✕
            </button>
          </div>

          <div
            className="relative mx-auto my-4 flex h-[70vh] w-full max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.title}
              fill
              sizes="95vw"
              className="object-contain"
              priority
            />

            <button
              type="button"
              onClick={() => onNavigate((index - 1 + items.length) % items.length)}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d103d]/80 text-white backdrop-blur-md transition hover:bg-white hover:text-[#11135c]"
              aria-label="السابق"
            >
              →
            </button>
            <button
              type="button"
              onClick={() => onNavigate((index + 1) % items.length)}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d103d]/80 text-white backdrop-blur-md transition hover:bg-white hover:text-[#11135c]"
              aria-label="التالي"
            >
              ←
            </button>
          </div>

          <div
            className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="max-w-2xl text-sm text-white/80">{current.desc}</p>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {current.palette.map((hex) => (
                  <span
                    key={hex}
                    className="h-4 w-6 rounded border border-white/20"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
              <a
                href={waLink(`أهلاً يا ممدوح، عجبني عمل "${current.title}" على موقع فكرة بريميوم.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="استفسر عن العمل"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================================================================
   3. ICON-ONLY FLOATING WHATSAPP BUTTON (كفاية اللوجو بتاع الواتس بدون كلام)
   ============================================================================ */
export function FloatingWhatsApp() {
  return (
    <a
      href={WA_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      title="WhatsApp"
      className="group fixed bottom-6 left-6 z-[80] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.4)] transition duration-300 hover:scale-110 active:scale-95"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
      <WhatsAppIcon className="relative h-7 w-7 transition-transform duration-300 group-hover:rotate-6" />
    </a>
  );
}
