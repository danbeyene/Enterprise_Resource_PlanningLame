import axios from "axios";
export const employeeColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 230,
    },
    {
      field: "phone_number",
      headerName: "Phone No",
      width: 200,
    },
  
    {
      field: "start_date",
      headerName: "Date",
      width: 100,
    },
    {
      field: "department",
      headerName: "Department",
      width: 140,
     
    },
    {
        field: "position",
        headerName: "Position",
        width: 140,
       
      },
      {
        field: "salary",
        headerName: "Salary",
        width: 140,
      
      },
    
  ];


  const rows = [];


  
  //temporary data
  export const employeeRows = [
    {
      id: 1,
      name: "",
      status: "",
      phone: "",
      dob: "",
      salary:"",
      position:"",
      department:""
    },
    
  ];
  