// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Bilgi Mesajı (Toast)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BilgiMesajiToastProps {}

export function BilgiMesajiToast(props: BilgiMesajiToastProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="bg-slate-50 dark:bg-[#191c1d] text-[#004ac6] dark:text-[#2563eb] font-['Inter'] tracking-tight docked full-width top-0 no-border transition-colors duration-300 flat no shadows flex justify-between items-center w-full px-6 py-4 fixed z-40">
      <div className="text-lg font-bold tracking-widest text-[#191c1d] dark:text-slate-50 uppercase">
                  Smoke Sayaç
              </div>
      <div className="flex items-center space-x-4">
      <button className="hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all p-2 rounded-full scale-95 active:duration-100">
      <span className="material-symbols-outlined" data-icon="history">history</span>
      </button>
      <button className="hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all p-2 rounded-full scale-95 active:duration-100">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </header>
      {/*  Main Canvas  */}
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-32 px-6 relative z-10">
      {/*  Toast Notification (Absolute positioned relative to main content area for demo)  */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-on-surface text-surface py-3 px-6 rounded-full flex items-center space-x-3 shadow-lg max-w-sm w-full mx-4 pointer-events-auto">
      <span className="material-symbols-outlined text-surface-tint" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span className="font-body text-sm font-medium tracking-wide">Sayaç sıfırlandı</span>
      </div>
      </div>
      {/*  The Hero Counter area  */}
      <div className="flex flex-col items-center mb-16 relative">
      <h2 className="text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 font-label">BUGÜN</h2>
      <div className="text-[72px] font-bold leading-none tracking-[-0.04em] text-on-surface">
                      0
                  </div>
      </div>
      {/*  Interaction Controls (Elevated Surface)  */}
      <div className="bg-surface-container-low w-full max-w-md rounded-2xl p-8 flex flex-col items-center space-y-8 relative">
      {/*  Reset Button (Asymmetric placement as per guidelines)  */}
      <button aria-label="Sıfırla" className="absolute top-6 right-6 text-secondary hover:bg-surface-variant p-2 rounded-full transition-colors flex items-center justify-center group">
      <span className="material-symbols-outlined text-[20px] group-hover:rotate-180 transition-transform duration-300" data-icon="restart_alt">restart_alt</span>
      </button>
      <div className="w-full flex justify-center items-center space-x-6 mt-8">
      {/*  Decrement Button  */}
      <button aria-label="Azalt" className="bg-secondary-container text-on-secondary-container rounded-lg p-4 w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity active:scale-95">
      <span className="material-symbols-outlined text-[28px]" data-icon="remove">remove</span>
      </button>
      {/*  Increment Button (Primary CTA)  */}
      <button aria-label="Artır" className="bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-lg p-6 w-24 h-24 flex items-center justify-center hover:opacity-90 transition-opacity active:scale-95 shadow-[0_20px_40px_rgba(0,74,198,0.08)]">
      <span className="material-symbols-outlined text-[40px]" data-icon="add">add</span>
      </button>
      </div>
      <div className="text-center w-full">
      <span className="text-xs text-on-surface-variant font-label uppercase tracking-widest block mb-2">Miktarı Artır</span>
      </div>
      </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="bg-slate-50/80 dark:bg-[#191c1d]/80 backdrop-blur-xl text-[#004ac6] dark:text-[#2563eb] text-[10px] font-medium tracking-[0.1em] uppercase font-['Inter'] fixed bottom-0 w-full z-50 border-t border-slate-200/20 dark:border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 md:hidden">
      <a className="flex flex-col items-center justify-center text-[#004ac6] dark:text-[#2563eb] font-bold hover:opacity-80 transition-opacity tap-highlight-none active:scale-90 transition-transform w-16 h-12" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="counter" style={{fontVariationSettings: "'FILL' 1"}}>counter_1</span>
      <span>Sayaç</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 hover:opacity-80 transition-opacity tap-highlight-none active:scale-90 transition-transform w-16 h-12" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="history">history</span>
      <span>Geçmiş</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 hover:opacity-80 transition-opacity tap-highlight-none active:scale-90 transition-transform w-16 h-12" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="track_changes">track_changes</span>
      <span>Hedefler</span>
      </a>
      </nav>
    </>
  );
}
