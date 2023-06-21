import './Home.css'
import BtnTests from '../UI/BtnTests/BtnTests'
import Loading from '../Loading/Loading'
function Home(){
    return(
        <div className="Home">
             <Loading position='absolute' width='400px' height='400px' top='none' left='none'/>
             <div className="Home__main">
             <div className="Home__name">Kahoot</div>
            <BtnTests/>
             </div>
    
           
        </div>
    )
}
export default Home