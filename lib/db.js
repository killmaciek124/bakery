import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = MongoClient.connect(process.env.AUTH_CLUSTER);
  return client;
};
