import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/list/userList";
import MachineList from "./pages/list/machineList";
import ShipmentList from "./pages/list/shipmentList";
import WarehouseList from "./pages/list/warehouseList";
import RawmaterialList from "./pages/list/rawmaterialList";
import FinishedProductList from "./pages/list/finishedProductList";
import ReceiveableList from "./pages/list/receiveableList";
import EmployeeList from "./pages/list/employeeList";
import PayableList from "./pages/list/payableList";
import PlanList from "./pages/list/planList";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import UpdateMachine from "./pages/single/updateMachine";
import UpdateEmployee from "./pages/single/updateEmployee";
import UpdateProduct from "./pages/single/updateProduct";
import UpdateRawmaterial from "./pages/single/updateRawmaterial";
import UpdateUser from "./pages/single/updateUser";
import UpdateWarehouse from "./pages/single/updateWarehouse";
import UpdateTreasury from "./pages/single/updateTreasury";
import New from "./pages/new/addUser";
import AddForm from "./pages/new/addForm";
import AddEmployee from "./pages/new/addEmployee";
import AddRawmaterial from "./pages/new/addRawmaterial";
import AddWarehouse from "./pages/new/addWarehouse";
import AddStatement from "./pages/new/addStatement";
import ViewEmployee from "./pages/view/viewEmployee";
import ViewPayable from "./pages/view/viewPayable";
import ViewTreasury from "./pages/view/viewTreasury";
import ViewWarehouse from "./pages/view/viewWarehouse";
import ViewRawmaterial from "./pages/view/viewRawmaterial";
import ViewProducts from "./pages/view/viewProducts";
import ViewUser from "./pages/view/viewUser";
import Profile from "./pages/profile/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, rawmaterialInputs, userInputs, viewUserInputs, employeeInputs, payableInputs, warehouseInputs, treasuryInputs, statementInputs, machineInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";

import { DarkModeContext } from "./context/darkModeContext";
import PrivateRoute from './helper/privateRoute'
import GLHome from "./departments/generalLedger";
import Datatable from "./components/datatable/userDatatatable"
import TreasuryDataTable from './components/datatable/treasuryDataTable'
import EmployeeDatatable from "./components/datatable/employeeDatatable"
import PayableDataTable from "./components/datatable/payableDatatable"
import ReceiveableDataTable from "./components/datatable/receiveableDatatable"
import WarehouseDataTable from "./components/datatable/warehouseDatatable"
import RawmaterialDataTable from "./components/datatable/rawmaterialDatatable"
import FinishedProductDataTable from "./components/datatable/finishedProductDatatable"
import ShipmentDatatable from "./components/datatable/shipmentDatatable"
import MachineDataTable from "./components/datatable/machineDatatable"
import PlanDataTable from "./components/datatable/planDatatable"
import { getUserFromLocalStorage } from "../src/helper/auth";
import {useEffect} from "react";
// import Datatable from "./components/datatable/userDatatatable"
// import InventoryHome from "./departmentsHome/inventory";
// import PlaningHome from "./departmentsHome/planing";
// import ProductionHome from "./departmentsHome/production";
// import PurchaseHome from "./departmentsHome/purchase";
// import SalesHome from "./departmentsHome/sales";



