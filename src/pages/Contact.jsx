import {
  EnvironmentOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  SendOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <h1 className="contact__title">Contact Us</h1>

          <div className="contact__content">
            <form className="contact__form">
              <label className="contact__form-label" htmlFor="name">
                Your Name
              </label>
              <input type="text" name="name" className="contact__form-input" />
              <label className="contact__form-label" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
              />
              <label className="contact__form-label" htmlFor="email">
                Your Message
              </label>
              <textarea
                name="message"
                className="contact__form-input"
                rows={10}
              />
              <button type="submit" className="contact__form-submit">
                Send
                <SendOutlined />
              </button>
            </form>
            <div className="contact__contacts">
              <ul className="contact__contacts-list">
                <li className="contact__contacts-item">
                  <EnvironmentOutlined />
                  Cityville, Stateland
                </li>
                <li className="contact__contacts-item">
                  <PhoneOutlined />
                  <a href="tel:05010918772">0 501 091 87 72</a>
                </li>
                <li className="contact__contacts-item">
                  <span className="material-symbols-outlined">mail</span>
                  <a href="mailto:aliskhanreventon@gmail.com">
                    aliskhanreventon@gmail.com
                  </a>
                </li>
              </ul>
              <ul className="contact__contacts-social">
                <li className="contact__contacts-item">
                  <a href="whatsapp.com">
                    <WhatsAppOutlined />
                  </a>
                </li>
                <li className="contact__contacts-item">
                  <a href="instagram.com">
                    <InstagramOutlined />
                  </a>
                </li>
                <li className="contact__contacts-item">
                  <a href="facebook.com">
                    <FacebookOutlined />
                  </a>
                </li>
                <li className="contact__contacts-item">
                  <a href="youtube.com">
                    <YoutubeOutlined />
                  </a>
                </li>
                <li className="contact__contacts-item">
                  <a href="github.com">
                    <GithubOutlined />
                  </a>
                </li>
                <li className="contact__contacts-item">
                  <a href="twiiter.com">
                    <TwitterOutlined />
                  </a>
                </li>
                <li className="contact__contacts-item">
                  <a href="linkedin.com">
                    <LinkedinOutlined />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
