import React from 'react';

export function InclusionPage() {
    const items = [
        { title: 'Akses visual', desc: 'Screen reader, struktur heading, teks besar, kontras tinggi, tidak bergantung pada warna.' },
        { title: 'Akses pendengaran', desc: 'Caption, transkrip, media visual yang jelas, dan opsi bahasa isyarat bila tersedia.' },
        { title: 'Akses kognitif', desc: 'Bahasa sederhana, simbol/gambar, langkah singkat, bantuan pendamping.' },
        { title: 'Akses motorik', desc: 'Target klik besar, navigasi keyboard, waktu pengisian fleksibel.' },
        { title: 'Akses konektivitas', desc: 'Mode hemat kuota, formulir singkat, sinkronisasi tertunda, bantuan petugas.' },
        { title: 'Reasonable accommodation', desc: 'Catat kebutuhan akomodasi dan siapa yang bertanggung jawab memenuhinya di sekolah/layanan.' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <span className="eyebrow">ACCESSIBILITY BY DEFAULT</span>
                <h1 className="section-title h1 mt-2">Pendidikan Inklusif / Anak Berkebutuhan Khusus</h1>
                <p className="text-slate-600 mt-1">Solusi digital tidak boleh menciptakan eksklusi baru.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                {items.map((item, idx) => (
                    <article key={idx} className="card">
                        <h3 className="text-base font-semibold">{item.title}</h3>
                        <p className="text-sm text-slate-600 mt-1.5">{item.desc}</p>
                    </article>
                ))}
            </div>

            <div className="callout">
                <strong className="text-sm block">Prinsip desain:</strong>
                <p className="text-xs text-slate-700 mt-1">digital bila berguna, berbantuan bila perlu, luring bila tidak terhindarkan.</p>
            </div>
        </div>
    );
}
