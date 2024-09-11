import logo from "./logo.svg";
import "./App.css";
import Login from "./Scenes/Login";
import { Route, Routes } from "react-router-dom";
import Test from "./Scenes/Test";
import HomeScreen from "./Scenes/HomeScreen";
import ReservationPage from "./Scenes/Reservation";
import StaffDashboard from "./Scenes/StaffDashboard";
import CustomerRegistrationPage from "./Scenes/CustomerRegistration";
import StaffRegistrationPage from "./Scenes/StaffRegistration";
import LoginPage from "./Scenes/Login";
import StaffLoginPage from "./Scenes/StaffLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomeScreen />} />
        <Route index path="/login" element={<LoginPage />} />
        <Route index path="/reservation" element={<ReservationPage />} />
        <Route index path="/customer-register" element={<CustomerRegistrationPage />} />
        <Route index path="/staff-register" element={<StaffRegistrationPage />} />
        <Route index path="/staff-login" element={<StaffLoginPage />} />
        <Route index path="/staff-dashboard" element={<StaffDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
