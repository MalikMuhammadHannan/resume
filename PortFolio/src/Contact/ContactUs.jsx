import React, { useRef } from "react";
import "./ContactUs.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const notify = () => toast("Email send Successfully");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9x2r5jr",
        "template_w7glfnm",
        form.current,
        "47fJF9A4ZoH9yTGYG"

      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={{ backgroundColor: "aliceblue" }} className="main_contact">
      <h3 className="email_h2">FEEL FREE TO CONTACT</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className=" email">
          <input
            type="text"
            autoComplete="off"
            name="to_name"
            placeholder="Enter name"
            className="email_input"
            required
          />

          <input
            type="email"
            autoComplete="off"
            name="from_email"
            placeholder="Enter email"
            className="email_input"
            required
          />

          <textarea
            autoComplete="off"
            name="message"
            placeholder="Message"
            className="email_input"
            required
          />
          <input type="submit" onClick={notify} value="Send" className="email_btn" style={{cursor:"pointer"}} />
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};
export default ContactUs;
