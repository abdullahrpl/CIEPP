import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { PageId } from '../../types';

export function Topbar() {
    const context = useContext(AppContext);
    if (!context) return null;

    const { fontLarge, setFontLarge, highContrast, setHighContrast, setCurrentPage } = context;

    return (
        <header className="sticky top-0 z-20 flex justify-between items-center px-8 py-4 bg-white/96 border-b border-line backdrop-blur-[10px]">
            <div className="flex gap-3.5 items-center">
                <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[13px] bg-gradient-to-br from-primary to-accent text-white font-bold text-lg">
                    C
                </div>
                <div>
                    <strong className="block text-sm font-semibold">CIEPP Banten</strong>
                    <span className="block text-xs text-muted">Dummy Platform • Pendidikan Inklusif & Perlindungan Anak</span>
                </div>
            </div>

            <div className="flex gap-3 items-center">
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
