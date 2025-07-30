import PageBook from "@/pages/PageBook";
const API_URL = "https://ai-api-mu.vercel.app/get-books";
const get_books = async ({ id }) => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const books = await response.json();
  return books.books.find((book) => book.id === id) || null;
};
export default async function Page({ params }) {
  //get id
  const { id } = await params;
  const book = await get_books({ id });
  // console.log({ msg: "got it", book });{
  // console.log({ msg: "got it", id });
  // const book = {
  //   id: id,
  //   title: "Sample Book Title",
  //   introduction:
  //     "This is a sample book description that gives an overview of the book's content and purpose.",
  //   image: "/zoom_ai_logo.png",
  //   author: "Unknown Author",
  // };
  if (!book) {
    return <div className="text-center text-red-500">Book not found</div>;
  }
  return (
    <PageBook
      book={{
        id: book.id,
        title: book.title || "Sample Book Title",
        author: book.author || "Unknown Author",
        image: book.image || "/zoom_ai_logo.png",
        introduction:
          book.introduction ||
          "This is a sample book description that gives an overview of the book's content and purpose.",
      }}
    />
  );
}
