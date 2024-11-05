export default function Projects() {
    const projects = [
        {
            image: "http://127.0.0.1:8000/storage/AplikasiKomputer.png",
            title: "Aplikasi Media Interaktif Pengenalan Perangkat Komputer",
            description: "Komputer merupakan sebuah perangkat yang terdiri dari komponen - komponen yang kompleks. Baik itu Komponen Hardware ataupun Software. Dikembangkan sebuah aplikasi media interaktif yang mengenalkan perangkat - perangkat komputer kepada masyarakat.",
            link: "https://drive.google.com/drive/folders/10Jx0AY6Ft7MwMkJ5UIkjMcbYMDAF6GY_?usp=sharing",
        },
        {
            image: "http://127.0.0.1:8000/storage/barberbros.png",
            title: "Aplikasi Layanan BarberBros (Layanan Barber)",
            description: "Aplikasi ini melayani tentang pemesanan layanan barber lengkap dengan treatment yang diinginkan beserta harga yang harus dibayar.",
            link: "https://github.com/lugayamuktias/BarberBros",
        },
        {
            image: "http://127.0.0.1:8000/storage/eraversary27.jpeg",
            title: "CMS dan Microsite Gamification Eraspace 27",
            description: "Bekerja sama dengan PT. Erajaya, Tim Website PT. Khatulistiwa Nusantara Indonesia Membuat Aplikasi Microsite yang menyambung dengan website Erafone. Microsite berisikan Spin Wheel. CMS berikan manajemen voucher oleh Admin. Event dilakukan dengan waktu terbatas dari periode Juli - September setiap tahun.",
            link: "https://eraspace.com/eraversary",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white-100 p-4 shadow-lg">
            {/* Projects Section */}
            <h1 className="text-3xl font-semibold text-center mb-6">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`bg-blue-100 rounded-lg p-4 shadow-md ${
                            projects.length % 2 === 1 && index === projects.length - 1
                                ? 'md:col-span-2' // Set the last card to span two columns if the count is odd
                                : ''
                        }`}
                    >
                        <img
                            src={project.image}
                            alt={`${project.title} Preview`}
                            className="rounded-lg mb-4 w-full h-32 object-cover"
                        />
                        <h2 className="text-xl font-semibold text-blue-800">{project.title}</h2>
                        <p className="text-gray-600 mt-2">
                            {project.description}
                        </p>
                        <a
                            href={project.link}
                            className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
