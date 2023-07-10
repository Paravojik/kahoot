import './Logo.css'
import logo from './Logo.png'
function Logo(){
    // let colorBox=[
    //     'red',
    //     'blue',
    //     'rgb(255, 183, 0)',
    //     'green'
    // ]
    return(
        <div className="Logo">
            {/* <div className="Logo__text">
                K
            </div>
            
            {colorBox.map(item=>{
                return(
<div key={'Logo__box'+item} className="Logo__box" style={{backgroundColor:item}}></div>
                )
                
            })} */}

            <img className='Logo__img' src={logo} alt="K" />
         
        </div>
    )
}
export default Logo