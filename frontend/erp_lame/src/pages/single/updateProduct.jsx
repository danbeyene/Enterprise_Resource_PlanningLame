import "./updateEmployee.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { productInputs } from "../../formSource";
import axios from "axios";
import { getUserFromLocalStorage } from "../../helper/auth";
import {useNavigate } from 'react-router-dom';

const UpdateProduct = ({ inputs, title, action }) => {
    // let history = useHistory();
    console.log(inputs,"updateInputs")
    const token = getUserFromLocalStorage().token
    
  const navigate = useNavigate();
  
    const { id } = useParams()
    const [productForm, setProductForm] = useState({})
    const [file, setFile] = useState("");
    // 
    const [data, setData] = useState([]);
    const GetProduct = () => {
        useEffect(() => {
    
          axios.get(`http://127.0.0.1:8000/api/finishedproducts/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
              console.log(response?.data, "hello")
              setProductForm(response?.data?.finishedProducts[0])
            })
        }, [])
      }
      GetProduct();
      console.log(productForm,"productForm")
      console.log(productForm)
      const handleChange = (event) => {
          console.log("omgomgomgomgomgomgomg")    
          const { name, value } = event.target;
          setProductForm({ ...productForm, [name]: value })
          console.log(name, value)
          
        }
        const productUpdate = (e) => {
            e.preventDefault();
            console.log(productForm?.name,"updating")
            console.log(productForm);
            axios.put(`http://127.0.0.1:8000/api/finishedproducts/${id}`, productForm,
                { headers: { "Authorization": `Bearer ${token}` }, }).then((response) => {
                    console.log(response, "users")
                }).catch((error)=>{
                    console.log(error,"error")
                })
                navigate("/products")
            
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
                                    <input required onChange={event => handleChange(event)} type={input.type} value={productForm[input.label]} name={input.label}  placeholder={productForm?.label} />
                                </div>
                            ))}
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <button type="submit" onClick={productUpdate} style={{ borderRadius: "4px" }}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;






