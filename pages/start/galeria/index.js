import { MongoClient } from "mongodb";
const GaleriaPage = () => {
  return <h1>Galeria zdjec</h1>;
};

export default GaleriaPage;

export async function getStaticProps() {
  // server side code
  // fetch API, standardowa procedura wyciagania danych z wlasnego endpointa (swojej bazy danych)
  const client = await MongoClient.connect(process.env.PICTURES_CLUSTER);

  const db = client.db();

  const meetupsCollection = db.collection("pictures");

  const meetups = await meetupsCollection.find().toArray(); // find defaultowo znajduje wszzystkie dokumenty w danej kolekcji
  client.close();
  return {
    props: {
      // set props and wait to load props.
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, // re-generate page every 10 seconds IF there are requests coming
  };
}
