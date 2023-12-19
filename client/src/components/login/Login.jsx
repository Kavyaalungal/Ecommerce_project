import React from 'react';
import './Login.css';

function Login() {
  const login = (event) => {
    event.preventDefault();

  };

  return (
    <>
      <section className="form my-4 mx-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img src="./src/images/login3.jpg" className="img-fluid" alt="img" />
            </div>
            <div className="col-lg px-5 pt-6">
              <h1 className="font-weight-bold py-3">Login</h1>
              <h4>Sign into your account</h4>
              <form onSubmit={login}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="text"
                      placeholder="Enter your username"
                      className="form-control my-3 p-4"
                      id="username"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="password"
                      placeholder="********"
                      className="form-control my-3 p-4"
                      id="password"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="submit"
                      value="Login"
                      className="btn1 mt-3 mb-5"
                    />
                  </div>
                </div>
              </form>
              <a href="#">Forgot Password</a>
              <p>
                Don't have an account? <a href="register1.html">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
