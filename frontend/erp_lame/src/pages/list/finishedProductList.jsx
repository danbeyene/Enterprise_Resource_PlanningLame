import "./treasuryList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import FinishedProductDataTable from "../../components/datatable/finishedProductDatatable"

const FinishedProductList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <FinishedProductDataTable/>
      </div>
    </div>
  )
}

export default FinishedProductList