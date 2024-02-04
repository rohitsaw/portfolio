import React from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import CircularProgressWithLabel from "../../component/circularprogessbarwithlabel/index";
import FullFeaturedCrudGrid from "../../component/datatable.js";
import { randomId } from "@mui/x-data-grid-generator";

import { addSkills, deleteSkill } from "../../api.js";

const EditSkillDetails = ({ setOpenSnackBar }) => {
  const { skills } = useSelector((state) => ({ skills: state.skills }));

  const skill_columns = [
    { field: "mui_id", headerName: "ID", width: 70, align: "left" },
    {
      field: "skill_name",
      editable: true,
      headerName: "Skill",
      width: 130,
      align: "left",
    },
    {
      field: "skill_category",
      headerName: "Category",
      width: 130,
      align: "left",
      editable: true,
    },
    {
      field: "skill_proficiency",
      headerName: "Proficiency",
      editable: true,
      type: "number",
      width: 130,
      align: "center",
      renderCell: (params) => {
        return <CircularProgressWithLabel value={params.value} />;
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.skillContainer}>
        <FullFeaturedCrudGrid
          initialRows={transformSkills(skills)}
          initialColumns={skill_columns}
          saveRowInServer={async (updatedRow, originalRow) => {
            return addSkills(updatedRow);
          }}
          onProcessRowUpdateError={(error) => {
            console.log("error", error);
            setOpenSnackBar(true);
          }}
          deleteRowFromServer={(skill) => {
            return deleteSkill(skill);
          }}
        />
      </div>
    </div>
  );
};

function transformSkills(skills) {
  const tmp = [
    ...skills.map((each) => {
      return each.skills.map((skill) => {
        const mui_id = randomId();
        return {
          ...skill,
          mui_id: mui_id,
          skill_category: each.skill_category,
        };
      });
    }),
  ];

  return tmp.flat();
}

export default EditSkillDetails;
