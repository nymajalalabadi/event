import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    return MongoClient.connect('mongodb+srv://nima:test123@cluster0.q2qrhzb.mongodb.net/events?appName=Cluster0');
}

export async function insertDocument(client, collection, document) {
    const db = client.db();
    const newsletterCollection = db.collection(collection);
    const result = await newsletterCollection.insertOne(document);
    return result;
}


export async function getAllDocuments(client, collection, sort) {
    const db = client.db();
    const newsletterCollection = db.collection(collection);
    const documents = await newsletterCollection.find().sort(sort).toArray();
    return documents;
}