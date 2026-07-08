import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { ExcuserButtons } from "./button-component";

export const Home = (props) => {
  const [excuseText, setExcuseText] = useState("");
  const { username } = useContext(AppContext);

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
    <div>
      <h1>hey {username}👋🏻!! we are in Home page 🏡</h1>
      <div className="text">
        <p>{excuseText}</p>
      </div>

      <div className="buttons">
        <ExcuserButtons getExcuseDetails={getExcuseDetails} />
      </div>
    </div>
  );
};
