import { BackButton } from "@/components/BackButton";
import ControlAudio from "@/components/ControlAudio";
import PageRead from "@/pages/pageRead";
const get_transcript_book = async (id) => {
  const res = await fetch(
    `https://ai-api-mu.vercel.app/get-book-transcript/${id}`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch book transcript");
  }
  return res.json();
};

const page = async ({ params }) => {
  const { id } = await params;
  console.log("Book ID:", id);
  const book = await get_transcript_book(id);
  console.log("Book Data:", book);
  console.log(book.transcript[0].paragraphs);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <BackButton href={`/book/${id}`} />

      <PageRead book={book} />
    </div>
  );
};

export default page;
