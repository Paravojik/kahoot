import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'
import BtnTests from '../UI/BtnTests/BtnTests'
import BtnCreate from '../UI/BtnCreate/BtnCreate'
function Header(){
    return(
        <header className="Header">
            <Link to='/'><Logo/></Link>
        
            <div className="Header__btns">
                <BtnTests/>
                <BtnCreate/>
             
            </div>
        </header>
    )
}
export default Header