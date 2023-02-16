import s from "./Header.module.css";
import Image from "next/image";
import bird from "../../images/cats/bird.gif";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const { basePath } = useRouter();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  return (
    <header className={s.container}>
      <div className={s.downloadBtnWrapper}>
        <a
          href={`${basePath}Oleksandr Abramov Full Stack developer.pdf`}
          download="Oleksandr Abramov Full Stack developer.pdf"
          className={s.downloadBtn}
        >
          Download CV
        </a>
      </div>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="skills">Skills</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <Image src={bird} alt="cat" className={s.bird} unoptimized={true} />
      {showTopBtn && (
        // <div className="top-to-btm">

        <a
          onClick={() =>
            scroll.scrollToTop({
              duration: 1,
              delay: 1,
            })
          }
          className={s.toTopBtn}
        >
          <i className="fa fa-chevron-up"></i>
        </a>
      )}
    </header>
  );
};

export default Header;
