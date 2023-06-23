// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './TestPage.css'
import TestPageQuestion from './TestPageQuestion'
import { useEffect, useState } from 'react'
import TestPageSummary from './TestPageSummary'
function TestPage(props){
    // console.log(props.value)
    let [arrOfAnswers,setArrOfAnswers]=useState(JSON.parse(localStorage.getItem('arrOfAnswers__LS')) || {})
    let curPage=0
    let [amountOfQuestions,setAmountOfQuestions]=useState('')
    useEffect(function(){
        setAmountOfQuestions(props.value.qname.length)
// eslint-disable-next-line
    },[])
    function changeAns(num,value){
        let copy={...arrOfAnswers}
        copy[num]=value
        setArrOfAnswers(copy)
        localStorage.setItem('arrOfAnswers__LS',JSON.stringify(copy))
        console.log(JSON.parse(localStorage.getItem('arrOfAnswers__LS')),copy)
      
    }

    return(
        <div className="TestPage">
      
            <Routes>
                {props.value.qname.map(item=>{
                    curPage++
                    return(
                        <Route key={item.id} path={'page='+curPage} element={<TestPageQuestion changeAns={changeAns} curTest={props.value._id} amountOfQuestions={amountOfQuestions} curPage={curPage} value={item}/>}/>
                    )
                  
                })}
                 <Route  path={'summary'} element={<TestPageSummary value={props.value} arrOfAnswers={arrOfAnswers}/>}/>
            </Routes>
        </div>
    )
}
export default TestPage