// import { MongoClient } from "mongodb";
// import * as mongodb from "mongodb";
// when importing anything from mongodb i get dns error

const DeleteItems = (props) => {
  return (
    <>
      <h1>Items to DeleteItems</h1>
      {/* <ul>
        {props.products.map((product) => (
          <OfertaItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </ul> */}
      {/* <ul>
        {props.products.map((product) => {
          return (
            <li>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <RiDeleteBin6Fill />
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.PRODUCTS_CLUSTER);

  const db = client.db();

  const productsCollection = db.collection("products");

  const products = await productsCollection.find().toArray();
  client.close();
  console.log(products);
  return {
    props: {
      products: products.map((product) => ({
        title: product.title,
        price: product.price,
        id: product._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default DeleteItems;
