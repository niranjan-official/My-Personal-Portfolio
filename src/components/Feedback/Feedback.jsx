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
    <div className="feedback w-full sm:w-max p-6 rounded-xl">
      <form
        onSubmit={handleSubmit}
        ref={form}
        className="flex flex-col sm:flex-row"
      >
        <div className="flex flex-col">
          <input
            value={formData.name}
            onChange={(e) => setData({ name: e.target.value })}
            name="name"
            type="text"
            placeholder="Your Name"
            className="mb-8 w-full sm:w-96 rounded-md border-2 border-teal-600 p-3 bg-transparent"
            required
          />

          <input
            value={formData.email}
            onChange={(e) => setData({ email: e.target.value })}
            name="email"
            type="email"
            placeholder="Email"
            className="mb-8 w-full sm:w-96 rounded-md border-2 border-teal-600 p-3 bg-transparent"
            required
          />

          <input
            value={formData.subject}
            onChange={(e) => setData({ subject: e.target.value })}
            name="subject"
            type="text"
            placeholder="Subject"
            className="mb-8 w-full sm:w-96 rounded-md border-2 border-teal-600 p-3 bg-transparent"
            required
          />

          <input
            value={formData.message}
            onChange={(e) => setData({ message: e.target.value })}
            name="message"
            type="text"
            placeholder="Message"
            className=" w-full sm:w-96 h-40 rounded-md border-2 border-teal-600 p-3 bg-transparent"
            required
          />
        </div>

        <div className="submit flex justify-center items-center p-8">
          <Fade>
            <button
              type="submit"
              className="h-32 w-32 shadow-inner shadow-teal-600 text-teal-400 rounded-full hover:scale-110"
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
