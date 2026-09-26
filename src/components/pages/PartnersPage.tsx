import React from 'react';

export function PartnersPage() {
    const partners = [
        { name: 'Dinas Sosial', desc: 'Penanganan anak jalanan/PMKS, penjangkauan, dukungan sosial', type: 'Rujukan operasional' },
        { name: 'BNN', desc: 'Edukasi/pencegahan NAPZA dan rujukan sesuai mandat', type: 'MoU — verifikasi detail' },
        { name: 'Kementerian Agama', desc: 'Pencegahan perkawinan anak, jejaring tokoh agama/pendidikan keagamaan', type: 'MoU — verifikasi detail' },
        { name: 'Kemenkumham', desc: 'Dukungan lintas sektor sesuai kewenangan', type: 'MoU — verifikasi detail' },
        { name: 'Kejaksaan Tinggi', desc: 'Koordinasi proses hukum sesuai kewenangan', type: 'MoU — verifikasi detail' },
        { name: 'Polisi / Bapas', desc: 'Laporan polisi, pendampingan anak, diversi/restorative justice sesuai tupoksi', type: 'Rujukan kasus' },
        { name: 'RSUD / Dinas Kesehatan', desc: 'Medis, visum, kesehatan jiwa, rujukan profesional', type: 'Rujukan layanan' },
        { name: 'PUSPAGA', desc: 'Konsultasi, konseling, pengasuhan, penjangkauan, rujukan', type: 'Preventif & keluarga' },
        { name: 'PATBM / Forum Anak / Komunitas', desc: 'Edukasi, deteksi risiko, partisipasi anak, penghubung ke layanan formal', type: 'Jejaring komunitas' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <span className="eyebrow">JEJARING</span>
                <h1 className="section-title h1 mt-2">Mitra & MoU</h1>
                <p className="text-slate-600 mt-1">Konfigurasi mitra berdasarkan mandat dan jalur rujukan. Detail legal/nomor MoU diisi admin setelah verifikasi.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                {partners.map((partner, idx) => (
                    <article key={idx} className="card p-4.5">
                        <strong className="text-sm block">{partner.name}</strong>
                        <span className="text-xs text-muted block mt-1.5">{partner.desc}</span>
                        <em className="text-xs text-primary block mt-2 not-italic">{partner.type}</em>
                    </article>
                ))}
            </div>
        </div>
    );
}
