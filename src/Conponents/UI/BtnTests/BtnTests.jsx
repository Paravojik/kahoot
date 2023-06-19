import { Link } from 'react-router-dom'
import './BtnTests.css'
function BtnTests(){
    return(
        <Link to='/tests'><div className="Header__btns__btn Header__btns__btnTests">Tests</div></Link>  
    )
}
export default BtnTests