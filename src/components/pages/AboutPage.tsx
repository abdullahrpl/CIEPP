import React from 'react';

export function AboutPage() {
    return (
        <div className="space-y-6">
            <div>
                <span className="eyebrow">PRINSIP DESAIN</span>
                <h1 className="section-title h1 mt-2">Tentang, Tata Kelola & Guardrails</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <article className="card">
                    <h3 className="text-base font-semibold mb-3">Yang platform lakukan</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>Menghubungkan intake, asesmen, rencana, rujukan, pendidikan dan follow-up.</span>
                        </li>
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>Menampilkan siapa PIC dan apa status layanan.</span>
                        </li>
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>Menyediakan konten pencegahan dan akses bantuan.</span>
                        </li>
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>Menyajikan dashboard outcome agregat.</span>
                        </li>
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>Mendukung mode aksesibilitas dan assisted access.</span>
                        </li>
                    </ul>
                </article>

                <article className="card">
                    <h3 className="text-base font-semibold mb-3">Yang platform tidak boleh lakukan</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>Menjadi database baru yang menduplikasi semua sistem.</span>
                        </li>
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>Membuka identitas/riwayat sensitif ke semua instansi.</span>
                        </li>
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>Menyimpan lokasi presisi anak secara default.</span>
                        </li>
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>Menentukan "anak pekerja", "korban", atau "pelaku" hanya dari algoritma.</span>
                        </li>
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>Mengganti keputusan profesional, hukum, atau safeguarding.</span>
                        </li>
                    </ul>
                </article>

                <article className="card">
                    <h3 className="text-base font-semibold mb-3">Peran tata kelola</h3>
                    <dl className="space-y-3 text-sm">
                        <div>
                            <dt className="font-semibold">Policy owner</dt>
                            <dd className="text-xs text-muted mt-1">Menetapkan tujuan, SOP, indikator, dan akuntabilitas</dd>
                        </div>
                        <div>
                            <dt className="font-semibold">Case-management lead</dt>
                            <dd className="text-xs text-muted mt-1">Menjaga satu case trail sampai layanan selesai</dd>
                        </div>
                        <div>
                            <dt className="font-semibold">Data steward</dt>
                            <dd className="text-xs text-muted mt-1">Definisi data, akses, kualitas, retensi, audit</dd>
                        </div>
                        <div>
                            <dt className="font-semibold">Technical owner</dt>
                            <dd className="text-xs text-muted mt-1">Keamanan, integrasi, operasi teknis</dd>
                        </div>
                    </dl>
                </article>

                <article className="card">
                    <h3 className="text-base font-semibold mb-3">Privasi anak sejak awal</h3>
                    <p className="text-sm text-slate-700 mb-3">
                        Gunakan data minimum, privasi tinggi secara baku, persetujuan sesuai usia dan hukum, role-based access, log akses, retensi terbatas, serta mekanisme koreksi/penghapusan yang sah.
                    </p>
                    <p className="text-xs text-muted">Catatan: detail implementasi legal harus ditinjau oleh unit hukum dan perlindungan data sebelum produksi.</p>
                </article>
            </div>

            <div className="callout">
                <strong className="text-sm block">Nama kerja:</strong>
                <p className="text-xs text-slate-700 mt-1">
                    CIEPP — Child-Inclusive Education and Protection Platform. Nama publik dapat diubah setelah co-design dengan anak, keluarga, pemerintah, dan organisasi masyarakat sipil.
                </p>
            </div>
        </div>
    );
}
