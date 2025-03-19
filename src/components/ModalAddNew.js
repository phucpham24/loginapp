import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { postCreateUser } from '../services/UserService';
import { toast } from 'react-toastify';

const ModalAddNewUser = (props) => {
    const { show, handleClose, handleUpdateTable} = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("OTHER");
    const [errorMessage, setErrorMessage] = useState(""); // To store validation errors

    const handleSaveUser = async() => {
        // Validation for email and password
        if (!email || !email.includes("@gmail.com")) {
            setErrorMessage("Email must be a valid Gmail address (e.g., example@gmail.com)");
            return;
        }

        if (!password) {
            setErrorMessage("Password cannot be empty");
            return;
        }

        // Clear error message if validation passes
        setErrorMessage("");

        // Call API to save user
        const data = {
            name,
            email,
            password,
            age,
            address,
            gender
        }
        console.log("check new data", data);
        let res = await postCreateUser(data);

        if(res && res.data.data.id){
            handleClose();
            setName("");
            setEmail("");
            setPassword("");
            setAge("");
            setAddress("");
            setGender("");
            // Refresh the user list after adding a new user
            toast.success("User added successfully!");
            console.log("checkrespond", res.data.data.id, data.name, data.email);
            handleUpdateTable({ id: res.data.data.id, name: data.name, email: data.email });
        }else{
            toast.error("Failed to add user!");
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Show error message if validation fails */}
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                <form>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
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
                <Button variant="primary" onClick={handleSaveUser}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddNewUser;
