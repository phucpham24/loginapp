import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { fetchAllUser } from "../services/UserService";
import ModalAddNewUser from "./ModalAddNew";
import ModalEditUser from "./ModalEditUser";

const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);

    const [isShowModalEdit, setIsShowModalEdit] = useState(false);

    const [dataUserEdit, setDataUserEdit] = useState({});


    const handleClose = ()=>{
        setIsShowModal(false);
        setIsShowModalEdit(false);
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

    const handleEditUser = (user)=>{
        setDataUserEdit(user);
        setIsShowModalEdit(true);
    }


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
                    <td>
                        <button className='btn btn-primary mx-3' onClick={()=>handleEditUser(item)}
                        >Edit</button>
                        <button className='btn btn-danger'
                        >Delete</button>
                    </td>
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
            <ModalEditUser
                show = {isShowModalEdit}
                dataUserEdit = {dataUserEdit}
                handleClose = {()=>setIsShowModalEdit(false)}

            />
        </>
    );
}

export default TableUsers;