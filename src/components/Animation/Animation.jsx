import styles from "./animation.module.css";
import { cloud } from "../../images/icons";
import Image from "next/image";

export default function Animation() {
  return (
    <div className={styles.cabbagebackground}>
      <ul className={styles.kapusta}>
        <li>
          <Image src={cloud} width="184" height="188" className={styles.cabbage} />
        </li>
        <li>
          <Image src={cloud} width="184" height="188" className={styles.cabbage} />
        </li>
        <li>
          <Image src={cloud} width="184" height="188" className={styles.cabbage} />
        </li>
        <li>
          <Image src={cloud} width="184" height="188" className={styles.cabbage} />
        </li>
      </ul>
    </div>
  );
}
