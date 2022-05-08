
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './componants/Blogs/Blogs';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Login from './componants/Login/Login';
import NotFound from './componants/NotFound/NotFound';
import ProductDetails from './componants/ProductDetails/ProductDetails';
import RequireAuth from './componants/RequireAuth/RequireAuth';
import ManageItem from './ManageItem/ManageItem';
import MyItem from './MyItem/MyItem';
import Update from './Update/Update';

function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/productdetails" element=
          {
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }>
        </Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/manageinventory" element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }>
        </Route>
        <Route path="/myitems" element=
          {
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div >
  );
}

export default App;
