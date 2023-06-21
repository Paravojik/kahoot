import { useEffect, useState } from 'react'
import './Tests.css'
import Test from './Test'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
function Tests(){
    let [tests,setTests]=useState([])
    let [filteredTests,setFilteredTests]=useState([])
    let [filterInp,setFilterInp]=useState('')
    let [isVisibleLoading,setIsVisibleLoading]=useState(false)
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
    useEffect(function(){
        getData()

    },[])
    return(
        <div className="Tests">
            <h1 className='Tests__text'>Tests</h1>
            <input className='Tests__inpSearch' type="text" placeholder='Find Test' value={filterInp} onChange={(e)=>inpChane(e)} />
            <div className="Tests__main">
                <Loading position='absolute'  visible={isVisibleLoading}/>
                {filteredTests.length===0 ? (isVisibleLoading===false ? <h1>There is no test with this name</h1>:null) :filteredTests.map(item=>{
                    
                    return(
                        <Link key={'Test:'+item._id } to={item._id }>
                        <Test   value={item}/>
                        </Link>
                        
                    )
                })}
                
            </div>
        </div>
    )
}
export default Tests