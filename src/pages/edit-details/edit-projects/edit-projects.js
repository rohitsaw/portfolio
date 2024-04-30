import { useDispatch, useSelector } from "react-redux";

import EditDetailsPage from "../index.js";
import FullFeaturedCrudGrid from "../../../component/datatable.js";
import { randomId } from "@mui/x-data-grid-generator";
import { Chip, Stack } from "@mui/material";
import Link from "@mui/material/Link";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import {
  addProject,
  addDummyProject,
  deleteProject,
} from "../../../redux/action.js";

const EditProject = ({ styles }) => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => ({
    projects: state.projects,
  }));

  const setRow = (new_row, original_row) => {
    dispatch(addProject(new_row));
  };

  const setDummyRow = (id) => {
    dispatch(addDummyProject(id));
  };

  const deleteRow = (row) => {
    dispatch(deleteProject(row));
  };

  const handleError = (error) => {
    console.log("error", error);
  };

  const project_columns = [
    { field: "mui_id", headerName: "ID", width: 70, align: "left" },
    {
      field: "project_name",
      editable: true,
      headerName: "Name",
      align: "left",
      flex: 1,
    },
    {
      field: "project_description",
      headerName: "Description",
      editable: true,
      align: "left",
      flex: 1,
    },
    {
      field: "github_url",
      headerName: "Github Link",
      editable: true,
      align: "left",
      flex: 1,
      renderCell: (params) => (
        <Link href={params.value} target="_blank">
          <OpenInNewIcon />
        </Link>
      ),
    },
    {
      field: "web_url",
      headerName: "Live Link",
      editable: true,
      align: "left",
      flex: 1,
      renderCell: (params) => (
        <Link href={params.value} target="_blank">
          <OpenInNewIcon />
        </Link>
      ),
    },
    {
      field: "play_store_url",
      headerName: "PlayStore Link",
      editable: true,
      align: "left",
      flex: 1,
      renderCell: (params) => (
        <Link href={params.value} target="_blank">
          <OpenInNewIcon />
        </Link>
      ),
    },
    {
      field: "technology_tags",
      headerName: "Technologies",
      editable: true,
      align: "left",
      flex: 1,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={0.25}>
            {params.row.technology_tags?.map((tag) => (
              <Chip label={tag} />
            ))}
          </Stack>
        );
      },
      renderEditCell: (params) => {
        return (
          <TextField
            variant="outlined"
            size="large"
            value={params.value}
            fullWidth
            onChange={(e) => {
              // Update the value in the cell
              const updatedValue = e.target.value;
              params.api.setEditCellValue({
                id: params.id,
                field: params.field,
                value: updatedValue,
              });
            }}
          />
        );
      },
    },
  ];

  return (
    <div className={styles.editProjectContainer}>
      <FullFeaturedCrudGrid
        ButtonName={"Projects"}
        rows={projects.map((each) => {
          if (each.hasOwnProperty("mui_id")) return each;
          else return { ...each, mui_id: randomId() };
        })}
        setDummyRow={setDummyRow}
        columns={project_columns}
        saveRowInServer={setRow}
        onProcessRowUpdateError={handleError}
        deleteRowFromServer={deleteRow}
      />
    </div>
  );
};

export default EditDetailsPage(EditProject);
