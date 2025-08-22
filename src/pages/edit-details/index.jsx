import styles from "./index.module.css";

const EditDetailsPage = (BaseComponent) => {
  return (props) => {
    return (
      <div className={styles.container}>
        <BaseComponent {...props} styles={styles} />
      </div>
    );
  };
};

export default EditDetailsPage;
