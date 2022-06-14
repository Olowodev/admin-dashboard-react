import './Users.css'
import Navbar from '../../components/navBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCamera, faSave, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Usertables from '../../components/usertables/Usertables';
import { useState, useEffect, useRef } from 'react';
import { publicRequest} from '../../requestMethods';
import Pagination from '../../components/paginaion/Pagination';
import Modal from '../../components/modal/Modal';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'
import { useSelector } from 'react-redux';
import axios from 'axios';

const Users = () => {
const token = useSelector((state) => state.user.currentUser === null? null : state.user.currentUser.accessToken)
const BASE_URL = 'http://192.168.0.18:5000/api/';

const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:  `Bearer ${token}`},
})
    const [admins, setAdmins] = useState([]);
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState();
    const [numOfUsers, setNumOfUsers] = useState();
    const [field, setField] = useState('createdAt');
    const [sortDirection, setSortDirection] = useState(-1);
    const [addAdmin, setAddAdmin] = useState(true);
    const [focused, setFocused] = useState(false);
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [view, setView] = useState(false);
    const hiddenFileInput = useRef();
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState();
    const [fileError, setFileError] = useState(false);
    const [state, setState] = useState();
    const [isLoading, setIsLoading] = useState(false);

    console.log(fileError);
    
    const {confirmPassword, ...others} = values
    const registeredAdmin = {...others, isAdmin : true}

    const onBlur = () => {
        setFocused(true);
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleView = () => {
        setView(!view)
    }

    const toggleModaladmin = () => {
        setShow(!show)
        setAddAdmin(true);
    }

    const toggleModaluser = () => {
        setShow(!show)
        setAddAdmin(false);
    }

    const handleClick = () => {
        hiddenFileInput.current.click();
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        if (e.target.files[0].type.startsWith("image/")) {
            setFileUrl(URL.createObjectURL(e.target.files[0]))
            setFileError(false)
        } else {
            setFileUrl(null)
            setFile(null)
            setFileError(true)
            e.target.value = null
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (file != null) {
            if (file.type.startsWith("image/")) {
                const fileName = new Date().getTime() + file.name;
                const storage = getStorage(app);
                const storageRef = ref(storage, fileName);
                const uploadTask = uploadBytesResumable(storageRef, file);
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
                        const registeredAdminwithImage = {...others, isAdmin: true, profileImg: downloadURL};
                        const registeredUserwithImage = {...others, profileImg: downloadURL};
                        console.log(registeredAdminwithImage)
                        async function registerUser() {
                            try {
                                 await publicRequest.post('/auth/register', addAdmin ? registeredAdminwithImage : registeredUserwithImage);
                            } catch (err) {
                                console.log(err)
                            }
                        }
                        registerUser();
                    });
                }
                );
            } else {
                setFileError(true);
            }
            
        } else {
            async function registerUser() {
                try {
                    const res = await publicRequest.post('/auth/register', addAdmin ? registeredAdmin : {...others});
                    console.log(res)
                } catch (err) {
                    console.log(err)
                }
            }
            registerUser();
            setFileError(false)
        }
    }


    useEffect(() => {
        async function fetchadmins() {
        setIsLoading(true)
        try {
            const res = await userRequest.get('/user/findadmin')
            const admins = res.data
            if (admins.length > 0) {
                setAdmins(admins)
            }
            setState('loaded')
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    async function fetchusers() {
        setIsLoading(true)
        try {
            const res = await userRequest.get(`/user/${currentPage}/${field}?sort=${sortDirection}`)
            setIsLoading(false)
            const users = res.data.users;
            console.log(users)
            if (users.length > 0) {
                setUsers(users)
            }
            setPages(res.data.pages)
            setNumOfUsers(res.data.numOfResults)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }
    fetchadmins();
    fetchusers();
    }, [currentPage, field, sortDirection, state])

    useEffect(() => {
        if (show === false) {
            setFileError(false)
        }
    }, [show])


    const inputs = [
        {
          id: 10,
          name: "firstname",
          type: "text",
          //placeholder: "First Name",
          errormessage:
            "",
          label: "First Name",
          //pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
            id: 20,
            name: "lastname",
            type: "text",
            //placeholder: "Last Name",
            errormessage:
              "",
            label: "Last Name",
            //pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
        {
          id: 30,
          name: "email",
          type: "email",
          //placeholder: "Email",
          errormessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        /*{
          id: 4,
          name: "password",
          type: view ? null : 'password',
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          //pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 5,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },*/
    ]

    return (
        <div>
            <div>
                <Navbar page='Users' />
                <div className='userPage'>
                    <div>
                        <div className='users'>
                            <div className='header'>
                                <h1>Admin Users</h1>
                                <div className='function' onClick={() =>toggleModaladmin()}>
                                    <FontAwesomeIcon className='headerIcon' icon={faPlus} />
                                    <p>Add Admin</p>
                                </div>
                            </div>

                            <Usertables isLoading={isLoading} setField={setField} sortDirection={sortDirection} setSortDirection={setSortDirection} userData={admins} setState={setState} />
                        </div>
                        <div className='users'>
                            <div className='header'>
                                <h1>Registered Customers</h1>
                                <div className='function' onClick={() =>toggleModaluser()}>
                                    <FontAwesomeIcon className='headerIcon' icon={faPlus} />
                                    <p>Add Customers</p>
                                </div>
                            </div>

                            <Usertables isLoading={isLoading} setState={setState} setField={setField} sortDirection={sortDirection} setSortDirection={setSortDirection} userData={users}   />
                            {pages > 1 && <Pagination data='Users' currentPage = {currentPage} pages={pages} setCurrentPage = {setCurrentPage} numOfData={numOfUsers} />}
                        </div>
                    </div>
                    <div>
                        <Modal closeModal={toggleModaladmin}  show={show}>
                        <form onSubmit={handleSubmit}>
                            <div className='newUserformContainer'>
                                <div className='newUserheader'>
                                    <p>Add a New {addAdmin ? "Admin" : "User"}</p>
                                </div>
                                <div className='newUserImage'>
                                {fileUrl ? <img onClick={handleClick} width={110} height={110} style={{ alignSelf: 'center', cursor: 'pointer', borderRadius: "50%"}}  src={fileUrl} alt='' /> :
                                <div onClick={()=>handleClick()} className='newUserimageSelect'>
                                    <FontAwesomeIcon icon={faCamera} />
                                </div>}
                                <input onChange={handleFileChange} type='file' ref={hiddenFileInput} style={{ display: 'none'}} />
                                </div>
                                {fileError ? <p style={{ textAlign: 'center', color: 'red'}}>Please select an Image</p> : null}
                                {inputs.map((input) => (
                                    <div className='newUseraddNewformInput'>
                                        <label>{input.label}</label>
                                        <input {...input} onBlur={onBlur} focused={focused.toString()}  onChange={onChange}/>
                                        <span className='error2'>{input.errormessage}</span>
                                    </div>
                                ))}

                                <div className='newUseraddNewformInput'>
                                    <label>Password</label>
                                    <input id={40} required={true} name='password' onChange={onChange} type={view ? null : 'password'} />
                                    {!view ? 
                                        <FontAwesomeIcon style={{ position: 'absolute', top: 38, right: 10, fontSize: 16 }} onClick={()=>handleView()} icon={faEye} />
                                    :
                                        <FontAwesomeIcon style={{ position: 'absolute', top: 38, right: 10, fontSize: 16 }} onClick={()=>handleView()} icon={faEyeSlash} />}
                                </div>
                                <div className='newUseraddNewformInput'>
                                    <label>Confirm Password</label>
                                    <input id={50} name= 'confirmPassword' required= {true} pattern={values.password} onFocus={()=>setFocused(true)} focused={focused.toString()} onChange={onChange} type={view ? null : 'password'} />
                                    {values.confirmPassword === values.password ? null : <span className='error4'>Passwords do not match</span>}
                                </div>
                                <button className='newUserbutton1'>
                                    <div className='newUseraddNewButton'>
                                        <FontAwesomeIcon icon={faSave} />
                                        <p>Add {addAdmin ? "Admin" : "User"}</p>
                                    </div>
                                </button>
                            </div>
                        </form>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );}

export default Users;