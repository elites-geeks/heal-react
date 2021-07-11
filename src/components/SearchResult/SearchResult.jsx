import {Switch,Route } from "react-router-dom";
import { Button,Card } from 'react-bootstrap';
const SearchResult = (props) => {
  return (
    <Switch>
    <Route path="/dashboard/client/searchresult">
    <div >
      {
        props.searchResult.map((element,idx)=>{
          return(
            <Card
            key={idx}
            style={{ width: "15rem", boxShadow: "4px 3px 3px #9E9E9E" }}
          >
          <Card.Body>
          <Card.Header>{element.name}</Card.Header>
          <Card.Text>specality : {element.specality}</Card.Text>
          <Card.Text>location : {element.location}</Card.Text>
          <Card.Text>availability : {element.availability}</Card.Text>

          <Button
            style={{ marginLeft: "10rem" }}
            variant="primary"
          >
            reserve
          </Button>
        </Card.Body>
      </Card>
          )
          
        })
      }
       
    </div>
    </Route>
    </Switch>

  );
};



export default SearchResult;