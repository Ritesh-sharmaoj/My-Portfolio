import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  GraduationCap,
  Headphones,
  Layout,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  TestTubeDiagonal,
  X,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const resumeUrl = "/resume.pdf";

const skills = [
  { title: "Manual Testing", icon: TestTubeDiagonal },
  { title: "UI Testing", icon: Layout },
  { title: "Functional Testing", icon: CheckCircle2 },
  { title: "API Testing", icon: ShieldCheck },
  { title: "Bug Reporting & Tracking", icon: BadgeCheck },
  { title: "Customer Support", icon: Headphones },
  { title: "Technical Support", icon: MessageSquareText },
  { title: "UI/UX Design using Figma", icon: Sparkles },
  { title: "MS Excel", icon: BriefcaseBusiness },
  { title: "Mail Handling", icon: Mail },
  { title: "HTML, CSS, JavaScript Basic", icon: Layout },
  { title: "Leadership & Team Coordination", icon: GraduationCap },
  { title: "Communication Skills", icon: MessageSquareText },
  { title: "Problem Solving", icon: CheckCircle2 },
];

const responsibilities = [
  "Worked on MS Excel operations and customer support activities",
  "Handled customer queries through calls, chats, and email support",
  "Managed mail handling and operational workflows",
  "Independently coordinated around 60 team members",
  "Designed complete website UI/UX layouts and prototypes in Figma",
  "Performed Manual, UI, Functional, and API testing for web and mobile apps",
  "Reported and tracked bugs to improve app performance and UX",
  "Tested POS websites, mobile apps, and web chat modules across devices",
];

