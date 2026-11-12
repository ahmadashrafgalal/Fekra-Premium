export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fekra-premium.vercel.app";

export const WA_NUMBER = "201014422530";
export const waLink = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA_GENERAL = waLink(
  "أهلاً أستاذ ممدوح، شفت بورتفوليو Fekra Premium وعايز أتواصل معاك بخصوص مشروع أنيميشن / كونسبت آرت."
);
export const WA_WORKSHOP = waLink(
  "أهلاً أستاذ ممدوح، عايز أحجز مكاني في ورشة الـ Background Design & Concept Art من موقع Fekra Premium. ممكن تفاصيل المواعيد والحجز؟"
);

export const LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61595127995389",
  instagram: "https://www.instagram.com/fekra.premium/",
  mamdouhInstagram: "https://instagram.com/mamdouh_studio",
  linkedin: "https://www.linkedin.com/in/mamdouh-ahmed-01667b409",
  upwork: "https://www.upwork.com/freelancers/~016719d5d3c301014f",
  email: "mailto:mamdouh24681@gmail.com",
  credit: "https://www.linkedin.com/in/ahmadashrafgalal/",
};

export type HeroScene = {
  id: string;
  frame: string;
  title: string;
  enTitle: string;
  project: string;
  mood: string;
  src: string;
  palette: string[];
  caption: string;
};

export const HERO_SCENES: HeroScene[] = [
  {
    id: "spinach-sunset",
    frame: "FRM // 01",
    title: "لماذا نحن هنا؟",
    enTitle: "Why Are We Here?",
    project: "مسلسل سبانخ — Spinach Series",
    mood: "Golden Hour · Satire Warmth",
    src: "/art/portfolio/background_background-06.webp",
    palette: ["#3B1E10", "#8C4A1B", "#D9822B", "#F5B841", "#FFF1A8"],
    caption: "تكوين سينمائي دافئ يدمج الكوميديا الساخرة مع إضاءة الغروب الذهبية وتفاصيل النحت الخشبي.",
  },
  {
    id: "zahian-rebirth",
    frame: "FRM // 02",
    title: "إشراقة عالم زاهيان",
    enTitle: "The Rebirth of Zahian",
    project: "فيلم The Color of Zahian",
    mood: "Sunlight Pastoral · Post-Industrial",
    src: "/art/portfolio/concept-art_concept-art-62.webp",
    palette: ["#2E3522", "#6A7835", "#C89B2B", "#F3D36B", "#CBE3EE"],
    caption: "عندما يعود اللون إلى العالم الصناعي: تباين الأمل والحياة فوق بقايا الآلة العملاقة.",
  },
  {
    id: "sleeping-giant",
    frame: "FRM // 03",
    title: "العملاق النائم",
    enTitle: "The Sleeping Colossus",
    project: "Concept Art — Dark Fantasy",
    mood: "Chiaroscuro · Scale Contrast",
    src: "/art/giant.jpg",
    palette: ["#09131C", "#162C3D", "#3D5564", "#C27D2C", "#F4B950"],
    caption: "استخدام المقياس (Scale) وتوجيه الإضاءة الصفراء لخلق رهبة درامية بين البطل الصغير والعملاق.",
  },
  {
    id: "philosopher-night",
    frame: "FRM // 04",
    title: "تمثال الفيلسوف",
    enTitle: "The Thinking Marble",
    project: "Background & Color Script",
    mood: "Cosmic Dusk · Stylized Architecture",
    src: "/art/portfolio/background_background-08.webp",
    palette: ["#2A192E", "#5C385E", "#9C6184", "#E28B97", "#FBE3E8"],
    caption: "معالجة معمارية بأسلوب كرتوني مميز مع تدرجات سماء ليلية بنفسجية ووردية تبرز لمعان الرخام.",
  },
  {
    id: "desert-knight",
    frame: "FRM // 05",
    title: "فارس المآذن",
    enTitle: "The Desert Vanguard",
    project: "Personal Concept Painting",
    mood: "Painterly Brushwork · Epic",
    src: "/art/portfolio/personal-projects_personal-projects-49.webp",
    palette: ["#131624", "#3E2623", "#9A4A32", "#D98E54", "#F7E7CE"],
    caption: "ضربات فرشاة حرة وجريئة (Painterly Style) تركز على حركة الفرس والضوء الخلفي الدرامي.",
  },
];

