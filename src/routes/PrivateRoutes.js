import { Route, Routes } from "react-router-dom";
import TableUsers from "../components/tableUser";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Alert } from "react-bootstrap";

const PrivateRoute = (props) =>{

    const {user} = useContext(UserContext);

    const [show, setShow] = useState(true);

    if (user && !user.auth){
        return <>
           <Alert variant="danger" >
        <Alert.Heading>Permission Deny</Alert.Heading>
        <p>
          You don't have the permission to access this page
        </p>
        </Alert>
        </>
    }
    return (
        <>
        {props.children}
        
        </>

    )
}
export default PrivateRoute;