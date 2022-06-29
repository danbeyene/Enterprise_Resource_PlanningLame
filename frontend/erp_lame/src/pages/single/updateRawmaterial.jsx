import "./updateEmployee.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { rawmaterialInputs } from "../../formSource";
import axios from "axios";
import { getUserFromLocalStorage } from "../../helper/auth";
import {useNavigate } from 'react-router-dom';

const UpdateRawmaterial = ({ inputs, title, action }) => {
    // let history = useHistory();
    console.log(inputs,"updateInputs")
    const token = getUserFromLocalStorage().token
    
  const navigate = useNavigate();
  
    const { id } = useParams()
    const [rawmaterialForm, setRawmaterialForm] = useState({})
    const [file, setFile] = useState("");
    // 
    const [data, setData] = useState([]);
    const GetRawmaterial = () => {
        useEffect(() => {
    
          axios.get(`http://127.0.0.1:8000/api/rawmaterials/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
              console.log(response?.data, "hello")
              setRawmaterialForm(response?.data.rawMaterials[0])
            })
        }, [])
      }
      GetRawmaterial();
      console.log(rawmaterialForm,"rawmaterialForm")
      console.log(rawmaterialForm)
      const handleChange = (event) => {
          console.log("omgomgomgomgomgomgomg")    
          const { name, value } = event.target;
          setRawmaterialForm({ ...rawmaterialForm, [name]: value })
          console.log(name, value)
          
        }
        const rawmaterialUpdate = (e) => {
            e.preventDefault();
            console.log(rawmaterialForm?.name,"updating")
            console.log(rawmaterialForm);
            axios.put(`http://127.0.0.1:8000/api/rawmaterials/${id}`, rawmaterialForm,
                { headers: { "Authorization": `Bearer ${token}` }, }).then((response) => {
                    console.log(response, "rawmaterial")
                }).catch((error)=>{
                    console.log(error,"error")
                })
                navigate("/rawmaterial")
            
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
                                    <input required onChange={event => handleChange(event)} type={input.type} value={rawmaterialForm[input.label]} name={input.label}  placeholder={rawmaterialForm?.label} />
                                </div>
                            ))}
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <button type="submit" onClick={rawmaterialUpdate} style={{ borderRadius: "4px" }}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateRawmaterial;






