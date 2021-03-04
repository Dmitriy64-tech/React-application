import { usersAPI } from "../API/api";
import { updateObjectInArray } from "../Utilits/helpers/object-helper";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true } )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false } )
            }
            
        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => { return { type: FOLLOW, userId } }
export const unfollowSuccess = (userId) => { return { type: UNFOLLOW, userId } }
export const setUsers = (users) => { return { type: SET_USERS, users } }
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } }
export const setTotalUsersCount = (totalCount) => { return { type: SET_TOTAL_USERS_COUNT, totalCount } }
export const setIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } }
export const toggleIsFollowing = (isFollowingInProgress, userId) => { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingInProgress, userId } }

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(true));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setIsFetching(false));
}


export const getUsersOnPageClick = (currentPage, pageSize) => async (dispatch) => {
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    dispatch(setUsers(data.items));
    dispatch(setIsFetching(false));
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) =>{
    dispatch(toggleIsFollowing(true, id));
    let data = await apiMethod(id);
    if (data.resultCode == 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowing(false, id));
}

export const follow = (id) => async (dispatch) => {
    let apiMethod = usersAPI.Follow.bind(id);
    followUnfollowFlow(dispatch, id, apiMethod, followSuccess);
}

export const unfollow = (id) => async (dispatch) => {
    let apiMethod = usersAPI.unFollow.bind(id);
    followUnfollowFlow(dispatch, id, apiMethod, unfollowSuccess);
}



export default usersReducer;