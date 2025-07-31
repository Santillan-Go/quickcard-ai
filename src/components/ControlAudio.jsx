"use client";

import { useEffect, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ControlAudio = ({
  url,
  positionS,
  setPositionS,
  handlePageChange,
  currentPage,
}) => {
  const { load, play, pause, isPlaying, getPosition, duration, seek } =
    useAudioPlayer();

  const [position, setPosition] = useState(0);

  useEffect(() => {
    seek(positionS);
  }, [positionS]);
  useEffect(() => {
    load(url, { autoplay: false, initialVolume: 0.7 });
  }, [load, url]);

  // Update position every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getPosition());
      setPositionS(getPosition());
    }, 500);
    return () => clearInterval(interval);
  }, [getPosition]);

  return (
    <div className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-lg p-6 mt-8 max-w-md w-full mx-auto">
      <div className="flex gap-6">
        <button
          onClick={() => handlePageChange("prev")}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow transition-colors"
          aria-label="Previous Page"
        >
          <FaArrowLeft size={22} />
        </button>
        {isPlaying ? (
          <button
            onClick={pause}
            className="bg-[#19aaa5d2] hover:bg-[#19aaa5d2] text-white p-3 rounded-full shadow transition-colors"
            aria-label="Pause"
          >
            <FaPause size={22} />
          </button>
        ) : (
          <button
            onClick={play}
            className="bg-[#0abab4] hover:bg-[#0abab4] text-white p-3 rounded-full shadow transition-colors"
            aria-label="Play"
          >
            <FaPlay size={22} />
          </button>
        )}
        <button
          onClick={() => handlePageChange("next")}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow transition-colors"
          aria-label="Next Page"
        >
          <FaArrowRight size={22} />
        </button>
      </div>
      <div className="w-full flex items-center gap-2">
        <span className="text-xs text-gray-500 font-mono min-w-[40px] text-center">
          {Math.floor(position / 60)
            .toString()
            .padStart(2, "0")}
          :{(Math.floor(position) % 60).toString().padStart(2, "0")}
        </span>
        <input
          type="range"
          min={0}
          max={duration || 1}
          value={position}
          onChange={(e) => {
            const seekTo = Number(e.target.value);
            if (!isNaN(seekTo)) {
              seek(seekTo); // Use the seek method from the library
              setPosition(seekTo);
            }
          }}
          className="w-full accent-[#0abab4] h-2 rounded-full"
        />
        <span className="text-xs text-gray-500 font-mono min-w-[40px] text-center">
          {Math.floor(duration / 60)
            .toString()
            .padStart(2, "0")}
          :{(Math.floor(duration) % 60).toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default ControlAudio;
