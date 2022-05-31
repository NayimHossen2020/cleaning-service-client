import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='h-screen bg-accent flex justify-center items-center mt-3'>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-center text-2xl'>Login</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <Link to="" class="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div class="form-control mt-5">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <div class="divider">OR</div>
                    <button className='btn btn-glass hover:btn-primary'>Continue With google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;