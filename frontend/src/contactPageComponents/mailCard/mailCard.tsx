import "./mailCard.css";

import MailIcon from "../../assets/img/email.png";

export default function MailCard() {
  const emailAddress = "rishimurumkar@gmail.com";
  const subject = "Let's work together!";
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}`;

  return (
    <div
      className="contact-card mail-card"
      onClick={() => window.open(mailtoLink, "_blank")}
      style={{ cursor: "pointer" }}
    >
      <img src={MailIcon} alt="Mail Icon" className="email-icon" />
    </div>
  );
}
