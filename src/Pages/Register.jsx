import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (

        <div>
            <h2 className="text-4xl font-bold text-center">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body w-5/12 mx-auto">
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center">Already have an account please <Link to='/login' className="text-lg text-blue-500 font-bold">Login</Link></p>
        </div>

    );
};

export default Register;