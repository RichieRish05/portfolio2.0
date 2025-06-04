import "./contactForm.css";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("myzjyroa");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  
  return (

    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-header">Contact Me</h2>
      <input
        id="email"
        type="email" 
        name="email"
        className="email-field"
        placeholder="Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className="content-field"
        placeholder="Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" 
      disabled={state.submitting}
      className="submit-button"
      >
        Submit
      </button>
    </form>
  );
}