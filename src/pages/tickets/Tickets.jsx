import './Tickets.css'
/*global google */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUp, faFilter } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navBar/NavBar';
import Tickettables from '../../components/Tickettables/Tickettables';
import axios from 'axios'
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { publicRequest } from '../../requestMethods';
import { gLogin, refreshTokenFunc } from '../../redux/apiCalls';
import jwt_decode from 'jwt-decode'
//import {gapi} from 'gapi-script'
//import {GoogleLogin} from 'react-google-login'
//import { GoogleLogout } from 'react-google-login';
//import { useGoogleLogin } from '@react-oauth/google';
//import {useGoogleOneTapLogin} from 'react-google-one-tap-login'

const Tickets = () => {

    const dispatch = useDispatch();
    
  const accessToken = useSelector((state) => state.user.googleTokens === null ? null : state.user.googleTokens.access_token);
  const idToken = useSelector((state) => state.user.googleTokens === null ? null : state.user.googleTokens.id_token);
  const refreshToken = useSelector((state) => state.user.googleTokens === null ? null : state.user.googleTokens.refresh_token);


  const decoded = jwt_decode(idToken);
  const email = decoded.email;

  const [tickets, setTickets] = useState([]);
  const [messagesId, setMessagesId] = useState([]);

    

    const gButton = useRef();

    /*const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: error => console.log(error)
    })*/

    const CLIENT_ID = "632568088361-u00opf4ej4mrqlf5s4rig5n1q9cdmqma.apps.googleusercontent.com"
    const API_KEY = "AIzaSyCPfWP0-pieT4LlTA78W9GZalqpRfbL8rg"
    const SCOPES = "https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly"

    /*useGoogleOneTapLogin({
        onError: error => console.log(error),
        onSuccess: response => console.log(response),
        googleAccountConfigs: {
            client_id: CLIENT_ID
        }
    })*/

    

    

    /*const handleCredentialResponse = (res) => {
        console.log(res.credential)
    }*/
    const googleRequest = axios.create({
        baseURL: "https://gmail.googleapis.com/gmail/v1/users",
        headers: {Authorization: `Bearer ${accessToken}`}
    })

    /* global google*/
    useEffect(() => {
        /*function start() {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                scope: SCOPES
            })
        };

        gapi.load('client:auth2', start);*/
        
        const client = google.accounts.oauth2.initCodeClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
            ux_mode: "popup",
            callback: async (response) => {
                console.log(response);
                gLogin(dispatch, {code : response.code});
            }
        })

        if (!accessToken) {
        client.requestCode();
        }

        async function getList() {
            //const accessToken = gapi.auth.getToken().access_token;
            console.log(accessToken)
            
            try {
                const res = await googleRequest.get(`/${email}/messages`)
                for (let i = 0; i < res.data.messages.length; i++) {
                    setMessagesId(res.data.messages[i].id)
                }
                
            } catch (err) {
                console.log(err)
            }
        }

        getList();

        async function getMessages() {
            try {
                for (let i = 0; i < messagesId.length; i++) {
                const res = await googleRequest.get(`/${email}/messages/${messagesId[i]}`)
                    console.log(res)
                }
            } catch (err) {
                console.log(err)
            }
        }

        getMessages();

        const interval  = setInterval (async () => {
            refreshTokenFunc(dispatch, {refreshToken: refreshToken})
          }, 3000000);
      
          return () => clearInterval(interval);

        //login()

        /*google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
            gButton.current,
            { theme: "outline", size: "large"}
        );
        google.accounts.id.prompt();*/
    }, [])

    /*const onSuccess = (res) => {
        console.log("Current user: ", res)
    }

    const onSuccess1 = () => {
        console.log("log out successful")
    }

    const onFailure = (res) => {
        console.log(res)
    }*/

    return (
        <div>
            <div>
                <Navbar page='Tickets' />


                {/*<GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    />
                <GoogleLogout
                    clientId={CLIENT_ID}
                    buttonText="Logout"
                    onLogoutSuccess={onSuccess1}
    />*/}
                <div ref={gButton}></div>
                <div className='ticket'>
                    <div className='header'>
                        <h1>All tickets</h1>
                        <div className='functions'>
                            <div className='function'>
                                <FontAwesomeIcon className='headerIcon' icon={faSortAmountUp} />
                                <p>Sort</p>
                            </div>
                            <div className='function'>
                                <FontAwesomeIcon className='headerIcon' icon={faFilter} />
                                <p>Filter</p>
                            </div>
                        </div>
                    </div>

                    <Tickettables Ticket={tickets} />

                </div>
            </div>
        </div>
    );}

export default Tickets;