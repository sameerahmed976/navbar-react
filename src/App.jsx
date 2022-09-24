import "./style/style.css";
import { links } from "./data";
import image from "/Logo66.svg";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaBars,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const linkRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // const containerHeight = containerRef.current.getBoundingClientRect().height;
    // // console.log(containerHeight);
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    // console.log(
    //   "🚀 ~ file: App.jsx ~ line 45 ~ useEffect ~ linkHeight",
    //   linkHeight
    // );
    if (showLinks) {
      containerRef.current.style.height = `${linkHeight}px`;
    } else {
      containerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <header className="header">
      <nav className="navbars">
        <section className="nav__header">
          <a href="/" className="nav__logo">
            <img src={image} alt="nav__logo" className="logo__image" />
            <h1 className="logo__heading">myShop</h1>
          </a>
          <button
            className="btn__hamburger"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </section>

        <section className="container__links" ref={containerRef}>
          <ul className="nav__links" ref={linkRef}>
            {links.map(({ id, text, url }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </section>
        <ul className="social__links">
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon} </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default App;
