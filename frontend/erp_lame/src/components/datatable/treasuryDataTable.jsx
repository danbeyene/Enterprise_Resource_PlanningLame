import "./treasuryDataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { treasuryColumns, treasuryRows } from "../../treasuryDataSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getUserFromLocalStorage } from "../../helper/auth";

const TreasuryDatatable = ({ action }) => {
  const [data, setData] = useState([]);

  const token = getUserFromLocalStorage().token

  const GetTreasury = () => {

    useEffect(() => {

      axios.get('http://127.0.0.1:8000/api/treasury', { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
          console.log(response, "treasury")
          setData(response?.data.treasuries)
        })
    }, [])
  }
  GetTreasury();

  const DeleteTreasury = async (id) => {
    if (window.confirm("Do you want to remove this Statement?")) {
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
              <Link to={`/treasury/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
            </div>
          );
        }
        else {
          return (
            <div className="cellAction">
              <Link to={`/treasury/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <Link to={`/treasury/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link>
              <div
                className="deleteButton"
                // onClick={() => handleDelete(params.row.id)}
                onClick={() => DeleteTreasury(params.row.id)}
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
        Treasury

        {action === "viewOnly" ? null : <Link to="/treasury/new" className="link">
          Add Statement
        </Link>}


      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={treasuryColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      // checkboxSelection
      />
    </div>
  );
};

export default TreasuryDatatable;
