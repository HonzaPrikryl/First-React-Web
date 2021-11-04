import emailjs from "emailjs-com";
import React from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 3rem;
  border: 2px solid #dddddd;
  :hover {
    opacity: 0.7;
  }
  margin-top: 10px;
`;
const TextArea = styled.textarea`
  height: 7.5rem;
  border: 2px solid #dddddd;
  :hover {
    opacity: 0.7;
  }
  margin-top: 10px;
  margin-bottom: 15px;
`;
export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_3f3updu",
        e.target,
        "user_4iNoNtg8lVT3OJZUJrcpq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form onSubmit={sendEmail}>
      <div>
        <Input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
          required
        />
      </div>
      <div>
        <Input
          type="email"
          className="form-control"
          placeholder="Email Address"
          name="email"
          required
        />
      </div>
      <div>
        <TextArea
          className="form-control"
          id=""
          rows="4"
          placeholder="Your message"
          name="message"
        />
      </div>
      <div>
        <Input type="submit" className="submit" value="Send Message" />
      </div>
    </form>
  );
}
