import { useSelector } from 'react-redux'
import { selectError } from '../feature/error/errorSlice'
import { useEffect } from 'react'

const Error = () => {
  const message = useSelector(selectError)

  useEffect(() => {
    return () => {
      console.log('unmounting')
    }
  }, [])
  return (
    <h2>
      {message}
    </h2>
  )
}

export default Error
