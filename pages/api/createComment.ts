// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '@sanity/client';

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "n6repj5a",
    useCdn: process.env.NODE_ENC === "production",
    token: process.env.SANITY_API_TOKEN || "sk7LH6ZBgMPl2DCPUDzCI453WgWPRF9wGVcwH8UZxuiPeG3dhbmqfuHdyFtdEjMrY9okfphq0NrCQoRiTfObAxcqu6t8Q0xX3eKDUazAw1nMWHGatAaswBU0RlwIrtwwtK7en59oW4POP53p2nTnZ6rRDJe7fzXVDep15rRLondsfvr3t2l7",
}

const client = sanityClient(config);

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { _id, name, email, comment } = JSON.parse(req.body);

    try {
        await client.create({
            _type: "comment",
            post: {
                _type: 'reference',
                _ref: _id
            },
            name,
            email,
            comment,
        });
    } catch(err){
        return res.status(500).json({ message: `Couldn't submit comment`, err })
    }
    return res.status(200).json({ message: `Comment submitted`})
}