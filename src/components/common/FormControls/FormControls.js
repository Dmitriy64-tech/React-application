import React from "react"
import { Field } from "redux-form"
import s from "./FormControls.module.css"

export const FormControl = ({ meta :{touched, error}, children }) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children} 
            </div>
            {hasError ? <span>{error}</span> : ""}
        </div>
    )
}
export const TextArea = (props) => {
    const { child, input, meta, ...restProps } = props
    return (
        <FormControl {...props}><textarea className={s.text} {...input} {...restProps} /></FormControl>
    )
}
export const Input = (props) => {
    const { child, input, meta, ...restProps } = props
    return (
        <FormControl {...props}><input className={s.text} {...input} {...restProps} /></FormControl>
    )
}

export const CreateField = (placeholder, name, validators, component, type = "") => {
    return <Field validate={validators} 
     placeholder={placeholder} 
     name={name} 
     component={component}
     type={type}></Field>
}