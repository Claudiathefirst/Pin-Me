import axios from 'axios';
//action types
const GET_USER = 'GET_USER';
//action creators
const getUser = (user) => ({ type: GET_USER, user });
//initial state
const defaultUser = {};
//thunks

//reducer
