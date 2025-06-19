import "./ContactPage.css";
import GithubCard from "../../contactPageComponents/githubCard/githubCard";
import LinkedinCard from "../../contactPageComponents/linkedinCard/linkedinCard";
import MailCard from "../../contactPageComponents/mailCard/mailCard";
import ContactForm from "../../contactPageComponents/contactForm/contactForm";

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper">
      <GithubCard />
      <LinkedinCard />
      <MailCard />
      {/* <ContactForm /> */}
    </div>
  );
}
