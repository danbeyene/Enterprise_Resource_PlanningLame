import "./treasuryList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import MachineDataTable from "../../components/datatable/machineDatatable"

const MachineList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <MachineDataTable/>
      </div>
    </div>
  )
}

export default MachineList