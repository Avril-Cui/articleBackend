// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const {performance} = require('perf_hooks');


const fsp = require('fs').promises
export default async function getPrice(
    req: NextApiRequest,
    res: NextApiResponse
  )
//   var start = window.performance.now();
{  
    try {
        const time = 3725533.6575939953
        const index = Math.trunc((performance.now()-time)/5000)
        // console.log(index)
        const file_data = await fsp.readFile('/Users/xiaokeai/Desktop/aspect_website/price_info/simulated_comp_price.json')
        const json_data = JSON.parse(file_data)
        const hi = performance.now();
        console.log(hi)
        const current_value = json_data[index]
        json_data.splice(0, 1);
        json_data.splice(index, 0, current_value);
        console.log(json_data)
        return res.status(200).json(json_data)

      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}
