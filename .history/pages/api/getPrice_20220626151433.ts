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
        const time = 28191.703366994858
        const index = Math.trunc((performance.now()-time)/(3000))
        // console.log(index)
        const file_data = await fsp.readFile('/Users/xiaokeai/Desktop/aspect_website/price_info/simulated_wrkn_second.json')
        const json_data = JSON.parse(file_data)
        const hi = performance.now();
        var current_value = json_data[index]
        var price_change = (json_data[index]-json_data[index-1])/json_data[index]
        res.status(200).json(current_value)
        let result = {
            current_value,
            price_change
        }

        return [current_value, price_change];

      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}

