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
            <Link href="/start/galeria">Galeria</Link>
          </li>
          <li>
            <Link href="/start/oferta">Oferta</Link>
          </li>
          <li>
            <Link href="/start/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link href="/start/mapa">Mapa</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
