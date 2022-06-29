import "./warehouseDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { warehouseColumns, WarehouseDatatable } from "../../warehouseDatasource";
import { getUserFromLocalStorage } from "../../helper/auth";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const WarehouseDataTable = ({ action }) => {
  const token = getUserFromLocalStorage().token
  const [data, setData] = useState([]);
  const GetWarehouse = () => {

    useEffect(() => {

      axios.get('http://127.0.0.1:8000/api/warehouses', { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
          // console.log(response, "warehoosues")
          setData(response?.data?.warehouses)
        })
    }, [])
  }
  GetWarehouse();






  const DeleteWarehouse = async (id) => {
    if (window.confirm("Do you want to remove this warehouse?")) {
      await axios.delete('http://127.0.0.1:8000/api/warehouses/' + id, { headers: { "Authorization": `Bearer ${token}` } });
      setData(data.filter((item) => item.id !== id));
    }

  };

  const UpdateWarehouse = (id) => {
    const element = document.querySelector('#delete-request .status');
    axios.delete('http://127.0.0.1:8000/api/warehouses')
      .then(() => element.innerHTML = 'Delete successful');


    setData(data.filter((item) => item.id !== id));
    console.log("biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiin");


    GetWarehouse();
  };












  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        if (action === "availableSpaceOnly") {
          return (
            <div className="cellAction">
              <Link to={`/warehouse/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <Link to={`/warehouse/availableSpaceOnly/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link>
            </div>
          );
        }
        else if (action === "updateOnly") {
          return (
            <div className="cellAction">
              <Link to={`/warehouse/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <Link to={`/warehouse/update/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link>
            </div>
          );
        }
        else {
          return (
            <div className="cellAction">
              <Link to={`/warehouse/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <Link to={`/warehouse/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link>
              {/* <Link to="/employees/test" style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link> */}
              <div
                className="deleteButton"
                // onClick={() => handleDelete(params.row.id)}
                onClick={() => DeleteWarehouse(params.row.id)}
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
        Warehouse
        {action === "availableSpaceOnly" ? null : <Link to="/warehouse/add" className="link">
          Add Warehouse
        </Link>}

      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={warehouseColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      // checkboxSelection
      />
    </div>
  );
};

export default WarehouseDataTable;
