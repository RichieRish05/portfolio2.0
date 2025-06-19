import "./contactForm.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Invalid Email");
      return;
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Message is empty");
      return;
    } else {
      setMessageError("");
    }

    // Submit via fetch to FormSubmit
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/004ebf6f2adbab47b6c86b7efea1c915",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            message: message,
          }),
        },
      );

      if (res.ok) {
        toast.success("Your message has been sent!");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send. Please try again later.");
      }
    } catch (err) {
      toast.error("An error occurred.");
      console.error(err);
    }
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
