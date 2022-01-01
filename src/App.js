
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { MoviesContextProvider } from "./MoviesContext";
import { useHistory , Redirect , Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Movies from './components/Movies/Movies';
import TV from './components/TV/TV';
import Gallery from './components/Gallery/Gallery';
import  {Switch}  from "react-router-dom";
import Details from './components/Details/Details';




function App() {

    let history = useHistory();
  
    let [loginUser, setLoginUser] = useState(null);
  
  function getUserInfo() {
      let encodedToken = localStorage.getItem('userToken');
      let useData = jwtDecode(encodedToken);
      setLoginUser(useData);
  
    }
  
    function logOut() {
      localStorage.removeItem('userToken');
      setLoginUser(null);
      history.push('/login');
      
    }
  
    useEffect(() => {
      if (localStorage.getItem('userToken')) {
        getUserInfo();
      }
    }, []);
  return (
    <div className="App">
    <Navbar loginUser={loginUser} logOut={logOut} />


    <div className="container">
      <Switch>
        <ProtectedRoute path='/movies' component={Movies} context={MoviesContextProvider} />
        <ProtectedRoute path='/tv' component={TV} context={MoviesContextProvider}/>
        <ProtectedRoute path='/gallery' component={Gallery} />
        <ProtectedRoute path='/home' component={Home} loginUser={loginUser} context={MoviesContextProvider} />
        <Route path='/register' render={(props) => <Register {...props} />} />
        <Route path='/login' render={(props) => <Login {...props} getUserInfo={getUserInfo} />} />
        <Redirect from='/' exact to='/home' />
       <Route exact path="/movie/:id" component={Details}></Route>
       

      </Switch>
    </div>


  </div>
  );
}

export default App;
