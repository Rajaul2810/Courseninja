import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import './Registration.css';
import login from '../../Images/login.svg';

const Registration = () => {
    const [user, setUser] = React.useState({
        firstName: '',
        lastName: '',
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
                <h2 className='text-center text-secondary pb-3' > SIGN UP</h2>
                <div className='col-md-6'>
                    <form className="main-form">
                        <TextField id="outlined-basic"
                            size='small'
                            color="primary"
                            required
                            label="First Name"
                            variant="outlined"
                            name="firstName"
                            onChange={handleChange}
                            className='field'
                            style={{ width: '350px', margin: '8px' }}
                        /> <br />
                        <TextField id="outlined-basic"
                            size='small'
                            color="primary"
                            required
                            label="Last Name"
                            name="lastName"
                            variant="outlined"
                            onChange={handleChange}
                            className="field"
                            style={{ width: '350px', margin: '8px' }}
                        /> <br />
                        <TextField id="outlined-basic"
                            size='small'
                            color="primary"
                            required
                            label="Email"
                            name="email"
                            variant="outlined"
                            onChange={handleChange}
                            className='field'
                            style={{ width: '350px', margin: '8px' }}
                        /> <br />

                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            required
                            size='small'
                            onChange={handleChange}
                            className='field'
                            style={{ width: '350px', margin: '8px' }}
                        /><br />
                        <Button onClick={handleSubmit} variant="contained" color="success">
                            Sign UP
                        </Button>
                    </form>
                </div>
                <div className='col-md-6'>
                    <img style={{ height: '100%', width: '100%', }} src={login} alt="login" />
                </div>
            </div>



        </section>
    );
};

export default Registration;