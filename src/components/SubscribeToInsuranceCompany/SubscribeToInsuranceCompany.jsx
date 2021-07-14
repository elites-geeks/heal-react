import React, { useEffect, useState } from "react";

import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { If, Then} from "react-if";
import Loader from "../Loader/Loader";

const baseURL = "https://elite-heal.herokuapp.com";

function SubscribeToInsuranceCompany(props) {
  const user = useSelector((state) => state.userReducer.user);
  const [insuranceCompanies, setinsuranceCompanies] = useState([]);
  const [listOfpolicies, setlistOfpolicies] = useState([]);
  const [formBody, setFormBody] = useState({
    insurance: "none",
    patientId: user.parentId,
  });
  const [loading, setLoading] = useState(false);

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
    e.preventDefault();
    if (formBody.insuranceComp && formBody.policy) {
      setLoading(true);
      await axios({
        baseURL: baseURL,
        url: `/patient/insurance/subscribe`,
        method: "post",
        data: JSON.stringify(formBody),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": baseURL,
        },
      });
    }
    setLoading(false);
  }

  return (
    <>
      <div>
        <Card
          style={{
            width: "24rem",
            height: "fit-content",
            background: "#fbfbfb",
            color: "#aaa",
            borderColor: "#aaa",
            padding: "10px",
          }}
        >
          <Card.Body>
            <Card.Title>Subscribe To Insurance Company</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  name="insurance"
                  value={formBody.insurance}
                  as="select"
                  onChange={(e) => {
                    setFormBody({
                      insurance: "none",
                      patientId: user.parentId,
                    });
                    const insComp = insuranceCompanies.filter(
                      (element) => element.profile.name === e.target.value
                    );
                    setlistOfpolicies(insComp[0].listOfPolicies);
                    setFormBody({
                      ...formBody,
                      insurance: e.target.value,
                      insuranceComp: insComp[0]._id,
                    });
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
                    const policy = listOfpolicies.filter(
                      (elem) => elem.name === e.target.value
                    );
                    setFormBody({ ...formBody, policy: policy[0] });
                  }}
                >
                  <option disabled>Policies available</option>
                  {listOfpolicies.map((element, idx) => {
                    return (
                      <option
                        key={idx}
                        value={element.listOfPolicies.offerName}
                      >
                        {element.listOfPolicies.offerName}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Button
                variant="success"
                type="submit"
                style={{
                  height: "48px",
                  width: "156px",
                  borderRadius: "25px",
                  background: "#00cec8",
                }}
              >
                Send request
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <If condition={loading === true}>
        <Then>
          <Loader message="saving ..." />
        </Then>
      </If>
    </>
  );
}

export default SubscribeToInsuranceCompany;
