import "./App.scss";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import app from "./routers/AppRouter";
import Loader from "./common/Loader";
import menu from "./assets/menu.png";
function App() {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [state, setState] = useState<number>(0);

  const setlocalStorageState = (state: number) => {
    setState(state);
    localStorage.setItem("state", JSON.stringify(state));
  };

  useEffect(() => {
    setState(Number(localStorage.getItem("state")));
  }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <img
          src={menu}
          alt=""
          width="20px"
          className="main-back"
          onClick={() => setToggleNav((old) => !old)}
        />
        <h2 className="headder">
          OpenArt 0.1
        </h2>
        <Router>
          <div className="display">
            <nav className="navbar">
              {app.map((page, i) => (
                <Link
                  key={i}
                  to={page.path}
                  className="link"
                  onClick={() => setlocalStorageState(i)}
                  style={{
                    backgroundColor:
                      state == i ? "rgba(255, 255, 255, 0.2)" : "",
                    color: state == i ? "white" : "",
                  }}
                >
                  {page.icon}
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
            </Routes>
          </div>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
