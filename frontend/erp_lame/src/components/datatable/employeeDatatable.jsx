import "./employeeDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { employeeColumns, employeeRows } from "../../employeeDataSource";
import { getUserFromLocalStorage } from "../../helper/auth";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EmployeeDatatable = ({action,type}) => {
  const token = getUserFromLocalStorage().token

  const [data, setData] = useState([]);
  // useEffect(()=>{

  //   axios.get('http://127.0.0.1:8000/api/users',{ headers: {"Authorization" : `Bearer ${token}`}})
  //                     .then((response)=>{
  //                       console.log(response,"reposnse1")
  //                       setData(response?.data)
  //                     })
  // },[])


  var emp = "employees";
  const GetEmployee = () => {
    if(type === "current"){
      emp = "employees/current/1"
    }
    else if(type === "all"){
      emp = "employees"
    }
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/${emp}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
          console.log(response, "employees1")
          setData(response?.data)
        })
    }, [emp])
  }
  GetEmployee();



  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const DeleteEmployee = async (id) => {
    if (window.confirm("Do you want to remove this employee?")) {
      await axios.delete('http://127.0.0.1:8000/api/employees/' + id, { headers: { "Authorization": `Bearer ${token}` } });
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
        if (action === "viewOnly") {
          return (
            <div className="cellAction">
              <Link to={`/employees/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
            </div>
          );
        } else if (action === "all") {
          return (
            <div className="cellAction">
              <Link to={`/employees/view/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <Link to={`/employees/${params.getValue(params.id, "id")}`} style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link>
              {/* <Link to="/employees/test" style={{ textDecoration: "none" }}>
                <div className="updateButton">Update</div>
              </Link> */}
              <div
                className="deleteButton"
                // onClick={() => handleDelete(params.row.id)}
                onClick={() => DeleteEmployee(params.row.id)}
              >
                Delete
              </div>
            </div>
          );
        }

      },
    },
  ];
  // const AddButton = () => {

  //   if(action === "all"){
  //     console.log("what")
  //     return (
  //       <Link to="/employees/add" className="link">
  //         Add Employee
  //       </Link>
  //     );
  //   }
  // }
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Employees
        <Link to="/employees/add" className="link">
          Add Employee
        </Link>
        
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={employeeColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      // checkboxSelection
      />
    </div>
  );
};

export default EmployeeDatatable;