export type LabPair = {
  id: string;
  title: string;
  enTitle: string;
  subtitle: string;
  before: string;
  after: string;
  lesson: string;
  palette: string[];
};

export const LAB_PAIRS: LabPair[] = [
  {
    id: "statue",
    title: "تمثال الفيلسوف — من الخط إلى المود اللوني",
    enTitle: "01 / Line Art to Cosmic Dusk",
    subtitle: "كيف تحول الرسم الخطي المعماري إلى مشهد ينبض بالإضاءة البنفسجية الدافئة",
    before: "/art/portfolio/background_background-09.webp",
    after: "/art/portfolio/background_background-08.webp",
    lesson: "في الورشة نتعلم إزاي نوزع القيم اللونية (Values) ونفصل المستويات (Foreground / Midground / Background) بالإضاءة.",
    palette: ["#28182C", "#653D68", "#B26B8A", "#F0A4A4", "#FFF0F5"],
  },
  {
    id: "train",
    title: "قطار الغابة — العمق والضوء الداخلي",
    enTitle: "02 / Interior Perspective & Daylight",
    subtitle: "بناء منظور داخلي متقن ثم توظيف ضوء الشبابيك لفصل الكراسي عن الغابة الخارجية",
    before: "/art/portfolio/background_background-11.webp",
    after: "/art/portfolio/background_background-10.webp",
    lesson: "تلاحظ هنا إزاي الألوان الدافية للكراسي (أحمر وتيل) بتعمل تباين مريح مع أخضر الغابة الساطع بره الشباك.",
    palette: ["#152A38", "#2B5B6C", "#9E2A22", "#A9C25D", "#E2F7D2"],
  },
  {
    id: "forest",
    title: "ضفاف الغابة — طبقات الطبيعة والعمق الجوي",
    enTitle: "03 / Atmospheric Depth in Nature",
    subtitle: "تحويل تفاصيل النباتات والأشجار الخطية إلى غابة غنية بظلالها وأشعة الشمس المتسللة",
    before: "/art/portfolio/background_background-15.webp",
    after: "/art/portfolio/background_background-14.webp",
    lesson: "التحكم في تشبع اللون (Saturation) بين عمق الغابة المظلم والمقدمة المضيئة بيخلق إحساس فوري بالعمق.",
    palette: ["#142B1E", "#2D5936", "#58A65C", "#C5E86C", "#7CE0D3"],
  },
];

export type Discipline = "all" | "backgrounds" | "concept" | "characters" | "personal";

export const DISCIPLINES: { id: Discipline; label: string; en: string }[] = [
  { id: "all", label: "كل الأعمال", en: "All Works" },
  { id: "backgrounds", label: "خلفيات أنيميشن", en: "Backgrounds" },
  { id: "concept", label: "كونسبت وبناء عوالم", en: "Concept Art" },
  { id: "characters", label: "تصميم شخصيات", en: "Characters" },
  { id: "personal", label: "دراسات إضاءة ومشاريع", en: "Lighting & Studies" },
];

export type ArtworkItem = {
  id: string;
  src: string;
  title: string;
  enTitle: string;
  cat: Exclude<Discipline, "all">;
  tag: string;
  span?: "wide" | "tall" | "hero" | "normal";
  palette: string[];
  desc: string;
};

