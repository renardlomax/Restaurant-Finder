/* /pages/login.js */

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
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
import { login } from "../components/auth";
import AppContext from "../components/context";

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (appContext.isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <Container>
    
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <Container>
            <img src="http://localhost:1337/uploads/foodApp.jpg" />
              </Container>
            </div>
            <section className="wrapper">
            <h2>Login </h2> <br />
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                  return (
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                    >
                      <small style={{ color: "red" }}>
                        {error.messages[0].message}
                      </small>
                    </div>
                  );
                })}
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label  className="inputletters">Email:</Label>
                    <Input
                      placeholder="Enter Email"
                      onChange={(event) => onChange(event)}
                      name="identifier"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label className="inputletters">Password:</Label>
                    <Input
                      placeholder="Enter Password"
                      onChange={(event) => onChange(event)}
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
                      // style={{ float: "right", width: 120 }}
                      color="white"
                      onClick={(e) => {
                        setLoading(true);
                        login(data.identifier, data.password)
                          .then((res) => {
                            setLoading(false);
                            // set authed User in global context to update header/app state
                            appContext.setUser(res.data.user);
                          })
                          .catch((error) => {
                            //setError(error.response.data);
                            setLoading(false);
                          });
                      }}
                    >
                      {loading ? "Loading... " : "Submit"}
                    </Button>
                  </FormGroup>
                </fieldset>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <style jsx global>
        {`
        .inputletters {
          font-size: 1.2em;
          font-weight: bold;
          font-family: 'Playfair Display', serif;
        }
        h2{
          text-align: center;
          text-transform: uppercase;
          font-size: 1.5em;
          font-weight: bold;
          text-decoration: underline;
          color: black;
          font-family: 'Playfair Display', serif;
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
        a {
          text-decoration: underline;
          font-weight: bold;
          
        }
        img {
          margin: 5px 3px 20px 0px;
          width: 100%;
          height: 150px;

        }
        Button {
          color: black;
        }
        Button:hover {
          background-color: blue;
          color: white;
        }
      `}
      </style>
    </Container>
  );
}

export default Login;


