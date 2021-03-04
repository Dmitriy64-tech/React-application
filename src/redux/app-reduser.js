import { getAuthUserData } from "./auth-reduser";

const INITIALIZED_SUCCESED = 'INITIALIZED_SUCCESED';

let initialState = {
    isInitialized: false
};

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESED:
            return {
                ...state,
                isInitialized : true
            }
        default:
            return state;
    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESED})

export const initilizeApp = () => (dispatch) =>{
    let dispatchPromise = dispatch(getAuthUserData());
    dispatchPromise.then(()=>{
        dispatch(initializedSuccess());
    })
    
}

export default appReduser;