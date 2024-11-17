import { useForm } from 'react-hook-form';
import Button from '../../atom/Button';
import Header from '../Header/Header';
import './index.scss';
import { HTTP_STATUS } from '../../../common/constants';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../common/hooks/useAuth';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const { setToken, setUsername } = useAuth()
    
    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/register', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const values = response.data;
            if (response.status === HTTP_STATUS.CREATED) {
                setToken(values.data.token);
                setUsername(values.data.username);
                navigate("/", { replace: true });
            } else {
                console.error('Error during registration:', values.message);
                alert(values.message);
            }
        } catch (error: any) {
            console.error('Error during registration:', );
            alert(error.response.data.message);
        }
    };

    return (
        <>
            <Header />
            <div className='auth'>
                <div className='auth_container'>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group'>
                            <div className='form-control'>
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder='Input username' {...register('username', { required: 'Username is required' })} />
                                {errors.username && <span>{String(errors.username.message)}</span>}
                            </div>
                            <div className='form-control'>
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder='Input email' {...register('email', { required: 'Email is required' })} />
                                {errors.email && <span>{String(errors.email.message)}</span>}
                            </div>
                        </div>
                        <div className='form-control'>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='Input name' {...register('name', { required: 'Name is required' })} />
                            {errors.name && <span>{String(errors.name.message)}</span>}
                        </div>
                        <div className='form-control'>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Input password' {...register('password', { required: 'Password is required' })} />
                            {errors.password && <span>{String(errors.password.message)}</span>}
                        </div>
                        <div className='form-control'>
                            <label htmlFor="password_confirm">Confirm password</label>
                            <input type="password" placeholder='Input confirm password' {...register('password_confirm', { required: 'Confirm password is required' })} />
                            {errors.password_confirm && <span>{String(errors.password_confirm.message)}</span>}
                        </div>
                        <Button color='#ff90e8' text='Register' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
