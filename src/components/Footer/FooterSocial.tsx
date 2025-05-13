import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import styles from "./Footer.module.css";
import { Link } from "../Link";

const FooterSocial = () => (
  <div className={styles.network}>
    <h4 className={styles.title}>Siga nossas redes:</h4>
    <div className={styles.icons}>
      <Link href="#">
        <FaWhatsapp className={styles.icon} />
      </Link>
      <Link href="#">
        <FaInstagram className={styles.icon} />
      </Link>
      <Link href="#">
        <FaTiktok className={styles.icon} />
      </Link>
    </div>
  </div>
);

export default FooterSocial;