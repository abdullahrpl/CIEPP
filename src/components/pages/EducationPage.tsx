import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export function EducationPage() {
    const context = useContext(AppContext);
    if (!context) return null;

    const modules = [
        { tag: 'Hak Anak', title: 'Kenali hak anak sehari-hari', desc: 'Pendidikan, kesehatan, pengasuhan, bermain, perlindungan, partisipasi, identitas, dan layanan ketika anak berada dalam risiko.' },
        { tag: 'Keluarga', title: 'Pola asuh positif & relasi sehat', desc: 'Komunikasi, kedekatan emosional, pengawasan, disiplin tanpa kekerasan, dan tanda anak membutuhkan bantuan.' },
        { tag: 'Pencegahan kekerasan', title: 'Kekerasan seksual dalam keluarga', desc: 'Edukasi batas tubuh, rasa aman, cara meminta bantuan, perlindungan korban, dan rujukan profesional.' },
        { tag: 'Perkawinan Anak', title: 'Pencegahan perkawinan dini', desc: 'Materi untuk keluarga, sekolah, tokoh agama, Kemenag, kelurahan/desa, dan jejaring perlindungan anak.' },
        { tag: 'Bullying', title: '3 lapis pencegahan bullying', desc: 'Kenali tanda, hentikan normalisasi, lindungi pelapor/korban, dan pastikan tindak lanjut sekolah serta layanan.' },
        { tag: 'Ruang Digital', title: 'Aman dari eksploitasi & manipulasi daring', desc: 'Grooming, VCS berisiko, ancaman/pemaksaan untuk menyakiti diri, konten seksual eksploitatif, privasi.' },
        { tag: 'NAPZA', title: 'Ketahanan keluarga & pencegahan NAPZA', desc: 'Edukasi risiko, penguatan keluarga, jalur konsultasi, serta rujukan ke mitra yang memiliki mandat.' },
        { tag: 'Kampung/Desa', title: 'Kampung literasi & ruang belajar', desc: 'Taman baca, aktivitas literasi, hak bermain, penguatan ekonomi perempuan, pola asuh, dan praktik budaya lokal positif.' },
        { tag: 'Admin', title: 'Konten yang perlu divalidasi', desc: 'Istilah "3M", daftar resmi 15 kategori AMPK, serta detail regulasi lokal dimasukkan setelah diverifikasi.' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <span className="eyebrow">PENCEGAHAN</span>
                <h1 className="section-title h1 mt-3">Edukasi & Pencegahan</h1>
                <p className="text-slate-600 mt-2">
                    Konten untuk keluarga, anak, komunitas, sekolah, relawan, tokoh masyarakat dan tokoh agama.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-7">
                {modules.map((module, idx) => (
                    <article key={idx} className={idx === 8 ? 'card-muted' : 'card'}>
                        <span className="tag">{module.tag}</span>
                        <h3 className="text-base font-semibold mt-2">{module.title}</h3>
                        <p className="text-sm text-slate-600 mt-1.5">{module.desc}</p>
                        <button className="btn-text text-sm mt-3">Baca modul →</button>
                    </article>
                ))}
            </div>
        </div>
    );
}
