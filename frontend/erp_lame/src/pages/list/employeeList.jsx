import "./employeeList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import EmployeeDatatable from "../../components/datatable/employeeDatatable"

const EmployeeList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <EmployeeDatatable/>
      </div>
    </div>
  )
}

export default EmployeeList



