import React from 'react';

export function ServicePage() {
    const timelineItems = [
        { num: 1, title: 'Pengaduan / penemuan', desc: 'UPTD PPA, SAPA/SIMFONI, sekolah, PATBM, komunitas, kelurahan/desa, petugas lapangan.' },
        { num: 2, title: 'Triage keselamatan', desc: 'Apakah ada risiko segera? Jika ya, respons darurat tidak menunggu alur administrasi biasa.' },
        { num: 3, title: 'Asesmen holistik', desc: 'Keselamatan, pendidikan, kesehatan, disabilitas, pengasuhan, psikososial, ekonomi keluarga, dokumen, dan potensi eksploitasi.' },
        { num: 4, title: 'Rencana layanan individual', desc: 'Satu rencana, satu PIC utama, banyak layanan pendukung bila diperlukan.' },
        { num: 5, title: 'Rujukan aktif', desc: 'Status: dibuat → diterima → dijadwalkan → layanan dimulai → selesai / perlu eskalasi.' },
        { num: 6, title: 'Follow-up & closure', desc: 'Kasus tidak ditutup hanya karena anak "sudah dirujuk". Pastikan hak, layanan, dan pendidikan berlanjut.' },
    ];

    const partners = [
        { name: 'UPTD PPA', desc: 'Pengaduan, asesmen kasus, tindak lanjut, pendampingan' },
        { name: 'Dinas Sosial', desc: 'Anak jalanan/PMKS, dukungan sosial, penjangkauan dan rujukan' },
        { name: 'Pendidikan', desc: 'Sekolah inklusif, SLB, PKBM/SKB, reintegrasi & keberlanjutan belajar' },
        { name: 'Kesehatan/RSUD', desc: 'Layanan medis, visum sesuai kebutuhan, kesehatan jiwa' },
        { name: 'Polisi / Bapas / Kejati / Kemenkumham', desc: 'Proses hukum sesuai kewenangan, anak pelaku/korban, diversi/restorative justice' },
        { name: 'PUSPAGA / keluarga', desc: 'Konseling, konsultasi, pengasuhan, dukungan keluarga dan rujukan' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <span className="eyebrow">SERVICE JOURNEY</span>
                <h1 className="section-title h1 mt-2">Layanan & Rujukan</h1>
                <p className="text-slate-600 mt-1">
                    Tujuannya bukan "sudah dirujuk", tetapi <strong>anak benar-benar menerima layanan</strong>.
                </p>
            </div>

            {/* Timeline */}
            <div className="space-y-0 border border-line rounded-card overflow-hidden">
                {timelineItems.map((item, idx) => (
                    <div key={idx} className={`grid grid-cols-[42px_1fr] gap-3 p-4 ${idx < timelineItems.length - 1 ? 'border-b border-line' : ''}`}>
                        <div className="flex items-center justify-center w-8.5 h-8.5 rounded-full bg-primary text-white font-bold flex-shrink-0">
                            {item.num}
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">{item.title}</h3>
                            <p className="text-xs text-muted mt-1.5">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Partners Grid */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
                {partners.map((partner, idx) => (
                    <div key={idx} className="card">
                        <strong className="text-sm block">{partner.name}</strong>
                        <span className="text-xs text-muted block mt-1.5">{partner.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