export const GALLERY_WORKS: ArtworkItem[] = [
  {
    id: "bg-spinach",
    src: "/art/portfolio/background_background-06.webp",
    title: "لماذا نحن هنا؟ — مسلسل سبانخ",
    enTitle: "Spinach — Sunset Totems",
    cat: "backgrounds",
    tag: "Background Design",
    span: "hero",
    palette: ["#3B1E10", "#9B4F19", "#E59329", "#F7C948"],
    desc: "خلفية رئيسية من مسلسل سبانخ تجمع بين التكوين القصصي وإضاءة الغروب الذهبية.",
  },
  {
    id: "ca-zahian-hill",
    src: "/art/portfolio/concept-art_concept-art-62.webp",
    title: "تطوير المشاهد — ربيع زاهيان",
    enTitle: "Scenes Development — Zahian",
    cat: "concept",
    tag: "Visual Development",
    span: "wide",
    palette: ["#3B4323", "#887A28", "#DCA832", "#9CC2D5"],
    desc: "كونسبت آرت لتطور العالم البصري بعد عودة الألوان والحياة للطبيعة.",
  },
  {
    id: "pp-lighting-bust",
    src: "/art/portfolio/personal-projects_personal-projects-68.webp",
    title: "دراسة الإضاءة والمود اللوني (٤ حالات)",
    enTitle: "4-Mood Lighting & Color Script Study",
    cat: "personal",
    tag: "Color & Light Study",
    span: "normal",
    palette: ["#6E78B8", "#D98A4E", "#8A3333", "#1A1B28"],
    desc: "تطبيق عملي لكيفية تغيير الإحساس الدرامي لنفس المجسم بتغيير مصدر ولون الإضاءة فقط.",
  },
  {
    id: "bg-train",
    src: "/art/portfolio/background_background-10.webp",
    title: "رحلة القطار عبر الغابة",
    enTitle: "Forest Express Interior",
    cat: "backgrounds",
    tag: "Interior Background",
    span: "normal",
    palette: ["#1C3E4F", "#A83328", "#9EC254", "#D8F2CE"],
    desc: "تصميم داخلي لعربة قطار مع توظيف الإضاءة الطبيعية القادمة من النوافذ.",
  },
  {
    id: "ca-giant",
    src: "/art/giant.jpg",
    title: "العملاق النائم في الظلال",
    enTitle: "The Sleeping Giant",
    cat: "concept",
    tag: "Dark Fantasy Concept",
    span: "wide",
    palette: ["#0D1821", "#243B4A", "#C47D2B", "#F2B84B"],
    desc: "مشهد درامي يبرز التناقض في الحجم والكتلة بين الإنسان والوحش العملاق.",
  },
  {
    id: "cd-zahian-lineup",
    src: "/art/zahian-characters.webp",
    title: "تطور لون الشخصية — زاهيان",
    enTitle: "Zahian Character Color Progression",
    cat: "characters",
    tag: "Character Design",
    span: "wide",
    palette: ["#757166", "#4BA3B3", "#F5B82E", "#D9532F"],
    desc: "تصميم سيلويت وألوان الشخصيات ليعكس مقدار الحياة واللون المتبقي بداخل كل روح.",
  },
  {
    id: "bg-statue",
    src: "/art/portfolio/background_background-08.webp",
    title: "تمثال الفيلسوف والأعمدة",
    enTitle: "The Philosopher's Courtyard",
    cat: "backgrounds",
    tag: "Stylized Background",
    span: "normal",
    palette: ["#321E36", "#7A497A", "#DE8695", "#F9D6DC"],
    desc: "خلفية كرتونية تمزج العمارة الكلاسيكية مع باليت ألوان مسائية حالمة.",
  },
  {
    id: "pp-storyteller",
    src: "/art/portfolio/personal-projects_personal-projects-48.webp",
    title: "الحكواتي وخيال الظل",
    enTitle: "The Firelight Storyteller",
    cat: "personal",
    tag: "Narrative Illustration",
    span: "normal",
    palette: ["#2B1B18", "#59485C", "#B85538", "#F7A63B"],
    desc: "لوحة قصصية تجسد سحر الحكي الشعبي حول النار وانعكاس الظلال الأسطورية على الجدار.",
  },
  {
    id: "bg-forest",
    src: "/art/portfolio/background_background-14.webp",
    title: "ضفاف الغابة المضيئة",
    enTitle: "Sunlit Forest Clearing",
    cat: "backgrounds",
    tag: "Environment Art",
    span: "normal",
    palette: ["#193624", "#3E7D46", "#BCE368", "#6ED4C8"],
    desc: "بناء طبقات متعددة من الأشجار والصخور والمياه بأسلوب أنيميشن غني بالتفاصيل.",
  },
  {
    id: "ca-zahian-drain",
    src: "/art/portfolio/concept-art_concept-art-30.webp",
    title: "استنزاف اللون — التل الرمادي",
    enTitle: "Color Extraction Monolith",
    cat: "concept",
    tag: "Keyframe Concept",
    span: "wide",
    palette: ["#2B2B2B", "#7A7A7A", "#4CC9C0", "#D8D8D8"],
    desc: "كادر محوري يوضح العالم الرمادي الميت بينما يُسحب اللون الفيروزي الأخير من الجسد.",
  },
  {
    id: "pp-knight",
    src: "/art/portfolio/personal-projects_personal-projects-49.webp",
    title: "فارس الشرق",
    enTitle: "Eastern Rider Concept",
    cat: "personal",
    tag: "Digital Painting",
    span: "normal",
    palette: ["#171A26", "#6E3528", "#C97A4B", "#F5E4CA"],
    desc: "لوحة فنية بضربات فرشاة تعبيرية تركز على التكوين الحركي والإضاءة الخلفية الساطعة.",
  },
  {
    id: "bg-living-room",
    src: "/art/portfolio/background_background-12.webp",
    title: "غرفة المعيشة الدافئة",
    enTitle: "Sunbeams in the Parlor",
    cat: "backgrounds",
    tag: "Interior Design",
    span: "normal",
    palette: ["#544B38", "#B8523B", "#C7A652", "#F2D580"],
    desc: "تصميم داخلي هادئ يبرز انعكاس أشعة الشمس على الأرضية وتوزيع الأثاث الكلاسيكي.",
  },
  {
    id: "cd-expressions",
    src: "/art/portfolio/character-design_character-design-35.webp",
    title: "تعبيرات الوجوه وتكوين الشخصيات",
    enTitle: "Character Expression & Head Studies",
    cat: "characters",
    tag: "Character Sheet",
    span: "normal",
    palette: ["#9B7B70", "#D19D8F", "#E6B84C", "#2A2A2A"],
    desc: "دراسات متنوعة لملامح الوجوه والانفعالات وبناء الكتل الهندسية للشخصيات.",
  },
  {
    id: "ca-dock-sunset",
    src: "/art/portfolio/concept-art_concept-art-64.webp",
    title: "المرسى عند الغروب",
    enTitle: "The Harbor Departure",
    cat: "concept",
    tag: "Cinematic Keyframe",
    span: "normal",
    palette: ["#1D1F33", "#4F3B52", "#B5634B", "#F5B16D"],
    desc: "تكوين سينمائي بزاوية كاميرا درامية تجمع بين العمق العاطفي للشخصية في المقدمة والسفينة في الخلفية.",
  },
  {
    id: "bg-swamp",
    src: "/art/portfolio/background_background-07.webp",
    title: "المستنقع والسحب العملاقة",
    enTitle: "Emerald Marshlands",
    cat: "backgrounds",
    tag: "Landscape Art",
    span: "normal",
    palette: ["#1F2617", "#485935", "#7CC476", "#C8F7D2"],
    desc: "معالجة جوية (Atmospheric Perspective) تمنح السحب والبرك الخضراء إحساساً بالاتساع.",
  },
  {
    id: "pp-wolf",
    src: "/art/portfolio/personal-projects_personal-projects-50.webp",
    title: "ذئب الليل — لقطة كاميرا مراقبة",
    enTitle: "Night Predator — Trail Cam Concept",
    cat: "personal",
    tag: "Mood & Texture",
    span: "normal",
    palette: ["#0D1412", "#263324", "#5C4738", "#E07A2E"],
    desc: "فكرة مبتكرة تحاكي إضاءة كاميرات المراقبة الليلية مع لمعة العين البرتقالية وسط الظلام.",
  },
  {
    id: "bg-volcano-desert",
    src: "/art/portfolio/background_background-13.webp",
    title: "صحراء البركان السحري",
    enTitle: "Starlit Volcanic Dunes",
    cat: "backgrounds",
    tag: "Panoramic Background",
    span: "wide",
    palette: ["#3B231E", "#8C4A32", "#E8B982", "#F7A8B8"],
    desc: "خلفية بانورامية واسعة بسماء وردية مرصعة بالنجوم وتكوينات صخرية بركانية.",
  },
  {
    id: "cd-mustache-villain",
    src: "/art/portfolio/personal-projects_personal-projects-51.webp",
    title: "تصميم شخصية الفتوة / الحارس",
    enTitle: "Stylized Villain Character Sheet",
    cat: "characters",
    tag: "Character Development",
    span: "normal",
    palette: ["#1B263B", "#6B532C", "#B88B4A", "#F5D130"],
    desc: "بناء شخصية مصرية/شرقية بملامح حادة وابتسامة مميزة من الاسكتش إلى التلوين النهائي.",
  },
  {
    id: "ca-lighthouse-ark",
    src: "/art/portfolio/concept-art_concept-art-63.webp",
    title: "المنارة والسفينة العملاقة",
    enTitle: "The Lighthouse & The Ark",
    cat: "concept",
    tag: "Monochrome Concept",
    span: "normal",
    palette: ["#121212", "#3D3D3D", "#8C8C8C", "#F2F2F2"],
    desc: "مشهد أبيض وأسود يعتمد بالكامل على التباين القوي للضوء والظل (Value Structure).",
  },
  {
    id: "pp-chase-process",
    src: "/art/portfolio/personal-projects_personal-projects-65.webp",
    title: "من الستوري بورد إلى اللوحة النهائية",
    enTitle: "Storyboard Layout to Final Keyframe",
    cat: "personal",
    tag: "Production Process",
    span: "normal",
    palette: ["#2A231E", "#5E4B3E", "#8C735B", "#D9C3B0"],
    desc: "مراحل تطور مشهد مطاردة بزاوية كاميرا مائلة (Dutch Angle) من الاسكتش السريع إلى الإضاءة النهائية.",
  },
  {
    id: "ca-machine-eye",
    src: "/art/portfolio/concept-art_concept-art-29.webp",
    title: "عيون المصنع الميكانيكي",
    enTitle: "The Watching Factory Core",
    cat: "concept",
    tag: "Dieselpunk Concept",
    span: "normal",
    palette: ["#0F0F0F", "#363636", "#787878", "#E0E0E0"],
    desc: "تصميم بيئة صناعية سريالية تدمج العيون الحية داخل الأنابيب والتروس المعدنية.",
  },
  {
    id: "cd-hyena-warrior",
    src: "/art/portfolio/personal-projects_personal-projects-67.webp",
    title: "دراسة تشريح وحركة — المحارب الهجين",
    enTitle: "Creature & Anatomy Sketch Study",
    cat: "characters",
    tag: "Creature Sketch",
    span: "normal",
    palette: ["#2A3642", "#6E5A34", "#B89E5A", "#F2EFE9"],
    desc: "اسكتشات تشريحية حية بالقلم الرصاص واللون الذهبي لدراسة الكتلة العضلية والتعبيرات الشرسة.",
  },
];

