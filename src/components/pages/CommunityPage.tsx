import React from 'react';

export function CommunityPage() {
    return (
        <div className="space-y-6">
            <div>
                <span className="eyebrow">PENCEGAHAN BERBASIS KOMUNITAS</span>
                <h1 className="section-title h1 mt-2">PATBM & Jejaring Kelurahan/Desa</h1>
                <p className="text-slate-600 mt-1">Kolaborasi warga untuk mendeteksi risiko, memberi edukasi, dan menghubungkan keluarga ke layanan formal.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <article className="card">
                    <h3 className="text-base font-semibold mb-3">Struktur contoh PATBM</h3>
                    <dl className="space-y-3">
                        <div>
                            <dt className="font-semibold text-sm">Pembina</dt>
                            <dd className="text-xs text-muted mt-1">Kepala desa/lurah sesuai konteks lokal</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-sm">Anggota</dt>
                            <dd className="text-xs text-muted mt-1">Kader, sukarelawan, PKK, Posyandu, tokoh masyarakat, tokoh agama</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-sm">Tugas</dt>
                            <dd className="text-xs text-muted mt-1">Sosialisasi hak anak, pencegahan bullying, deteksi risiko, dan rujukan</dd>
                        </div>
                    </dl>
                </article>

                <article className="card">
                    <h3 className="text-base font-semibold mb-3">Ruang Bersama Indonesia / komunitas</h3>
                    <p className="text-sm text-slate-600 mb-3">
                        Kolaborasi lintas peran di kelurahan/desa: literasi, penguatan ekonomi perempuan, pola asuh, hak bermain anak, taman baca, dan praktik budaya lokal positif.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Kampung Literasi', 'Taman Baca', 'Pemberdayaan Perempuan', 'Pola Asuh', 'Hak Bermain'].map((item) => (
                            <span key={item} className="chip text-xs">{item}</span>
                        ))}
                    </div>
                </article>
            </div>

            <div className="callout-warning">
                <strong className="text-sm block">Catatan validasi:</strong>
                <p className="text-xs mt-1">Istilah "3M" pada catatan lapangan belum memiliki kepanjangan yang dapat diverifikasi dari bahan terlampir. Jangan dipublikasikan sebelum dikonfirmasi.</p>
            </div>
        </div>
    );
}
