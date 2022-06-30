// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const {performance} = require('perf_hooks');

const fsp = require('fs').promises
export default async function getPrice(
    req: NextApiRequest,
    res: NextApiResponse
  )
    {  
    function round(num: any) {
        var m = Number((Math.abs(num) * 100).toPrecision(15));
        return Math.round(m) / 100 * Math.sign(num);
      }
    try {
        const time = 0
        const index = Math.trunc((performance.now()-time)/(1000 * 60 * 60 * 24))
        console.log(index)
        const file_data = await fsp.readFile("/Users/xiaokeai/Desktop/aspect_website/price_info/ast/day.json")
        const json_data = JSON.parse(file_data)
        var result_value = json_data.slice(1, index);
        res.status(200).json(result_value)
        return result_value
      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}

