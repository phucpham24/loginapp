import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { toast } from 'react-toastify';
import { deleteUser } from '../services/UserService';
import { UserContext } from '../context/UserContext';

const ModalConfirm = (props) => {
    const { show, handleClose,dataUserDelete, handleDeleteUserFromModal} = props;

    let token = localStorage.getItem("token")
    // console.log("accesstoken",token)
    const confirmDelete = async()=>{
        let res = await deleteUser(dataUserDelete.id, token);
        // console.log("check res deleete", res)
        if(res && +res.status == 200){
            handleClose();
            toast.success("User deleted successfully!");
            handleDeleteUserFromModal(dataUserDelete);
        }else{
            toast.error("Failed to delete user!");
        }
    }

    return (
        <Modal 
        show={show} 
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className='body-add-new'>
                    Are you sure you want to delete this user? 
                    <br/>
                    <b>email: {dataUserDelete.email}   </b>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=> confirmDelete()}>
                    Confirm Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalConfirm;
