import { ACTIONS } from './Actions'


const reducers = (state, action) => {
    switch(action.type){
        case ACTIONS.NOTIFY:
            return {
                ...state,
                notify: action.payload
            };
        case ACTIONS.AUTH:
            return {
                ...state,
                auth: action.payload
            };

        case ACTIONS.ADD_USERS:
            return {
                ...state,
                users: action.payload
            };
        case ACTIONS.ADD_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case ACTIONS.GET_TOP_POSTS:
            return {
                ...state,
                topPosts: action.payload
            };
        case ACTIONS.GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
             };
        case ACTIONS.ADD_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments]
             };
        case ACTIONS.GET_LIKES:
            return {
                ...state,
                likes: action.payload
                };         
        case ACTIONS.UPDATE_LIKES:
            return {
                ...state,
                likes: action.payload
                };         
        default:
            return state;
    }
}

export default reducers