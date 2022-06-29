import "./treasuryList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ReceiveableDataTable from "../../components/datatable/receiveableDatatable"

const ReceiveableList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ReceiveableDataTable/>
      </div>
    </div>
  )
}

export default ReceiveableList