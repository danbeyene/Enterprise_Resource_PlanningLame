import "./treasuryList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import RawmaterialDataTable from "../../components/datatable/rawmaterialDatatable"

const RawmaterialList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <RawmaterialDataTable/>
      </div>
    </div>
  )
}

export default RawmaterialList