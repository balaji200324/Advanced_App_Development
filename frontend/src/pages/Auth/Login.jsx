import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailValid(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  }

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      toast.error('Please enter your email address');
      isValid = false;
    } else if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      isValid = false;
    }

    if (!password) {
      toast.error('Please enter your password');
      isValid = false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
      toast.error('Password must be at least 8 characters long and contain at least one number, one lowercase and one uppercase letter, and one special character.');
      isValid = false;
    }

    return isValid;
  }
  const navigate = useNavigate();

  const handleLogin = async () => {

    if (validateForm()) {
      {
        try {
          const response = await axios.post('http://localhost:8080/api/auth/signin', {
            email,
            password,
          });
          const userData = response. data;       
          dispatch(setUser (userData));
          const userRole = response.data.roles[0];
    
          switch (userRole) {
            case 'ADMIN':
              console.log('Logged in successfully with email:', email);
              toast.success('Login Successful',{onClose:()=>navigate('/'),autoClose:1000});
              navigate('/Admin/Dashboard');
              break;
              case 'USER':
                console.log('Logged in successfully with email:', email);
                toast.success('Login Successful',{onClose:()=>navigate('/'),autoClose:1000});
                navigate('/user/Dashboard');
              break;
            default:
              toast.warning("you are no a user please signup")
              break;
          }
        } catch (error) {
          console.error(error);
        }
      }
      }
    }

  return (
    <>
      <div className='h-[95vh] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
        <div className='h-[40vh] container mx-auto px-4 w-full  bg-slate-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>

          <div className='text-center mt-5 font-bold  '>
            <h1>Login</h1>
          </div>

          <div className='text-center mt-8'>
            <input
              className={`placeholder-red-400 bg-red-100 shadow-lg shadow-violet-400/50 ${emailValid ? 'placeholder-green-400 bg-green-100' : ''}`}
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => validateEmail(email)}
            />
          </div>

          <div className='text-center mt-8'>
            <input
              className={`placeholder-red-400 bg-red-100 shadow-lg shadow-violet-400/50 ${passwordValid ? 'placeholder-green-400 bg-green-100' : ''}`}
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
                  setPasswordValid(true);
                } else {
                  setPasswordValid(false);
                }
              }}
            />
          </div>
          <div className='text-center mt-5'>
            <button type="button" className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 justify-center items-center" onClick={handleLogin}>Login</button>
          </div>

          <div className='text-center mt-4 decoration-double ... underline decoration-orange-400 text-blue-900 hover:decoration-green-400'>
            <Link to='/signup'>Signup</Link>
          </div>

        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login;