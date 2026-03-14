"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const translations = {
  en: {
    navHouse: "The House",
    navCreation: "What We Create",
    navProcess: "Process",
    navPhilosophy: "Philosophy",
    navContact: "Contact",
    navCreate: "Create",

    heroKicker: "Maison de Parfum",
    heroTitle: "Scent as heritage, shaped with intimacy, worn like couture.",
    heroText:
      "Heritier transforms photographs into fragrance concepts guided by atmosphere, memory, texture, and emotional tone. Each composition is imagined as something personal, enduring, and worthy of being carried close to the skin.",
    heroPrimary: "Begin Your Composition",
    heroSecondary: "Enter the House",

    featuredKicker: "Featured Edition",
    featuredBadge: "Nuit Héritée",
    featuredTitle:
      "A nocturnal profile of black cherry skin, smoked sandalwood, and quiet fire.",
    featuredText:
      "Structured with restraint and intimacy, composed to feel rare rather than loud. A study in depth, warmth, and shadowed elegance.",
    top: "Top",
    heart: "Heart",
    base: "Base",

    houseKicker: "The House",
    houseTitle: "A maison devoted to memory, atmosphere, and skin.",
    houseText1:
      "Heritier approaches fragrance as an heirloom language. A place, a season, a room, a ceremony, a silence, a photograph — each may carry a scent waiting to be translated into form.",
    houseText2:
      "We are interested less in mass appeal than in resonance: scents that feel intimate, composed, and personal enough to live beside memory for years rather than moments.",

    creationKicker: "What We Create",
    creationTitle:
      "Photographs translated into fragrance concepts with emotional and olfactive depth.",
    creationCard1Title: "Atmosphere-led composition",
    creationCard1Text:
      "Light, weather, floral suggestion, interior mood, movement, color temperature, and emotional tone all become part of the reading.",
    creationCard2Title: "Structured fragrance pyramid",
    creationCard2Text:
      "Each result is shaped into top, heart, and base notes so the concept feels believable, wearable, and compositionally clear.",
    creationCard3Title: "Bespoke emotional language",
    creationCard3Text:
      "The final experience is not simply descriptive. It is intended to feel like a personal signature distilled from image and atmosphere.",

    editorialKicker: "Editorial Presence",
    editorialTitle: "Composed for skin, memory, and atmosphere.",
    editorialText:
      "Heritier lives between image and intimacy. Each composition is imagined as a private object — not only to be smelled, but to be worn, remembered, and lived with.",
    editorialCaption: "Campaign study / maison visual direction",

    processKicker: "Signature Process",
    processTitle: "Quietly guided, intentionally composed.",
    processText:
      "The experience is designed to feel measured and refined, moving from image to interpretation with clarity rather than excess.",
    step1: "Present the image",
    step1Text:
      "Begin with a single photograph carrying a mood, event, space, or emotional atmosphere.",
    step2: "Read the cues",
    step2Text:
      "Mood, setting, materials, light, and imagined florals are translated into a fragrance direction.",
    step3: "Build the pyramid",
    step3Text:
      "The concept is structured through top, heart, and base notes so it reads as a true olfactive composition.",
    step4: "Shape the result",
    step4Text:
      "In later phases, compositions evolve into editable, more personal fragrance objects.",

    philosophyKicker: "Philosophy",
    philosophyTitle:
      "We believe scent can hold presence long after the image has faded.",
    philosophyText:
      "Fragrance is one of the most intimate ways a memory can remain in the body. Heritier exists to explore that intimacy with care, restraint, and emotional clarity rather than spectacle.",
    philosophyMemory: "Memory",
    philosophyMemoryText:
      "Not nostalgia as decoration, but memory as atmosphere and personal texture.",
    philosophySkin: "Skin",
    philosophySkinText:
      "The final destination is always closeness: a composition meant to be worn, not merely described.",
    philosophyRestraint: "Restraint",
    philosophyRestraintText:
      "Luxury comes from proportion, precision, and feeling — not noise.",
    philosophyContinuity: "Continuity",
    philosophyContinuityText:
      "A scent can become a personal inheritance: something private, repeated, and lived with over time.",

    contactKicker: "Private Inquiry",
    contactTitle:
      "For appointments, private compositions, and maison inquiries.",
    contactText:
      "Heritier is currently presented as a digital fragrance house in development. For early access, private interest, and future launch correspondence, use the details below as a placeholder contact structure.",
    email: "Email",
    phone: "Phone",
    locations: "Locations",
    instagram: "Instagram",

    footerLeft: "Heritier Parfum — Established in discipline, worn in emotion",
    footerRight: "© 2026 Heritier. All rights reserved.",
  },

  tr: {
    navHouse: "Maison",
    navCreation: "Ne Yaratıyoruz",
    navProcess: "Süreç",
    navPhilosophy: "Felsefe",
    navContact: "İletişim",
    navCreate: "Oluştur",

    heroKicker: "Maison de Parfum",
    heroTitle: "Miras gibi taşınan, zarafetle şekillenen, tenle yaşayan koku.",
    heroText:
      "Heritier, fotoğrafları atmosfer, hafıza, doku ve duygusal ton üzerinden koku konseptlerine dönüştürür. Her kompozisyon kişisel, kalıcı ve ten üzerinde yaşamaya değer bir imza gibi düşünülür.",
    heroPrimary: "Kompozisyonunu Başlat",
    heroSecondary: "Maison’a Gir",

    featuredKicker: "Öne Çıkan Kompozisyon",
    featuredBadge: "Nuit Héritée",
    featuredTitle:
      "Siyah kiraz teni, tütsülü sandal ağacı ve sessiz ateşin geceye ait profili.",
    featuredText:
      "Gösterişten uzak ama derinlikli bir zarafetle kurgulandı. Sıcaklık, gölge ve rafine yoğunluk üzerine bir çalışma.",
    top: "Üst",
    heart: "Kalp",
    base: "Baz",

    houseKicker: "Maison",
    houseTitle: "Hafızaya, atmosfere ve tene adanmış bir maison.",
    houseText1:
      "Heritier, parfümü bir miras dili olarak ele alır. Bir yer, bir mevsim, bir oda, bir tören, bir sessizlik ya da bir fotoğraf — her biri kokuya dönüşmeyi bekleyen bir iz taşıyabilir.",
    houseText2:
      "Bizim için önemli olan kitlesel beğeni değil; yıllar boyunca hafızanın yanında yaşayabilecek kadar kişisel, rafine ve yakın hissettiren kompozisyonlardır.",

    creationKicker: "Ne Yaratıyoruz",
    creationTitle:
      "Fotoğrafları duygusal ve olfaktif derinliği olan parfüm konseptlerine dönüştürüyoruz.",
    creationCard1Title: "Atmosfer odaklı kompozisyon",
    creationCard1Text:
      "Işık, hava, çiçek çağrışımı, iç mekân hissi, hareket, renk sıcaklığı ve duygusal ton bu okumanın parçası olur.",
    creationCard2Title: "Yapılandırılmış parfüm piramidi",
    creationCard2Text:
      "Her sonuç üst, kalp ve baz notalara ayrılır; böylece konsept daha gerçekçi, kullanılabilir ve dengeli hissedilir.",
    creationCard3Title: "Kişisel duygusal dil",
    creationCard3Text:
      "Son deneyim yalnızca açıklayıcı değildir. Görüntü ve atmosferden damıtılmış kişisel bir imza gibi hissedilmesi amaçlanır.",

    editorialKicker: "Editoryal Duruş",
    editorialTitle: "Ten, hafıza ve atmosfer için kurgulandı.",
    editorialText:
      "Heritier, görüntü ile mahremiyet arasında yaşar. Her kompozisyon yalnızca koklanacak değil; taşınacak, hatırlanacak ve zamanla yaşanacak özel bir obje gibi düşünülür.",
    editorialCaption: "Kampanya çalışması / maison görsel yönü",

    processKicker: "İmza Süreç",
    processTitle: "Sessizce yönlendirilen, özenle kurgulanan deneyim.",
    processText:
      "Deneyim, abartıdan uzak; görüntüden yoruma netlik ve zarafetle ilerleyecek şekilde tasarlandı.",
    step1: "Görseli sun",
    step1Text:
      "Bir ruh hâli, an, mekân ya da duygusal atmosfer taşıyan tek bir fotoğrafla başla.",
    step2: "İzleri oku",
    step2Text:
      "Ruh hâli, ortam, materyaller, ışık ve hayal edilen floraller bir koku yönüne çevrilir.",
    step3: "Piramidi kur",
    step3Text:
      "Konsept, gerçek bir olfaktif kompozisyon gibi okunması için üst, kalp ve baz notalarla yapılandırılır.",
    step4: "Sonucu şekillendir",
    step4Text:
      "İlerleyen aşamalarda kompozisyonlar daha kişisel ve düzenlenebilir koku objelerine dönüşür.",

    philosophyKicker: "Felsefe",
    philosophyTitle:
      "Bir görüntü silinse bile kokunun varlığını taşıyabileceğine inanıyoruz.",
    philosophyText:
      "Koku, hafızanın bedende kalmasının en mahrem yollarından biridir. Heritier, bu mahremiyeti gösterişle değil; özen, ölçü ve duygusal berraklıkla keşfetmek için var.",
    philosophyMemory: "Hafıza",
    philosophyMemoryText:
      "Dekoratif nostalji değil; atmosfer ve kişisel doku olarak hafıza.",
    philosophySkin: "Ten",
    philosophySkinText:
      "Son durak her zaman yakınlıktır: yalnızca anlatılan değil, taşınan bir kompozisyon.",
    philosophyRestraint: "Ölçü",
    philosophyRestraintText:
      "Lüks; gürültüden değil, oran, hassasiyet ve histen doğar.",
    philosophyContinuity: "Devamlılık",
    philosophyContinuityText:
      "Bir koku, zamanla tekrar tekrar yaşanan kişisel bir mirasa dönüşebilir.",

    contactKicker: "Özel İletişim",
    contactTitle:
      "Randevular, özel kompozisyonlar ve maison talepleri için.",
    contactText:
      "Heritier şu anda gelişim sürecindeki dijital bir parfüm maison’u olarak sunuluyor. Erken erişim, özel ilgi ve lansman öncesi iletişim için aşağıdaki bilgileri şimdilik referans yapı olarak kullanabilirsiniz.",
    email: "E-posta",
    phone: "Telefon",
    locations: "Lokasyonlar",
    instagram: "Instagram",

    footerLeft: "Heritier Parfum — Disiplinle kuruldu, duyguyla taşındı",
    footerRight: "© 2026 Heritier. Tüm hakları saklıdır.",
  },
} as const;

