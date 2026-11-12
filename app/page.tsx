"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  HERO_SCENES,
  DISCIPLINES,
  GALLERY_WORKS,
  ZAHIAN_CHAPTERS,
  STATS,
  TOOLS,
  EXPERIENCE,
  WORKSHOP_MODULES,
  WORKSHOP_AUDIENCE,
  BG_COURSE_POINTS,
  ADDITIONAL_COURSES,
  LINKS,
  WA_WORKSHOP,
  waLink,
  type Discipline,
} from "@/lib/data";
import {
  VisualLanguageLab,
  ArtworkLightbox,
  FloatingWhatsApp,
  WhatsAppIcon,
} from "@/components/SharedWidgets";

/* Smooth, lightweight scroll reveal */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const MARQUEE_ITEMS = [
  "BACKGROUND DESIGN",
  "CONCEPT ART",
  "TOON BOOM ANIMATION",
  "VISUAL LANGUAGE",
  "COLOR SCRIPTING",
  "COMPOSITION & CAMERA",
  "WORLD BUILDING",
  "STORYBOARDING",
];

const STUDY_TABS = [
  {
    id: "moods",
    badge: "4-MOOD COLOR SCRIPT",
    title: "دراسة الإضاءة والمود (٤ حالات لنفس الكادر)",
    desc: "تطبيق عملي من منهج الكورس والورشة لكيفية تغيير الإحساس والزمن الدرامي على نفس الغرفة والتكوين الهندسي فقط من خلال التحكم في الحرارة اللونية ومصادر الضوء والظل.",
    src: "/art/portfolio/personal-projects_personal-projects-68.webp",
  },
  {
    id: "storyboard",
    badge: "STORYBOARD TO KEYFRAME",
    title: "تسلسل بناء المشهد من الاسكتش للكادر النهائي",
    desc: "كيف نبدأ من فكرة سريعة (Thumbnail & Layout) ونحدد زاوية الكاميرا الحركية، ثم نبني القيم اللونية والإضاءة النهائية التي توجه عين المشاهد لمركز الحدث.",
    src: "/art/portfolio/personal-projects_personal-projects-65.webp",
  },
];

