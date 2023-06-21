import { useEffect, useState } from 'react'
import './Loading.css'
function Loading(props){
    let colorBox=[
        'red',
        'blue',
        'rgb(255, 183, 0)',
        'green'
    ]
    let [currentStart,setCurrentStart]=useState(1)
    useEffect(function(){
        const interval= setInterval(function(){
            let currentNum=currentStart++
          
            console.log(currentNum)
            if(currentNum>4){
                currentNum=1
            }
            setCurrentStart(currentNum)
        },2000)
        return () => clearInterval(interval);
    })
    let currentElement=0
    return(
        <div className="Loading"  style={{  position: props.position || 'fixed',width:props.width || '300px',height:props.height || '300px',top:props.top || "calc(50vh - 150px)",left:props.left || "calc(50% - 150px)", display: (props.visible===false? 'none':'flex')}}>
            {colorBox.map(item=>{
                
                let val;
                if(currentElement+currentStart>4){
                    val=currentElement+currentStart-4
                }else{
                    val=currentElement+currentStart
                }
                currentElement++
                return(
                    <div key={'Loading__box'+item} className={["Loading__box",'Loading__box'+val].join(' ')} style={{backgroundColor:item}}></div>
                )
              
            })}
          
   
        </div>
    )
}
export default Loading