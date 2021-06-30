import React from "react";
import "./styles.css";
import Header from "./components/header/Header";
import UserImputs from "./components/userInputs/UserInputs";
import InfBoxes from "./components/InfBoxes/InfBoxes";
import Asider from "./components/asider/Asider";

export default function App() {
  return (
    <div className="appMainContainer">
      <Header />
      <UserImputs />
      <div className="divDirections">
        <InfBoxes />
        <Asider />
      </div>
    </div>
  );
}
