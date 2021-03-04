import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initilizeApp } from './redux/app-reduser';
import Preloader from './components/Preloader/Preloader';
import { withSuspense } from './HOC/withSuspense';
import DialogsContainer from "./components/Dialogs/DialogsContainer";



class App extends React.Component {
    componentDidMount() {
        this.props.initilizeApp();
    }
    render() {
        if (!this.props.isInitialized) {
            return <Preloader />
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                        render={() => {
                            return <DialogsContainer />
                        }} />

                    <Route path='/profile/:userID?'
                        render={() => <ProfileContainer />} />

                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/login'
                        render={() => <Login />} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, { initilizeApp })
)(App);