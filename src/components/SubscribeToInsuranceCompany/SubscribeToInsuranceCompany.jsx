import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const baseURL = "https://elite-heal.herokuapp.com";

function SubscribeToInsuranceCompany(props) {
  const user = useSelector(state => state.userReducer.user)
  const [insuranceCompanies, setinsuranceCompanies] = useState([]);
  const [listOfpolicies, setlistOfpolicies] = useState([]);
  const [formBody, setFormBody] = useState({ insurance: "none", patientId: user.parentId });
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
      });
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault()
    if (formBody.insuranceComp && formBody.policy) {

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
  }

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Control
            name="insurance"
            value={formBody.insurance}
            as="select"
            onChange={(e) => {
              setFormBody({ insurance: "none", patientId: user.parentId })
              const insComp = insuranceCompanies.filter(
                (element) => element.profile.name === e.target.value
              )
              setlistOfpolicies(insComp[0].listOfPolicies)
              setFormBody({ ...formBody, insurance: e.target.value, insuranceComp: insComp[0]._id });
            }}
          >
            <option value="none" disabled={true}>
              Insurance Companies
            </option>
            {insuranceCompanies.map((element, idx) => {
              return (
                <option key={idx} value={element.profile.name}>
                  {element.profile.name}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control
            name="policy"
            as="select"
            onChange={(e) => {
              const policy = listOfpolicies.filter(elem => elem.name === e.target.value)
              setFormBody({ ...formBody, policy: policy[0] });
            }}
          >
            <option disabled>
              Policies available
            </option>
            {listOfpolicies.map((element, idx) => {
              return (
                <option key={idx} value={element.listOfPolicies.offerName}>
                  {element.listOfPolicies.offerName}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Button type="submit">Send request</Button>
      </Form>
    </div>
  );
}

export default SubscribeToInsuranceCompany;
