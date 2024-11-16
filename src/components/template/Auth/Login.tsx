import { useState } from 'react'
import Button from '../../atom/Button'
import Header from '../Header/Header'
import './index.scss'
import { useAuth } from '../../../common/hooks/useAuth'
import { HTTP_STATUS } from '../../../common/constants'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [username, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()
    const { setToken, setUsername } = useAuth();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        try {
            const response = await axios.post('http://localhost:3000/auth/login',{ username, password }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;
            if (data.status === HTTP_STATUS.BAD_REQUEST) {
                setError(data.message)
            }
            else {
                setToken(data.data.token);
                setUsername(data.data.name);
                navigate("/", { replace: true });
            }
        } catch (error: any) {
            setError(error.response?.data?.message || error.message)
        }
    }

    return (
        <>
            <Header />
            <div className='auth'>
                <div className='auth_container'>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit} >
                        <div className='form-control'>
                            <label htmlFor="">Userame</label>
                            <input 
                            type="text" 
                            placeholder='Input username' 
                            value={username}
                            onChange={(e) => {setName(e.target.value)}} />
                        </div>

                        <div className='form-control'>
                            <label htmlFor="">Password</label>
                            <input 
                            type="password"
                            placeholder='Input password' 
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                        {error && <p className='error'>{error}</p>}
                        <Button color='#ff90e8' text='Login' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
