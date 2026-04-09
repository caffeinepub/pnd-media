import { SiInstagram, SiTiktok, SiX } from "react-icons/si";

// ─── Inline SVG icons ────────────────────────────────────────────────────────
function CubeIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 3L25 9.5V18.5L14 25L3 18.5V9.5L14 3Z"
        stroke="#18C6C3"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 3V25" stroke="#18C6C3" strokeWidth="1.5" />
      <path
        d="M3 9.5L14 16L25 9.5"
        stroke="#18C6C3"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NarrativeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="18" height="3" rx="1.5" fill="#18C6C3" />
      <rect
        x="2"
        y="10"
        width="12"
        height="3"
        rx="1.5"
        fill="#18C6C3"
        opacity="0.6"
      />
      <rect
        x="2"
        y="16"
        width="8"
        height="3"
        rx="1.5"
        fill="#18C6C3"
        opacity="0.3"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="3" stroke="#18C6C3" strokeWidth="1.5" />
      <circle cx="3" cy="4" r="2" stroke="#18C6C3" strokeWidth="1.5" />
      <circle cx="19" cy="4" r="2" stroke="#18C6C3" strokeWidth="1.5" />
      <circle cx="3" cy="18" r="2" stroke="#18C6C3" strokeWidth="1.5" />
      <circle cx="19" cy="18" r="2" stroke="#18C6C3" strokeWidth="1.5" />
      <path
        d="M5 5.5L9 9M13 9L17 5.5M5 16.5L9 13M13 13L17 16.5"
        stroke="#18C6C3"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  );
}

function PlatformIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="8"
        height="8"
        rx="2"
        stroke="#18C6C3"
        strokeWidth="1.5"
      />
      <rect
        x="12"
        y="2"
        width="8"
        height="8"
        rx="2"
        stroke="#18C6C3"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <rect
        x="2"
        y="12"
        width="8"
        height="8"
        rx="2"
        stroke="#18C6C3"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <rect
        x="12"
        y="12"
        width="8"
        height="8"
        rx="2"
        stroke="#18C6C3"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );
}

function ConversionIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 17L8 11L12 14L19 5"
        stroke="#18C6C3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5H19V9"
        stroke="#18C6C3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Static data ─────────────────────────────────────────────────────────────────────
const truths = [
  "Everyone creates content.",
  "Everyone has access to creators.",
  "Nobody controls distribution.",
];

const consequences = [
  "Content without reach.",
  "Reach without conversion.",
  "Spend without results.",
];

const shiftSteps = [
  "Take content",
  "Turn it into narratives",
  "Push through creator networks",
  "Optimize for conversion",
];

const inputItems = ["Content", "Offers", "Campaigns"];
const pndItems = ["Narratives", "Creators", "Clipping", "Amplification"];
const outputItems = ["Users", "Traffic", "Revenue"];

const pillars = [
  {
    icon: <NarrativeIcon />,
    title: "Narrative Structuring",
    description:
      "We define how your brand is perceived across every platform and touchpoint.",
  },
  {
    icon: <NetworkIcon />,
    title: "Creator Networks",
    description:
      "Clippers, micro-creators, niche pages — activated and coordinated at scale.",
  },
  {
    icon: <PlatformIcon />,
    title: "Cross-Platform Distribution",
    description:
      "X, TikTok, Instagram, YouTube Shorts — where your audience already lives.",
  },
  {
    icon: <ConversionIcon />,
    title: "Conversion Optimization",
    description:
      "We scale what works and cut what doesn't. Every cycle tightens the loop.",
  },
];

const whyList = [
  "Distribution > content",
  "Narrative > randomness",
  "Repetition builds belief",
  "Belief drives action",
  "Systems outperform one-off campaigns",
];

const useCases = [
  {
    label: "For Brands",
    title: "Turn content into users",
    description:
      "Structured distribution converts content spend into measurable growth.",
  },
  {
    label: "For Platforms",
    title: "Backend growth layer",
    description:
      "Plug PND in as distribution infrastructure. Clipur and platforms like it use PND to grow.",
  },
  {
    label: "For Operators / BD",
    title: "Close stronger deals",
    description:
      "Better outcomes mean better relationships. PND gives you results to stand behind.",
  },
];

