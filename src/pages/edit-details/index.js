import styles from "./index.module.css";
import SkillContainer from "./edit-skills.js";
import CertificateContainer from "./edit-certificates.js";
import EducationContainer from "./edit-educations.js";
import EditExperiences from "./edit-experiences.js";

const EditDetailsPage = () => {
  return (
    <div className={styles.container}>
      <EducationContainer styles={styles} />
      <EditExperiences styles={styles} />
      <CertificateContainer styles={styles} />
      <SkillContainer styles={styles} />
    </div>
  );
};

export default EditDetailsPage;
