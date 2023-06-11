import { useEffect, useState } from 'react'
import './CreateQuiz.css'
import CreateQuizAnswer from './CreateQuizAnswer'
import del from '../img/delete-icon.png'
function CreateQuizQuestion(props){
    let [arrOfAnswers,setArrOfAnswers]=useState([{id:'Answer: '+1,num:0,ans:'',isRight:false}])
    let [inpValue,setInpValue]=useState(props.value.question)
    let [delit,setDelit]=useState(0)
    function addAnswer(){
        setArrOfAnswers([...arrOfAnswers,{id:'Answer: '+(arrOfAnswers.length+1),num:arrOfAnswers.length,ans:'',isRight:false}])
    }

    useEffect(function(){
        console.log(delit)
        setInpValue(props.value.question)

        setArrOfAnswers([...props.value.answer])
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.value.question,delit])
    function changeAns(num,value){
        let copy=[...arrOfAnswers]
        copy[num].ans=value
 
        setArrOfAnswers([...copy])
    }
    useEffect(function(){
        props.changeAns(props.value.num,arrOfAnswers)
     
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[arrOfAnswers ])
    function changeQuest(e){
        setInpValue(e.target.value)
        props.changeQuestion(props.value.num,e.target.value)
    }
    function deleteQuest(){
        props.deleteQuestion(props.value.num)
        setDelit(delit++)
        console.log(delit)
 
   
    }
    function deleteAnswer(number){
        let copy= arrOfAnswers.filter(item=>item.num!==number)
        for(let i=0;i<copy.length;i++){
         copy[i].id= 'Question: '+(i+1)
         copy[i].num= i
        }
        setArrOfAnswers([...copy])
    }
    function isRightAns(num){
        let copy=[...arrOfAnswers]
        copy[num].isRight=!copy[num].isRight
        setArrOfAnswers([...copy])
    }

    return(
        <div className="CreateQuizQuestion">
            <div className="CreateQuizQuestion__top">
            <div className="CreateQuizQuestion__count"><div className="CreateQuizQuestion__count__text">Question:  </div> {props.curQuest}</div>
        <input className='CreateQuizQuestion__inp' value={inpValue} onChange={(e)=>changeQuest(e)} required placeholder='Write question' type="text" />
     
     
        <img className='CreateQuizQuestion__del' onClick={deleteQuest} src={del} alt="" />
            </div>
          
        <div className="CreateQuizQuestion__ans">
            {arrOfAnswers.map(item=>{
       
                return(
                    <CreateQuizAnswer isRightAns={isRightAns}  deleteAnswer={deleteAnswer} changeAns={changeAns} value={item} key={item.id}/>
                )
            })}

            
            <div className="CreateQuizQuestion__ans__btnBox">
            <div className="CreateQuizQuestion__ans__btn" onClick={addAnswer}>Add</div>
            </div>
        
        </div>
    </div>
    )
}
export default CreateQuizQuestion