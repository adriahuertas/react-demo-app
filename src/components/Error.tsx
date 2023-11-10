import { useSelector } from "react-redux"
import { selectError } from "../feature/error/errorSlice"

const Error = () => {
  const message = useSelector(selectError)

  return (
    <h2>
      {message}
    </h2>
  )
}

export default Error
