import React, { useState } from "react";
import { Tabs, Tab, Card, Button, Table } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './AddProcedure.scss'
let proce = [
  {
    type: "lab",
    name: "lab",
    notes: "adasd",
    expected: "5min",
    price: "5",
    code: "1",
  },

  {
    type: "radio",
    name: "radiology",
    notes: "adasd",
    expected: "5min",
    price: "5",
    code: "2",
  },
  {
    type: "drug",
    name: "pharmacy",
    notes: "adasd",
    expected: "5min",
    price: "5",
    code: "3",
  },

  {
    type: "therapy",
    name: "therapy",
    notes: "adasd",
    expected: "5min",
    price: "5",
    code: "4",
  },
  {
    type: "lab",
    name: "lab",
    notes: "adasd",
    expected: "5min",
    price: "5",
    code: "5",
  },
  {
    type: "lab",
    name: "lab",
    notes: "adasd",
    expected: "5min",
    price: "5",
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
      // <div className="procedures-dashboard">
      <>{procedures.map(card)}</>
      // </div>
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
          <Card.Text>expected : {element.expected}</Card.Text>
          <Card.Text>price : {element.price}</Card.Text>

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
                <th>name</th>
                <th>Notes</th>
                <th>Department Name</th>
                <th>price</th>
                <th>delete</th>
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
