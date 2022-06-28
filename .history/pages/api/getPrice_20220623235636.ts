// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function getPrice(
    req: NextApiRequest,
    res: NextApiResponse
  )
{
    // /Users/xiaokeai/Desktop/aspect_website/price_info/simulated_comp_price.json
  const dirRelativeToPublicFolder = 'simulated_comp_price'

  const dir = path.resolve('../../price_info/', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  res.statusCode = 200
  res.json(images);
}