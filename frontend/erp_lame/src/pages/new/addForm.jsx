import "./add.scss";
import axios from "axios";
import { getUserFromLocalStorage } from "../../helper/auth";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


const AddForm = ({ inputs, title }) => {
    const [inputForm, setinputForm] = useState({})
    const navigate = useNavigate();
    const token = getUserFromLocalStorage().token;
    // const [file, setFile] = useState("");
    // var route;
    // var path;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setinputForm({ ...inputForm, [name]: value });

    }
    const handelAdd = (e) => {
        // var [route, setRoute] = useState("rou")
        // var [path, setPath] = useState("pat")
        var route = ""
        var path = ""
        if (title === "Add Rawmaterial") {
            path = "rawmaterial"
            route = "/rawmaterial"
        }
        else if (title === "Add Employee") {

            path = "employees"
            route = "/employees"
        }
        else if (title === "Add Warehouse") {
            path = "warehouses"
            route = "/warehouse"
        }
        else if (title === "Add Product") {
            path = "finishedproducts"
            route = "/products"
        }
        else if (title === "Add Machine") {
            path = "productionmachinery"
            route = "/machines"
        }
        else if (title === "Add User") {
            path = "users"
            route = "/users"
        }
        else {
            path = "treasury"
            route = "/treasury"
        }
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/${path}`, inputForm,
            { headers: { "Authorization": `Bearer ${token}` }, }).then((response) => {
                console.log(response, "input")
            })
        console.log(inputForm, "yyyyyyyyyyyyyy")
        navigate(route)
    }
    return (

        <div className="new">

            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
                    <div className="right">
                        {/* {JSON.stringify(employeeForm)} */}
                        <form>
                            {/* <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div> */}

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input onChange={event => handleChange(event)} type={input.type} name={input.label} placeholder={input?.name} />
                                </div>
                            ))}
                            <button onClick={handelAdd}>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddForm;
