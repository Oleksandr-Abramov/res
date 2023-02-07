import s from "./Footer.module.css";
import Image from "next/image";
import mouse from "../../images/cats/mouse.gif";
import dog from "../../images/cats/cat-and-dog.gif";

const Footer = () => {
  return (
    <footer className={s.container} id="contacts">
      <p>footer</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio id doloribus ipsam minima aliquam, culpa est
        ad voluptate perspiciatis esse autem nam rerum totam non assumenda error! Earum quam vero reiciendis maiores
        magni doloremque mollitia, eveniet facilis et quibusdam inventore, deleniti tenetur corrupti quis ipsam sit
        autem qui, veniam adipisci facere id modi rerum consequuntur omnis? Sequi natus rerum eligendi sed aliquid totam
        neque eius quos perspiciatis et magni fugit officiis veritatis, iusto explicabo, numquam magnam, qui quo.
      </p>
      <Image src={mouse} alt="cat" className={s.mouse} />
      <Image src={dog} alt="cat" className={s.dog} />
    </footer>
  );
};

export default Footer;
