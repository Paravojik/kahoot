import { useEffect, useState } from 'react'
import './Tests.css'
import Test from './Test'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'
import TestPage from '../TestPage/TestPage'

function Tests(){
    let [tests,setTests]=useState([])
    let [filteredTests,setFilteredTests]=useState([])
    let [filterInp,setFilterInp]=useState('')
    let [isVisibleLoading,setIsVisibleLoading]=useState(false)
    let [userInfo,setUserInfo]=useState(JSON.parse(localStorage.getItem('UserInfo__LS')) || {})

    function getData(){
        setIsVisibleLoading(true)
        fetch('https://paravojik-kahoot-api.onrender.com/getQuestions')
        .then((res)=>res.json())
        .then((data)=>{
      
            console.log(data,'getData')
            setTests(data)
            setFilteredTests(data)
            setIsVisibleLoading(false)
        })
    }
    function inpChane(e){
        let curVal=e.target.value
        setFilterInp(e.target.value)

        let copy=tests.filter(item=>
            item.tname.match(new RegExp(curVal, 'gi'))!==null
          
        )
        // console.log(copy)
        setFilteredTests([...copy])
    }
    function clickLike(id){
        let copy={...userInfo}
    
        copy.likes[id]=!copy.likes[id] 
   
            fetch('https://paravojik-kahoot-api.onrender.com/addLike',{
            method:'POST',
            crossDomain:true,
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json',
                'Access-Control-Allow-Origin':'*',
            },
            body:JSON.stringify({
                like:copy.likes[id] ,
                id:id,
                nickname:JSON.parse(localStorage.getItem('UserInfo__LS')).Unickname, 
            })
    
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data)
           
        }).catch(error=>{
            alert(error)
        })


        setUserInfo({...copy})
        localStorage.setItem('UserInfo__LS',JSON.stringify(copy))
        
    }
    useEffect(function(){
        getData()
        
    },[])
    const navigate = useNavigate();
    useEffect(function(){
        if(localStorage.getItem('UserInfo__LS')){
            
        }else{

            navigate("/signUp"); 
        }
        // eslint-disable-next-line
    },[])
    return(
        <section className="Tests">

            <h1 className='Tests__text'>Tests</h1>
            <input className='Tests__inpSearch' type="text" placeholder='Find Test' value={filterInp} onChange={(e)=>inpChane(e)} />
            <div className="Tests__main">
                <Loading position='absolute'  visible={isVisibleLoading}/>
                {filteredTests.length===0 ? (isVisibleLoading===false ? <h1>There is no test with this name</h1>:null) :filteredTests.map(item=>{
                    
                    return(
                      
                        <Test key={'Test:'+item._id} clickLike={clickLike} like={userInfo.likes[item._id]}   value={item}/>
                  
                        
                    )
                })}
                <Routes>

               
                {filteredTests.map(item=>{
                    
                    return(
                        <Route key={'TestPage:'+item._id} path={item._id +'/*'} element={<TestPage value={item}/>}/>
                        
                    )
                })}
                 </Routes>
                
            </div>
        </section>
    )
}
export default Tests