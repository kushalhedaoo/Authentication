import React, { useState,useRef,useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignImg from './Signimg'
import { useNavigate } from 'react-router-dom'
import Validation from './Validation'
// import { Alert } from 'bootstrap'
// import PopOver from './PopOver';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

import {app} from '../firebase' 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

const admin = {
    name: "kushal",
    email: "kushalhedaoo07@gmail.com",
    password: "123@321a"
}

window.localStorage.setItem('user', JSON.stringify(admin));



const Login = () => {
    // Email send to admin
    const form = useRef();

  
    // -------------------------------------------------------------------------
    const history = useNavigate();
    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    // const [data, setData] = useState([]);
    // console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const [errors, setError] = useState({});

    const [modalShow, setModalShow] = useState(false);
    console.log(modalShow);
    useEffect(() => { setTimeout(() => { setModalShow(true); }, 200) }, []);

    // const addData = (e) => {

    //     e.preventDefault();

    //     setError(Validation(inpval));

    //     const getuserArr = localStorage.getItem("user");
    //     // console.log(getuserArr.password);                  // ye undefined kyu dera hai kyuki ye string me hai apneko object chaheye .email acces karne ke liye (refer lineno 63,64 )
    //     // console.log(getuserArr.email);
    //     // console.log(getuserArr);

    //     const { email, password } = inpval;
    //     // console.log(inpval);
    //     if (getuserArr && getuserArr.length) {
    //         const userdata = JSON.parse(getuserArr);
    //         // console.log(userdata.email);
    //         // console.log(userdata.password);
    //         // const userlogin = userdata.filter((el, k) => {
    //         //     return el.email === email && el.password === password
    //         // });
    //         // console.log(errors.name);
    //         if (userdata.email === inpval.email && userdata.password === inpval.password){
               
    //                 e.preventDefault();
                
    //                 // emailjs.sendForm("service_nx3gk5i", "template_7xd7dii", form.current, "zsDUXcB4toGc1FKv6")
    //                 //   .then((result) => {
    //                 //       console.log(result.text);
    //                 //   }, (error) => {
    //                 //       console.log(error.text);
    //                 //   });
                
               
    //             history("/Dummy")
            
    //         }
    //   // ----------------When registration page is Enable-----------------------
    //         // if(userlogin.length!==0){
    //         //     e.preventDefault();
                
    //         //         emailjs.sendForm("service_nx3gk5i", "template_7xd7dii", form.current, "zsDUXcB4toGc1FKv6")
    //         //           .then((result) => {
    //         //               console.log(result.text);
    //         //           }, (error) => {
    //         //               console.log(error.text);
    //         //           });
                
               
    //         //     history("/Dummy")
    //         // }
    //         else {

    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: 'Invalid Credentials!'
    //             })
    //         }

    //         // if (userlogin.length !== 0)  {
    //         //     console.log("user login succesfulyy");

    //         //     localStorage.setItem("user_login", JSON.stringify(userlogin))

    //         //     history("/Dummy")
    //         // }
    //         // else{

    //         //     <PopOver show={modalShow} onHide={() => setModalShow(false)}  />

    //         // }
    //     }

    // }



    const addData = (e) => {
        e.preventDefault();

        setError(Validation(inpval));

        const getuserArr = localStorage.getItem("user");
        const { email, password } = inpval;
        if (getuserArr && getuserArr.length) {
            const userdata = JSON.parse(getuserArr);
            // if (userdata.email === inpval.email && userdata.password === inpval.password){
            //     e.preventDefault();
            //     history("/Dummy")
            
            // }
            // else {

                // }
                signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                alert("success");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Credentials!'
                    })
              });
        }

    }


    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign In</h3>
                        <Form ref={form}>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />

                                {errors.email && <p style={{ color: "red", fontSize: '13px' }}>{errors.email}</p>}

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />

                                {errors.password && <p style={{ color: "red", fontSize: '13px' }}>{errors.password}</p>}
                            </Form.Group>
                            <Button className='col-lg-6 Header' onClick={addData} type="submit">
                                Submit
                            </Button>
                        </Form>

                    </div>
                    <SignImg />
                </section>

            </div>
        </>
    )
}

export default Login