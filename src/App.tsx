import {useState} from 'react'
import './index.css'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES_PATH} from "./constants/routes";
import Header from "./components/header/Header";
import MainPage from "./pages/main/MainPage";

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path={ROUTES_PATH.MAIN} element={<MainPage/>}/>
                    <Route path={ROUTES_PATH.CATALOG} element={<div>jo</div>}/>
                    <Route path={ROUTES_PATH.SERVICE} element={<div>jo</div>}/>
                    <Route path={ROUTES_PATH.CONTACTS} element={<div>jo</div>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default App
