import React, { useEffect } from "react";
import api from "./api/axios"; // ✅ if axios.js is inside src/api


function App() {
  useEffect(() => {
    api.get("/?min=1&max=999")
      .then((response) => console.log("API Response:", response.data))
      .catch((error) => console.log("API Error:", error));
  }, []);

  return <div>Check browser console (F12) for API response or error!</div>;
}

export default App;