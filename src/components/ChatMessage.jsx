export default function ChatMessage({ sender, text, time }) {
  const isYou = sender === "You";

  return (
    <div className={`flex flex-col ${isYou ? "items-end" : "items-start"} mb-2`}>
      {/* Show sender name for others */}
      {!isYou && (
        <span className="text-xs text-purple-400 font-semibold mb-1">{sender}</span>
      )}

      <div
        className={`px-3 py-2 rounded-xl max-w-xs break-words ${
          isYou
            ? "bg-purple-600 text-white rounded-br-none"
            : "bg-gray-800 text-gray-200 rounded-bl-none"
        }`}
      >
        <div className="text-sm">{text}</div>
        <div className="text-xs text-gray-400 mt-1">{time}</div>
      </div>
    </div>
  );
}
