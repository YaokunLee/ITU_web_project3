import React from "react";
import "../common.css";

function ContactForm(): JSX.Element {
  return (
      <div>
        <h3 className="h3_h3 inside_text">Contact form</h3>
        <div className="contact_form">
          <form action="mailto:baco@gmail.com" method="post" encType="text/plain">
            <label htmlFor="yourName">Your name:</label>
            <input
                className="contact_label"
                type="text"
                name="yourName"
                id="yourName"
                defaultValue=""
            />
            <br />
            <br />
            <label htmlFor="yourEmail">Your email:</label>
            <input
                className="contact_label"
                type="email"
                name="yourEmail"
                id="yourEmail"
                defaultValue=""
            />
            <br />
            <br />
            <label htmlFor="yourMessage">Your Message:</label>
            <br />
            <textarea
                name="yourMessage"
                id="yourMessage"
                rows={6}
                cols={33}
            ></textarea>
            <br />
            <input
                style={{ position: "relative", left: "175px" }}
                className="btn-submit"
                type="submit"
                value="SUBMIT"
            />
          </form>
        </div>
      </div>
  );
}

export default ContactForm;
