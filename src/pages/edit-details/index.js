import React from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import CircularProgressWithLabel from "../../component/circularprogessbarwithlabel/index";
import FullFeaturedCrudGrid from "../../component/datatable.js";
import { randomId } from "@mui/x-data-grid-generator";

import {
  addDummySkill,
  addSkill,
  deleteSkill
} from "../../redux/action.js";

const EditSkillDetails = () => {
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => ({ skills: state.skills }));

  const setRow = (new_row, original_row) => {
    dispatch(addSkill(new_row));
  };

  const setDummyRow = (id) => {
    dispatch(addDummySkill(id));
  };

  const deleteRow = (row) => {
    dispatch(deleteSkill(row));
  };

  const handleError = (error) => {
    console.log("error", error);
    // dispatch(setOpenSnackBar(true, error?.message || "Something Went Wrong!"));
  };

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
          rows={skills.map((each) => {
            if (each.hasOwnProperty("mui_id")) return each;
            else return { ...each, mui_id: randomId() };
          })}
          setDummyRow={setDummyRow}
          columns={skill_columns}
          saveRowInServer={setRow}
          onProcessRowUpdateError={handleError}
          deleteRowFromServer={deleteRow}
        />
      </div>
    </div>
  );
};

export default EditSkillDetails;
