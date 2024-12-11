import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import lottieLoginData from "../assets/login.json"
import Lottie from "lottie-react";


const Login = () => {
	const {loginUser} = useContext(AuthContext)

	
	const handleLogin=(e)=> {
		e.preventDefault();
		const form = e.target;
		
		const email = form.email.value;
		const password = form.password.value;
		// const user = { name, email, password}
		// console.log(user)

		loginUser(email, password)
		.then(result => console.log(result.user))
		.catch(error => console.log(error.message))



	}
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    <Lottie animationData={lottieLoginData} className='w-[70%] mx-auto'></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:ml-32">
      <form onSubmit={handleLogin} className="card-body">
        
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {/* {
      error && (<p className='text-red-500'>{error}</p>)
    } */}
    </div>
  
  </div>
</div>
			
		</div>
	);
};

export default Login;