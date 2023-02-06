import React, { useReducer } from "react";

// ACTIONS
const FIELD = "FIELD";
const LOGIN = "LOGIN";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";
const LOGOUT = "LOGOUT";

// INITIAL STATE
const initialState = {
  username: "",
  password: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
};

// REDUCER
const loginReducer = (state, action) => {
  switch (action.type) {
    case FIELD:
      return {
        ...state,
        [action.fieldname]: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        error: "",
        isLoading: true,
        isLoggedIn: false,
      };
    case SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        isLoggedIn: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        password: "",
      };

    default:
      return state;
  }
};

const LoginUseReducer = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  // Obtain all variables from state
  const { username, password, error, isLoading, isLoggedIn } = state;

  // Submit
  const submit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN });
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
      dispatch({ type: SUCCESS });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  };

  return (
    <div className="container mx-auto mt-2">
      <h1>Login "UseReducer"</h1>
      <div>
        {isLoggedIn ? (
          <div>
            <h1> Welcome {username}!</h1>
            <button className="btn btn-danger btn-lg-danger" onClick={() => dispatch({type:LOGOUT })}>
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
              value={username}
              onChange={(e) =>
                dispatch({
                  type: FIELD,
                  fieldname: "username",
                  payload: e.currentTarget.value,
                })
              }
            />
            <input
              className="form-control form-control-lg mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: FIELD,
                  fieldname: "password",
                  payload: e.currentTarget.value,
                })
              }
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

export default LoginUseReducer;
