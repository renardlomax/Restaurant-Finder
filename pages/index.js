import React, { useState } from "react";
import RestaurantList from '../components/restaurantList';
import { InputGroup, InputGroupAddon,Input} from "reactstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import {Container} from 'reactstrap';
import  StyledFirebaseAuth  from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../firebase/clientApp";



function Home() {
    const [query, setQuery] = useState("");
  //   const uiConfig = {

  //     signInSuccessUrl: "./register",
  //     signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  // };
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log("Loading:", loading, "|", "Current User:" , user)
  
 
    return (
       
          <div className="search">
              <h2> Local Restaurants</h2>
                <InputGroup >
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input
                  placeholder="Enter Restaurant"
                    onChange={(e) =>
                    setQuery(e.target.value.toLocaleLowerCase())
                    }
                    value={query}
                />
                </InputGroup><br></br>
                {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
            
            <RestaurantList search={query} />
             <style jsx global>{`
             
             h2{
                  text-align: center;
                  color: black;
                  
                  height: 90px;
                  font-size: 40px;
                  font-family: 'Playfair Display', serif;
                  padding-top: 20px;
                  font-weight: bold;
                  
             }
             a {
              text-decoration: underline;
              font-weight: bold;
        
             `}</style>

            </div>     
    );
   
  }
  export default Home;
  