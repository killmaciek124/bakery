import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  // this needs error handlig (try catch f.e)
  // req.method (post get itp)
  // req.body (body incoming request)

  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data; // tak wyglada DATA
    const client = await MongoClient.connect(
      process.env.PICTURES_CLUSTER
      // dodalem meetups po net/
    );

    const db = client.db(); // database

    const picturesCollection = db.collection("pictures");
    // w bazie danych mamy stół (collection o nazwie meetups) a na stole duzo dokumentow (dane/ endpointy)

    const result = await picturesCollection.insertOne(data); // insertujemy cos do collekcji (zawsze type object)

    console.log(result);

    client.close(); // musimy zamknac baze danych na koniec

    res.status(201).json({ message: "Inserted successfully!" }); // 201 status ze git!
  }
}
