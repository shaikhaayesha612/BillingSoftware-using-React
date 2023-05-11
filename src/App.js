import logo from './logo.svg';
import AdminApp from './admin/adminapp';
import './App.css';
import UserApp from './user/userapp';

function App() {
  if(localStorage.getItem("key") == null){
    return ( <UserApp/> );
  }
  else{
    return( <AdminApp/> );
  }
  
}

export default App;
