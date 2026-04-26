// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa (Sayaç)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaSayacProps {}

export function AnaSayfaSayac(props: AnaSayfaSayacProps) {
  return (
    <>
      {/*  TopAppBar JSON Translation  */}
      <nav className="docked full-width top-0 no-border transition-colors duration-300 flat no shadows bg-slate-50 dark:bg-[#191c1d] flex justify-between items-center w-full px-6 py-4 z-40 hidden md:flex">
      <div className="text-lg font-bold tracking-widest text-[#191c1d] dark:text-slate-50 uppercase font-headline">
                  Smoke Sayaç
              </div>
      <div className="flex items-center space-x-6">
      <button className="text-[#004ac6] dark:text-[#2563eb] font-['Inter'] tracking-tight hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all scale-95 active:duration-100 flex items-center justify-center p-2 rounded-full">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>history</span>
      </button>
      <button className="text-slate-500 font-normal hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all scale-95 active:duration-100 flex items-center justify-center p-2 rounded-full">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
      </button>
      </div>
      </nav>
      {/*  Main Content Area: The Measured Void  */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
      {/*  Center Card  */}
      <article className="bg-surface-container-lowest w-full max-w-md rounded-lg sm:rounded-xl relative overflow-hidden flex flex-col items-center justify-between p-8 sm:p-12 min-h-[500px]">
      {/*  Ghost Border Fallback  */}
      <div className="absolute inset-0 rounded-lg sm:rounded-xl border border-outline-variant opacity-15 pointer-events-none"></div>
      {/*  Top Asymmetric Reset Action  */}
      <div className="w-full flex justify-end">
      <button aria-label="Sıfırla" className="text-secondary hover:text-on-surface-variant transition-colors flex items-center space-x-2 text-sm font-medium tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-2">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'wght' 300"}}>refresh</span>
      <span className="uppercase tracking-wider text-xs">Sıfırla</span>
      </button>
      </div>
      {/*  Counter Hero (The Anchor)  */}
      <div className="flex-grow flex flex-col items-center justify-center py-16">
      <h2 className="text-xs sm:text-sm font-semibold tracking-[0.1em] text-secondary uppercase mb-4 text-center">Toplam</h2>
      <div className="text-[72px] sm:text-[96px] font-bold leading-none tracking-[-0.04em] text-on-surface font-display selection:bg-transparent">
                          42
                      </div>
      </div>
      {/*  Controls Deck (The Lightness)  */}
      <div className="w-full flex justify-center items-center gap-4 sm:gap-6 mt-8">
      {/*  Azalt (Secondary)  */}
      <button aria-label="Miktarı Azalt" className="bg-secondary-container text-on-secondary-container h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center hover:bg-surface-variant transition-colors active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary">
      <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'wght' 300"}}>remove</span>
      </button>
      {/*  Artır (Primary with Glass Gradient and Ambient Shadow)  */}
      <button aria-label="Miktarı Artır" className="glass-gradient ambient-shadow text-on-primary h-20 w-20 sm:h-24 sm:w-24 rounded-full flex items-center justify-center hover:opacity-90 transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-primary">
      <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'wght' 300"}}>add</span>
      </button>
      </div>
      </article>
      </main>
      {/*  BottomNavBar JSON Translation (Mobile Only)  */}
      <nav className="bg-slate-50/80 dark:bg-[#191c1d]/80 backdrop-blur-xl fixed bottom-0 w-full z-50 border-t border-slate-200/20 dark:border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 md:hidden">
      {/*  Active Tab: Sayaç  */}
      <a className="flex flex-col items-center justify-center text-[#004ac6] dark:text-[#2563eb] font-bold text-[10px] tracking-[0.1em] uppercase font-['Inter'] hover:opacity-80 transition-opacity tap-highlight-none active:scale-90 transition-transform w-1/3" href="#">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>counter_1</span>
      <span>Sayaç</span>
      </a>
      {/*  Inactive Tab: Geçmiş  */}
      <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 font-normal text-[10px] tracking-[0.1em] uppercase font-['Inter'] hover:opacity-80 transition-opacity tap-highlight-none active:scale-90 transition-transform w-1/3" href="#">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 0"}}>history</span>
      <span>Geçmiş</span>
      </a>
      {/*  Inactive Tab: Hedefler  */}
      <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 font-normal text-[10px] tracking-[0.1em] uppercase font-['Inter'] hover:opacity-80 transition-opacity tap-highlight-none active:scale-90 transition-transform w-1/3" href="#">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 0"}}>track_changes</span>
      <span>Hedefler</span>
      </a>
      </nav>
    </>
  );
}
