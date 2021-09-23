/* /pages/restaurants.js */
import React, { useState } from "react";
import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Cart from "../components/cart";
import AppContext from "../components/context";
import client from './client'
import { InputGroup, InputGroupAddon,Input} from "reactstrap";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
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
    let searchQuery = restaurant.dishes.filter((res) =>{
        return res.name.toLowerCase().includes(query)
    })
    if (searchQuery.length > 0){
    return (
      <>
      <div className="search">
        <h2> Local Dishes</h2>
        <InputGroup >
        <InputGroupAddon addonType="append"> Search </InputGroupAddon>
        <Input
            onChange={(e) =>
            setQuery(e.target.value.toLocaleLowerCase())
            }
            value={query}
        />
        </InputGroup><br></br>
    </div>
        <h1>{restaurant.name}</h1>
        <Row>
          {searchQuery.map((res) => (
            <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
              <Card style={{ margin: "0 10px" }}>
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={
                    process.env.NODE_ENV === "production"
                      ? res.image.url
                      : `${process.env.NEXT_PUBLIC_API_URL}${res.image.url}`
                  }
                />
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button
                    outline
                    color="primary"
                    onClick={() => appContext.addItem(res)}
                  >
                    + Add To Cart
                  </Button>

                  <style jsx>
                    {`
                      a {
                        color: white;
                      }
                      a:link {
                        text-decoration: none;
                        color: white;
                      }
                      .container-fluid {
                        margin-bottom: 30px;
                      }
                      .btn-outline-primary {
                        color: #007bff !important;
                      }
                      a:hover {
                        color: white !important;
                      }
                    `}
                  </style>
                </div>
              </Card>
            </Col>
          ))}
          <Col xs="3" style={{ padding: 0 }}>
            <div>
              <Cart />
            </div>
          </Col>
        </Row>
      </>
    );
  }}
  return <h1>Add Dishes</h1>;
}
export default Restaurants;
