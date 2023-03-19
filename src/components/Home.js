import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Signimg from './Signimg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Validation from './Validation'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase' 

const auth = getAuth(app);



const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
    // console.log(inpval);

    const [errors, setError] = useState({});
    const getdata = (e) => {
        // console.log(e.target.value);


        // setError(Validation(inpval));
        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }



    // const addData = (e) => {
    //     e.preventDefault();

    //     setError(Validation(inpval));

    //     // const { name, email, date, password } = inpval;

    //     localStorage.setItem("user",JSON.stringify([...data,inpval]));
    //     history("/login")

    // }

    const addData = (e) => {
        e.preventDefault();
        setError(Validation(inpval));
        history("/login")

        createUserWithEmailAndPassword(auth,inpval.email,inpval.password).then(value=>alert(value));

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                                {errors.name && <p style={{ color: "red", fontSize: '10px' }}>{errors.name}</p>}
                          
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />

                                 {errors.email && <p style={{ color: "red", fontSize: '10px' }}>{errors.email}</p>}
                          
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                                       
                            {errors.password && <p style={{ color: "red", fontSize: '10px' }}>{errors.password}</p>}
                            </Form.Group>
                            <Button  className='col-lg-6 Header' onClick={addData}  type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                    <Signimg />
                </section>
            </div>
        </>
    )


}

export default Home