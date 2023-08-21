import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Basket from "./Basket";
import AddressAndTime from "./AddressAndTime";
import Pay from './Pay'
import Login from "./Login";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/basket" element={<Basket/>}></Route>
          <Route exact path="/address" element={<AddressAndTime/>}></Route>
          <Route exact path="/pay" element={<Pay/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
