import Navbar from "../components/Navbar.jsx";
import ChatItem from "../components/ChatItem.jsx";
import chats from "../data/chats.json";

export default function ChatList() {
  return (
    <div className="flex flex-col h-screen bg-gray-950 text-gray-200">
      <Navbar title="Chats" showNew={true} />

      <ul className="flex-1 overflow-y-auto divide-y divide-gray-800">
        {chats.map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
      </ul>
    </div>
  );
}
