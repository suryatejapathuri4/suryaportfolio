import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:suryatejapathuri4@gmail.com" data-cursor="disable">
                suryatejapathuri4@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91 9032625086</p>
            <h4>Location</h4>
            <p>India (open to remote work)</p>
          </div>
          <div className="contact-box">
            <h4>Profiles</h4>
            <a
              href="https://github.com/suryateja"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="mailto:suryatejapathuri4@gmail.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Surya Teja Pathuri</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
