import "./App.css";
import { Navbar, RequireAuth, RestrictAuth } from "components";
import { Login, Signup } from "features";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='App'>
      <ToastContainer
        position={"top-right"}
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
      />
      <Navbar />
      <Routes>
        <Route element={<RestrictAuth />}>
          <Route path='/' element={<Login />}></Route>
          <Route path='/sign-up' element={<Signup />}></Route>
        </Route>

        <Route element={<RequireAuth />}>
          <Route
            path='/home'
            element={
              <>
                <h1>This is homepage</h1>
              </>
            }
          ></Route>
        </Route>
        <Route path='/mockman' element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
