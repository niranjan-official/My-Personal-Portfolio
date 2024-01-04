import React, { useRef, useState } from "react";
import "./Feedback.css";
import Fade from "../../Styles/Fade";
import emailjs from "@emailjs/browser";

function Feedback() {
  const form = useRef();
  const [formData, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      Name: form.current.name.value,
      From: form.current.email.value,
      Subject: form.current.subject.value,
      Message: form.current.message.value,
    };
    console.log(message);

    emailjs
      .sendForm(
        "service_c51qj1l",
        "template_ean83g7",
        form.current,
        "OWoHGZ94EI8Pn8jAU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          alert("Submitted Succesfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="feedback">
      <form onSubmit={handleSubmit} ref={form}>
        <div>
          <div className="name">
            <input
              value={formData.name}
              onChange={(e) => setData({ name: e.target.value })}
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="email">
            <input
              value={formData.email}
              onChange={(e) => setData({ email: e.target.value })}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="subject">
            <input
              value={formData.subject}
              onChange={(e) => setData({ subject: e.target.value })}
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />
          </div>
          <div className="message">
            <input
              value={formData.message}
              onChange={(e) => setData({ message: e.target.value })}
              name="message"
              type="text"
              placeholder="Message"
              required
            />
          </div>
        </div>

        <div className="submit">
          <Fade>
            <button
              type="submit"
              className="shadow-inner shadow-teal-600 text-teal-400"
            >
              Send Message
            </button>
          </Fade>
        </div>
      </form>
    </div>
  );
}

export default Feedback;
