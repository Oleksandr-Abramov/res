import Image from "next/image";
import s from "./About.module.css";
import cat from "../../images/cats/cat-sit.gif";

const About = () => {
  return (
    <section className={s.container} id="about">
      <h2>ABOUT ME</h2>
      <article className={s.article}>
        <p>
          Hello! I am Oleksandr Abramov. <br />
          <br />
          During my career, I have already tried myself in many areas and finally found what I really like. And no,
          it&apos;s not drawing or breeding cats, although I love them too. Web development and programming, that&apos;s
          what I need! I am already doing this and plan to develop and grow.
        </p>
        <br />
        <p>
          I am looking for a job in a good team, where I could develop my skills and use them to perform the different
          interesting tasks and bring value to your company. <br />
          Below is information about my skills and projects.
        </p>
      </article>
      <Image src={cat} alt="cat" className={s.cat} unoptimized={true} />
    </section>
  );
};

export default About;
