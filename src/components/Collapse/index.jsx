import { useState } from "react";
import "./Collapse.scss";
import upArrow from "../../asset/up-arrow.png";

function Collapse({ title, description, collapseId, className }) {
  const [selected, setSelected] = useState(null);
  const toggle = (collapseId) => {
    if (collapseId === selected) {
      return setSelected(null);
    }
    setSelected(collapseId);
  };

  if (collapseId === "equipments") {
    return (
      <article className="collapse market">
        <div className="collapse-title" onClick={() => toggle(collapseId)}>
          <h2>{title}</h2>
          <span>
            <img
              className={`collapse-img ${
                selected === collapseId ? "down" : ""
              }`}
              src={upArrow}
              alt="fleche vers le bas"
            />
          </span>
        </div>
        <div
          className={`collapse-description ${
            selected === collapseId ? "show" : ""
          }`}
        >
          <ul>
            {description.equipments.map((equipement, index) => (
              <li className={selected === collapseId ? "text" : ""} key={index}>
                {equipement}
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  } else {
    return (
      <article className={`collapse ${className === "market" ? "market" : ""}`}>
        <div className="collapse-title" onClick={() => toggle(collapseId)}>
          <h2>{title}</h2>
          <span>
            <img
              className={`collapse-img ${
                selected === collapseId ? " down" : ""
              }`}
              src={upArrow}
              alt="fleche vers le bas"
            />
          </span>
        </div>
        <div
          className={`collapse-description ${
            selected === collapseId ? " show" : ""
          }`}
        >
          <p className={selected === collapseId ? "text" : ""}>{description}</p>
        </div>
      </article>
    );
  }
}

export default Collapse;
