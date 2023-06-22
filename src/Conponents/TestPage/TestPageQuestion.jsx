import { Link } from 'react-router-dom'
import './TestPage.css'
function TestPageQuestion(props){
    // console.log(props.amountOfQuestions,props.amountOfQuestion)
    return(
        <div className="TestPageQuestion">
            <div className="TestPageQuestion__id">{props.value.id}</div>
            <div className="TestPageQuestion__question">
            {props.value.question}
            </div>
          <div className="TestPageQuestion__answers">
            {props.value.answer.map(item=>{
                return(
                    <Link 
                    onClick={()=>props.changeAns(props.curPage,item)} 
                    key={item.id}  
                    to={ (props.amountOfQuestions!==(props.curPage)) ? '/tests/'+props.curTest+'/page='+(props.curPage+1) :'/tests/'+props.curTest+'/summary'} 
                    className="TestPageQuestion__answers__box"   
                    style={{backgroundColor:"hsl(" + 360 * Math.random() + ',' +(25 + 70 * Math.random()) + '%,' + (60 + 10 * Math.random()) + '%)'}}>
                    
                 
                    {item.ans}
                    </Link>
                )
            })}
            


          </div>
        </div>
    )
}
export default TestPageQuestion