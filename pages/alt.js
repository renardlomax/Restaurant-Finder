import React, { useState } from "react";
import RestaurantList from '../components/restaurantList';
import { InputGroup, InputGroupAddon,Input} from "reactstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container } from "reactstrap";
// import Image from 'next/image'
// import foodApp from '../public/foodApp';

import  StyledFirebaseAuth  from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../firebase/clientApp";

const uiConfig = {

    signInSuccessUrl: "./register",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SighnIn() {

    return (
        <div>
            <Container>
            <style jsx global>{`
            
            body,
          html {
            background-color: white;
            font-size: 18px;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            
          }
            
            `}</style>

 {/* <Image src={foodApp} width={300} height={300} /> */}
         
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Container>
        </div>

    );
}
export default SighnIn;