import { ACTIONS } from './Actions'


const reducers = (state, action) => {
    const { type, payload } = action
    switch(type){
        case ACTIONS.NOTIFY:
            return {
                ...state,
                notify: payload
            };
        case ACTIONS.AUTH:
            return {
                ...state,
                auth: payload
            };

        case ACTIONS.ADD_USERS:
            return {
                ...state,
                users: payload
            };
        case ACTIONS.ADD_CATEGORIES:
            return {
                ...state,
                categories: payload
            };
        case ACTIONS.GET_TOP_POSTS:
            return {
                ...state,
                topPosts: payload
            };
        case ACTIONS.GET_COMMENTS:
            return {
                ...state,
                comments: payload
             };
        case ACTIONS.ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, payload]
             };
        case ACTIONS.GET_LIKES:
            return {
                ...state,
                postlikes: payload
                };         
        case ACTIONS.UPDATE_LIKES:
            return {
                ...state,
                postlikes: payload
                };         
        case ACTIONS.COMMENT_LIKES:
            return {
                ...state,
                comments: state.comments.map(comment =>
                    comment._id === payload._id ? { ...comment, likes: payload.likes } : comment
                  )
                };         
        case ACTIONS.COMMENT_REPLY:
            return {
                ...state,
                comments: state.comments.map(comment =>
                    comment._id === payload._id ? { ...comment, replies: payload.replies } : comment
                  )
                };
        case ACTIONS.REPLY_LIKES:
            return {
                ...state,
                comments: state.comments.map(comment =>
                    comment._id === payload._id ? { ...comment, replies: payload.replies } : comment
                    )
                };         
        default:
            return state;
    }
}

export default reducers