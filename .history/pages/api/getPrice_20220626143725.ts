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
        const time = 56578814.274574995
        const index = Math.trunc((performance.now()-time)/(3000))
        // console.log(index)
        const file_data = await fsp.readFile('/Users/xiaokeai/Desktop/aspect_website/price_info/simulated_wrkn_second.json')
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

