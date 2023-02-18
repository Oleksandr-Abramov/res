import s from "./Skills.module.css";
import Image from "next/image";
import cat from "../../images/cats/cat-on-table.gif";
import hl from "../../images/window/h-l.webp";
import hr from "../../images/window/h-r.webp";
import v from "../../images/window/v.webp";
import { tools, paw, earth, circle } from "../../images/icons";

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
              <Image src={circle} alt="icon" className={s.iconTools} />
              HTML5, CSS3, SASS{" "}
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              Responsive Adaptive
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              GIT / GitHub
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              JavaScript
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              React, Next.js
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              Redux / Redux Toolkit
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              REST API
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              Node.js, Express
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              MongoDB, Mongoose
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              WebSockets, Figma
            </li>
          </ul>
        </div>
        <div className={s.hardSkills}>
          {/* <div className={s.articleWrapper}></div> */}
          <p>SOFT SKILLS:</p>
          <ul>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              Growth Mindset
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              Teamwork
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              Good communication
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              Adaptivity and flexibility
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              Responsibility
            </li>
          </ul>
          <p>LANGUAGES:</p>
          <ul className={s.lastList}>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              Ukrainian - Native
            </li>
            <li>
              <Image src={circle} alt="icon" className={s.iconTools} />
              English - Intermediate
            </li>
          </ul>
        </div>
      </article>
      <Image src={cat} alt="cat" className={s.cat} unoptimized={true} />
      <Image src={hl} alt="cat" className={s.hl} />
      <Image src={hr} alt="cat" className={s.hr} />
      <Image src={v} alt="cat" className={s.v} />
    </section>
  );
};

export default Skills;
