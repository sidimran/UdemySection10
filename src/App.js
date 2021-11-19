import React, { useState, useEffect,useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Store/auth-ontext";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ctx = useContext(AuthContext)

  // useEffect(() => {
  //   const storeduserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storeduserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem("isLoggedIn");
  // };

  return (
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: isLoggedIn,
    //     onLogout :logoutHandler
    //   }}
    // >
    <React.Fragment>
      <MainHeader  />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home  />}
      </main>
      </React.Fragment>
    // </AuthContext.Provider>
  );
}

export default App;
