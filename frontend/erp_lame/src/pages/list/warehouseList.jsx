import "./treasuryList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import WarehouseDataTable from "../../components/datatable/warehouseDatatable"

const WarehouseList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <WarehouseDataTable/>
      </div>
    </div>
  )
}

export default WarehouseList