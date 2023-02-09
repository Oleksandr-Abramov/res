import s from "./Skills.module.css";
import Image from "next/image";
import cat from "../../images/cats/cat-on-table.gif";
import h from "../../images/window/rigel-h.webp";
import v from "../../images/window/rigel-v.webp";
import { tools, paw, earth } from "../../images/icons";

const Skills = () => {
  return (
    <section className={s.container} id="skills">
      <h2>MY SKILLS</h2>

      <article className={s.article}>
        <div className={s.hardSkills}>
          {/* <div className={s.articleWrapper}></div> */}
          <p>TECH SKILLS:</p>
          <ul>
            <li>
              <Image src={tools} alt="icon" className={s.iconTools} />
              HTML5, CSS3, SASS{" "}
            </li>
            <li>
              <Image src={tools} alt="icon" className={s.iconTools} />
              Responsive Adaptive
            </li>
            <li>
              <Image src={tools} alt="icon" className={s.iconTools} />
              GIT / GitHub
            </li>
            <li>
              <Image src={tools} alt="icon" className={s.iconTools} />
              JavaScript
            </li>
            <li>
              <Image src={tools} alt="icon" className={s.iconTools} />
              React, Next.js
            </li>
            <li>
              <Image src={tools} alt="icon" className={s.iconTools} />
              Redux / Redux Toolkit
            </li>
            <li>
              <Image src={tools} alt="icon" className={s.iconTools} />
              REST API
            </li>
            <li>
              <Image src={tools} alt="icon" className={s.iconTools} />
              Node.js, Express
            </li>
            <li>
              <Image src={tools} alt="icon" className={s.iconTools} />
              MongoDB, Mongoose
            </li>
            <li>
              <Image src={tools} alt="icon" className={s.iconTools} />
              WebSockets, Figma
            </li>
          </ul>
        </div>
        <div className={s.hardSkills}>
          {/* <div className={s.articleWrapper}></div> */}
          <p>SOFT SKILLS:</p>
          <ul>
            <li>
              <Image src={paw} alt="icon" className={s.iconTools} />
              Growth Mindset
            </li>
            <li>
              <Image src={paw} alt="icon" className={s.iconTools} />
              Teamwork
            </li>
            <li>
              <Image src={paw} alt="icon" className={s.iconTools} />
              Good communication
            </li>
            <li>
              <Image src={paw} alt="icon" className={s.iconTools} />
              Adaptivity and flexibility
            </li>
            <li>
              <Image src={paw} alt="icon" className={s.iconTools} />
              Responsibility
            </li>
          </ul>
          <p>LANGUAGES:</p>
          <ul className={s.lastList}>
            <li>
              <Image src={earth} alt="icon" className={s.iconTools} />
              Ukrainian - Native
            </li>
            <li>
              <Image src={earth} alt="icon" className={s.iconTools} />
              English - <br />
              pre-Intermediate
            </li>
          </ul>
        </div>
      </article>
      <Image src={cat} alt="cat" className={s.cat} unoptimized={true} />
      <Image src={v} alt="cat" className={s.v} />
      <Image src={h} alt="cat" className={s.h} />
    </section>
  );
};

export default Skills;
