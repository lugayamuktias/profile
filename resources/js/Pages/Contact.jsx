import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; // Pastikan untuk menginstal react-icons jika belum

export default function Contact() {
    return (
    <footer className="pt-20">
        <div className="flex items-center justify-center min-h-lg bg-white-100 p-4">

            {/* Social Links Section */}
            <div className="bg-white rounded-lg w-full max-w-xl">
                <h1 className="text-3xl font-semibold text-center mb-6">Connect with Me</h1>

                <div className="flex justify-around">
                    <a href="https://www.instagram.com/lugayamuktias/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <FaInstagram className="text-4xl text-pink-500 mb-2" />
                        <span>Instagram</span>
                    </a>
                    <a href="https://github.com/lugayamuktias" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <FaGithub className="text-4xl text-gray-800 mb-2" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/lugaya-mukti-arwasaputra/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <FaLinkedin className="text-4xl text-blue-700 mb-2" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
        &nbsp;
        </footer>
    );
}