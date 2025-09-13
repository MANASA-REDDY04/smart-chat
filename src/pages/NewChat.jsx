import { useState } from "react";
import Navbar from "../components/Navbar";
import { generateIcebreaker } from "../utils/aiHelpers";

export default function NewChat() {
  const [name, setName] = useState("");
  const [icebreaker, setIcebreaker] = useState("");

  const handleGenerate = () => {
    if (name.trim() !== "") {
      setIcebreaker(generateIcebreaker(name));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4">
      <Navbar title="New Chat" showBack={true} />

      {/* Input */}
      <input
        type="text"
        placeholder="Enter participant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 mb-4 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
      >
        Generate Icebreaker
      </button>

      {/* AI Output */}
      {icebreaker && (
        <div className="mt-4 p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700">
          <strong className="text-purple-400">AI Icebreaker:</strong> {icebreaker}
        </div>
      )}
    </div>
  );
}
