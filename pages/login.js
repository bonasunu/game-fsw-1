import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import auth from "../src/services/authService";
import style from "../styles/login.module.css";
import withoutAuth from "../src/hocs/withoutAuth";
import NavbarComponent from "../src/components/NavbarComponent";
import Loader from "../src/components/Loader";
import { useAuth } from "../src/services/authContext";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const { setAuthenticated, user } = useAuth();

  const handleChange = ({ currentTarget: input }) => {
    const userInput = { ...data };
    userInput[input.name] = input.value;
    setData(userInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);
      const { username, password } = data;
      await auth.login(username, password);
      setAuthenticated(true); //useAuth untuk protect-route
      localStorage.setItem("navbarInfo", username); // bona-navbar
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        const errors = { ...errors };
        errors.username = ex.response.data.message;
        setErrors(errors);
      }
    }
  };

  return (
    <>
      <Head></Head>
      <NavbarComponent />
      <div style={{ height: "100vh", width: "100%" }}>
        <div className={style.authContainer}>
          <img
            src="/logo/secondary-logo.png"
            className={style.authLogo}
            alt="Binar Logo"
          />
          <div className={style.authCard}>
            <h4
              style={{
                paddingBottom: 10,
                fontWeight: 700,
                color: `var(--binar)`,
              }}
            >
              Login
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  placeholder="Username"
                  style={{ height: 44 }}
                />
                {errors && (
                  <div
                    className="invalid-feedback"
                    style={{ display: "block" }}
                  >
                    {errors.username}
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                  style={{ height: 44 }}
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                style={{
                  width: "100%",
                  height: 44,
                  backgroundColor: "#F9B91E",
                  borderColor: "#F9B91E",
                  borderRadius: 4,
                }}
                disabled={loader}
              >
                {loader ? <Loader /> : "Masuk"}
              </button>
            </form>
          </div>
          <div className={style.authRedirect}>
            Belum punya akun? Daftar{" "}
            <span>
              <Link href="/register">
                <div className={style.authLinkCustom}>disini</div>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default withoutAuth(Login);
