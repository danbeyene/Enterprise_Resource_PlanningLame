import "./treasuryList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import TreasuryDataTable from "../../components/datatable/treasuryDataTable"

const List = ({ChildComponent,toggleSideBar,setToggleSideBar}) => {
  return (
    <div className="list">
      {
        toggleSideBar &&
      <Sidebar/>
      }
      <div className="listContainer">
        <Navbar setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar}/>
        {ChildComponent}
        {/* <TreasuryDataTable/> */}
      </div>
    </div>
  )
}

export default List