import "./warehouseDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { receiveableColumns, ReceiveableDatatable } from "../../receiveableDatasource";
import { getUserFromLocalStorage } from "../../helper/auth";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ReceiveableDataTable = ({ action }) => {
  const token = getUserFromLocalStorage().token

  const [data, setData] = useState([]);
  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/treasury/account/receiveable', { headers: { "Authorization": `Bearer ${token}` } })
      .then((response) => {
        console.log(response, "receiveables")
        setData(response?.data?.treasuries)
      })
  }, [])

  const DeleteReceiveable = async (id) => {
    if (window.confirm("Do you want to remove this receiveable statement?")) {
      await axios.delete('http://127.0.0.1:8000/api/treasury/' + id, { headers: { "Authorization": `Bearer ${token}` } });
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
        if (action === "viewOnly") {
          return (
            <div className="cellAction">
              <Link to={`/receiveable/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
            </div>
          );
        }
        else {
          return (
            <div className="cellAction">
              <Link to={`/receiveable/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <Link to={`/receiveable/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link>
              <div
                className="deleteButton"
                // onClick={() => handleDelete(params.row.id)}
                onClick={() => DeleteReceiveable(params.row.id)}
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
        Receiveable Accounts
        {action === "viewOnly" ? null : <Link to="/receiveable/new" className="link">
          Add Receiveable
        </Link>}

      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={receiveableColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      // checkboxSelection
      />
    </div>
  );
};

export default ReceiveableDataTable;
