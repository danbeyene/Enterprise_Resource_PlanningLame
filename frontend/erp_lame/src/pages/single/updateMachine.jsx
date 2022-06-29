import "./updateEmployee.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { machineInputs } from "../../formSource";
import axios from "axios";
import { getUserFromLocalStorage } from "../../helper/auth";
import {useNavigate } from 'react-router-dom';

const UpdateMachine = ({ inputs, title }) => {
    // let history = useHistory();
    console.log(inputs,"updateInputs")
    const token = getUserFromLocalStorage().token
    
  const navigate = useNavigate();
  
    const { id } = useParams()
    const [machineForm, setMachineForm] = useState({})
    const [file, setFile] = useState("");
    // 
    const [data, setData] = useState([]);
    const GetMachine = () => {
        useEffect(() => {
    
          axios.get(`http://127.0.0.1:8000/api/productionmachinery/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
              console.log(response?.data, "hello")
              setMachineForm(response?.data.productionMachinerys[0])
            })
        }, [])
      }
      GetMachine();
      console.log(machineForm,"machineForm")
      console.log(machineForm)
      
      const handleChange = (event) => {
          console.log("omgomgomgomgomgomgomg")    
          const { name, value } = event.target;
          setMachineForm({ ...machineForm, [name]: value })
          console.log(name, value)
          
        }
        const machineUpdate = (e) => {
            e.preventDefault();
            console.log(machineForm?.name,"updating")
            console.log(machineForm);
            axios.put(`http://127.0.0.1:8000/api/productionmachinery/${id}`, machineForm,
                { headers: { "Authorization": `Bearer ${token}` }, }).then((response) => {
                    console.log(response, "users")
                }).catch((error)=>{
                    console.log(error,"error")
                })
                navigate("/machines")
            
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
                                    <input required onChange={event => handleChange(event)} type={input.type} value={machineForm[input.label]} name={input.label}  placeholder={machineForm?.label} />
                                    
                                </div>
                            ))}
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <button type="submit" onClick={machineUpdate} style={{ borderRadius: "4px" }}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateMachine;






