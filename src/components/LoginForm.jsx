import React from "react";

const LoginForm = () => {
  return (
    <>
      <body class="text-start" style={{ maxWidth: "700px", minWidth: "700px" }}>
        <main class="form-signin w-100 m-auto max-widt">
          <form>
            <div className="text-center">
              <img
                class="mb-4 rounded-circle "
                src="https://source.unsplash.com/120x120?reactjs"
                alt=""
              />
            </div>
            <h1 class="h3 mb-3 text-center text-uppercase fw-bold">Log In</h1>

            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Log In
            </button>
          </form>
        </main>
      </body>
    </>
  );
};

export default LoginForm;
