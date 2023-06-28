import './Tests.css'
import yellowStar from '../img/yellowStar.png'
import blackStar from '../img/blackStar.png'
import { Link } from 'react-router-dom'
function Test(props){

    return(
        <div className="Tests__main__test" >
              <Link onClick={()=>localStorage.setItem('arrOfAnswers__LS',JSON.stringify({}))} key={'Test:'+props.value._id} to={props.value._id+'/page=1'  }>
        <h1>{props.value.tname}</h1>
        </Link>
   
        <h4 className='Tests__main__test__numberOfQuest'>Number of questions: {props.value.qname.length}</h4>
        {props.value.creator ?<h4>Creator: {props.value.creator}</h4> : null }
        <div className="Tests__main__test__likes">
            <img onClick={()=>props.clickLike(props.value._id)} alt='like' src={props.like===true? yellowStar: blackStar}/>
            <h5>{props.value.likes+(props.like===true? 1: 0)}</h5>
        </div>
        

       

    </div>
    )
}
export default Test