import { useEffect, useState } from 'react'
import './CreateQuiz.css'
import CreateQuizQuestion from './CreateQuizQuestion'
import Loading from '../Loading/Loading'
import { useNavigate } from 'react-router-dom'


function CreateQuiz(){
    let [inpValName,setInpValName]=useState('')

    let [arrOfQuestions,setArrOfQuestions]=useState([{id:'Question: '+ 1,num:0,question:'',answer:[{id:'Answer: '+1,num:0,ans:'',isRight:false}]}])
    let [isVisibleLoader,setIsVisibleLoader]=useState(false)

   function createTest(){

    setIsVisibleLoader(true)
    fetch('https://paravojik-kahoot-api.onrender.com/addQuest',{
        method:'POST',
        crossDomain:true,
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json',
            'Access-Control-Allow-Origin':'*',
        },
        body:JSON.stringify({
            name:inpValName,
            quest:arrOfQuestions,
            creator:JSON.parse(localStorage.getItem('UserInfo__LS')).Unickname, 
        })

    }).then((res)=>res.json())
    .then((data)=>{
        if(data.error){
            alert('Test whith this name exist')
        }else{
            setIsVisibleLoader(false)
      
            console.log(data,'addQuestion')
            setArrOfQuestions([{id:'Question: '+ 1,num:0,question:'',answer:[{id:'Answer: '+1,num:0,ans:'',isRight:false}]}])
            setInpValName('')
            setTimeout(function(){
                alert('Your test created and now you can make new')
            },100)
           
        }
       
    }).catch(error=>{
        alert(error)
    })
    }

    function sendData(e) {
        
        e.preventDefault();

        createTest()
        // getData()
    }
    function addQuestion(val){
        // let copy=arrOfQuestions
        // copy.push({id:'Question: '+ (arrOfQuestions.length+1),question:''})
        // setArrOfQuestions([...copy])
        setArrOfQuestions([...arrOfQuestions,{id:'Question: '+ (arrOfQuestions.length+1),num:arrOfQuestions.length,question:'',answer:[{id:'Answer: '+1,num:0,ans:'',isRight:false}]}])
     
    }
    function changeQuestion(num,value){

        let copy=[...arrOfQuestions]
        copy[num].question=value
        setArrOfQuestions([...copy])
    }
    function changeAns(num,value){
  
        let copy=arrOfQuestions
        copy[num].answer=value
        setArrOfQuestions([...copy])
    }
    function  deleteQuestion (number){
    if(arrOfQuestions.length>1){
        let copy= arrOfQuestions.filter(item=>item.num!==number)
        for(let i=0;i<copy.length;i++){
         copy[i].id= 'Question: '+(i+1)
         copy[i].num= i
         copy[i].question= copy[i].question+'1'
        }
        setArrOfQuestions([...copy])
        for(let i=0;i<copy.length;i++){
 
         copy[i].question=  copy[i].question.substring(0,copy[i].question.length-1)
        }
        setArrOfQuestions([...copy])
    }
    

    }

    const navigate = useNavigate();
    useEffect(function(){
        if(localStorage.getItem('UserInfo__LS')){
            
        }else{
            // setIsVisibleSignUp(true)
            navigate("/signUp"); 
        }
        // eslint-disable-next-line
    },[])
    useEffect(function(){
        // console.log('arr:',arrOfQuestions)
    },[arrOfQuestions])
    let curQuest=0
    return(
        <section className="CreateQuiz">

            <Loading visible={isVisibleLoader}/>


            <form className="CreateQuiz__main" onSubmit={sendData}>
                <div className="CreateQuiz__main__topic">Create your Test</div>
            <div className="CreateQuiz__testName">
                <div className="CreateQuiz__testName__text">
                    Write your cool test and everyone can try his/her knowlege in this theme. <br /> 
                    At first write name of test:
                </div>
            <input required  value={inpValName} onChange={(e)=>setInpValName(e.target.value)} placeholder="Test's name" className='CreateQuiz__inp CreateQuiz__name' type="text" />
            </div>
            <div className="CreateQuiz__main__text">
                Now add some questions to your test:
            </div>
            <div className="CreateQuiz__main__questions">
                {arrOfQuestions.map((item)=>{
                    curQuest++
       
                    return(
                        <CreateQuizQuestion  curQuest={curQuest}  deleteQuestion={deleteQuestion} changeAns={changeAns} changeQuestion={changeQuestion} value={item} key={item.id} />
                    )
                })}
          
          
                <div className="CreateQuiz__main__questions__btn" onClick={()=>addQuestion('none')}>Add Question</div>
            </div>
          
            <button className='CreateQuiz__send' type='Submit' >Create test</button>
            </form>
   
        </section>
    )    
}
export default CreateQuiz