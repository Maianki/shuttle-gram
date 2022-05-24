import "./App.css";
import { useEffect } from "react";
import { Navbar, RequireAuth, RestrictAuth } from "components";
import { Login, Signup, Home, Bookmarks, Profile, SinglePost } from "features";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookmarks, getAllUsers } from "features/Users/usersSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { userToken: token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllBookmarks({ token }));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

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
          <Route path='/home' element={<Home />}></Route>
          <Route path='/bookmarks' element={<Bookmarks />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route
            path='/explore'
            element={<>This is under construction</>}
          ></Route>
          <Route path='/post/:postId' element={<SinglePost />}></Route>
        </Route>
        <Route path='/mockman' element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
