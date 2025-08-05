// src/components/Footer.jsx
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0abab4] to-white  mt-8 py-8 px-6 text-black rounded-t-[70px]  drop-shadow-2xl">
      <section className="flex flex-col md:flex-row items-center justify-between mb-8 p-4">
        <span className="text-xl font-semibold text-gray-800">QuickCard</span>
        <span className="text-xl font-semibold text-gray-800 text-center">
          Read to improve your english
        </span>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/quickcard_ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-medium shadow-md hover:scale-105 transition-transform"
          >
            <FaInstagram className="w-5 h-5" />
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@quickcard_ai?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white font-medium shadow-md hover:bg-gray-800 hover:scale-105 transition-all"
          >
            <FaTiktok className="w-5 h-5" />
            TikTok
          </a>
        </div>
      </section>

      {/* App Download Section - Modern and Attractive */}
      <section className="rounded-2xl p-8 text-center text-black ">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4">¡Prueba la app ahora!</h2>
          <p className="text-black mb-6 text-lg">
            Descarga nuestra app y mejora tu inglés con flashcards interactivas
          </p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Image
                width={60}
                height={60}
                src="/zoom_ai_logo.png"
                alt="QuickCard App Logo"
                className="rounded-full"
              />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-xl text-black">QuickCard AI</h3>
            </div>
          </div>

          <Link
            href="https://play.google.com/store/apps/details?id=com.santillan.flashcards_ai_audio&hl=es_MX"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FaGooglePlay className="w-6 h-6 text-green-600" />
            <div className="text-left">
              <div className="text-xs text-gray-500">GET IT ON</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </Link>
        </div>
      </section>
      <section>
        <div className="text-center text-gray-600 mt-8">
          <p className="text-sm">
            © {new Date().getFullYear()} QuickCard. All rights reserved.
          </p>
          <p className="text-xs">Made with ❤️ by Santillan </p>
        </div>
      </section>
    </footer>
  );
}
