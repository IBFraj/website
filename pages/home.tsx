import Layout from "../layouts/Layout";
import {Fragment, useEffect, useState} from "react";
import { Footer } from "./footer";

import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();
  
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('http://localhost:8000/api/login/user', {
                        credentials: 'include',
                    });

                    const content = await response.json();

                    
                    setAuth(true);
                } catch (e) {
                   
                    setAuth(false);
                
                }
            }
        )();
    });

    if (!{auth}){
       return router.push("/")
        } else return (
        <Fragment>
           
            
        <Layout auth={auth}>
         
    
        <img className="image" />
        <p>The logo above  is Made Pure CSS</p>
     
          
        </Layout>
        <Footer />
        </Fragment>
    )
}
