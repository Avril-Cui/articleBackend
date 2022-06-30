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
    function round(num: any) {
      var m = Number((Math.abs(num) * 100).toPrecision(15));
      return Math.round(m) / 100 * Math.sign(num);
    }
    let result = [0, 0]
    try {
        let time = 0
        const open_length = 1000 * 60 * 60 * 9
        const day_length = 1000 * 60 * 60 * 24
        const running_time = performance.now()-time
        let isRunning = false

        if (running_time < open_length){
          isRunning = true
          const index = Math.trunc((performance.now()-time)/(1000*180))
          const url1 = 'https://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@raw.githubusercontent.com/Avril-Cui/articleBackend/main/price_info/jky/inner_day.json'
          const response = await fetch(url1);
          const file_data = await response.text();
          // const file_data = await fsp.readFile("/Users/xiaokeai/Desktop/aspect_website/price_info/ast/inner_day.json")
          const json_data = JSON.parse(file_data)
          var current_value = json_data[index]
          result = json_data.slice(1, index);
        } else if (open_length<running_time && running_time < day_length){
          isRunning = false
          result = [0, 0]
        } else {
          time = 0
        }


        res.status(200).json(result)

        return result

      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}

