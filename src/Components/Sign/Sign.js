import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import './Sign.css';
import { Link } from 'react-router-dom';
import login from '../../Images/login.svg';

const Sign = () => {

    const [user, setUser] = React.useState({
        email: '',
        password: '',
        date: Date().toString()
    })
    const handleChange = (e) => {
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
    console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section className='d-flex justify-content-center bg-light p-5'>
            <div className='row w-75'>
                 <h1 className='text-center text-secondary pb-3'>Login</h1>
                <div className='col-md-6'>
                    <img style={{ height: '100%', width: '100%', }} src={login} alt="login" />
                </div>
                <div className='col-md-6 mt-5'>

                    <form className="main-form">
                        <TextField id="outlined-basic"
                            size='small'
                            color="primary"
                            required
                            label="Email"
                            name="email"
                            variant="outlined"
                            onChange={handleChange}
                            className='field2'
                            style={{ width: '350px', margin: '8px' }}
                        /> <br />

                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            required
                            size='small'
                            name="password"
                            onChange={handleChange}
                            className='field2'
                            style={{ width: '350px', margin: '8px' }}
                        /><br />
                        <div className='text-secondary pb-3'>
                            <Link to="/forget" style={{ fontSize: '14px', marginRight: '55px', textDecoration: 'none' }}>Forget password?</Link>
                            <Link to='/registration' style={{ fontSize: '14px', marginLeft: '10px', textDecoration: 'none' }}>Create a new account?</Link>
                        </div>
                        <Button onClick={handleSubmit} variant="contained" color="success">
                            Sign In
                        </Button>
                    </form>
                </div>


            </div>


        </section>
    );
};

export default Sign;