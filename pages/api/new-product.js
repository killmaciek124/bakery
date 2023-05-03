// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  // this needs error handlig (try catch f.e)
  // req.method (post get itp)
  // req.body (body incoming request)

  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data; // tak wyglada DATA
    const client = await MongoClient.connect(
      process.env.PRODUCTS_CLUSTER // dodalem meetups po net/
    );

    const db = client.db(); // database

    const productsCollection = db.collection("products");
    // w bazie danych mamy stół (collection o nazwie meetups) a na stole duzo dokumentow (dane/ endpointy)

    const result = await productsCollection.insertOne(data); // insertujemy cos do collekcji (zawsze type object)

    console.log(result);

    client.close(); // musimy zamknac baze danych na koniec

    res.status(201).json({ message: "Inserted successfully!" }); // 201 status ze git!
  }
  if (req.method === "DELETE") {
    const data = req.body;
    // const { title, image, address, description } = data; // tak wyglada DATA
    const client = await MongoClient.connect(process.env.PRODUCTS_CLUSTER);

    const db = client.db();

    const productsCollection = db.collection("products");

    const doesElementExists = await productsCollection.countDocuments(
      { title: data.titleToDelete },
      { limit: 1 }
    );

    if (doesElementExists) {
      const result = await productsCollection.deleteOne({
        title: data.titleToDelete,
      }); // delete object by name

      client.close();

      res.status(201).json({ message: "Deleted successfully!" });
    } else {
      client.close();
      res.status(422).json({ message: "Given product does not exist!" });
    }
  }
}
