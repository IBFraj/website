
import React, {SyntheticEvent, useState} from 'react';
import Layout from "../layouts/Layout";
import { Footer } from './footer';
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import { Fragment } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });


        await router.push('/home');
    }

    return (
        <Fragment>
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
            <input type="email" placeholder="Email*" required
                       onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="row"> 
            <input type="password" placeholder="Password*" required
                       onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </form>
     
     
        </Layout>
        <Footer/>
        </Fragment>
    );
};

export default Login;