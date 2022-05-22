import axios from "axios";

const BASE_URL = 'http://192.168.0.18:5000/api/';
const user = localStorage.getItem('persist:root') === null ? '' : JSON.parse(localStorage.getItem('persist:root')).user;
const currentUser = user ? JSON.parse(user).currentUser : '';
const TOKEN = currentUser ? currentUser.accessToken : "";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:  `Bearer ${TOKEN}`},
})