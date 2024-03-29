import Button from '../../atom/Button'
import Header from '../Header/Header'
import './index.scss'

const Login = () => {
    return (
        <>
            <Header />
            <div className='auth'>
                <div className='auth_container'>
                    <h1>Login</h1>
                    <form action="" method="post">
                        <div className='form-control'>
                            <label htmlFor="">Userame</label>
                            <input type="text" placeholder='Input username' name='username' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='Input password' name='password' />
                        </div>
                        <Button color='#ff90e8' text='Login' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
