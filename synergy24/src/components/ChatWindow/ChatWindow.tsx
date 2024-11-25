import React from "react";
import { useTheme } from "next-themes";

interface ChatWindowProps {
  messages: { sender: string; text: string }[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex-grow ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-200"
      } p-4 overflow-y-auto`}
    >
      <ul>
        {messages.map((message, index) => (
          <li
            key={index}
            className={`mb-4 ${
              message.sender === "You"
                ? "text-right"
                : "text-left text-blue-600 dark:text-blue-300"
            }`}
          >
            <div
              className={`inline-block max-w-xs p-3 rounded-lg shadow-md ${
                theme === "dark" ? "bg-gray-700" : "bg-blue-100"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
            <p
              className={`text-xs mt-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {message.sender}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatWindow;
