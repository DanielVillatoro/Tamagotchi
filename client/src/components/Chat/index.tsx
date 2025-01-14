import { useState } from "react";
import axios from "axios";
import './main.css';

interface Message {
  user: string;
  text: string;
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { user: "You", text: input };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post("http://localhost:443/chat", {
        text: input,
      });

      if (response.data) {
        console.log(response.data);
      }

      if (response.data && response.data.message) {
        const botMessage = { user: "Sheep", text: response.data.message[0].text };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  return (
    <>
      <div className="chat">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <span className="user">{message.user}:</span> {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Here you can ask to the master"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="button" onClick={sendMessage} className="button">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Chat;
