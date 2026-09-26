import React, { useState } from 'react';

export function DataPage() {
    const [selectedRegion, setSelectedRegion] = useState('Kota Tangerang Selatan');

    const regions = [
        { name: 'Kota Tangerang Selatan', cases: 334 },
        { name: 'Kab. Tangerang', cases: 321 },
        { name: 'Kota Tangerang', cases: 276 },
    ];

    return (
        <div className="space-y-6">
            <div>
                <span className="eyebrow">DASHBOARD DEMO</span>
                <h1 className="section-title h1 mt-2">Snapshot Data Perlindungan Anak</h1>
                <p className="text-slate-600 mt-1">Data agregat untuk pengambilan keputusan. Bukan daftar kasus individual.</p>
                <span className="inline-block mt-3 px-2.5 py-1.5 text-xs font-semibold bg-emerald-50 text-emerald-900 rounded-full">
                    SIMFONI PPA • file 19 Jan 2026 • tahun data 2025
                </span>
            </div>

            {/* KPI Cards */}
            <div className="grid md:grid-cols-4 gap-3.5">
                {[
                    { label: 'Kasus perempuan & anak', value: '1.442', note: 'Banten, agregat 2025' },
                    { label: 'Total korban', value: '1.544', note: 'Perempuan + laki-laki' },
                    { label: 'Korban anak', value: '997', note: '≈64,6% dari seluruh korban' },
                    { label: 'Kasus anak', value: '914', note: 'Dataset anak 2025' },
                ].map((kpi, idx) => (
                    <div key={idx} className="card p-4.5">
                        <span className="text-xs text-muted block">{kpi.label}</span>
                        <strong className="text-2xl font-bold text-primary block mt-2">{kpi.value}</strong>
                        <small className="text-xs text-muted block mt-1">{kpi.note}</small>
                    </div>
                ))}
            </div>

            {/* Charts Grid */}
            <div className="grid md:grid-cols-2 gap-4">
                <article className="card">
                    <h3 className="text-base font-semibold mb-3">Wilayah dengan kasus tercatat tertinggi</h3>
                    <div className="space-y-3">
                        {regions.map((region) => (
                            <div key={region.name} className="grid grid-cols-[minmax(90px,145px)_minmax(0,1fr)_36px] gap-2.5 items-center">
                                <span className="text-xs">{region.name}</span>
                                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary to-blue-500"
                                        style={{ width: `${(region.cases / 334) * 100}%` }}
                                    />
                                </div>
                                <b className="text-xs text-right">{region.cases}</b>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted mt-3">Perbedaan antarwilayah dapat dipengaruhi populasi, akses pelaporan, kapasitas pencatatan dan layanan.</p>
                </article>

                <article className="card">
                    <h3 className="text-base font-semibold mb-3">Profil korban anak 2025</h3>
                    <div className="space-y-2">
                        {[
                            { label: 'Perempuan', value: '734' },
                            { label: 'Laki-laki', value: '263' },
                            { label: 'Kekerasan seksual*', value: '656' },
                            { label: 'Kekerasan psikis*', value: '226' },
                            { label: 'Kekerasan fisik*', value: '157' },
                        ].map((stat, idx) => (
                            <div key={idx} className="flex justify-between py-2 px-0 border-b border-line text-sm">
                                <span>{stat.label}</span>
                                <strong>{stat.value}</strong>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted mt-3">*Bentuk kekerasan dapat tumpang tindih pada korban yang sama.</p>
                </article>
            </div>
        </div>
    );
}
