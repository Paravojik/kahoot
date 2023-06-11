import { useEffect, useState } from 'react'
import './CreateQuiz.css'
import del from '../img/delete-icon.png'
function CreateQuizAnswer(props){
    let [valInpAns,setValInpAns]=useState('')
    let [isRight,setIsRight]=useState(props.value.isRight)
    useEffect(function(){
        setValInpAns(props.value.ans)
        setIsRight(props.value.isRight)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.value.ans,props.value.isRight])
    function channgeInp(e){
        props.changeAns(props.value.num,e.target.value)
        setValInpAns(e.target.value)
    }
    function clickCheckbox(){
        setIsRight(!isRight)
        props.isRightAns(props.value.num)
    }
return(
    <div className="CreateQuizQuestion__ans__box">
    <textarea required value={valInpAns} onChange={(e)=>channgeInp(e)} className='CreateQuizQuestion__ans__box__question' placeholder='Write answer' maxLength={80}></textarea>
 
    <div className="CreateQuizQuestion__ans__box__btns">
    <img className='CreateQuizQuestion__del' onClick={()=>props.deleteAnswer(props.value.num)}  src={del} alt="" />
    <input className='CreateQuizQuestion__isRight'   checked={isRight}  type="checkbox" onChange={clickCheckbox}  />
    </div>
</div>
)
}
export default CreateQuizAnswer