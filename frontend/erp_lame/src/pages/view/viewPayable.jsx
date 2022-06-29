import "./viewEmployee.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { treasuryInputs } from "../../formSource";
import axios from "axios";
import { getUserFromLocalStorage } from "../../helper/auth";
import { useHistory } from "react-router-dom";

const ViewPayable = ({ inputs, title }) => {
    // let history = useHistory();
    console.log(inputs, "updateInputs")
    const token = getUserFromLocalStorage().token
    const { id } = useParams()
    const [treasuryForm, setTreasuryForm] = useState({})
    const [file, setFile] = useState("");
    // 
    const [data, setData] = useState([]);
    const GetTreasury = () => {

        useEffect(() => {
    
          axios.get(`http://127.0.0.1:8000/api/treasury/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
              console.log(response, "treasury")
              setData(response?.data)
            })
        }, [])
      }
      GetTreasury();

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                    {/* {JSON.stringify(warehouseForm)} */}
                </div>
                <div className="bottom">
                    <div className="right">
                        {/* <form> */}
                        <div style={{paddingLeft:"15%",paddingRight:"15%",paddingTop:"2%",paddingBottom:"2%"}}>

                        {inputs.map((input) => (
                            <div className="formInput" key={input.id}>
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"60px",paddingLeft:"10px",paddingRight:"10px",marginLeft:"8px",marginRight:"8px",marginBottom:"15px",backgroundColor:"#eee",borderRadius:"14px"}}>
                                    <div style={{display:"flex",alignItems:"center",textAlign:"center"}}>
                                    <label style={{height:"100%",textAlign:"center",margin:"0px",fontWeight:"bold",color:"gray"}}>{input.label}</label>
                                        </div>
                                    <div style={{fontWeight:"bold",color:"gray"}}>{data[input.label]}</div>
                                </div>
                                {/* <input onChange={event => handleChange(event)} type={input.type} name={input.label} placeholder={data?.name} /> */}
                            </div>
                        ))}
                        </div>

                        {/* <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <button onClick={employeeUpdate} style={{ borderRadius: "4px" }}>Update</button>
                            </div> */}
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPayable;






