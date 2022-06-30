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
    let value = 0.00
    try {
        let time = 0
        const open_length = 1000 * 60 * 60 * 9
        const day_length = 1000 * 60 * 60 * 24
        const running_time = performance.now()-time
        let isRunning = false
        // var current_value = 0.00
        if (running_time < open_length){
          isRunning = true
          const index = Math.trunc((running_time)/(3000))
          const file_data = await fsp.readFile("/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/second.json")
          const json_data = JSON.parse(file_data)
          value = round(json_data[index])
        } else if (open_length<running_time && running_time < day_length){
          isRunning = false
        } else {
          time = 0
        }

        const hi = performance.now();
        console.log(hi)
        res.status(200).json(value)
        return value;
      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}

