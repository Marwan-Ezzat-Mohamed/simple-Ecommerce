import React, { useState } from "react";
import { login } from "./../../services/mainHttpService";
import { useData } from "./../../contexts/commonData";
import { useHistory } from "react-router-dom";
import logo from "./../../assets/coloredLogo.svg";

function Login() {
  const { setUser } = useData();
  const history = useHistory();

  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const validateEmail = (email) =>
    email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (details.email === "") {
      setEmailError("EmailIsRequired");
      setPasswordError("");
      setError("");
    } else if (!validateEmail(details.email)) {
      setEmailError("InvalidEmail");
      setPasswordError("");
      setError("");
    } else if (details.password === "") {
      setPasswordError("PasswordIsRequired");
    } else {
      setEmailError("");
      setPasswordError("");
      //call api

      setIsLoading(true);
      const { data } = await login(details.email, details.password);
      console.log("data", data);
      if (data === "No customer found") {
        setError("InvalidEmailOrPassword");
        setIsLoading(false);
        return;
      }

      setError("");
      setUser(data[0]);
      localStorage.setItem("JWT_token", data.token);
      setIsLoading(false);
      history.push("/home");
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="col-12 d-flex justify-content-center align-items-center mt-5"
    >
      <div className="form-inner col-12  d-flex flex-column justify-content-center align-items-center">
        <img src={logo} style={{ height: "160px"}} />
        {error != "" ? <div className="error">{error}</div> : ""}

        <div className="form-group d-flex flex-column col-4">
          <label className="text-secondary mb-1" htmlFor="E-Mail">
            Email
          </label>
          <input
            type="e-mail"
            name="e-mail"
            id="e-mail"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group d-flex flex-column col-4 mt-3">
          <label className="text-secondary mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <button className="btn btn-primary py-1 px-3 mt-5" type="submit">
          Login
        </button>
        <span className="mt-2"> Don't have an account?&nbsp;
          <a href="">Sign Up </a>
        </span>
      </div>
    </form>
  );
}
export default Login;
