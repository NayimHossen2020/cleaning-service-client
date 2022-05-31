import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='h-screen bg-accent flex justify-center items-center mt-3'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-center text-2xl'>Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-5">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <button className='btn btn-glass hover:btn-primary'>Continue With google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;