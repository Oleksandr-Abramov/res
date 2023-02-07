import s from "./Experience.module.css";
import Image from "next/image";
import cat from "../../images/cats/cat-sleep.gif";

const Experience = () => {
  return (
    <section className={s.container} id="experience">
      <div className={s.articleWrapper}></div>
      <article className={s.article}>
        <p>experience</p>
        <p>
          TEAM PROJECTS Movie search page Filmoteka (JavaScript): My responsibilities in group were creating of custom
          pagination. link Financial accounting application Kapu$ta (React.js +Redux): My responsibilities in group were
          creating of main section. link App for testing QA tester Pro Test (Node.js + MongoDB + React.js): My
          responsibilities in group were creating of testing and result pages, and also Scrum. link (front), link (back)
          OWN PROJECTS Landing page for WebStudio (HTML,SCSS): Adaptive Layout Landing by Mobile First Strategy. link
          Phonebook application (React.js, Redux): React application with Redux Toolkit state management. link
        </p>
      </article>
      <Image src={cat} alt="cat" className={s.cat} />
    </section>
  );
};

export default Experience;
