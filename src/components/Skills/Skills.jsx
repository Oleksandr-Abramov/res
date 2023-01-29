import s from "./Skills.module.css";
import Image from "next/image";
import cat from "../../images/cats/cat-down.gif";

const Skills = () => {
  return (
    <section className={s.container} id="skills">
      <div className={s.articleWrapper}></div>
      <article className={s.article}>
        <p>skills</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quae? Quae adipisci illo similique earum vel
          excepturi, veniam illum repellendus, voluptates labore ea eum odit? Quo et eveniet animi neque blanditiis
          expedita. Iste, a modi cupiditate nobis veritatis magnam explicabo commodi magni reprehenderit! Magnam non
          mollitia fugit, ad, dolor quod cumque alias perferendis sequi, veniam nemo enim aliquid quisquam vero nobis
          similique saepe cupiditate. Modi rem aut maxime necessitatibus, rerum nisi dolorum blanditiis quidem similique
          mollitia, adipisci dignissimos repellendus.
        </p>
      </article>
      <Image src={cat} alt="cat" className={s.cat} />
    </section>
  );
};

export default Skills;
