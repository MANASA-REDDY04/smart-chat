// src/components/ChatItem.jsx
import { Link } from "react-router-dom";
import { avatars } from "../assets/index.js";

export default function ChatItem({ id, name, lastMessage, time, avatar }) {
  return (
    <Link
      to={`/chat/${id}`}
      className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-800 transition-colors"
    >
      {/* Avatar */}
      <img
        src={avatars[avatar]}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border border-gray-700"
      />

      {/* Chat Details */}
      <div className="flex-1 min-w-0">
        <h2 className="font-semibold text-gray-100 truncate">{name}</h2>
        <p className="text-sm text-gray-400 truncate">{lastMessage}</p>
      </div>

      {/* Time */}
      <span className="text-xs text-gray-500 whitespace-nowrap">{time}</span>
    </Link>
  );
}
