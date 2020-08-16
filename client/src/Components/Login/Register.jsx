import React, { useState } from 'react';
import firebase from '../Config/Config';
import fire from 'firebase';
import logo from '../../images/eateriaLogo.png';
import {ButtonContainer} from '../Button';
import swal from 'sweetalert';

function Register(props) {
    
    var ID = null;
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const [ passwordType, setPasswordType] = useState({type:'password'});
    
    const handleSubmit = e => {
        e.preventDefault();
        onRegister();
    }

    const showHide = e => {
        setPasswordType(
            {type: passwordType.type === 'password' ? 'text' : 'password'}
        )
    }

    function onRegister() {
		try {
            firebase.register(name,lastName, email, password)
                .then(() => {
                    firebase.emailVerification()
                    .then(() => {
                        swal({title: "Check your mailbox!!",text: "Authentication link is sent to your mail id", icon: "info"});
                        ID = setInterval(() => {
                            fire
                              .auth()
                              .currentUser.reload()
                              .then(() => {
                                if (fire.auth().currentUser.emailVerified) {
                                  clearInterval(ID);
                                  ID = null;
                                  swal({title: "Registered",text: "You are successfully registered. Login to continue", icon: "success"});
                                  props.history.push('/login');
                                }
                                // else{
                                //     firebase.logout()
                                // }
                              }).catch(error => {
                                swal({text: error.message, icon: "error",dangerMode: true});
                            })
                        }, 1000)
                    }).catch(error => {
                        swal({text: error.message, icon: "error",dangerMode: true});
                    })
                }).catch(error => {
                    swal({text: error.message, icon: "error",dangerMode: true});
                })
		}catch(error) {
			swal({text: error.message,icon: "error", dangerMode: true});
		}
	}
    return (
        <div className="sign-in">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12 col-12 form-center">
                        <div className="sign-in-form p-4">
                            <div className="d-flex justify-content-center mb-5">
                                <img src={logo} alt="logo"/>
                            </div>
                            <h4 className="text-center text-purple font-weight-bold">Sign Up</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group my-4 name">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text background-pink px-3"><i className="fas fa-user text-white"/></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="First Name" value={name} onChange={e => setName(e.target.value)}/>
                                </div>
                                <div className="input-group my-4 name">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text background-pink px-3"><i className="fas fa-user text-white"/></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                                </div>
                                <div className="input-group my-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text background-pink px-3"><i className="fas fa-envelope text-white"/></span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className="input-group mt-4 mb-1">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text background-pink px-3"><i className="fas fa-lock text-white"/></span>
                                    </div>
                                    <input type={passwordType.type} className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text background-white px-1" onClick={showHide}>{passwordType.type === 'password' ? <i className="fas fa-eye text-pink"/> : <i className="fas fa-eye-slash text-pink"/> } </span>
                                    </div>
                                </div>                                
                                <ButtonContainer className="background-pink w-100 mt-5" cartBtn><input type="submit" value="Register" className="text-white btn"/></ButtonContainer>
                                {/* <p className="text-center mt-3">Don't have an Account?</p> */}
                                {/* <ButtonContainer className="background-pink w-100 mt-2" cartBtn><button onClick={() => {props.history.push('/login')}} className="text-white btn">Login</button></ButtonContainer> */}
                            </form>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )

}

export default Register