import React, { useEffect, useState } from 'react';

export default function Skills() {
    const skillsImages = [
        { id: 1, src: 'http://127.0.0.1:8000/storage/PHP.png', alt: 'PHP', description:"PHP" },
        { id: 2, src: 'http://127.0.0.1:8000/storage/MySQL.png', alt: 'MySQL', description:"MySQL" },
        { id: 3, src: 'http://127.0.0.1:8000/storage/flask.jpg', alt: 'Python Flask', description:"Python Flask" },
        { id: 4, src: 'http://127.0.0.1:8000/storage/Postgresql.png', alt: 'PostgreSQL' , description:"PostgreSQL"},
        { id: 5, src: 'http://127.0.0.1:8000/storage/ReactJs.png', alt: 'ReactJS', description:"ReactJS" },
        { id: 6, src: 'http://127.0.0.1:8000/storage/CI4.png', alt: 'CodeIgniter 4', description:"CodeIgniter 4" },
        { id: 7, src: 'http://127.0.0.1:8000/storage/Laravel.png', alt: 'Laravel 11', description:"Laravel 11" },
        { id: 8, src: 'http://127.0.0.1:8000/storage/GIT.png', alt: 'GIT', description:"GIT" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsImages.length);
            }, 3000);

            return () => clearInterval(intervalId);
        } else {
            setCurrentIndex(0);
        }
    }, [isMobile, skillsImages.length]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white-100 p-4 shadow-lg">
            {/* Skills Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-full mb-8">
                <h1 className="text-3xl font-semibold text-center mb-6">Skills</h1>
                <div className="relative">
                    {isMobile ? (
                        <div className="overflow-hidden">
                            <div 
                                className="flex transition-transform duration-500"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {skillsImages.map((skill) => (
                                    <div key={skill.id} className="flex-none w-full text-center">
                                        <div className="bg-blue-100 rounded-lg p-4 shadow-md flex flex-col items-center">
                                            <img src={skill.src} alt={skill.alt} className="w-32 h-32 object-contain rounded-md" />
                                            <p className="mt-2 text-gray-700">{skill.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-wrap justify-center">
                            {skillsImages.map((skill) => (
                                <div key={skill.id} className="w-1/3 p-2 text-center">
                                    <div className="bg-blue-100 rounded-lg p-4 shadow-md flex flex-col items-center">
                                        <img src={skill.src} alt={skill.alt} className="w-32 h-32 object-contain rounded-md" />
                                        <p className="mt-2 text-gray-700">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

    {/* Certification Section */}
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Course Certification</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Certification Cards */}
            {[
                {
                    title: "Sertifikasi Junior Web Programmer",
                    description: "Badan Nasional Sertifikasi Profesi (BNSP)",
                    image: "http://127.0.0.1:8000/storage/bnsp.png", // Ganti dengan path gambar yang sesuai
                    link: "https://www.linkedin.com/in/lugaya-mukti-arwasaputra/overlay/1730359159594/single-media-viewer/?profileId=ACoAAD565fYBwcvcGg25AV8K_M5-JI7UhWj6ZGo", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
                    description: "Dicoding Indonesia",
                    image: "http://127.0.0.1:8000/storage/dicoding.jpeg",
                    link: "https://www.dicoding.com/certificates/1OP85MNO1PQK", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "Belajar Dasar Pemrograman Web",
                    description: "Dicoding Indonesia",
                    image: "http://127.0.0.1:8000/storage/dicoding.jpeg",
                    link: "https://www.dicoding.com/certificates/07Z6G6M3RXQR", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "Belajar Dasar Git dengan GitHub",
                    description: "Dicoding Indonesia",
                    image: "http://127.0.0.1:8000/storage/dicoding.jpeg",
                    link: "https://www.dicoding.com/certificates/JMZVN8WVNPN9", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "Belajar Dasar Pemrograman JavaScript",
                    description: "Dicoding Indonesia",
                    image: "http://127.0.0.1:8000/storage/dicoding.jpeg",
                    link: "https://www.dicoding.com/certificates/MRZM498KKXYQ", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
                    description: "Dicoding Indonesia",
                    image: "http://127.0.0.1:8000/storage/dicoding.jpeg",
                    link: "https://www.dicoding.com/certificates/ERZR0Q39MXYV", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "Menjadi Google Cloud Engineer",
                    description: "Dicoding Indonesia",
                    image: "http://127.0.0.1:8000/storage/dicoding.jpeg",
                    link: "https://www.dicoding.com/certificates/07Z6VG93JXQR", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "The Bits and Bytes of Computer Networking",
                    description: "Coursera X Google",
                    image: "http://127.0.0.1:8000/storage/coursera.png",
                    link: "https://www.coursera.org/account/accomplishments/certificate/NMXZYJMBAYKM", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "System Administration and IT Infrastructure Services",
                    description: "Coursera X Google",
                    image: "http://127.0.0.1:8000/storage/coursera.png",
                    link: "https://www.coursera.org/account/accomplishments/certificate/5FRSCS658V7T", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "Preparing for Your Associate Cloud Engineer Journey",
                    description: "Google Cloud Skills Boost",
                    image: "http://127.0.0.1:8000/storage/GCP.png",
                    link: "https://www.cloudskillsboost.google/public_profiles/1cc3430e-0ec5-4cc3-9ca4-856721f2eb19/badges/3389557?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
                    description: "Google Cloud Skills Boost",
                    image: "http://127.0.0.1:8000/storage/GCP.png",
                    link: "https://www.cloudskillsboost.google/public_profiles/1cc3430e-0ec5-4cc3-9ca4-856721f2eb19/badges/3268381?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share", // Ganti dengan link sertifikat yang sesuai
                },
                {
                    title: "Perform Foundational Data, ML, and AI Tasks in Google Cloud",
                    description: "Google Cloud Skills Boost",
                    image: "http://127.0.0.1:8000/storage/GCP.png",
                    link: "https://www.cloudskillsboost.google/public_profiles/1cc3430e-0ec5-4cc3-9ca4-856721f2eb19/badges/3276812?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share", // Ganti dengan link sertifikat yang sesuai
                },
            ].map((cert, index) => (
                <div key={index} className="bg-green-100 rounded-lg p-4 shadow-md">
                    <img
                        src={cert.image} // Ganti dengan path gambar yang sesuai
                        alt={`${cert.title} Preview`}
                        className="rounded-lg mb-4 w-full h-32 object-cover" // Sesuaikan ukuran gambar
                    />
                    <h2 className="text-xl font-semibold text-green-800">{cert.title}</h2>
                    <p className="text-gray-600 mt-2">{cert.description}</p>
                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        Lihat Sertifikat
                    </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
