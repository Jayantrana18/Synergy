import React, { useState } from "react";
import { useTheme } from "next-themes";

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-4 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
    >
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md ${
            theme === "dark"
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
