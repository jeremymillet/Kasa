import { useState } from "react"
import '../Collapse/Collapse.scss'
import upArrow from '../../asset/up-arrow.png'



function CollapseEquipement({ title, description, collapseId}) {
    const [selected, setSelected] = useState(null)
    const toggle = (collapseId) => {
        if (collapseId === selected) {
            return setSelected(null)
        }
        setSelected(collapseId)
        
    }

    return (
        <div className="collapse market">
            <div className="collapse-title" onClick={()=> toggle(collapseId)}>                                         
                <h2>{title}</h2>
                <span><img className={selected === collapseId ?"collapse-img down":"collapse-img" } src={upArrow} alt="fleche vers le bas" /></span>
            </div>
            <div className={selected === collapseId ? 'collapse-description show' : 'collapse-description'}>
                <ul>
                    {description.equipments.map((equipement, index) => (
                    <li className={selected === collapseId ? "text" : ""} key={index}>{equipement}</li>         
          ))}
                </ul>
            </div>
        </div>
    )
}

export default CollapseEquipement
