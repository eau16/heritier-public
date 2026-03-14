"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Locale = "en" | "tr";

type ScentProfile = {
  title: string;
  mood: string;
  atmosphere: string;
  story: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  detectedCues: string[];
  olfactiveFamily: string;
  suggestedWear: string;
};

type NoteDetails = Record<
  string,
  {
    role: string;
    why: string;
    effect: string;
  }
>;

const copy = {
  en: {
    studio: "Creation Studio",
    uploadTitle: "Compose a scent from a single image.",
    uploadText:
      "Upload one photograph and let Heritier translate mood, atmosphere, memory, and visual cues into a premium fragrance concept with a structured olfactive identity.",
    uploadLabel: "Upload Your Photo",
    uploadHelp:
      "Atmospheric, emotional, or visually rich imagery works best — weddings, fog, festivals, travel, sea air, dusk, interiors, skin, texture, or stillness. For best results, upload images under 5MB.",
    preview: "Preview",
    previewEmpty: "Your selected image preview will appear here.",
    analyze: "Analyze My Photo",
    analyzing: "Analyzing...",
    reset: "Reset",

    awaitingKicker: "Olfactive Reading",
    awaitingTitle: "Awaiting the image.",
    awaitingText:
      "Once a photograph is uploaded, this space becomes a more editorial scent reading — atmosphere, story, cues, and a layered fragrance structure.",
    reading: "Reading",
    readingText: "A visual atmosphere translated into olfactive language.",
    structure: "Structure",
    structureText:
      "Top, heart, and base notes shaped as a composed pyramid.",
    detail: "Detail",
    detailText: "Note meanings, emotional cues, and suggested wear.",

    loadingKicker: "Analysis in progress",
    loadingTitle: "Translating image into scent.",
    loadingText:
      "Reading atmosphere, light, texture, memory cues, and emotional temperature to compose an olfactive interpretation.",

    interpretation: "Fragrance Interpretation",
    refine: "Refine Composition",
    doneEditing: "Done Editing",
    mood: "Mood",
    atmosphere: "Atmosphere",

    sourceImage: "Source Image",
    sourceText:
      "The uploaded image acts as the visual source for the scent reading and note selection.",

    metadata: "Reading Metadata",
    detectedCues: "Detected Cues",
    olfactiveFamily: "Olfactive Family",
    suggestedWear: "Suggested Wear",

    pyramid: "Fragrance Pyramid",
    pyramidTitle: "Layered olfactive structure",
    editableTitle: "Editable olfactive structure",
    pyramidText:
      "Hover over notes to inspect their role, reason, and sensory effect.",
    editableText: "Refine each tier using curated alternatives.",

    topNotes: "Top Notes",
    heartNotes: "Heart Notes",
    baseNotes: "Base Notes",

    noteDetail: "Note Detail",
    selectNote: "Select a note",
    role: "Role",
    why: "Why it appears",
    effect: "Effect",

    draftNaming: "Draft Naming",
    draftNamingText:
      "A provisional composition title generated for the mood and structure of the image.",

    finalizeKicker: "Finalize",
    finalizeTitle: "Ready to lock the composition.",
    finalizeText:
      "Once it feels right, generate a final scent concept view for this composition.",
    finalizeButton: "Finalize Composition",

    finalConcept: "Final Scent Concept",
    finalSource: "Final Source",
    finalPyramid: "Final Pyramid",
    finalReading: "Final Reading",
    backToEditing: "Back to Editing",
    startNew: "Start New Composition",

    uploadError: "Please upload a valid image file.",
    sizeError: "Image must be smaller than 5MB.",
    beforeAnalyzeError: "Please upload a photo before analyzing.",
    genericError: "Something went wrong during analysis.",
  },

  tr: {
    studio: "Yaratım Stüdyosu",
    uploadTitle: "Tek bir görselden kendi kokunu oluştur.",
    uploadText:
      "Bir fotoğraf yükle, Heritier onun ruh hâlini, atmosferini, hafıza katmanlarını ve görsel ipuçlarını yapılandırılmış bir koku kompozisyonuna dönüştürsün.",
    uploadLabel: "Fotoğrafını Yükle",
    uploadHelp:
      "Atmosferi güçlü, duygusal ya da görsel olarak zengin fotoğraflar en iyi sonucu verir — düğün, sis, festival, seyahat, deniz havası, gün batımı, iç mekân, ten, doku ya da dinginlik. En iyi sonuç için 5MB altındaki görselleri yükle.",
    preview: "Önizleme",
    previewEmpty: "Seçtiğin görselin önizlemesi burada görünecek.",
    analyze: "Fotoğrafımı Analiz Et",
    analyzing: "Analiz Ediliyor...",
    reset: "Sıfırla",

    awaitingKicker: "Olfaktif Yorum",
    awaitingTitle: "Görsel bekleniyor.",
    awaitingText:
      "Bir fotoğraf yüklendiğinde bu alan daha editoryal bir koku okumasına dönüşür — atmosfer, hikâye, ipuçları ve katmanlı bir parfüm yapısı.",
    reading: "Okuma",
    readingText: "Görsel atmosferin koku diline çevrilmiş hâli.",
    structure: "Yapı",
    structureText:
      "Üst, kalp ve baz notalarla kurulmuş dengeli bir piramit yapısı.",
    detail: "Detay",
    detailText: "Nota anlamları, duygusal ipuçları ve kullanım önerileri.",

    loadingKicker: "Analiz sürüyor",
    loadingTitle: "Görsel kokuya çevriliyor.",
    loadingText:
      "Atmosfer, ışık, doku, hafıza izleri ve duygusal sıcaklık okunarak olfaktif bir yorum oluşturuluyor.",

    interpretation: "Koku Yorumu",
    refine: "Kompozisyonu Düzenle",
    doneEditing: "Düzenlemeyi Bitir",
    mood: "Ruh Hâli",
    atmosphere: "Atmosfer",

    sourceImage: "Kaynak Görsel",
    sourceText:
      "Yüklenen görsel, koku okuması ve nota seçimi için görsel kaynak olarak kullanılır.",

    metadata: "Yorum Verileri",
    detectedCues: "Algılanan İpuçları",
    olfactiveFamily: "Olfaktif Aile",
    suggestedWear: "Önerilen Kullanım",

    pyramid: "Parfüm Piramidi",
    pyramidTitle: "Katmanlı olfaktif yapı",
    editableTitle: "Düzenlenebilir olfaktif yapı",
    pyramidText:
      "Notaların rolünü, neden seçildiğini ve etkisini görmek için üzerine gel.",
    editableText:
      "Her katmanı seçilmiş alternatiflerle kendi istediğin gibi düzenle.",

    topNotes: "Üst Notalar",
    heartNotes: "Kalp Notalar",
    baseNotes: "Baz Notalar",

    noteDetail: "Nota Detayı",
    selectNote: "Bir nota seç",
    role: "Rolü",
    why: "Neden burada",
    effect: "Etkisi",

    draftNaming: "Taslak İsim",
    draftNamingText:
      "Görselin ruh hâli ve yapısına göre oluşturulmuş geçici kompozisyon adı.",

    finalizeKicker: "Son Dokunuş",
    finalizeTitle: "Kompozisyonu sabitlemeye hazır.",
    finalizeText:
      "İçine sindiyse bu kompozisyon için final koku konsepti görünümünü oluştur.",
    finalizeButton: "Kompozisyonu Tamamla",

    finalConcept: "Final Koku Konsepti",
    finalSource: "Final Kaynak",
    finalPyramid: "Final Piramit",
    finalReading: "Final Yorum",
    backToEditing: "Düzenlemeye Geri Dön",
    startNew: "Yeni Kompozisyon Başlat",

    uploadError: "Lütfen geçerli bir görsel dosyası yükle.",
    sizeError: "Görsel 5MB’den küçük olmalı.",
    beforeAnalyzeError: "Analizden önce lütfen bir fotoğraf yükle.",
    genericError: "Analiz sırasında bir sorun oluştu.",
  },
} as const;

