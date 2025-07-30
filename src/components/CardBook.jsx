import Image from "next/image";
import Link from "next/link";

export const CardBook = ({ book }) => {
  return (
    <Link
      href={`/book/${book.id}`}
      className="bg-gradient-to-br from-white via-blue-50 to-blue-100 p-6 rounded-3xl h-96 flex flex-col items-center w-72 shadow-xl hover:scale-105 transition-transform duration-300 group"
    >
      <div className="w-42 h-42 mb-6 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-200 group-hover:border-[#0abab4] transition-colors">
        <Image
          src={book.image || "/zoom_ai_logo.png"}
          alt="Book 1"
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-2xl font-extrabold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
        {book.title || "Sample Book Title"}
      </h2>
      {/* <p className="text-base text-gray-600 text-center px-2">
        {book.introduction ||
          "This is a sample book description that gives an overview of the book's content and purpose."}
      </p> */}
      <button className="mt-auto bg-[#0abab4] text-white px-6 py-2 rounded-full shadow hover:bg-[#70d1ce] transition-colors font-semibold">
        View Details
      </button>
    </Link>
  );
};
