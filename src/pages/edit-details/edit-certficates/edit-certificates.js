import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FullFeaturedCrudGrid from "../../../component/datatable.js";
import { randomId } from "@mui/x-data-grid-generator";
import { Chip, Stack } from "@mui/material";
import Link from "@mui/material/Link";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import EditDetailsPage from "../index.js";

import {
  addDummyCertificate,
  addCertificate,
  deleteCertificate,
} from "../../../redux/action.js";

const EditCertificates = ({ styles }) => {
  const dispatch = useDispatch();
  const { certificates } = useSelector((state) => ({
    certificates: state.certificates,
  }));

  const setRow = (new_row, original_row) => {
    dispatch(addCertificate(new_row));
  };

  const setDummyRow = (id) => {
    dispatch(addDummyCertificate(id));
  };

  const deleteRow = (row) => {
    dispatch(deleteCertificate(row));
  };

  const handleError = (error) => {
    console.log("error", error);
  };

  const certificate_columns = [
    { field: "mui_id", headerName: "ID", width: 70, align: "left" },
    {
      field: "certificate_name",
      editable: true,
      headerName: "Name",
      align: "left",
      flex: 1,
    },
    {
      field: "certification_authority",
      headerName: "Certified By",
      editable: true,
      align: "left",
      flex: 1,
    },
    {
      field: "certification_date",
      headerName: "Certified On",
      editable: true,
      align: "left",
      flex: 1,
      type: "date",
      valueFormatter: (params) => dayjs(params?.value).format("DD/MM/YYYY"),
    },
    {
      field: "verification_url",
      headerName: "Verification Link",
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
    <div className={styles.certificateContainer}>
      <FullFeaturedCrudGrid
        ButtonName={"Certificate"}
        rows={certificates.map((each) => {
          if (each.hasOwnProperty("mui_id")) return each;
          else return { ...each, mui_id: randomId() };
        })}
        setDummyRow={setDummyRow}
        columns={certificate_columns}
        saveRowInServer={setRow}
        onProcessRowUpdateError={handleError}
        deleteRowFromServer={deleteRow}
      />
    </div>
  );
};

export default EditDetailsPage(EditCertificates);
