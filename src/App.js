import React from 'react';
import Post from './components/post';
import PostForm from './components/postForm';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import SignIn from './components/user/signIn';
import SignUp from './components/user/signUp';
import { Button, Link } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import Navbar from './components/nav/Navbar';
import Posts from './components/post';
import NavTail from './components/nav/navTail';
import { Btn } from './components/btns';

//  test component below

function Forget() {
  return (
    <div>
      <h1>YOu forget your account Right ?</h1>
    </div>
  );
}
function Test() {
  return (
    <div>
      <h1>New User Are Welcomed</h1>
    </div>
  );
}
function Home() {
  return (
    <>
      <Navbar />
      {/* <NavTail /> */}
      <div className=" bg-teal-700 justify-center flex h-screen ">
        <div className="my-6">
          <div>
            <h1 className="text-red-700 ">
              Hello To Iraq Cities Open-Source Data
            </h1>
            {/* <Posts /> */}
            <Btn />
          </div>
        </div>
      </div>
    </>
  );
}
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/forget" component={Forget} />
          <Route path="/test" component={Test} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/navbar" component={Navbar} />
        </Switch>
      </Provider>
    );
  }
}
export default App;
