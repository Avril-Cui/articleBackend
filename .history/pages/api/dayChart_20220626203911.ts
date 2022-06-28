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
        console.log(json_data)
        // const hi = performance.now();
        // console.log(hi)
        // var current_value = json_data[index]
        var result_value = json_data.slice(1, -1);
        res.status(200).json(result_value)
        // // console.log(result_value)

        return result_value

      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}

