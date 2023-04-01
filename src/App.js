import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Test from "./pages/Test";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import CustomerRegistrationPage from "./pages/Customer-Registration-Page";
import BuilderRegisterPage from "./pages/Builder-Registration-Page";
import Properties from "./pages/Properties";
import PropertyInfo from "./components/PropertyInfo";
import CustomerProfilePage from "./pages/Customer-Profile-Page";
import BuilderProfile from "./pages/Builder-Profile-Page";
import AdminPage from "./pages/AdminPage";
import AdminBuilderList from "./pages/AdminBuilderList"
import AdminPropList from "./pages/AdminPropList";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import ChangePassword from "./pages/ChangePassword";
import UpdateProperty from "./pages/UpdateProperty";
import ForgetPassword from "./pages/ForgetPassword";
import ForgetPassword2 from "./pages/ForgetPassword2";
import ErrorPage from "./Error/ErrorPages";
import ResetPassword from "./pages/ResetPassword";
import AddProperty from "./pages/AddProperty";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<LoginPage />} />
        <Route
          path="Customer-Registration"
          element={<CustomerRegistrationPage />}
        />
        <Route path="Builder-Registration" element={<BuilderRegisterPage />} />
        <Route path="Properties" element={<Properties />} />
        <Route path="PropertiesInfo" element={<PropertyInfo />} />
        <Route path="CustomerProfile" element={<CustomerProfilePage />} />
        <Route path="BuilderProfile" element={<BuilderProfile />} />
        <Route path="AdminPage" element={<AdminPage />} />
        <Route path="AdminBuilderList" element={<AdminBuilderList />} />
        <Route path="AdminPropList" element={<AdminPropList />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Contactus" element={<Contact />} />
        <Route path="ChangePassword" element={<ChangePassword />} />
        <Route path="UpdateProperty" element={<UpdateProperty />} />
        <Route path="ForgetPassword" element={<ForgetPassword />} />
        <Route path="ForgetPassword2" element={<ForgetPassword2 />} />
        <Route path="ResetPassword" element={<ResetPassword />} />
        <Route path="AddProperty" element={<AddProperty />} />
        <Route path="ErrorPage" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
