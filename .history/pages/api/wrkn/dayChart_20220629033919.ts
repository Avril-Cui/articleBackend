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
        const time = 1759615.943647027
        const index = Math.trunc((performance.now()-time)/(32400 * 1000))
        const file_data = await fsp.readFile("/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/day.json")
        const json_data = JSON.parse(file_data)
        const hi = performance.now();
        console.log(hi)
        var current_value = json_data[index]
        var result_value = json_data.slice(1, index);
        res.status(200).json(result_value)
        return result_value

      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}