const noteDetails: NoteDetails = {
  "Black Cherry Skin": {
    role: "Dark fruit opening",
    why: "Drawn from warmth, sensuality, and deep evening tones.",
    effect: "Seductive, polished, nocturnal.",
  },
  "Pink Pepper": {
    role: "Sparked brightness",
    why: "Adds lift and tension to an otherwise shadowed profile.",
    effect: "Luminous, vibrant, elegant.",
  },
  Bergamot: {
    role: "Clean citrus structure",
    why: "Balances richness with refinement and freshness.",
    effect: "Crisp, tailored, composed.",
  },
  "Rose Absolute": {
    role: "Velvet floral heart",
    why: "Supports emotional richness and skin intimacy.",
    effect: "Romantic, deep, couture.",
  },
  "Jasmine Petals": {
    role: "Soft floral diffusion",
    why: "Adds glow and breath to the central accord.",
    effect: "Radiant, supple, graceful.",
  },
  "Plum Blossom": {
    role: "Muted fruit-floral bridge",
    why: "Connects dark fruit with floral softness.",
    effect: "Silken, nuanced, intimate.",
  },
  Sandalwood: {
    role: "Creamy woody base",
    why: "Anchors the composition with warmth and longevity.",
    effect: "Soft, luxurious, enveloping.",
  },
  "Amber Resin": {
    role: "Warm resinous body",
    why: "Extends the glow and emotional depth of the scent.",
    effect: "Golden, lasting, sensual.",
  },
  "Velvet Musk": {
    role: "Skin-like finish",
    why: "Creates closeness and a worn, personal feel.",
    effect: "Quiet, intimate, addictive.",
  },
  "Amalfi Lemon": {
    role: "Sunlit citrus opening",
    why: "Inspired by brightness, air, and celebratory energy.",
    effect: "Fresh, luminous, optimistic.",
  },
  Neroli: {
    role: "White floral freshness",
    why: "Bridges citrus lightness with floral sophistication.",
    effect: "Refined, airy, Mediterranean.",
  },
  "Orange Blossom": {
    role: "Ceremonial floral heart",
    why: "Echoes tenderness, elegance, and emotional openness.",
    effect: "Radiant, graceful, occasion-worthy.",
  },
  "White Fig": {
    role: "Soft fruit nuance",
    why: "Adds creamy green warmth to the heart.",
    effect: "Textured, serene, chic.",
  },
  "Jasmine Tea": {
    role: "Transparent floral accord",
    why: "Keeps the heart elegant and diffused.",
    effect: "Clean, luminous, poised.",
  },
  Cedarwood: {
    role: "Dry structural base",
    why: "Provides compositional clarity and architectural shape.",
    effect: "Elegant, dry, polished.",
  },
  Amber: {
    role: "Warm depth",
    why: "Supports emotional resonance and lingering presence.",
    effect: "Soft, glowing, smooth.",
  },
  "Soft Musk": {
    role: "Second-skin finish",
    why: "Makes the composition feel wearable and intimate.",
    effect: "Tender, close, understated.",
  },
  "Pear Skin": {
    role: "Sheer fruity lift",
    why: "Adds cool translucency to the opening.",
    effect: "Delicate, pale, modern.",
  },
  "Violet Leaf": {
    role: "Green airy tension",
    why: "Suggests coolness and quiet movement.",
    effect: "Misty, elegant, restrained.",
  },
  Juniper: {
    role: "Cool aromatic edge",
    why: "Introduces atmospheric clarity.",
    effect: "Fresh, sharp, contemplative.",
  },
  "Iris Veil": {
    role: "Powdered floral body",
    why: "Contributes sophistication and soft distance.",
    effect: "Refined, pale, couture.",
  },
  "Lily Petals": {
    role: "Clean floral texture",
    why: "Keeps the heart translucent rather than dense.",
    effect: "Pure, quiet, graceful.",
  },
  "Tea Rose": {
    role: "Muted rose nuance",
    why: "Adds warmth without overpowering the airy mood.",
    effect: "Gentle, elegant, soft.",
  },
  "Cashmere Wood": {
    role: "Soft woody trail",
    why: "Creates comfort and continuity in the drydown.",
    effect: "Smooth, warm, enveloping.",
  },
  "Grey Amber": {
    role: "Mineral amber depth",
    why: "Echoes cool air and subdued light.",
    effect: "Subtle, modern, atmospheric.",
  },
  "White Musk": {
    role: "Clean skin finish",
    why: "Maintains intimacy and softness through the base.",
    effect: "Quiet, airy, persistent.",
  },
  "Sea Salt": {
    role: "Marine brightness",
    why: "Suggests coastal air and mineral freshness.",
    effect: "Airy, windswept, luminous.",
  },
  "Fig Leaf": {
    role: "Green creamy accent",
    why: "Brings Mediterranean warmth and texture.",
    effect: "Soft, vegetal, elegant.",
  },
  Cardamom: {
    role: "Warm spice accent",
    why: "Adds tension and sophistication.",
    effect: "Refined, modern, magnetic.",
  },
  "Tonka Bean": {
    role: "Velvet sweetness",
    why: "Rounds the base with warmth.",
    effect: "Smooth, enveloping, sensual.",
  },
  Patchouli: {
    role: "Earthy dark structure",
    why: "Deepens the drydown with richness.",
    effect: "Dark, grounded, luxurious.",
  },
};

