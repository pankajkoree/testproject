import React from "react";

const page = () => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Audio Clip</h1>
      <audio controls className="w-full max-w-md bg-white shadow-lg rounded-lg p-2 border border-purple-300">
        <source src="/public/audio-clip1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>

    </div>
  );
};

export default page;
