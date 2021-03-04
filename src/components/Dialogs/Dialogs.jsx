import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormControls/FormControls';
import {required, maxLengthCreator } from '../../Utilits/Validators/validators';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

    let addNewMessageChange = (values) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody ="";
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <ReduxAddMessageForm onSubmit={addNewMessageChange} />
            </div>
        </div >
    )
}
const maxLenght = maxLengthCreator(1000);
const AddMessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} className={s.textButtonArea}>
                <Field validate={[required, maxLenght]} component={TextArea} name="newMessageBody" />
                <div><button>Send</button></div>
            </form>
        </div>
    )
}

const ReduxAddMessageForm = reduxForm({form: "sendMessage"})(AddMessageForm)

export default Dialogs;