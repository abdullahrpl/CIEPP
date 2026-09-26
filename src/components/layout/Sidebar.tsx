import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { PageId } from '../../types';

const navItems: Array<{ id: PageId; label: string }> = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'edukasi', label: 'Edukasi & Pencegahan' },
    { id: 'layanan', label: 'Layanan & Rujukan' },
    { id: 'anjal', label: 'Anak Jalanan & Pekerja Anak' },
    { id: 'inklusi', label: 'Pendidikan Inklusif / ABK' },
    { id: 'komunitas', label: 'PATBM & Jejaring Desa' },
    { id: 'lapor', label: 'Pengaduan / Permintaan Bantuan' },
    { id: 'data', label: 'Dashboard Data' },
    { id: 'internal', label: 'Ruang Petugas' },
    { id: 'mitra', label: 'Mitra & MoU' },
    { id: 'tentang', label: 'Tentang & Tata Kelola' },
];

export function Sidebar() {
    const context = useContext(AppContext);
    if (!context) return null;

    const { currentPage, setCurrentPage, highContrast } = context;

    return (
        <aside className={`fixed left-0 top-[68px] w-[250px] h-[calc(100vh-68px)] border-r ${highContrast ? 'bg-slate-900 border-slate-700' : 'bg-blue-50 border-line'
            } hidden md:flex md:flex-col px-3 py-6 overflow-y-auto transition-colors`}>
            <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setCurrentPage(item.id)}
                        className={`text-left px-4 py-3 rounded-[10px] transition-all text-sm ${currentPage === item.id
                            ? highContrast
                                ? 'bg-slate-700 text-blue-300 font-bold'
                                : 'bg-soft text-primary font-bold'
                            : highContrast
                                ? 'text-slate-300 hover:bg-slate-700'
                                : 'text-slate-700 hover:bg-soft'
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
            <div className={`mt-auto pt-6 px-2 py-4 rounded-[12px] text-xs ${highContrast
                    ? 'bg-slate-800 text-slate-200 border border-slate-700'
                    : 'bg-emerald-50 text-emerald-900'
                }`}>
                <strong className="block mb-1">Prinsip</strong>
                <span className={`block ${highContrast ? 'text-slate-300' : 'text-emerald-800'}`}>
                    Satu anak • satu rencana • satu jejak layanan
                </span>
            </div>
        </aside>
    );
}
