import MainNavigation from "@/components/layout/MainNavigation";
import MapPage from "@/components/layout/Map";
import classes from "./index.module.css";
import { MongoClient } from "mongodb";
import OfertaList from "@/components/layout/add/OfertaList";
import { BsTelephoneFill } from "react-icons/bs";

const StartPage = (props) => {
  // console.log("dupa");

  // console.log(props.products);
  return (
    <>
      <MainNavigation />
      <div className={classes.wrapper}>
        <h1>StartPage</h1>
        <section id="galeria">Galeria</section>
        {/* Bedzie przycisk zobacz wiecej w miejscu galeria i przekieruje na innego page */}
        <section id="oferta">
          <OfertaList products={props.products} />
        </section>
        <section id="kontakt">
          <p>Kontakt</p>

          <div>
            <p>Skontaktuj się z nami!</p>
            <span itemprop="telephone">
              <a href="tel:+48896161626">
                <BsTelephoneFill />
                +48 896 161 626
              </a>
            </span>
          </div>

          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcukierniamaziuk&tabs=timeline%2C%20messages&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500"
            height="700"
            // style="border:none;overflow:hidden"
            // scrolling="no"
            frameborder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </section>
        <section id="mapa">
          <h2>Mapa</h2>
          <MapPage />
        </section>
      </div>
    </>
  );
};
export async function getStaticProps() {
  // server side code
  // fetch API, standardowa procedura wyciagania danych z wlasnego endpointa (swojej bazy danych)
  const client = await MongoClient.connect(process.env.PRODUCTS_CLUSTER);

  const db = client.db();

  const productsCollection = db.collection("products");

  const products = await productsCollection.find().toArray(); // find defaultowo znajduje wszzystkie dokumenty w danej kolekcji
  client.close();
  return {
    props: {
      // set props and wait to load props.
      products: products.map((product) => ({
        title: product.title,
        price: product.price,
        id: product._id.toString(),
      })),
    },
    revalidate: 1, // re-generate page every 10 seconds IF there are requests coming
  };
}
export default StartPage;
