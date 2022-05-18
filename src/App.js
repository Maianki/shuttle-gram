import "./App.css";
import { Navbar } from "components";
import { Login, Signup } from "features";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
