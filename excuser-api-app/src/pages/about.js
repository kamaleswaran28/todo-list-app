import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

export const About = (props) => {
  const { setUserName } = useContext(AppContext);
  const { username } = useContext(AppContext);
  const navigate = useNavigate();
  const [newUsername, setNewUserName] = useState("");
  return (
    <div>
      <h1>Hey {username}!! we are in About Page 💡</h1>
      <input
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setUserName(newUsername);
        }}
      >
        change user name
      </button>
      <button onClick={() => navigate("/")}> Go back to home 🏡</button>
    </div>
  );
};
