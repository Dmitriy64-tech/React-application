import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
            isOwner ={props.isOwner}
            profile={props.profile} 
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto = {props.savePhoto} 
            saveProfile ={props.saveProfile}/>

            
            <MyPostsContainer 
            profile={props.profile}/>
        </div>
    )
}

export default Profile;