export default function Home() {
  const [locale, setLocale] = useState<"en" | "tr">("en");
  const t = translations[locale];

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

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#house"
                className="text-xs uppercase tracking-[0.26em] text-[#c8a47f] transition hover:text-[#f4e7db]"
              >
                {t.navHouse}
              </a>
              <a
                href="#creation"
                className="text-xs uppercase tracking-[0.26em] text-[#c8a47f] transition hover:text-[#f4e7db]"
              >
                {t.navCreation}
              </a>
              <a
                href="#process"
                className="text-xs uppercase tracking-[0.26em] text-[#c8a47f] transition hover:text-[#f4e7db]"
              >
                {t.navProcess}
              </a>
              <a
                href="#philosophy"
                className="text-xs uppercase tracking-[0.26em] text-[#c8a47f] transition hover:text-[#f4e7db]"
              >
                {t.navPhilosophy}
              </a>
              <a
                href="#contact"
                className="text-xs uppercase tracking-[0.26em] text-[#c8a47f] transition hover:text-[#f4e7db]"
              >
                {t.navContact}
              </a>

              <Link
                href="/create"
                className="ml-2 inline-flex items-center justify-center rounded-full border border-[#b98762]/70 bg-[linear-gradient(180deg,#b87744,#8f542e)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-[#fff3e6] shadow-[0_8px_24px_rgba(185,136,93,0.16)] transition duration-300 hover:scale-[1.02] hover:border-[#d1a37e] hover:bg-[linear-gradient(180deg,#c88955,#9b6038)]"
              >
                {t.navCreate}
              </Link>
            </div>

            <div className="inline-flex rounded-full border border-[#6c4a40]/60 bg-[rgba(255,245,236,0.03)] p-1">
              <button
                onClick={() => setLocale("en")}
                className={`rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] transition ${
                  locale === "en"
                    ? "bg-[#a5673d] text-[#fff3e5]"
                    : "text-[#d8b79b] hover:text-[#fff3e5]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale("tr")}
                className={`rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] transition ${
                  locale === "tr"
                    ? "bg-[#a5673d] text-[#fff3e5]"
                    : "text-[#d8b79b] hover:text-[#fff3e5]"
                }`}
              >
                TR
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-24 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="max-w-3xl">
            <p
              data-reveal
              className="reveal-up mb-5 text-xs uppercase tracking-[0.32em] text-[#b9885d]"
            >
              {t.heroKicker}
            </p>

            <h1
              data-reveal
              className="reveal-up reveal-delay-1 max-w-4xl font-[var(--font-heading)] text-5xl leading-[0.95] text-[#f5e8dc] sm:text-6xl lg:text-7xl"
            >
              {t.heroTitle}
            </h1>

            <p
              data-reveal
              className="reveal-up reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-[#d7beab]"
            >
              {t.heroText}
            </p>

            <div
              data-reveal
              className="reveal-up reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/create"
                className="inline-flex items-center justify-center rounded-full bg-[#9a6238] px-7 py-3.5 text-sm font-medium text-[#fff2e4] transition hover:bg-[#b87744]"
              >
                {t.heroPrimary}
              </Link>

              <a
                href="#house"
                className="inline-flex items-center justify-center rounded-full border border-[#7d5850] px-7 py-3.5 text-sm font-medium text-[#ead8ca] transition hover:bg-[rgba(255,245,236,0.05)]"
              >
                {t.heroSecondary}
              </a>
            </div>
          </div>

          <div
            data-reveal
            className="reveal-up reveal-delay-2 rounded-[2rem] border border-[#5b2b2d]/35 bg-[linear-gradient(180deg,rgba(57,18,22,0.92),rgba(21,10,11,0.96))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-[#b9885d]">
                {t.featuredKicker}
              </p>
              <span className="rounded-full border border-[#6c4942] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#d5b79a]">
                {t.featuredBadge}
              </span>
            </div>

            <h2 className="max-w-md font-[var(--font-heading)] text-4xl leading-[1] text-[#f4e7db]">
              {t.featuredTitle}
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#d4b9a7]">
              {t.featuredText}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border-t border-[#6b3c3c]/60 pt-4">
                <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                  {t.top}
                </p>
                <p className="text-sm leading-6 text-[#ead8ca]">
                  Black Cherry
                  <br />
                  Pink Pepper
                </p>
              </div>

              <div className="border-t border-[#6b3c3c]/60 pt-4">
                <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                  {t.heart}
                </p>
                <p className="text-sm leading-6 text-[#ead8ca]">
                  Rose Thread
                  <br />
                  Incense Veil
                </p>
              </div>

              <div className="border-t border-[#6b3c3c]/60 pt-4">
                <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                  {t.base}
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
              {t.houseKicker}
            </p>
            <h2 className="font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
              {t.houseTitle}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <p
              data-reveal
              className="reveal-up reveal-delay-1 text-base leading-8 text-[#d6beac]"
            >
              {t.houseText1}
            </p>

            <p
              data-reveal
              className="reveal-up reveal-delay-2 text-base leading-8 text-[#d6beac]"
            >
              {t.houseText2}
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
              {t.creationKicker}
            </p>
            <h2 className="max-w-3xl font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
              {t.creationTitle}
            </h2>
          </div>

          <div className="space-y-6">
            <div
              data-reveal
              className="reveal-up reveal-delay-1 border-l border-[#6a3b3d]/70 pl-5"
            >
              <h3 className="font-[var(--font-heading)] text-3xl text-[#f0e2d6]">
                {t.creationCard1Title}
              </h3>
              <p className="mt-2 text-base leading-7 text-[#d2baa8]">
                {t.creationCard1Text}
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-2 border-l border-[#6a3b3d]/70 pl-5"
            >
              <h3 className="font-[var(--font-heading)] text-3xl text-[#f0e2d6]">
                {t.creationCard2Title}
              </h3>
              <p className="mt-2 text-base leading-7 text-[#d2baa8]">
                {t.creationCard2Text}
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-3 border-l border-[#6a3b3d]/70 pl-5"
            >
              <h3 className="font-[var(--font-heading)] text-3xl text-[#f0e2d6]">
                {t.creationCard3Title}
              </h3>
              <p className="mt-2 text-base leading-7 text-[#d2baa8]">
                {t.creationCard3Text}
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
              {t.editorialKicker}
            </p>
            <h3 className="font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
              {t.editorialTitle}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#d4bcaa]">
              {t.editorialText}
            </p>
            <p className="mt-5 max-w-2xl text-sm uppercase tracking-[0.28em] text-[#9f7a63]">
              {t.editorialCaption}
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
                {t.processKicker}
              </p>
              <h2 className="font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
                {t.processTitle}
              </h2>
            </div>

            <p
              data-reveal
              className="reveal-up reveal-delay-1 max-w-2xl text-base leading-7 text-[#d4bcaa]"
            >
              {t.processText}
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
                {t.step1}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#cfb7a5]">
                {t.step1Text}
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
                {t.step2}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#cfb7a5]">
                {t.step2Text}
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
                {t.step3}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#cfb7a5]">
                {t.step3Text}
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
                {t.step4}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#cfb7a5]">
                {t.step4Text}
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
              {t.philosophyKicker}
            </p>
            <h2 className="max-w-3xl font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
              {t.philosophyTitle}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#d7beac]">
              {t.philosophyText}
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div
              data-reveal
              className="reveal-up reveal-delay-1 border-b border-[#4e2628]/70 pb-6"
            >
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                {t.philosophyMemory}
              </p>
              <p className="text-base leading-7 text-[#d2baa8]">
                {t.philosophyMemoryText}
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-2 border-b border-[#4e2628]/70 pb-6"
            >
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                {t.philosophySkin}
              </p>
              <p className="text-base leading-7 text-[#d2baa8]">
                {t.philosophySkinText}
              </p>
            </div>

            <div
              data-reveal
              className="reveal-up reveal-delay-3 border-b border-[#4e2628]/70 pb-6"
            >
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                {t.philosophyRestraint}
              </p>
              <p className="text-base leading-7 text-[#d2baa8]">
                {t.philosophyRestraintText}
              </p>
            </div>

            <div data-reveal className="reveal-up reveal-delay-3">
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                {t.philosophyContinuity}
              </p>
              <p className="text-base leading-7 text-[#d2baa8]">
                {t.philosophyContinuityText}
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
                {t.contactKicker}
              </p>
              <h2 className="font-[var(--font-heading)] text-4xl leading-none text-[#f4e7db] sm:text-5xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#d4bcaa]">
                {t.contactText}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div
                data-reveal
                className="reveal-up reveal-delay-1 border-t border-[#6a3b3d]/60 pt-5"
              >
                <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                  {t.email}
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
                  {t.phone}
                </p>
                <p className="text-lg text-[#f1e3d6]">+90 000 000 00 00</p>
              </div>

              <div
                data-reveal
                className="reveal-up reveal-delay-3 border-t border-[#6a3b3d]/60 pt-5"
              >
                <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                  {t.locations}
                </p>
                <p className="text-lg text-[#f1e3d6]">Istanbul / Paris</p>
              </div>

              <div
                data-reveal
                className="reveal-up reveal-delay-3 border-t border-[#6a3b3d]/60 pt-5"
              >
                <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#b9885d]">
                  {t.instagram}
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
            {t.footerLeft}
          </p>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#7f6256]">
            {t.footerRight}
          </p>
        </div>
      </footer>
    </main>
  );
}