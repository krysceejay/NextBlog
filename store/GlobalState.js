import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
import { getData } from '../utils/fetchData'


export const DataContext = createContext({})


export const DataProvider = ({children}) => {
    const initialState = { 
        notify: {}, 
        auth: {}, 
        users: [], 
        categories: [],
        topPosts: [],
        comments: [],
        postlikes: []
    }

    const [state, dispatch] = useReducer(reducers, initialState)

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if(firstLogin){
            getData('auth/accessToken').then(res => {
                if(res.err) {
                    console.log(res.err, 'errrrrr');
                    return localStorage.removeItem("firstLogin")
                }
                dispatch({ 
                    type: "AUTH",
                    payload: {
                        token: res.access_token,
                        user: res.user
                    }
                })
            })
        }

        // getData('categories').then(res => {
        //     if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

        //     dispatch({ 
        //         type: "ADD_CATEGORIES",
        //         payload: res.categories
        //     })
        // })
        
    },[])

    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}