import s from "./Experience.module.css";
import Image from "next/image";
import cat from "../../images/cats/cat-sleep.gif";
import carSite from "../../images/projects/car-site.webp";
import kapusta from "../../images/projects/kapusta.webp";
import pictures from "../../images/projects/pictures.webp";
import proTest from "../../images/projects/pro-test.webp";

const Experience = () => {
  return (
    <section className={s.container} id="projects">
      <h2>PROJECTS</h2>
      <article className={s.article}>
        <ul className={s.galleryContainer}>
          <li className={s.imgContainer}>
            <Image src={carSite} alt="icon" className={s.img} />
            <p className={s.imgTitle}>Очень интересный и продающий текст..</p>
          </li>
          <li className={s.imgContainer}>
            <Image src={proTest} alt="icon" className={s.img} />
            <p className={s.imgTitle}>Очень интересный и продающий текст..</p>
          </li>
          <li className={s.imgContainer}>
            <Image src={kapusta} alt="icon" className={s.img} />
            <p className={s.imgTitle}>Очень интересный и продающий текст..</p>
          </li>
          <li className={s.imgContainer}>
            <Image src={pictures} alt="icon" className={s.img} />
            <p className={s.imgTitle}>Очень интересный и продающий текст..</p>
          </li>
        </ul>

        {/* <p>
          TEAM PROJECTS <br />
          Movie search page Filmoteka (JavaScript): My responsibilities in group were creating of custom pagination.{" "}
          <br />
          link Financial accounting application Kapu$ta (React.js +Redux): My responsibilities in group were creating of
          main section. link <br />
          App for testing QA tester Pro Test (Node.js + MongoDB + React.js): My responsibilities in group were creating
          of testing and result pages, and also Scrum. link (front), link (back) <br />
          OWN PROJECTS
          <br />
          Landing page for WebStudio (HTML,SCSS): Adaptive Layout Landing by Mobile First Strategy. link <br />
          Phonebook application (React.js, Redux): React application with Redux Toolkit state management. link
        </p> */}
      </article>
      <Image src={cat} alt="cat" className={s.cat} />
    </section>
  );
};

export default Experience;
