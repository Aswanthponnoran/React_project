import './App.css';
// import Home from './components/Home';
// import Counter from './components/Counter';
// import Calculator from './components/Calculator';
// import Navbar from './components/Navbar';
// import CalorieCal from './components/CalorieCal';
// import TempCal from './components/TempCal';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Comp from './components/Comp';
  function App() {
    function f(){
      console.log('hello')
    }
  return (
    <div className="App">
       <Comp name="arun" fun={f}/>

      {/* <Home/> */}
      {/* <Counter/> */}
       {/* <Calculator/> */}
       {/* <CalorieCal/> */}
       {/* <TempCal/> */}


{/* 
       <BrowserRouter>
       <Navbar/>

       <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/counter' element={<Counter/>}></Route>
       <Route path='/calculator' element={<Calculator/>}></Route>
       <Route path='/tempconv' element={<TempCal/>}></Route>
       <Route path='/calorie' element={<CalorieCal/>}></Route>

       </Routes>
       </BrowserRouter> */}
     </div>
  );
}

export default App;
