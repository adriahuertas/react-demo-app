import { useDispatch, useSelector } from 'react-redux'
import { selectError, setMessage } from '../reducers/errorReducer'
import { useEffect } from 'react'

const Error = () => {
  const message = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(setMessage(''))
    }
  }, [dispatch])
  return (
    <h2>
      {message}
    </h2>
  )
}

export default Error
