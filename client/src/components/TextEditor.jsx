import React, { useCallback, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'


const TextEditor = () => {

  const [socket, setSocket] = useState('')
  const [quill, setQuill] = useState()
  const {id: documentId} = useParams()

  useEffect(()=>{
    //connection
    const socket = io("http://localhost:3001")
    setSocket(socket)
    return ()=>{
      socket.disconnect
    }
  },[])

  useEffect(()=>{

    if(socket == null || quill == null) return

    socket.once('load-document',(document)=>{
      quill.setContents(document)
      quill.enable()
    })

    socket.emit('get-document',documentId)

  },[socket,quill, documentId])


  const wrapperRef = useCallback((wrapper)=>{
    if(wrapper == null) return

    wrapper.innerHTML = ""

    const editor = document.createElement('div')

    wrapper.append(editor)

    const q = new Quill(editor,{
      theme: snow
    })

    q.disable()
    q.setText("Loading.....")
    setQuill(q)

  })

  return (
    <div className='container' ref={wrapper}>
      Text Editor
    </div>
  )
}

export default TextEditor
