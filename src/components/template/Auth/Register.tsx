import Button from '../../atom/Button'
import Header from '../Header/Header'
import './index.scss'

const Register = () => {
    return (
        <>
            <Header />
            <div className='auth'>
                <div className='auth_container'>
                    <h1>Register</h1>
                    <form action="" method="post">
                        <div className='form-group'>
                            <div className='form-control'>
                                <label htmlFor="">Userame</label>
                                <input type="text" placeholder='Input username' name='username' />
                            </div>
                            <div className='form-control'>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Input email' name='email' />
                            </div>
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Input name' name='name' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='Input password' name='password' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">Confirm password</label>
                            <input type="password" placeholder='Input confirm password' name='password_confirm' />
                        </div>
                        <Button color='#ff90e8' text='Register' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
