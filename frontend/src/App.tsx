import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import AdminLogin from "./components/Login/AdminLogin";
import SignUp from './components/Signup/Register';
import AdminRegister from "./components/Signup/AdminRegister";
import PrivateComponent from "./components/privateComponents/privateComponent";
import AdminPrivateComponent from "./components/privateComponents/AdminPrivateComponent";
import Home from "./components/Home/Home";
import Admin from "./components/admin/Admin";
import Header from "./components/Home/Header";
import UserProfile from "./components/profile/UserProfile";
import AdminHeader from "./components/admin/AdminHeader";
import AddPrescription from "./components/Admin Components/AddPrescription";
import "./app.css";

function App() {
  const auth = localStorage.getItem("admin");
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        {/* {auth ? <AdminHeader /> : <Header />} */}
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/user-profile" element={<UserProfile />} />

          <Route path="/login" element={
            <div className="login-page">
              <Login />
              <div className="vertical-line"></div>
              <AdminLogin />
            </div>
          } />
          
          <Route path="/signup" element={
            <div className="signup-page">
              <SignUp />
              <div className="vertical-line"></div>
              <AdminRegister />
            </div>
          } />

          {/* <Route element={<PrivateComponent />}>
            <Route path="/" element={<Home />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Route> */}

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add" element={<AddPrescription />} />
          {/* <Route element={<AdminPrivateComponent />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/add" element={ <AddPrescription /> } />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
