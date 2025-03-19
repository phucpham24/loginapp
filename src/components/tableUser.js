import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { fetchAllUser } from "../services/UserService";
import ModalAddNewUser from "./ModalAddNew";

const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);

    const handleClose = ()=>{
        setIsShowModal(false);
    }

    const handleUpdateTable = (user)=>{
        setListUsers([user, ...listUsers]); 
    }
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
        <div className='my-3 add-new'>
          <span><h3>Users List:</h3></span>
          <button className='btn btn-success' onClick={()=>setIsShowModal(true)}>Add New User</button>
        </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
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
                    </tr>
            )
            
        })
        }
      </tbody>
    </Table>
        <ModalAddNewUser 
        show = {isShowModal}
        handleClose = {()=>setIsShowModal(false)}
        handleUpdateTable = {handleUpdateTable}
    />
        </>
    );
}

export default TableUsers;