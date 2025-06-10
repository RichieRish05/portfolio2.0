import "./chatbot.css";

import RestingLion from "../../assets/chatbot/lion-resting.mov";
import TalkingLion from "../../assets/chatbot/lion-talking.mov";

import { useState } from "react";

export default function ChatBot() {
  const [chatvideo, setChatVideo] = useState(RestingLion);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    setShowChat((prev) => !prev);
  };


  const sendMessage = (e) => {
    e.preventDefault();
  }


  return (
    <div>

        <div className={`chat-container ${!showChat ? 'hidden' : ""}`}>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.type}`}>
                        {msg.text}
                    </div>
                ))}

            </div>

        </div>
        

      {/* {/* <div className="chat-container">
        <h2>Ask me anything</h2>
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form className="chat-input" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div> */}





      
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
