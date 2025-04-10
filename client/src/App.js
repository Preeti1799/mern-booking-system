import React, { useEffect } from "react";
import api from "./src/api/axios";

function App() {
  useEffect(() => {
    api.get("/hotels").then((response) => console.log("API Response:", response.data));
  }, []);

  return <div>Check browser console (F12) for API response!</div>;
}

export default App;