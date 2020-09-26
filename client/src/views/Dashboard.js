/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">Name of course</CardTitle>
                  <p className="card-category"><h6>name of university</h6></p>
                </CardHeader>
                <CardBody>
                <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h5 className="title">Professor name</h5>
                    </a>
                  </div>
                  <p><h5>
                    dgsdvfuyagfbiaqefhiuqebgiu  ubfqpeibfpeuqfbqpuf9pq fb
                    </h5>
                  </p>
                </CardBody>
                
              </Card>
                </CardBody>
                
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">module 1 name</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table>
                    <tbody>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>video 1</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>content goes here</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>video 1</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>content goes here</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>video 1</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>content goes here</a></h6></td>
                      </tr>
                      <tr>
                        <td></td>
                      </tr>
                      <tr>
                        <td><h3>Quiz</h3></td>
                        <div className="update ml-auto mr-auto">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                          <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                          >
                            Take Quiz   
                          </Button></a>
                        </div>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">module 2 name</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table>
                    <tbody>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>video 1</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>content goes here</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>video 1</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>content goes here</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>video 1</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>content goes here</a></h6></td>
                      </tr>
                      <tr>
                        <td></td>
                      </tr>
                      <tr>
                        <td><h3>Quiz</h3></td>
                        <div className="update ml-auto mr-auto">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                          <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                          >
                            Take Quiz   
                          </Button></a>
                        </div>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">module 3 name</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table>
                    <tbody>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>video 1</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>content goes here</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>video 1</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>content goes here</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>video 1</a></h6></td>
                      </tr>
                      <tr>
                        <td><h6><a href="#" onClick={(e) => e.preventDefault()}>content goes here</a></h6></td>
                      </tr>
                      <tr>
                        <td></td>
                      </tr>
                      <tr>
                        <td><h3>Quiz</h3></td>
                        <div className="update ml-auto mr-auto">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                          <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                          >
                            Take Quiz   
                          </Button></a>
                        </div>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
        </div>
      </>
    );
  }
}

export default Dashboard;
