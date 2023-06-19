
import { Route,Routes } from 'react-router-dom';
import './App.css';
import CreateQuiz from './Conponents/CreateQuiz/CreateQuiz';
import Home from './Conponents/Home/Home';
import Header from './Conponents/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createQuiz' element={<CreateQuiz/>}/>
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
      {/* <Home/>
      <CreateQuiz/> */}
    </div>
  );
}

export default App;
