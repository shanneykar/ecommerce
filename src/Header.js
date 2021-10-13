import React from 'react';
import logo from './logo.jpg';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const[{ basket,user }, dispatch] = useStateValue();

    const handleAuthentication = () =>{
            if(user){
                auth.signOut();
            }
    }

    return (
        <div className="header">
            <Link to='/'>
            <img className="header__logo" src={logo} alt="logo"/>
            </Link>
            
            <div className="header__searchbar">
                <input placeholder="search products"/>
                <button>
                    <SearchIcon/>
                </button>
            </div>
            <ul className="header__options">
                <div className="header__user" onClick={handleAuthentication}>
                <Link to={!user && '/login'}>
                {user? <li>{user?.email}(Sign Out)</li> : <li>Sign In</li>}    
                </Link>  
                </div>
                             
                <li>Return and Orders</li>
                <Link to='/checkout'>
                <li>Cart<sup>{basket?.length}</sup></li>

                </Link>
                
            </ul>
            
        </div>
    )
}

export default Header
