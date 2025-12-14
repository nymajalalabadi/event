import { MongoClient } from 'mongodb';

export async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
         res.status(422).json({ message: 'Invalid email address' });
         return;
        }

        const client = await MongoClient.connect('mongodb+srv://nima:nyma19981376bign@cluster0.q2qrhzb.mongodb.net/?appName=Cluster0');

        const db = client.db();

        const newsletterCollection = db.collection('newsletter');

        await newsletterCollection.insertOne({ email: userEmail });
        
        client.close();

        return res.status(201).json({ message: 'Signed up!' });
    }
    return new Response('Method not allowed', { status: 405 });
}