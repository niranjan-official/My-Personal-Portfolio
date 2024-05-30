import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "@/Styles/Reveal";

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
      <form onSubmit={handleSubmit} ref={form} className="flex flex-col gap-6">
        <Reveal>
          <input
            value={formData.name}
            onChange={(e) => setData({ name: e.target.value })}
            name="name"
            type="text"
            placeholder="Your Name"
            className=""
            required
          />
        </Reveal>
        <Reveal>
          <input
            value={formData.email}
            onChange={(e) => setData({ email: e.target.value })}
            name="email"
            type="email"
            placeholder="Email"
            className=""
            required
          />
        </Reveal>
        <Reveal>
          <input
            value={formData.subject}
            onChange={(e) => setData({ subject: e.target.value })}
            name="subject"
            type="text"
            placeholder="Subject"
            className=""
            required
          />
        </Reveal>
        <Reveal>
          <input
            value={formData.message}
            onChange={(e) => setData({ message: e.target.value })}
            name="message"
            type="text"
            placeholder="Message"
            className="h-40"
            required
          />
        </Reveal>

        <button
          type="submit"
          className="w-fit bg-primary hover:bg-primary/80 text-dark-1 rounded-[0.4rem] px-6 py-2 font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Feedback;