export const ZAHIAN_CHAPTERS = [
  {
    num: "01",
    tag: "WORLD BUILDING // بناء العالم",
    title: "عالم يتغذى على اللون",
    enTitle: "A World That Runs on Color",
    desc: "تدور أحداث الفيلم في عالم صناعي متهالك يعتمد على 'اللون' كمصدر وحيد للحياة. آلات عملاقة وأنابيب معقدة تحكم النظام عن طريق سحب الألوان من السكان؛ ليبدأ الأبطال ككائنات مشرقة مليئة بالدفء، ثم تبهت ألوانهم تدريجياً كلما ارتبطوا بالنظام حتى يتحولوا إلى رمادي صامت.",
    img: "/art/zahian-world.webp",
  },
  {
    num: "02",
    tag: "INDUSTRIAL CORE // قلب المصنع",
    title: "المصنع وآلة سحب الألوان",
    enTitle: "The Industrial Core",
    desc: "بيئة ديزل-بانك (Dieselpunk) قاسية من الحديد والأنابيب الضخمة حيث يتم حصاد الألوان وتخزينها. تم تصميم الآلات بملامح شبه حية تتنفس وتتمدد مع كل قطرة لون تمتصها من العالم.",
    img: "/art/zahian-factory.webp",
  },
  {
    num: "03",
    tag: "PRIVATE SPACE // الغرفة والمعيشة",
    title: "حين تخترق الآلة تفاصيل الحياة",
    enTitle: "Where Private Life Meets the Machine",
    desc: "حتى غرفة زاهيان وأصدقائه الصغيرة لم تسلم من النظام؛ جدران متصدعة وأنابيب معدنية عملاقة تخترق سقف الغرفة لتذكرهم دائماً بأن المصنع يراقب ويسيطر على أهدأ لحظاتهم.",
    img: "/art/zahian-room.webp",
  },
  {
    num: "04",
    tag: "CHARACTER DESIGN // الشخصيات",
    title: "أرواح مشرقة.. وضوء يخفت",
    enTitle: "Vibrant Souls, Fading Light",
    desc: "تصميم شخصيات مستوحى من مدرسة Cartoon Saloon يعتمد على السيلويت التعبيري والرمزية البصرية: تدرج الشخصيات من الأصفر المشع (زاهيان) إلى التركواز المنهك ثم الرمادي المنحني تحت ثقل المطرقة.",
    img: "/art/zahian-characters.webp",
  },
  {
    num: "05",
    tag: "CLIMAX & REBIRTH // التضحية والحياة",
    title: "المنشور الزجاجي وعودة الحياة",
    enTitle: "Sacrifice & Return of Color",
    desc: "من خلال التضحية، ينتقل ضوء زاهيان المتبقي عبر المنشور الزجاجي ليغمر العالم من جديد، فتعود المروج الذهبية وتنبت الطبيعة فوق حطام الآلة.",
    img: "/art/portfolio/concept-art_concept-art-62.webp",
  },
];

