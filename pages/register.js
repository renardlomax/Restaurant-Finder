/* /pages/register.js */

import { validate } from "graphql";
import React, { useState, useContext } from "react";
import  StyledFirebaseAuth  from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../firebase/clientApp";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { registerUser } from "../components/auth";
import AppContext from "../components/context";


const uiConfig = {

  signInSuccessUrl: "./register",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const Register = () => {
  const [data, setData] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const appContext = useContext(AppContext);



 
  return (
    <Container className="container">
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <Container>
              <img src="http://localhost:1337/uploads/foodApp.jpg" />
              {/* <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/MIT_logo.png/220px-MIT_logo.png" /> */}
              </Container>
              
              
            </div>
            <section className="wrapper">
              <h2>Register </h2> <br />
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                
                error.message.map((error) => {
                  return (
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                      
                    >
                      <small style={{ color: "red" }}>
                        {error.messages[0].message }
                      </small>
                    </div>
                  );
                  console.log(error);
                })}
               
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label className="inputletters">Username:</Label>
                    <Input
                      placeholder="Enter Username"
                      disabled={loading}
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                      value={data.username}
                      type="text"
                      name="username"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="inputletters">Email:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      placeholder="Enter Email"
                      value={data.email}
                      id="email"
                      type="email"
                      name="email"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label className="inputletters">Password:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      placeholder="Enter Password"
                      value={data.password}
                      id="password"
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    {/* <span>
                      <a href="">
                        <small>Forgot Password?</small>
                      </a>
                    </span> */}
                    <Button
                      // className="button"
                      // style={{ float: "right", width: 120 }}
                      color="white"
                      disabled={loading}
                      onClick={() => {
                        setLoading(true);
                       
                        registerUser(data.username, data.email, data.password)
                       
                       
                          .then((res) => {
                            // set authed user in global context object
                            appContext.setUser(res.data.user);
                          
                            setLoading(false);
                            alert("Successfully registered!");
                            console.log(`registered user: ${JSON.stringify(res.data)}`)
                          })
                          .catch((error) => {
                            console.log(`error in register: ${error}`)
                            alert("user email already exist ")
                            //setError(error.response.data);

                            setLoading(false);
                          });
                      }}
                    >
                      {loading ? "Loading.." : "Submit"} <br />
                      
                      
                    </Button>
                    <StyledFirebaseAuth className="google" uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                  </FormGroup>
                </fieldset>
                
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <style jsx global>
        {`.inputletters {
          font-size: 1.2em;
          font-weight: bold;
          font-family: 'Playfair Display', serif;
        }
         Button {
          color: black;
          
          
        }
        Button:hover {
          background-color: blue;
          color: white;
        }
    
        h2{
          text-align: center;
          text-transform: uppercase;
          font-size: 1.5em;
          font-weight: bold;
          text-decoration: underline;
          font-family: 'Playfair Display', serif;
          ;
        }
          .paper {
            border: 9px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 90px;
            background-color: lightblue;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 160px;
            background-color: #f5f5f5;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          
          img {
            margin: 5px 3px 20px 0px;
            width: 100%;
            height: 150px;

          }
          a {
            text-decoration: underline;
            font-weight: bold;
            active: blue;
          }
          ;
        `}
      </style>
    </Container>
  );
};
export default Register;

