import "./updateEmployee.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { warehouseInputs } from "../../formSource";
import axios from "axios";
import { getUserFromLocalStorage } from "../../helper/auth";
import {useNavigate } from 'react-router-dom';

const UpdateWarehouse = ({ inputs, title }) => {
    // let history = useHistory();
    console.log(inputs,"updateInputs")
    const token = getUserFromLocalStorage().token
    
  const navigate = useNavigate();
  
    const { id } = useParams()
    const [warehouseForm, setWarehouseForm] = useState({})
    const [file, setFile] = useState("");
    // 
    const [data, setData] = useState([]);
    const GetWarehouse = () => {
        useEffect(() => {
    
          axios.get(`http://127.0.0.1:8000/api/warehouses/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
              console.log(response?.data, "hello")
              setWarehouseForm(response?.data?.warehouse[0])
            })
        }, [])
      }
      GetWarehouse();
      console.log(warehouseForm,"warehouseForm")
      console.log(warehouseForm)
      const handleChange = (event) => {
          console.log("omgomgomgomgomgomgomg")    
          const { name, value } = event.target;
          setWarehouseForm({ ...warehouseForm, [name]: value })
          console.log(name, value)
          
        }
        const warehouseUpdate = (e) => {
            e.preventDefault();
            console.log(warehouseForm?.name,"updating")
            console.log(warehouseForm);
            axios.put(`http://127.0.0.1:8000/api/warehouses/${id}`, warehouseForm,
                { headers: { "Authorization": `Bearer ${token}` }, }).then((response) => {
                    console.log(response, "users")
                }).catch((error)=>{
                    console.log(error,"error")
                })
                navigate("/warehouse")
            
        }

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
                        <form>
                            {inputs.map((input) => (
                                
                                <div className="formInput" key={input.id}>
                                    {/* {JSON.stringify(input)} */}
                                    <label>{input.label}</label>
                                    <input required onChange={event => handleChange(event)} type={input.type} value={warehouseForm[input.label]} name={input.label}  placeholder={warehouseForm?.label} />
                                </div>
                            ))}
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <button type="submit" onClick={warehouseUpdate} style={{ borderRadius: "4px" }}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateWarehouse;






