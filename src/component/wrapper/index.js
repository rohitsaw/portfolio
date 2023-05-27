import Footer from "../footer";
import styles from "./index.module.css";

const Wrapper = (Component) => {
  return function WithBodyWrapper(props) {
    return (
      <div className={styles.contentBackground}>
        <div className={styles.contentWrapper}>
          <Component {...props} />
        </div>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    );
  };
};

export default Wrapper;
