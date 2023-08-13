import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/userSlice';
import { RootState } from '../../store/rootReducer';
import AppNav from '../AppNav';

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const { loading, error, message } = useSelector(
        (state: RootState) => state.user
    );
    console.log(error);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(registerUser(username, password) as any);
    };

    return (
       <div className=''>
        <AppNav />
         <div className='container grid place-items-center my-20'>
            {error && <p>Error: {error}</p>}
            {message && 
                <p className='alert alert-success'>
                    {message}
                </p>
            }
            <form onSubmit={handleSubmit} className='card row justify-content-center w-80 md:w-96'>
                 <h1 className='card-header fw-bold display-4 text-center'>
                    Join Us Now
                </h1>
                <div className='gridAround my-8 gap-2'>
                    <div className='form-group'>
                        <label htmlFor="username">Username*</label><br />
                        <input 
                            type='text'
                            id="username"
                            placeholder='Enter you name'
                            onChange={(e) => setUsername(e.target.value)}
                            className='form-control w-72 md:w-80'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password*</label><br />
                        <input 
                            type='password'
                            id="password"
                            placeholder='Enter you password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-control w-72 md:w-80'
                        />
                    </div>
                    <button type='submit' className='bg-blue-500 p-2 rounded'>
                        {loading ? 'Signing...' : 'Sign Up'}
                    </button>
                </div>
                <div className='card-footer'>
                    <div className='flex justify-center items-center gap-2'>
                        <p className='text-muted fw-light'>Already Registered?</p>
                        <button className='btn btn-dark btn-sm mb-2'>Sign In</button>
                    </div>
                </div>
            </form>
        </div>
       </div>
    );
};