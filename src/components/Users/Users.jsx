import React from 'react';
import User from './User';
import Paginator from '../common/Paginator/Paginator';



const Users = ({ onPageClick, currentPage, totalUsersCount, pageSize, isFollowingInProgress, follow, unfollow, ...props }) => {
    return (
        <div>
            {
                props.users.map(u => <User user={u}
                    isFollowingInProgress = {isFollowingInProgress}
                    follow = {follow}
                    unfollow ={unfollow}
                     key={u.id}/> )
            }
            <Paginator currentPage={currentPage} onPageChanged={onPageClick} 
            totalItemsCount = {totalUsersCount} pageSize= {pageSize} />
        </div >
    )
}

export default Users