function App() {

  const [toggleSideBar, setToggleSideBar] = useState(true);
  const { darkMode } = useContext(DarkModeContext);
  // var pat = "<Home/>";
  // var role = getUserFromLocalStorage().role;
  // console.log(pat);
  // switch(role){
  //   case "admin" : {pat=<Home/>};
  //   case "GL":{pat= <Home/>};
  //   case "purchase":{pat= <RawmaterialList />};
  //   case "planning" :{pat= <EmployeeList />};
  //   case "inventory":{pat= <WarehouseList />};
  //   case "sales":{pat= <EmployeeList />};
  //   case "production":{pat= <RawmaterialList />};
  // }
  

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"}>
            <Route index element={<Login />} />
            {/* <Route path={"admin"}></Route>
            <Route index element={<Home />} /> */}

            {/* <Route path="login" element={<Login />} /> */}

            {/* {userRole()} */}
            <Route path="admin" >
              <Route index element={
                <Home />} />
            </Route  >


            <Route path="users" >
              {/* <Route index element={<UserList />} /> */}
              <Route index element={<List ChildComponent={<Datatable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route
                path=":id"
                element={<UpdateUser inputs={userInputs} title="Update User" />}
              />
              <Route
                path="add"
                element={<AddForm inputs={userInputs} title="Add User" />}
              />
              <Route
                path="view"
              // element={<ViewEmployee inputs={employeeInputs} title="View Employee" />}

              >
                <Route
                  path=":id"
                  element={<ViewUser inputs={viewUserInputs} title="view User" />}
                />
              </Route>
            </Route  >
            <Route path="treasury">
              <Route index element={<List ChildComponent={<TreasuryDataTable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path="viewOnly" element={<List ChildComponent={<TreasuryDataTable action="viewOnly" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              {/* <Route path="updateEmployee" element={<UpdateEmployee />} /> */}
              <Route
                path=":id"
                element={<UpdateTreasury inputs={treasuryInputs} title="Update Tresury" />}
              />
              <Route
                path="new"
                element={<AddStatement inputs={treasuryInputs} title="Add Statement" />}
              />
              {/* <Route
                path=":treasuryId"
                element={<UpdateTreasury inputs={statementInputs} title="Add Statement" />}
              /> */}
              <Route
                path="view"
              // element={<ViewEmployee inputs={employeeInputs} title="View Employee" />}

              >
                <Route
                  path=":id"
                  element={<ViewTreasury inputs={treasuryInputs} title="view Treasury" />}
                />
              </Route>
            </Route>
            <Route path="employees">
              {/* <Route index element={<EmployeeList />} /> */}
              <Route index element={<List ChildComponent={<EmployeeDatatable action="all" type="all" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path="current" element={<List ChildComponent={<EmployeeDatatable action="all" type="current" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              {/* <Route path="updateEmployee" element={<UpdateEmployee />} /> */}
              <Route
                path=":id"
                element={<UpdateEmployee inputs={employeeInputs} title="Update Employee" />}
              />
              <Route
                path="add"
                element={<AddForm inputs={employeeInputs} title="Add Employee" />}
              />
              <Route
                path="view"
              // element={<ViewEmployee inputs={employeeInputs} title="View Employee" />}

              >
                <Route
                  path=":id"
                  element={<ViewEmployee inputs={employeeInputs} title="view Employee" />}
                />
              </Route>
              <Route
                path="viewOnly"
                element={<List ChildComponent={<EmployeeDatatable action="viewOnly" type="all" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />}

              >
                <Route
                  path=":id"
                  element={<ViewEmployee inputs={employeeInputs} title="view Employee" />}
                />
              </Route>
            </Route>
            <Route path="payable">
              {/* <Route index element={<PayableList />} /> */}
              <Route index element={<List ChildComponent={<PayableDataTable action="all" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path="viewOnly" element={<List ChildComponent={<PayableDataTable action="viewOnly" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />

              {/* <Route Path="viewOnly" 
              element={<List ChildComponent={<PayableDataTable action="viewOnly"/>} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} /> */}
              {/* <Route path="updateEmployee" element={<UpdateEmployee />} /> */}
              <Route
                path=":id"
                element={<UpdateTreasury inputs={treasuryInputs} title="Update Payable" />}
              />
              <Route
                path="new"
                element={<AddStatement inputs={treasuryInputs} title="Add Payable" />}
              />


              <Route
                path="view"
              // element={<ViewEmployee inputs={employeeInputs} title="View Employee" />}

              >
                <Route
                  path=":id"
                  element={<ViewTreasury inputs={treasuryInputs} title="view Payable" />}
                />
              </Route>
            </Route>
            <Route path="receiveable">
              {/* <Route index element={<ReceiveableList />} /> */}
              <Route index element={<List ChildComponent={<ReceiveableDataTable action="all" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path="viewOnly" element={<List ChildComponent={<ReceiveableDataTable action="viewOnly" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              {/* <Route path="updateEmployee" element={<UpdateEmployee />} /> */}
              <Route
                path=":id"
                element={<UpdateTreasury inputs={treasuryInputs} title="Update receiveable" />}
              />
              <Route
                path="new"
                element={<AddStatement inputs={treasuryInputs} title="Add Receiveable" />}
              />
              <Route
                path="view"
              // element={<ViewEmployee inputs={employeeInputs} title="View Employee" />}

              >
                <Route
                  path=":id"
                  element={<ViewTreasury inputs={treasuryInputs} title="view receiveable" />}
                />
              </Route>
            </Route>
            <Route path="warehouse">
              {/* <Route index element={<WarehouseList />} /> */}
              <Route index element={<List ChildComponent={<WarehouseDataTable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route
                path="updateOnly" element={<List ChildComponent={<WarehouseDataTable action="updateOnly" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route
                path="add"
                element={<AddForm inputs={warehouseInputs} title="Add Warehouse" />}
              />
              <Route
                path=":id"
                element={<UpdateWarehouse inputs={warehouseInputs} title="Update Warehouse" />}
              />
              <Route path="availableSpaceOnly">
                <Route index element={<List ChildComponent={<WarehouseDataTable action="availableSpaceOnly" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
                <Route
                  path=":id"
                  element={<UpdateWarehouse inputs={warehouseInputs} title="Update Warehouse space" />}
                />
              </Route>
              <Route
                path="view"
              // element={<ViewEmployee inputs={employeeInputs} title="View Employee" />}

              >
                <Route
                  path=":id"
                  element={<ViewWarehouse inputs={warehouseInputs} title="view Warehouse" />}
                />
              </Route>
            </Route>
            <Route path="rawmaterial">
              {/* <Route index element={<RawmaterialList />} /> */}
              <Route index element={<List ChildComponent={<RawmaterialDataTable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path=":id" element={<UpdateRawmaterial inputs={rawmaterialInputs} title="Update Rawmaterial" />} />
              <Route path="addOnly" element={<List ChildComponent={<RawmaterialDataTable action="addOnly" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              {/* <Route
                path="new"
                element={<AddRawmaterial inputs={rawmaterialInputs} title="Add Rawmaterial" />}
              /> */}
              <Route
                path="new"
                element={<AddForm inputs={rawmaterialInputs} title="Add Rawmaterial" />}
              />
              <Route
                path="view"
              // element={<ViewEmployee inputs={employeeInputs} title="View Employee" />}

              >
                <Route
                  path=":id"
                  element={<ViewRawmaterial inputs={rawmaterialInputs} title="view Rawmaterial" />}
                />

              </Route>
              <Route
                path="updateOnly"
              // element={<ViewEmployee inputs={employeeInputs} title="View Employee" />}

              >
                <Route path=":id" element={<UpdateRawmaterial inputs={rawmaterialInputs} action="updateOnly" title="Update Rawmaterial" />} />

              </Route>
            </Route>
            <Route path="products">
              {/* <Route index element={<FinishedProductList />} /> */}
              <Route index element={<List ChildComponent={<FinishedProductDataTable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path="addOnly" element={<List ChildComponent={<FinishedProductDataTable action="addOnly" />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path=":id" element={<UpdateProduct inputs={productInputs} title="Update Products" />} />
              <Route
                path="add"
                element={<AddForm inputs={productInputs} title="Add Product" />}
              />
              <Route
                path="updateOnly"
              // element={<ViewEmployee inputs={employeeInputs} title="View Employee" />}

              >
                <Route path=":id" element={<UpdateProduct inputs={rawmaterialInputs} action="updateOnly" title="Update Rawmaterial" />} />

              </Route>
              <Route
                path="view"
              // element={<ViewEmployee inputs={employeeInputs} title="View Employee" />}

              >
                <Route
                  path=":id"
                  element={<ViewProducts inputs={productInputs} title="view Products" />}
                />
              </Route>
            </Route>
            <Route path="shipment">
              {/* <Route index element={<ShipmentList />} /> */}
              <Route index element={<List ChildComponent={<ShipmentDatatable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>

            <Route path="machines">
              {/* <Route index element={<MachineList />} /> */}
              <Route index element={<List ChildComponent={<MachineDataTable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              {/* <Route path=":productId" element={<Single />} /> */}
              {/* <Route
                path="new"
                element={<New inputs={machines} title="Add New Machine" />}
              /> */}
              <Route
                path="add"
                element={<AddForm inputs={machineInputs} title="Add Machine" />}
              />
              <Route path=":id" element={<UpdateMachine inputs={machineInputs} title="Update Machine" />} />
            </Route>
            <Route path="plan">
              {/* <Route index element={<PlanList />} /> */}
              <Route index element={<List ChildComponent={<PlanDataTable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="productInline">
              {/* <Route index element={<UserList />} /> */}
              <Route index element={<List ChildComponent={<Datatable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="plan">
              <Route index element={<UserList />} />
              <Route index element={<List ChildComponent={<RawmaterialDataTable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="purchasedRawMaterial">
              {/* <Route index element={<UserList />} /> */}
              <Route index element={<List ChildComponent={<RawmaterialDataTable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="soldProduct">
              {/* <Route index element={<UserList />} /> */}
              <Route index element={<List ChildComponent={<RawmaterialDataTable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="profile">
              {/* <Route index element={<Profile />} /> */}
              <Route index element={<List ChildComponent={<RawmaterialDataTable />} setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            {/* <Route path="login">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                pazzth="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}

            {/* <Route
              path="login"
              element={<Login />}
            /> */}

            <Route path="sam">
              <Route index element={<GLHome />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
