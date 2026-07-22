import { useState } from 'react';

export default function LoanCalculator() {
    const [harga, setHarga] = useState(240000000);
    const [dpPersen, setDpPersen] = useState(20);
    const [tenor, setTenor] = useState(18);

    // Perhitungan
    const dpNominal = (harga * dpPersen) / 100;
    const pinjaman = harga - dpNominal;
    const angsuran = Math.round(pinjaman / tenor);

    // Jadwal angsuran
    const jadwal = Array.from({ length: tenor }, (_, i) => {
        const date = new Date(2024, i, 25);

        return {
            ke: i + 1,
            tanggal: date.toLocaleDateString('id-ID'),
            nominal: angsuran,
        };
    });

    return (
        <div className="p-8 max-w-7xl mx-auto w-full space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-bold">
                    Simulasi Kredit Mobil
                </h1>
                <p className="text-slate-400 mt-1">
                    IMS Finance - Perhitungan Angsuran Pak Sugus
                </p>
            </div>

            {/* Data Kontrak */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900 border border-slate-700 rounded-2xl p-6">
                <div>
                    <label className="block mb-2 font-semibold">
                        No Kontrak
                    </label>
                    <input
                        value="AGR00001"
                        disabled
                        className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-slate-100"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">
                        Nama Client
                    </label>
                    <input
                        value="SUGUS"
                        disabled
                        className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-slate-100"
                    />
                </div>
            </div>

            {/* Form Input */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900 border border-slate-700 rounded-2xl p-6">
                <div>
                    <label className="block mb-2 font-semibold">
                        Harga Mobil
                    </label>
                    <input
                        type="number"
                        value={harga}
                        onChange={(e) => setHarga(Number(e.target.value))}
                        className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">
                        DP (%)
                    </label>
                    <input
                        type="number"
                        value={dpPersen}
                        onChange={(e) => setDpPersen(Number(e.target.value))}
                        className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">
                        Tenor (bulan)
                    </label>
                    <input
                        type="number"
                        value={tenor}
                        onChange={(e) => setTenor(Number(e.target.value))}
                        className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>
            </div>

            {/* Hasil Perhitungan */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
                    <p className="text-sm text-slate-400">Harga Mobil</p>
                    <p className="text-2xl font-bold mt-2">
                        Rp {harga.toLocaleString('id-ID')}
                    </p>
                </div>

                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
                    <p className="text-sm text-slate-400">
                        DP ({dpPersen}%)
                    </p>
                    <p className="text-2xl font-bold mt-2">
                        Rp {dpNominal.toLocaleString('id-ID')}
                    </p>
                </div>

                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
                    <p className="text-sm text-slate-400">
                        Pokok Pinjaman
                    </p>
                    <p className="text-2xl font-bold mt-2">
                        Rp {pinjaman.toLocaleString('id-ID')}
                    </p>
                </div>

                <div className="bg-blue-900 border border-blue-700 rounded-2xl p-5">
                    <p className="text-sm text-blue-200">
                        Angsuran per Bulan
                    </p>
                    <p className="text-3xl font-bold mt-2 text-white">
                        Rp {angsuran.toLocaleString('id-ID')}
                    </p>
                </div>
            </div>

            {/* Tabel Jadwal */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 overflow-x-auto">
                <h2 className="text-2xl font-bold mb-4">
                    Jadwal Angsuran
                </h2>

                <table className="w-full text-sm border border-slate-700">
                    <thead className="bg-slate-800 text-slate-200">
                        <tr>
                            <th className="border border-slate-700 p-3 text-left">
                                Angsuran Ke
                            </th>
                            <th className="border border-slate-700 p-3 text-right">
                                Nominal
                            </th>
                            <th className="border border-slate-700 p-3 text-center">
                                Tanggal Jatuh Tempo
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {jadwal.map((item) => (
                            <tr
                                key={item.ke}
                                className="hover:bg-slate-800/50 border-b border-slate-700"
                            >
                                <td className="p-3">{item.ke}</td>

                                <td className="p-3 text-right font-medium">
                                    Rp {item.nominal.toLocaleString('id-ID')}
                                </td>

                                <td className="p-3 text-center">
                                    {item.tanggal}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}