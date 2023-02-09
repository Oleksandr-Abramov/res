import Link from "next/link";
import s from "./Header.module.css";
import Image from "next/image";
import bird from "../../images/cats/bird.gif";
import { useRouter } from "next/router";

const Header = () => {
  const { basePath } = useRouter();

  return (
    <header className={s.container}>
      <a
        href={`${basePath}Oleksandr Abramov Full Stack developer.pdf`}
        download="Oleksandr Abramov Full Stack developer.pdf"
        className={s.downloadBtn}
      >
        Download CV
      </a>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <Link href={"/#about"}>About</Link>
          </li>
          <li>
            <Link href={"/#skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"/#projects"}>Projects</Link>
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
