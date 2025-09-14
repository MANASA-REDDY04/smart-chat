import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import messagesData from "../data/messages.json";
import chats from "../data/chats.json";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";
import Navbar from "../components/Navbar";
import { summarizeChat, suggestReply } from "../utils/aiHelpers";

export default function ChatWindow() {
  const { id } = useParams();

  const chatInfo = chats.find((chat) => chat.id.toString() === id);
  const chatName = chatInfo ? chatInfo.name : `Chat ${id}`;

  const [messages, setMessages] = useState(messagesData[id] || []);
  const [aiOutput, setAiOutput] = useState("");

  useEffect(() => {
    setMessages(messagesData[id] || []);
    setAiOutput("");
  }, [id]);

  const handleSend = (msg) => {
    setMessages((prev) => [
      ...prev,
      { sender: "You", text: msg, time: "Now" },
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-gray-200">
      <Navbar title={chatName} showBack={true} />

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} />
        ))}
      </div>

      <div className="flex gap-2 px-4 mb-3">
        <button
          onClick={() => setAiOutput(summarizeChat())}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Summarize Thread
        </button>
        <button
          onClick={() => setAiOutput(suggestReply())}
          className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-lg transition-colors"
        >
          Smart Reply Suggestion
        </button>
      </div>

      {aiOutput && (
        <div className="mx-4 mb-3 p-3 bg-gray-800 rounded-lg text-gray-200">
          <strong className="text-purple-400">AI:</strong> {aiOutput}
        </div>
      )}

      <div className="p-3 border-t border-gray-800">
        <InputBox onSend={handleSend} />
      </div>
    </div>
  );
}
