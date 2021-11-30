import React, {SyntheticEvent, useState} from 'react';
import Layout from "../layouts/Layout";
import { Footer } from './footer';
import {useRouter} from "next/router";
import Link from "next/link";

const Register = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/register', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password
            })
        });


        await router.push('/');
    }

    return (
        <>
        <Layout>
        <div className="auth-tab">
          <div className="content1">
            <div className="register">
            <Link href="/register">
        <a >Register</a>
        </Link>
              <p>Browse and found what you need</p>
            </div>
          </div>
          <div className="content2">
            <div className="login">
            <Link href="/">
        <a >Sign in </a>
        </Link>
              <p>Already have an account,Welcome Back</p>
             
            </div>
         
          </div>

         
        </div>
         <form onSubmit={submit}>
        <div className="row"> 
         
            <input type="text" placeholder="Fisrt Name*" required
                       onChange={e => setFirstName(e.target.value)}/>
        
          </div>
          <div className="row">   
         
            <input type="text" placeholder="Last Name*" required
                       onChange={e => setLastName(e.target.value)} />
          
        </div>
        <div className="row"> 
         
            <input type="text" placeholder="Email*" required
                       onChange={e => setEmail(e.target.value)}/>
       
        </div>
        <div className="row"> 
           
            <input type="password" placeholder="Password*"  required
                       onChange={e => setPassword(e.target.value)}/>
          </div>
       
        <div className="row"> 
         
            <input type="text" placeholder="Repeat password*" />
        
        </div>
        <div className="row">
          <button>Submit</button>
        </div>
      </form>
        </Layout>
      
        </>
    );
};

export default Register;
