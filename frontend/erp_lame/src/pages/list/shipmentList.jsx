import "./userList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ShipmentDatatable from "../../components/datatable/shipmentDatatable"

const ShipmentList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ShipmentDatatable/>
      </div>
    </div>
  )
}

export default ShipmentList