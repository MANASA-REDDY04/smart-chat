import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ChatList from "./pages/ChatList.jsx";
import ChatWindow from "./pages/ChatWindow.jsx";
import NewChat from "./pages/NewChat.jsx";

function Layout() {
  const location = useLocation();
  const isChatOpen =
    location.pathname.startsWith("/chat/") || location.pathname.startsWith("/new");

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col md:flex-row">

      {/* LEFT: Chat list */}
      <div
        className={`border-r border-gray-800 
          ${isChatOpen ? "hidden md:block md:w-1/3" : "w-full md:w-1/3"}`}
      >
        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path="/chat/:id" element={<ChatList />} />
          <Route path="/new" element={<ChatList />} />
        </Routes>
      </div>

      {/* RIGHT: Chat window or new chat */}
      <div
        className={`bg-gray-950
          ${isChatOpen ? "w-full md:flex-1" : "hidden md:flex-1"}`}
      >
        <Routes>
          <Route path="/chat/:id" element={<ChatWindow />} />
          <Route path="/new" element={<NewChat />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
