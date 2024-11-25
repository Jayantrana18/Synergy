import { useState } from "react";
import { useTheme } from "next-themes";
import DoctorList from "@/components/DoctorList/DoctorList";
import ChatWindow from "@/components/ChatWindow/ChatWindow";
import Sidebar from "@/components/SideBar/Sidebar";
import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";

const Messages = () => {
  const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology" },
    { id: 2, name: "Dr. Johnson", specialty: "Neurology" },
    { id: 3, name: "Dr. Brown", specialty: "Pediatrics" },
  ];

  const [selectedChat, setSelectedChat] = useState<number | "ai" | null>(null);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [inputValue, setInputValue] = useState(""); // Input field value
  const [isTyping, setIsTyping] = useState(false); // To show AI typing indicator
  const { theme, setTheme } = useTheme();

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Predefined options for AI queries
  const predefinedOptions = [
    "What are common symptoms of a heart attack?",
    "How can I manage high blood pressure?",
    "What are the side effects of aspirin?",
    "When should I see a doctor for a headache?",
  ];

  // Function to handle predefined option selection for AI
  const handleOptionSelect = (option: string) => {
    setMessages((prev) => [...prev, { sender: "You", text: option }]);
    setIsTyping(true); // AI is typing

    // Simulate AI response
    setTimeout(() => {
      let response = "";

      switch (option) {
        case "What are common symptoms of a heart attack?":
          response =
            "Common symptoms include chest pain or discomfort, shortness of breath, nausea, and pain or discomfort in the arms, neck, jaw, or back. If you experience these symptoms, seek emergency medical care immediately.";
          break;
        case "How can I manage high blood pressure?":
          response =
            "To manage high blood pressure, focus on a healthy diet low in salt, regular exercise, stress reduction, maintaining a healthy weight, and prescribed medications. Always consult your doctor for personalized advice.";
          break;
        case "What are the side effects of aspirin?":
          response =
            "Common side effects of aspirin include upset stomach, heartburn, and nausea. Rare but serious effects include bleeding, allergic reactions, or ulcers. Consult your doctor for detailed advice before taking aspirin.";
          break;
        case "When should I see a doctor for a headache?":
          response =
            "See a doctor if you experience sudden, severe headaches, headaches with vision changes, numbness, weakness, or those accompanied by fever, confusion, or neck stiffness. Persistent or worsening headaches should also be evaluated.";
          break;
        default:
          response = "I'm not sure how to respond to that. Please ask again.";
      }

      setMessages((prev) => [...prev, { sender: "AI", text: response }]);
      setIsTyping(false); // Stop typing indicator
    }, 1000); // Simulate delay
  };

  // Function to handle user message submission
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [...prev, { sender: "You", text: inputValue }]);
    setInputValue("");
  };

  // Handle switching chats
  const handleChatSelect = (chat: number | "ai") => {
    setSelectedChat(chat);
    setMessages([]); // Clear messages when switching chats
    setInputValue(""); // Clear input field
    setIsTyping(false); // Reset typing indicator
  };

  return (
    <div
      className={`flex h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar */}
      <Sidebar
        toggleTheme={toggleTheme}
        textColor={theme === "dark" ? "text-white" : "text-black"}
        bgSidebar={theme === "dark" ? "bg-gray-800" : "bg-blue-200"}
        handleSignOut={() => {
          /* Your sign-out logic here */
        }}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div
          className={`flex justify-between items-center p-4 ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          } shadow-md`}
        >
          <h2 className="text-4xl font-bold">MESSAGES</h2>
          <div className="flex space-x-4">
            <FaUserCircle className="text-3xl cursor-pointer" />
            {theme === "dark" ? (
              <FaSun
                className="text-3xl cursor-pointer"
                onClick={toggleTheme}
              />
            ) : (
              <FaMoon
                className="text-3xl cursor-pointer"
                onClick={toggleTheme}
              />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-grow">
          {/* Doctor List */}
          <DoctorList doctors={doctors} onSelect={handleChatSelect} />

          {/* Chat Section */}
          {selectedChat ? (
            <div className="flex flex-col w-full">
              <ChatWindow messages={messages} />
              {isTyping && selectedChat === "ai" && (
                <div className="text-gray-500 text-sm p-2">AI is typing...</div>
              )}

              {/* Message Input Section */}
              <div className="flex items-center p-4 border-t">
                {selectedChat === "ai" ? (
                  <div className="space-y-2 w-full">
                    {predefinedOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(option)}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex w-full">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              className={`flex-grow flex items-center justify-center ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              <h2 className="text-xl">Select a contact to start chatting.</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
