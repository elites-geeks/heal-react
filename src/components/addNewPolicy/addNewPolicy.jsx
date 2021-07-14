import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { If, Then } from "react-if";
import Loader from "../Loader/Loader";

const baseURL = "https://elite-heal.herokuapp.com";

const AddNewPolicy = (props) => {
  const [addPolicy, setaddPolicy] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log(addPolicy);

    await axios({
      baseURL: baseURL,
      url: `/insurance/policies`,
      method: "post",
      data: JSON.stringify(addPolicy),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": baseURL,
      },
    });
    setLoading(false);
  }

  return (
    <div>
      <If condition={loading === true}>
        <Then>
          <Loader message="Saving the new policy..." />
        </Then>
      </If>

      <Card
        style={{
          height: "fit-content",
          background: "#fbfbfb",
          color: "#aaa",
          borderColor: "#aaa",
          padding: "60px",
          position: "relative",
        }}
      >
        <Card.Body>
          <Card.Title>Add policy</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group style={{ padding: "2px" }}>
              <Form.Control
                placeholder="Offer Name"
                required={true}
                type="text"
                name="offerName"
                onChange={(e) =>
                  setaddPolicy({
                    ...addPolicy,
                    [e.target.name]: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control
                placeholder="Offer covrage"
                required={true}
                name="offerCoverage"
                type="text"
                onChange={(e) =>
                  setaddPolicy({
                    ...addPolicy,
                    [e.target.name]: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control
                placeholder="Offer cost per month"
                required={true}
                name="costPerMonth"
                type="text"
                onChange={(e) =>
                  setaddPolicy({
                    ...addPolicy,
                    [e.target.name]: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control
                placeholder="Offer Cost per Year"
                required={true}
                name="costPerYear"
                type="text"
                onChange={(e) =>
                  setaddPolicy({
                    ...addPolicy,
                    [e.target.name]: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control
                placeholder="company"
                required={true}
                name="company"
                type="text"
                onChange={(e) =>
                  setaddPolicy({
                    ...addPolicy,
                    [e.target.name]: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Add new
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddNewPolicy;
