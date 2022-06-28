import WrknChart from "../../components/company/comp_chart"
import { useState, useEffect } from "react";
const Wakron = () => {
    const WAIT_TIME = 3000;
    const [price, setPrice] = useState(null)

    useEffect(() => {
      const data = setInterval(() => {
        fetch('/api/getPrice')
        .then((res) => res.json())
        .then((result_value) => {
          setPrice(result_value)
        })
  
      }, WAIT_TIME);
      return () => clearInterval(data);
    }, [price]); 


    return(
        <div>
            
            <div>
                <WrknChart />
            </div>
        </div>
    );
};

export default Wakron;