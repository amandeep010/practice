import './App.scss'
import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import app from './routers/AppRouter';
import { IoIosArrowDropleft } from 'react-icons/io'
import Loader from './common/Loader'
import project from './routers/ProjectRouter';
import { IoIosArrowDropright } from "react-icons/io"

function App() {
  const [toggleNav,setToggleNav] = useState<boolean>(false)
  const [state,setState] = useState<number>(0)

  const setlocalStorageState = (state:number) =>{
    setState(state)
    localStorage.setItem("state",JSON.stringify(state))
  }

  useEffect(()=>{
    setState(Number(localStorage.getItem("state")))
  },[])

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <div className="display">
            <nav className='navbar'>
          <div
          onClick={()=>setToggleNav((old)=>!old)}
          className='navDiv'
          >
            <IoIosArrowDropleft
              className='openNav'
              style={{
                display:toggleNav?"block":"none"
              }}
            />
            <IoIosArrowDropright
              className='openNav'
              style={{
                display:toggleNav?"none":"block"
              }}
            />
            </div>
              {app.map((page, i) => (
                <Link
                  key={i}
                  to={app[i].path}
                  className="link"
                  onClick={() => setlocalStorageState(i)}
                  style={{
                    color: state == i ? "#F1F0E8" : "",
                  }}
                >
                  {app[i].icon}
                  <div
                    className="path"
                    style={{
                      display: toggleNav ? "block" : "none",
                    }}
                  >
                    {page.name}
                  </div>
                </Link>
              ))}
            </nav>
            <Routes>
              {app.map((page) => (
                <Route
                  key={`${page.path}`}
                  element={page.element}
                  path={page.path}
                />
              ))}
              {project.map((page)=>(
                <Route
                  key={`${page.path}`}
                  element = {page.element}
                  path= {page.path}
                />
              ))}
            </Routes>
          </div>
        </Router>
      </Suspense>
    </>
  );
}

export default App
