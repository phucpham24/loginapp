import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { fetchAllUser } from "../services/UserService";

const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {

        getUsers();
        
    }, [])

    const getUsers = async ()=>{
        let res = await fetchAllUser();
        console.log("check new res data", res);
        if(res && res.data){
            setListUsers(res.data.data);
        }
    }
    console.log(listUsers);
    return (
        <>    
        
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Age</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {listUsers.map((item, index)=>{
            return (
                <tr key={`user-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>{item.gender}</td>
                    </tr>
            )
            
        })
        }
      </tbody>
    </Table>
        </>
    );
}

export default TableUsers;