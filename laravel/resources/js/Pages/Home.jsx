import React from 'react';

export default function Home({name}){
  return (
    // Card Info Awal
  <div className="flex flex-col items-center justify-center min-h-xl bg-white-100 p-4 shadow-lg p-6">
    <div className="flex justify-center items-center py-10">
      <div className="bg-white p-10 rounded-max shadow-xl w-full max-w-7xl flex items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Lugaya Mukti Arwasaputra</h1>
          <h2 className="text-xl md:text-2xl mb-4">Junior Web Programmer</h2>
          {/* Button Container */}
          <div className="flex flex-col space-y-2 md:space-y-0">
            {/* Download CV Button */}
            <a
              href="https://www.cake.me/s--FpXaXPLR4vR7E9jZREwo2g--/lugaya-mukti"
              download="Lugaya_CV.pdf"
              className="inline-block bg-blue-500 text-white text-sm sm:text-base md:text-lg px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-blue-600 transition max-w-[8rem] sm:max-w-[10rem] md:max-w-[15rem]"
            >
              Download CV
            </a>
&nbsp;
            {/* YouTube Link */}
            <a
              href="https://www.youtube.com/@lugayamuktias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-500 text-white text-sm sm:text-base md:text-lg px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 transition max-w-[8rem] sm:max-w-[10rem] md:max-w-[15rem]"
            >
              <i className="fab fa-youtube mr-1"></i> Visit My YouTube
            </a>
          </div>
        </div>

          
        {/* Image and Description Section */}
        <div className="w-1/2 flex flex-col items-center">
          <img
            src="http://127.0.0.1:8000/storage/1721399719840.jpeg"
            alt="Profile"
            className="w-80 h-80 rounded-full object-cover mb-4" // Further increased sizes
          />
        </div>
      </div>
    </div>
    <div className="my-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Tentang Saya</h1>
          <p className='text-base text-justify max-w-prose'>
            Sejak memulai kuliah di Universitas Jenderal Achmad Yani (UNJANI) pada tahun 2020, saya aktif mengeksplorasi perkembangan di bidang Web Development dan Backend. Di lingkungan kampus, saya memimpin berbagai proyek, termasuk Aplikasi Interaktif Pemasangan Perangkat Komputer berbasis Javascript, Layanan Pembayaran Barber berbasis Java, dan Layanan Web Webinar berbasis PHP, di mana saya bertanggung jawab mengoordinasikan tim dan memastikan penyelesaian proyek dengan baik. Saya juga mengikuti program MBKM Bangkit Academy pada tahun 2023 dengan fokus Cloud Computing, memperdalam pemahaman tentang pengembangan API Backend dan deploy di Google Cloud. Saya berkomitmen untuk terus belajar dan menerapkan pengetahuan ini untuk menciptakan solusi teknologi yang bermanfaat.
          </p>
        </div>
  </div>
    )
}
