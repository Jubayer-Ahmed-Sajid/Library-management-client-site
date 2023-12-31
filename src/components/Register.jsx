import { useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from "./AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";
import auth from "../Config/firebase.config";
const Register = () => {
    const {createUser, signUpWithGoogle}= useContext(AuthContext)
    const navigate = useNavigate('');
    const [errors, setError] = useState('');
    const [successMessage, setSuccess] = useState('');

    const handleRegistration = e => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;
        if (password.length < 6) {
            return  Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Password must be atleast six character long',
                  showConfirmButton: true,
                  timer: 1500
                })
      }
      if (!/[A-Z]/.test(password)) {
             return Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title:"Password must contain at least one capital letter.",
                  showConfirmButton: true,
                  timer: 1500
                })
          
      }
      if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
             return Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: "Password must contain at least one special character.",
                  showConfirmButton: true,
                  timer: 1500
                })
      }
  
  

        createUser(email, password, url, name)
        .then(() => {
            const user = auth.currentUser;
            updateProfile(user, {
                displayName: name,
                photoURL: url
            })
                .then(() => {

                })
                .catch((error) => {
                    console.error(error)
                })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully account created',
                showConfirmButton: true,
                timer: 1500
            })
            ;
            setTimeout(() => {
                window.location.reload();
            }, 2000);
           
            navigate('/');
            



        })
        .catch((error) => {
            setError(error.message)
           return Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: errors,
                showConfirmButton: true,
                timer: 1500
            })
        })

    }
    const handleGoogleSignUp = ()=>{
        signUpWithGoogle()
        .then(() =>{
            setSuccess('User created successfully')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: successMessage,
                showConfirmButton: true,
                timer: 2500
            })
            navigate('/');
        })
        .catch((error) =>{
            setError(error.message)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: errors,
                showConfirmButton: true,
                timer: 2500
            })
        })
    }
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: "url('https://i.ibb.co/j6SfB4s/pexels-tirachard-kumtanom-733852.jpg')" }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0  max-w-lg shadow-xl  w-[40vw] bg-transparent">
                    <form className="card-body" onSubmit={handleRegistration}>
                        <h2 className="text-3xl font-bold text-center text-accent bg-black py-4">Please Register! </h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl text-accent">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl text-accent">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl text-accent">PhotoURL</span>
                            </label>
                            <input type="url" name="url" placeholder="Enter your photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl text-accent">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Register</button>
                        </div>
                        <hr className="my-4" />
                    <button className="text-2xl text-center mx-auto " onClick={handleGoogleSignUp}>
                            <FaGoogle></FaGoogle>
                        </button>
                        <Link className="my-4" to='/login'>Already have an account  ? Please <span className="text-blue-400 hover:underline">Login</span></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;