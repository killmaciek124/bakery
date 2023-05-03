// const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// import { MongoClient } from "mongodb";

const CsvParser = () => {
  //props
  // console.log(props.products);
  //   return (
  //     <a href="/images/myw3schoolsimage.jpg" download>
  //     Pobierz csv products
  //   </a>
  //   )
  return <h1>csvParsser</h1>;
};

export default CsvParser;

// export async function getStaticProps() {
//   const client = await MongoClient.connect(
//     PRODUCTS_CLUSTER
//   );

//   const db = client.db();

//   const productsCollection = db.collection("products");

//   const products = await productsCollection.find().toArray();
//   client.close();
//   return {
//     props: {
//       // set props and wait to load props.
//       products: products.map((product) => ({
//         title: product.title,
//         price: product.price,
//         id: product._id.toString(),
//       })),
//     },
//     revalidate: 1, // re-generate page every 10 seconds IF there are requests coming
//   };
// }
