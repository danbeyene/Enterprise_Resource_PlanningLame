import "./rawmaterialDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { rawmaterialColumns, rawmaterialDatatable } from "../../rawmaterialDatasource";
import { getUserFromLocalStorage } from "../../helper/auth";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RawmaterialDataTable = ({action}) => {
  const token = getUserFromLocalStorage().token

  const [data, setData] = useState([]);

  const GetRawmaterial = () => {

    useEffect(() => {

      axios.get('http://127.0.0.1:8000/api/rawmaterial', { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
          // console.log(response, "raw materials")
          setData(response?.data?.rawMaterials)
        })
    }, [])
  }
  GetRawmaterial();


  const DeleteRawmaterial = async (id) => {
    if (window.confirm("Do you want to remove this rawmaterial?")) {
      await axios.delete('http://127.0.0.1:8000/api/rawmaterial/' + id, { headers: { "Authorization": `Bearer ${token}` } });
      setData(data.filter((item) => item.id !== id));
    }

  };




  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        if (action === "addOnly") {
          return (
            <div className="cellAction">
            <Link to={`/rawmaterial/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            </div>
          );
        }
        else {
          return (
            <div className="cellAction">
              <Link to={`/rawmaterial/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <Link to={`/rawmaterial/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link>
              {/* <Link to="/employees/test" style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link> */}
              <div
                className="deleteButton"
                // onClick={() => handleDelete(params.row.id)}
                onClick={() => DeleteRawmaterial(params.row.id)}
              >
                Delete
              </div>
            </div>
          );
        }

      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Raw materials
        <Link to="/rawmaterial/new" className="link">
          Add Rawmaterial
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={rawmaterialColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      // checkboxSelection
      />
    </div>
  );
};

export default RawmaterialDataTable;
