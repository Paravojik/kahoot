import { useState } from 'react'
import './LogInPage.css'
import Loading from '../Loading/Loading'
import { Link, useNavigate } from 'react-router-dom'
export default function LogInPage(props){
    let [nicknameInp,setNicknameInp]=useState('')

    let [passwordInp,setPasswordInp]=useState('')
    let [isVisibleLoader,setIsVisibleLoader]=useState(false)
    const navigate=useNavigate()
    function LogIn(e){
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setIsVisibleLoader(true)
        fetch('https://paravojik-kahoot-api.onrender.com/LogIn',{
            method:'POST',
            crossDomain:true,
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json',
                'Access-Control-Allow-Origin':'*',
            },
            body:JSON.stringify({
                Unickname:nicknameInp,
                Upassword:passwordInp,
     
            })
    
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,'LogIn')
            setIsVisibleLoader(false)
                if(data.status==='ok'){
                    let info={Unickname:nicknameInp,
                        Uemail:data.data.email,}
                   localStorage.setItem('UserInfo__LS',JSON.stringify(info))
                  
                   navigate("/tests"); 
                    window.location.reload();
                }else{
                    alert(data.status)
                }
     
                // setArrOfQuestions([{id:'Question: '+ 1,num:0,question:'',answer:[{id:'Answer: '+1,num:0,ans:'',isRight:false}]}])
                // setInpValName('')
                // setTimeout(function(){
                //     alert('Your test created and now you can make new')
                // },100)

               
            
           
        }).catch(error=>{
            setIsVisibleLoader(false)
            alert(error)
        })
        }
    return(
        <form onSubmit={LogIn} className="LogInPage" style={props.visible===true? {display:'flex'}:{display:'none'}}>
            <Loading visible={isVisibleLoader}/>
            <h1>Log In</h1>
            <div className="LogInPage__main">
            <input required minLength={4}  value={nicknameInp} onChange={(e)=>setNicknameInp(e.target.value)} placeholder='Nickname'  type="text" />
          
            <input required minLength={8} value={passwordInp} onChange={(e)=>setPasswordInp(e.target.value)} placeholder='Password'  type="password" />
    
            </div>
         
         <h3 >Already have an account <p><Link to='/signUp'>Sign Up</Link> </p> </h3>
            <button type='submit' >Log In</button>
        </form>
    )
}