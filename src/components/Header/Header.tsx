import styles from "./Header.module.css"
import igniteFeedLogo from "../../assets/ignite-feed-logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteFeedLogo} alt="ignite feed" />
      <h3> Ignite Feed</h3>
    </header>
  );
};
