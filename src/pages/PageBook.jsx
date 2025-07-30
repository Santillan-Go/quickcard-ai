import Link from "next/link";
import Image from "next/image";
import { FaBook } from "react-icons/fa";
import { BackButton } from "@/components/BackButton";

// get the id from the URL params
export const PageBook = ({ book }) => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 p-6 rounded-3xl shadow-xl flex flex-col items-center w-full h-screen max-w-md mx-auto mb-8">
      {/*BACK BUTTON*/}
      <BackButton />
      <div className="w-32 h-32 mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-200">
        <Image
          src={book.image || "/zoom_ai_logo.png"}
          alt={book.title}
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-2xl font-extrabold text-blue-900 mb-1 text-center">
        {book.title}
      </h2>
      <p className="text-sm text-gray-500 mb-2 text-center">by {book.author}</p>

      <p className="text-base text-gray-700 text-center mb-6">
        {book.introduction ||
          "This is a sample book description that gives an overview of the book's content and purpose."}
      </p>
      <div className="">
        <Link
          href={`/book/${book.id}/read`}
          className="bg-[#0abab4] text-white px-6 py-2 rounded-full shadow hover:bg-[#70d1ce] transition-colors font-semibold flex gap-4 justify-center items-center"
        >
          <FaBook /> <p>Read </p>
        </Link>
        {/* <Link
          href={`/book/${book.id}/listen`}
          className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition-colors font-semibold"
        >
          Escuchar
        </Link> */}
      </div>
    </div>
  );
};
