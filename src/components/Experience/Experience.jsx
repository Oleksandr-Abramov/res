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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, atque libero molestiae totam voluptate,
          tempora veniam tenetur doloremque illo ducimus voluptatem dolore expedita vitae recusandae distinctio,
          voluptatibus repellat assumenda? Labore facilis, sapiente vero illum totam nostrum? Et, itaque? Illum numquam
          cum voluptas minus magni veniam assumenda in velit culpa saepe, vitae fuga aperiam, voluptate a ad placeat
          ipsam dolores deserunt? Dolorum odit sint magnam quasi labore at eligendi, aspernatur, doloremque eveniet cum
          possimus sit vero? Fugiat doloremque sunt neque. Beatae rem incidunt veniam? Voluptatibus velit blanditiis,
          animi enim illum quod amet odio veniam ratione accusamus adipisci voluptates repellat. Sapiente, dolorum.
        </p>
      </article>
      <Image src={cat} alt="cat" className={s.cat} />
    </section>
  );
};

export default Experience;
