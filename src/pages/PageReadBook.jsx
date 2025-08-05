"use client";

import { useState } from "react";
import ControlAudio from "@/components/ControlAudio";

const PageRead = ({ book }) => {
  const [position, setPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  if (!book) {
    return <div className="text-center text-red-500">No book data</div>;
  }
  const totalPages = book.transcript;

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
    if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePosition = (newPosition) => {
    setPosition(newPosition);
  };
  // Seek to the new position in the audio

  return (
    <>
      <section className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full mx-auto mt-8 max-h-[65vh] overflow-y-auto  custom-scrollbar">
        {book.transcript[currentPage].paragraphs.map((paragraph, index) => (
          <div key={index} className="mb-6">
            {paragraph.sentences.map((sentence, sentenceIndex) => {
              const isActive =
                position >= sentence.start && position < sentence.end;
              return (
                <p
                  onClick={() => changePosition(sentence.start)}
                  key={sentenceIndex}
                  className={`text-lg mb-2 leading-relaxed font-serif transition-colors break-words ${
                    isActive
                      ? "bg-blue-100 text-[#0abab4] font-bold rounded"
                      : "text-gray-800"
                  }`}
                >
                  {sentence.text}
                </p>
              );
            })}
          </div>
        ))}
      </section>
      <ControlAudio
        url={book.transcript[currentPage].audio_url}
        positionS={position}
        setPositionS={setPosition}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages.length}
      />
    </>
  );
};

export default PageRead;
