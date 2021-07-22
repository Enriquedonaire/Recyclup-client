import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
// import from '@material-ui/core'
import axios from 'axios'
import SignIn from './components/Signin'
import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";
import Landing from './components/Landing';
// import dotenv from 'dotenv'
import API_URL from './config'

// import Material

function App() {



  const [user,updateUser] = useState(null)
  console.log(user, updateUser)

  
  useEffect(async (email,password) => {
    try {
      let myUser = {
        email: email,
        password: password
      }
      let response = await axios.get(`${API_URL}/API/signin`, myUser, {withCredentials: true})
      updateUser(response.data)
    }  
    catch(err){
      console.log('Todo fetch failed', err)
    }
  }, [])

  // useEffect(() => {
  //   props.history.push('/')
  // }, [user])  
  
  const handleSignIn = async(event, email, password) => {

    
    event.preventDefault()

    let myUser = {
      email: email,
      password: password
    }
    
    console.log(email, password)
    
    try{
      let response = await axios.post(`${API_URL}/API/signin`, myUser, {withCredentials: true})
      console.log('user info passed')
    }
    catch(err){
      console.log('failed to fetch user')
    }
  }

  const handleSignUp = async(event,username, email, password) => {
    event.preventDefault()

    let myUser = {
      username: username,
      email: email,
      password: password
      
    }

    try{
      let response = await axios.post(`${API_URL}/API/signup`, myUser, {withCredentials: true})
      console.log()
    }
    catch(err) {
      console.log('failed to send ')
    }
  }

  return (
    
    <div className="App">
      <Navbar/>
      <Switch>
        <Route  path="/signin"  render={(routeProps) => {
        return  <SignIn  onSignIn={handleSignIn} {...routeProps}/>
        }}/>
        <Route  path="/signup"  render={(routeProps) => {
        return  <SignUp onSignUp={handleSignUp} {...routeProps}/>
        }}/>      
      </Switch>
    </div>
  );
}

export default App;

// gigi was here 