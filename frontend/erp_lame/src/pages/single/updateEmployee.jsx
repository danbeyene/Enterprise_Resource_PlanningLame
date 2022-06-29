import "./updateEmployee.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { employeeInputs } from "../../formSource";
import axios from "axios";
import { getUserFromLocalStorage } from "../../helper/auth";
import {useNavigate } from 'react-router-dom';
const UpdateEmployee = ({ inputs, title }) => {
    // let history = useHistory();
    console.log(inputs,"updateInputs")
    const token = getUserFromLocalStorage().token
    
  const navigate = useNavigate();
  
    const { id } = useParams()
    const [employeeForm, setEmployeeForm] = useState({})
    const [file, setFile] = useState("");
    // 
    const [data, setData] = useState([]);
    const GetEmployee = () => {
        useEffect(() => {
    
          axios.get(`http://127.0.0.1:8000/api/employees/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
              console.log(response?.data, "hello")
              setEmployeeForm(response?.data[0])
            })
        }, [])
      }
      GetEmployee();
      console.log(employeeForm,"employeeForm")
      console.log(employeeForm)
      const handleChange = (event) => {
          console.log("omgomgomgomgomgomgomg")    
          const { name, value } = event.target;
          setEmployeeForm({ ...employeeForm, [name]: value })
          console.log(name, value)
          
        }
        const employeeUpdate = (e) => {
            e.preventDefault();
            console.log(employeeForm?.name,"updating")
            console.log(employeeForm);
            axios.put(`http://127.0.0.1:8000/api/employees/${id}`, employeeForm,
                { headers: { "Authorization": `Bearer ${token}` }, }).then((response) => {
                    console.log(response, "users")
                    navigate("/employees")
                }).catch((error)=>{
                    alert("please fill valid information");
                    navigate(`/employees/${id}`)
                })
            
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
                                    <input required onChange={event => handleChange(event)} type={input.type} value={employeeForm[input.label]} name={input.label}  placeholder={employeeForm?.label} />
                                </div>
                            ))}
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <button type="submit" onClick={employeeUpdate} style={{ borderRadius: "4px" }}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployee;






