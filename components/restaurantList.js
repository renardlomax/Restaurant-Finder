import { gql,useQuery} from '@apollo/client';
import {useContext, useState} from 'react';
import client from './client';
import Link from "next/link";
import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col} from "reactstrap";

function RestaurantList(props){
  const {cart } = useContext(AppContext);
  
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS, {client: client})
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`)
  console.log(data.restaurants)


let searchQuery = data.restaurants.filter((res) =>{
    return res.name.toLowerCase().includes(props.search)
  })

if(searchQuery.length > 0){
  const restList = searchQuery.map((res) => (
    <Col xs="6" sm="4" key={res.id}>
      <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
        <CardImg
          top={true}
          style={{ height: 200 }}
          src={
          `http://localhost:1337`+ res.image.url
          }
        />
        <CardBody className="text-card">
          <CardText>{res.description}</CardText>
        </CardBody>
        <div className="card-footer">
          <Link as={`/restaurants/${res.id}`}
            href={`/restaurants?id=${res.id}`}
           >
        <Button color="danger">{res.name}</Button>
      
        </Link>
        </div>
        <div>
        <style jsx global>{`
            .text-card{
              font-size: 1.1 rem;
              font-weight: bold;
            }
            
            Button:hover{
              color: white;
              background-color: blue;
            }
          `}
          </style>
        </div>
      </Card>
    </Col>
    
  ))

  return(

    <Container>
    <Row xs='3'>
      {restList}
    </Row>
 
    </Container>

  )
  
} else {


  
  return <h1> No Restaurants Found</h1>
  
}

}
   export default RestaurantList