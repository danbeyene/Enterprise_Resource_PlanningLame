import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useState,useEffect } from "react";
import axios from "axios";

import { getUserFromLocalStorage } from "../../helper/auth";

const Profile = () => {
  const token = getUserFromLocalStorage().token

  const [data, setData] = useState([]);
  const GetEmployee = () => {

    useEffect(() => {

      axios.find('http://127.0.0.1:8000/api/users/2', { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
          console.log(response, "employees")
          setData(response?.data)
        })
    }, [])
  }
  // GetEmployee()
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
           
            <h1 className="title">Information</h1>
            <div className="item">
              
              <div className="details">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faddisfortune.net%2Farticles%2Fcorruption-arrests-take-dozens-by-storm%2F&psig=AOvVaw2oDP2L9Rko6cQMpygn48jh&ust=1650321890198000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCvp6WWnPcCFQAAAAAdAAAAABAD"
                alt="another samson"
                className="itemImg"
              />
                <h1 className="itemTitle">{data["name"]}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">sasasasasass@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">123456789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">
                    diredwa
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Position:</span>
                  <span className="itemValue">
                    diredwa
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Salary:</span>
                  <span className="itemValue">
                    diredwa
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Start date:</span>
                  <span className="itemValue">
                    diredwa
                  </span>
                </div>
               
              </div>
            </div>
          </div>
          <div className="right">
            
          </div>
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
