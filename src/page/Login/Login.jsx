
const Login = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: "url('https://i.ibb.co/j6SfB4s/pexels-tirachard-kumtanom-733852.jpg')" }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0  max-w-lg shadow-xl h-[80vh] w-[40vw] bg-transparent">
                    <form className="card-body">
                        <h2 className="text-3xl font-bold text-center text-accent bg-black py-4">Please Login! </h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl text-accent">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl text-accent">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;