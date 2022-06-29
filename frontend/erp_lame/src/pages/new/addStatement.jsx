import "./add.scss";
import axios from "axios";
import { getUserFromLocalStorage } from "../../helper/auth";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";


const AddSatement = ({ inputs, title }) => {
  const [statementForm, setStatementForm] = useState({})
  const navigate = useNavigate();
  const token = getUserFromLocalStorage().token;
  const [file, setFile] = useState("");

  const handleChange = (event, type) => {
    const { name, value } = event.target;
    console.log(statementForm, "Stateement")
    if (type === "payable") {
      setStatementForm({ ...statementForm, [name]: value, "account_type": "payable" });

    }
    else if (type === "receiveable") {
      setStatementForm({ ...statementForm, [name]: value, "account_type": "receiveable" });

    }
    else {
      setStatementForm({ ...statementForm, [name]: value });

    }

  }

  useEffect(() => {
    console.log(statementForm, "statementForm")
  }, [statementForm])

  const statementsForm = (input) => {
    if (title === "Add Statement") {
      return <div>
        <label>{input.label}</label>
        <input onChange={event => handleChange(event)} type={input.type} name={input.label} placeholder={input?.name} />
      </div>
    }
    else if (title === "Add Payable") {
      if (input.label !== "account_type") {
        // {setStatementForm({ ...statementForm, "account_type": "payable" })}
        return <div>
          <label>{input.label}</label>
          <input onChange={event => handleChange(event, "payable")} type={input.type} name={input.label} placeholder={input?.name} />
        </div>
      }

    }
    else if (title === "Add Receiveable") {
      if (input.label !== "account_type") {

        return <div>
          <label>{input.label}</label>
          <input onChange={event => handleChange(event, "receiveable")} type={input.type} name={input.label} placeholder={input?.name} />
        </div>
      }
    }
    else {
      return <div>
        <label>{input.label}</label>
        <input onChange={event => handleChange(event)} type={input.type} name={input.label} placeholder={input?.name} />
      </div>
    }

  }
  const handelStatementAdd = (e) => {
    console.log(token, "token")
    console.log(statementForm, "statement data")
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/treasury`, statementForm,
      { headers: { "Authorization": `Bearer ${token}` }, }).then((response) => {
        console.log(response, "statement")
      })
    if (title === "Add Payable") {
      navigate("/payable")
    }
    else if (title === "Add Receiveable") {
      navigate("/receiveable")
    }
    else {
      navigate("/treasury")
    }

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
                  {statementsForm(input)}
                  {/* <label>{input.label}</label>
                  <input onChange={event => handleChange(event)} type={input.type} name={input.label} placeholder={input?.name}/> */}
                </div>
              ))}
              <button onClick={handelStatementAdd}>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSatement;
