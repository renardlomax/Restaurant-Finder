/* /pages/restaurants.js */
import React, { useState } from "react";
import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Cart from "../components/cart";
import AppContext from "../components/context";
import client from '../components/client'
import { InputGroup, InputGroupAddon,Input} from "reactstrap";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Col,
  Row,
} from "reactstrap";

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        name
        calories
        id
        description
        price
        image {
          url
        }
      }
    }
  }
`;

function Restaurants() {
  const [query, setQuery] = useState("");
  const appContext = useContext(AppContext);
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: router.query.id },
    client: client,
  });

  if (error) return "Error Loading Dishes";
  if (loading) return <h1>Loading ...</h1>;
  if (data.restaurant) {
    const { restaurant } = data;
    console.log(restaurant)
    let searchQuery = restaurant.dishes.filter((res) =>{
        return res.name.toLowerCase().includes(query)
    })
  
    const dishList = searchQuery.map((res) => (
      
      <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
       
        <Card style={{ margin: "0 10px" }}>
          <CardImg
            top={true}
            style={{ height: 250 }}
            src={
              `http://localhost:1337`+ res.image.url
              }
          />
          <CardBody className="text-card">
            <CardTitle >Name: {res.name}</CardTitle>
            <CardText> Description: {res.description}</CardText>
            <CardText> Price: ${res.price}</CardText>
            <CardText>Calories: {res.calories}</CardText>

          </CardBody>
          <div className="card-footer">
            <Button
              outline
              color="danger"
              onClick={() => appContext.addItem(res)}
            >
              + Add To Cart
            </Button>
          </div>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <div className="search">
        <h2> Local Dishes</h2>
        
        <InputGroup >
        <InputGroupAddon addonType="append"> Search </InputGroupAddon>
        <Input
            placeholder="Enter Dishes"
            onChange={(e) =>
            setQuery(e.target.value.toLocaleLowerCase())
            }
            value={query}
        />
        </InputGroup><br></br>
        <h1>{restaurant.name}</h1> <br></br>
      </div>

      { (searchQuery.length > 0) ? (
        <Row xs='3'>
          {dishList}
        </Row>
       ) : <h1>No Dishes Found</h1>}

<br></br><Cart /> 

       <style jsx global>
              {`
              .text-card {
                font-weight: bold;
              }
               
                a {
                  text-decoration: underline;
                  font-weight: bold;
                }
                .container-fluid {
                  margin-bottom: 30px;
                }
                .btn-outline-primary {
                  color: #007bff !important;
                }
               
                h2{
                  text-align: center;
                  color: black;
                  height: 90px;
                  font-size: 40px;
                  font-family: 'Playfair Display', serif;
                  padding-top: 20px;
                  font-weight: bold;
             }
             h1{
               text-align: center;
               font-family: 'Playfair Display', serif;
                font-weight: bold;
               
             }
             
              `}
            </style>

      </Container>
      
    )
  } // if bracket
} // function bracket

export default Restaurants;
