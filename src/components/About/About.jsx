import Image from "next/image";
import s from "./About.module.css";
import cat from "../../images/cats/cat-sit.gif";

const About = () => {
  return (
    <section className={s.container} id="about">
      <div className={s.articleWrapper}></div>
      <article className={s.article}>
        <p>about</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ab eum quibusdam dignissimos perferendis labore
          ullam officiis necessitatibus, corporis totam, vero iure aperiam! Laboriosam distinctio illo, quasi quod
          possimus sequi dignissimos. Distinctio error, odio sed, facere dolorum aliquid expedita rem tenetur quibusdam
          tempore eaque quae sapiente sequi quasi sit maxime repudiandae? Animi explicabo, earum perferendis corrupti
          iusto ipsam ducimus ipsum eum itaque pariatur quisquam laudantium excepturi! Iste laudantium porro aliquid
          magni, corrupti praesentium explicabo cumque eos, itaque provident alias enim officiis esse aspernatur?
          Eveniet ullam impedit pariatur cupiditate architecto. Laudantium quisquam possimus consectetur, dolores at
          aspernatur labore delectus iste? Deserunt?
        </p>
      </article>
      <Image src={cat} alt="cat" className={s.cat} />
    </section>
  );
};

export default About;
