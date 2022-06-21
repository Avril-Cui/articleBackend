import styles from './Bubbles.module.css'

const Bubbles = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.circle}/>
            <p className={styles.comp_name}>{props.comp_name}</p>
            <p className={styles.return_rate}>{props.return_rate}</p>
        </div>
        
    );
};

export default Bubbles;