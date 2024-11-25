import { useState } from "react"
import "./styles.scss"

interface language {
  name: string,
  value: any
}

function index() {
  const [language, setLanguage] = useState<language[]>([
    { name: "HTML", value: 0.9 },
    { name: "CSS", value: 0.9 },
    { name: "Javascript", value: 0.8 },
    { name: "React", value: 0.9 },
    { name: "Mongo Db", value: 0.75 },
    { name: "Postgres", value: 0.8 },
    { name: "SCSS", value: 0.8 }
  ])
  return (
    <div className='pages'>
      <div className="div-content">
        <h2>Languages</h2>
        {language.map((data: language) => (
          <div className="div-lang">
            <div><div className="lang">{data.name}</div> 
            <progress value={data.value} 
            style={{
              width: "50vw",
              height: "9px",
              borderRadius: "8px",
              marginBottom:"2px"
            }} /></div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default index