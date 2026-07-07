import "./App.css";
import { useState } from "react";
import { ExcuserButtons } from "./button-component";

function App() {
  const [excuseText, setExcuseText] = useState("");

    async function getExcuseDetails(category) {

      const response = await fetch(
        `https://excuser-three.vercel.app/v1/excuse/${category}/`,
      );
      const value = await response.json();
      console.log("Full API response:", value);
      setExcuseText(value[0]?.excuse);

      console.log("Excuse:", value[0]?.excuse);
      console.log("Category:", category);
      console.log("Response object:", response);
    }

  return (
    <div className="App">
      <div className="text">
        <p>{excuseText}</p>
      </div>

      <div className="buttons">
        <ExcuserButtons 
          getExcuseDetails = {getExcuseDetails}
        />
      </div>
    </div>
  );
}

export default App;
