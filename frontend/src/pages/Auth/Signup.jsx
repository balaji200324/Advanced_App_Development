import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateUsername = (username) => {
    return username.length >= 3;
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  }

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  }

  const isValidUsername = validateUsername(username);
  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);
  const isValidConfirmPassword = validateConfirmPassword(confirmPassword);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!username || !email || !password || !confirmPassword) {
      toast.error('All fields are required');
      return;
    }

    if (!isValidPassword) {
      toast.error('Passwords contains atleast one uppercase one lowercase numbers and symbols');
      return;
    }
    if (!isValidConfirmPassword) {
      toast.error('Passwords do not match');
      return;
    }


    if (isValidUsername && isValidEmail && isValidPassword && isValidConfirmPassword) {

      const user = {
        name: username,
        email: email,
        password: password
      };
  
      axios
        .post('http://localhost:8080/api/auth/register', user)
        .then((response) => {
          setMessage(response.data.message);
        })
        .catch((error) => {
          setMessage(error.response.data.message);
        });
  
      console.log('Signed up successfully with username:', username, 'email:', email);
      toast.success('Signup Successful',{onClose:()=>navigate('/login'),autoClose:1000});
    }
  }
  

  return (
    <>
      <div className='h-[95vh] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
        <div className='h-[50vh] container mx-auto px-4 w-full  bg-slate-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>

          <div className='text-center mt-5 font-extrabold'>
            <h1>SignUp</h1>
          </div>

          <div className='text-center mt-8'>
            <input
              className={`placeholder-red-400 bg-red-100 shadow-lg shadow-violet-400/50 ${isValidUsername ? 'placeholder-green-400 bg-green-100' : ''}`}
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className='text-center mt-8'>
            <input
              className={`placeholder-red-400 bg-red-100 shadow-lg shadow-violet-400/50 ${isValidEmail ? 'placeholder-green-400 bg-green-100' : ''}`}
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='text-center mt-8'>
            <input
              className={`placeholder-red-400 bg-red-100 shadow-lg shadow-violet-400/50 ${isValidPassword ? 'placeholder-green-400 bg-green-100' : ''}`}
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='text-center mt-8'>
            <input
              className={`placeholder-red-400 bg-red-100 shadow-lg shadow-violet-400/50 ${isValidConfirmPassword ? 'placeholder-green-400 bg-green-100' : ''}`}
              placeholder='Confirm Password'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className='text-center mt-5'>
            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5" onClick={handleSubmit}>Signup</button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default Signup;




