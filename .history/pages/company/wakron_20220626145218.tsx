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
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur distinctio molestiae perferendis soluta tenetur, ratione ipsa neque quia quam suscipit totam ad officiis maiores sed accusamus laborum illo dolorem mollitia!
        Totam ex voluptatibus at nemo tenetur illo iusto culpa laboriosam cumque porro aliquid eos explicabo officiis suscipit, voluptas aut modi nam in inventore corrupti repellendus! Sequi doloremque ut aperiam dicta.
        Voluptatibus, fugiat! Voluptates vel exercitationem explicabo, mollitia, doloribus deleniti modi sint quod provident, quam molestias dignissimos! Cum culpa quos odit, alias quod quibusdam, accusantium optio sapiente fugit repudiandae deserunt atque.
        Eaque tempore officia recusandae iste modi libero, et provident! Sapiente numquam expedita enim? Ratione, ipsa corrupti! Dicta molestias sequi facilis illum? Voluptatum beatae labore vero. Exercitationem necessitatibus veniam minus fugit!
        In soluta consequuntur omnis vero, quam quasi earum atque quia delectus maiores eaque suscipit assumenda dicta! Velit, incidunt facere. Eius doloribus vel vero voluptate, sequi aliquam recusandae accusamus at ipsa.
        Aspernatur voluptate tempora culpa nostrum tenetur eveniet iusto autem, debitis, ad hic nam eligendi tempore, mollitia architecto! Eos soluta, similique iste, ullam harum iure esse, nesciunt rerum quaerat consequuntur pariatur!
        Nulla tempore temporibus voluptatem, ipsa, vitae deserunt in omnis autem voluptates possimus itaque dolores adipisci numquam asperiores porro nesciunt! Eius deleniti laudantium sed facilis cumque modi, quaerat labore illum quos.
        Sed omnis voluptatem dolorem dignissimos quasi distinctio delectus, vel eos, harum explicabo aspernatur praesentium animi dolor odit consequatur voluptates quo molestias minus cupiditate soluta sequi molestiae beatae in vitae. Autem.
        Voluptatum ipsum, iure neque doloremque cupiditate non quis voluptatibus quisquam, temporibus officiis ab quos. Est aut consequuntur iste ab nulla quam vel, voluptatibus unde distinctio dolore aliquid magnam error illum.
        Mollitia quod illo modi reprehenderit iure esse facere consectetur repudiandae, earum corporis voluptatibus facilis cum tempora dolores omnis id, dolor fugit nostrum ducimus repellendus sint doloremque exercitationem minima atque. Totam.</div>
        // <div className={styles.container}>
        //     <div className={styles.top_container}>
        //         <div className={styles.comp_logo}><p>W</p></div>
        //         <p>Wakron, Inc. (WRKN)</p>
        //         <p>{price}</p>
        //         {/* <p>{price_change}</p> */}
        //         <button>&#9734; Watchlist</button>
        //         <button>💰  Trade This Stock   √</button>
        //     </div>
        //     <div>
        //         <WrknChart />
        //     </div>
        // </div>
    );
};

export default Wakron;