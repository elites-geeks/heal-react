import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";

const baseURL = "https://elite-heal.herokuapp.com";

function SubscribeToInsuranceCompany(props) {
  const [insuranceCompanies, setinsuranceCompanies] = useState([]);
  const [listOfpolicies, setlistOfpolicies] = useState([]);
  const [formBody, setFormBody] = useState({});
  useEffect(() => {
    getInsuranceInfo();
    async function getInsuranceInfo() {
      await axios({
        baseURL: baseURL,
        url: `/patient/insurance`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": baseURL,
        },
      }).then(async (result) => {
        setinsuranceCompanies(result.data);
        // console.log(result.data)
      });
    }
  },[]);

  async function handleSubmit() {
    console.log(formBody);
    await axios({
      baseURL: baseURL,
      url: `/patient/insurance/subscribe`,
      method: "post",
      data: JSON.stringify(formBody),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": baseURL,
      },
    })
  }

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Form.Group>
          <Form.Control
          name="insurance"
          value={formBody}
            as="select"
            onChange={(e) => {
              e.preventDefault();
              console.log("e.target.value", e.target.value);
              setlistOfpolicies(
                insuranceCompanies.filter(
                  (element) => element.profile.name === e.target.value
                )
              );
              console.log("listOfpolicies", listOfpolicies);
              setFormBody({ ...formBody, [e.target.name]: e.target.value });
            }}
          >
            <option selected disabled>
              Insurance Companies
            </option>
            {insuranceCompanies.map((element, idx) => {
              console.log(element.profile.username);
              return (
                <option key={idx} value={element.profile.name}>
                  {element.profile.name}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control
            as="select"
            onChange={(e) => {
              setFormBody({ ...formBody, [e.target.name]: e.target.value });
            }}
          >
            <option selected disabled>
              Policies available
            </option>
            {listOfpolicies.map((element, idx) => {
              console.log(element.listOfPolicies.offerName);
              return (
                <option key={idx} value={element.listOfPolicies.offerName}>
                  {element.listOfPolicies.offerName}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Button>Send request</Button>
      </Form>
    </div>
  );
}

export default SubscribeToInsuranceCompany;
