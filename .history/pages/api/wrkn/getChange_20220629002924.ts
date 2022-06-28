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
    try {
        const time = 85711.31478500366
        const index = Math.trunc((performance.now()-time)/(3000))
        // console.log(index)
        const file_data = await fsp.readFile(("/Users/xiaokeai/Desktop/aspect_website/price_info/wrkn/second.json")
        const json_data = JSON.parse(file_data)
        const hi = performance.now();
        var current_value = json_data[index]
        var price_change = round((current_value-json_data[0])/json_data[0]*100)
        res.status(200).json(price_change)
        // // console.log(price_change)
        // let result = [
        //     current_value, 
        //     price_change
        // ]
        // // console.log(result)
        return price_change;
      }
      catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
      }
}