import { useState } from "react";
import { Send } from "lucide-react"; // install lucide-react

export default function InputBox({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center bg-gray-900 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 bg-transparent px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none"
      />
      <button
        onClick={handleSend}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 flex items-center gap-1 transition-colors"
      >
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
}
