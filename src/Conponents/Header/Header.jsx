import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'
import BtnTests from '../UI/BtnTests/BtnTests'
import BtnCreate from '../UI/BtnCreate/BtnCreate'
import {  useState } from 'react'
function Header(){
    // eslint-disable-next-line
    let [userInfo,setUserInfo]=useState(JSON.parse(localStorage.getItem('UserInfo__LS')) || {})
    let [isVisibleMenu,setIsVisibleMenu]=useState(false)
    return(
        <header className="Header">
            <Link to='/'><Logo/></Link>
        
            <div className="Header__btns">
                <BtnTests/>
                <BtnCreate/>
             <div className="Header__btns__user" onClick={()=>setIsVisibleMenu(!isVisibleMenu)}>
                    
                {userInfo.Unickname ?userInfo.Unickname : 'Guest'}
                <div className="Header__btns__user__menu" style={isVisibleMenu===true? {display:'flex'}:{display:'none'}}>
                    {userInfo.Unickname ?<Link to='/signUp'>Change Account</Link>:   <Link to='/signUp'>Sign Up</Link> }
                  
                </div>

             </div>
            </div>
        </header>
    )
}
export default Header