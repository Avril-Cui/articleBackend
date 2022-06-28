// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const {performance} = require('perf_hooks');


const fsp = require('fs').promises
export default async function getPrice(
    FileSource: any,
    req: NextApiRequest,
    res: NextApiResponse
  )
//   var start = window.performance.now();
{  
    function round(num: any) {
      var m = Number((Math.abs(num) * 100).toPrecision(15));
      return Math.round(m) / 100 * Math.sign(num);
    }
    try {
        const time = 85711.31478500366
        const index = Math.trunc((performance.now()-time)/(1000*180))
        // console.log(index)
        const file_data = await fsp.readFile("/Users/xiaokeai/Desktop/aspect_website/price_info/ast/inner_day.json")
        const json_data = JSON.parse(file_data)
        const hi = performance.now();
        console.log(hi)
        var current_value = json_data[index]
        var result_value = json_data.slice(1, index);
        res.status(200).json(result_value)
        // console.log(result_value)

        return result_value

      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}

