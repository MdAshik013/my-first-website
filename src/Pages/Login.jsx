import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body w-5/12 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center">Do not have an account please <Link to='/register' className="text-lg text-blue-500 font-bold">Register</Link></p>
        </div>

    );
};

export default Login;