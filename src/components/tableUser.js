import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { fetchAllUser } from "../services/UserService";
import ModalAddNewUser from "./ModalAddNew";
import ModalEditUser from "./ModalEditUser";
import ModalConfirm from "./ModalConfirm";
import _ from 'lodash';
const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);

    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataUserEdit, setDataUserEdit] = useState({});

    const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
    const [dataUserDelete, setDataUserDelete] = useState({});



    const handleDeleteUser = (user)=>{
        // setDataUserEdit(user);
        setIsShowModalConfirm(true);
        setDataUserDelete(user);
    }

    const handleClose = ()=>{
        setIsShowModal(false);
        setIsShowModalEdit(false);
        setIsShowModalConfirm(false);
    }

    const handleUpdateTable = (user)=>{
        setListUsers([user, ...listUsers]); 
    }
    useEffect(() => {

        getUsers();
        
    }, [])
    let token = localStorage.getItem("token");
    // console.log("check token", token)
    const getUsers = async ()=>{
        let res = await fetchAllUser(token);
        // console.log("check new res data", res);
        if(res && res.data){
            setListUsers(res.data.data);
        }
    }

    const handleEditUser = (user)=>{
        setDataUserEdit(user);
        setIsShowModalEdit(true);
    }

    const handleEditUserFromModal = (user)=>{
        let cloneListUser = _.cloneDeep(listUsers);
        let index = listUsers.findIndex(item=>item.id === user.id);
        cloneListUser[index].name = user.name;
        setListUsers(cloneListUser);
    }

    const handleDeleteUserFromModal = (user)=>{
        let cloneListUser = _.cloneDeep(listUsers);
        cloneListUser = cloneListUser.filter(item => item.id !== user.id)
        setListUsers(cloneListUser);
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
                        <button className='btn btn-danger' onClick = {()=>handleDeleteUser(item)}
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
                handleEditUserFromModal = {handleEditUserFromModal}

            />
            <ModalConfirm
                show = {isShowModalConfirm}
                dataUserDelete = {dataUserDelete}
                handleClose = {handleClose}
                handleDeleteUserFromModal= {handleDeleteUserFromModal}
            />
        </>
    );
}

export default TableUsers;