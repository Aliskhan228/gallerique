import { Button } from "antd";
import { useRef } from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const featuresSection = useRef();

  const handleScrollDownClick = () => {
    featuresSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="welcome-page">
      <section className="welcome-page__main-block">
        <div className="container">
          <div className="wrapper">
            <h1 className="welcome-page__title">
              {" "}
              Welcome to Gallerique, where your photo collection becomes a
              visual masterpiece!
            </h1>
            <p className="welcome-page__description">
              We&apos;ve crafted an exceptional gallery app that goes beyond the
              ordinary, offering a range of features to enhance your photo
              browsing experience.
            </p>
            <div
              onClick={() => handleScrollDownClick()}
              className="go-down-button arrow-container animated fadeInDown"
            >
              <div className="arrow-2">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <div className="arrow-1 animated hinge infinite zoomIn"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={featuresSection}
        id="features"
        className="welcome-page__features-block"
      >
        <div className="container">
          <div className="wrapper">
            <div className="key-features">
              <p className="key-features__title">Key Features</p>
              <ul className="key-features__list">
                <li className="key-features__list-item">
                  Smart Search: Instantly locate specific images with our
                  intelligent search feature. Whether it&apos;s a date,
                  location, or a specific tag, Gallerique makes finding your
                  cherished moments quick and hassle-free.
                </li>
                <li className="key-features__list-item">
                  Dynamic Filters: Elevate your viewing experience with
                  customizable filters. From vintage vibes to vibrant hues,
                  apply filters effortlessly to give your photos the perfect
                  mood and tone.
                </li>
                <li className="key-features__list-item">
                  Interactive Preview: Dive into your memories with our
                  interactive preview feature. Simply tap on an image to enlarge
                  and swipe through your collection effortlessly. Pinch to zoom
                  in for a closer look at the details that matter most.
                </li>
                <li className="key-features__list-item">
                  Rich Image Information: Get to know the story behind each
                  photo. Gallerique provides detailed information, including
                  date, location, and any manually added captions. Rediscover
                  the context and emotions associated with your images.
                </li>
              </ul>
              <div className="welcome-page__subtext">
                Move to gallery now and immerse yourself in a world of visual
                delight. Explore, reminisce, and curate your memories with a
                gallery app that understands and enhances your connection to
                your photos.
              </div>
            </div>
            <Link to={"/gallery"}>
              <Button className="welcome-page__button" type="primary">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
