
import { connectToDatabase } from '../../helpers/db-util';
import { insertDocument } from '../../helpers/db-util';


export async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
         res.status(422).json({ message: 'Invalid email address' });
         return;
        }

        let client;

        try {
            client = await connectToDatabase();
        } catch (error) {
            res.status(500).json({ message: 'Connecting to the database failed!' + error });
            return;
        }

        try {
            await insertDocument(client, 'newsletter', { email: userEmail });
            client.close();

        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed!' + error });
            return;
        }

        return res.status(201).json({ message: 'Signed up!' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
}