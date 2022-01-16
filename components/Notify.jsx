import {useContext} from 'react'
import {DataContext} from '../store/GlobalState'
import Toast from './Toast'

const Notify = () => {
    const {state, dispatch} = useContext(DataContext)
    const { notify } = state

    return(
        <> 
            {/* {notify.loading && <Loading />} */}
            {notify?.error && 
                <Toast 
                msg={{ msg: notify.error, title: "Error" }}
                type="Error"
                dispatch={dispatch}
                />
            }
            {notify?.success && 
                <Toast 
                msg={{ msg: notify.success, title: "Success" }}
                type="SUCCESS"
                dispatch={dispatch}
                />
            }
        </>
    )
}


export default Notify