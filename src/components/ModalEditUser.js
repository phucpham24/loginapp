import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateUser } from '../services/UserService';
import { toast } from 'react-toastify';

const ModalEditUser = (props) => {
    const { show, handleClose, dataUserEdit, handleEditUserFromModal} = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("OTHER");

    const handleEditUser = async() => {
        let token = localStorage.getItem("token");
            let res = await updateUser({ id: dataUserEdit.id,email: dataUserEdit.email, password: dataUserEdit.password, name, age, address, gender }, token)
            // console.log("check update data", res);
                    if(res){
                        handleClose();
                        setName("");
                        setEmail("");
                        setPassword("");
                        setAge("");
                        setAddress("");
                        setGender("");
                        // Refresh the user list after adding a new user
                        toast.success("User edited successfully!");
                        handleEditUserFromModal({ id: res.data.id, name: res.data.name, email: res.data.email });
                    }else{
                        toast.error("Failed to edit user!");
                    }
    };

    useEffect(() => {
        if(show){
            setName(dataUserEdit.name);
            setEmail(dataUserEdit.email);
            setPassword(dataUserEdit.password);
            setAge(dataUserEdit.age);
            setAddress(dataUserEdit.address);
            setGender(dataUserEdit.gender);
        }
    },[dataUserEdit]);

            

    // console.log("check data edit", dataUserEdit.id);

    return (
        <Modal 
        show={show} 
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            disabled
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            disabled
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            value={age}
                            onChange={(event) => setAge(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select
                            className="form-select"
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEditUser}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditUser;
