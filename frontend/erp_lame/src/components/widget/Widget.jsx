import "./widget.scss";
import {useEffect,useState} from 'react';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from "react-router-dom";
import axios from "axios";
import {getUserFromLocalStorage} from '../../helper/auth'
import Chart from "../../components/chart/Chart"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Widget = ({ type }) => {
  // const [amount, setAmount] = useState({raw : {milk:0,package:0} ,product:{milk:0,yoghurt:0,butter:0,cheese:0},payable:0,receiveable:0})
  const[raw,setRaw] = useState({milk:0,package:0});
  const[product,setProduct] = useState({milk:0,yoghurt:0,butter:0,cheese:0})
  const [payable,setPayable] = useState(0)
  const[receiveable ,setReceiveable] = useState(0)
  const token = getUserFromLocalStorage().token;
  useEffect(() => {
      if(type === "raw material"){
        axios.get(`http://127.0.0.1:8000/api/rawmaterial/total/milk`, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
          // console.log(response, "employees1")

          // setAmount(...amount,{raw:response?.data})
          setRaw(prevState => ({
            ...prevState ,milk:response?.data  
          }))
        })
      }
      else if(type === "paroduct"){

      }
      else if(type === "payable"){
      }
      else{

      }
  }, [type])
  

  
  let data;
  //temporary
  // const amount = 7200;
  // const diff = 5.9;
  var linkTo = "/";
  switch (type) {
    case "raw material":
      linkTo = "/rawmaterial"
      data = {
        title: "RAW MATERIALS",
        isMoney: false,
        amount : raw?.milk,
        //  <Link to="/receiveable" style={{ textDecoration: "none" }}>
        //     <li>
        //       <Widget type="raw material" />
        //     </li>
        //   </Link>
        link: "See all raw materials",
        icon: (
          <Inventory2Icon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "paroduct":
      linkTo = "/products"
      data = {
        title: "PRODUCTS",
        isMoney: false,
        amount : product.milk,
        link: "View all paroducts",
        icon: (
          <QrCodeScannerIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "payable":
      linkTo = "/payable"
      data = {
        title: "PAYABLES",
        isMoney: true,
        amount : payable,
        link: "View net payables",
        icon: (
          <AttachMoneyIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "receiveable":
      linkTo = "/receiveable"
      data = {
        title: "RECEIVEABLES",
        isMoney: true,
        amount : receiveable,
        link: "See receiveables",
        icon: (
          <MonetizationOnIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  const handleNext = () =>{
    console.log("next")
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">

          {data.isMoney && "$"} {data.amount }
          
        </span>
        <div>
        <Link to={linkTo} style={{ textDecoration: "none" }}>
          <li>
            <span className="link">{data.link}</span>
          </li>
        </Link>
        
      </div>

        </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {data.icon}
        <div onClick={handleNext}>

        <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Widget;
