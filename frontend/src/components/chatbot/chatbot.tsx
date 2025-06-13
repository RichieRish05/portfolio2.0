import "./chatbot.css";

import RestingLion from "../../assets/chatbot/lion-resting.mov";
import TalkingLion from "../../assets/chatbot/lion-talking.mov";
import axios from "axios";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { useState, useEffect } from "react";

const TypingMessage = ({ text, onTypingStart, onTypingDone }) => {
  const [typedText, { isDone }] = useTypewriter({
    words: [text],
    typeSpeed: 50,
    loop: 1,
  });

  useEffect(() => {
    onTypingStart(); // fire on mount
  }, []);

  useEffect(() => {
    if (isDone) {
      onTypingDone(); // fire on finish
    }
  }, [isDone]);


  return (
    <span className="typing-text">
      {typedText}
      {!isDone && <Cursor />}
    </span>
  );
};

export default function ChatBot() {
  const [videoSrc, setVideoSrc] = useState(RestingLion);
  const [videoKey, setVideoKey] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi there! How can I help you today?" },
  ]);

  const onClick = (e) => {
    e.preventDefault();
    setShowChat((prev) => !prev);
    setVideoSrc(RestingLion);
    setVideoKey(prev => prev + 1);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    setMessages((prev) => [...prev, { type: "user", text: question }]);
    setQuestion("");

    // API call for chatbot response
    let botMessage = { type: "bot", text: "" }; // Define bot message
    try {
      const res = await axios.post(`${import.meta.env.VITE_CHATBOT_URL}/ask`, {
        text: question,
      });
      const answer = res.data.answer;
      botMessage = { type: "bot", text: answer };
    } catch (error) {
      console.error("API call went wrong");
      botMessage = { type: "bot", text: "Sorry, I didn't catch that." };
    }
    setMessages((prev) => [...prev, botMessage]);
  };


  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };


  const handleTypingStart = () => {
    setVideoSrc(TalkingLion);
    setVideoKey(prev => prev + 1)
  };

  const handleTypingDone = () => {
    setVideoSrc(RestingLion);
    setVideoKey(prev => prev + 1)
  };

  return (
    <div>
      <div className={`chat-container ${!showChat ? "hidden" : ""}`}>
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              {msg.type === "bot" ? (
                <TypingMessage text={msg.text} onTypingStart={handleTypingStart} onTypingDone={handleTypingDone}/>
              ) : (
                msg.text
              )}
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
        key={videoKey}
        className="video-container"
        autoPlay
        muted
        loop
        playsInline
        onClick={onClick}
      >
        <source
          src={videoSrc}
          className="chatbot-video"
        />
        Your Browser Does Not Support Video Content
      </video>
    </div>
  );
}
