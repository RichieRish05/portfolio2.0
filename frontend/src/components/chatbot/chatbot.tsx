import "./chatbot.css";

import RestingLion from "../../assets/chatbot/lion-resting.mov";
import TalkingLion from "../../assets/chatbot/lion-talking.mov";
import axios from "axios";

const chatbotURL = import.meta.env.VITE_CHATBOT_URL;

import { useState } from "react";

export default function ChatBot() {
  const [chatvideo, setChatVideo] = useState(RestingLion);
  const [showChat, setShowChat] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi there! How can I help you today?" },
  ]);
  
  const [input, setInput] = useState("");
  const onClick = (e) => {
    e.preventDefault();
    setShowChat((prev) => !prev);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setMessages((prev) => [...prev, { type: "user", text: question }]);

    setQuestion("");

    try {
      axios
        .post(`${import.meta.env.VITE_CHATBOT_URL}/ask`, {
          text: question,
        })
        .then((res) => {
          console.log(res.data);
          const answer = res.data.answer;
          setMessages((prev) => [...prev, { type: "bot", text: answer }]);
        });
    } catch (error) {
      console.error("API call went wrong");
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Sorry, I didn't catch that." },
      ]);
    }
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  return (
    <div>
      <div className={`chat-container ${!showChat ? "hidden" : ""}`}>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form className="chat-input" onSubmit={sendMessage}>
          <input
            value={question}
            onChange={handleQuestionChange}
            placeholder="Ask a question"
          />
          <button>Send</button>
        </form>
      </div>

      <video
        className="video-container"
        autoPlay
        muted
        loop
        playsInline
        onClick={onClick}
      >
        <source src={chatvideo} className="chatbot-video" />
        Your Browser Does Not Support Video Content
      </video>
    </div>
  );
}