export const STATS = [
  { value: 6, suffix: "+", label: "سنوات خبرة احترافية", en: "Years Experience" },
  { value: 150, suffix: "+", label: "إعلان أنيميشن تجاري", en: "Commercial Ads" },
  { value: 6, suffix: "", label: "مسلسلات أنيميشن", en: "Animated Series" },
  { value: 4, suffix: "", label: "تخصصات بصرية متكاملة", en: "Core Disciplines" },
];

export const TOOLS = [
  "Adobe Photoshop",
  "Toon Boom Harmony",
  "Procreate",
  "Clip Studio Paint",
  "Blender 3D",
  "Autodesk Maya",
  "Moho",
  "Adobe Animate",
  "After Effects",
];

export const SKILLS = [
  "Background Design",
  "Concept Art",
  "Visual Development",
  "Character Design",
  "Storyboard",
  "Color Scripting",
  "Digital Painting",
  "Lighting & Mood",
];

export const EXPERIENCE = [
  {
    num: "01",
    name: "Tahaleeb (طحالب)",
    role: "مسلسل أنيميشن",
    detail: "Background Artist · Concept Artist",
    year: "Series Production",
  },
  {
    num: "02",
    name: "Spinach (سبانخ)",
    role: "مسلسل أنيميشن",
    detail: "Background Artist · Concept Artist",
    year: "Series Production",
  },
  {
    num: "03",
    name: "Ganazer (جنازير)",
    role: "مسلسل أنيميشن",
    detail: "Background Artist · Concept Artist",
    year: "Series Production",
  },
  {
    num: "04",
    name: "Our Master Prophet Mohamed ﷺ",
    role: "مسلسل أنيميشن",
    detail: "Director · Art Director · Storyboard · Background · Character Designer",
    year: "Art Direction",
  },
  {
    num: "05",
    name: "Tahaleeb Studio Commercials",
    role: "+150 مشروع إعلاني",
    detail: "Multi-discipline Visual Development",
    year: "Commercials",
  },
];

