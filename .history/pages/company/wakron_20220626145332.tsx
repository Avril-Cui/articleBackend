import WrknChart from "../../components/company/comp_chart"
import { useState, useEffect } from "react";
import styles from "../../styles/simulator/company.module.css"
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
            <div className={styles.comp_logo}><p>W</p></div>
            <p>Wakron, Inc. (WRKN)</p>
            <p>{price}</p>
            <button>&#9734; Watchlist</button>
            <button>💰  Trade This Stock   √</button>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure quod eius commodi enim dolorem provident laudantium laborum minus? Cum sapiente ut architecto impedit soluta veniam quasi, earum quidem vero?
            Ea omnis nulla maiores non perferendis eveniet consectetur iusto blanditiis soluta neque ipsam ratione earum error eligendi deserunt voluptatibus, magni dolorem porro. Dolorum suscipit vero amet laudantium nostrum tempora recusandae!
            Commodi itaque dolorem consectetur qui dicta obcaecati quia ullam impedit illum soluta repudiandae dolores officia quos delectus error, vero ex maxime at provident corrupti eos vel? Deserunt modi vitae sit.
            Totam sunt maxime quod incidunt error labore nostrum quibusdam provident dolores architecto et magnam accusamus, consectetur voluptate molestiae atque dolorem exercitationem sint enim! Sed delectus officia rem natus quis ea.
            Corporis nulla hic quod consectetur exercitationem itaque autem incidunt distinctio quas obcaecati. Distinctio in modi veniam deserunt minus expedita, corrupti odio aliquam earum accusantium consectetur magnam nobis quas dicta odit.
            Eius, dolorem in! Exercitationem nisi dolores tenetur reprehenderit non doloribus repudiandae, tempore delectus, maxime minus impedit perspiciatis praesentium molestiae adipisci ipsum quis similique debitis distinctio est, accusamus repellendus veritatis dolorem.
            Obcaecati qui tempora dolor quia odio rerum laborum at iure corporis nisi minus quisquam animi nam, architecto sit perferendis ab. Repellendus commodi exercitationem provident suscipit. Aperiam corrupti sed commodi sapiente!
            Quasi alias eveniet eos sit explicabo nihil, dolor iure molestiae, ab laborum adipisci quisquam! Quisquam et eaque, voluptatibus aliquid, dignissimos odit ab, consequuntur officia eius fuga dicta nesciunt doloremque in.
            Maiores impedit doloremque fugiat dolores dolorum corrupti commodi accusantium quis minus aspernatur consequatur cumque incidunt, dolore recusandae aperiam eaque illo quia sapiente voluptatum cum illum expedita tenetur debitis neque. Doloremque?
            Repellat quaerat esse quidem provident temporibus, incidunt illo sequi modi impedit atque earum laboriosam optio at deserunt, neque, animi nisi ratione! Et placeat id tempore ad numquam illum soluta consectetur!
        </div>
        // <div className={styles.container}>
        //     <div className={styles.top_container}>
        //         <div className={styles.comp_logo}><p>W</p></div>
        //         <p>Wakron, Inc. (WRKN)</p>
                // <p>{price}</p>
                // {/* <p>{price_change}</p> */}
                // <button>&#9734; Watchlist</button>
                // <button>💰  Trade This Stock   √</button>
        //     </div>
        //     <div>
        //         <WrknChart />
        //     </div>
        // </div>
    );
};

export default Wakron;