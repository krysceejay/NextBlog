import {useState, useEffect, useContext, forwardRef, useRef} from 'react'
import {postData} from '../../utils/fetchData'
import {DataContext} from '../../store/GlobalState'
import Loading from '../Loading'

const AddComment = forwardRef(({pid, replyObj, clearObj}, ref) => {
  const myRef = useRef()
  const {user, cid, rid} = replyObj
    const [formData, setFormData] = useState({
        comment: '',
        isLoading: false,
      })

      useEffect(() => {
        if(user !== ''){
          myRef.current.focus()
          myRef.current.value = `@${user} `
        }
      }, [cid, rid])
    
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

      setFormData({...formData, isLoading: true})
      if(cid !== ''){
        const res = await postData(`comment/${cid}/reply`, {comment}, auth.token)
        if(res.err) {
          setFormData({...formData, isLoading: false})
          return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
        }
        dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
        dispatch({ type: 'COMMENT_REPLY', payload: {_id: cid, replies: res.reply} })
      }else{
        const res = await postData(`post/${pid}/comments`, {comment}, auth.token)
        if(res.err) {
          setFormData({...formData, isLoading: false})
          return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
        }

        dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
        dispatch({ type: 'ADD_COMMENT', payload: res.comment })
      }
      clearObj()
      setFormData({...formData, comment: '', isLoading: false})
    }

    // comment.slice(0, user.length + 1) === `@${user}`

    return (
        <div className="leave-a-comment my-2" ref={ref}>
          {isLoading ? <Loading /> :
            <form onSubmit={handleSubmit}>
                <textarea
                ref={myRef}
                name="comment"
                id=""
                placeholder="Leave a comment"
                value={comment}
                onChange={handleOnchange}
                ></textarea>
                <button type="submit" className="btn btn-main">Submit</button>
            </form>
          }
        </div>
    )
})

export default AddComment
