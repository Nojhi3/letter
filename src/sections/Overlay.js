"use client";
import { useState } from "react";

export default function StartOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleStart = () => {
    setShowOverlay(false);
  };

  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4">
      <h1 className="text-white text-4xl mb-4 text-center">Welcome!</h1>
      <p className="text-gray-300 text-lg mb-8 text-center">
        Press F11 for a better experience.<br />
        The music can be toggled using the button in the right corner.<br />
        <br />
        Have fun!!
      </p>
      <button
        onClick={handleStart}
        className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition"
      >
        Start
      </button>
    </div>
  );
}