const campaigns = [
  {
    id: "01",
    label: "Campaign 01 — June 2025",
    type: "Dual Brand Launch",
    typeColor: "teal" as const,
    title: "Orbet + Gambleverse",
    platform: "X (Twitter)",
    dates: "June 24–26, 2025",
    duration: "3 days",
    heroStat: "25.2M",
    heroLabel: "impressions",
    exactFigure: "25,199,809",
    subStats: [
      { label: "Verified posts", value: "43" },
      { label: "Creators", value: "20" },
      { label: "Duration", value: "3 days" },
    ],
    highlights: [
      { label: "Highest single post", value: "8M impressions" },
      { label: "Top 5 posts combined", value: "~16.7M" },
    ],
    brands: [
      { name: "Orbet", impressions: "13,091,809", posts: 35, pct: 54 },
      { name: "Gambleverse", impressions: "11,008,000", posts: 8, pct: 46 },
    ],
    hero: true,
  },
  {
    id: "02",
    label: "Campaign 02 — July 2025",
    type: "Reach Campaign",
    typeColor: "teal" as const,
    title: "July 2025",
    platform: "X (Twitter)",
    dates: "July 25–26, 2025",
    duration: "2 days",
    heroStat: "5.4M",
    heroLabel: "impressions",
    exactFigure: "5,368,600",
    subStats: [
      { label: "Verified posts", value: "24" },
      { label: "Creators", value: "11" },
      { label: "Duration", value: "2 days" },
    ],
    highlights: [{ label: "Highest single post", value: "3.5M impressions" }],
    brands: [],
    hero: false,
  },
  {
    id: "03",
    label: "Campaign 03 — August 2025",
    type: "Reach Campaign",
    typeColor: "teal" as const,
    title: "August 2025",
    platform: "X (Twitter)",
    dates: "Aug 19–23, 2025",
    duration: "5 days",
    heroStat: "5.5M",
    heroLabel: "impressions",
    exactFigure: "5,467,600",
    subStats: [
      { label: "Verified posts", value: "26" },
      { label: "Creators", value: "9" },
      { label: "Duration", value: "5 days" },
    ],
    highlights: [{ label: "Highest single post", value: "2.5M impressions" }],
    brands: [],
    hero: false,
  },
  {
    id: "04",
    label: "Campaign 04 — September 2025",
    type: "Conversion Campaign",
    typeColor: "amber" as const,
    title: "September 2025",
    platform: "X (Twitter)",
    dates: "Sep 10–14, 2025",
    duration: "5 days",
    heroStat: "1,946",
    heroLabel: "link clicks",
    exactFigure: "181,378 impressions",
    subStats: [
      { label: "Tracked posts", value: "37" },
      { label: "Comments", value: "99" },
      { label: "Retweets", value: "227" },
    ],
    highlights: [{ label: "Total impressions", value: "181,378" }],
    note: "Optimised for link clicks, not reach.",
    brands: [],
    hero: false,
  },
];

