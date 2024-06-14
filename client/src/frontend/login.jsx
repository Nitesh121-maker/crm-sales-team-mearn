import React,{useState} from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import '../css/login.css'
// import { Navigate } from 'react-router-dom';
import  { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();
// Login
const [login, setLogin] = useState({
    username:'',
    password:'',
});
const handleChange  = (e) => {
   setLogin({...login, [e.target.name] : e.target.value});
}
const handleLogin = async (e) => {
    e.preventDefault();
    // const { email, password } = e.target.elements;
    // const data = { email: email.value, password: password.value };
    console.log('Login cred',login);
    try {
        const response = await fetch('http://192.168.1.10:3002/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        });
        const res = await response.json();
        console.log('Result:',res);
        const user =  res.user;
        console.log('User:',user);

        sessionStorage.setItem('unique_id',user.sales_person_id);
        sessionStorage.setItem('password',user.password);
        sessionStorage.setItem('first_name',user.first_name);
        sessionStorage.setItem('last_name',user.last_name);
        sessionStorage.setItem('email',user.email);
        // if(res.ok){
           
        // }
        navigate(`/sales-dashboard`)
    } catch (error) {
        console.log( 'Connection failure',error );

    }
}
  return (
    <div className="wrapper">
        <div className="container">
                <div className="login-bg-left">
                    <div className="login-overlay">
                        <div className="login-left">
                            {/* <!-- Additional content if needed --> */}
                        </div>
                    </div>
                </div>
                <div className="login-form-right">
                   
                    <form action="" className="av-valid" onSubmit={handleLogin}>
                  
                        <div className="login-form-body">
                        <h3>Tradeimex ERP Sales Person Login</h3>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name='username' value={login.username} onChange={handleChange} className="form-control input" id="username" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={login.password} onChange={handleChange} className="form-control input" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className='btn btn-primary btn btn-primary'>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Login