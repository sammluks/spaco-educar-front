import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Material from "./pages/Material/ShowMaterial";
import Register from "./pages/Register";
import RegisterMaterial from "./pages/Material/RegisterMaterial";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/material" element={<Material/>}/>
                <Route path="/material/new" element={<RegisterMaterial/>}/>
                {/* <Route path="/materials" exact element={<Login/>}/> */}
                {/* <Route path="/" exact element={<Login/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}