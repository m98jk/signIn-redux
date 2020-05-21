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
import { Btn } from './components/ui/buttons/btns';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
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
  const darkStyle = {
    text: 'font-sans text-teal-400 text-2xl ',
    bg: ' bg-yellow-300 ',
  };
  const lightStyle = {
    text: 'font-sans text-red-600 text-2xl ',
    bg: ' bg-teal-600 ',
  };

  //theme changing
  let style;
  dark ? (style = darkStyle) : (style = lightStyle);
  return (
    <>
      <Navbar />
      <div className={'justify-center flex h-screen ' + style.bg}>
        <div className="my-6">
          <div>
            <h1 className={style.text}>
              Hello To Iraq Cities Open-Source Data
            </h1>
            {/* <Posts /> */}
            {/* <h2> {h1} </h2> */}
            <Btn style={style} />
          </div>
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
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
