import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AddPage from './components/AddPage/AddPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/addanime' element={<AddPage></AddPage>}></Route>
     </Routes>
    </div>
  );
}

export default App;
