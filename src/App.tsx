import './App.scss'
import { Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import mainRoute from './routers/MainRouter'
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import Loader from './common/Loader';
import { PageName } from './types/routerType';

function App() {

  const [state,setState] = useState<number>(0)

  const [pages,setPages] = useState<PageName[]>([
    "portfolio",
    "about",
    "project",
    "setting"
  ])
  const [icons,setIcons] = useState([
    <IoHome />,
    <IoMdCheckboxOutline />,
    <FaArrowUpFromWaterPump />,
    <LuSettings2 />
  ])

  

  return (
    <>
    <Suspense fallback={(<Loader/>)}>
      <Router>
      <div className='display'>
        <nav>
          {
            pages.map((data,i)=>(
              <Link key={i} to={mainRoute[data]?.path || "/"} className='link' onClick={()=>setState(i)} style={{
                color:state==i?"#8235d98a":""
              }}>{icons[i]}<div className='path'>{data}</div></Link>    
            ))
          }
        </nav>
        <Routes>
          {
            pages.map((page)=>(
              <Route element={mainRoute[page].element} path={mainRoute[page].path}/>
            ))
          }
        </Routes>
      </div>
      </Router>
      </Suspense>
    </>
  )
}

export default App
