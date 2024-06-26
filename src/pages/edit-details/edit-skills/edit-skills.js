import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgressWithLabel from "../../../component/circularprogessbarwithlabel/index";
import FullFeaturedCrudGrid from "../../../component/datatable.js";
import { randomId } from "@mui/x-data-grid-generator";

import { addDummySkill, addSkill, deleteSkill } from "../../../redux/action.js";

import EditDetailsPage from "../index.js";

const EditSkills = ({ styles }) => {
  const dispatch = useDispatch();
  const { user_id, skills } = useSelector((state) => ({
    skills: state.skills,
    user_id: state.user.id,
  }));

  const setRow = (new_row, original_row) => {
    dispatch(addSkill(new_row, user_id));
  };

  const setDummyRow = (id) => {
    dispatch(addDummySkill(id));
  };

  const deleteRow = (row) => {
    dispatch(deleteSkill(row, user_id));
  };

  const handleError = (error) => {
    console.log("error", error);
  };

  const skill_columns = [
    { field: "mui_id", headerName: "ID", flex: 1, align: "left" },
    {
      field: "skill_name",
      headerName: "Skill",
      flex: 1,
      editable: true,
      align: "left",
    },
    {
      field: "skill_category",
      headerName: "Category",
      flex: 1,
      editable: true,
      align: "left",
    },
    {
      field: "skill_proficiency",
      headerName: "Proficiency",
      flex: 1,
      editable: true,
      align: "left",
      type: "number",
      headerAlign: "left",

      renderCell: (params) => {
        return <CircularProgressWithLabel value={params.value} />;
      },
    },
  ];

  return (
    <div className={styles.editSkillContainer}>
      <FullFeaturedCrudGrid
        ButtonName={"Skill"}
        rows={skills?.map((each) => {
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
  );
};

export default EditDetailsPage(EditSkills);
