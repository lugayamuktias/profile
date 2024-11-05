export default function Profile() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white-100 p-4 shadow-lg p-6">
            {/* Education Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-full mb-8">
                <h1 className="text-3xl font-semibold text-center mb-6">Pendidikan</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Education Cards */}
                    <div className="bg-blue-100 rounded-lg p-4 shadow-md">
                    <img src="http://127.0.0.1:8000/storage/unjani.png" alt="Unjani" className="w-45 h-45 flex justify-center items-center" // Further increased sizes
                    />
                    <h2 className="text-xl font-semibold text-blue-800 text-center">Universitas Jenderal Achmad Yani</h2>
                        <h4 className="text-l text-black-800 text-center">2020-2024</h4>
                        <p className="text-gray-600 mt-2 text-left">
                            Telah menyelesaikan program Sarjana S1 Informatika dengan jurnal pengganti skripsi pada Konferensi Proceeding Internasional EECSI 2024, yaitu:
                        </p>
                        <ul className="text-gray-600 mt-2 list-disc list-inside">
                            <li>Multi-layer Hiding Scheme for Image Data using Crypto-Stego with Compression Technique</li>
                        </ul>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-4 shadow-md">
                        <img src="http://127.0.0.1:8000/storage/bangkit.jpg" alt="Bangkit" className="w-45 h-45 flex justify-center items-center" // Further increased sizes
                         />
                        <h2 className="text-xl font-semibold text-red-800 text-center">Bangkit Academy 2023</h2>
                        <h4 className="text-l text-black-800 text-center">2023</h4>
                        <p className="text-gray-600 mt-2 text-left">
                        Saya mengikuti program Bangkit Academy dengan fokus pada Cloud Computing selama periode Maret hingga Juli 2023. Dalam program ini, saya mempelajari penggunaan framework dalam pengembangan API Backend dan layanan Deploy pada Google Cloud Platform. Program ini memberi saya pemahaman yang lebih mendalam tentang teknologi cloud dan bagaimana mengoptimalkan pengembangan aplikasi menggunakan layanan cloud.
                        </p>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-full">
                <h1 className="text-3xl font-semibold text-center mb-6">Pengalaman</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Experience Cards */}
                    <div className="bg-green-100 rounded-lg p-4 shadow-md">
                    <img src="http://127.0.0.1:8000/storage/if2.png" alt="Unjani" className="w-100 h-100 flex justify-center items-center" // Further increased sizes
                    />
                        <h2 className="text-xl font-semibold text-red-800 text-center">Asisten Praktikum Laboratorium Informatika UNJANI</h2>
                        <h4 className="text-l text-black-800 text-center">Maret 2022 - Oktober 2023</h4>
                        <p className="text-gray-600 mt-2 text-left">
                            Saya melakukan Asistensi pada Praktikum seperti berikut:
                        </p>
                        <ul className="text-gray-600 mt-2 list-disc list-inside">
                            <li>Pemrograman Objek 1</li>
                            <li>Pemrograman Objek 2</li>
                            <li>Sistem Operasi</li>
                            <li>Implementasi Perangkat Lunak</li>
                        </ul>
                    </div>
                    <div className="bg-green-100 rounded-lg p-4 shadow-md">
                        <img src="http://127.0.0.1:8000/storage/khansialogo.png" alt="Khansia" className="w-50 h-50 flex justify-center items-center" // Further increased sizes
                         />
                        <h2 className="text-xl font-semibold text-red-800 text-center">Junior Web Programmer (Intern) PT. Khatulistiwa Nusantara Indonesia</h2>
                        <h4 className="text-l text-black-800 text-center">Juli 2023 - Oktober 2023</h4>
                        <p className="text-gray-600 mt-2 text-left">
                            Saya mengikuti kegiatan Magang sebagai Junior Web Programmer dengan projek seperti berikut:
                        </p>
                        <ul className="text-gray-600 mt-2 list-disc list-inside">
                            <li>Eraversary 27</li>
                            <li>Indonesia Worker Academy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
