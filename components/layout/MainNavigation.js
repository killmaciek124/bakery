import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Cukiernia Maziuk</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Start</Link>
          </li>
          <li>
            <a href="#galeria">Galeria</a>
          </li>
          <li>
            <a href="#oferta">Oferta</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
          <li>
            <a href="#mapa">Mapa</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
