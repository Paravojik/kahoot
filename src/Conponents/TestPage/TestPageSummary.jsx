import { useEffect, useState } from 'react'
import './TestPage.css'
export default function TestPageSummary(props){
    let [arrOfAns,setArrOfAns]=useState([])
    useEffect(function(){
        let keys=Object.keys(props.arrOfAnswers)
        let copy=[]
        for(let i=0;i<keys.length;i++){
            copy.push(props.arrOfAnswers[keys[i]])
        }
        console.log('c',copy)
        setArrOfAns(copy)
        // eslint-disable-next-line
    },[])
    return(
        <div className="TestPageSummary">
            TestPageSummary
            {arrOfAns.map(item=>{
                return(
                   <div className="aboba">{item.ans}</div>
                )
            })}
        </div>
    )
}