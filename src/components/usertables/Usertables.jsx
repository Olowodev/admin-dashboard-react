import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import './Usertables.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faEnvelope, faTimes, faSave, faCamera, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FaEllipsisV, FaTrash, FaEdit } from "react-icons/fa";
import ProfileImg from "../profileImg/ProfileImg";
import {publicRequest} from '../../requestMethods'
import Modal from "../modal/Modal";
import { useState, useRef } from "react";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'
import {useSelector} from 'react-redux'
import axios from "axios";

function FaEllipsisComponent({userId, toggleModalState, toggleEdit}) {
    

    return (
        <td className="menu" >
            <div>
            <FaEllipsisV className="menuIcon" />
            <ul className="submenu">
                <li className="submenu-item">
                    <div onClick={()=>toggleEdit()}>
                        <FaEdit />
                        <p>Edit</p>
                    </div>
                </li>
                <li className="submenu-item">
                    <div onClick={() =>toggleModalState()}>
                        <FaTrash />
                        <p>Delete</p>
                    </div>
                </li>
            </ul>
            </div>
        </td>
    );
}

const Usertables = ({userData, setField, sortDirection, setSortDirection, setState, isLoading}) => {

const token = useSelector((state) => state.user.currentUser === null? null : state.user.currentUser.accessToken)
const BASE_URL = 'http://192.168.0.18:5000/api/';

const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:  `Bearer ${token}`},
})
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState('');
    const [editUserId, setEditUserId] = useState('');
    const [editShow, setEditShow] = useState(false);
    const [editfileUrl, setEditfileUrl] = useState();
    const editHiddenFileInput = useRef();
    const [editFileError, setEditFileError] = useState(false);
    const [focused, setFocused] = useState(false);
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [view, setView] = useState(false);
    const [editFile, setEditFile] = useState(null);
    const [editUser, setEditUser] = useState({});
    const [deleteAction, setDeleteAction] = useState(false);
    

    const {confirmPassword, ...others} = values

    const onBlur = () => {
        setFocused(true);
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleView = () => {
        setView(!view)
    }

    const toggleEdit = (edit_id) => {
        setDeleteAction(false);
        setEditShow(!editShow)
        setEditUserId(edit_id)
        
        async function getUser() {
            try {
                const res = await userRequest.get(`/user/find/${edit_id}`);
                setEditUser(res.data);
                setValues({
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    email: res.data.email,
                    password: res.data.OriginalPassword,
                    confirmPassword: res.data.OriginalPassword,
                })
            } catch (err) {
                console.log(err)
            }
        }
        getUser();
    }

    const toggleModal = (e) => {
        setShow(!show)
        e.preventDefault();
    }

    const toggleModalState = (user_id) => {
        setDeleteAction(true)
        setShow(!show)
        setUserId(user_id)
        
    }

    const handleClick = () => {
        editHiddenFileInput.current.click();
    }

    const handleFileChange = (e) => {
        setEditFile(e.target.files[0]);
        if (e.target.files[0].type.startsWith("image/")) {
            setEditfileUrl(URL.createObjectURL(e.target.files[0]))
            setEditFileError(false)
        } else {
            setEditfileUrl(null)
            setEditFile(null)
            setEditFileError(true)
            e.target.value = null
        }
    }

    const handleSubmit1 = (e) => {
        setShow(!show);
        e.preventDefault();
        setEditShow(!editShow)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editFile != null) {
            if (editFile.type.startsWith("image/")) {
                const fileName = new Date().getTime() + editFile.name;
                const storage = getStorage(app);
                const storageRef = ref(storage, fileName);
                const uploadTask = uploadBytesResumable(storageRef, editFile);
                uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                    }
                }, 
                (error) => {
                
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        const editUserwithImage = {...others, profileImg: downloadURL};
                        async function editUser() {
                            try {
                                const res = await publicRequest.put(`/user/${editUserId}`, editUserwithImage);
                                console.log(res)
                                setShow(!show)
                                setState('updated')
                            } catch (err) {
                                console.log(err)
                            }
                        }
                        editUser();
                    });
                }
                );
            } else {
                setEditFileError(true);
            }
            
        } else {
            async function editUser() {
                try {
                    const res = await publicRequest.put(`/user/${editUserId}`, {...others});
                    console.log(res)
                    setShow(!show)
                    setState('updated')
                } catch (err) {
                    console.log(err)
                }
            }
            editUser();
            setEditFileError(false)
        }
    }


    console.log(show)

    const sort = (fieldname) => {
        setField(fieldname)
        if (sortDirection === -1) {
            setSortDirection(1)
        } else {
            setSortDirection(-1)
        }
    }
    
    const getMonth = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const neededDate  = new Date(date);

        const month = months[neededDate.getMonth()]

        return month
    }

    const getDay = (date) => {
        const neededDate  = new Date(date);

        const day = neededDate.getDate()

        return day
    }

    const getYear = (date) => {
        const neededDate  = new Date(date);

        const year = neededDate.getFullYear()

        return year
    }

    const handleDelete = (e) => {
        e.preventDefault();
        async function deleteUser() {
            try {
                const res = await userRequest.delete(`/user/${userId}`)
                console.log(res)
                setState('updated')
                setShow(!show)
            } catch (err) {
                console.log(err)
            }
        }

        deleteUser();
    }

    const editInputs = [
        {
            id: 11,
            name: "firstname",
            type: "text",
            label: "First Name",
            required: true,
            defaultValue: editUser.firstname
        },
        {
            id: 21,
            name: "lastname",
            type: "text",
            label: "Last Name",
            required: true,
            defaultValue: editUser.lastname
        },
        {
            id: 31,
            name: "email",
            type: "email",
            errormessage: "It should be a valid email address",
            label: "Email",
            required: true,
            defaultValue: editUser.email
        }
    ]


    

    return (
        <div>
            <table className='table'>
                <thead>
                    <th className='th'>
                        <div>
                            <p onClick={()=>sort('firstname')}>Name</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p onClick={()=>sort('email')}>Email</p>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p onClick={()=>sort('createdAt')}>Date</p>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </th>
                </thead>
                {userData.length > 0 &&
                <tbody>
                    {userData.map((user, index)=>(
                        <tr key={index} className='tbody'>
                            <td onClick={()=>toggleEdit(user._id)}>
                                <div>
                                    {!user.profileImg ? <ProfileImg width={60} height={60} className="userImg" user={user} /> : <img width={60} height={60} style={{ borderRadius: '50%'}} src={user.profileImg} alt='' />}
                                    <p>{`${user.firstname} ${user.lastname}`}</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p>{user.email}</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    <p>{`${getMonth(user.createdAt)} ${getDay(user.createdAt)}, ${getYear(user.createdAt)}`}</p>
                                </div>
                            </td>
                            
                            <FaEllipsisComponent toggleEdit={()=>toggleEdit(user._id)} toggleModalState={()=>toggleModalState(user._id)} />

                        </tr>
                    ))}
                        <Modal width='50%'  borderRadius={20} show={show} closeModal={()=>toggleModal()}>
                            <form className="confirm">
                            <div className="closeConfirm">
                                <FontAwesomeIcon onClick={toggleModal} icon={faTimes} />
                            </div>
                            <div className="confirmText">
                                <p>You Are About To {deleteAction ? 'Delete' : 'Edit'} A User</p>
                                {deleteAction ? <p>If you delete, you cannot recover this user</p> : 
                                <p>Do You Want To Go On With This Action</p>}
                            </div>
                            <div className="confirmButtons">
                                <button onClick={toggleModal}>Cancel</button>
                                <button onClick={deleteAction ? handleDelete : handleSubmit}>{deleteAction ? "Delete" : "Edit"}</button>
                            </div>
                            </form>
                        </Modal>
                        <Modal closeModal={toggleEdit} show={editShow}>
                            <form onSubmit={handleSubmit1}>
                                <div className="newUserformContainer">
                                    <div className="newUserheader">
                                        <p>Edit User</p>
                                    </div>
                                    <div className="newUserImage">
                                        {editUser.profileImg ? <img onClick={handleClick} width={110} height={110} style={{ alignSelf: "center", cursor: "pointer",borderRadius: "50%"}} src={editfileUrl==null ? editUser.profileImg : editfileUrl} alt='' /> : 
                                        <div onClick={()=>handleClick()} className='newUserimageSelect'>
                                            <FontAwesomeIcon icon={faCamera} />
                                        </div>}
                                        <input onChange={handleFileChange} ref={editHiddenFileInput} style={{ display: 'none'}} type='file' />
                                    </div>
                                    {editFileError ? <p style={{ textAlign: "center", color: "red"}}>Please select an Image</p> : null}
                                    {editInputs.map((input) => (
                                    <div className="newUseraddNewformInput">
                                        <label>{input.label}</label>
                                        <input {...input} onBlur={onBlur} focused={focused.toString()}  onChange={onChange} />
                                        <span className="error2">{input.errormessage}</span>
                                    </div>
                                    ))}

                                    <div className="newUseraddNewformInput">
                                        <label>Password</label>
                                        <input required={true} name='password' onChange={onChange} type={view ? null : 'password'} defaultValue={editUser.OriginalPassword} />
                                        {!view ? 
                                            <FontAwesomeIcon style={{ position: 'absolute', top: 38, right: 10, fontSize: 16 }} onClick={()=>handleView()} icon={faEye} />
                                        :
                                            <FontAwesomeIcon style={{ position: 'absolute', top: 38, right: 10, fontSize: 16 }} onClick={()=>handleView()} icon={faEyeSlash} />}
                                    </div>
                                    <div className="newUseraddNewformInput">
                                        <label>Confirm Password</label>
                                        <input name="confirmPassword" required={true} pattern={values.password} onFocus={()=>setFocused(true)} focused={focused.toString()} onChange={onChange} type={view ? null : 'password'} defaultValue={editUser.OriginalPassword} />
                                        {values.confirmPassword === values.password ? null : <span className='error4'>Passwords do not match</span>}
                                    </div>
                                    <button className="newUserbutton1">
                                        <div className="newUseraddNewButton">
                                            <FontAwesomeIcon icon={faSave} />
                                            <p>Edit User</p>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </Modal>
                </tbody>
                }
            </table>
            {userData.length === 0 && isLoading === false && <p className='no-data'>
                No data to display.....
            </p>}
            {isLoading && <div className="loading">
                <div className='lddring'><div></div></div>
                <p>Fetching Data...</p>
                </div>}
            
        </div>
    );
}

export default Usertables;