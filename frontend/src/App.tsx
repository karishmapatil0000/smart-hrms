import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
// import Dashboard from "./pages/dashboard/Dashboard";
// import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/lay" element={<MainLayout />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