const tierAlternatives = {
  top: [
    "Black Cherry Skin",
    "Pink Pepper",
    "Bergamot",
    "Amalfi Lemon",
    "Neroli",
    "Pear Skin",
    "Violet Leaf",
    "Juniper",
    "Sea Salt",
    "Fig Leaf",
    "Cardamom",
  ],
  heart: [
    "Rose Absolute",
    "Jasmine Petals",
    "Plum Blossom",
    "Orange Blossom",
    "White Fig",
    "Jasmine Tea",
    "Iris Veil",
    "Lily Petals",
    "Tea Rose",
  ],
  base: [
    "Sandalwood",
    "Amber Resin",
    "Velvet Musk",
    "Cedarwood",
    "Amber",
    "Soft Musk",
    "Cashmere Wood",
    "Grey Amber",
    "White Musk",
    "Tonka Bean",
    "Patchouli",
  ],
};

async function fileToDataUrl(file: File): Promise<string> {
  const imageBitmap = await createImageBitmap(file);

  const maxWidth = 1200;
  const scale = Math.min(1, maxWidth / imageBitmap.width);

  const targetWidth = Math.round(imageBitmap.width * scale);
  const targetHeight = Math.round(imageBitmap.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas context could not be created.");
  }

  ctx.drawImage(imageBitmap, 0, 0, targetWidth, targetHeight);

  return canvas.toDataURL("image/jpeg", 0.72);
}

