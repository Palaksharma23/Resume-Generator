import React from "react";
import Home from "./components/home/Home";
import axios from "axios";

function App() {
  React.useEffect(() => {
    axios
      .get("https://resumegeneratorapp.onrender.com/")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
