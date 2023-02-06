import React, { useState } from "react";

const LoginUseState = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      await function login({ username, password }) {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (username === "admin" && password === "admin") {
              resolve();
            } else {
              reject();
            }
          }, 2000);
        });
      };
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (error) {
      setError(`[ LoginUseState - submit] Error: ${error}`);
      setIsLoading(false);
      setUserName("");
      setPassword("");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsLoading(false);
    setUserName("");
    setPassword("");
  };

  return (
    <div className="container mx-auto">
      <h1>Login "UseState"</h1>
      <div>
        {isLoggedIn ? (
          <div>
            <h1> Welcome {userName}!</h1>
            <button className="btn btn-danger btn-lg-danger" onClick={logout}>
              {" "}
              LOGOUT{" "}
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="col-8 col-md-8 mt-3 mx-auto">
            {error && <p style={{ color: "tomato" }}>{error}</p>}
            <input
              className="col-6 form-control form-control-lg mb-2"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.currentTarget.value)}
            />
            <input
              className="form-control form-control-lg mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button
              type="submit"
              className="btn btn-success btn-lg-success col-2"
            >
              {" "}
              {isLoading ? "Logging..." : "Login"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginUseState;
