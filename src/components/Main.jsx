import { CardBook } from "./CardBook";
import InfoSection from "./InfoSection";

//fetch books from this:
/*
https://ai-api-mu.vercel.app/get-books


*/

const API_URL = "https://ai-api-mu.vercel.app/get-books";
const get_books = async () => {
  const response = await fetch(API_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return response.json();
};
export default async function Main() {
  const books = await get_books();
  console.log(books.books);
  //100vh
  // in this main I'm gonna show the card books using grid layout
  return (
    <main className="min-h-screen  bg-white p-4 mt-10">
      <div>{/* ads section */}</div>

      <div className="flex flex-wrap justify-center gap-4 ">
        {books.books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>

      <InfoSection />

      {/*
      
        <div className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="bg-gray-200 p-4 rounded-lg h-96 flex flex-col items-center w-72">
          <Image
            src="/zoom_ai_logo.png"
            alt="Book 1"
            width={100}
            height={100}
            className="w-32 h-32 object-cover rounded-2xl"
          />
          <h2 className="text-2xl font-bold">Book 1</h2>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg h-96 flex flex-col items-center w-72">
          <Image
            src="/zoom_ai_logo.png"
            alt="Book 1"
            width={100}
            height={100}
            className="w-32 h-32 object-cover rounded-2xl"
          />
          <h2 className="text-2xl font-bold">Book 1</h2>
        </div>{" "}
        <div className="bg-gray-200 p-4 rounded-lg h-96 flex flex-col items-center w-72">
          <Image
            src="/zoom_ai_logo.png"
            alt="Book 1"
            width={100}
            height={100}
            className="w-32 h-32 object-cover rounded-2xl"
          />
          <h2 className="text-2xl font-bold">Book 1</h2>
        </div>
      </div>
      */}
    </main>
  );
}
