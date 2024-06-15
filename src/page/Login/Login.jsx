import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { useContext } from "react";

    const Login = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const { Login } = useContext(AuthContext)
        const handleSignIn = (e) => {
            e.preventDefault()
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            Login(email, password)
                .then(() => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully logged in',
                        showConfirmButton: true,
                        timer: 2500
                    })
                    navigate(location?.state ? location.state : '/');
                })
                .catch(error => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: error.message,
                        showConfirmButton: true,
                        timer: 2500
                    })
                })

        }
    
        return (
            <div className="hero mt-16 min-h-screen " style={{ backgroundImage: "url('https://i.ibb.co/j6SfB4s/pexels-tirachard-kumtanom-733852.jpg')" }}>
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0  max-w-lg shadow-xl  w-[40vw] bg-transparent">
                        <form className="card-body" onSubmit={handleSignIn}>
                            <h2 className="text-3xl font-bold rounded-lg text-center text-accent bg-black py-4">Please Login! </h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl text-accent">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl text-accent">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value='Login' className="btn btn-accent text-white"/>
                            </div>
                            <Link className="my-4 text-center" to='/register'>New to the site ? Please <span className="text-blue-400 hover:underline">Register</span></Link>

                        </form>
                    </div>
                </div>
            </div>
        );
    };

    export default Login;