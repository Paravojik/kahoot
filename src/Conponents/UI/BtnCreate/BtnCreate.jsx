import { Link } from 'react-router-dom'
import './BtnCreate.css'
function BtnCreate(){
    return(
        <Link to='/createQuiz'> <div className="Header__btns__btn Header__btns__btnCreate">Create Test</div></Link> 
    )
}
export default BtnCreate