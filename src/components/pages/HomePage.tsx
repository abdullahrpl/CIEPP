import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export function HomePage() {
    const context = useContext(AppContext);
    if (!context) return null;
    const { setCurrentPage } = context;

    return (
        <div className="space-y-10">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center bg-gradient-to-br from-blue-50 to-emerald-50 p-10 border border-blue-200 rounded-card">
                <div>
                    <span className="eyebrow">PROTOTIPE KONSEPTUAL</span>
                    <h1 className="section-title h1 mt-2">
                        Pendidikan inklusif untuk anak rentan, terhubung dengan layanan yang nyata.
                    </h1>
                    <p className="text-base text-slate-600 mt-4 max-w-2xl">
                        CIEPP dirancang bukan sebagai aplikasi baru yang berdiri sendiri, melainkan sebagai penghubung pendidikan, perlindungan anak, layanan sosial, kesehatan, keluarga, dan rujukan lintas sektor.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <button onClick={() => setCurrentPage('lapor')} className="btn-primary">
                            Minta bantuan
                        </button>
                        <button onClick={() => setCurrentPage('layanan')} className="btn-secondary">
                            Lihat alur layanan
                        </button>
                    </div>
                </div>

                <div className="card p-6">
                    <h3 className="text-lg font-semibold mb-4">Siapa yang dibantu?</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Anak jalanan',
                            'Anak tidak sekolah',
                            'Anak berisiko putus sekolah',
                            'Anak dengan disabilitas/ABK',
                            'Anak yang bekerja / rentan pekerja anak',
                            'Anak korban kekerasan / AMPK',
                        ].map((chip) => (
                            <span key={chip} className="chip">
                                {chip}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Journey Section */}
            <div className="mt-12">
                <div className="mb-8">
                    <span className="eyebrow">ALUR UTAMA</span>
                    <h2 className="text-2xl font-bold mt-3">Masalah dulu, fitur kemudian</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {[
                        { num: 1, title: 'Identifikasi', desc: 'Outreach, komunitas, sekolah, pengaduan' },
                        { num: 2, title: 'Asesmen', desc: 'Pendidikan, keluarga, ekonomi, kesehatan, perlindungan' },
                        { num: 3, title: 'Rencana', desc: 'Tujuan, PIC, tenggat, akomodasi' },
                        { num: 4, title: 'Rujukan', desc: 'Diterima, dijadwalkan, dilayani, selesai' },
                        { num: 5, title: 'Keberlanjutan', desc: 'Bertahan belajar, tidak kembali ke risiko' },
                        { num: 6, title: 'Pembelajaran Sistem', desc: 'Outcome, gap layanan, koreksi kebijakan' },
                    ].map((step) => (
                        <div key={step.num} className="card p-3.75">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-soft text-primary font-bold mb-3">
                                {step.num}
                            </div>
                            <strong className="text-sm block">{step.title}</strong>
                            <span className="text-xs text-muted block mt-1.5">{step.desc}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid md:grid-cols-3 gap-7 mt-12">
                <article className="card-accent">
                    <span className="kicker">PENCEGAHAN</span>
                    <h3 className="text-base font-semibold mt-1">Sebelum menjadi kasus</h3>
                    <p className="text-sm text-slate-600 mt-1.5">
                        Edukasi hak anak, pola asuh, pencegahan bullying, perkawinan anak, kekerasan seksual dalam keluarga, keselamatan digital, dan penguatan komunitas.
                    </p>
                    <button onClick={() => setCurrentPage('edukasi')} className="btn-text text-sm mt-3">
                        Buka pusat edukasi →
                    </button>
                </article>

                <article className="card">
                    <span className="kicker">RESPONS LANGSUNG</span>
                    <h3 className="text-base font-semibold mt-1">Ketika pengaduan masuk</h3>
                    <p className="text-sm text-slate-600 mt-1.5">
                        Pengaduan → asesmen keselamatan → tindak lanjut → pendampingan → rujukan → pemulihan → follow-up.
                    </p>
                    <button onClick={() => setCurrentPage('layanan')} className="btn-text text-sm mt-3">
                        Lihat service journey →
                    </button>
                </article>

                <article className="card">
                    <span className="kicker">INKLUSI</span>
                    <h3 className="text-base font-semibold mt-1">Tidak semua anak bisa masuk lewat ponsel</h3>
                    <p className="text-sm text-slate-600 mt-1.5">
                        Mode pendamping, akses luring/hemat kuota, titik akses di kelurahan, PUSPAGA, UPTD PPA, PKBM/SKB/SLB, sekolah, dan komunitas.
                    </p>
                    <button onClick={() => setCurrentPage('inklusi')} className="btn-text text-sm mt-3">
                        Lihat standar akses →
                    </button>
                </article>
            </div>
        </div>
    );
}
