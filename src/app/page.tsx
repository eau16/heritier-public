"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          } else {
            entry.target.classList.remove("revealed");
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#120909] text-[#f3e7da]">
      <header className="border-b border-[#5b2b2d]/35">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="font-[var(--font-heading)] text-3xl tracking-[0.18em] text-[#f4e7db]"
          >
            HERITIER
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#house"
              className="text-xs uppercase tracking-[0.26em] text-[#c8a47f] transition hover:text-[#f4e7db]"
            >
              The House
            </a>
            <a
              href="#creation"
              className="text-xs uppercase tracking-[0.26em] text-[#c8a47f] transition hover:text-[#f4e7db]"
            >
              What We Create
            </a>
            <a
              href="#process"
              className="text-xs uppercase tracking-[0.26em] text-[#c8a47f] transition hover:text-[#f4e7db]"
            >
              Process
            </a>
            <a
              href="#philosophy"
              className="text-xs uppercase tracking-[0.26em] text-[#c8a47f] transition hover:text-[#f4e7db]"
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.26em] text-[#c8a47f] transition hover:text-[#f4e7db]"
            >
              Contact
            </a>

            <Link
              href="/create"
              className="ml-2 inline-flex items-center justify-center rounded-full border border-[#b98762]/70 bg-[linear-gradient(180deg,#b87744,#8f542e)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-[#fff3e6] shadow-[0_8px_24px_rgba(185,136,93,0.16)] transition duration-300 hover:scale-[1.02] hover:border-[#d1a37e] hover:bg-[linear-gradient(180deg,#c88955,#9b6038)]"
            >
              Create
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-24 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="max-w-3xl">
            <p
              data-reveal
              className="reveal-up mb-5 text-xs uppercase tracking-[0.32em] text-[#b9885d]"
            >
              Maison de Parfum
            </p>

            <h1
              data-reveal
              className="reveal-up reveal-delay-1 max-w-4xl font-[var(--font-heading)] text-5xl leading-[0.95] text-[#f5e8dc] sm:text-6xl lg:text-7xl"
            >
              Scent as heritage, shaped with intimacy, worn like couture.
            </h1>

            <p
              data-reveal
              className="reveal-up reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-[#d7beab]"
            >
              Heritier transforms photographs into fragrance concepts guided by
              atmosphere, memory, texture, and emotional tone. Each composition
              is imagined as something personal, enduring, and worthy of being
              carried close to the skin.
            </p>

            <div
              data-reveal
              className="reveal-up reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/create"
                className="inline-flex items-center justify-center rounded-full bg-[#9a6238] px-7 py-3.5 text-sm font-medium text-[#fff2e4] transition hover:bg-[#b87744]"
              >
                Begin Your Composition
              </Link>

              <a
                href="#house"
                className="inline-flex items-center justify-center rounded-full border border-[#7d5850] px-7 py-3.5 text-sm font-medium text-[#ead8ca] transition hover:bg-[rgba(255,245,236,0.05)]"
              >
                Enter the House
              </a>
            </div>
          </div>

          <div
            data-reveal
            className="reveal-up reveal-delay-2 rounded-[2rem] border border-[#5b2b2d]/35 bg-[linear-gradient(180deg,rgba(57,18,22,0.92),rgba(21,10,11,0.96))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-[#b9885d]">
                Featured Edition
              </p>
              <span className="rounded-full border border-[#6c4942] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#d5b79a]">
                Nuit Héritée
              </span>
            </div>

            <h2 className="max-w-md font-[var(--font-heading)] text-4xl leading-[1] text-[#f4e7db]">
              A nocturnal profile of black cherry skin, smoked sandalwood, and
              quiet fire.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#d4b9a7]">
              Structured with restraint and intimacy, composed to feel rare
              rather than loud. A study in depth, warmth, and shadowed elegance.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border-t border-[#6b3c3c]/60 pt-4">
                <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                  Top
                </p>
                <p className="text-sm leading-6 text-[#ead8ca]">
                  Black Cherry
                  <br />
                  Pink Pepper
                </p>
              </div>

              <div className="border-t border-[#6b3c3c]/60 pt-4">
                <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                  Heart
                </p>
                <p className="text-sm leading-6 text-[#ead8ca]">
                  Rose Thread
                  <br />
                  Incense Veil
                </p>
              </div>

              <div className="border-t border-[#6b3c3c]/60 pt-4">
                <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                  Base
                </p>
                <p className="text-sm leading-6 text-[#ead8ca]">
                  Sandalwood
                  <br />
                  Amber Resin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="house"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="grid gap-10 border-t border-[#442124]/70 pt-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal className="reveal-up">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#b9885d]">
              The House
            </p>
            <h2 className="font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
              A maison devoted to memory, atmosphere, and skin.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <p
              data-reveal
              className="reveal-up reveal-delay-1 text-base leading-8 text-[#d6beac]"
            >
              Heritier approaches fragrance as an heirloom language. A place, a
              season, a room, a ceremony, a silence, a photograph — each may
              carry a scent waiting to be translated into form.
            </p>

            <p
              data-reveal
              className="reveal-up reveal-delay-2 text-base leading-8 text-[#d6beac]"
            >
              We are interested less in mass appeal than in resonance: scents
              that feel intimate, composed, and personal enough to live beside
              memory for years rather than moments.
            </p>
          </div>
        </div>
      </section>

      <section
        id="creation"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div data-reveal className="reveal-up">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#b9885d]">
              What We Create
            </p>
            <h2 className="max-w-3xl font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
              Photographs translated into fragrance concepts with emotional and
              olfactive depth.
            </h2>
          </div>

          <div className="space-y-6">
            <div
              data-reveal
              className="reveal-up reveal-delay-1 border-l border-[#6a3b3d]/70 pl-5"
            >
              <h3 className="font-[var(--font-heading)] text-3xl text-[#f0e2d6]">
                Atmosphere-led composition
              </h3>
              <p className="mt-2 text-base leading-7 text-[#d2baa8]">
                Light, weather, floral suggestion, interior mood, movement,
                color temperature, and emotional tone all become part of the
                reading.
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-2 border-l border-[#6a3b3d]/70 pl-5"
            >
              <h3 className="font-[var(--font-heading)] text-3xl text-[#f0e2d6]">
                Structured fragrance pyramid
              </h3>
              <p className="mt-2 text-base leading-7 text-[#d2baa8]">
                Each result is shaped into top, heart, and base notes so the
                concept feels believable, wearable, and compositionally clear.
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-3 border-l border-[#6a3b3d]/70 pl-5"
            >
              <h3 className="font-[var(--font-heading)] text-3xl text-[#f0e2d6]">
                Bespoke emotional language
              </h3>
              <p className="mt-2 text-base leading-7 text-[#d2baa8]">
                The final experience is not simply descriptive. It is intended
                to feel like a personal signature distilled from image and
                atmosphere.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div
            data-reveal
            className="reveal-up overflow-hidden rounded-[2rem] border border-[#5b2b2d]/35 bg-[rgba(255,245,236,0.02)]"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/editorial-shot.jpg"
                alt="Editorial perfume campaign image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div data-reveal className="reveal-up reveal-delay-1">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#b9885d]">
              Editorial Presence
            </p>
            <h3 className="font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
              Composed for skin, memory, and atmosphere.
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#d4bcaa]">
              Heritier lives between image and intimacy. Each composition is
              imagined as a private object — not only to be smelled, but to be
              worn, remembered, and lived with.
            </p>
            <p className="mt-5 max-w-2xl text-sm uppercase tracking-[0.28em] text-[#9f7a63]">
              Campaign study / maison visual direction
            </p>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="border-t border-[#442124]/70 pt-12">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div data-reveal className="reveal-up">
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#b9885d]">
                Signature Process
              </p>
              <h2 className="font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
                Quietly guided, intentionally composed.
              </h2>
            </div>

            <p
              data-reveal
              className="reveal-up reveal-delay-1 max-w-2xl text-base leading-7 text-[#d4bcaa]"
            >
              The experience is designed to feel measured and refined, moving
              from image to interpretation with clarity rather than excess.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div
              data-reveal
              className="reveal-up border-t border-[#6a3b3d]/60 pt-5"
            >
              <p className="mb-3 text-[11px] uppercase tracking-[0.26em] text-[#b9885d]">
                01 / Upload
              </p>
              <h3 className="font-[var(--font-heading)] text-3xl text-[#f0e2d6]">
                Present the image
              </h3>
              <p className="mt-3 text-base leading-7 text-[#cfb7a5]">
                Begin with a single photograph carrying a mood, event, space, or
                emotional atmosphere.
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-1 border-t border-[#6a3b3d]/60 pt-5"
            >
              <p className="mb-3 text-[11px] uppercase tracking-[0.26em] text-[#b9885d]">
                02 / Interpret
              </p>
              <h3 className="font-[var(--font-heading)] text-3xl text-[#f0e2d6]">
                Read the cues
              </h3>
              <p className="mt-3 text-base leading-7 text-[#cfb7a5]">
                Mood, setting, materials, light, and imagined florals are
                translated into a fragrance direction.
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-2 border-t border-[#6a3b3d]/60 pt-5"
            >
              <p className="mb-3 text-[11px] uppercase tracking-[0.26em] text-[#b9885d]">
                03 / Compose
              </p>
              <h3 className="font-[var(--font-heading)] text-3xl text-[#f0e2d6]">
                Build the pyramid
              </h3>
              <p className="mt-3 text-base leading-7 text-[#cfb7a5]">
                The concept is structured through top, heart, and base notes so
                it reads as a true olfactive composition.
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-3 border-t border-[#6a3b3d]/60 pt-5"
            >
              <p className="mb-3 text-[11px] uppercase tracking-[0.26em] text-[#b9885d]">
                04 / Refine
              </p>
              <h3 className="font-[var(--font-heading)] text-3xl text-[#f0e2d6]">
                Shape the result
              </h3>
              <p className="mt-3 text-base leading-7 text-[#cfb7a5]">
                In later phases, compositions evolve into editable, more
                personal fragrance objects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="philosophy"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            data-reveal
            className="reveal-up rounded-[2rem] bg-[linear-gradient(180deg,rgba(52,17,20,0.88),rgba(20,10,11,0.94))] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#b9885d]">
              Philosophy
            </p>
            <h2 className="max-w-3xl font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
              We believe scent can hold presence long after the image has faded.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#d7beac]">
              Fragrance is one of the most intimate ways a memory can remain in
              the body. Heritier exists to explore that intimacy with care,
              restraint, and emotional clarity rather than spectacle.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div
              data-reveal
              className="reveal-up reveal-delay-1 border-b border-[#4e2628]/70 pb-6"
            >
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                Memory
              </p>
              <p className="text-base leading-7 text-[#d2baa8]">
                Not nostalgia as decoration, but memory as atmosphere and
                personal texture.
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-2 border-b border-[#4e2628]/70 pb-6"
            >
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                Skin
              </p>
              <p className="text-base leading-7 text-[#d2baa8]">
                The final destination is always closeness: a composition meant
                to be worn, not merely described.
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-3 border-b border-[#4e2628]/70 pb-6"
            >
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                Restraint
              </p>
              <p className="text-base leading-7 text-[#d2baa8]">
                Luxury comes from proportion, precision, and feeling — not
                noise.
              </p>
            </div>

            <div data-reveal className="reveal-up reveal-delay-3">
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                Continuity
              </p>
              <p className="text-base leading-7 text-[#d2baa8]">
                A scent can become a personal inheritance: something private,
                repeated, and lived with over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="border-t border-[#442124]/70 pt-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal className="reveal-up">
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#b9885d]">
                Private Inquiry
              </p>
              <h2 className="font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
                For appointments, private compositions, and maison inquiries.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#d4bcaa]">
                Heritier is currently presented as a digital fragrance house in
                development. For early access, private interest, and future
                launch correspondence, use the details below as a placeholder
                contact structure.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div
                data-reveal
                className="reveal-up reveal-delay-1 border-t border-[#6a3b3d]/60 pt-5"
              >
                <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                  Email
                </p>
                <p className="text-lg text-[#f1e3d6]">
                  maison@heritierparfum.com
                </p>
              </div>

              <div
                data-reveal
                className="reveal-up reveal-delay-2 border-t border-[#6a3b3d]/60 pt-5"
              >
                <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                  Phone
                </p>
                <p className="text-lg text-[#f1e3d6]">+90 000 000 00 00</p>
              </div>

              <div
                data-reveal
                className="reveal-up reveal-delay-3 border-t border-[#6a3b3d]/60 pt-5"
              >
                <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                  Locations
                </p>
                <p className="text-lg text-[#f1e3d6]">Istanbul / Paris</p>
              </div>

              <div
                data-reveal
                className="reveal-up reveal-delay-3 border-t border-[#6a3b3d]/60 pt-5"
              >
                <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                  Instagram
                </p>
                <p className="text-lg text-[#f1e3d6]">@heritier.parfum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#3f1f22]/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-center sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#a98268]">
            Heritier Parfum — Established in discipline, worn in emotion
          </p>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#7f6256]">
            © 2026 Heritier. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}