import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
//
import {
  Post,
  Posts,
  PostForm,
  store,
  SignIn,
  SignUp,
  Dashboard,
  Navbar,
  logo,
  Btn,
  ProfileCard,
  Portfolio,
} from './allFiles';

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
    text: 'font-sans text-white text-2xl ',
    bg: ' bg-indigo-900 ',
  };
  const lightStyle = {
    text: 'font-sans text-black text-2xl ',
    bg: ' bg-green-800 ',
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
            <h1 className={style.text}>Hello To Iraq Cities</h1>
            {/* <Posts /> */}
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
          <Route path="/profile" component={Portfolio} />
          <Route path="/card" component={ProfileCard} />
        </Switch>
      </Provider>
    );
  }
}
export default App;
