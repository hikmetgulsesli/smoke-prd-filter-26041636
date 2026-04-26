// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HataDurumuProps {}

export function HataDurumu(props: HataDurumuProps) {
  return (
    <>
      {/*  The Measured Void Background  */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-container-low via-surface to-surface-bright -z-10"></div>
      {/*  Error Card / Artifact  */}
      <main className="relative w-full max-w-sm px-6">
      <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(186,26,26,0.05)] border border-outline-variant/15 p-8 flex flex-col items-center text-center">
      {/*  Error Icon (Floating)  */}
      <div className="mb-8 p-4 rounded-full bg-error-container/50 inline-flex items-center justify-center">
      <span className="material-symbols-outlined text-error text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>error</span>
      </div>
      {/*  Value / Error Display (The Hero)  */}
      <div className="mb-4 text-error font-display font-bold tracking-tight text-3xl">
                      --
                  </div>
      {/*  Error Message (The Label)  */}
      <p className="font-label text-error text-sm tracking-[0.1em] uppercase mb-12">
                      localStorage hatası oluştu.<br/ />Veriler kaydedilemiyor.
                  </p>
      {/*  Actions (Control Deck)  */}
      <div className="flex flex-col gap-4 w-full mt-4">
      <button className="w-full bg-primary-container text-on-primary-container font-headline font-medium text-lg py-4 rounded-lg shadow-[0_10px_20px_rgba(0,74,198,0.05)] bg-gradient-to-br from-primary-container to-primary transition-transform active:scale-[0.98]">
                          Tekrar Dene
                      </button>
      <button className="w-full bg-transparent text-secondary font-headline text-sm py-3 flex items-center justify-center gap-2 hover:bg-surface-container-low rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[18px]">home</span>
                          Ana Ekran
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
