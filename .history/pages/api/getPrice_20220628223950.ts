import type { NextApiRequest, NextApiResponse } from 'next'
const {performance} = require('perf_hooks');

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    address: string;
  };
}

const fsp = require('fs').promises
export default async function getPrice(
    req: ExtendedNextApiRequest,
    res: NextApiResponse
  )
//   var start = window.performance.now();
{  
    function round(num: any) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
    }

    try {
        console.log(req.body.address)
        const time = 1860661.705350995
        const index = Math.trunc((performance.now()-time)/(3000))
        // console.log(index)
        const file_data = await fsp.readFile(req.body.address)
        const json_data = JSON.parse(file_data)
        const hi = performance.now();
        console.log(hi)
        var current_value = round(json_data[index])
        res.status(200).json(current_value)
        return current_value;
      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}

