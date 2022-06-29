import "./rawmaterialDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { finishedProductColumns, FinishedProductDatatable } from "../../finishedProductDatasource";
import { getUserFromLocalStorage } from "../../helper/auth";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FinishedProductDataTable = ({ action }) => {
  const token = getUserFromLocalStorage().token

  const [data, setData] = useState([]);
  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/finishedproducts', { headers: { "Authorization": `Bearer ${token}` } })
      .then((response) => {
        console.log(response, "raw materials")
        setData(response?.data?.finishedProducts)
      })
  }, [])

  const DeleteProduct = async (id) => {
    if (window.confirm("Do you want to remove this product?")) {
      await axios.delete('http://127.0.0.1:8000/api/finishedproducts/' + id, { headers: { "Authorization": `Bearer ${token}` } });
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
              <Link to={`/products/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
            </div>
          );
        }
        else {
          return (
            <div className="cellAction">
              <Link to={`/products/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <Link to={`/products/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link>
              <div
                className="deleteButton"
                // onClick={() => handleDelete(params.row.id)}
                onClick={() => DeleteProduct(params.row.id)}
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
        Finished products
        <Link to="/products/add" className="link">
          Add Product
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={finishedProductColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      // checkboxSelection
      />
    </div>
  );
};

export default FinishedProductDataTable;
