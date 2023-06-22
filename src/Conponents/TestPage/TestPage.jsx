// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './TestPage.css'
import TestPageQuestion from './TestPageQuestion'
import { useEffect, useState } from 'react'
import TestPageSummary from './TestPageSummary'
function TestPage(props){
    // console.log(props.value)
    let [arrOfAnswers,setArrOfAnswers]=useState({})
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
      
    }
    useEffect(function(){
        console.log('arrOfAnswers',arrOfAnswers)
    },[arrOfAnswers])
    return(
        <div className="TestPage">
      
            <Routes>
                {props.value.qname.map(item=>{
                    curPage++
                    return(
                        <Route key={item.id} path={'page='+curPage} element={<TestPageQuestion changeAns={changeAns} curTest={props.value._id} amountOfQuestions={amountOfQuestions} curPage={curPage} value={item}/>}/>
                    )
                  
                })}
                 <Route  path={'summary'} element={<TestPageSummary arrOfAnswers={arrOfAnswers}/>}/>
            </Routes>
        </div>
    )
}
export default TestPage