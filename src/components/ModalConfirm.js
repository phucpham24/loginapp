import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { postCreateUser } from '../services/UserService';
import { toast } from 'react-toastify';

const ModalConfirm = (props) => {
    const { show, handleClose,dataUserDelete, handleUpdateTable} = props;

    const confirmDelete = ()=>{

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
