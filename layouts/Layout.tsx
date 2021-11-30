import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();



  let menu;

  if (!props.auth) {
    menu = (
        <nav className="nav1">
             <Link href="/register">
        <a >Register</a>
        </Link>
        <Link href="/">
        <a >Sign in </a>
        </Link>
      </nav>
      
    );
  } else {
    menu = (
        <nav className="nav2">
        <img className="logo" />
        <div className="left">
        <Link href="/home">
          <a >Home</a>
          </Link>
          <Link href="/home">
          <a >About us </a>
          </Link>
          <Link href="/home">
          <a >Contact us</a>
          </Link>
       
        </div>
        <div className="right">
         IF
        </div>       
      </nav>
     
    );
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>

     

      <div className="header">
      {menu}
       
      </div>

      <div className="content">
 
        {props.children}
      </div>
   
    </>
  );
};

export default Layout;
