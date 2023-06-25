import React, { Suspense } from 'react';
import './styles/App.css';
import { connect, Provider } from "react-redux";
import { authUserThank } from "./redux/thankCreator.ts";
import './App.css';
import { setInitiallizedThank } from './redux/thankCreator.ts';
import { compose } from "redux";
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import NewsContainer from './components/News/NewsContainer';
import Error from './components/Error/Error';
import { store } from './redux/redux-store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import Preloader from './components/general/Preloader/Preloader';
import FriendsContainer from './components/Friends/FriendsContainer';
import SettingsContainer from './components/Settings/Settings';
import CrossOrZeroContainer from './components/Games/CrossOrZero/CrossOrZeroContainer';
import { getError } from './redux/selectors.ts';
import Games from './components/Games/Games';
import { Navigate } from 'react-router-dom';
import Video from './components/Video/Video';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const MusicsContainer = React.lazy(() => import('./components/Musics/MusicsContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  render() {
    if (this.state.errorInfo) {
      return <Error state={this.state} />
    }
    return this.props.children;
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.setInitiallizedThank();
  }
  render() {
    if (!this.props.initiallized) return <Preloader />
    if (this.props.error) return <Error error={this.props.error} />
    return (<>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HeaderContainer />
        <div className='app'>
          <div className='app-wrapper'>
            <NavBar />
            <div className='app__wrapper_content'>
              <Suspense>
                <Routes>
                  <Route path='/profile/:usId?' element={<ProfileContainer />} />
                  <Route path='/dialogs' element={<DialogsContainer />} />
                  <Route path='/users' element={<UsersContainer />} />
                  <Route path='/news' element={<NewsContainer />} />
                  <Route path='/musics' element={<MusicsContainer />} />
                  <Route path='/login' element={<LoginContainer />} />
                  <Route path='/settings' element={<SettingsContainer />} />
                  <Route path='/games' element={<Games />} />
                  <Route path='/videos' element={<Video />} />
                  <Route path='/coz' element={<CrossOrZeroContainer />} />
                  <Route path='/' element={<Navigate replace to="/profile" /> } />
                  <Route path='*' element={<Error error={this.props.error} /> } />
                </Routes>
              </Suspense>
            </div>
            <FriendsContainer />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
    )
  }

}

const mapStateToProp = state => ({ initiallized: state.app.initiallized, error: getError(state) });

const AppContainer = compose(
  connect(mapStateToProp, { authUserThank, setInitiallizedThank })
)(App);

export default function AppFull() {
  return (
    <Provider store={store}>
      <ErrorBoundary store={store}>
        <AppContainer />
      </ErrorBoundary>
    </Provider>
  )
}

