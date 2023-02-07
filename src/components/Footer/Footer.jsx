import s from "./Footer.module.css";
import Image from "next/image";
import mouse from "../../images/cats/mouse.gif";
import dog from "../../images/cats/cat-and-dog-short.gif";
import Form from "../Form/Form";

const Footer = () => {
  return (
    <footer className={s.container} id="contacts">
      <p>contacts</p>
      <p>(063) 548-44-34 aleksander.abramov@gmail.com GitHub Linked In Kyiv, Ukraine Ready to work remotely</p>
      <Form />
      <Image src={mouse} alt="cat" className={s.mouse} />
      <Image src={dog} alt="cat" className={s.dog} />
    </footer>
  );
};

export default Footer;
