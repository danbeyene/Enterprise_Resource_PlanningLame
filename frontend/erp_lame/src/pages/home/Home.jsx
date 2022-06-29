import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import TreasuryDataTable from "../../components/datatable/treasuryDataTable"
import { Link } from "react-router-dom";

const Home = () => {
  console.log("admin page")
  const data = [
    { name: "Milk", Total: 40 },
    { name: "something", Total: 30 },
  ];
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* <Link to="/receiveable" style={{ textDecoration: "none" }}>
            <li>
              <Widget type="raw material" />
            </li>
          </Link> */}
          <Widget type="raw material" />
          
          <Widget type="paroduct" />
          <Widget type="payable" />
          <Widget type="receiveable" />
        </div>
        <div className="charts">
          {/* <Featured /> */}
          <TreasuryDataTable />

        </div>
      </div>
    </div>
  );
};

export default Home;