export const WORKSHOP_MODULES = [
  {
    num: "01",
    tag: "FOUNDATION",
    title: "أساسيات الـ Background Design والمنظور",
    desc: "إزاي نبني كادر سليم من الصفر: قواعد المنظور، توزيع الكتل (Composition)، وتوجيه عين المشاهد جوه المشهد.",
  },
  {
    num: "02",
    tag: "CONCEPT & MOOD",
    title: "الـ Concept Art وصناعة الإضاءة والمود",
    desc: "تحويل الفكرة المجردة إلى عالم محسوس عن طريق القيم اللونية (Values)، ودراسة مصادر الضوء والظل لخدمة القصة.",
  },
  {
    num: "03",
    tag: "VISUAL LANGUAGE",
    title: "تكوين Visual Language خاصة وتحليل الاستايلات",
    desc: "الجزء الأهم في الورشة: إزاي نحلل الاستايلات العالمية المختلفة، نفكك عناصرها، ونبني لغة بصرية وبصمة خاصة بكل فنان.",
  },
  {
    num: "04",
    tag: "ADVANCED TRACK",
    title: "تطوير مشروع بصري كامل (للمتقدمين)",
    desc: "للمستويات المتقدمة: إزاي نطور بروجكت بصري متكامل للأنيميشن ونستكشف مناطق جديدة في الاستايل أو الميديم اللي بتقدمه.",
  },
];

