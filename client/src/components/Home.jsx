import React from 'react'
import { Navigate } from 'react-router-dom'
import {v1 as uuidV4} from 'uuid'
import TextEditor from './TextEditor'

const Home = () => {
  return (
    <div>
      <Navigate to={`/doc/${uuidV4()}`} />
      <TextEditor />
    </div>
  )
}

export default Home
