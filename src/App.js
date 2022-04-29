
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './componants/Blogs/Blogs';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Login from './componants/Login/Login';
import NotFound from './componants/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
