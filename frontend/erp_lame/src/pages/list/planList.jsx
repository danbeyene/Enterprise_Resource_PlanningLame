import "./treasuryList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import PlanDataTable from "../../components/datatable/planDatatable"

const PlanList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <PlanDataTable/>
      </div>
    </div>
  )
}

export default PlanList