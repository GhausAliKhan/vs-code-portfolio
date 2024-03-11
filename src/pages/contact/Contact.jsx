import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm('xeqyzano');
  return (
    <div className="page">
      <div className="heading">
        <h1>Get In Touch</h1>
        <h2>Fill in the form to start a conversation</h2>
      </div>
      <div className="contact">
        <div className="contactDescription">
          <p>
            You can contact me with any questions, suggestions or just to say
            Hi. I am always open to new ideas and collaborations. It can be
            anything like collaborating on good projects/startups or anything else.
          </p>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <input type="user" name="user" placeholder="Name" />
            <ValidationError prefix="User" field="user" errors={state.errors} />

            <input type="email" name="email" placeholder="Email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea name="message" cols="22" rows="5" placeholder="Your Message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}> Submit </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
