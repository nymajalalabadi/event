import { MongoClient } from 'mongodb';

export async function handler(req, res) {

    const eventId = req.query.eventId;

    const client = await MongoClient.connect('mongodb+srv://nima:test123@cluster0.q2qrhzb.mongodb.net/events?appName=Cluster0');

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        if (!email || email.trim() === '' || !name || name.trim() === '' || !text || text.trim() === '') {
            return res.status(422).json({ message: 'Invalid input.' });
        }

        const newComment = {
            email,
            name,
            text,
            eventId
        }

        const db = client.db();
        const commentsCollection = db.collection('comments');
        await commentsCollection.insertOne(newComment);

        newComment.id = result.insertedId;

        return res.status(201).json({ message: 'Comment added!', comment: newComment });
    }

    if (req.method === 'GET') {
        const db = client.db();

        const commentsCollection = db.collection('comments');
        const comments = await commentsCollection.find({ eventId: eventId })
        .sort({ _id: -1 })
        .toArray();

        return res.status(200).json({ comments: comments });
    }

    client.close();

    return new Response('Method not allowed', { status: 405 });
}
