import { useState } from "react"
import "./styles.scss"
import mesh from "../../assets/mesh.svg"

interface language {
  name: string,
  value: any
}

function index() {
 
  return (
    <div className='pages'>
      <div className="div-content">
        <img src={mesh} alt="Welcome" height={"400vh"} width={"100%"} style={{marginTop:"8px"}}/>
        <h2>What we offer</h2>
        
      </div>

    </div>
  )
}

export default index