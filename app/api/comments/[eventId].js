import { connectToDatabase } from '../../../helpers/db-util';
import { insertDocument } from '../../../helpers/db-util';
import { getAllDocuments } from '../../../helpers/db-util';

export async function handler(req, res) {

    const eventId = req.query.eventId;

    let client;

    try {
        client = await connectToDatabase();
    } catch (error) {
        res.status(500).json({ message: 'Connecting to the database failed!' + error });
        return;
    }

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        if (!email || email.trim() === '' || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({ message: 'Invalid input.' });
            client.close();
            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId
        }

        let result;

        try {
            result = await insertDocument(client, 'comments', newComment);

            newComment._id = result.insertedId;

            return res.status(201).json({ message: 'Comment added!', comment: newComment });
        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed!' + error });
        }

    }

    if (req.method === 'GET') {
        let comments;

        try {
            comments = await getAllDocuments(client, 'comments', { _id: -1 });
            res.status(200).json({ comments: comments });
        } catch (error) {
            res.status(500).json({ message: 'Getting comments failed!' + error });
        }

    }

    client.close();

    return new Response('Method not allowed', { status: 405 });
}
