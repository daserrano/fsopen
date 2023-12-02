import { useEffect, useState } from 'react'
import '../index.css'

const Alert = ({ message }) => {
  return (
    message && <div className="alert">
        {message}
    </div>
  )
}

export default Alert