import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css'
import { faBell, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import { updateUser } from '../../redux/apiCalls';
import ProfileImg from '../profileImg/ProfileImg';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'
import axios from 'axios';

const Navbar = ({page}) => {

const token = useSelector((state) => state.user.currentUser === null? null : state.user.currentUser.accessToken)
const BASE_URL = 'http://192.168.0.18:5000/api/';


 const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:  `Bearer ${token}`},
})

    const [show, setShow] = useState(false);
    const [activeUser, setActiveUser] = useState({});
    const [view, setView] = useState(false);
    const hiddenFileInput = useRef();
    const [file, setFile] = useState(null);
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [fileUrl, setFileUrl] = useState();
    const [fileError, setFileError] = useState(false);
    const dispatch = useDispatch();

    const {confirmPassword, ...others} = values
    
    const [focused, setFocused] = useState(false);

    const onBlur = () => {
        setFocused(true);
    }

    const handleView = () => {
        setView(!view)
    }

    const toggleModal = () => {
        setShow(!show)
    }

    const handleClick = () => {
        hiddenFileInput.current.click();
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
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



    const handleSave = (e) => {
        e.preventDefault();
        if (file != null) {
            if (file.type.startsWith("image/")) {
                const fileName = new Date().getTime() + file.name;
                const storage = getStorage(app);
                const storageRef = ref(storage, fileName);
                const uploadTask = uploadBytesResumable(storageRef, file);

                // Register three observers:
                // 1. 'state_changed' observer, called any time the state changes
                // 2. Error observer, called on failure
                // 3. Completion observer, called on successful completion
                uploadTask.on('state_changed', 
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
                    // Handle unsuccessful uploads
                }, 
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    const newUser = {...others, profileImg: downloadURL};
                    updateUser(user._id, dispatch, newUser, token)
                    });
                }
                );
            } else {
                setFileError(true);
            }
        } else {
            updateUser(user._id, dispatch, {...others}, token)
            setFileError(false)
        }
    

    }
    const user = useSelector((state) => state.user.currentUser === null ? null : state.user.currentUser);


    useEffect(() => {
        if (show === false) {
            setFileError(false)
        }
    }, [show])

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await userRequest.get(`/user/find/${user._id}`)
                const activeUser = res.data
                setActiveUser(activeUser);
                setValues({
                    firstname: activeUser.firstname,
                    lastname: activeUser.lastname,
                    email: activeUser.email,
                    password: activeUser.OriginalPassword,
                    confirmPassword: activeUser.OriginalPassword
                })
            } catch (err) {
                console.log(err)
            }
        }
        fetchUser();
    }, [user._id])

    const inputs = [
        {
            id: 1,
            name: 'firstname',
            type: 'text',
            errormessage: "",
            label: 'First Name',
            required: true,
            defaultValue: activeUser.firstname
        },
        {
            id: 2,
            name: 'lastname',
            type: 'text',
            errormessage: "",
            label: 'Last Name',
            required: true,
            defaultValue: activeUser.lastname
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            errormessage: "It should be a valid email address",
            label: 'Email',
            required: true,
            defaultValue: activeUser.email
        },
    ]
    
    return (
        <div className='navbar'>
            <div className='navbarTitle'>
                <p>{page}</p>
            </div>

            <div className='navbarEnd'>
                <div className='navbarIcons'>
                    <FontAwesomeIcon className='navbarIcon' icon={faBell} />
                </div>
                <div className='vline'></div>
                <div className='navbarProfile'>
                    <p>{`${user.firstname} ${user.lastname}`}</p>
                    {user.profileImg ? <img onClick={toggleModal} width={60} height={60} src={user.profileImg} alt='' /> :
                    <ProfileImg fontSize={22} user={user} width={60} height={60} onClick={() =>toggleModal()} className='userIcon' />}
                </div>  
            </div>
            <Modal width='50%' closeModal={toggleModal} show={show}>
                <div className='profile'>
                    <h2>PROFILE</h2>
                    <div className='hline'></div>
                    <div className='mainProfile'>
                        <div className='leftProfile'>
                            {activeUser.profileImg ? <img onClick={()=>handleClick()} width={150} height={150} src={fileUrl == null ? user.profileImg : fileUrl} alt='' /> :
                            <ProfileImg onClick={()=>handleClick()} fontSize={52} width={150} height={150} user={user} className='profileUserIcon' />}
                            {fileError ? <p style={{ textAlign: 'center', color: 'red'}}>Please select an Image</p> : null}

                            <button onClick={()=>handleClick()}>CHANGE</button>
                            <input onChange={handleFileChange} type='file' ref={hiddenFileInput} style={{ display: 'none' }} />
                        </div>
                        <div className='rightProfile'>
                            <form onSubmit={handleSave}>
                                {inputs.map((input) => (
                                    <div key={input.id} className='inputs'>
                                        <label>{input.label}</label>
                                        <input {...input} onBlur={onBlur} focused={focused.toString()}  onChange={onChange} />
                                        <span className='error2'>{input.errormessage}</span>
                                    </div>
                                ))}
                                <div className='inputs'>
                                    <label>Password</label>
                                    <div className='passwordInputs'>
                                        <div className='passwordInput'>
                                            <input id={4} required={true} name='password' onChange={onChange} type={view ? null : 'password'} defaultValue={activeUser.OriginalPassword} />
                                            {!view ? 
                                            <FontAwesomeIcon style={{ position: 'absolute', top: 14, right: 10, fontSize: 16 }} onClick={()=>handleView()} icon={faEye} />
                                            :
                                            <FontAwesomeIcon style={{ position: 'absolute', top: 14, right: 10, fontSize: 16 }} onClick={()=>handleView()} icon={faEyeSlash} />}
                                        </div>
                                        <div className='passwordInput2'>
                                            <input id={5} name= 'confirmPassword' required= {true} pattern={values.password} onFocus={()=>setFocused(true)} focused={focused.toString()} onChange={onChange} type={view ? null : 'password'} defaultValue={activeUser.OriginalPassword} />
                                            {values.confirmPassword === values.password ? null : <span className='error3'>Passwords do not match</span>}
                                        </div>
                                    </div>
                                </div>
                                <button>SAVE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Navbar;