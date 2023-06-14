import { useState } from "react"



function Collapse() {
    const [isOpen, setIsopen] = useState(false)
    return (
        <>
            {
            isOpen ? 
                <div onClick={setIsopen(false)}>
                    test ouvert
                </div> 
            :
                <div onClick={setIsopen(true)}>
                    fermé
                </div>
            
            }        
        </>
    )
}

export default Collapse