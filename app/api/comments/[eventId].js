
export async function handler(req, res) {

    const eventId = req.query.eventId;

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        if (!email || email.trim() === '' || !name || name.trim() === '' || !text || text.trim() === '') {
            return res.status(422).json({ message: 'Invalid input.' });
        }

        console.log(eventId, email, name, text);

        return res.status(201).json({ message: 'Comment added!' });
    }

    if (req.method === 'GET') {
        const dummyList = [
            { id: 'c1', name: 'Max', text: 'A first comment!' },
            { id: 'c2', name: 'Manuel', text: 'A second comment!' },
        ];

        return res.status(200).json({ comments: dummyList });
    }

    return new Response('Method not allowed', { status: 405 });
}

nrxSKyjgdVLYfRD5