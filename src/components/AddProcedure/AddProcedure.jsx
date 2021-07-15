import React, { useState } from "react";
import { Tabs, Tab, Card, Button, Table } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './AddProcedure.scss'
let proce = [
  {
    type: "lab",
    name: "CBC",
    notes: "Blood sample",
    expected: "20 mins",
    price: "10 JDs",
    code: "1",
  },

  {
    type: "radio",
    name: "X-Ray",
    notes: "Standing position",
    expected: "15 mins",
    price: "15 JDs",
    code: "2",
  },
  {
    type: "radio",
    name: "CT Scan",
    notes: "Heart with coloring materials",
    expected: "120 mins",
    price: "120 JDs",
    code: "163",
  },
  {
    type: "radio",
    name: "MRI Image",
    notes: "Abdomen on the Kidneys",
    expected: "40 mins",
    price: "80 JDs",
    code: "156",
  },
  {
    type: "drug",
    name: "Panadol",
    notes: "3 times a day after meal",
    expected: "1 week",
    price: "3 JDs",
    code: "3",
  },
  {
    type: "drug",
    name: "Reavnin",
    notes: "2 times a day after meal",
    expected: "1.5 week",
    price: "2 JDs",
    code: "20",
  },

  {
    type: "therapy",
    name: "Massage",
    notes: "Back and Shoulders",
    expected: "1 hour",
    price: "15 JDs",
    code: "500",
  },
  {
    type: "therapy",
    name: "Joins Therapy",
    notes: "Knee and elbow",
    expected: "1 hour",
    price: "30 JDs",
    code: "4",
  },
  {
    type: "lab",
    name: "Blood Sugar",
    notes: "Fasting",
    expected: "30 mins",
    price: "3 JDs",
    code: "5",
  },
  {
    type: "lab",
    name: "Kidney Functions",
    notes: "After Dialysis",
    expected: "1 hour",
    price: "35 JDs",
    code: "6",
  },
];



const AddProcedure = () => {
  const [activeTab, setActiveTab] = useState("lab");
  const [listOfprocedures, setListOfprocedures] = useState(proce);
  const [orderdOfprocedures, setorderdOfprocedures] = useState([]);
  const [total, setTotal] = useState(0);

  function renderActive(activeKey) {
    let procedures = listOfprocedures.filter((procedure) => {
      return procedure.type === activeKey;
    });

    return (
      <>{procedures.map(card)}</>
    );
  }
  function card(element, idx) {
    return (

      <Card className="cards"
        style={{ height: "fit-content" }}
        key={idx}
      >
        <Card.Body style={{ height: "fit-content" }}>
          <Card.Header>{element.name}</Card.Header>
          <Card.Text>Notes : {element.notes}</Card.Text>
          <Card.Text>Expected Time: {element.expected}</Card.Text>
          <Card.Text>Price : {element.price}</Card.Text>

          <Button className="clientBtn"
            onClick={(e) => {
              e.preventDefault();
              setorderdOfprocedures([...orderdOfprocedures, element]);
              setTotal(total + element.price);
              setListOfprocedures(
                listOfprocedures.filter((procedure) => {
                  return procedure.code !== element.code;
                })
              );
            }}
          >
            <AddCircleIcon fontSize="large" />
          </Button>
        </Card.Body>
      </Card>

    );
  }

  return (
    <Switch>
      <Route path="/dashboard/doctor/add/procedure">
        <div id="procedures">
          <h1>Add procedure</h1>
          <Tabs
            activeKey={activeTab}
            transition={false}
            id="noanim-tab-example"
            onSelect={(k) => setActiveTab(k)}
          >
            <Tab eventKey="lab" title="LAB">
              {renderActive(activeTab)}
            </Tab>
            <Tab eventKey="radio" title="Radiology">
              {renderActive(activeTab)}
            </Tab>
            <Tab eventKey="drug" title="pharmacy">
              {renderActive(activeTab)}
            </Tab>
            <Tab eventKey="therapy" title="therapy">
              {renderActive(activeTab)}
            </Tab>
          </Tabs>

          <Table
            size="sm"
            variant="dark"
            responsive
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Notes</th>
                <th>Department Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orderdOfprocedures.map((procedure) => {
                return (
                  <tr>
                    <td>{procedure.name}</td>
                    <td>{procedure.notes}</td>
                    <td>{procedure.nepartment}</td>
                    <td>{procedure.price}</td>
                    <td>
                      <Button className="clientBtn"
                        onClick={(e) => {
                          e.preventDefault();
                          const elem = orderdOfprocedures.filter((element) => {
                            return element.code === procedure.code;
                          })
                          setListOfprocedures([...listOfprocedures, ...elem])
                          setorderdOfprocedures(
                            orderdOfprocedures.filter((element) => {
                              return element.code !== procedure.code;
                            })
                          );
                        }}
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Route>
    </Switch>
  );
};

export default AddProcedure;
