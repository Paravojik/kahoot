import { useEffect, useState } from 'react'
import './TestPage.css'
export default function TestPageSummary(props){
    let [arrOfAns,setArrOfAns]=useState([])
    let [amountOfPoints,setAmountOfPoints]=useState(0)
    let [amountOfPosiblePoints,setAmountOfPosiblePoints]=useState(0)
    useEffect(function(){

        let keys=Object.keys(props.arrOfAnswers)
        let copy=[]
        for(let i=0;i<keys.length;i++){
            copy.push(props.arrOfAnswers[keys[i]])
        }
        // console.log('c',copy)
        setArrOfAns(copy)
        let curPoints=0
        for(let i=0;i<copy.length;i++){
            // console.log(i,copy[i].isRight);
         if(copy[i].isRight===true) {
            curPoints++ 
         }
          
        }
        setAmountOfPoints(curPoints)
        setAmountOfPosiblePoints(copy.length)
        // eslint-disable-next-line
    },[])
    return(
        <div className="TestPageSummary">
            <h1>{props.value.tname} is ended and now you can see result:</h1>
            <div className="TestPageSummary__points">
                <div className="TestPageSummary__points__bar">
                    <div className="TestPageSummary__points__bar__green" 
                    style={{width:(amountOfPoints/amountOfPosiblePoints*100)+'%',
                    // backgroundColor:'rgb('+((amountOfPoints/amountOfPosiblePoints*100<=50)?255/(amountOfPoints+1) : 0)+','+ ((amountOfPoints/amountOfPosiblePoints*100>50) ? 255*(amountOfPoints/amountOfPosiblePoints) : 0) +','+ 0+')' 
                    }}>
                   
                    </div>
                        <div className="TestPageSummary__points__bar__container">
                        <h4 className="TestPageSummary__points__bar__bad">Bad</h4>
                        <h4 className="TestPageSummary__points__bar__good">Good</h4>
                        </div>
                  
                </div>
                <div className="TestPageSummary__points__text"><h2>{amountOfPoints}/{amountOfPosiblePoints}</h2></div>
                </div>
                <div className="TestPageSummary__container">
                {props.value.qname && arrOfAns.map((item,item2)=>{
                return(
                   <div key={'result:'+item.ans} className="TestPageSummary__container__block">
                    <div className="TestPageSummary__container__block__question">{props.value.qname[item2].question}</div>
                    <div className="TestPageSummary__container__block__ans">
                    <div className="TestPageSummary__container__block__yourAns">
                        Your answer:
                        
                        {(item.isRight===true)? <h4 style={{color:'rgb(75, 125, 0)'}}>{item.ans}</h4>: <h4 style={{color:'rgb(120, 4, 0)'}}><strike>{item.ans}</strike></h4>}
                        
                    
                    </div>
                    
                    <div className="TestPageSummary__container__block__rightAnswers">
                        Right Answer:
                    {props.value.qname[item2].answer.map(item=>{
                        return(
                            <h4 key={'rightAns:'+item.ans}>{(item.isRight===true)? item.ans :null}</h4>
                        )

                    })}
                    </div>
                    </div>
                  </div>
                )
            })}
                </div>
 
        </div>
    )
}