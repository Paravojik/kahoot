import { useEffect, useState } from 'react'
import './Tests.css'
import Test from './Test'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'
import TestPage from '../TestPage/TestPage'
// import SignUpPage from '../SignUpPage/SignUpPage'
// import LogInPage from '../LogInPage/LogInPage'
function Tests(){
    let [tests,setTests]=useState([])
    let [filteredTests,setFilteredTests]=useState([])
    let [filterInp,setFilterInp]=useState('')
    let [isVisibleLoading,setIsVisibleLoading]=useState(false)
    // let [isVisibleSignUp,setIsVisibleSignUp]=useState(false)
    // let [isVisibleLogIn,setIsVisibleLogIn]=useState(false)
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
    // function openLogIn(){
    //     setIsVisibleSignUp(false)
    //     setIsVisibleLogIn(true)
    // }
    // function openSignUp(){
    //     setIsVisibleSignUp(true)
    //     setIsVisibleLogIn(false)
    // }
    // function closeSIgning(){
    //     setIsVisibleSignUp(false)
    //     setIsVisibleLogIn(false)
    // }
    useEffect(function(){
        getData()
        
    },[])
    const navigate = useNavigate();
    useEffect(function(){
        if(localStorage.getItem('UserInfo__LS')){
            
        }else{
            // setIsVisibleSignUp(true)
            navigate("/signUp"); 
        }
        // eslint-disable-next-line
    },[])
    return(
        <section className="Tests">
            {/* <SignUpPage closeSIgning={closeSIgning} openLogIn={openLogIn} visible={isVisibleSignUp}/>
            <LogInPage closeSIgning={closeSIgning} openSignUp={openSignUp} visible={isVisibleLogIn}/> */}
            <h1 className='Tests__text'>Tests</h1>
            <input className='Tests__inpSearch' type="text" placeholder='Find Test' value={filterInp} onChange={(e)=>inpChane(e)} />
            <div className="Tests__main">
                <Loading position='absolute'  visible={isVisibleLoading}/>
                {filteredTests.length===0 ? (isVisibleLoading===false ? <h1>There is no test with this name</h1>:null) :filteredTests.map(item=>{
                    
                    return(
                        <Link onClick={()=>localStorage.setItem('arrOfAnswers__LS',JSON.stringify({}))} key={'Test:'+item._id} to={item._id+'/page=1'  }>
                        <Test   value={item}/>
                        </Link>
                        
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