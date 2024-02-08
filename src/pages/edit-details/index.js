import styles from "./index.module.css";
import SkillContainer from "./edit-skills.js";
import CertificateContainer from "./edit-certificates.js";

const EditDetailsPage = () => {
  return (
    <div className={styles.container}>
      <SkillContainer styles={styles} />
      <CertificateContainer styles={styles} />
    </div>
  );
};

export default EditDetailsPage;
