import React, { useState } from "react";
import RestaurantList from '../components/restaurantList';
import { InputGroup, InputGroupAddon,Input} from "reactstrap";

function Home() {
    const [query, setQuery] = useState("");
 
    return (
        <>
          <div className="search">
              <h2> Local Restaurants</h2>
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
            <RestaurantList search={query} />
            </>
    );
  }
  export default Home;
  