export const FEKRA_PILLARS = [
  {
    num: "01",
    badge: "متاح الحجز الآن",
    title: "ورش عمل وتدريب أونلاين",
    enTitle: "Live Online Workshops & Mentorship",
    desc: "ورش تفاعلية لايف بأعداد محدودة جداً للتركيز الفردي مع كل مشترك، من تأسيس الـ Background Design والـ Concept Art وحتى بناء Visual Language خاصة بك.",
    ctaText: "احجز مقعدك في الورشة",
    ctaHref: WA_WORKSHOP,
    isPrimary: true,
  },
  {
    num: "02",
    badge: "للمتقدمين وصنّاع الأفلام",
    title: "تطوير المشاريع والـ Visual Development",
    enTitle: "Project VisDev & Style Exploration",
    desc: "جلسات إرشاد فني وتطوير بصري للمستويات المتقدمة لبناء عالم بصري متكامل (Worldbuilding & Color Script) واستكشاف مناطق جديدة في الاستايل أو الميديم.",
    ctaText: "ناقش تطوير مشروعك",
    ctaHref: waLink(
      "أهلاً أستاذ ممدوح، عندي مشروع بصري / أنيميشن وحابب أتواصل معاك لتطويره من خلال Fekra Premium."
    ),
    isPrimary: false,
  },
  {
    num: "03",
    badge: "للاستوديوهات والإنتاج",
    title: "تنفيذ الخلفيات والكونسبت آرت",
    enTitle: "Animation Studio Production & Commissions",
    desc: "تصميم وتنفيذ خلفيات الأنيميشن 2D، الكونسبت آرت، وتصميم الشخصيات للأفلام القصيرة، المسلسلات الكرتونية، والإعلانات التجارية بخبرة +150 عمل.",
    ctaText: "اطلب عرض سعر لمشروعك",
    ctaHref: WA_GENERAL,
    isPrimary: false,
  },
];

export const WORKSHOP_AUDIENCE = [
  {
    level: "المستوى المبتدئ (بأساسيات)",
    tag: "FOUNDATION TO ADVANCED",
    desc: "مناسب للمبتدئ العادي، ويفضل يكون عنده أساسيات المنظور والألوان عشان هندخل تدريجياً في مراحل أدڤانسد (Advanced).",
  },
  {
    level: "صناعة الاستايل والـ Visual Language",
    tag: "STYLE & ANALYSIS",
    desc: "هنناقش في جزء كبير إزاي نكوّن الاستايلات ونعمل Visual Language مخصوصة لينا، وإزاي نحلل الاستايلات المختلفة ونشتغل صح.",
  },
  {
    level: "المستوى المتقدم (Advanced)",
    tag: "PROJECT DEVELOPMENT",
    desc: "لو مستواك أدڤانسد أساساً، هنتكلم في إزاي نطوّر مشروع بصري كويس، وإزاي نستكشف حتت جديدة في الاستايل أو الميديم اللي بتقدمه.",
  },
];

