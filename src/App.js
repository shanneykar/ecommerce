import React,{ useEffect } from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';



function App() {
  const[{},dispatch] = useStateValue();
  //listens to when loged in user changes
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("mmmmm",authUser);
      if(authUser){
        //user was logged in
        dispatch({
            type:'SET_USER',
            user:authUser,
        })
      }
      else{
        //user logged out
        dispatch({
          type:'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* payment page */}
          <Route path="/payment">
            <Header/>
            <Payment/>
          </Route>
          {/* login page */}
          <Route path="/login">
            <Login/>
          </Route> 

          {/* checkout page */}
        <Route path="/checkout">
            <Header/>     
            <Checkout/>
          </Route> 

          {/* homepage  */}
          <Route path="/">
            <Header/>     
            <Home/>
          </Route> 

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
