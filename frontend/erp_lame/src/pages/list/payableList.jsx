import "./treasuryList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import PayableDataTable from "../../components/datatable/payableDatatable"

const PayableList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <PayableDataTable/>
      </div>
    </div>
  )
}

export default PayableList