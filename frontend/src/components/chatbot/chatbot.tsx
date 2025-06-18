import "./chatbot.css";

import RestingLion from "../../assets/chatbot/lion-resting.mov";
import TalkingLion from "../../assets/chatbot/lion-talking.mov";
import axios from "axios";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { useState, useEffect, useRef } from "react";

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
  const [isTalking, setIsTalking] = useState(false);
  const [canSend, setCanSend] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi there! I’m Cubby, your personal guide to Rishi’s Portfolio. Feel free to ask me anything about his projects, skills, or professional journey!" },
  ]);

  const overlayRef = useRef(null);



  function handleClickOutsideOverlay(e) {
    const clickedOutsideOverlay = overlayRef.current && !overlayRef.current.contains(e.target);

    if (clickedOutsideOverlay && showChat) {
      setShowChat(false);
    }
  }

  document.addEventListener('click', handleClickOutsideOverlay);

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevents document listener from firing
    setShowChat(prev => !prev);
  };


  const sendMessage = async (e) => {
    e.preventDefault();
    if (!canSend) return;


    setMessages((prev) => [...prev, { type: "user", text: question }]);
    setQuestion("");
    setCanSend(false);

    // API call for chatbot response
    let botMessage = { type: "bot", text: "" }; // Define bot message
    try {
      const res = await axios.post(`${import.meta.env.VITE_CHATBOT_URL}/ask`, {
        text: question,
      });
      const answer = res.data.answer;
      botMessage = { type: "bot", text: answer };
    } catch (error) {
      console.log(error);
      console.error("API call went wrong");
      botMessage = { type: "bot", text: "Sorry, I didn't catch that." };
    }


    setMessages((prev) => [...prev, botMessage]);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
    if (!isTalking && e.target.value.trim() !== "") {
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  };


  const handleTypingStart = () => setIsTalking(true);
  const handleTypingDone = () => {
    setIsTalking(false);
    setCanSend(true);
  };

  return (
    <div>
      <div id="chat-container" className={`chat-container ${!showChat ? "hidden" : "visible"}`} ref={overlayRef}>
        <div className="chat-box" id="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              {msg.type === "bot" && idx != 0 ? (
                <TypingMessage
                  text={msg.text}
                  onTypingStart={handleTypingStart}
                  onTypingDone={handleTypingDone}
                />
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
          <button className={canSend ? "button-active" : "button-inactive"}>Send</button>
        </form>
      </div>

      <div className="video-container">
      <video
        className={`video ${isTalking ? "hide" : "visible"}`}
        autoPlay
        muted
        loop
        playsInline
        onClick={onClick}
      >
        <source src={RestingLion} />
        Your Browser Does Not Support Video Content
      </video>
      <video
        className={`video ${isTalking ? "visible" : "hide"}`}
        autoPlay
        muted
        loop
        playsInline
        onClick={onClick}
      >
        <source src={TalkingLion} />
        Your Browser Does Not Support Video Content
      </video>
      </div>
    </div>
  );
}
