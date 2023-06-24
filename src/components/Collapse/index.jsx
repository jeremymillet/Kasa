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
  return (
    <div className={className === "market" ? "collapse market" : "collapse"}>
      <div className="collapse-title" onClick={() => toggle(collapseId)}>
        <h2>{title}</h2>
        <span>
          <img
            className={
              selected === collapseId ? "collapse-img down" : "collapse-img"
            }
            src={upArrow}
            alt="fleche vers le bas"
          />
        </span>
      </div>
      <div
        className={
          selected === collapseId
            ? "collapse-description show"
            : "collapse-description"
        }
      >
        <p className={selected === collapseId ? "text" : ""}>{description}</p>
      </div>
    </div>
  );
}

export default Collapse;
