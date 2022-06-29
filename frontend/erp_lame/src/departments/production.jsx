import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";
import Widget from "../components/widget/Widget";
import Featured from "../components/featured/Featured";
import Chart from "../components/chart/Chart";
import TreasuryDataTable from "../components/datatable/treasuryDataTable"


const ProductionHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="raw material" />
          <Widget type="paroduct" />
          <Widget type="payable" />
          <Widget type="receiveable" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Statements</div>
          <TreasuryDataTable />
        </div>
      </div>
    </div>
  );
};

export default ProductionHome;
