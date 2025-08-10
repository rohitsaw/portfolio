import { useDispatch, useSelector } from "react-redux";
import FullFeaturedCrudGrid from "../../../component/datatable.js";
import { randomId } from "@mui/x-data-grid-generator";
import dayjs from "dayjs";
import {
  addDummyExperience,
  addExperience,
  deleteExperience,
} from "../../../redux/action.js";

import EditDetailsPage from "../index.js";
import {formatDateYYYYMMDD} from "../../../utils/util.js";


const EditExperiences = ({ styles }) => {
  const dispatch = useDispatch();
  const { workExperiences, user_id } = useSelector((state) => ({
    workExperiences: state.workExperiences,
    user_id: state.user.id,
  }));

  const setRow = (new_row, original_row) => {
    new_row.start_date = formatDateYYYYMMDD(new_row.start_date);
    new_row.end_date = formatDateYYYYMMDD(new_row.end_date);

    dispatch(addExperience(new_row, user_id));
  };

  const setDummyRow = (id) => {
    dispatch(addDummyExperience(id));
  };

  const deleteRow = (row) => {
    dispatch(deleteExperience(row, user_id));
  };

  const handleError = (error) => {
    console.log("error", error);
  };

  const experience_columns = [
    { field: "mui_id", headerName: "ID", flex: 1, align: "left" },
    {
      field: "company_name",
      headerName: "Company",
      flex: 1,
      editable: true,
      align: "left",
    },
    {
      field: "designation",
      headerName: "Designation",
      flex: 1,
      editable: true,
      align: "left",
    },
    {
      field: "start_date",
      headerName: "Start",
      flex: 1,
      editable: true,
      align: "left",
      type: "date",
      valueFormatter: (params) => dayjs(params?.value).format("DD/MM/YYYY"),
    },
    {
      field: "end_date",
      headerName: "End",
      flex: 1,
      editable: true,
      align: "left",
      type: "date",
      valueFormatter: (params) =>
        params?.value === null
          ? "Present"
          : dayjs(params?.value).format("DD/MM/YYYY"),
    },
    {
      field: "details",
      headerName: "Details",
      flex: 1,
      editable: true,
      align: "left",
    },
  ];

  return (
    <div className={styles.editExperienceContainer}>
      <FullFeaturedCrudGrid
        ButtonName={"Work Experience"}
        rows={workExperiences?.map((each) => {
          if (each.hasOwnProperty("mui_id")) return each;
          else return { ...each, mui_id: randomId() };
        })}
        setDummyRow={setDummyRow}
        columns={experience_columns}
        saveRowInServer={setRow}
        onProcessRowUpdateError={handleError}
        deleteRowFromServer={deleteRow}
      />
    </div>
  );
};

export default EditDetailsPage(EditExperiences);
