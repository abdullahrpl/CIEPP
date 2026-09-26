import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { PageId } from '../../types';

export function Topbar() {
    const context = useContext(AppContext);
    if (!context) return null;

    const { fontLarge, setFontLarge, highContrast, setHighContrast, setCurrentPage } = context;

    return (
        <header className="topbar sticky top-0 z-20 flex flex-wrap justify-between gap-3 items-center px-4 sm:px-6 py-3 bg-white/96 border-b border-line backdrop-blur-[10px]">
            <div className="flex min-w-0 gap-3 items-center">
                <div className="flex shrink-0 items-center justify-center w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-[13px] bg-gradient-to-br from-primary to-accent text-white font-bold text-lg">
                    C
                </div>
                <div>
                    <strong className="block text-sm font-semibold">CIEPP Banten</strong>
                    <span className="hidden sm:block text-xs text-muted">Dummy Platform • Pendidikan Inklusif & Perlindungan Anak</span>
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <button
                    onClick={() => setFontLarge(!fontLarge)}
                    className="btn-ghost text-sm"
                    aria-label="Perbesar teks"
                >
                    {fontLarge ? 'A−' : 'A+'}
                </button>
                <button
                    onClick={() => setHighContrast(!highContrast)}
                    className="btn-ghost text-sm"
                    aria-label="Ubah kontras"
                >
                    Kontras
                </button>
                <button
                    onClick={() => setCurrentPage('lapor')}
                    className="btn-primary text-sm"
                >
                    Butuh Bantuan
                </button>
            </div>
        </header>
    );
}