const howSteps = [
  { num: "01", title: "Submit Campaign", desc: "Define product and goal" },
  { num: "02", title: "Structure Strategy", desc: "Angles, hooks, narratives" },
  {
    num: "03",
    title: "Activate Distribution",
    desc: "Creators deploy content",
  },
  { num: "04", title: "Optimize + Scale", desc: "Winners get amplified" },
];

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <CubeIcon />
            <span className="text-foreground font-semibold text-lg tracking-tight">
              PND Media
            </span>
          </div>
          <nav
            className="hidden md:flex items-center gap-8 text-sm text-muted-foreground"
            aria-label="Main navigation"
          >
            <a
              href="#system"
              className="hover:text-foreground transition-colors"
              data-ocid="nav.system.link"
            >
              System
            </a>
            <a
              href="#pillars"
              className="hover:text-foreground transition-colors"
              data-ocid="nav.pillars.link"
            >
              Pillars
            </a>
            <a
              href="#use-cases"
              className="hover:text-foreground transition-colors"
              data-ocid="nav.usecases.link"
            >
              Use Cases
            </a>
            <a
              href="#how-it-works"
              className="hover:text-foreground transition-colors"
              data-ocid="nav.how.link"
            >
              How It Works
            </a>
          </nav>
          <a
            href="mailto:campaigns@pndmedia.xyz"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            data-ocid="nav.primary_button"
          >
            Start a Campaign
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center dot-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground mb-8 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Distribution Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[1.05] mb-6">
            Attention is everywhere.
            <br />
            <span style={{ color: "#18C6C3" }}>Distribution is not.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed mb-10">
            Content is easy. Conversion is engineered.
            <br />
            PND is the engine behind both.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:campaigns@pndmedia.xyz"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-teal"
              data-ocid="hero.primary_button"
            >
              Start a Campaign
            </a>
            <a
              href="mailto:campaigns@pndmedia.xyz"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm border border-border hover:border-primary/40 transition-colors"
              data-ocid="hero.secondary_button"
            >
              Integrate PND
            </a>
          </div>
        </div>
      </section>

      {/* ── THE REALITY ── */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-medium">
            The Reality
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 leading-tight">
            The reality of content in 2025.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {truths.map((truth) => (
            <div
              key={truth}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <p className="text-base font-semibold text-foreground">{truth}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Result
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {consequences.map((con) => (
            <div
              key={con}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <p className="text-base font-medium text-muted-foreground">
                {con}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── THE SHIFT ── */}
      <Section className="border-t border-border">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-medium">
            The Shift
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            PND is the distribution layer.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0">
          {shiftSteps.map((step, i) => (
            <>
              <div
                key={step}
                className="flex-1 p-5 rounded-xl border border-border bg-card min-w-0"
              >
                <span className="text-xs text-primary font-mono font-medium mb-2 block">
                  0{i + 1}
                </span>
                <p className="text-sm font-semibold text-foreground">{step}</p>
              </div>
              {i < shiftSteps.length - 1 && (
                <div
                  key={`arrow-${step}`}
                  className="hidden md:flex items-center px-2 text-primary text-lg font-bold flex-shrink-0"
                >
                  →
                </div>
              )}
            </>
          ))}
        </div>
      </Section>

      {/* ── THE SYSTEM ── */}
      <Section id="system" className="border-t border-border">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-medium">
            The System
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Infrastructure, not a funnel.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          <div className="flex-1 p-8 rounded-xl border border-border bg-card">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Input
            </p>
            <div className="space-y-2">
              {inputItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center text-primary text-xl font-bold px-1">
            →
          </div>
          <div
            className="flex-1 p-8 rounded-xl border-2 bg-card"
            style={{ borderColor: "#18C6C3", boxShadow: "0 0 32px #18C6C320" }}
          >
            <p
              className="text-xs uppercase tracking-widest font-medium mb-4"
              style={{ color: "#18C6C3" }}
            >
              PND
            </p>
            <div className="space-y-2">
              {pndItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#18C6C3" }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center text-primary text-xl font-bold px-1">
            →
          </div>
          <div className="flex-1 p-8 rounded-xl border border-border bg-card">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Output
            </p>
            <div className="space-y-2">
              {outputItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── WHAT POWERS PND ── */}
      <Section id="pillars" className="border-t border-border">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-medium">
            Pillars
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            What powers PND.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="p-7 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
              data-ocid={`pillars.item.${i + 1}`}
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHY THIS WORKS ── */}
      <Section className="border-t border-border">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-medium">
            Principles
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Why this works.
          </h2>
        </div>
        <div className="space-y-0">
          {whyList.map((line, i) => (
            <div
              key={line}
              className="flex items-center gap-5 py-5 border-b border-border last:border-0"
            >
              <span className="text-sm font-mono text-primary w-6 flex-shrink-0">
                0{i + 1}
              </span>
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                {line}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── USE CASES ── */}
      <Section id="use-cases" className="border-t border-border">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-medium">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Built for internet brands.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {useCases.map((uc, i) => (
            <div
              key={uc.label}
              className="p-7 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
              data-ocid={`usecases.item.${i + 1}`}
            >
              <span
                className="inline-block text-xs px-2.5 py-1 rounded-full border font-medium mb-5"
                style={{
                  borderColor: "#18C6C330",
                  color: "#18C6C3",
                  backgroundColor: "#18C6C310",
                }}
              >
                {uc.label}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {uc.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── RESULTS ── */}
      <Section id="results" className="border-t border-border">
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            <p className="text-xs uppercase tracking-widest text-primary font-medium">
              Results
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            The numbers don't lie.
          </h2>
          <p className="text-base text-muted-foreground">
            Every campaign below ran on X. Every impression is
            creator-confirmed. No bots.
          </p>
        </div>

        {/* Grand total banner */}
        <div
          className="rounded-xl border border-border bg-card p-8 mb-10 grid grid-cols-2 md:grid-cols-4 gap-8"
          data-ocid="results.grand_total"
          style={{ boxShadow: "0 0 48px #18C6C308" }}
        >
          <div>
            <p
              className="text-3xl md:text-4xl font-black tracking-tight"
              style={{ color: "#18C6C3" }}
            >
              36.2M+
            </p>
            <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">
              Total Impressions
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
              4
            </p>
            <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">
              Campaigns
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
              130+
            </p>
            <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">
              Verified Posts
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
              Jun–Sep
            </p>
            <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">
              2025
            </p>
          </div>
        </div>

        {/* Campaign cards grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {campaigns.map((c, i) => {
            const isTeal = c.typeColor === "teal";
            const accentColor = isTeal ? "#18C6C3" : "#F59E0B";
            const accentBg = isTeal ? "#18C6C310" : "#F59E0B10";
            const accentBorder = isTeal ? "#18C6C330" : "#F59E0B30";
            const heroStyle = c.hero
              ? { borderColor: "#18C6C350", boxShadow: "0 0 40px #18C6C318" }
              : {};
            return (
              <div
                key={c.id}
                className={`rounded-xl border bg-card p-7 flex flex-col gap-5 hover:border-primary/30 transition-colors${c.hero ? " border-primary/30" : " border-border"}`}
                style={heroStyle}
                data-ocid={`results.campaign.${i + 1}`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <span className="text-xs text-muted-foreground font-mono">
                    {c.label}
                  </span>
                  <span
                    className="inline-flex text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      color: accentColor,
                      backgroundColor: accentBg,
                      border: `1px solid ${accentBorder}`,
                    }}
                  >
                    {c.type}
                  </span>
                </div>

                {/* Hero stat */}
                <div>
                  <p
                    className="text-5xl font-black tracking-tight leading-none"
                    style={{ color: accentColor }}
                  >
                    {c.heroStat}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {c.heroLabel}
                  </p>
                  {c.heroLabel !== "impressions" && (
                    <p className="text-xs text-muted-foreground/60 mt-0.5">
                      {c.exactFigure}
                    </p>
                  )}
                </div>

                {/* Sub-stats */}
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {c.subStats.map((s) => (
                    <div key={s.label}>
                      <p className="text-base font-bold text-foreground">
                        {s.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                {c.highlights.length > 0 && (
                  <div className="space-y-1.5">
                    {c.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted-foreground">{h.label}</span>
                        <span className="font-semibold text-foreground">
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Brand breakdown (Campaign 01 only) */}
                {c.brands.length > 0 && (
                  <div className="pt-2 border-t border-border space-y-3">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Brand breakdown
                    </p>
                    {c.brands.map((b) => (
                      <div key={b.name}>
                        <div className="flex items-center justify-between text-sm mb-1.5">
                          <span className="font-medium text-foreground">
                            {b.name}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {b.impressions} · {b.posts} posts
                          </span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${b.pct}%`,
                              backgroundColor: "#18C6C3",
                              opacity: 0.7,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Note (Campaign 04) */}
                {c.note && (
                  <p className="text-xs text-muted-foreground/70 italic border-t border-border pt-3">
                    {c.note}
                  </p>
                )}

                {/* Platform + dates footer */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border mt-auto">
                  <span>{c.platform}</span>
                  <span>{c.dates}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification note */}
        <p
          className="text-xs text-muted-foreground/60 italic max-w-2xl"
          data-ocid="results.verification_note"
        >
          All posts self-confirmed by creators: "I confirm this is my original
          post and I did not use any view bots." All included posts marked
          verified.
        </p>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section id="how-it-works" className="border-t border-border">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-medium">
            Process
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            How it works.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {howSteps.map((step, i) => (
            <div
              key={step.title}
              className="p-7 rounded-xl border border-border bg-card"
              data-ocid={`how.item.${i + 1}`}
            >
              <p className="text-3xl font-black text-foreground/10 mb-4 leading-none">
                {step.num}
              </p>
              <h3 className="text-base font-semibold text-foreground mb-1.5">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA SECTION ── */}
      <Section className="border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[1.05] mb-6">
            Content is easy.
            <br />
            <span style={{ color: "#18C6C3" }}>Conversion is engineered.</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            PND is the system that bridges the gap between attention and
            revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:campaigns@pndmedia.xyz"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-teal"
              data-ocid="cta.primary_button"
            >
              Start a Campaign
            </a>
            <a
              href="mailto:campaigns@pndmedia.xyz"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm border border-border hover:border-primary/40 transition-colors"
              data-ocid="cta.secondary_button"
            >
              Integrate PND
            </a>
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <CubeIcon />
                <span className="text-foreground font-semibold text-lg">
                  PND Media
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Distribution Infrastructure for Internet Brands.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-5">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="X (Twitter)"
                  data-ocid="footer.x.link"
                >
                  <SiX size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                  data-ocid="footer.instagram.link"
                >
                  <SiInstagram size={16} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="TikTok"
                  data-ocid="footer.tiktok.link"
                >
                  <SiTiktok size={16} />
                </a>
              </div>
              <a
                href="mailto:campaigns@pndmedia.xyz"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer.email.link"
              >
                campaigns@pndmedia.xyz
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-muted-foreground">
            <p>© {year} PND Media. All rights reserved.</p>
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Built with ♥ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
