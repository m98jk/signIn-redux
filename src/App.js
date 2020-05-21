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
import { Btn } from './components/btns';
import Test from './test';
import { useSelector } from 'react-redux';

//  test component below

function Forget() {
  return (
    <div>
      <h1>YOu forget your account Right ?</h1>
    </div>
  );
}

function Home() {
  const dark = useSelector((state) => state.dark);

  return (
    <>
      <Navbar />
      <div
        className={
          'justify-center flex h-screen ' +
          (dark ? ' bg-yellow-400 ' : ' bg-teal-600 ')
        }
      >
        <div className="my-6">
          <div>
            <h1 className="text-green-700 ">
              Hello To Iraq Cities Open-Source Data
            </h1>
            {/* <Posts /> */}
            <h2>Hrllo from header two</h2>
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
