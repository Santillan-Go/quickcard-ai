"use client";

import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4">
      <FaExclamationTriangle size={64} className="text-[#0abab4] mb-6" />
      <h1 className="text-4xl font-extrabold text-[#0abab4] mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Página no encontrada. Es posible que el recurso no exista o haya sido
        movido.
      </p>
      <Link
        href="/"
        className="bg-[#0abab4] text-white px-6 py-2 rounded-full shadow hover:bg-[#0abab4] transition-colors font-semibold"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
