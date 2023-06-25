import './Home.css'
import BtnTests from '../UI/BtnTests/BtnTests'
import Loading from '../Loading/Loading'
function Home(){
    return(
        <section className="Home">
             <Loading  position='absolute' width='clamp(200px,98%,400px)' height='400px' top='none' left='none'/>
             <div className="Home__main">
             <div className="Home__name">Kahoot</div>
            <BtnTests/>
             </div>
    
           
        </section>
    )
}
export default Home