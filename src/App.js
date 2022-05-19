import "./App.css";
import { Navbar } from "components";
import { Login, Signup } from "features";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route
          path='/home'
          element={
            <>
              <h1>This is homepage</h1>
            </>
          }
        ></Route>
        <Route path='/mockman' element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
