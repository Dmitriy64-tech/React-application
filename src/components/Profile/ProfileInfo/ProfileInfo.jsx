import React from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <img className={s.avatar} src={props.profile.photos.large} ></img>
                    <p className={s.profileName}>{props.profile.fullName}</p>
                    <div className={s.status}><ProfileStatusWithHooks  status ={props.status}
                    updateStatus ={props.updateStatus}/></div>
                    <p>Looking for a job: {props.profile.lookingForAJobDescription}</p>
                    <p>GitHub: {props.profile.contacts.github}</p>
                    <p>FaceBook: {props.profile.contacts.facebook}</p>
                    <p>Instagram: {props.profile.contacts.instagram}</p>
                    <p>Twitter: {props.profile.contacts.twitter}</p>
                </div>
            </div>
        )
    }

}

export default ProfileInfo;