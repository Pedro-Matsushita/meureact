import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <span>ODS 13</span>
        <nav>
          <Link to="/">Página Principal</Link>
          <Link to="/ods">ODS</Link>
          <Link to="/sobre">Sobre mim</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
