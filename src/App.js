
import { Route,Routes } from 'react-router-dom';
import './App.css';
import CreateQuiz from './Conponents/CreateQuiz/CreateQuiz';
import Home from './Conponents/Home/Home';
import Header from './Conponents/Header/Header';
import Tests from './Conponents/Tests/Tests';
import SignUpPage from './Conponents/SignUpPage/SignUpPage';
import LogInPage from './Conponents/LogInPage/LogInPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tests/*' element={<Tests/>}/>
        <Route path='/createQuiz' element={<CreateQuiz/>}/>
        <Route path='/signUp' element={<SignUpPage visible={true}/>}/>
        <Route path='/logIn' element={<LogInPage visible={true}/>}/>
        <Route path='*' element={<h1 style={{paddingTop:'100px'}}>Page not found</h1>}/>
      </Routes>
      {/* <Home/>
      <CreateQuiz/> */}
    </div>
  );
}

export default App;
