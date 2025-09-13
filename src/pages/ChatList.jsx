import Navbar from "../components/Navbar.jsx";
import ChatItem from "../components/chatItem.jsx";
import chats from "../data/chats.json";

export default function ChatList() {
  return (
    <div className="flex flex-col h-screen bg-gray-950 text-gray-200">
      {/* Navbar with + New Chat button */}
      <Navbar title="Chats" showNew={true} />

      {/* List of chats */}
      <ul className="flex-1 overflow-y-auto divide-y divide-gray-800">
        {chats.map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
      </ul>
    </div>
  );
}
