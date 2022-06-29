import "./warehouseDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { payableColumns, PayableDatatable } from "../../payableDatasource";
import { getUserFromLocalStorage } from "../../helper/auth";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PayableDataTable = ({ action }) => {
  console.log(action,"action")
  const token = getUserFromLocalStorage().token

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/treasury/account/payable', { headers: { "Authorization": `Bearer ${token}` } })
      .then((response) => {
        console.log(response, "warehoosues")
        setData(response?.data?.treasuries)
      })
  }, [])

  const DeletePayable = async (id) => {
    if (window.confirm("Do you want to remove this payable statement?")) {
      await axios.delete('http://127.0.0.1:8000/api/treasury/' + id, { headers: { "Authorization": `Bearer ${token}` } });
      setData(data.filter((item) => item.id !== id));
    }

  };
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        if(action === "viewOnly"){
          return (
            <div className="cellAction">
              <Link to={`/payable/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
            </div>
          );
        }else{
          return (
            <div className="cellAction">
              <Link to={`/payable/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <Link to={`/payable/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link>
              <div
                className="deleteButton"
                // onClick={() => handleDelete(params.row.id)}
                onClick={() => DeletePayable(params.row.id)}
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
        Payable Accounts
        {
          action === "viewOnly" ? null :
        <Link to="/payable/new" className="link">
          Add Statement
        </Link>
        }
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={payableColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      // checkboxSelection
      />
    </div>
  );
};

export default PayableDataTable;
