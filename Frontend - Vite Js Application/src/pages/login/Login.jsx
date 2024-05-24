import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { userValidate } from "../../helper/validate";
import "./Login.scss";

const Login = () => {
  const formik = useFormik({
    initialValues:{
      username: "",
      password: ""
    },
    validate: userValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  })
  return (
    <div className="login">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="card">
        <div className="left">
          <h1>Welcome!</h1>
          <h3>Happy to See you Here...</h3>
          <span>Don't have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps('username')} type="text" placeholder="Username" />
            <input {...formik.getFieldProps('password')} type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
