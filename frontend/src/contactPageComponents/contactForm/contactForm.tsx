import "./contactForm.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [canSubmit, setCanSubmit] = useState(true);

  const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!canSubmit) return;

    setCanSubmit(false);

    if (!validateEmail(email)) {
      setEmailError("Invalid Email");
      setCanSubmit(true);
      return;
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Message is empty");
      setCanSubmit(true);
      return;
    } else {
      setMessageError("");
    }

    // Submit via fetch to Google Forms
    await fetch(import.meta.env.VITE_GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: email,
        message: message,
      }),
    })
      .then(() => {
        toast.success("Your message has been sent!");
        setEmail("");
        setMessage("");
        setCanSubmit(true);
      })
      .catch((error) => {
        toast.error("Failed to send. Please try again later.");
        console.error(error);
        setCanSubmit(true);
      });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setMessageError("");
  };

  return (
    <form onSubmit={onSubmit} className="form-container">
      <h2 className="form-header">Contact Me</h2>

      <div className="input-container">
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className={emailError ? "email-field error-field" : "email-field"}
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>

      <div className="input-container">
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
          className={
            messageError ? "message-field error-field" : "message-field"
          }
        />
        {messageError && <p className="error-message">{messageError}</p>}
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
      <ToastContainer position="top-right" autoClose={3000} />
    </form>
  );
}
