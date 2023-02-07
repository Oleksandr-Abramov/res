import Image from "next/image";
import s from "./About.module.css";
import cat from "../../images/cats/cat-sit.gif";

const About = () => {
  return (
    <section className={s.container} id="about">
      <h2>ABOUT ME</h2>
      <article className={s.article}>
        <p>
          I am a goal-oriented and self-motivated Full Stack developer. Looking for a job at the position frontend
          developer (React). I am working with JS, React, Redux, Node.js, CSS/HTML, Sass preprocessor, crossBrowser and
          adaptive markup skills. I also learn quicklly, and easily communicate with people. Believe my skills will be
          useful to devote to product development. <br />
          <br />I have put a lot of effort to make my skills in this resume true, and I am ready to make even more
          efforts to improve these skills
        </p>
      </article>
      <Image src={cat} alt="cat" className={s.cat} />
    </section>
  );
};

export default About;