export default function HomePage() {
  const [heroIdx, setHeroIdx] = useState(2); // Starts with Sleeping Giant (giant.jpg)
  const [activeMod, setActiveMod] = useState(0);
  const [wsLevelIdx, setWsLevelIdx] = useState(0);
  const [studyTab, setStudyTab] = useState(0);
  const [chapterIdx, setChapterIdx] = useState(0);
  const [cat, setCat] = useState<Discipline>("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % HERO_SCENES.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const activeHero = HERO_SCENES[heroIdx];
  const nextHero = HERO_SCENES[(heroIdx + 1) % HERO_SCENES.length];
  const prevHero = HERO_SCENES[(heroIdx - 1 + HERO_SCENES.length) % HERO_SCENES.length];

  const filteredWorks = GALLERY_WORKS.filter((w) => cat === "all" || w.cat === cat);
  const activeChapter = ZAHIAN_CHAPTERS[chapterIdx];
  const selectedTrack = WORKSHOP_AUDIENCE[wsLevelIdx];

  return (
    <div className="fekra-grid-bg relative min-h-screen overflow-x-hidden bg-[#090b2e] text-white selection:bg-[#4f63db] selection:text-white">
      {/* =====================================================================
          FLOATING GLASS NAVIGATION DOCK
         ===================================================================== */}
      <header className="sticky top-4 z-50 px-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/15 bg-[#0c0e38]/85 px-4 py-2.5 shadow-[0_16px_40px_rgba(4,5,24,0.6)] backdrop-blur-2xl sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/art/logo.jpg"
              alt="Fekra Premium"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-white/20 object-cover"
              priority
            />
            <div className="leading-tight">
              <span className="font-alexandria text-sm font-black tracking-tight text-white sm:text-base">
                فكرة بريميوم
              </span>
              <span className="block font-mono text-[10px] tracking-widest text-[#8da2fb]">
                FEKRA STUDIO
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 font-alexandria text-xs font-bold text-white/80 lg:flex">
            {[
              { href: "#courses", label: "الكورسات" },
              { href: "#workshop", label: "الورشة" },
              { href: "#instructor", label: "المحاضر" },
              { href: "#process", label: "مختبر الرسم" },
              { href: "#zahian", label: "مشروع زاهيان" },
              { href: "#gallery", label: "المعرض" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#courses"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-alexandria text-xs font-black text-[#11135c] shadow-md transition duration-300 hover:scale-[1.03] hover:bg-[#eef0ff] sm:px-5 sm:py-2.5"
          >
            <span>استكشف الكورسات</span>
            <span aria-hidden>←</span>
          </a>
        </div>
      </header>

      {/* =====================================================================
          HERO SECTION: CREATIVE SPLIT-STAGE + INTERACTIVE 3D ART DECK
         ===================================================================== */}
      <section
        id="top"
        className="fekra-hero-mesh relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 h-[520px] w-[520px] rounded-full border-[40px] border-white/[0.025]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-[640px] w-[640px] rounded-full border-[50px] border-white/[0.02]"
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* RIGHT COLUMN (6 Cols) */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 backdrop-blur-md"
              >
                <span className="h-2 w-2 animate-ping rounded-full bg-[#4ade80]" />
                <span className="font-alexandria text-xs font-bold text-white/90">
                  أكاديمية واستوديو فكرة بريميوم · الحجز مفتوح
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="mt-5"
              >
                <div
                  aria-hidden="true"
                  className="fekra-echo-stroke select-none font-bricolage text-3xl font-black uppercase tracking-tight sm:text-5xl"
                  dir="ltr"
                >
                  BACKGROUND DESIGN
                </div>

                <div className="mt-1 inline-block rounded-xl bg-[#111261] px-4 py-1.5 shadow-lg ring-1 ring-white/15">
                  <span className="fekra-text-3d font-alexandria text-2xl font-black sm:text-4xl">
                    تعلّم صناعة الـ Background
                  </span>
                </div>

                <h1 className="fekra-text-3d mt-2 font-alexandria text-3xl font-black leading-[1.18] sm:text-5xl">
                  والـ Concept Art
                  <span className="mt-1 block text-[#93b4ff]">والأنيميشن بطريقة أكاديمية</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
              >
                مش هتتعلم ترسم Background وبس—هتتعلم تفكر فيها، تفهم أساليب المخرجين، وتبني{" "}
                <strong>Visual Language</strong> خاصة بيك مع الفنان{" "}
                <strong className="font-alexandria text-white">ممدوح أحمد</strong> من خلال كورسات
                وورش أونلاين عملية تؤهلك لسوق العمل.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                <a
                  href="#courses"
                  className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 font-alexandria text-sm font-black text-[#11135c] shadow-[0_14px_34px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#eef0ff]"
                >
                  <span>تصفّح الكورسات والورش</span>
                  <span aria-hidden>↓</span>
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3.5 font-alexandria text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white/15"
                >
                  <span>مختبر الرسم التفاعلي</span>
                </a>
                <a
                  href={WA_WORKSHOP}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="استفسار سريع"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#25D366]/20 text-[#4ade80] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#25D366] hover:text-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </motion.div>

              {/* 3 Mini Metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.32 }}
                className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6"
              >
                <div>
                  <p className="font-alexandria text-xl font-black text-white sm:text-2xl">+6 سنوات</p>
                  <p className="text-xs text-white/65">خبرة في صناعة الأنيميشن</p>
                </div>
                <div>
                  <p className="font-alexandria text-xl font-black text-white sm:text-2xl">+150 عمل</p>
                  <p className="text-xs text-white/65">إعلانات ومسلسلات متحركة</p>
                </div>
                <div>
                  <p className="font-alexandria text-xl font-black text-[#93b4ff] sm:text-2xl">
                    3 برامج
                  </p>
                  <p className="text-xs text-white/65">كورسات وورش تفاعلية</p>
                </div>
              </motion.div>
            </div>

            {/* LEFT COLUMN (6 Cols): 3D Layered Artwork Deck */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-xl py-4">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 -top-2 bottom-6 -rotate-3 overflow-hidden rounded-3xl border border-white/10 bg-[#141763]/50 opacity-45 blur-[0.5px] transition-all duration-500"
                >
                  <Image src={prevHero.src} alt="" fill sizes="400px" className="object-cover" />
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 -bottom-2 top-6 rotate-3 overflow-hidden rounded-3xl border border-white/10 bg-[#141763]/50 opacity-45 blur-[0.5px] transition-all duration-500"
                >
                  <Image src={nextHero.src} alt="" fill sizes="400px" className="object-cover" />
                </div>

                <div className="fekra-glass relative overflow-hidden rounded-[28px] p-3 shadow-[0_28px_80px_rgba(5,6,30,0.7)]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#090b2e]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeHero.id}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative h-full w-full"
                      >
                        <Image
                          src={activeHero.src}
                          alt={activeHero.title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>

                    <div className="absolute left-3.5 top-3.5 rounded-full border border-white/15 bg-[#090b2e]/75 px-3 py-1 font-mono text-[10px] font-semibold text-white/90 backdrop-blur-md">
                      {activeHero.enTitle}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#080a2b]/95 via-[#080a2b]/50 to-transparent p-4 sm:p-5">
                      <div>
                        <span className="font-mono text-[11px] text-[#93b4ff]">
                          {activeHero.project}
                        </span>
                        <h2 className="font-alexandria text-lg font-bold text-white sm:text-xl">
                          {activeHero.title}
                        </h2>
                      </div>
                      <div className="flex gap-1 rounded-full border border-white/15 bg-black/30 p-1.5 backdrop-blur-md">
                        {activeHero.palette.map((hex) => (
                          <span
                            key={hex}
                            className="h-3.5 w-3.5 rounded-full border border-white/20"
                            style={{ backgroundColor: hex }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-5 gap-2">
                    {HERO_SCENES.map((scene, idx) => {
                      const active = idx === heroIdx;
                      return (
                        <button
                          key={scene.id}
                          type="button"
                          onClick={() => setHeroIdx(idx)}
                          aria-label={scene.title}
                          className={`group relative aspect-[16/10] overflow-hidden rounded-xl border transition-all duration-300 ${
                            active
                              ? "border-white ring-2 ring-white/40"
                              : "border-white/10 opacity-55 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={scene.src}
                            alt={scene.title}
                            fill
                            sizes="90px"
                            className="object-cover transition duration-300 group-hover:scale-105"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          INFINITE STUDIO MARQUEE RIBBON
         ===================================================================== */}
      <div
        aria-hidden="true"
        className="overflow-hidden border-y border-white/10 bg-[#0d1042] py-3.5"
        dir="ltr"
      >
        <div className="animate-marquee flex items-center gap-8">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-bricolage text-xs font-extrabold tracking-[0.2em] text-white/75 sm:text-sm">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================================
          SECTION 01 (NEW!): خانة الكورسات والبرامج التدريبية (COURSES HUB)
         ===================================================================== */}
      <section id="courses" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Reveal className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8da2fb]">
                01 / FEKRA ACADEMY COURSES
              </span>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="rounded-xl bg-[#111261] px-4 py-1.5 font-alexandria text-2xl font-black text-white shadow sm:text-4xl">
                  الكورسات والبرامج
                </span>
                <h2 className="fekra-text-3d font-alexandria text-3xl font-black sm:text-5xl">
                  المتــــــــــاحة حالياً
                </h2>
              </div>
            </div>
            <p className="max-w-md text-sm text-white/75">
              تعلّم بشكل أكاديمي وعملي يؤهلك لسوق عمل الأنيميشن مع تطبيق مباشر ومتابعة فردية.
            </p>
          </Reveal>

          {/* FEATURED COURSE 01: Background Design & Concept Art Course */}
          <Reveal delay={0.05} className="mt-12">
            <div className="overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-[#14186b] via-[#12165c] to-[#0c0e3d] p-6 shadow-[0_28px_80px_rgba(4,5,24,0.65)] sm:p-10">
              {/* Top Header Row of Featured Course */}
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="inline-flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#4ade80]/20 px-3.5 py-1 font-alexandria text-xs font-bold text-[#4ade80]">
                      ★ الكورس الأساسي الأول · متاح التسجيل
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/80">
                      ONLINE COURSE
                    </span>
                  </div>

                  <h3 className="mt-4 font-alexandria text-2xl font-black leading-snug text-white sm:text-4xl">
                    كورس صناعة الـ Background والـ Concept Art للأنيميشن
                  </h3>

                  <p className="mt-4 text-sm leading-loose text-white/85 sm:text-base">
                    عارف إن صناعة الـ <strong>Background</strong> من أهم أساسيات صناعة الـ{" "}
                    <strong>Animation</strong>؟ وكمان من المجالات المطلوبة جداً في سوق العمل! علشان
                    تتعلمها بشكل صح وبطريقة أكاديمية، الكورس ده هيخليك تتعلم مع{" "}
                    <strong>Instructor</strong> عنده خبرة عملية في مجال الأنيميشن، واشتغل في أعمال
                    زي <strong>طحالب</strong> و<strong>سبانخ</strong>، وشارك في تنفيذ مسلسلات
                    وإعلانات كتير.
                  </p>

                  <div className="mt-5 rounded-2xl border border-[#93b4ff]/25 bg-[#090b2e]/60 p-4">
                    <p className="font-alexandria text-sm font-bold text-[#93b4ff] sm:text-base">
                      🎬 «مش هتتعلم ترسم Background وبس، هتتعلم تفكر فيها وتفهم هي اتبنت إزاي وليه
                      بالشكل ده.»
                    </p>
                  </div>
                </div>

                {/* Course Visual Preview Card */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                    <Image
                      src="/art/giant.jpg"
                      alt="كورس صناعة الـ Background والـ Concept Art"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b2e]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 right-4 left-4 flex items-end justify-between">
                      <div>
                        <p className="font-mono text-[11px] font-bold text-[#93b4ff]">
                          INSTRUCTOR: MAMDOUH AHMED
                        </p>
                        <p className="font-alexandria text-sm font-bold text-white">
                          تأسيس أكاديمي + تطبيق عملي لسوق العمل
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* "هتتعلم معانا إيه؟ 👀" — 6 Equal-Height Cards */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="font-alexandria text-lg font-black text-white sm:text-xl">
                    هتتعلم معانا إيه في الكورس؟ 👀
                  </h4>
                  <span className="font-mono text-xs text-[#93b4ff]">6 CORE PILLARS</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {BG_COURSE_POINTS.map((pt) => (
                    <div
                      key={pt.num}
                      className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#090b2e]/55 p-5 transition duration-300 hover:border-white/25 hover:bg-[#090b2e]/80"
                    >
                      <div>
                        <span className="inline-block rounded-lg bg-white/10 px-2.5 py-1 font-mono text-xs font-bold text-[#93b4ff]">
                          {pt.num}
                        </span>
                        <h5 className="mt-3 font-alexandria text-base font-bold text-white">
                          {pt.title}
                        </h5>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/75 sm:text-sm">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Bar for Featured Course */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:px-6">
                  <div>
                    <p className="font-alexandria text-sm font-bold text-white">
                      جاهز تبدأ رحلتك في عالم الـ Background Design؟
                    </p>
                    <p className="text-xs text-white/70">
                      احجز مكانك واستفسر عن تفاصيل الدفعة الحالية والعرض المتاح
                    </p>
                  </div>

                  <a
                    href={waLink(
                      'أهلاً يا ممدوح، شفت كورس الـ "Background & Concept Art" على موقع فكرة بريميوم وعايز أعرف كل التفاصيل والعرض المتاح حالياً.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-alexandria text-xs font-black text-[#11135c] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#eef0ff] sm:text-sm"
                  >
                    <span>اشترك واسأل عن تفاصيل الكورس</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* SECOND ROW: 2 Equal-Height Cards (Toon Boom Course + Live VisDev Workshop) */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {ADDITIONAL_COURSES.map((course, idx) => (
              <Reveal key={course.id} delay={idx * 0.08} className="h-full">
                <div className="fekra-glass flex h-full flex-col justify-between overflow-hidden rounded-[28px] p-6 sm:p-8">
                  <div>
                    <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src={course.img}
                        alt={course.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <span className="absolute right-3 top-3 rounded-full bg-[#090b2e]/85 px-3.5 py-1 font-mono text-[11px] font-bold text-[#93b4ff] backdrop-blur-md">
                        {course.badge}
                      </span>
                    </div>

                    <h3 className="font-alexandria text-xl font-black text-white sm:text-2xl">
                      {course.title}
                    </h3>
                    <p className="font-mono text-xs text-white/55">{course.enTitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">{course.desc}</p>

                    <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs text-white/80">
                      {course.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span className="text-[#60a5fa]">✦</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={waLink(course.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-3.5 font-alexandria text-xs font-bold text-white transition duration-300 hover:bg-white hover:text-[#11135c] sm:text-sm"
                  >
                    <span>احجز مكانك واعرف التفاصيل</span>
                    <WhatsAppIcon className="h-4 w-4 text-[#4ade80]" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02: تفاصيل ورشة الـ Visual Language وتحديد المستوى
         ===================================================================== */}
      <section
        id="workshop"
        className="border-t border-white/10 bg-[#0c0f3d]/50 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Reveal className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8da2fb]">
                02 / INTERACTIVE WORKSHOP TRACKS
              </span>
              <h2 className="mt-2 font-alexandria text-3xl font-black text-white sm:text-5xl">
                مسارات ورشة الـ Visual Language
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/75">
              ورشة أونلاين ذات عدد محدود جداً للتركيز الفردي، مصممة لتناسب المبتدئ (بأساسيات
              المنظور واللون) والمتقدم (لتطوير مشروع بصري).
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* RIGHT (7 Cols): Interactive 4-Module Accordion */}
            <div className="space-y-3.5 lg:col-span-7">
              {WORKSHOP_MODULES.map((mod, idx) => {
                const isOpen = activeMod === idx;
                return (
                  <Reveal key={mod.num} delay={idx * 0.05}>
                    <div
                      onClick={() => setActiveMod(idx)}
                      className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
                        isOpen
                          ? "border-white/30 bg-gradient-to-l from-[#171c75]/90 to-[#1c3b8c]/70 shadow-xl"
                          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-black transition ${
                              isOpen
                                ? "bg-white text-[#11135c]"
                                : "bg-white/10 text-white/75"
                            }`}
                          >
                            {mod.num}
                          </span>
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#93b4ff]">
                              {mod.tag}
                            </span>
                            <h3 className="font-alexandria text-base font-bold text-white sm:text-lg">
                              {mod.title}
                            </h3>
                          </div>
                        </div>
                        <span
                          className={`text-lg transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-white" : "text-white/50"
                          }`}
                        >
                          ▾
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/85">
                              {mod.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}

              <Reveal delay={0.2}>
                <div className="fekra-glass mt-6 rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/art/mamdouh.jpg"
                      alt="ممدوح أحمد"
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full border border-white/25 object-cover object-top"
                    />
                    <div>
                      <p className="font-alexandria text-sm font-bold text-white">
                        رسالة ممدوح أحمد للمشتركين
                      </p>
                      <p className="font-mono text-[11px] text-[#93b4ff]">
                        1-on-1 Focus &amp; Mentorship
                      </p>
                    </div>
                  </div>
                  <p className="mt-3.5 text-sm leading-relaxed text-white/85">
                    «الورشة مستواها للمبتدئ العادي، يفضل يكون عنده أساسيات المنظور والألوان عشان
                    هندخل في مراحل أدڤانسد. وغالباً لو لقيت حد أدڤانسد أساساً، هنتكلم في إزاي نطور
                    مشروع بصري كويس، وإزاي نستكشف حتت جديدة في الاستايل أو الميديم اللي بيقدمه.
                    الورشة أونلاين والعدد محدود جداً عشان أعرف أركز مع كل واحد.»
                  </p>
                </div>
              </Reveal>
            </div>

            {/* LEFT (5 Cols): Interactive Track Selector Card */}
            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="fekra-glass overflow-hidden rounded-[28px] p-6 shadow-[0_24px_70px_rgba(4,5,25,0.6)] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#4ade80]/15 px-3 py-1 font-alexandria text-xs font-bold text-[#4ade80]">
                    ● التسجيل مفتوح
                  </span>
                  <span className="font-mono text-xs text-white/60">LIMITED SEATS</span>
                </div>

                <h3 className="mt-4 font-alexandria text-2xl font-black text-white">
                  اختر مستواك الحالي
                </h3>
                <p className="mt-1 text-xs text-white/70 sm:text-sm">
                  حدد المسار المناسب لك لمعاينة تفاصيله وحجز مقعدك:
                </p>

                <div className="mt-5 grid grid-cols-3 gap-1.5 rounded-2xl border border-white/10 bg-[#080a29]/80 p-1.5">
                  {["مبتدئ", "متوسط", "متقدم"].map((label, idx) => {
                    const active = wsLevelIdx === idx;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setWsLevelIdx(idx)}
                        className={`relative rounded-xl py-2.5 font-alexandria text-xs font-bold transition duration-200 ${
                          active ? "text-[#11135c]" : "text-white/70 hover:text-white"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="track-pill"
                            className="absolute inset-0 rounded-xl bg-white shadow"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{label}</span>
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTrack.tag}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                    className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#93b4ff]">
                      {selectedTrack.tag}
                    </span>
                    <h4 className="mt-1 font-alexandria text-base font-bold text-white">
                      {selectedTrack.level}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/80 sm:text-sm">
                      {selectedTrack.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <a
                  href={waLink(
                    `أهلاً يا ممدوح، أرغب في الانضمام لورشة الـ Background Design & Visual Language.\n• المسار: ${selectedTrack.level}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-alexandria text-sm font-black text-[#11135c] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#eef0ff]"
                >
                  <span>تأكيد المسار وحجز المقعد</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 03: «مين المُحاضر بتاعنا؟» (بصورة mamdouh.jpg وبدون أي فراغات)
         ===================================================================== */}
      <section
        id="instructor"
        className="border-y border-white/10 bg-gradient-to-b from-[#0d1147] via-[#152873] to-[#090b2e] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Reveal className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#93b4ff]">
                03 / THE INSTRUCTOR
              </span>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="rounded-xl bg-[#111261] px-4 py-1.5 font-alexandria text-2xl font-black text-white shadow sm:text-4xl">
                  مين المُحاضر
                </span>
                <h2 className="fekra-text-3d font-alexandria text-3xl font-black sm:text-5xl">
                  بتــــــــــاعنا ؟
                </h2>
              </div>
            </div>
            <p className="font-mono text-xs text-white/70 sm:text-sm">
              MAMDOUH AHMED · VISUAL DEVELOPMENT &amp; BACKGROUND ARTIST
            </p>
          </Reveal>

          {/* Top Unified Instructor Bio Card (Uses /art/mamdouh.jpg with zero empty gaps!) */}
          <Reveal delay={0.05} className="mt-10">
            <div className="fekra-glass overflow-hidden rounded-[32px] p-6 sm:p-10">
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                {/* Instructor Portrait: /art/mamdouh.jpg */}
                <div className="relative h-64 w-52 shrink-0 overflow-hidden rounded-3xl border-2 border-white/20 bg-[#090b2e] shadow-2xl sm:h-72 sm:w-60">
                  <Image
                    src="/art/mamdouh.jpg"
                    alt="الفنان ممدوح أحمد - Mamdouh Ahmed"
                    fill
                    sizes="240px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090b2e]/95 via-[#090b2e]/40 to-transparent p-3 text-center">
                    <span className="font-alexandria text-xs font-bold text-white">
                      ممدوح أحمد · Mamdouh Ahmed
                    </span>
                  </div>
                </div>

                {/* Bio + Tools + Stats */}
                <div className="flex-1 text-center md:text-right">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#93b4ff]">
                    VISUAL ARTIST · BACKGROUND DESIGNER · CONCEPT ARTIST
                  </span>
                  <h3 className="mt-2 font-alexandria text-2xl font-black text-white sm:text-3xl">
                    ممدوح أحمد — خبرة عملية في صناعة المسلسلات والأفلام المتحركة
                  </h3>
                  <p className="mt-3 text-sm leading-loose text-white/85 sm:text-base">
                    فنان بصري ومصمم خلفيات وكونسبت آرت خريج كلية الفنون الجميلة. يمتلك خبرة تمتد
                    لأكثر من ٦ سنوات في استوديوهات الرسوم المتحركة، شارك خلالها في التطوير البصري
                    وتصميم البيئات لعدد من أبرز مسلسلات الأنيميشن (مثل{" "}
                    <strong>طحالب</strong>، <strong>سبانخ</strong>، و<strong>جنازير</strong>) وأكثر
                    من ١٥٠ إعلاناً تجارياً.
                  </p>

                  {/* Software & Tools Pills */}
                  <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                    {TOOLS.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-1.5 font-mono text-xs font-medium text-white/90"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* 4 Balanced Stat Cards Row */}
                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-4">
                    {STATS.map((st) => (
                      <div
                        key={st.label}
                        className="rounded-2xl border border-white/10 bg-[#090b2e]/60 p-3.5 text-center md:text-right"
                      >
                        <p className="font-alexandria text-2xl font-black text-white">
                          {st.suffix}
                          {st.value}
                        </p>
                        <p className="mt-0.5 text-xs text-white/70">{st.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bottom Filmography Row: 5 Equal-Height Cards */}
          <Reveal delay={0.12} className="mt-6">
            <div className="fekra-glass rounded-[28px] p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <h4 className="font-alexandria text-lg font-bold text-white">
                  أبرز الأعمال والمسلسلات المشترك بها
                </h4>
                <span className="font-mono text-xs text-[#93b4ff]">SELECTED FILMOGRAPHY</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {EXPERIENCE.map((exp) => (
                  <div
                    key={exp.num}
                    className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#090b2e]/60 p-4 transition hover:border-white/25"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold text-[#93b4ff]">
                          {exp.num} · {exp.role}
                        </span>
                        <span className="font-mono text-[10px] text-white/50">{exp.year}</span>
                      </div>
                      <p className="mt-1.5 font-alexandria text-base font-black text-white">
                        {exp.name}
                      </p>
                    </div>
                    <p className="mt-2 font-mono text-[11px] text-white/65">{exp.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          SECTION 04: مختبر الـ Visual Language (Interactive Lab + Study Tabs)
         ===================================================================== */}
      <section id="process" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Reveal className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8da2fb]">
                04 / INTERACTIVE PROCESS LAB
              </span>
              <h2 className="mt-2 font-alexandria text-3xl font-black text-white sm:text-5xl">
                مختبر الخط واللون والـ Visual Language
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/75">
              اسحب المؤشر لمقارنة التأسيس الخطي والمنظور (Line Art) مع الإضاءة والسكريبت اللوني
              النهائي (Final Color).
            </p>
          </Reveal>

          <Reveal>
            <VisualLanguageLab />
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="fekra-glass overflow-hidden rounded-[28px] p-5 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <span className="font-mono text-xs text-[#93b4ff]">
                    COURSE &amp; WORKSHOP STUDIES · تطبيقات عملية
                  </span>
                  <h3 className="mt-1 font-alexandria text-xl font-black text-white sm:text-2xl">
                    كيف نحلل ونبني الإضاءة والكادر السردي؟
                  </h3>
                </div>

                <div className="flex rounded-2xl border border-white/10 bg-[#080a29]/80 p-1">
                  {STUDY_TABS.map((tab, idx) => {
                    const active = studyTab === idx;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setStudyTab(idx)}
                        className={`rounded-xl px-4 py-2 font-alexandria text-xs font-bold transition ${
                          active
                            ? "bg-white text-[#11135c] shadow"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {idx === 0 ? "١. دراسة الـ 4-Moods" : "٢. من الاسكتش للكادر"}
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={STUDY_TABS[studyTab].id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 grid items-center gap-8 lg:grid-cols-12"
                >
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src={STUDY_TABS[studyTab].src}
                        alt={STUDY_TABS[studyTab].title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] font-bold text-[#93b4ff]">
                      {STUDY_TABS[studyTab].badge}
                    </span>
                    <h4 className="mt-3 font-alexandria text-2xl font-black text-white">
                      {STUDY_TABS[studyTab].title}
                    </h4>
                    <p className="mt-3 text-sm leading-loose text-white/80 sm:text-base">
                      {STUDY_TABS[studyTab].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          SECTION 05: مشروع فيلم The Color of Zahian
         ===================================================================== */}
      <section
        id="zahian"
        className="border-y border-white/10 bg-[#0d1042]/70 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Reveal className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8da2fb]">
                05 / VISUAL DEVELOPMENT CASE STUDY
              </span>
              <h2 className="mt-2 font-alexandria text-3xl font-black text-white sm:text-5xl">
                تطوير مشروع بصري:{" "}
                <span className="font-serif italic font-normal text-[#93b4ff]">
                  The Color of Zahian
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/75">
              نموذج تطبيقي كامل من أعمال ممدوح أحمد لبناء عالم بصري لفيلم قصير عبر ٥ فصول مترابطة.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-10">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
              {ZAHIAN_CHAPTERS.map((ch, idx) => {
                const active = idx === chapterIdx;
                return (
                  <button
                    key={ch.num}
                    type="button"
                    onClick={() => setChapterIdx(idx)}
                    className={`rounded-2xl border p-3.5 text-right transition-all duration-300 ${
                      active
                        ? "border-white bg-white text-[#11135c] shadow-lg"
                        : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] font-bold ${
                        active ? "text-[#141275]" : "text-[#93b4ff]"
                      }`}
                    >
                      CHAPTER {ch.num}
                    </span>
                    <p className="mt-1 truncate font-alexandria text-xs font-bold sm:text-sm">
                      {ch.title}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="fekra-glass mt-6 overflow-hidden rounded-[28px] p-4 sm:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter.num}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="grid items-center gap-8 lg:grid-cols-12"
                >
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src={activeChapter.img}
                        alt={activeChapter.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <span className="font-mono text-xs font-bold text-[#93b4ff]">
                      {activeChapter.tag}
                    </span>
                    <h3 className="mt-2 font-alexandria text-2xl font-black text-white sm:text-3xl">
                      {activeChapter.title}
                    </h3>
                    <p className="font-mono text-xs text-white/55">{activeChapter.enTitle}</p>
                    <p className="mt-4 text-sm leading-loose text-white/85 sm:text-base">
                      {activeChapter.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setChapterIdx(
                            (chapterIdx - 1 + ZAHIAN_CHAPTERS.length) % ZAHIAN_CHAPTERS.length
                          )
                        }
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-alexandria text-xs font-bold text-white transition hover:bg-white/15"
                      >
                        → الفصل السابق
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setChapterIdx((chapterIdx + 1) % ZAHIAN_CHAPTERS.length)
                        }
                        className="rounded-xl bg-white px-4 py-2 font-alexandria text-xs font-bold text-[#11135c] transition hover:bg-[#eef0ff]"
                      >
                        الفصل التالي ←
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          SECTION 06: معرض الأعمال (UNIFORM 3-COLUMN GRID — بدون أي فراغات!)
         ===================================================================== */}
      <section id="gallery" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Reveal className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8da2fb]">
                06 / CURATED PORTFOLIO ARCHIVE
              </span>
              <h2 className="mt-2 font-alexandria text-3xl font-black text-white sm:text-5xl">
                معرض الأعمال المختارة
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5 rounded-2xl border border-white/10 bg-[#0d103d]/80 p-1.5">
              {DISCIPLINES.map((d) => {
                const active = cat === d.id;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setCat(d.id)}
                    className={`relative rounded-xl px-4 py-2 font-alexandria text-xs font-bold transition ${
                      active ? "text-[#11135c]" : "text-white/75 hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="gallery-filter-pill"
                        className="absolute inset-0 rounded-xl bg-white shadow"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">
                      {d.label}{" "}
                      <span className="font-mono text-[10px] opacity-70">
                        (
                        {d.id === "all"
                          ? GALLERY_WORKS.length
                          : GALLERY_WORKS.filter((w) => w.cat === d.id).length}
                        )
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Uniform 3-Column Grid: Every card has identical aspect-[16/10] height & zero empty space */}
          <motion.div
            layout
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work) => {
                const globalIdx = GALLERY_WORKS.findIndex((w) => w.id === work.id);
                return (
                  <motion.article
                    layout
                    key={work.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.32 }}
                    onClick={() => setLightboxIdx(globalIdx)}
                    className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-[24px] border border-white/10 bg-[#0d103d] shadow-[0_16px_40px_rgba(4,5,24,0.45)]"
                  >
                    <Image
                      src={work.src}
                      alt={work.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#080929]/95 via-[#080929]/20 to-transparent opacity-85 transition duration-300 group-hover:opacity-100" />

                    <div className="absolute left-3.5 top-3.5 flex gap-1 rounded-full border border-white/15 bg-black/35 p-1.5 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                      {work.palette.map((hex) => (
                        <span
                          key={hex}
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#93b4ff]">
                          {work.tag}
                        </span>
                        <h3 className="font-alexandria text-base font-bold text-white">
                          {work.title}
                        </h3>
                      </div>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs text-white backdrop-blur-md transition group-hover:bg-white group-hover:text-[#11135c]">
                        ↗
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER: CLEAN ICON LINKS & DEVELOPER CREDIT
         ===================================================================== */}
      <footer className="border-t border-white/10 bg-[#070824] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="flex items-center gap-3.5">
              <Image
                src="/art/logo.jpg"
                alt="Fekra Premium"
                width={46}
                height={46}
                className="h-11 w-11 rounded-2xl border border-white/15 object-cover"
              />
              <div>
                <p className="font-alexandria text-base font-black text-white">
                  فكرة بريميوم · Fekra Premium
                </p>
                <p className="text-xs text-white/60">
                  للفنان ممدوح أحمد · Background Design &amp; Concept Art
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href={WA_WORKSHOP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:bg-white hover:text-[#11135c]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.39A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.39 2.13.67.67 1.34 1.09 2.13 1.39.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.39 5.88 5.88 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.39-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                </svg>
              </a>
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:bg-white hover:text-[#11135c]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.326V1.326C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:bg-white hover:text-[#11135c]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
            <p>© {new Date().getFullYear()} Fekra Premium — جميع الحقوق محفوظة للفنان ممدوح أحمد.</p>
            <p className="flex items-center gap-1.5">
              <span>تصميم وتطوير بإهداء خاص من</span>
              <a
                href={LINKS.credit}
                target="_blank"
                rel="noopener noreferrer"
                className="font-alexandria font-bold text-white underline decoration-white/30 underline-offset-4 transition hover:text-[#93b4ff]"
              >
                Ahmad Ashraf Galal
              </a>
            </p>
          </div>
        </div>
      </footer>

      <ArtworkLightbox
        items={GALLERY_WORKS}
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onNavigate={setLightboxIdx}
      />
      <FloatingWhatsApp />
    </div>
  );
}
