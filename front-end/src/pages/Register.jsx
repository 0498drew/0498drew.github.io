import React, {useState} from "react";


import { Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css'

import registerImg from '../assets/images/login.jpg'
import userIcon from '../assets/images/user.jpg'

const Register = () => {

    const [crententails ,setCredentials ] = useState({
        userName:undefined,
        email:undefined,
        password:undefined,
        confirmPassword:undefined
    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = e => {
        e.preventDefault();
    };


    return <section>
        <Container>
            <Col lg='8' className="m-auto">
                <div className="login_container d-flex justify-content-between">
                    <div className="login_img">
                        <img src={"registerImg"} alt="" />
                    </div>

                    <div className="login_form">
                        <div className="user">
                            <img src={"userIcon"} alt="" />
                        </div>
                        <h2>Register</h2>
                        <form onSubmit={handleClick}>
                            <FormGroup>
                                <input type="text" placeholder="Username" required id="username"
                                onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <input type="email" placeholder="Email" required id="email"
                                onChange={handleChange} />
                            </FormGroup>
                             <FormGroup>
                                <input type="password" placeholder="Password" require id="password"
                                onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <input type="password" placeholder="Confirm password" require id="confirm_password"
                                onChange={handleChange} />
                            </FormGroup>
                            <Button className="btn secondary_btn auth_btn" type="submit">Create Account</Button>
                        </form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </Col>
        </Container>
    </section>
};

export default Register;