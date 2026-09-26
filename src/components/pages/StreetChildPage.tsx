import React from 'react';

export function StreetChildPage() {
    return (
        <div className="space-y-6">
            <div>
                <span className="eyebrow">JALUR KHUSUS</span>
                <h1 className="section-title h1 mt-2">Anak Jalanan & Risiko Pekerja Anak</h1>
                <p className="text-slate-600 mt-1">Hindari anak "terlempar" antarinstansi hanya karena kategori datanya berbeda.</p>
            </div>

            <div className="callout-warning">
                <strong className="text-sm block">Diagnosis sistem:</strong>
                <p className="text-xs mt-1">
                    Anak jalanan dapat tercatat sebagai PMKS pada Dinas Sosial, sementara indikator "anak bekerja" pada sistem lain dapat menunjukkan angka berbeda. Platform harus menghubungkan kategori dan trajectory anak, bukan memaksakan satu label.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <article className="card">
                    <h3 className="text-base font-semibold mb-3">Ketika anak ditemukan di ruang publik</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
                        <li>Verifikasi keselamatan dan kebutuhan segera.</li>
                        <li>Rujuk penanganan anak jalanan ke Dinas Sosial sesuai mandat.</li>
                        <li>Ases hak anak: masih bersekolah? akses kesehatan? pengasuhan? identitas?</li>
                        <li>Jika ada indikasi bekerja/eksploitasi, lakukan human review dan koordinasi lintas sektor.</li>
                        <li>Hubungkan kembali ke pendidikan formal/nonformal yang realistis.</li>
                        <li>Pastikan dukungan keluarga agar anak tidak kembali ke situasi yang sama.</li>
                    </ol>
                </article>

                <article className="card">
                    <h3 className="text-base font-semibold mb-3">Yang harus dicatat — data minimum</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {['ID kasus pseudonim', 'Rentang usia', 'Status pendidikan', 'Kebutuhan dukungan', 'Risiko keselamatan', 'Status rujukan', 'PIC', 'Follow-up'].map((item) => (
                            <span key={item} className="chip text-xs">{item}</span>
                        ))}
                    </div>
                    <p className="text-xs text-muted">Tidak menyimpan lokasi presisi, detail eksploitasi, atau identitas sensitif secara default pada tampilan umum.</p>
                </article>
            </div>
        </div>
    );
}
