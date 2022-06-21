import styles from "./Header.module.css";
import Notification from "./Notification";
import Manu from "./Manu";

const Header = () => {
  return (
    <div className={styles.header}>
      <Notification />
      <Manu />
    </div>
  );
};

export default Header;