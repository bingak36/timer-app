import React, {useState, useEffect} from 'react'
import './App.css'
import UserList from './components/UserList'
import PostList from './components/PostList'
import UserDetail from './components/UserDetail'
import DummyJson from './components/DummyJson'
import axios from 'axios'

function App() {

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=> {
        console.log(res.data)
        setUser(res.data)
      })
      .catch()
    
    return
  }, [])

  return (
    <div className='app-container'>
      <h1>Axios</h1>
      {/* <UserList />
      <PostList /> */}
      {/* <UserDetail /> */}
        <DummyJson />
    </div>
  )
}

export default App
