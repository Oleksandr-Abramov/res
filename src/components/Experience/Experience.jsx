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
          <a href="https://website-cars-collection.netlify.app/" target="blank">
            <li className={s.imgContainer}>
              <Image src={carSite} alt="icon" className={s.img} />
              <ul className={s.imgTitle}>
                <li>
                  <p>- commercial team project on UpWork (now in development)</p>
                </li>
                <li>
                  <p>- Next.js</p>
                </li>
                <li>
                  <p>- Redux Toolkit</p>
                </li>
                {/* <li>
                  <p>- GraphQl</p>
                </li> */}
              </ul>
            </li>
          </a>
          <a href="https://pro-test-teamproject.netlify.app/auth/" target="blank">
            <li className={s.imgContainer}>
              <Image src={proTest} alt="icon" className={s.img} />
              <ul className={s.imgTitle}>
                <li>
                  <p>- study project team project</p>
                </li>
                <li>
                  <p>- React.js</p>
                </li>
                <li>
                  <p>- Redux Toolkit</p>
                </li>
                <li>
                  <p>- Node.js</p>
                </li>
              </ul>
            </li>
          </a>
          <a href="https://jocular-croquembouche-65fdcf.netlify.app/" target="blank">
            <li className={s.imgContainer}>
              <Image src={kapusta} alt="icon" className={s.img} />
              <ul className={s.imgTitle}>
                <li>
                  <p>- study project team project</p>
                </li>
                <li>
                  <p>- React.js</p>
                </li>
                <li>
                  <p>- Redux Toolkit</p>
                </li>
                <li>
                  <p>- REST API</p>
                </li>
              </ul>
            </li>
          </a>
          <a href="https://oleksandr-abramov.github.io/goit-js-hw-11-Class/" target="blank">
            <li className={s.imgContainer}>
              <Image src={pictures} alt="icon" className={s.img} />
              <ul className={s.imgTitle}>
                <li>
                  <p>- study project team project</p>
                </li>
                <li>
                  <p>- JavaScript</p>
                </li>
                <li>
                  <p>- REST API</p>
                </li>
              </ul>
            </li>
          </a>
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
      <Image src={cat} alt="cat" className={s.cat} unoptimized={true} />
    </section>
  );
};

export default Experience;
