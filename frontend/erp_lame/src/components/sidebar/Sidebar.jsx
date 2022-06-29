import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BadgeIcon from '@mui/icons-material/Badge';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import InventoryIcon from '@mui/icons-material/Inventory';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FactoryIcon from '@mui/icons-material/Factory';
import BookIcon from '@mui/icons-material/Book';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { getUserFromLocalStorage, removeUserFromLocalStorage } from "../../helper/auth.js";


import Navbar from '../navbar/Navbar'


import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

















const Sidebar = () => {


  const baseURL = "http://127.0.0.1:8000/api/";





  //  function App() {


  //   getUserFromLocalStorage() !=null ? (
  //     console.log("no token")
  // ) : (
  //     role = getUserFromLocalStorage().role
  // )



  //   const [post, setPost] = React.useState(null);

  //   React.useEffect(() => {
  //     axios.get(baseURL).then((response) => {
  //       setPost(response.data);
  //     });
  //   }, []);

  //   if (!post) return null;

  //   return (
  //     <div>
  //       <h1>{post.title}</h1>
  //       <p>{post.body}</p>
  //     </div>
  //   );
  // }





  const { dispatch } = useContext(DarkModeContext);
  // <Route
  //           {...rest}
  //           render={routeProps =>
  //           getUserFromLocalStorage() !=null ? (
  //                   <RouteComponent {...routeProps} />
  //               ) : (
  //                   <Navigate to={"/login"} />
  //               )
  //           }
  //       />
  const handleLogout = () => {
    removeUserFromLocalStorage();
  }
  const role = getUserFromLocalStorage().role;
  // if(Navbar.sideBar = false){
  //   role = "a"
  // }

  switch (role) {
    case "admin":
      return (

        <div className="sidebar">
          <div className="top">
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <span className="logo">Lame Dairy</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              <p className="title">MAIN</p>
              <Link to="/admin" style={{ textDecoration: "none" }}>
                <li>
                  <AdminPanelSettingsIcon className="icon" />
                  <span>Admin</span>
                </li>
              </Link>
              <Link to="/users" style={{ textDecoration: "none" }}>
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span data-cy="users" >Users</span>
                </li>
              </Link>
              <p className="title">GENERAL&nbsp; LEDGER</p>

              <Link to="/employees/current" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Current Employees</span>
                </li>
              </Link>
              <Link to="/treasury" style={{ textDecoration: "none" }}>
                <li>
                  <AccountBalanceIcon className="icon" />
                  <span>Treasury</span>
                </li>
              </Link>
              <Link to="/employees" style={{ textDecoration: "none" }}>
                <li>
                  <BadgeIcon className="icon" />
                  <span>Employee</span>
                </li>
              </Link>
              <Link to="/payable" style={{ textDecoration: "none" }}>
                <li>
                  <AccountBalanceIcon className="icon" />
                  <span>Payable Accounts</span>
                </li>
              </Link>
              <Link to="/receiveable" style={{ textDecoration: "none" }}>
                <li>
                  <AccountBalanceIcon className="icon" />
                  <span>Receiveable Accounts</span>
                </li>
              </Link>
              <p className="title">INVENTORY</p>


              <Link to="/warehouse" style={{ textDecoration: "none" }}>
                <li>
                  <WarehouseIcon className="icon" />
                  <span>Warehouse</span>
                </li>
              </Link>
              <Link to="/rawmaterial" style={{ textDecoration: "none" }}>
                <li>
                  <InventoryIcon className="icon" />
                  <span>Raw Material</span>
                </li>
              </Link>
              <Link to="/employees" style={{ textDecoration: "none" }}>
                <li>
                  <QrCode2Icon className="icon" />
                  <span>Product</span>
                </li>
              </Link>

              <Link to="/shipment" style={{ textDecoration: "none" }}>
                <li>
                  <LocalShippingIcon className="icon" />
                  <span>Shipment</span>
                </li>
              </Link>
              <p className="title">PRODUCTION</p>
              
              
              
              
              <Link to="/machines" style={{ textDecoration: "none" }}>
                <li>
                  <PrecisionManufacturingIcon className="icon" />
                  <span>Machine</span>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                  <FactoryIcon className="icon" />
                  <span>Product In Line</span>
                </li>
              </Link>
              <p className="title">PLANNING</p>
              
              
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Plan</span>
                </li>
              </Link>
              
              
              <p className="title">PURCHASE</p>
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span> Add Purchased Rawmaterial</span>
                </li>
              </Link>
              
              
              <p className="title">SALES</p>
              
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span> View Sales Plan</span>
                </li>
              </Link>
              
              <p className="title">USER</p>
              
              <Link onClick={handleLogout} to="/" style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>
                    Logout
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        // </div>
      );
    case "GL":
      return (
        <div className="sidebar">
          <div className="top">
            <Link to="/employees" style={{ textDecoration: "none" }}>
              <span className="logo">Lame Dairy</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              
              <p className="title">GENERAL&nbsp; LEDGER</p>
              <Link to="/treasury" style={{ textDecoration: "none" }}>
                <li>
                  <AccountBalanceIcon className="icon" />
                  <span>Treasury</span>
                </li>
              </Link>
              <Link to="/employees" style={{ textDecoration: "none" }}>
                <li>
                  <BadgeIcon className="icon" />
                  <span>Employee</span>
                </li>
              </Link>
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>GL Plan</span>
                </li>
              </Link>
              <p className="title">USER</p>
              
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        // </div>
      );
    case "planning":
      return (
        <div className="sidebar">
          <div className="top">
            <Link to="/plans" style={{ textDecoration: "none" }}>
              <span className="logo">Lame Dairy</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              

              <p className="title">PLANNING</p>
              
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Plan</span>
                </li>
              </Link>
              <Link to="/employees/viewOnly" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Employees</span>
                </li>
              </Link>
              <Link to="/rawmaterial" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Raw material</span>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Products</span>
                </li>
              </Link>
              
              
              <Link to="/treasury/viewOnly" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>View Treasury</span>
                </li>
              </Link>
              <Link to="/warehouse/availableSpaceOnly" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>View Available Space In Warehouses</span>
                </li>
              </Link>
              
              <Link to="/machines" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Machines</span>
                </li>
              </Link>
              <p className="title">USER</p>
              
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        // </div>
      );
    case "production":
      return (
        <div className="sidebar">
          <div className="top">
            <Link to="/machines" style={{ textDecoration: "none" }}>
              <span className="logo">Lame Dairy</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              
              <p className="title">PRODUCTION</p>
              <Link to="/employees/current" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Employees</span>
                </li>
              </Link>
              <Link to="/machines" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Machines</span>
                </li>
              </Link>
              <Link to="/rawmaterial" style={{ textDecoration: "none" }}>
                <li>
                  <InventoryIcon className="icon" />
                  <span>Raw Material</span>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Products</span>
                </li>
              </Link>
              
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>View Production Plan</span>
                </li>
              </Link>
              <p className="title">USER</p>
              
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        // </div>
      );
    case "purchase":
      return (
        <div className="sidebar">
          <div className="top">
            <Link to="/rawmaterials" style={{ textDecoration: "none" }}>
              <span className="logo">Lame Dairy</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              

              <p className="title">PURCHASE</p>
              <Link to="/employees/viewOnly" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Employees</span>
                </li>
              </Link>
              <Link to="/payable/viewOnly" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>View Payable</span>
                </li>
              </Link>
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span> View Raw Material</span>
                </li>
              </Link>
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>View Purchase Plan</span>
                </li>
              </Link>
              <p className="title">USER</p>
              
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        // </div>
      );
    case "sales":
      return (
        <div className="sidebar">
          <div className="top">
            <Link to="/products" style={{ textDecoration: "none" }}>
              <span className="logo">Lame Dairy</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              

              <p className="title">SALES</p>
              
              <Link to="/receiveable/viewOnly" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>View Receiveable</span>
                </li>
              </Link>
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span> View Products </span>
                </li>
              </Link>
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span> Add Sold Product</span>
                </li>
              </Link>
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Sales Plan</span>
                </li>
              </Link>
              
              <p className="title">USER</p>
              
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        // </div>
      );
    case "inventory":
      return (
        <div className="sidebar">
          <div className="top">
            <Link to="/warehouses" style={{ textDecoration: "none" }}>
              <span className="logo">Lame Dairy</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              

              <p className="title">INVENTORY</p>
              <Link to="/warehouse/availableSpaceOnly" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Update Available Space in Warehouse</span>
                </li>
              </Link>
             
              <Link to="/warehouse/updateOnly" style={{ textDecoration: "none" }}>
                <li>
                  <WarehouseIcon className="icon" />
                  <span>Warehouse</span>
                </li>
              </Link>
              <Link to="/rawmaterial/addOnly" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Add Raw Materials</span>
                </li>
              </Link>
              <Link to="/products/addOnly" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Add Products</span>
                </li>
              </Link>
              <Link to="/employees" style={{ textDecoration: "none" }}>
                <li>
                  <LocalShippingIcon className="icon" />
                  <span>Shipment</span>
                </li>
              </Link>
              <Link to="/rawmaterial/updateOnly" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Update Received Raw material</span>
                </li>
              </Link>
              <Link to="/plan" style={{ textDecoration: "none" }}>
                <li>
                  <BookIcon className="icon" />
                  <span>Inventory Plan</span>
                </li>
              </Link>
              <p className="title">USER</p>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <li>
                  <AccountCircleOutlinedIcon className="icon" />
                  <span>Profile</span>
                </li>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        // </div>
      );
    default:
      return null;
  }
}

export default Sidebar;
