"use client";

import React from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
}
export default function Home() {
  const expertise = [
    "Operational Transformation",
    "Dealer Network Performance",
    "Aftersales Excellence",
    "Commercial Vehicles",
    "Passenger Vehicles",
    "Business Intelligence",
  ];

  const experience = [
    {
      company: "Toyota & Lexus",
      role: "Regional Operations Leadership",
      years: "2000 – 2012",
    },
    {
      company: "Volkswagen Group",
      role: "Dealer Performance & Strategy",
      years: "2012 – 2016",
    },
    {
      company: "Audi",
      role: "Premium Brand Operations",
      years: "2016 – 2018",
    },
    {
      company: "Allison Transmission",
      role: "Commercial Vehicle Leadership",
      years: "2018 – Present",
    },
  ];

  return (
    <main className="bg-[#020817] text-white">
              <header className="sticky top-0 z-50 border-b border-white/5 bg-[#020817]/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#020817]/45">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-10 py-5">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-light text-[#b8893c]">
                SV
              </div>

              <div className="h-8 w-px bg-white/15" />

              <div className="text-sm tracking-[0.35em] text-white/90">
                VISSER.ONE
              </div>
            </div>

            <nav className="hidden xl:flex items-center gap-14 text-[11px] uppercase tracking-[0.32em] text-white/70">
<nav className="hidden xl:flex items-center gap-14 text-[11px] uppercase tracking-[0.32em] text-white/70">

  <a
    href="#top"
    className="relative transition-all duration-300 hover:text-[#b8893c]
    after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0
    after:bg-[#b8893c] after:transition-all after:duration-300
    hover:after:w-full"
  >
    Home
  </a>

  <a
    href="#about"
    className="relative transition-all duration-300 hover:text-[#b8893c]
    after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0
    after:bg-[#b8893c] after:transition-all after:duration-300
    hover:after:w-full"
  >
    About
  </a>

  <a
    href="#experience"
    className="relative transition-all duration-300 hover:text-[#b8893c]
    after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0
    after:bg-[#b8893c] after:transition-all after:duration-300
    hover:after:w-full"
  >
    Experience
  </a>

  <a
    href="#expertise"
    className="relative transition-all duration-300 hover:text-[#b8893c]
    after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0
    after:bg-[#b8893c] after:transition-all after:duration-300
    hover:after:w-full"
  >
    Expertise
  </a>

  <a
    href="#contact"
    className="relative transition-all duration-300 hover:text-[#b8893c]
    after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0
    after:bg-[#b8893c] after:transition-all after:duration-300
    hover:after:w-full"
  >
    Contact
  </a>

</nav>
            </nav>

           <a
  href="#contact"
  className="rounded-2xl border border-[#b8893c]/40 px-10 py-4 text-[11px] uppercase tracking-[0.24em] text-[#b8893c] transition-all duration-300 hover:border-[#b8893c] hover:bg-[#b8893c]/10 hover:text-white"
>
  Let&apos;s Connect
</a>
          </div>
        </header>
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

<section
  id="top"
  className="relative min-h-screen"
>
        {/* BG IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.48]"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-[#020817]/68" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/92 via-[#020817]/55 to-transparent" />

        <div className="absolute top-0 right-0 h-[680px] w-[380px] bg-[#b8893c]/10 blur-[140px]" />

        {/* NAV */}

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto grid min-h-[88vh] max-w-[1600px] grid-cols-1 items-center px-10 lg:grid-cols-2">
<motion.div
  className="max-w-[760px]"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
            <div className="mb-10">
              <div className="mb-5 h-px w-14 bg-[#b8893c]" />

              <p className="text-[10px] uppercase tracking-[0.42em] text-[#b8893c]">
                International Automotive Executive
              </p>
            </div>

            <h1 className="leading-[0.92] tracking-[-0.065em]">
              <span className="block text-[88px] font-light text-white xl:text-[102px]">
                STEPHAN
              </span>

              <span className="block text-[88px] font-light text-[#d4aa5a] drop-shadow-[0_0_18px_rgba(212,170,90,0.35)] xl:text-[102px]">
                VISSER
              </span>
            </h1>

            <div className="mt-10 max-w-[760px] rounded-[28px] bg-[#020817]/55 p-8 backdrop-blur-sm animate-fade-in">
              <p className="text-[17px] leading-[2] text-[#b8893c]">
                Automotive Executive • Passenger & Commercial Vehicles •
                Business Transformation Leadership
              </p>
            </div>

            <div className="mt-12 max-w-[680px]">
              <p className="text-[18px] leading-[2.1] text-white/78">
                Driving operational excellence, dealer performance and
                strategic growth across both commercial and passenger vehicle
                industries through more than three decades of international
                automotive leadership.
              </p>
            </div>

            <div className="mt-14 flex gap-5">
              <a
  href="#experience"
  className="rounded-2xl bg-[#b8893c] px-10 py-5 text-[11px] uppercase tracking-[0.24em] text-black transition-all duration-300 hover:bg-[#d4a654] hover:shadow-[0_0_30px_rgba(212,170,90,0.25)]"
>
  View Experience
</a>

 <a
  href="#expertise"
  className="rounded-2xl border border-white/10 bg-[#050816]/40 px-10 py-5 text-[11px] uppercase tracking-[0.24em] text-white transition-all duration-300 hover:border-[#b8893c] hover:bg-white/5 hover:text-[#b8893c] hover:-translate-y-1"
>
  Explore Expertise
</a>
          </div>
        </motion.div>
      </div>
    </section>
      {/* ================================================= */}
      {/* ABOUT */}
      {/* ================================================= */}

<section
  id="about"
  className="relative z-10 border-t border-white/5 bg-[#020817] px-8 py-32 md:px-20"
>
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: "easeOut" }}
>
<div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-24 lg:grid-cols-2">
    
    {/* LEFT */}
    <div>
      <div className="mb-8 text-[12px] uppercase tracking-[0.45em] text-[#c8a063]">
        About Stephan
      </div>

      <h2 className="max-w-[700px] text-5xl font-light leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
        Executive leadership across global automotive markets.
      </h2>
    </div>

    {/* RIGHT */}
    <div className="max-w-[760px] space-y-12 text-[22px] leading-[2] text-white/78">
      
      <p>
        Stephan is an international automotive executive with more than three
        decades of leadership experience across passenger and commercial vehicle
        operations, dealer development and OEM network performance.
      </p>

      <p>
        His career has been built around operational transformation, aftersales
        excellence, strategic business leadership and the delivery of sustainable
        growth across complex international markets.
      </p>

      <p>
        Combining commercial discipline with data-driven leadership, Stephan has
        consistently improved customer experience, operational performance and
        long-term business results across premium automotive environments.
      </p>
      
         </div>
         </div>
         </motion.div>
         </section>

      {/* ================================================= */}
      {/* EXPERIENCE */}
      {/* ================================================= */}

{/* EXPERIENCE SECTION */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  id="experience"
  className="relative z-10 border-t border-white/5 bg-[#020817] px-8 py-40 md:px-20"
>
  <div className="mx-auto max-w-[1600px]">

    <div className="mb-6 text-[12px] uppercase tracking-[0.45em] text-[#c8a063]">
      Executive Experience
    </div>

    <h2 className="mb-24 max-w-[1200px] text-5xl font-light leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
      Leadership across global automotive and commercial vehicle operations.
    </h2>

    <div className="border-t border-white/5">

      {/* ALLISON */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="group grid grid-cols-1 gap-10 border-b border-white/5 py-12 transition-all duration-500 hover:bg-white/[0.02] hover:px-6 hover:rounded-2xl hover:-translate-y-1 md:grid-cols-[1.1fr_1fr_auto]"
>
        <div>
          <div className="mb-6 h-px w-0 bg-[#b8893c] transition-all duration-500 group-hover:w-16" />
          <h3 className="text-3xl font-light text-white">
            Allison Transmission
          </h3>
        </div>

        <div className="max-w-[720px] text-lg leading-relaxed text-white/60">
        Leading regional commercial vehicle operations across Middle East markets, driving dealer development, operational performance, strategic growth initiatives and executive stakeholder alignment across a complex distributor network.
        </div>

        <div className="text-sm tracking-wide text-[#c8a063]">
          2019 — Present
        </div>
      </motion.div>

      {/* AUDI */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="group grid grid-cols-1 gap-10 border-b border-white/5 py-12 transition-all duration-500 hover:bg-white/[0.02] hover:px-6 hover:rounded-2xl hover:-translate-y-1 md:grid-cols-[1.1fr_1fr_auto]"
>
        <div>
          <div className="mb-6 h-px w-0 bg-[#b8893c] transition-all duration-500 group-hover:w-16" />
          <h3 className="text-3xl font-light text-white">
            Audi Middle East / Volkswagen Group
          </h3>
        </div>

        <div className="max-w-[720px] text-lg leading-relaxed text-white/60">
          Directed premium automotive operations and regional aftersales transformation initiatives across Middle East markets, strengthening dealer network performance, customer experience standards and operational excellence within a leading OEM environment.
        </div>

        <div className="text-sm tracking-wide text-[#c8a063]">
          2015 — 2019
        </div>
      </motion.div>

      {/* AL FUTTAIM */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="group grid grid-cols-1 gap-10 border-b border-white/5 py-12 transition-all duration-500 hover:bg-white/[0.02] hover:px-6 hover:rounded-2xl hover:-translate-y-1 md:grid-cols-[1.1fr_1fr_auto]"
>
        <div>
          <div className="mb-6 h-px w-0 bg-[#b8893c] transition-all duration-500 group-hover:w-16" />
          <h3 className="text-3xl font-light text-white">
            Al-Futtaim Toyota & Lexus
          </h3>
        </div>

        <div className="max-w-[720px] text-lg leading-relaxed text-white/60">
          Led passenger vehicle operational performance, dealer development and aftersales excellence across one of the Middle East’s most established automotive distributor groups, supporting sustainable growth and customer service transformation.
        </div>

        <div className="text-sm tracking-wide text-[#c8a063]">
          2011 — 2015
        </div>
      </motion.div>

    </div>
  </div>
</motion.section>

      {/* ================================================= */}
      {/* EXPERTISE */}
      {/* ================================================= */}


      <section
        id="expertise"
        className="relative z-10 border-t border-white/5 bg-[#020817] px-8 py-32 md:px-20"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20">
            <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-[#c6a15b]">
              Core Expertise
            </p>

            <h2 className="max-w-5xl text-5xl font-light leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
              Strategic leadership across automotive,
              commercial vehicle and OEM operations.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Operational Excellence",
                text: "Driving performance improvement, process optimisation and sustainable operational growth across regional markets.",
              },
              {
                title: "Dealer Network Performance",
                text: "Strengthening dealer capability, profitability, customer experience and regional network standards.",
              },
              {
                title: "Aftersales Strategy",
                text: "Leading aftersales transformation initiatives focused on retention, profitability and service excellence.",
              },
              {
                title: "Commercial Vehicle Operations",
                text: "Extensive leadership experience within commercial vehicle operations, dealer development and regional growth.",
              },
              {
                title: "OEM Leadership",
                text: "Executive collaboration with premium automotive brands and multinational OEM operational structures.",
              },
              {
                title: "Business Transformation",
                text: "Leading strategic transformation through data-driven decision making, operational alignment and performance leadership.",
              },
            ].map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-[28px] border border-white/5 bg-white/[0.02] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#c6a15b]/30 hover:bg-white/[0.03]"
              >
                <div className="mb-8 h-px w-16 bg-[#c6a15b]/70 transition-all duration-500 group-hover:w-24" />

                <h3 className="mb-6 text-3xl font-light tracking-[-0.03em] text-white">
                  {item.title}
                </h3>

                <p className="max-w-xl text-[17px] leading-[1.9] text-white/60">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* ========================================= */}
      {/* LEADERSHIP IMPACT */}
      {/* ========================================= */}

      <section className="relative z-10 border-t border-white/5 bg-[#020817] px-8 py-32 md:px-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-24 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-[#d4aa5a]">
                Leadership Impact
                </p>

              <h2 className="max-w-4xl text-5xl font-light leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
                Delivering measurable operational and commercial performance across global automotive markets.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-[18px] leading-[1.95] text-white/60">
                More than three decades of leadership across OEM,
                distributor and commercial vehicle environments,
                focused on sustainable growth, operational excellence
                and strategic transformation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[32px] border border-white/5 bg-white/5 md:grid-cols-3">
            {[
              {
                number: <><Counter value={33} />+</>,
                label: "Years Leadership Experience",
              },
              {
                number: <><Counter value={20} />+</>,
                label: "International Markets",
              },
              {
                number: "OEM",
                label: "Premium Automotive Networks",
              },
              {
                number: "CV",
                label: "Commercial Vehicle Operations",
              },
              {
                number: "KPI",
                label: "Performance Transformation",
              },
              {
                number: "CX",
                label: "Customer Experience Excellence",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#020817] p-12 transition-all duration-500 hover:bg-white/[0.02] hover:-translate-y-1"
              >
                <div className="mb-4 text-5xl font-light tracking-[-0.065em] text-[#d4aa5a] md:text-6xl">
                  {item.number}
                </div>

                <p className="max-w-[220px] text-[13px] uppercase tracking-[0.28em] text-white/40">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* ========================================= */}
      {/* CONTACT SECTION */}
      {/* ========================================= */}

      <section
        id="contact"
        className="relative z-10 border-t border-white/5 bg-[#020817] px-8 py-32 md:px-20"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-[#c6a15b]">
                Contact
              </p>

              <h2 className="max-w-5xl text-5xl font-light leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
                Open to executive leadership,
                strategic advisory and operational
                transformation opportunities across
                global automotive and commercial
                vehicle markets.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <div className="space-y-10 border-l border-white/10 pl-10">
                <div>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-white/35">
                    Email
                  </p>

                  <a
                    href="mailto:admin@visser.one"
                    className="text-2xl font-light text-white transition-colors duration-300 hover:text-[#c6a15b]"
                  >
                    admin@visser.one
                  </a>
                </div>

                <div>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-white/35">
                    LinkedIn
                  </p>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-2xl font-light text-white transition-colors duration-300 hover:text-[#c6a15b]"
                  >
                    Connect on LinkedIn
                  </a>
                </div>

                <div>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-white/35">
                    Location
                  </p>

                  <p className="text-2xl font-light text-white">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer
        id="contact"
        className="border-t border-white/5 bg-black py-20"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-10 px-10 lg:flex-row">
          <div>
            <div className="text-4xl font-light text-[#b8893c]">
              SV
            </div>

            <div className="mt-4 text-sm tracking-[0.35em] text-white/70">
              VISSER.ONE
            </div>
          </div>

          <div className="text-center text-white/50">
            International Automotive Executive • Business Transformation •
            Global Operations Leadership
          </div>

          <a
  href="#contact"
  className="rounded-2xl border border-[#b8893c]/20 px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#b8893c] hover:bg-[#b8893c]/10 hover:text-[#d4aa5a]"
>
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}