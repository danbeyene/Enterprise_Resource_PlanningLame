import "./warehouseDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { planColumns, PlanDatatable } from "../../planDatasource";
import { getUserFromLocalStorage } from "../../helper/auth";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const PlanDataTable = () => {

  const token = getUserFromLocalStorage().token

  const [data, setData] = useState([]);
  useEffect(()=>{

    axios.get('http://127.0.0.1:8000/api/planningorder',{ headers: {"Authorization" : `Bearer ${token}`}})
                      .then((response)=>{
                        console.log(response,"plan")
                        setData(response?.data?.planningOrders)
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
            <Link to="/employees/test" style={{ textDecoration: "none" }}>
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
        Plans
        <Link to="/users/new" className="link">
          Add Plan
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={planColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default PlanDataTable;
