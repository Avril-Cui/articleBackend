// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const fsp = require('fs').promises
export default async function getPrice(
    req: NextApiRequest,
    res: NextApiResponse
  )
{
    try {
        const file_data = await fsp.readFile('../../price_info/simulated_comp_price.json')
        const json_data = JSON.parse(file_data)
        // Do stuff
        res.status(200).json(json_data)
      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}
