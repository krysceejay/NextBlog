import {useState, useContext} from 'react'
import {postData} from '../../utils/fetchData'
import {DataContext} from '../../store/GlobalState'
const AddComment = ({pid}) => {
    const [formData, setFormData] = useState({
        comment: '',
        isLoading: false
      });
    
    const { comment, isLoading } = formData; 

    const {state, dispatch} = useContext(DataContext)
    const { auth } = state

    const handleOnchange = e => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        dispatch({ type: 'NOTIFY', payload: {} })
      }

      const handleSubmit = async e => {
        e.preventDefault()
    
        dispatch({ type: 'NOTIFY', payload: {loading: true} })
    
        const res = await postData(`post/${pid}/comments`, {comment}, auth.token)
      
        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

        dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
        dispatch({ type: 'ADD_COMMENT', payload: res.comment })
        setFormData({...formData, comment: ''})
        
      }

    return (
        <div className="leave-a-comment my-2">
            <form onSubmit={handleSubmit}>
                <textarea
                name="comment"
                id=""
                placeholder="Leave a comment"
                value={comment}
                onChange={handleOnchange}
                ></textarea>
                <button type="submit" className="btn btn-main">Submit</button>
            </form>
        </div>
    )
}

export default AddComment
