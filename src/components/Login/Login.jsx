import React from 'react'
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { CreateField, Input } from '../common/FormControls/FormControls'
import required, { maxLengthCreator } from '../../Utilits/Validators/validators'
import { connect } from 'react-redux'
import { logIn } from '../../redux/auth-reduser'
import { Redirect } from 'react-router-dom'


const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>Login Form</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {CreateField("Email", "email", [required], Input)}
            </div>
            <div>
                {CreateField("Password", "password", [required], Input, "password")}
            </div>
            <div>
                {CreateField(null, "rememberMe", [], "input", "checkbox", s.remember)}remember me
            </div>
            { error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button className={s.loginBTN}>Login</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth
    }
)



const LoginReduxForm = reduxForm({
    form: 'Login'
})(LoginForm)

export default connect(mapStateToProps, { logIn })(Login); 