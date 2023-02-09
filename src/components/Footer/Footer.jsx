import s from "./Footer.module.css";
import Image from "next/image";
import mouse from "../../images/cats/mouse.gif";
import dog from "../../images/cats/cat-and-dog-short.gif";
import Form from "../Form/Form";

const Footer = () => {
  return (
    <footer className={s.container} id="contacts">
      {/* <p>contacts</p> */}
      <ul>
        <li>
          <a href="tel:0635484434">(063) 548-44-34</a>
        </li>
        <li>
          <a href="mailto: abc@example.com">aleksander.abramov@gmail.com</a>
        </li>
        <li>
          <a href="https://github.com/Oleksandr-Abramov" target="blank">
            GitHub
          </a>{" "}
          /{" "}
          <a href="https://www.linkedin.com/in/oleksandrabramov/" target="blank">
            Linked In
          </a>
        </li>
        <li></li>
        <li>Kyiv, Ukraine</li>
      </ul>
      <Form />
      <Image src={mouse} alt="cat" className={s.mouse} unoptimized={true} />
      <Image src={dog} alt="cat" className={s.dog} unoptimized={true} />
    </footer>
  );
};

export default Footer;
