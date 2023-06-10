import { useEffect, useState } from 'react'
import './CreateQuiz.css'
import del from '../img/delete-icon.png'
function CreateQuizAnswer(props){
    let [valInpAns,setValInpAns]=useState('')
    useEffect(function(){
        setValInpAns(props.value.ans)
    },[props.value.ans])
    function channgeInp(e){
        props.changeAns(props.value.num,e.target.value)
        setValInpAns(e.target.value)
    }
return(
    <div className="CreateQuizQuestion__ans__box">
    <textarea required value={valInpAns} onChange={(e)=>channgeInp(e)} className='CreateQuizQuestion__ans__box__question' placeholder='Write answer' maxLength={80}></textarea>
    <img className='CreateQuizQuestion__del' onClick={()=>props.deleteAnswer(props.value.num)}  src={del} alt="" />
</div>
)
}
export default CreateQuizAnswer