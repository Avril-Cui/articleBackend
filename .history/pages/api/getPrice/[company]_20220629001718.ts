import type { NextApiRequest, NextApiResponse } from 'next'
const {performance} = require('perf_hooks');


const fsp = require('fs').promises
export default async function getPrice(
    req: NextApiRequest,
    res: NextApiResponse
  )
//   var start = window.performance.now();
{  
    const {
      query: { slugs },
    } = req
    res.end(`Post: ${slugs.join(', ')}`)
    // function round(num: any) {
    // var m = Number((Math.abs(num) * 100).toPrecision(15));
    // return Math.round(m) / 100 * Math.sign(num);
    // }

    // try {
    //     const time = 1279064.5968259573
    //     const index = Math.trunc((performance.now()-time)/(3000))
    //     const file_data = await fsp.readFile(`/Users/xiaokeai/Desktop/aspect_website/price_info/${slugs}/second.json`)
    //     const json_data = JSON.parse(file_data)
    //     const hi = performance.now();
    //     console.log(hi)
    //     var current_value = round(json_data[index])
    //     res.status(200).json(current_value)
    //     return current_value;
    //   }
    //   catch (error) {
    //     console.log(error)
    //     res.status(500).json({ error: 'Error reading data' })
    //   }
}

