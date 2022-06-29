import "./warehouseDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { machineColumns, MachineDatatable } from "../../machineDatasource";
import { getUserFromLocalStorage } from "../../helper/auth";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const MachineDataTable = () => {
  const token = getUserFromLocalStorage().token

  const [data, setData] = useState([]);
  useEffect(()=>{

    axios.get('http://127.0.0.1:8000/api/productionmachinery',{ headers: {"Authorization" : `Bearer ${token}`}})
                      .then((response)=>{
                        console.log(response,"machines")
                        setData(response?.data?.productionMachinerys)
                      })
  },[])






  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={`/machines/${params.getValue(params.id,"id")}`} style={{ textDecoration: "none" }}>
              <div className="updateButton">Update</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Machines
        <Link to="/machines/add" className="link">
          Add Machine
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={machineColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default MachineDataTable;
