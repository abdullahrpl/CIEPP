import React, { useState } from 'react';

export function InternalPage() {
    const [selectedRole, setSelectedRole] = useState('UPTD PPA');
    const [selectedCase, setSelectedCase] = useState('CIEPP-26-001');

    const roles = ['UPTD PPA', 'Dinsos', 'Pendidikan', 'Data Steward'];

    const cases = [
        { id: 'CIEPP-26-001', title: 'Risiko pendidikan + penjangkauan', status: 'Perlu asesmen' },
        { id: 'CIEPP-26-002', title: 'Akomodasi pendidikan', status: 'Rujukan diterima' },
        { id: 'CIEPP-26-003', title: 'Dukungan keluarga', status: 'Follow-up 30 hari' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <span className="eyebrow">INTERNAL • ROLE-BASED</span>
                <h1 className="section-title h1 mt-2">Ruang Petugas — Case Management</h1>
                <p className="text-slate-600 mt-1">Contoh tampilan untuk UPTD PPA, Dinsos, pendidikan, kesehatan, dan mitra rujukan. Semua data di bawah fiktif.</p>
            </div>

            {/* Role Switcher */}
            <div className="flex gap-2 flex-wrap">
                {roles.map((role) => (
                    <button
                        key={role}
                        onClick={() => setSelectedRole(role)}
                        className={`px-3 py-2 rounded-full text-sm font-semibold border transition-all ${selectedRole === role
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white text-text border-line hover:bg-soft'
                            }`}
                    >
                        {role}
                    </button>
                ))}
            </div>

            {/* Case Management Layout */}
            <div className="grid md:grid-cols-[280px_1fr] gap-4">
                {/* Case List */}
                <div className="card p-2.5 h-fit">
                    {cases.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setSelectedCase(c.id)}
                            className={`w-full p-3.25 rounded-3 text-left transition-colors ${selectedCase === c.id ? 'bg-soft' : 'hover:bg-soft'
                                }`}
                        >
                            <b className="text-sm block">{c.id}</b>
                            <span className="text-xs text-muted block mt-1">{c.title}</span>
                            <em className="text-xs text-primary block mt-1 not-italic">{c.status}</em>
                        </button>
                    ))}
                </div>

                {/* Case Detail */}
                <div className="card p-5">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="eyebrow">KASUS FIKTIF</span>
                            <h2 className="text-2xl font-bold mt-1">{selectedCase}</h2>
                        </div>
                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-200 text-yellow-900 rounded-full">
                            Perlu asesmen
                        </span>
                    </div>

                    {/* Mini Grid */}
                    <div className="grid grid-cols-4 gap-2.5 mb-4 p-3 bg-slate-100 rounded-[10px]">
                        {[
                            { label: 'Usia', value: '13–17' },
                            { label: 'Wilayah', value: 'Kota Serang' },
                            { label: 'Sumber', value: 'Komunitas' },
                            { label: 'PIC', value: 'Belum ditetapkan' },
                        ].map((item, idx) => (
                            <div key={idx}>
                                <small className="text-xs text-muted block">{item.label}</small>
                                <strong className="text-sm block mt-1">{item.value}</strong>
                            </div>
                        ))}
                    </div>

                    {/* Checklist */}
                    <h3 className="text-base font-semibold mb-3 mt-5">Checklist asesmen minimum</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-4">
                        {['Keselamatan', 'Status pendidikan', 'Kesehatan', 'Kebutuhan disabilitas', 'Pengasuhan', 'Ekonomi keluarga', 'Dokumen identitas', 'Risiko kerja/eksploitasi'].map((item, idx) => (
                            <label key={idx} className="flex items-center gap-2 text-sm">
                                <input type="checkbox" className="w-4 h-4" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>

                    {/* Referral Table */}
                    <h3 className="text-base font-semibold mb-3 mt-5">Jejak rujukan</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-line">
                                    <th className="text-left py-2.5 px-3 font-semibold">Layanan</th>
                                    <th className="text-left py-2.5 px-3 font-semibold">Status</th>
                                    <th className="text-left py-2.5 px-3 font-semibold">PIC</th>
                                    <th className="text-left py-2.5 px-3 font-semibold">Tenggat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-line">
                                    <td className="py-2.5 px-3">Dinas Sosial</td>
                                    <td className="py-2.5 px-3"><span className="inline-block px-2 py-1 text-xs font-semibold bg-green-200 text-green-900 rounded-full">Diterima</span></td>
                                    <td className="py-2.5 px-3">Petugas A</td>
                                    <td className="py-2.5 px-3">2 hari</td>
                                </tr>
                                <tr>
                                    <td className="py-2.5 px-3">Pendidikan / PKBM</td>
                                    <td className="py-2.5 px-3"><span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-200 text-yellow-900 rounded-full">Menunggu asesmen</span></td>
                                    <td className="py-2.5 px-3">—</td>
                                    <td className="py-2.5 px-3">5 hari</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout mt-5">
                        <strong className="text-sm block">Guardrail:</strong>
                        <p className="text-xs text-slate-700 mt-1">Skor risiko tidak boleh otomatis menentukan status anak. Flag hanya memicu pemeriksaan manusia dan rujukan yang sesuai.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
