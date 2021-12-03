import { Fragment } from 'react';

import Auth from "./components/Auth";

import Counter from './components/Counter';

import Header from './components/Header'
import UserProfile from './components/UserProfile'
import {useSelector} from 'react-redux'

function App() {
  const login = useSelector((state) => state.authentication.login)
  console.log(login)
  return ( <Fragment>
        <Header/>
       {!login && <Auth/>}
       {login && <UserProfile/>}
       {login && <Counter />}

    
  </Fragment>
    

  );
}

export default App;