export const BG_COURSE_POINTS = [
  {
    num: "01",
    title: "يعني إيه Concept وإيه أساسياته؟",
    desc: "فهم جوهر الكونسبت آرت وكيف نترجم الفكرة المكتوبة إلى عالم بصري واضح ومقنع.",
  },
  {
    num: "02",
    title: "إيه الأسس والقواعد لتنفيذ الـ Background؟",
    desc: "دراسة القواعد الأكاديمية والعملية لبناء خلفيات أنيميشن سليمة في المنظور والكتل والإضاءة.",
  },
  {
    num: "03",
    title: "إزاي تذاكر من الأفلام وتستفيد من المشاهد؟",
    desc: "منهجية تحليل الكادرات السينمائية وأفلام الأنيميشن العالمية لاستخراج أسرار التكوين واللون.",
  },
  {
    num: "04",
    title: "إزاي تفهم أساليب المخرجين في بناء المشاهد؟",
    desc: "قراءة عقلية المخرج وكيف يوظف الخلفية والكاميرا لخدمة الحالة النفسية والدرامية للمشهد.",
  },
  {
    num: "05",
    title: "إزاي تعمل Compositions تخدم المشهد وتحكي قصته؟",
    desc: "بناء تكوينات بصرية توجه عين المشاهد وتجعل الخلفية تروي القصة حتى قبل ظهور الشخصية.",
  },
  {
    num: "06",
    title: "تطوير نظرتك الفنية والإخراجية",
    desc: "مش هتتعلم ترسم Background وبس، هتتعلم تفكر فيها وتفهم هي اتبنت إزاي وليه بالشكل ده.",
  },
];

export const ADDITIONAL_COURSES = [
  {
    id: "toonboom-animation",
    badge: "COURSE 02 · TOON BOOM",
    title: "كورس صناعة الأنيميشن الاحترافي (Toon Boom)",
    enTitle: "2D Animation Production with Toon Boom",
    desc: "هنتعلم الأنيميشن باحتراف، وهنشتغل عملي على برنامج Toon Boom، عشان تبدأ أول خطوة حقيقية في عالم صناعة الأنيميشن بطريقة الاستوديوهات.",
    highlights: [
      "تطبيق عملي مباشر على برنامج Toon Boom",
      "تأسيس قوي لقواعد التحريك الاحترافي",
      "مناسب لبداية أول خطوة عملية في سوق الأنيميشن",
    ],
    img: "/art/portfolio/background_background-06.webp",
    waMessage:
      "أهلاً يا ممدوح، شفت موقع فكرة بريميوم وعايز أعرف تفاصيل الاشتراك في كورس الأنيميشن العملي (Toon Boom).",
  },
  {
    id: "visdev-workshop",
    badge: "LIVE WORKSHOP · عدد محدود جداً",
    title: "ورشة الـ Visual Language وتطوير المشاريع البصرية",
    enTitle: "Style Analysis, Visual Language & VisDev Workshop",
    desc: "ورشة أونلاين تفاعلية نناقش فيها إزاي نكوّن الاستايلات ونعمل Visual Language مخصوصة لينا، وإزاي نحلل الاستايلات المختلفة ونطوّر مشروع بصري متكامل.",
    highlights: [
      "للمبتدئ (بأساسيات المنظور والألوان) للوصول لمراحل Advanced",
      "مسار خاص للمتقدمين لتطوير مشروع بصري كامل",
      "العدد محدود جداً للتركيز والمتابعة الفردية مع كل مشترك",
    ],
    img: "/art/zahian-world.webp",
    waMessage:
      "أهلاً يا ممدوح، شفت موقع فكرة بريميوم وعايز أحجز في ورشة الـ Background Design & Visual Language.",
  },
];


