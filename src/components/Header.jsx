import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-[#0abab4] to-white  rounded-4xl drop-shadow-2xl ml-4 mr-4 mt-4 mb-4 sticky top-0 z-50">
      <Link href="/">
        <Image
          src="/zoom_ai_logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-14 h-14  rounded-full"
        />
      </Link>

      <div>
        <h1 className="text-2xl font-bold">QuickCard</h1>
      </div>
    </header>
  );
}
