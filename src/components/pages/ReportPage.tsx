import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export function ReportPage() {
    const context = useContext(AppContext);
    if (!context) return null;

    const [formMessage, setFormMessage] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormMessage('Demo berhasil — tidak ada data yang dikirim.');
        setTimeout(() => setFormMessage(''), 3000);
    };

    return (
        <div className="space-y-6">
            <div>
                <span className="eyebrow">DEMO FORM</span>
                <h1 className="section-title h1 mt-2">Pengaduan / Permintaan Bantuan</h1>
                <p className="text-slate-600 mt-1">
                    Dummy ini tidak mengirim data ke mana pun. Jangan masukkan identitas atau kasus nyata.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="card p-5.5">
                <div className="callout-danger mb-6">
                    <strong className="text-sm block">Darurat?</strong>
                    <p className="text-xs text-slate-700 mt-1">
                        Dalam sistem produksi, risiko keselamatan segera harus memicu kanal respons darurat dan tidak menunggu antrean biasa.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-3.5 mb-4.5">
                    <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold">Anda sebagai</span>
                        <select className="px-2.75 py-2.5 rounded-[10px] border border-slate-300 bg-white text-text text-sm">
                            <option>Anak/remaja</option>
                            <option>Orang tua/pengasuh</option>
                            <option>Guru/pendamping</option>
                            <option>Relawan/PATBM</option>
                            <option>Petugas layanan</option>
                            <option>Lainnya</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold">Rentang usia anak</span>
                        <select className="px-2.75 py-2.5 rounded-[10px] border border-slate-300 bg-white text-text text-sm">
                            <option>Tidak tahu</option>
                            <option>&lt; 6 tahun</option>
                            <option>6–12 tahun</option>
                            <option>13–17 tahun</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold">Kabupaten/kota</span>
                        <select className="px-2.75 py-2.5 rounded-[10px] border border-slate-300 bg-white text-text text-sm">
                            <option>Pilih wilayah</option>
                            <option>Pandeglang</option>
                            <option>Lebak</option>
                            <option>Kabupaten Tangerang</option>
                            <option>Kabupaten Serang</option>
                            <option>Kota Tangerang</option>
                            <option>Kota Cilegon</option>
                            <option>Kota Serang</option>
                            <option>Kota Tangerang Selatan</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold">Jenis kebutuhan</span>
                        <select className="px-2.75 py-2.5 rounded-[10px] border border-slate-300 bg-white text-text text-sm">
                            <option>Pendidikan</option>
                            <option>Anak jalanan / penjangkauan</option>
                            <option>Disabilitas / akomodasi</option>
                            <option>Kekerasan / perlindungan</option>
                            <option>Risiko pekerja anak / eksploitasi</option>
                            <option>Kesehatan / psikososial</option>
                            <option>Dukungan keluarga</option>
                            <option>Lainnya</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold">Risiko keselamatan segera?</span>
                        <select className="px-2.75 py-2.5 rounded-[10px] border border-slate-300 bg-white text-text text-sm">
                            <option>Tidak tahu</option>
                            <option>Ya</option>
                            <option>Tidak</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold">Boleh dihubungi kembali?</span>
                        <select className="px-2.75 py-2.5 rounded-[10px] border border-slate-300 bg-white text-text text-sm">
                            <option>Ya</option>
                            <option>Tidak / ingin anonim</option>
                        </select>
                    </label>
                </div>

                <label className="flex flex-col gap-1.5 mb-4">
                    <span className="text-sm font-semibold">Ringkasan kebutuhan</span>
                    <textarea
                        rows={5}
                        placeholder="Demo saja — jangan isi identitas asli, alamat lengkap, atau detail sensitif."
                        className="px-2.75 py-2.5 rounded-[10px] border border-slate-300 bg-white text-text text-sm font-sans"
                    />
                </label>

                <div className="flex items-center gap-3">
                    <button type="submit" className="btn-primary">
                        Simulasikan kirim
                    </button>
                    {formMessage && (
                        <span role="status" className="text-xs text-green-600">
                            {formMessage}
                        </span>
                    )}
                </div>
            </form>
        </div>
    );
}
