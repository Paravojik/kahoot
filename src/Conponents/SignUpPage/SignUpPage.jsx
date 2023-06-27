import { useState } from 'react'
import './SignUpPage.css'
import Loading from '../Loading/Loading'
import { Link, useNavigate } from 'react-router-dom'
import openEye from '../img/viewEye.png'
import hiddenEye from '../img/hiddenEye.png'
export default function SignUpPage(props){
    let [nicknameInp,setNicknameInp]=useState('')
    let [emailInp,setEmailInp]=useState('')
    let [passwordInp,setPasswordInp]=useState('')
    let [isVisibleLoader,setIsVisibleLoader]=useState(false)
    let [isVisiblePassword,setIsVisiblePassword]=useState(false)
    const navigate=useNavigate()
    function createUser(e){
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setIsVisibleLoader(true)
        fetch('https://paravojik-kahoot-api.onrender.com/createNewUser',{
            method:'POST',
            crossDomain:true,
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json',
                'Access-Control-Allow-Origin':'*',
            },
            body:JSON.stringify({
                Unickname:nicknameInp,
                Uemail:emailInp,
                Upassword:passwordInp,
     
            })
    
        }).then((res)=>res.json())
        .then((data)=>{
            setIsVisibleLoader(false)
                console.log(data,'createUser')
                let info={Unickname:nicknameInp,
                    Uemail:emailInp,}
               localStorage.setItem('UserInfo__LS',JSON.stringify(info))
            
               navigate("/tests"); 
           window.location.reload();
        }).catch(error=>{
            setIsVisibleLoader(false)
            alert(error)
            
        })
        }
    return(
        <form onSubmit={createUser} className="SignUpPage" style={props.visible===true? {display:'flex'}:{display:'none'}}>
            <Loading visible={isVisibleLoader}/>
            <h1>Sign Up</h1>
            <div className="SignUpPage__main">
            <input name='nickname' required minLength={4} maxLength={20} value={nicknameInp} onChange={(e)=>setNicknameInp(e.target.value)} placeholder='Nickname'  type="text" />
            <input name='email' required  value={emailInp} onChange={(e)=>setEmailInp(e.target.value)} placeholder='Email'  type='email' />
           
            <div className="SignUpPage__main__pass">
          <input name='password' required minLength={8} value={passwordInp} onChange={(e)=>setPasswordInp(e.target.value)} placeholder='Password'  type={isVisiblePassword===false?"password" :'text'} />
          <img alt='View' className='SignUpPage__main__pass__img' onClick={()=>setIsVisiblePassword(!isVisiblePassword)} src={isVisiblePassword===false? hiddenEye : openEye}/>
          </div>
            </div>
         
            <h3 >Already have an account <p><Link to='/logIn'>Log In</Link> </p> </h3>
            <button type='submit'>Sign Up</button>
        </form>
    )
}