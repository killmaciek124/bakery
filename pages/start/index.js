import MainNavigation from "@/components/layout/MainNavigation";
import MapPage from "@/components/layout/Map";
import classes from "./index.module.css";
const StartPage = () => {
  return (
    <>
      <MainNavigation />
      <div className={classes.wrapper}>
        <h1>StartPage</h1>
        <section id="galeria">Galeria</section>
        <section id="oferta">Oferta</section>
        <section id="kontakt">Kontakt</section>
        <section id="mapa">
          <h2>Mapa</h2>
          <MapPage />
        </section>
      </div>
    </>
  );
};

export default StartPage;
