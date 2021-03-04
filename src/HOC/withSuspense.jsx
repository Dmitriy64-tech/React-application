import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Preloader from '../components/Preloader/Preloader';

export const withSuspense = (Component) => {
    return (props) =>{
        <React.Suspense fallback={<Preloader/>}><Component {...props} /></React.Suspense>
    }
}
