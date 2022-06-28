// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const {performance} = require('perf_hooks');


const fsp = require('fs').promises
export default async function getPrice(
    req: NextApiRequest,
    res: NextApiResponse
  )
//   var start = window.performance.now();
{  
    try {
        // console.log(index)
        const file_data = await fsp.readFile('/Users/xiaokeai/Desktop/aspect_website/price_info/simulated_comp_day_price.json')
        const json_data = JSON.parse(file_data)

        res.status(200).json(json_data)
        return json_data

      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}

