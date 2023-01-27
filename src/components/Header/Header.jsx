import Link from "next/link";
import s from "./Header.module.css";

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
    </header>
  );
};

export default Header;
