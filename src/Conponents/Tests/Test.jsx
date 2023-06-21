import './Tests.css'
function Test(props){
    return(
        <div className="Tests__main__test" >
        <h1>{props.value.tname}</h1>
        <h4>Number of questions: {props.value.qname.length}</h4>
    </div>
    )
}
export default Test