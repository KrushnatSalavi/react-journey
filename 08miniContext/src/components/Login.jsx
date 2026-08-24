import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setpassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='User name' value={username}
                onChange={(e) => setUserName(e.target.value)} />
                {'  '}
            <input type="text" placeholder='Password' value={password}
                onChange={(e) => setpassword(e.target.value)} />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