function NoteChip({
  note,
  onHover,
}: {
  note: string;
  onHover: (note: string) => void;
}) {
  return (
    <button
      type="button"
      data-note={note}
      onMouseEnter={() => onHover(note)}
      onFocus={() => onHover(note)}
      className="group inline-flex items-center justify-center rounded-full border border-[#7a5550]/45 bg-[rgba(255,245,236,0.02)] px-4 py-2.5 text-sm text-[#f2e4d8] transition duration-300 hover:border-[#b98762] hover:bg-[rgba(255,245,236,0.06)] hover:text-[#fff2e7]"
    >
      <span>{note}</span>
    </button>
  );
}

function EditableTier({
  title,
  notes,
  options,
  onChange,
  onHover,
}: {
  title: string;
  notes: string[];
  options: string[];
  onChange: (index: number, value: string) => void;
  onHover: (note: string) => void;
}) {
  return (
    <div className="rounded-[1.8rem] border border-[#6f4740]/45 bg-[rgba(255,245,236,0.03)] px-4 py-5">
      <p className="mb-3 text-center text-[11px] uppercase tracking-[0.26em] text-[#c6a178]">
        {title}
      </p>

      <div className="space-y-3">
        {notes.map((note, index) => (
          <div key={`${title}-${index}`} className="space-y-2">
            <NoteChip note={note} onHover={onHover} />
            <select
              value={note}
              onChange={(e) => onChange(index, e.target.value)}
              onFocus={() => onHover(note)}
              className="w-full rounded-full border border-[#7a5550]/45 bg-[rgba(255,245,236,0.03)] px-4 py-2.5 text-sm text-[#f3e7da] outline-none transition focus:border-[#b98762]"
            >
              {options.map((option) => (
                <option key={option} value={option} className="bg-[#1d0d0e]">
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CreatePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = copy[locale];

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ScentProfile | null>(null);
  const [editableResult, setEditableResult] = useState<ScentProfile | null>(null);
  const [finalizedResult, setFinalizedResult] = useState<ScentProfile | null>(
    null
  );
  const [error, setError] = useState("");
  const [activeNote, setActiveNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showFinalConcept, setShowFinalConcept] = useState(false);

  const hasImage = useMemo(
    () => !!selectedFile && !!previewUrl,
    [selectedFile, previewUrl]
  );

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setError("");
    setResult(null);
    setEditableResult(null);
    setFinalizedResult(null);
    setIsEditing(false);
    setShowFinalConcept(false);

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError(t.uploadError);
      return;
    }

    const maxSizeMb = 5;
    if (file.size > maxSizeMb * 1024 * 1024) {
      setError(t.sizeError);
      return;
    }

    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  }

  async function handleAnalyze() {
    if (!selectedFile) {
      setError(t.beforeAnalyzeError);
      return;
    }

    try {
      setError("");
      setIsAnalyzing(true);
      setResult(null);
      setEditableResult(null);
      setFinalizedResult(null);
      setIsEditing(false);
      setShowFinalConcept(false);

      const imageDataUrl = await fileToDataUrl(selectedFile);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageDataUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Analyze API error:", data);
        setError(
          data?.error || data?.details?.error?.message || t.genericError
        );
        setIsAnalyzing(false);
        return;
      }

      setResult(data);
      setEditableResult(data);
      setFinalizedResult(null);
      setActiveNote(data.topNotes?.[0] || "");
      setIsAnalyzing(false);
    } catch (error) {
      console.error("Analyze request failed:", error);
      setError(t.genericError);
      setIsAnalyzing(false);
    }
  }

  function handleReset() {
    setSelectedFile(null);
    setPreviewUrl("");
    setIsAnalyzing(false);
    setResult(null);
    setEditableResult(null);
    setFinalizedResult(null);
    setError("");
    setActiveNote("");
    setIsEditing(false);
    setShowFinalConcept(false);
  }

  function updateTier(
    tier: "topNotes" | "heartNotes" | "baseNotes",
    index: number,
    value: string
  ) {
    setEditableResult((prev) => {
      if (!prev) return prev;

      const updated = [...prev[tier]];
      updated[index] = value;

      return {
        ...prev,
        [tier]: updated,
      };
    });

    setActiveNote(value);
  }

  function handleFinalizeConcept() {
    if (!editableResult) return;
    setFinalizedResult(editableResult);
    setShowFinalConcept(true);
    setIsEditing(false);
  }

  const shownResult = editableResult ?? result;
  const finalResult = finalizedResult ?? shownResult;

  const activeNoteDetail = noteDetails[activeNote] ?? {
    role: locale === "tr" ? "Olfaktif nota" : "Olfactive note",
    why:
      locale === "tr"
        ? "Görselin ruh hâli ve okumasının bir parçası olarak seçildi."
        : "Selected as part of the mood and visual reading.",
    effect:
      locale === "tr"
        ? "İfadeli, atmosferik ve rafine."
        : "Expressive, atmospheric, refined.",
  };

  return (
    <main className="min-h-screen bg-[#120909] text-[#f3e7da]">
      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="mb-10 flex items-center justify-between border-b border-[#5b2b2d]/35 pb-5">
          <Link
            href="/"
            className="font-[var(--font-heading)] text-3xl tracking-[0.18em] text-[#f4e7db]"
          >
            HERITIER
          </Link>

          <div className="flex items-center gap-4">
            <p className="hidden text-xs uppercase tracking-[0.3em] text-[#c6a178] sm:block">
              {t.studio}
            </p>

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

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2.2rem] border border-[#5b2b2d]/30 bg-[linear-gradient(180deg,rgba(58,18,22,0.88),rgba(18,9,9,0.97))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="mb-8">
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#b9885d]">
                {t.studio}
              </p>
              <h1 className="font-[var(--font-heading)] text-4xl leading-[0.96] text-[#f7eadf] sm:text-5xl">
                {t.uploadTitle}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#d8c0ae]">
                {t.uploadText}
              </p>
            </div>

            <div className="rounded-[1.9rem] border border-[#6a3b3d]/35 bg-[rgba(255,245,236,0.025)] p-5">
              <label
                htmlFor="photo-upload"
                className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#c6a178]"
              >
                {t.uploadLabel}
              </label>

              <div className="rounded-[1.6rem] border border-dashed border-[#8a5a4e]/70 bg-[rgba(255,245,236,0.025)] p-5">
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full cursor-pointer text-sm text-[#e7d3c1] file:mr-4 file:rounded-full file:border-0 file:bg-[#9a6238] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#fff3e5] hover:file:bg-[#b87744]"
                />

                <p className="mt-3 text-sm leading-6 text-[#bda28f]">
                  {t.uploadHelp}
                </p>
              </div>

              {error ? (
                <div className="mt-4 rounded-2xl border border-[#7b3038] bg-[#2a1114] px-4 py-3 text-sm text-[#f2c9c2]">
                  {error}
                </div>
              ) : null}

              {previewUrl ? (
                <div className="mt-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c6a178]">
                    {t.preview}
                  </p>
                  <div className="overflow-hidden rounded-[1.6rem] border border-[#6d3a3e]/35 bg-[#1b0d0f]">
                    <img
                      src={previewUrl}
                      alt="Uploaded preview"
                      className="h-[360px] w-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-6 rounded-[1.6rem] border border-[#6d3a3e]/25 bg-[rgba(255,245,236,0.02)] px-5 py-10 text-center text-sm text-[#bda28f]">
                  {t.previewEmpty}
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="inline-flex items-center justify-center rounded-full bg-[#9a6238] px-6 py-3 text-sm font-medium text-[#fff3e5] transition hover:bg-[#b87744] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isAnalyzing ? t.analyzing : t.analyze}
                </button>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center rounded-full border border-[#7d5850] px-6 py-3 text-sm font-medium text-[#ecd9ca] transition hover:bg-[rgba(255,245,236,0.06)]"
                >
                  {t.reset}
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-[#5b2b2d]/28 bg-[linear-gradient(180deg,rgba(34,11,14,0.96),rgba(18,9,9,0.98))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
            {!isAnalyzing && !shownResult && !showFinalConcept ? (
              <div className="flex min-h-[760px] flex-col justify-between">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#b9885d]">
                    {t.awaitingKicker}
                  </p>
                  <h2 className="font-[var(--font-heading)] text-4xl leading-[0.96] text-[#f7eadf] sm:text-5xl">
                    {t.awaitingTitle}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[#d6beac]">
                    {t.awaitingText}
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <div className="border-t border-[#5b2b2d]/45 pt-5">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                      {t.reading}
                    </p>
                    <p className="text-sm leading-6 text-[#cfb7a5]">
                      {t.readingText}
                    </p>
                  </div>

                  <div className="border-t border-[#5b2b2d]/45 pt-5">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                      {t.structure}
                    </p>
                    <p className="text-sm leading-6 text-[#cfb7a5]">
                      {t.structureText}
                    </p>
                  </div>

                  <div className="border-t border-[#5b2b2d]/45 pt-5">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                      {t.detail}
                    </p>
                    <p className="text-sm leading-6 text-[#cfb7a5]">
                      {t.detailText}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            {isAnalyzing ? (
              <div className="flex min-h-[760px] flex-col items-center justify-center text-center">
                <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#c99567]">
                  {t.loadingKicker}
                </p>

                <div className="relative mb-12 h-[360px] w-[220px]">
                  <div className="scent-vapor">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="absolute left-1/2 top-0 h-16 w-[84px] -translate-x-1/2 rounded-t-[2.8rem] border border-[#9a725f]/80 border-b-0 bg-[rgba(255,245,236,0.04)]" />

                  <div className="bottle-shell absolute left-1/2 top-10 h-[280px] w-[200px] -translate-x-1/2 rounded-b-[4.2rem] rounded-t-[2.6rem] border border-[#9a725f]/80 bg-[linear-gradient(180deg,rgba(255,245,236,0.05),rgba(255,245,236,0.02))]">
                    <div className="bottle-liquid" />
                    <div className="bottle-glow" />
                    <div className="bottle-shine" />
                    <div className="bottle-ring" />
                  </div>
                </div>

                <h2 className="analysis-copy font-[var(--font-heading)] text-5xl leading-[0.94] text-[#f7eadf] sm:text-6xl">
                  {t.loadingTitle}
                </h2>

                <p className="analysis-copy mt-5 max-w-xl text-base leading-8 text-[#d8c1af]">
                  {t.loadingText}
                </p>

                <div className="mt-8 flex gap-3">
                  <span className="scent-orb" />
                  <span className="scent-orb" />
                  <span className="scent-orb" />
                </div>
              </div>
            ) : null}

            {shownResult && !showFinalConcept ? (
              <div className="space-y-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#b9885d]">
                      {t.interpretation}
                    </p>
                    <h2 className="font-[var(--font-heading)] text-4xl leading-[0.96] text-[#f7eadf] sm:text-5xl">
                      {shownResult.title}
                    </h2>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-[#d6beac]">
                      {shownResult.story}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsEditing((prev) => !prev)}
                    className="inline-flex items-center justify-center rounded-full border border-[#b98762]/60 bg-[rgba(255,245,236,0.04)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-[#fff1e4] transition hover:bg-[rgba(255,245,236,0.08)]"
                  >
                    {isEditing ? t.doneEditing : t.refine}
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="border-t border-[#5b2b2d]/45 pt-4">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                      {t.mood}
                    </p>
                    <p className="text-xl text-[#f1e3d6]">{shownResult.mood}</p>
                  </div>

                  <div className="border-t border-[#5b2b2d]/45 pt-4">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                      {t.atmosphere}
                    </p>
                    <p className="text-xl text-[#f1e3d6]">
                      {shownResult.atmosphere}
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.8rem] border border-[#5b2b2d]/35 bg-[rgba(255,245,236,0.02)] p-5">
                    <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c6a178]">
                      {t.sourceImage}
                    </p>
                    <div className="overflow-hidden rounded-[1.35rem] border border-[#68423d]/35 bg-[#1b0d0f]">
                      <img
                        src={previewUrl}
                        alt="Source photograph"
                        className="h-[220px] w-full object-cover"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#ccb3a1]">
                      {t.sourceText}
                    </p>
                  </div>

                  <div className="rounded-[1.8rem] border border-[#5b2b2d]/35 bg-[rgba(255,245,236,0.02)] p-5">
                    <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c6a178]">
                      {t.metadata}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                          {t.detectedCues}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {shownResult.detectedCues.map((cue) => (
                            <span
                              key={cue}
                              className="rounded-full border border-[#725049]/40 px-3 py-2 text-xs text-[#ead8ca]"
                            >
                              {cue}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                          {t.olfactiveFamily}
                        </p>
                        <p className="text-base text-[#f1e3d6]">
                          {shownResult.olfactiveFamily}
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                          {t.suggestedWear}
                        </p>
                        <p className="text-base text-[#f1e3d6]">
                          {shownResult.suggestedWear}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#5b2b2d]/35 bg-[linear-gradient(180deg,rgba(45,14,17,0.7),rgba(20,10,11,0.78))] p-6 sm:p-8">
                  <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#b9885d]">
                        {t.pyramid}
                      </p>
                      <h3 className="font-[var(--font-heading)] text-3xl text-[#f4e7db]">
                        {isEditing ? t.editableTitle : t.pyramidTitle}
                      </h3>
                    </div>
                    <p className="max-w-xs text-sm leading-6 text-[#bfa694]">
                      {isEditing ? t.editableText : t.pyramidText}
                    </p>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
                    {isEditing ? (
                      <div className="flex flex-col gap-4 pt-2">
                        <EditableTier
                          title={t.topNotes}
                          notes={shownResult.topNotes}
                          options={tierAlternatives.top}
                          onChange={(index, value) =>
                            updateTier("topNotes", index, value)
                          }
                          onHover={setActiveNote}
                        />
                        <EditableTier
                          title={t.heartNotes}
                          notes={shownResult.heartNotes}
                          options={tierAlternatives.heart}
                          onChange={(index, value) =>
                            updateTier("heartNotes", index, value)
                          }
                          onHover={setActiveNote}
                        />
                        <EditableTier
                          title={t.baseNotes}
                          notes={shownResult.baseNotes}
                          options={tierAlternatives.base}
                          onChange={(index, value) =>
                            updateTier("baseNotes", index, value)
                          }
                          onHover={setActiveNote}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-4 pt-2">
                        <div className="w-[48%] rounded-[1.6rem] border border-[#6f4740]/45 bg-[rgba(255,245,236,0.025)] px-4 py-5">
                          <p className="mb-3 text-center text-[11px] uppercase tracking-[0.26em] text-[#c6a178]">
                            {t.topNotes}
                          </p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {shownResult.topNotes.map((note) => (
                              <NoteChip
                                key={note}
                                note={note}
                                onHover={setActiveNote}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="w-[72%] rounded-[1.8rem] border border-[#6f4740]/45 bg-[rgba(255,245,236,0.03)] px-4 py-5">
                          <p className="mb-3 text-center text-[11px] uppercase tracking-[0.26em] text-[#c6a178]">
                            {t.heartNotes}
                          </p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {shownResult.heartNotes.map((note) => (
                              <NoteChip
                                key={note}
                                note={note}
                                onHover={setActiveNote}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="w-full rounded-[2rem] border border-[#6f4740]/45 bg-[rgba(255,245,236,0.035)] px-4 py-6">
                          <p className="mb-3 text-center text-[11px] uppercase tracking-[0.26em] text-[#c6a178]">
                            {t.baseNotes}
                          </p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {shownResult.baseNotes.map((note) => (
                              <NoteChip
                                key={note}
                                note={note}
                                onHover={setActiveNote}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="rounded-[1.8rem] border border-[#6d4740]/35 bg-[rgba(255,245,236,0.03)] p-5">
                      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c6a178]">
                        {t.noteDetail}
                      </p>
                      <h4 className="font-[var(--font-heading)] text-3xl text-[#f4e7db]">
                        {activeNote || t.selectNote}
                      </h4>

                      <div className="mt-5 space-y-4">
                        <div>
                          <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                            {t.role}
                          </p>
                          <p className="text-base leading-7 text-[#e7d6c8]">
                            {activeNoteDetail.role}
                          </p>
                        </div>

                        <div>
                          <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                            {t.why}
                          </p>
                          <p className="text-base leading-7 text-[#d4bcaa]">
                            {activeNoteDetail.why}
                          </p>
                        </div>

                        <div>
                          <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                            {t.effect}
                          </p>
                          <p className="text-base leading-7 text-[#d4bcaa]">
                            {activeNoteDetail.effect}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-[1.8rem] border border-[#5b2b2d]/35 bg-[rgba(255,245,236,0.02)] p-5">
                    <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c6a178]">
                      {t.draftNaming}
                    </p>
                    <p className="font-[var(--font-heading)] text-3xl text-[#f4e7db]">
                      {shownResult.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#ccb3a1]">
                      {t.draftNamingText}
                    </p>
                  </div>

                  <div className="rounded-[1.8rem] border border-[#5b2b2d]/35 bg-[linear-gradient(180deg,rgba(92,29,11,0.18),rgba(38,12,15,0.42))] p-5">
                    <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c6a178]">
                      {t.finalizeKicker}
                    </p>
                    <h3 className="font-[var(--font-heading)] text-3xl text-[#f4e7db]">
                      {t.finalizeTitle}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#d5bcaa]">
                      {t.finalizeText}
                    </p>

                    <button
                      onClick={handleFinalizeConcept}
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-[#a5673d] px-6 py-3 text-sm font-medium text-[#fff3e5] transition hover:bg-[#ba7b49]"
                    >
                      {t.finalizeButton}
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {showFinalConcept && finalResult ? (
              <div className="space-y-8">
                <div className="rounded-[2.1rem] border border-[#6a3b3d]/40 bg-[linear-gradient(180deg,rgba(54,16,20,0.94),rgba(19,9,10,0.98))] p-7 sm:p-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#b9885d]">
                    {t.finalConcept}
                  </p>
                  <h2 className="font-[var(--font-heading)] text-5xl leading-[0.95] text-[#f8ece0] sm:text-6xl">
                    {finalResult.title}
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-[#d8c1af]">
                    {finalResult.story}
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.8rem] border border-[#5b2b2d]/35 bg-[rgba(255,245,236,0.02)] p-5">
                    <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c6a178]">
                      {t.finalSource}
                    </p>
                    <div className="overflow-hidden rounded-[1.35rem] border border-[#68423d]/35 bg-[#1b0d0f]">
                      <img
                        src={previewUrl}
                        alt="Source photograph"
                        className="h-[220px] w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.6rem] border border-[#5b2b2d]/35 bg-[rgba(255,245,236,0.02)] p-5">
                      <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                        {t.mood}
                      </p>
                      <p className="text-lg text-[#f1e3d6]">{finalResult.mood}</p>
                    </div>

                    <div className="rounded-[1.6rem] border border-[#5b2b2d]/35 bg-[rgba(255,245,236,0.02)] p-5">
                      <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                        {t.atmosphere}
                      </p>
                      <p className="text-lg text-[#f1e3d6]">
                        {finalResult.atmosphere}
                      </p>
                    </div>

                    <div className="rounded-[1.6rem] border border-[#5b2b2d]/35 bg-[rgba(255,245,236,0.02)] p-5">
                      <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                        {t.olfactiveFamily}
                      </p>
                      <p className="text-lg text-[#f1e3d6]">
                        {finalResult.olfactiveFamily}
                      </p>
                    </div>

                    <div className="rounded-[1.6rem] border border-[#5b2b2d]/35 bg-[rgba(255,245,236,0.02)] p-5">
                      <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#b9885d]">
                        {t.suggestedWear}
                      </p>
                      <p className="text-lg text-[#f1e3d6]">
                        {finalResult.suggestedWear}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#5b2b2d]/35 bg-[linear-gradient(180deg,rgba(45,14,17,0.7),rgba(20,10,11,0.78))] p-6 sm:p-8">
                  <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b9885d]">
                    {t.finalPyramid}
                  </p>

                  <div className="flex flex-col items-center gap-4 pt-2">
                    <div className="w-[48%] rounded-[1.6rem] border border-[#6f4740]/45 bg-[rgba(255,245,236,0.025)] px-4 py-5">
                      <p className="mb-3 text-center text-[11px] uppercase tracking-[0.26em] text-[#c6a178]">
                        {t.topNotes}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {finalResult.topNotes.map((note) => (
                          <span
                            key={note}
                            className="rounded-full border border-[#7a5550]/45 px-4 py-2.5 text-sm text-[#f2e4d8]"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-[72%] rounded-[1.8rem] border border-[#6f4740]/45 bg-[rgba(255,245,236,0.03)] px-4 py-5">
                      <p className="mb-3 text-center text-[11px] uppercase tracking-[0.26em] text-[#c6a178]">
                        {t.heartNotes}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {finalResult.heartNotes.map((note) => (
                          <span
                            key={note}
                            className="rounded-full border border-[#7a5550]/45 px-4 py-2.5 text-sm text-[#f2e4d8]"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-full rounded-[2rem] border border-[#6f4740]/45 bg-[rgba(255,245,236,0.035)] px-4 py-6">
                      <p className="mb-3 text-center text-[11px] uppercase tracking-[0.26em] text-[#c6a178]">
                        {t.baseNotes}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {finalResult.baseNotes.map((note) => (
                          <span
                            key={note}
                            className="rounded-full border border-[#7a5550]/45 px-4 py-2.5 text-sm text-[#f2e4d8]"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.9rem] border border-[#5b2b2d]/35 bg-[rgba(255,245,236,0.02)] p-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c6a178]">
                    {t.finalReading}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {finalResult.detectedCues.map((cue) => (
                      <span
                        key={cue}
                        className="rounded-full border border-[#725049]/40 px-3 py-2 text-xs text-[#ead8ca]"
                      >
                        {cue}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => setShowFinalConcept(false)}
                    className="inline-flex items-center justify-center rounded-full border border-[#7d5850] px-6 py-3 text-sm font-medium text-[#ecd9ca] transition hover:bg-[rgba(255,245,236,0.06)]"
                  >
                    {t.backToEditing}
                  </button>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center rounded-full bg-[#9a6238] px-6 py-3 text-sm font-medium text-[#fff3e5] transition hover:bg-[#b87744]"
                  >
                    {t.startNew}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}