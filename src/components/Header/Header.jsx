import Link from "next/link";
import s from "./Header.module.css";
import Image from "next/image";
import bird from "../../images/cats/bird.gif";

const Header = () => {
  return (
    <header className={s.container}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <Link href={"/#about"}>About</Link>
          </li>
          <li>
            <Link href={"/#skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"/#experience"}>Experience</Link>
          </li>
          <li>
            <Link href={"/#contacts"}>Contacts</Link>
          </li>
        </ul>
      </nav>
      <Image src={bird} alt="cat" className={s.bird} />
    </header>
  );
};

export default Header;
