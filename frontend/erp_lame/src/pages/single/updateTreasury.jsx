import "./updateEmployee.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { treasuryInputs } from "../../formSource";
import axios from "axios";
import { getUserFromLocalStorage } from "../../helper/auth";
import { useNavigate } from 'react-router-dom';

const UpdateTreasury = ({ inputs, title }) => {
    // const titlel = title;
    // let history = useHistory();
    console.log(inputs, "updateInputs")
    const token = getUserFromLocalStorage().token

    const navigate = useNavigate();

    const { id } = useParams()
    const [treasuryForm, setTreasuryForm] = useState({})
    const [file, setFile] = useState("");
    // 
    const [data, setData] = useState([]);
    const GetTreasury = () => {
        useEffect(() => {

            axios.get(`http://127.0.0.1:8000/api/treasury/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => {
                    console.log(response?.data, "hello")
                    setTreasuryForm(response?.data?.treasury[0])
                })
        }, [])
    }
    GetTreasury();
    console.log(treasuryForm, "treasuryForm")
    console.log(treasuryForm)

    const handleChange = (event, type) => {
        const { name, value } = event.target;
        console.log(treasuryForm, "Stateement")
        if (type === "payable") {
            setTreasuryForm({ ...treasuryForm, [name]: value, "account_type": "payable" });

        }
        else if (type === "receiveable") {
            setTreasuryForm({ ...treasuryForm, [name]: value, "account_type": "receiveable" });

        }
        else {
            setTreasuryForm({ ...treasuryForm, [name]: value });

        }

    }
    //   const handleChange = (event) => {
    //       console.log("omgomgomgomgomgomgomg")    
    //       const { name, value } = event.target;
    //       setTreasuryForm({ ...treasuryForm, [name]: value })
    //       console.log(name, value)

    //     }
    const treasuryUpdate = (e) => {
        e.preventDefault();
        console.log(treasuryForm?.name, "updating")
        console.log(treasuryForm);
        axios.put(`http://127.0.0.1:8000/api/treasury/${id}`, treasuryForm,
            { headers: { "Authorization": `Bearer ${token}` }, }).then((response) => {
                console.log(response, "treasury")
            }).catch((error) => {
                console.log(error, "error")
            });
        console.log({ title }, "titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        if (title === 'Update Payable') {
            console.log({ title })
            navigate("/payable")
        }
        else if (title === "Update treasury") {
            navigate("/treasury")
        }
        else if (title === "Update receiveable") {
            navigate("/receiveable")
        } else {
            navigate("/treasury")
        }

    }
    const TreasuryUpdateForm = (input) => {
        if (title === "Update Treasury") {
            return <div>
                <label>{input.label}</label>
                <input onChange={event => handleChange(event)} type={input.type} value={treasuryForm[input.label]} name={input.label} placeholder={input?.name} />
            </div>
        }
        else if (title === "Update Payable") {
            if (input.label !== "account_type") {
                // {setStatementForm({ ...statementForm, "account_type": "payable" })}
                return <div>
                    <label>{input.label}</label>
                    <input onChange={event => handleChange(event, "payable")} type={input.type} value={treasuryForm[input.label]} name={input.label} placeholder={input?.name} />
                </div>
            }

        }
        else if (title === "Update receiveable") {
            if (input.label !== "account_type") {
                //     return <div>
                //       <label>{input.label}</label>
                //       <label>receiveable</label>
                //     </div>
                //   }
                return <div>
                    <label>{input.label}</label>
                    <input onChange={event => handleChange(event, "receiveable")} type={input.type} value={treasuryForm[input.label]} name={input.label} placeholder={input?.name} />
                </div>
            }
        }
        else {
            return <div>
                <label>{input.label}</label>
                <input onChange={event => handleChange(event)} type={input.type} value={treasuryForm[input.label]} name={input.label} placeholder={input?.name} />
            </div>
        }

    }

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                    {/* {JSON.stringify(title)} */}
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            {inputs.map((input) => (

                                <div className="formInput" key={input.id}>
                                    {TreasuryUpdateForm(input)}
                                    {/* {JSON.stringify(input)} */}
                                    {/* <label>{input.label}</label>
                                    <input required onChange={event => handleChange(event)} type={input.type} value={treasuryForm[input.label]} name={input.label}  placeholder={treasuryForm?.label} /> */}
                                </div>
                            ))}
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <button type="submit" onClick={treasuryUpdate} style={{ borderRadius: "4px" }}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTreasury;






