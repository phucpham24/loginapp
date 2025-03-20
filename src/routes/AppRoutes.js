import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/login"
import PrivateRoute from "./PrivateRoutes"
import TableUsers from "../components/tableUser"
const AppRoutes = () =>{
    return (
        <>
            <Routes>
            <Route path="/" element={<Home/>}/>
            
            <Route path="/login" element={<Login/>}/>
                   
            <Route
                path = "/users"
                element = {
                    <PrivateRoute>
                        <TableUsers/>
                    </PrivateRoute>
            }
            />
                
            
          </Routes>

          </>
    )
}

export default AppRoutes;