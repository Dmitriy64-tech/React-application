import { connect } from 'react-redux'
import { getUsersOnPageClick, toggleIsFollowing, follow, unfollow, getUsers } from '../../redux/users-reducer'
import Users from './Users';
import React, { Component } from 'react'
import Preloader from '../Preloader/Preloader';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { GetIsFollowingInProgress,
    GetIsFetching, 
    GetCurrentPage, 
    GetPageSize, 
    GetUsers, 
    GetTotalUsersCount 
} from '../../redux/users-selectors';


class UsersContainer extends Component {

    componentDidMount() {
        const {currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageClick = (page) => {
        const {pageSize} = this.props;
        this.props.getUsersOnPageClick(page, pageSize)
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> :
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageClick={this.onPageClick}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                />}

        </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: GetUsers(state),
        pageSize: GetPageSize(state),
        totalUsersCount: GetTotalUsersCount(state),
        currentPage: GetCurrentPage(state),
        isFetching: GetIsFetching(state),
        isFollowingInProgress: GetIsFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        toggleIsFollowing,
        getUsers,
        getUsersOnPageClick
    }),
    withAuthRedirect
)(UsersContainer)
