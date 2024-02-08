import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FullFeaturedCrudGrid from "../../component/datatable.js";
import { randomId } from "@mui/x-data-grid-generator";

import {
  addDummyCertificate,
  addCertificate,
  deleteCertificate,
} from "../../redux/action.js";

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
    // {
    //   field: "certificate_description",
    //   headerName: "Description",
    //   align: "left",
    //   editable: true,
    //   flex: 1,
    // },
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
    },
    // {
    //   field: "certification_expiry",
    //   headerName: "Expiry Date",
    //   editable: true,
    //   align: "left",
    //   flex: 1,
    // },
    {
      field: "verification_url",
      headerName: "Verification Link",
      editable: true,
      align: "left",
      flex: 1,
    },
    {
      field: "technology_tags",
      headerName: "Technologies",
      editable: true,
      align: "left",
      flex: 1,
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

export default EditCertificates;
