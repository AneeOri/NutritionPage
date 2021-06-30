import React from "react";
import "./UserInputs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVenusDouble,
  faWeight,
  faArrowsAltV,
  faGem,
  faDumbbell,
  faRedo
} from "@fortawesome/free-solid-svg-icons";
export default function UserInputs() {
  return (
    <div className="userImputsContainer">
      <div className="selectContainer">
        <FontAwesomeIcon id="fontIcon" icon={faVenusDouble} />
        <select name="select-room" id="fill">
          <option value="genero">Genero</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
      </div>
      <div className="inputContainer">
        <FontAwesomeIcon id="fontIcon" icon={faWeight} />
        <input type="text" id="fill" placeholder="peso en kg"></input>
      </div>
      <div className="inputContainer">
        <FontAwesomeIcon id="fontIcon" icon={faArrowsAltV} />
        <input type="text" id="fill" placeholder="altura en cm"></input>
      </div>
      <div className="inputContainer">
        <FontAwesomeIcon id="fontIcon" icon={faGem} />
        <input type="text" id="fill" placeholder="edad"></input>
      </div>
      <div className="selectContainer">
        <FontAwesomeIcon id="fontIcon" icon={faDumbbell} />
        <select name="select-exercise" id="fill">
          <option value="cualquiera">Nada de actividad</option>
          <option value="ligero">Ligera</option>
          <option value="moderado">Moderado</option>
          <option value="alto">Alto</option>
          <option value="elevado">Muy Alto</option>
        </select>
      </div>
      <div className="selectContainerB">
        <FontAwesomeIcon id="fontIconB" icon={faRedo} />
        <button className="resetButton">Limpiar</button>
      </div>
    </div>
  );
}
