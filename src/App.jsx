import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatList from "./pages/ChatList.jsx";
import ChatWindow from "./pages/ChatWindow.jsx";
import NewChat from "./pages/NewChat.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col md:flex-row">
        {/* Chat list always visible on md+ */}
        <div className="w-full md:w-1/3 border-r border-gray-800">
          <Routes>
            <Route path="/" element={<ChatList />} />
            <Route path="/chat/:id" element={<ChatList />} />
            <Route path="/new" element={<ChatList />} />
          </Routes>
        </div>

        {/* Chat window / New chat */}
        <div className="w-full md:flex-1">
          <Routes>
            <Route path="/chat/:id" element={<ChatWindow />} />
            <Route path="/new" element={<NewChat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
