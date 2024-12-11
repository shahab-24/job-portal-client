import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import lottieAnimationData from "../assets/Animation - 1733835724797.json"
import AuthContext from '../context/AuthContext/AuthContext';


const Register = () => {
  const {createUser} = useContext(AuthContext)
	const [error, setError] = useState();

	const handleRegister=e=> {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		// const user = { name, email, password}
		// console.log(user)

		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
		if(!passwordRegex.test(email,password)){
			setError('Password must have at least 1 uppercase, 1 lowercase, 1 digit, 1 special character, and be at least 6 characters long.');

		}else{
			setError("");
		}

    createUser(email,password)
    .then(result => console.log(result.user))
    .catch(error => console.log(error.message))

	}
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left ">
      <h1 className="text-5xl font-bold">Register now!</h1>
    <Lottie animationData={lottieAnimationData} className='w-[60%] mx-auto'></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:ml-32">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name"  name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"  name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      {
      error && (<p className='text-red-500'>{error}</p>)
    }
    </div>
  
  </div>
</div>
			
		</div>
	);
};

export default Register;