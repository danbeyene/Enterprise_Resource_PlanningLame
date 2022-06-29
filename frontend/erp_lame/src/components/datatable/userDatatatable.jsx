import "./employeeDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../userDatasource";
import { getUserFromLocalStorage } from "../../helper/auth";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const UserDatatable = () => {
  const token = getUserFromLocalStorage().token

  const [data, setData] = useState([]);
  // useEffect(()=>{

  //   axios.get('http://127.0.0.1:8000/api/users',{ headers: {"Authorization" : `Bearer ${token}`}})
  //                     .then((response)=>{
  //                       console.log(response,"reposnse1")
  //                       setData(response?.data)
  //                     })
  // },[])


  const GetUser = () => {

    useEffect(() => {

      axios.get('http://127.0.0.1:8000/api/users', { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
          console.log(response, "users")
          setData(response?.data)
        })
    }, [])
  }
  GetUser();



  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const DeleteUser = async (id) => {
    if(window.confirm("Do you want to remove this user?")){
      await axios.delete('http://127.0.0.1:8000/api/users/' + id, { headers: { "Authorization": `Bearer ${token}` } });
    setData(data.filter((item) => item.id !== id));
    }
    
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="cellAction">
            <Link to={`/users/view/${params.getValue(params.id,"id")}`}  style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={`/users/${params.getValue(params.id,"id")}`} style={{ textDecoration: "none" }}>
              <div className="updateButton">Update</div>
            </Link> 
            {/* <Link to="/employees/test" style={{ textDecoration: "none" }}>
              <div className="updateButton">Update</div>
            </Link> */}
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row.id)}
              onClick={() => DeleteUser(params.row.id)}
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
        Users
        <Link to="/users/add" className="link">
          Add User
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default UserDatatable;