const projects = [
  {
    title: "POS Website & Mobile App Testing",
    description:
      "Performed Manual, Functional, UI, and API testing for POS-based web and mobile applications.",
    tags: ["Manual Testing", "API Testing", "UI Testing", "Functional Testing"],
  },
  {
    title: "Web Chat & Application Testing",
    description:
      "Tested chat modules, forms, workflows, and user flows to ensure smooth user experience.",
    tags: ["Web Testing", "Chat Module Testing", "Bug Reporting", "UI Testing"],
  },
  {
    title: "UI/UX Website Design in Figma",
    description:
      "Designed complete website layouts, user flows, and prototypes using Figma.",
    tags: ["Figma", "UI Design", "UX Design", "Prototype"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

function Navbar({ menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-semibold text-slate-950" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">
            RS
          </span>
          <span>Ritesh Sharma</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            download="Ritesh-Sharma-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#edf4f2] pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.20),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(30,64,175,0.15),transparent_30%),linear-gradient(135deg,#f8fafc_0%,#e8f5f2_48%,#eef2ff_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f8fb] to-transparent" />

      <div className="section-shell relative grid min-h-[calc(100vh-6rem)] items-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
            <Sparkles size={16} />
            Open to QA, Web Testing, UI/UX & Support roles
          </div>
          <h1 className="text-5xl font-bold tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Ritesh Sharma
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            QA Tester, UI/UX Designer & Technical Support Professional
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Detail-focused early-career professional with hands-on experience in customer support,
            web testing, app testing, Figma design, and team coordination.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-700/20 transition hover:-translate-y-0.5 hover:bg-teal-800"
            >
              View Projects
              <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-800"
            >
              Contact Me
            </a>
            <a
              href={resumeUrl}
              download="Ritesh-Sharma-Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-float">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal-300/40 via-white to-indigo-200/50 blur-2xl" />
          <div className="glass-panel relative rounded-[2rem] p-6">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-teal-200">Profile Snapshot</span>
                <ShieldCheck className="text-teal-300" size={22} />
              </div>
              <div className="mt-10 grid h-28 w-28 place-items-center rounded-full bg-white text-4xl font-bold text-slate-950">
                RS
              </div>
              <h2 className="mt-6 text-2xl font-bold">Ritesh Sharma</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                QA Engineer | Web Testing | UI/UX Designer | Technical Support
              </p>
              <div className="mt-6 grid gap-3">
                {["Manual, UI, Functional & API Testing", "Figma UI/UX Layouts", "Customer & Technical Support"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 text-sm">
                      <CheckCircle2 className="text-teal-300" size={17} />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description, inverse = false }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className={`mb-3 text-sm font-bold uppercase tracking-[0.16em] ${inverse ? "text-teal-300" : "text-teal-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-bold sm:text-4xl ${inverse ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-base leading-7 ${inverse ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-[#f7f8fb] py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="About Me" title="Built for careful testing, clear design, and helpful support." />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-700">
              I am a result-oriented professional with 1.5 years of experience in customer support,
              team handling, UI/UX design, and QA/web testing. I started with MS Excel and customer
              support operations, later worked in mail handling, coordinated around 60 team members
              in the assaying department, designed complete website UI/UX layouts in Figma, and
              performed Manual, UI, Functional, and API testing for web and mobile applications.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["1.5 Years", "Professional experience"],
              ["60 Members", "Team coordination"],
              ["Multi-Device", "Web and mobile testing"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-slate-950">{value}</p>
                <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Testing, support, design, and coordination skills in one practical toolkit."
          description="A recruiter-friendly snapshot of the tools and strengths Ritesh brings to QA, support, and product-facing teams."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-[#fbfcfe] p-5 transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-premium"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                <Icon size={21} />
              </div>
              <h3 className="text-base font-bold text-slate-950">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-24 text-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Customer Support Executive | UI/UX Designer | QA Tester"
          description="Hands-on exposure across support operations, testing workflows, UI/UX design, and team coordination."
          inverse
        />
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="absolute left-8 top-10 hidden h-[calc(100%-5rem)] w-px bg-teal-400/40 sm:block" />
          <div className="grid gap-4">
            {responsibilities.map((item, index) => (
              <div key={item} className="relative flex gap-4 rounded-2xl bg-white/[0.04] p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-400 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="self-center text-sm leading-6 text-slate-200 sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-[#f7f8fb] py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work across testing and UI/UX design."
          description="Practical project experience that maps clearly to QA, web testing, app testing, and design roles."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-slate-950 text-white">
                <TestTubeDiagonal size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Education" title="Academic background" />
          <div className="grid gap-4">
            <InfoCard
              icon={GraduationCap}
              title="12th CBSE"
              description="Blooming Buds Academy, Sant Kabir Nagar"
              meta="2024"
            />
            <InfoCard
              icon={GraduationCap}
              title="10th CBSE"
              description="UMA Shankar Vidhyapitha Karari, Gorakhpur"
              meta="2022"
            />
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="Certification" title="Additional learning" />
          <InfoCard
            icon={BadgeCheck}
            title="6-Month MS Excel Course Completed"
            description="Practical foundation in spreadsheet operations and workplace data handling."
            meta="2024"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, description, meta }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#fbfcfe] p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
          <Icon size={22} />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-lg font-bold text-slate-950">{title}</h3>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{meta}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#eaf4f1] py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let's connect for QA, support, and UI/UX opportunities."
          description="Reach out directly or use the form UI below."
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-premium">
            <h3 className="text-2xl font-bold">Ritesh Sharma</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              QA Engineer | Web Testing | UI/UX Designer | Technical Support
            </p>
            <div className="mt-8 grid gap-4">
              <ContactLine icon={Mail} label="rriteshvish@gmail.com" href="mailto:rriteshvish@gmail.com" />
              <ContactLine icon={Phone} label="7388558546" href="tel:7388558546" />
              <ContactLine icon={MapPin} label="Noida, Sector 62A" />
            </div>
          </div>

          <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-teal-500 focus:bg-white"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Email
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-teal-500 focus:bg-white"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
              Message
              <textarea
                rows="6"
                placeholder="Write your message"
                className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-teal-500 focus:bg-white"
              />
            </label>
            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-800"
            >
              Send Message
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, label, href }) {
  const content = (
    <span className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 text-sm font-semibold text-slate-100">
      <Icon className="text-teal-300" size={19} />
      {label}
    </span>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-center text-sm text-slate-400">
      <p>Copyright 2026 Ritesh Sharma. All rights reserved.</p>
    </footer>
  );
}

export default App;
