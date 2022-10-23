import "./App.css";
import GlobalStyles from "./Components/Style/Globalstyles.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import { AppContext } from "./Helpers/Helpers";
import Login from "./Components/Login";

function App() {
  const boredUrl = `http://www.boredapi.com/api/activity/`;

  const [activity, setActivity] = useState({});
  const [displayActivity, setDisplayActivity] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    handleFunctions();
  }, []);

  const handleFunctions = () => {
    handleCall();
    onClicks();
  };

  //boredApi Call
  const handleCall = () => {
    axios
      .get(boredUrl)
      .then((res) => setActivity(res.data))
      .catch((err) => console.log(err));
  };

  // to display Activity Onclick
  const onClicks = () => {
    setDisplayActivity(!displayActivity);
  };

  return (
    <AppContext.Provider
      value={{
        activity,
        displayActivity,
        setDisplayActivity,
        isAuth,
        setIsAuth,
        handleFunctions,
        theme,
        setTheme,
      }}
    >
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
