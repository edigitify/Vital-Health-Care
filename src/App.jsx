import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Pages/Footer";
function App() {
  return (
    <>
    <div>
      <Navbar></Navbar>
    <Outlet></Outlet>
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
