import styles from './SearchBar.module.css'
import search_icon from "../../image/search_icon.png"

const SearchBar = () => {
    return(
        <div className={styles.container}>
            <p className={styles.search_icon} >&#x2315;</p>
            <p className={styles.text}>
                Search terms, news, and models
            </p>
        </div>
    );
};

export default SearchBar;